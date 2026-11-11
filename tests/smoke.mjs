// Teste de fumaça: percorre os fluxos principais do MEZA no Chromium.
// Uso: node tests/smoke.mjs [arquivo.html]   (padrão: index.html)
import { chromium } from 'playwright';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const alvo = resolve(root, process.argv[2] || 'index.html');
const url = pathToFileURL(alvo).href;

const browser = await chromium.launch();
const erros = [];
let ok = 0;
const passo = async (nome, fn) => { await fn(); ok++; console.log(`ok  ${nome}`); };
const texto = s => s.replace(/ /g, ' ').trim();

try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.on('pageerror', e => erros.push(e.message));
  await page.goto(url);
  const titulo = async () => texto(await page.locator('.done h2').innerText());
  const aba = nome => page.click(`.tab:has-text("${nome}")`);

  await passo('cadastro de voluntário aponta os campos vazios', async () => {
    await page.click('[data-a="start-vol"]');
    await page.click('[data-a="vol-next"]');
    assert.equal(await page.locator('.msg-err').count(), 6);
  });

  await passo('cadastro de voluntário conclui', async () => {
    await page.click('[data-a="fill-vol1"]');
    await page.click('[data-a="vol-next"]');
    await page.click('[data-a="fill-vol2"]');
    await page.click('[data-a="vol-finish"]');
    assert.equal(await titulo(), 'Cadastro finalizado com sucesso!');
    await page.click('[data-a="vol-explore"]');
  });

  await passo('inscrição com posto e turno', async () => {
    await aba('Entregas');
    await page.click('.ev >> nth=0');
    await page.click('.opt:not([disabled]) >> nth=0');
    await page.click('.chip[data-p$=".turno"] >> nth=0');
    await page.click('[data-a="inscrever"]');
    assert.equal(await titulo(), 'Vaga reservada!');
  });

  await passo('doação em dinheiro por Pix', async () => {
    await page.click('.foot [data-r="v-home"]');
    await aba('Doar');
    await page.click('.big-opt.y');
    for (const k of '2500') await page.click(`.key[data-k="${k}"]`);
    assert.equal(texto(await page.locator('.amount').innerText()), 'R$ 25,00');
    await page.click('.foot .btn-primary'); // Valor -> Métodos
    await page.click('.foot .btn-primary'); // Métodos -> Checkout (Pix)
    assert.equal(await page.locator('.qr svg').count(), 1);
    await page.click('[data-a="don-confirm"]');
    assert.equal(await titulo(), 'Obrigado pela doação!');
  });

  await passo('doação de alimentos', async () => {
    await page.click('.foot [data-r="v-doar"]');
    await page.click('.big-opt.t');
    await page.click('[data-a="qty"][data-d="1"] >> nth=1');
    await page.click('.foot .btn-primary');
    await page.click('[data-a="food-confirm"]');
    assert.equal(await titulo(), 'Doação combinada!');
  });

  await passo('organização publica uma entrega', async () => {
    await page.click('.foot [data-r="v-home"]');
    await aba('Perfil');
    await page.click('.content [data-a="role"][data-r="org"]');
    await aba('Publicar');
    await page.click('[data-a="ev-publish"]');
    assert.ok(await page.locator('.msg-err').count() > 0, 'deveria apontar campos obrigatórios');
    await page.click('[data-a="fill-ev"]');
    await page.click('[data-a="ev-publish"]');
    assert.match(await page.locator('#toast').innerText(), /Entrega publicada/);
  });

  await passo('administrador aprova os cadastros pendentes', async () => {
    await page.click('.bar [data-a="back"]');
    await aba('Perfil');
    await page.click('.content [data-a="role"][data-r="admin"]');
    await aba('Validações');
    await page.click('[data-a="approve"][data-id="me"]');
    await page.click('[data-a="valtab"][data-v="org"]');
    await page.click('[data-a="approve"][data-id="o4"]');
    assert.equal(await page.locator('[data-a="approve"]').count(), 0);
  });

  await passo('voluntário vê a entrega nova e a do parceiro aprovado', async () => {
    await aba('Perfil');
    await page.click('.content [data-a="role"][data-r="vol"]');
    await aba('Entregas');
    assert.equal(await page.locator('.ev').count(), 7);
  });

  await passo('sem rolagem horizontal no celular', async () => {
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  });

  await passo('nada transborda numa tela de 320px', async () => {
    const mini = await browser.newPage({ viewport: { width: 320, height: 640 } });
    mini.on('pageerror', e => erros.push(e.message));
    await mini.goto(url);
    await mini.click('.content [data-a="role"][data-r="vol"]');
    await mini.click('.tab:has-text("Perfil")');
    const corta = sel => mini.locator(sel).evaluate(el => el.scrollWidth > el.clientWidth + 1);
    assert.equal(await corta('.content .seg'), false, 'o seletor "Ver o app como" não deveria cortar');
    await mini.click('.tab:has-text("Doar")');
    await mini.click('.big-opt.y');
    const linhas = await mini.locator('.amounts .chip').evaluateAll(els => new Set(els.map(e => e.offsetTop)).size);
    assert.equal(linhas, 1, 'os valores sugeridos deveriam caber numa linha');
    assert.equal(await mini.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await mini.close();
  });

  await passo('painel do computador e tema escuro carregam', async () => {
    const desk = await browser.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: 'dark' });
    desk.on('pageerror', e => erros.push(e.message));
    await desk.goto(url);
    assert.ok(await desk.locator('.guide .story').count() >= 4);
    assert.equal(await desk.locator('.guide [data-a="fullscreen"]').count(), 1);
    const fundo = () => desk.evaluate(() => getComputedStyle(document.body).backgroundColor);
    assert.equal(await fundo(), 'rgb(6, 20, 13)');
    await desk.click('.guide [data-a="theme"]');
    assert.equal(await fundo(), 'rgb(245, 241, 231)');
    assert.match(await desk.locator('.guide [data-a="theme"]').innerText(), /escuro/);
    await desk.reload();
    assert.equal(await fundo(), 'rgb(245, 241, 231)', 'a escolha do tema deveria sobreviver à recarga');
    await desk.click('.guide [data-a="theme"]');
    assert.equal(await fundo(), 'rgb(6, 20, 13)');
    await desk.close();
  });

  assert.deepEqual(erros, [], 'a página teve erros de JavaScript');
  console.log(`\n${ok} verificações passaram em ${alvo}`);
} catch (e) {
  console.error(`\nFALHOU: ${e.message}`);
  if (erros.length) console.error('Erros de JavaScript na página:', erros);
  process.exitCode = 1;
} finally {
  await browser.close();
}
