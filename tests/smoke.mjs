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
    assert.match(await page.locator('.err-sum').innerText(), /Revise os 6 campos/);
    await page.click('[data-a="locate"]');
    assert.ok((await page.inputValue('#f-volDraft-endereco')).length > 8, 'o botão de localização deveria preencher o endereço');
    assert.equal(await page.locator('.msg-err').count(), 5);
  });

  await passo('cadastro de voluntário conclui', async () => {
    await page.click('[data-a="fill-vol1"]');
    await page.click('[data-a="vol-next"]');
    await page.click('[data-a="fill-vol2"]');
    assert.equal(await page.locator('.rrow[aria-checked="true"]').count(), 1);
    assert.equal(await page.locator('.crow[aria-checked="true"]').count(), 2);
    await page.click('[data-a="vol-finish"]');
    assert.equal(await titulo(), 'Cadastro enviado!');
    await page.click('[data-a="vol-explore"]');
  });

  await passo('inscrição com posto e turno', async () => {
    await aba('Ações');
    await page.click('.evr >> nth=0');
    assert.ok(await page.locator('[data-a="inscrever"]').isDisabled(), 'sem posto e turno o botão deveria ficar desabilitado');
    await page.click('.rrow[data-p$=".posto"]:not([disabled]) >> nth=0');
    await page.click('.rrow[data-p$=".turno"] >> nth=0');
    assert.match(await page.locator('.foot .hint').innerText(), /·/, 'o rodapé deveria resumir posto e turno escolhidos');
    await page.click('[data-a="flip"]');
    assert.equal(await page.locator('.crow[aria-checked="true"]').count(), 1);
    await page.click('[data-a="inscrever"]');
    assert.equal(await titulo(), 'Vaga reservada!');
    const [baixado] = await Promise.all([page.waitForEvent('download'), page.click('[data-a="ics"]')]);
    assert.match(baixado.suggestedFilename(), /.ics$/);
  });

  await passo('doação em dinheiro por Pix', async () => {
    await page.click('.foot [data-r="v-home"]');
    await aba('Doar');
    await page.click('.path[data-a="don-start"]');
    assert.ok(await page.locator('.foot .btn-primary').isDisabled(), 'sem valor o Continuar deveria ficar desabilitado');
    for (const k of '2500') await page.click(`.pad [data-k="${k}"]`);
    assert.equal(texto(await page.locator('.amt-v .num').innerText()), '25,00');
    await page.click('.foot .btn-primary'); // Valor -> Métodos
    await page.click('.foot .btn-primary'); // Métodos -> Checkout (Pix)
    assert.equal(await page.locator('.qr svg').count(), 1);
    await page.click('[data-a="don-confirm"]');
    assert.equal(await titulo(), 'Obrigado pela doação!');
  });

  await passo('doação com cartão valida os dados', async () => {
    await page.click('.foot [data-r="v-doar"]');
    await page.click('.path[data-a="don-start"]');
    await page.click('.seg-amt [data-v="5000"]');
    await page.click('.foot .btn-primary');
    await page.click('.rrow[data-v="cartao"]');
    await page.click('.foot .btn-primary');
    await page.fill('#f-don-card-val', '01/20');
    await page.click('[data-a="don-confirm"]');
    assert.equal(await page.locator('.msg-err').count(), 1, 'validade vencida deveria ser apontada');
    await page.fill('#f-don-card-val', '12/30');
    await page.click('[data-a="don-confirm"]');
    assert.equal(await titulo(), 'Obrigado pela doação!');
  });

  await passo('doação de alimentos', async () => {
    await page.click('.foot [data-r="v-doar"]');
    await page.click('.path[data-a="food-start"]');
    await page.click('[data-a="qty"][data-d="1"] >> nth=1');
    await page.click('.foot .btn-primary');
    await page.click('[data-a="food-confirm"]');
    assert.equal(await titulo(), 'Doação combinada!');
  });

  await passo('organização publica uma entrega', async () => {
    await page.click('.foot [data-r="v-home"]');
    await aba('Perfil');
    assert.ok(await page.locator('.content .evr').count() >= 1, 'a agenda do perfil deveria mostrar a vaga reservada');
    await page.click('.set-r[data-a="ajuda-editar"] >> nth=0');
    await page.click('.crow[data-v="Doar dinheiro"]');
    await page.click('[data-a="ajuda-salvar"]');
    assert.match(await page.locator('.set-r >> nth=0').innerText(), /dinheiro/, 'as formas de ajudar deveriam ser salvas');
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
    await aba('Ações');
    assert.equal(await page.locator('.evr').count(), 7);
    await page.click('.ftab:has-text("Cestas")');
    assert.ok(await page.locator('.evr').count() < 7, 'o filtro Cestas deveria esconder as outras ações');
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
    await mini.click('.path[data-a="don-start"]');
    const linhas = await mini.locator('.seg-amt button').evaluateAll(els => new Set(els.map(e => e.offsetTop)).size);
    assert.equal(linhas, 1, 'os valores sugeridos deveriam caber numa linha');
    assert.equal(await mini.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await mini.close();
  });

  await passo('painel do computador carrega só no tema claro', async () => {
    const desk = await browser.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: 'dark' });
    desk.on('pageerror', e => erros.push(e.message));
    await desk.goto(url);
    assert.ok(await desk.locator('.guide .story').count() >= 4);
    assert.equal(await desk.locator('.guide [data-a="fullscreen"]').count(), 1);
    const proporcao = () => desk.locator('.device').evaluate(el => { const r = el.getBoundingClientRect(); return { k: r.width / r.height, h: r.height, vh: innerHeight }; });
    let p = await proporcao();
    assert.ok(Math.abs(p.k - 390 / 844) < 0.01, `a tela do aparelho deveria ter a proporção de 390×844 (veio ${p.k.toFixed(3)})`);
    await desk.setViewportSize({ width: 1366, height: 700 });
    // o evento de redimensionamento chega depois; espera o aparelho se ajustar (falha se nunca couber)
    await desk.waitForFunction(() => document.querySelector('.device').getBoundingClientRect().bottom <= innerHeight, null, { timeout: 2000 }).catch(() => {});
    p = await proporcao();
    assert.ok(Math.abs(p.k - 390 / 844) < 0.01, 'em janela baixa o aparelho deveria encolher sem achatar');
    assert.ok(p.h < p.vh, 'o aparelho deveria caber na altura da janela');
    await desk.setViewportSize({ width: 1440, height: 900 });
    const fundo = () => desk.evaluate(() => getComputedStyle(document.body).backgroundColor);
    assert.equal(await fundo(), 'rgb(245, 241, 231)', 'o app só tem tema claro, mesmo com o sistema no escuro');
    assert.equal(await desk.locator('[data-a="theme"]').count(), 0, 'não deveria haver botão de tema');
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
