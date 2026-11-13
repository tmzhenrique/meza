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

  await passo('cadastro de organização conclui', async () => {
    const org = await browser.newPage({ viewport: { width: 390, height: 844 } });
    org.on('pageerror', e => erros.push(e.message));
    await org.goto(url);
    await org.click('[data-a="start-org"]');
    await org.click('[data-a="org-submit"]');
    assert.match(await org.locator('.err-sum').innerText(), /para enviar/);
    await org.click('[data-a="fill-org"]');
    await org.click('[data-a="org-submit"]');
    assert.equal(texto(await org.locator('.done h2').innerText()), 'Cadastro enviado!');
    assert.equal(await org.locator('.tl-i').count(), 3);
    await org.click('.mw[data-r="o-novo-evento"]');
    assert.equal(await org.locator('.tab.on').innerText(), 'Publicar');
    await org.close();
  });

  await passo('roteiro agrupa as histórias por prioridade', async () => {
    const r = await browser.newPage({ viewport: { width: 390, height: 844 } });
    r.on('pageerror', e => erros.push(e.message));
    await r.goto(url);
    await r.click('.content [data-a="go"][data-r="roteiro"]');
    assert.equal(await r.locator('.st-grp').count(), 4);
    await r.click('.content [data-a="story"][data-k="s-adm"]');
    assert.ok(await r.locator('.evr').count() >= 5, 'a agenda dos parceiros deveria listar as ações');
    await r.close();
  });

  await passo('inscrição com posto e turno', async () => {
    await aba('Ações');
    await page.click('.evr >> nth=0');
    assert.ok(await page.locator('[data-a="inscrever"]').isDisabled(), 'sem posto e turno o botão deveria ficar desabilitado');
    await page.click('.rrow[data-p$=".posto"]:not([disabled]) >> nth=0');
    await page.click('.rrow[data-p$=".turno"] >> nth=0');
    assert.match(await page.locator('.foot .hint').innerText(), /·/, 'o rodapé deveria resumir posto e turno escolhidos');
    assert.equal(await page.locator('.crow[data-a="food-start"]').count(), 1, 'a ação deveria oferecer "Doar estes itens"');
    await page.click('[data-a="inscrever"]');
    assert.equal(await titulo(), 'Vaga reservada!');
    const [baixado] = await Promise.all([page.waitForEvent('download'), page.click('[data-a="ics"]')]);
    assert.match(baixado.suggestedFilename(), /.ics$/);
  });

  await passo('doação em dinheiro por Pix', async () => {
    await page.click('.foot [data-r="v-home"]');
    await page.click('.next-tog');
    assert.equal(await page.locator('.next .next-link').count(), 0, 'minimizado, o destaque não deveria mostrar o link');
    await page.click('.next-tog');
    assert.equal(await page.locator('.next .next-link').count(), 1, 'maximizado, o destaque deveria voltar a mostrar o link');
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
    const locais = await page.locator('.rrow[data-p="food.entrega"]').evaluateAll(els => els.map(e => e.dataset.v));
    assert.equal(locais[0], 'sede', 'a sede do MEZA deveria vir primeiro');
    assert.ok(locais.length > 1 && locais.slice(1).every(v => v.startsWith('pc')), 'só sede do MEZA e pontos de coleta, sem ações nem sedes de parceiros');
    await page.click('.rrow[data-v="pc1"]');
    await page.click('[data-a="food-confirm"]');
    assert.equal(await titulo(), 'Doação combinada!');
    assert.match(await page.locator('.res-sum').innerText(), /MEZA/, 'sem escolher, a doação vai para o MEZA');
    assert.match(await page.locator('.res-sum').innerText(), /CLN 214/, 'o resumo deveria mostrar o endereço do ponto de coleta');
  });

  await passo('doação para uma ação específica', async () => {
    await page.click('.foot [data-r="v-doar"]');
    await page.click('.path[data-a="don-start"]');
    await page.click('#f-don-dest');
    assert.equal(await page.getAttribute('#f-don-dest', 'aria-expanded'), 'true', 'o menu de destino deveria abrir');
    await page.click('#f-don-dest-list [data-v="e1"]');
    assert.equal(await page.locator('#f-don-dest-list').isHidden(), true, 'o menu deveria fechar depois da escolha');
    assert.match(await page.locator('.field .hint').first().innerText(), /Banco de Alimentos/);
    await page.click('.seg-amt [data-v="1000"]');
    await page.click('.foot .btn-primary');
    assert.match(await page.locator('.pay-sum').innerText(), /para Montagem de cestas/);
    await page.click('.rrow[data-v="dinheiro"]');
    await page.click('.foot .btn-primary');
    assert.equal(await page.locator('.rrow').count(), 0, 'em mãos não há escolha de local');
    assert.match(await page.locator('.content .info').innerText(), /Sede do MEZA/, 'em mãos, a entrega é só na sede do MEZA');
    await page.click('[data-a="don-confirm"]');
    assert.equal(await titulo(), 'Doação combinada!');
    await page.click('.foot [data-r="v-doar"]');
    await page.click('.path[data-a="food-start"]');
    await page.focus('#f-food-dest');
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('role')), 'option', 'a seta deveria abrir o menu e focar uma opção');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#f-food-dest-list').isHidden(), true, 'Esc deveria fechar o menu');
    await page.click('#f-food-dest');
    await page.click('#f-food-dest-list [data-v="e1"]');
    assert.equal(await page.locator('.need-r').count(), 4, 'a lista deveria mostrar só os itens da ação');
    await page.click('[data-a="qty"][data-d="1"] >> nth=0');
    await page.click('.foot .btn-primary');
    await page.click('[data-a="food-confirm"]');
    assert.match(await page.locator('.res-sum').innerText(), /Montagem de cestas/);
  });

  await passo('menu de notificações', async () => {
    await page.click('.foot [data-r="v-home"]');
    assert.ok(await page.locator('.bell .badge-n').isVisible(), 'o sino deveria mostrar quantas notificações são novas');
    await page.click('.bell');
    assert.equal(await page.getAttribute('.bell', 'aria-expanded'), 'true');
    assert.ok(await page.locator('.np-i').count() >= 3, 'o menu deveria listar as notificações');
    assert.match(await page.locator('.notif-pop').innerText(), /Vaga reservada|Sua ação é/, 'deveria avisar da vaga reservada');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('.notif-pop').count(), 0, 'Esc deveria fechar o menu');
    await page.click('.bell');
    await page.click('.content', { position: { x: 10, y: 400 } });
    assert.equal(await page.locator('.notif-pop').count(), 0, 'tocar fora deveria fechar o menu');
    await page.click('.bell');
    await page.click('[data-a="notif-lidas"]');
    assert.equal(await page.locator('.np-i.new').count(), 0, 'todas deveriam ficar lidas');
    assert.equal(await page.locator('.bell .badge-n').count(), 0, 'o sino não deveria mostrar o contador');
    await page.click('.np-i[data-r="v-evento"] >> nth=0');
    assert.equal(await page.locator('.bar h1').innerText(), 'Detalhes da ação', 'a notificação deveria abrir a ação');
    await page.click('[data-a="back"]');
  });

  await passo('organização publica uma ação', async () => {
    await aba('Perfil');
    assert.ok(await page.locator('.content .evr').count() >= 1, 'a agenda do perfil deveria mostrar a vaga reservada');
    await page.click('.set-r[data-a="ajuda-editar"] >> nth=0');
    await page.click('.crow[data-v="Doar dinheiro"]');
    await page.click('[data-a="ajuda-salvar"]');
    assert.match(await page.locator('.set-r >> nth=0').innerText(), /dinheiro/, 'as formas de ajudar deveriam ser salvas');
    await page.click('.content [data-a="role"][data-r="org"]');
    assert.equal(await page.locator('.hstat').count(), 3, 'o painel deveria mostrar os três números');
    assert.ok(await page.locator('.content .evr').count() >= 1, 'o painel deveria listar as próximas ações');
    await page.click('.bell');
    assert.match(await page.locator('.notif-pop').innerText(), /vai levar alimentos/, 'a organização deveria ser avisada dos alimentos a caminho');
    await page.click('.bell');
    await aba('Publicar');
    await page.click('[data-a="ev-publish"]');
    assert.match(await page.locator('.err-sum').innerText(), /para publicar/);
    assert.ok(await page.locator('.msg-err').count() > 0, 'deveria apontar campos obrigatórios');
    await page.click('[data-a="ev-add-posto"]');
    await page.fill('.posto-row >> nth=2 >> input[type=number]', '5');
    assert.match(await page.locator('#ev-total').innerText(), /17 vagas/, 'o total de vagas deveria somar os postos');
    await page.click('[data-a="fill-ev"]');
    await page.click('.ck[data-v="Macarrão"]');
    assert.equal(await page.locator('.ck[aria-checked="true"]').count(), 4);
    await page.click('[data-a="ev-publish"]');
    assert.match(await page.locator('.notice.g').innerText(), /Ação publicada/);
    assert.equal(await page.locator('.posto-r').count(), 3);
  });

  await passo('organização edita o contato', async () => {
    await page.click('.bar [data-a="back"]');
    await aba('Perfil');
    await page.click('[data-a="org-editar"]');
    await page.fill('#f-orgEdit-tel', '');
    await page.click('[data-a="org-salvar"]');
    assert.equal(await page.locator('.msg-err').count(), 1, 'telefone vazio deveria ser apontado');
    await page.fill('#f-orgEdit-tel', '61999990000');
    await page.click('[data-a="org-salvar"]');
    assert.match(await page.locator('.content .info').first().innerText(), /\(61\) 99999-0000/);
  });

  await passo('administrador aprova os cadastros pendentes', async () => {
    await page.click('.content [data-a="role"][data-r="admin"]');
    await aba('Validações');
    await page.click('[data-a="approve"][data-id="me"]');
    assert.match(await page.locator('.val-done').innerText(), /aprovado/);
    await page.click('[data-a="desfazer"][data-id="me"]');
    assert.equal(await page.locator('.val-done').count(), 0, 'Desfazer deveria devolver o cadastro à fila');
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
    await mini.click('.bar [data-a="back"]');
    await mini.click('.tab:has-text("Perfil")');
    await mini.click('.content [data-a="role"][data-r="org"]');
    for (const t of ['Painel', 'Publicar', 'Perfil']) {
      await mini.click(`.tab:has-text("${t}")`);
      assert.equal(await mini.locator('.scroll').evaluate(el => el.scrollWidth > el.clientWidth + 1), false, `a aba ${t} da organização não deveria transbordar`);
    }
    await mini.close();
  });

  await passo('painel do computador carrega só no tema claro', async () => {
    const desk = await browser.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: 'dark' });
    desk.on('pageerror', e => erros.push(e.message));
    await desk.goto(url);
    assert.equal(await desk.locator('.guide .st-mini').count(), 8);
    await desk.click('.guide [data-a="role"][data-r="admin"]');
    assert.match(await desk.locator('.guide').innerText(), /Tela atual: Agenda dos parceiros/);
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
