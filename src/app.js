(() => {
'use strict';

/* ================= ícones ================= */
const I = {
  home:'<path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9v11h13V9"/><path d="M10 20v-5.5h4V20"/>',
  calendar:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 20.5c1.4-4 4.5-6 8-6s6.6 2 8 6"/>',
  userplus:'<circle cx="10" cy="8" r="4"/><path d="M3 20.5c1.3-3.8 4-5.8 7-5.8 1.6 0 3 .5 4.2 1.4"/><path d="M18 14v6M15 17h6"/>',
  org:'<path d="M4 21V8.5L12 3l8 5.5V21"/><path d="M2.5 21h19"/><path d="M12 17.5s-3.3-1.9-3.3-4.3A1.9 1.9 0 0 1 12 12a1.9 1.9 0 0 1 3.3 1.2c0 2.4-3.3 4.3-3.3 4.3z"/>',
  bread:'<path d="M6 11.6A3.6 3.6 0 0 1 7.2 4.5h9.6A3.6 3.6 0 0 1 18 11.6V20H6z"/><path d="M9.5 8.5l1 1.5M13.5 8l1 1.5"/>',
  coins:'<ellipse cx="12" cy="6" rx="7" ry="2.8"/><path d="M5 6v5.5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8V6"/><path d="M5 11.5V17c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5.5"/>',
  qr:'<rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.2"/><path d="M14 14h3v3M20.5 14v6.5h-3.5M14 20.5h.01"/>',
  card:'<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19M6.5 15h4"/>',
  cash:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  left:'<path d="m15 5-7 7 7 7"/>',
  right:'<path d="m9 5 7 7-7 7"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c1-3.5 3.6-5.5 6.5-5.5s5.5 2 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c1.7.7 3 2.4 3.5 5.2"/>',
  shield:'<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>',
  grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/>',
  copy:'<rect x="8.5" y="8.5" width="12" height="12" rx="2"/><path d="M15.5 8.5V5.5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/>',
  back:'<path d="M9 5h11a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 20 19H9l-6-7z"/><path d="m12.5 9.5 5 5M17.5 9.5l-5 5"/>',
  box:'<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/>',
  info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',
  refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4.5V11h-6.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  megaphone:'<path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  book:'<path d="M5 4.5h10.5A3.5 3.5 0 0 1 19 8v12.5H8.5A3.5 3.5 0 0 1 5 17z"/><path d="M5 17a3.5 3.5 0 0 1 3.5-3.5H19"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
  phone:'<path d="M5.5 4h3l1.8 4.5-2.2 1.4a11 11 0 0 0 6 6l1.4-2.2L20 15.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4 5.6 1.5 1.5 0 0 1 5.5 4z"/>',
  chevdown:'<path d="m6 9 6 6 6-6"/>',
  expand:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  shrink:'<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>',
  doc:'<path d="M6.5 3.5h7L18 8v12.5H6.5z"/><path d="M13 3.5V8.5h5M9.5 13h5M9.5 16.5h5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'
};
const icon = (n, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n] || ''}</svg>`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ================= datas e valores ================= */
const HOJE = (() => { const d = new Date(); d.setHours(0,0,0,0); return d; })();
const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const emDias = n => { const d = new Date(HOJE); d.setDate(d.getDate()+n); return iso(d); };
const toDate = s => { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); };
const diff = s => Math.round((toDate(s) - HOJE) / 86400000);
const MES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const MESL = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const SEM = ['dom','seg','ter','qua','qui','sex','sáb'];
const SEML = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const fmtCurta = s => { const d = toDate(s); return `${SEM[d.getDay()]}, ${d.getDate()} ${MES[d.getMonth()]}`; };
const fmtLonga = s => { const d = toDate(s); return `${SEML[d.getDay()]}, ${d.getDate()} de ${MESL[d.getMonth()]}`; };
const rel = s => { const n = diff(s); return n === 0 ? 'hoje' : n === 1 ? 'amanhã' : n < 0 ? `há ${-n} dias` : `em ${n} dias`; };
const brl = c => (c/100).toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
const toMin = t => { const [h,m] = t.split(':').map(Number); return h*60 + m; };
const fromMin = m => `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
const turnosDe = (a, b) => {
  const x = toMin(a), y = toMin(b);
  if (y - x >= 180) { const mid = x + Math.round((y - x) / 2 / 30) * 30; return [`${a}–${fromMin(mid)}`, `${fromMin(mid)}–${b}`]; }
  return [`${a}–${b}`];
};
const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const first = n => String(n || '').trim().split(/\s+/)[0] || '';
const initials = n => String(n || '').trim().split(/\s+/).filter(Boolean).slice(0,2).map(p => p[0].toUpperCase()).join('');
const plural = (n, s, p) => `${n} ${n === 1 ? s : p}`;

/* ================= dados de exemplo ================= */
const CAT = {
  arroz:{nome:'Arroz', un:'pacote 5 kg', pl:'pacotes'},
  feijao:{nome:'Feijão', un:'pacote 1 kg', pl:'pacotes'},
  oleo:{nome:'Óleo de soja', un:'garrafa 900 ml', pl:'garrafas'},
  macarrao:{nome:'Macarrão', un:'pacote 500 g', pl:'pacotes'},
  sardinha:{nome:'Sardinha', un:'lata 125 g', pl:'latas'},
  leite:{nome:'Leite integral', un:'caixa 1 L', pl:'caixas'},
  acucar:{nome:'Açúcar', un:'pacote 1 kg', pl:'pacotes'},
  cafe:{nome:'Café', un:'pacote 500 g', pl:'pacotes'},
  biscoito:{nome:'Biscoito cream cracker', un:'pacote 400 g', pl:'pacotes'},
  farinha:{nome:'Farinha de mandioca', un:'pacote 1 kg', pl:'pacotes'}
};
const POOL = ['Ana','Bruno','Carla','Diego','Elaine','Fábio','Gisele','Hugo','Irene','João','Karina','Leandro','Mônica','Nelson','Olívia','Pedro','Raquel','Renato','Sílvia','Tiago','Vânia','Wesley'];
const TIPOS_EV = ['Distribuição de cestas','Preparo de refeições','Coleta de alimentos','Lanche e reforço'];

const seedOrgs = () => [
  {id:'o1', nome:'Banco de Alimentos Asa Sul', tipo:'ONG', endereco:'SGAS 905, Asa Sul – Brasília', resp:'Cláudia Ramos', tel:'(61) 3245-1180', email:'contato@bancoasasul.org', status:'aprovada', sobre:'Recolhe excedentes de mercados e feiras e monta cestas básicas para 180 famílias cadastradas.', distribui:['Cestas básicas'], arrecadado:124000, horario:'Seg a sex, 9h às 17h', cnpj:'08.441.209/0001-37'},
  {id:'o2', nome:'Cozinha Solidária Ceilândia', tipo:'Coletivo comunitário', endereco:'QNM 18, Ceilândia Sul', resp:'Josias Ferreira', tel:'(61) 99812-4407', email:'cozinha.ceilandia@email.com', status:'aprovada', sobre:'Prepara cerca de 400 marmitas por semana para pessoas em situação de rua.', distribui:['Refeições prontas'], arrecadado:86000, horario:'Ter a sáb, 8h às 14h', cnpj:'31.502.778/0001-04'},
  {id:'o3', nome:'Instituto Prato Cheio', tipo:'ONG', endereco:'QS 7, Taguatinga Sul', resp:'Helena Duarte', tel:'(61) 3352-9021', email:'ola@pratocheio.org', status:'aprovada', sobre:'Oferece lanche e reforço escolar para 90 crianças no contraturno.', distribui:['Lanches'], arrecadado:41500, horario:'Seg a sex, 13h às 18h', cnpj:'19.087.334/0001-62'},
  {id:'o4', nome:'Mercado Bom Vizinho', tipo:'Empresa', endereco:'QE 40, Guará II', resp:'Paulo Mendes', tel:'(61) 3381-7765', email:'paulo@bomvizinho.com.br', status:'pendente', sobre:'Rede de três mercados de bairro que quer destinar o hortifrúti excedente.', distribui:['Hortifrúti'], arrecadado:0, horario:'Todos os dias, 7h às 21h', cnpj:'12.345.678/0001-90', enviado:'há 3 dias'}
];
const seedEvents = () => [
  {id:'e1', orgId:'o1', tipo:'Distribuição de cestas', titulo:'Montagem de cestas básicas', data:emDias(2), inicio:'08:00', fim:'12:00', local:'Galpão do Banco de Alimentos', endereco:'SGAS 905, Asa Sul', desc:'Vamos separar e montar 180 cestas para a entrega da semana seguinte. Use sapato fechado; luvas e toucas são fornecidas.', turnos:['08:00–10:00','10:00–12:00'], postos:[{nome:'Recepção de doações',vagas:4,inscritos:2},{nome:'Triagem e validade',vagas:6,inscritos:5},{nome:'Montagem das cestas',vagas:10,inscritos:6}], itens:['arroz','feijao','oleo','macarrao']},
  {id:'e2', orgId:'o2', tipo:'Preparo de refeições', titulo:'Preparo de marmitas', data:emDias(4), inicio:'07:30', fim:'13:00', local:'Cozinha comunitária', endereco:'QNM 18, Ceilândia Sul', desc:'Preparo e embalagem de 400 marmitas para a rota da noite. Cabelo preso e sapato fechado; avental e touca ficam por nossa conta.', turnos:['07:30–10:00','10:00–13:00'], postos:[{nome:'Cozinha',vagas:8,inscritos:7},{nome:'Embalagem',vagas:6,inscritos:2},{nome:'Limpeza da cozinha',vagas:3,inscritos:3}], itens:['arroz','feijao','oleo']},
  {id:'e6', orgId:'o4', tipo:'Coleta de alimentos', titulo:'Separação de hortifrúti excedente', data:emDias(6), inicio:'18:00', fim:'20:00', local:'Mercado Bom Vizinho', endereco:'QE 40, Guará II', desc:'Separação de frutas e verduras que saem da gôndola no fim do dia, para entrega no dia seguinte.', turnos:['18:00–20:00'], postos:[{nome:'Separação',vagas:4,inscritos:0},{nome:'Transporte',vagas:2,inscritos:0}], itens:[]},
  {id:'e3', orgId:'o1', tipo:'Distribuição de cestas', titulo:'Entrega de cestas às famílias', data:emDias(9), inicio:'14:00', fim:'17:00', local:'Centro Comunitário da 912 Sul', endereco:'SGAS 912, Asa Sul', desc:'Entrega das cestas montadas na semana anterior para as 180 famílias cadastradas. Haverá café e água para a equipe.', turnos:['14:00–15:30','15:30–17:00'], postos:[{nome:'Organização da fila',vagas:4,inscritos:1},{nome:'Entrega das cestas',vagas:8,inscritos:3},{nome:'Conferência do cadastro',vagas:3,inscritos:0}], itens:['arroz','feijao']},
  {id:'e4', orgId:'o3', tipo:'Lanche e reforço', titulo:'Lanche no contraturno', data:emDias(12), inicio:'15:00', fim:'18:00', local:'Escola Classe 21', endereco:'QSA 21, Taguatinga Sul', desc:'Preparo e servimento do lanche da tarde para 90 crianças, seguido de uma roda de leitura.', turnos:['15:00–16:30','16:30–18:00'], postos:[{nome:'Preparo do lanche',vagas:5,inscritos:2},{nome:'Leitura com as crianças',vagas:6,inscritos:4},{nome:'Organização e limpeza',vagas:3,inscritos:1}], itens:['leite','biscoito','acucar']},
  {id:'e5', orgId:'o2', tipo:'Coleta de alimentos', titulo:'Coleta na feira do Guará', data:emDias(17), inicio:'06:30', fim:'11:00', local:'Feira do Guará', endereco:'QE 25, Guará II', desc:'Conversa com feirantes e recolhimento do hortifrúti que não será vendido. Traga garrafa de água e boné.', turnos:['06:30–09:00','09:00–11:00'], postos:[{nome:'Conversa com feirantes',vagas:6,inscritos:1},{nome:'Carga e transporte',vagas:3,inscritos:1},{nome:'Separação dos alimentos',vagas:5,inscritos:0}], itens:[]}
];
const seedNeeds = () => ({
  o1:[{id:'arroz',meta:150,atual:92,prom:2},{id:'feijao',meta:200,atual:61,prom:0},{id:'oleo',meta:120,atual:104,prom:3},{id:'macarrao',meta:180,atual:75,prom:0},{id:'sardinha',meta:100,atual:22,prom:0}],
  o2:[{id:'arroz',meta:100,atual:40,prom:0},{id:'feijao',meta:120,atual:88,prom:0},{id:'oleo',meta:60,atual:15,prom:0},{id:'cafe',meta:40,atual:12,prom:0}],
  o3:[{id:'leite',meta:160,atual:70,prom:0},{id:'biscoito',meta:90,atual:38,prom:0},{id:'acucar',meta:50,atual:31,prom:0}],
  o4:[]
});
const seedPendVol = () => [
  {id:'pv1', nome:'Rafael Nunes', cidade:'Taguatinga', quando:'há 2 dias', ajudas:['Trabalhar em eventos'], freq:'Toda semana', motivacao:'Minha família recebeu cestas quando eu era criança e quero retribuir.', exp:'Nunca fiz, será a primeira vez.', status:'pendente'},
  {id:'pv2', nome:'Júlia Andrade', cidade:'Asa Norte', quando:'ontem', ajudas:['Doar alimentos','Trabalhar em eventos'], freq:'Uma vez por mês', motivacao:'Quero usar meus sábados para algo que faça diferença.', exp:'Mutirões de arrecadação na faculdade.', status:'pendente'}
];
const DEMO_USER = {nome:'Marina Costa', email:'marina.costa@email.com', telefone:'(61) 99234-5678', genero:'Feminino', nascimento:'1998-03-14', endereco:'SQS 308, Asa Sul – Brasília', exp:'Ajudei na campanha do agasalho da faculdade.', motivacao:'Quero ajudar de perto quem passa fome na minha cidade.', freq:'A cada 15 dias', ajudas:['Trabalhar em eventos','Doar alimentos'], status:'aprovado'};
const blankVol = () => ({nome:'', email:'', telefone:'', genero:'', nascimento:'', endereco:'', exp:'', motivacao:'', freq:'', ajudas:[]});
const blankOrg = () => ({nome:'', cnpj:'', tipo:'', resp:'', email:'', tel:'', endereco:'', sobre:'', distribui:[]});

const initialState = () => ({
  role:null, route:'welcome', params:{}, stack:[], enter:true,
  user:null, myOrgId:null,
  volDraft:blankVol(), orgDraft:blankOrg(), evDraft:null,
  errors:{}, focusErr:false, confirm:null,
  orgs:seedOrgs(), events:seedEvents(), needs:seedNeeds(),
  inscricoes:[], doacoes:[],
  promessas:[{id:'p0', orgId:'o1', itens:{arroz:2, oleo:3}, entrega:{tipo:'evento', eventId:'e1'}, nome:'Leandro P.'}],
  pendVol:seedPendVol(),
  don:{orgId:'o2', cents:0, metodo:'pix', eventId:null},
  food:{orgId:'o1', qty:{}, entrega:null},
  sel:{}, filtro:'Todas', afiltro:'todos', valTab:'vol'
});
let S = initialState();

/* ================= consultas ================= */
const orgOf = id => S.orgs.find(o => o.id === id);
const evOf = id => S.events.find(e => e.id === id);
const myOrg = () => orgOf(S.myOrgId);
const byDate = (a, b) => (a.data + a.inicio).localeCompare(b.data + b.inicio);
const futuros = () => S.events.filter(e => diff(e.data) >= 0).sort(byDate);
const eventosVoluntario = () => futuros().filter(e => orgOf(e.orgId)?.status === 'aprovada');
const vagasLivres = e => e.postos.reduce((s, p) => s + Math.max(0, p.vagas - p.inscritos), 0);
const inscritosTotal = e => e.postos.reduce((s, p) => s + p.inscritos, 0);
const vagasTotal = e => e.postos.reduce((s, p) => s + p.vagas, 0);
const minhaInsc = id => S.inscricoes.find(i => i.eventId === id);
const orgsComNecessidade = () => S.orgs.filter(o => o.status === 'aprovada' && (S.needs[o.id] || []).length);
const needOf = (orgId, itemId) => (S.needs[orgId] || []).find(n => n.id === itemId);
const pendentesVol = () => S.pendVol.filter(v => v.status === 'pendente');
const pendentesOrg = () => S.orgs.filter(o => o.status === 'pendente');
const getPath = p => p.split('.').reduce((o, k) => (o == null ? o : o[k]), S);
const setPath = (p, v) => { const ks = p.split('.'); let o = S; for (let i = 0; i < ks.length - 1; i++) o = o[ks[i]]; o[ks[ks.length - 1]] = v; };

/* ================= componentes ================= */
const dateBlock = s => { const d = toDate(s); return `<span class="dateb" aria-hidden="true"><span class="d">${d.getDate()}</span><span class="m">${MES[d.getMonth()]}</span><span class="w">${SEM[d.getDay()]}</span></span>`; };

function vagasBadge(e) {
  if (minhaInsc(e.id)) return `<span class="badge y">${icon('check',14)} Você está inscrito</span>`;
  const l = vagasLivres(e);
  return l === 0 ? `<span class="badge n">Lotado</span>` : `<span class="badge">${plural(l,'vaga livre','vagas livres')}</span>`;
}
function eventCard(e, route, extra = '') {
  const o = orgOf(e.orgId);
  return `<button class="card tap ev" data-a="go" data-r="${route}" data-id="${e.id}">
    ${dateBlock(e.data)}
    <span class="ev-b">
      <span class="ev-org">${esc(o.nome)}</span>
      <span class="ev-t">${esc(e.titulo)}</span>
      <span class="meta"><span>${icon('clock',15)} ${e.inicio}–${e.fim}</span><span>${icon('pin',15)} ${esc(e.endereco)}</span></span>
      <span class="ev-foot">${extra || vagasBadge(e)}</span>
    </span>
  </button>`;
}
function prog(a, max, b = 0, cls = '') {
  const pa = Math.min(100, (a / max) * 100), pb = Math.min(100 - pa, (b / max) * 100);
  return `<span class="prog ${cls}" role="img" aria-label="${a} de ${max}"><i style="width:${pa}%"></i>${b ? `<i class="p2" style="width:${pb}%"></i>` : ''}</span>`;
}
function errMsg(k) { return S.errors[k] ? `<span class="msg-err">${S.errors[k]}</span>` : ''; }
function field(o) {
  const v = getPath(o.bind) ?? ''; const k = o.key || o.bind.split('.').pop(); const id = 'f-' + o.bind.replace(/\./g, '-');
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <label for="${id}">${o.label}</label>
    <div class="inp">${o.icon ? icon(o.icon, 19) : ''}<input id="${id}" type="${o.type || 'text'}" data-bind="${o.bind}" value="${esc(v)}" placeholder="${esc(o.ph || '')}"${o.mask ? ` data-mask="${o.mask}"` : ''}${o.auto ? ` autocomplete="${o.auto}"` : ''}${o.mode ? ` inputmode="${o.mode}"` : ''}${o.min ? ` min="${o.min}"` : ''}${o.max ? ` max="${o.max}"` : ''}${o.rer ? ' data-rerender="1"' : ''}></div>
    ${o.hint ? `<span class="hint">${o.hint}</span>` : ''}${errMsg(k)}
  </div>`;
}
function selectField(o) {
  const v = getPath(o.bind) ?? ''; const k = o.key || o.bind.split('.').pop(); const id = 'f-' + o.bind.replace(/\./g, '-');
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <label for="${id}">${o.label}</label>
    <div class="inp">${o.icon ? icon(o.icon, 19) : ''}<select id="${id}" data-bind="${o.bind}"${o.rer ? ' data-rerender="1"' : ''}>
      ${o.ph ? `<option value="" ${v === '' ? 'selected' : ''} disabled>${o.ph}</option>` : ''}
      ${o.options.map(op => { const [val, lab] = Array.isArray(op) ? op : [op, op]; return `<option value="${esc(val)}" ${val === v ? 'selected' : ''}>${esc(lab)}</option>`; }).join('')}
    </select><span class="caret">${icon('chevdown',18)}</span></div>${errMsg(k)}
  </div>`;
}
function taField(o) {
  const v = getPath(o.bind) ?? ''; const k = o.key || o.bind.split('.').pop(); const id = 'f-' + o.bind.replace(/\./g, '-');
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <label for="${id}">${o.label}</label>
    <textarea class="ta" id="${id}" data-bind="${o.bind}" rows="${o.rows || 3}" placeholder="${esc(o.ph || '')}">${esc(v)}</textarea>
    ${o.hint ? `<span class="hint">${o.hint}</span>` : ''}${errMsg(k)}
  </div>`;
}
function chipsField(o) {
  const v = getPath(o.path); const k = o.key || o.path.split('.').pop();
  const on = x => o.multi ? (v || []).includes(x) : v === x;
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <span class="lbl" id="lbl-${k}">${o.label}</span>
    <div class="chips" role="group" aria-labelledby="lbl-${k}">
      ${o.options.map(x => `<button class="chip" aria-pressed="${on(x)}" data-a="${o.multi ? 'toggle' : 'pick'}" data-p="${o.path}" data-v="${esc(x)}" data-k="${k}">${on(x) ? icon('check',15) : ''}${esc(x)}</button>`).join('')}
    </div>
    ${o.hint ? `<span class="hint">${o.hint}</span>` : ''}${errMsg(k)}
  </div>`;
}
function optCard({ checked, action, data = '', ic, title, sub, disabled }) {
  return `<button class="opt${ic ? '' : ' noic'}" role="radio" aria-checked="${!!checked}" data-a="${action}" ${data}${disabled ? ' disabled' : ''}>
    ${ic ? `<span class="ic">${icon(ic,22)}</span>` : ''}<span><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span><span class="radio"></span>
  </button>`;
}
function seal() { return `<span class="seal">${icon('check',44)}</span>`; }
function qrSvg(seed) {
  const N = 25; let st = hash(seed) || 1;
  const rnd = () => { st ^= st << 13; st >>>= 0; st ^= st >>> 17; st ^= st << 5; st >>>= 0; return st / 4294967296; };
  const inF = (x, y) => (x < 8 && y < 8) || (x >= N - 8 && y < 8) || (x < 8 && y >= N - 8);
  let r = '';
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!inF(x, y) && rnd() < 0.48) r += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
  const f = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7" fill="#111"/><rect x="${x+1}" y="${y+1}" width="5" height="5" fill="#FFF"/><rect x="${x+2}" y="${y+2}" width="3" height="3" fill="#111"/>`;
  return `<svg viewBox="0 0 ${N} ${N}" width="100%" shape-rendering="crispEdges" role="img" aria-label="QR Code ilustrativo"><rect width="${N}" height="${N}" fill="#FFF"/><g fill="#111">${r}</g>${f(0,0)}${f(N-7,0)}${f(0,N-7)}</svg>`;
}
const pixCode = (cents, org) => `00020126360014BR.GOV.BCB.PIX0114MEZADEMONSTRA520400005303986540${String((cents/100).toFixed(2)).length}${(cents/100).toFixed(2)}5802BR5909MEZA DEMO6008BRASILIA62070503${hash(org.id) % 1000}6304DEMO`;

/* ================= histórias (MoSCoW do grupo) ================= */
const STORIES = [
  {m:'M', g:true, t:'Cadastro de voluntário', s:'Como pessoa que quer ajudar, quero me cadastrar com meus dados e dizer como desejo ajudar.', k:'s-vol'},
  {m:'M', t:'Publicar a próxima entrega', s:'Como dono de uma organização, quero informar aos voluntários quando será a próxima entrega.', k:'s-pub'},
  {m:'M', g:true, t:'Agenda dos parceiros', s:'Como administrador do programa social, quero ver quando serão os próximos eventos dos parceiros.', k:'s-adm'},
  {m:'S', t:'Cadastro de organização', s:'Como dono de uma organização que doa alimentos, quero me cadastrar para me tornar parceiro.', k:'s-org'},
  {m:'S', g:true, t:'Escolher posto e horário', s:'Como voluntário, quero escolher horário, local e posto para ajudar de fato.', k:'s-posto'},
  {m:'S', g:true, t:'Doação em dinheiro', s:'Como voluntário, quero doar dinheiro por Pix, cartão ou em espécie.', k:'s-din'},
  {m:'C', t:'Doação de alimentos', s:'Como voluntário, quero escolher qual alimento doar, e quanto, direto para a organização.', k:'s-ali'},
  {m:'W', t:'Programa unificado', s:'Como dono do programa social, quero unir todo o programa de doação sem depender de outras organizações.', k:null}
];
const MOS_LABEL = {M:'Must have', S:'Should have', C:'Could have', W:'Won’t have agora'};
function storiesHtml() {
  return `<div class="stories">${STORIES.map(st => `<div class="story"><span class="mos ${st.m}" title="${MOS_LABEL[st.m]}">${st.m}</span><span><b>${st.t}</b><p>${st.s}</p>${st.g ? '' : `<span class="src">Acrescentada no protótipo, prioridade a confirmar</span>`}${st.k ? `<button class="link start" data-a="story" data-k="${st.k}">Abrir no app</button>` : `<p>Fora do escopo desta versão.</p>`}</span></div>`).join('')}</div>`;
}
function roleSeg() {
  const cur = S.role;
  return `<div class="seg" role="group" aria-label="Ver o app como">
    ${[['vol','Voluntário'],['org','Organização'],['admin','Administrador']].map(([r, l]) => `<button data-a="role" data-r="${r}" aria-pressed="${cur === r}">${l}</button>`).join('')}
  </div>`;
}
function protoBlock() {
  return `<section class="sec">
    <h2 class="h-md">Protótipo</h2>
    <div class="stack-sm"><span class="label">Ver o app como</span>${roleSeg()}</div>
    <div class="card rows">
      <button class="row-link" data-a="go" data-r="roteiro">${icon('book',20)}<span>Roteiro das histórias de usuário</span>${icon('right',18)}</button>
      <button class="row-link" data-a="theme">${icon(isDark() ? 'sun' : 'moon',20)}<span>${isDark() ? 'Usar tema claro' : 'Usar tema escuro'}</span></button>
      <button class="row-link danger" data-a="reset">${icon('refresh',20)}<span>${S.confirm === 'reset' ? 'Toque de novo para apagar tudo' : 'Recomeçar a demonstração'}</span></button>
    </div>
    <p class="hint">Dados de exemplo. Nenhum pagamento é processado e nada é enviado.</p>
  </section>`;
}

/* ================= telas ================= */
const SCREENS = {};

SCREENS.welcome = () => ({
  top:`<section class="hero welcome-hero gut">
      <div class="logo" aria-label="meza">meza</div>
      <p class="slogan">“a mesa é de todos.”</p>
      <p class="values">mobilização • empatia • zelo • alimentação</p>
    </section><div class="gingham" aria-hidden="true"></div>`,
  body:`<div class="sec">
      <div class="head"><h2 class="h-lg">Como você quer participar?</h2><p class="muted">O MEZA conecta quem quer ajudar às organizações que levam comida a quem precisa.</p></div>
      <button class="choice" data-a="start-vol"><span class="ic">${icon('userplus',26)}</span><span><b>Quero me voluntariar</b><small>Doe alimentos, dinheiro ou seu tempo em ações perto de você.</small></span>${icon('right',20)}</button>
      <button class="choice t" data-a="start-org"><span class="ic">${icon('org',26)}</span><span><b>Quero cadastrar minha organização</b><small>Receba voluntários e doações para as entregas da sua ONG ou empresa.</small></span>${icon('right',20)}</button>
    </div>
    <div class="sec">
      <h2 class="h-sm">Explorar sem cadastro</h2>
      <div class="chips">
        <button class="chip" data-a="role" data-r="vol">${icon('user',16)} Voluntário</button>
        <button class="chip" data-a="role" data-r="org">${icon('org',16)} Organização</button>
        <button class="chip" data-a="role" data-r="admin">${icon('shield',16)} Administrador</button>
      </div>
      <button class="link start" data-a="go" data-r="roteiro">Ver o roteiro das histórias de usuário</button>
    </div>`
});

SCREENS['vol-cad-1'] = () => ({
  title:'Cadastro de voluntário',
  body:`<div class="head"><div class="steps" aria-hidden="true"><i class="on"></i><i></i></div><p class="eyebrow">Etapa 1 de 2</p><h2 class="h-lg">Informações básicas</h2></div>
    ${field({label:'Nome completo', bind:'volDraft.nome', ph:'Digite seu nome', icon:'user', auto:'name'})}
    ${field({label:'Endereço de e-mail', bind:'volDraft.email', type:'email', ph:'nome@email.com', icon:'mail', auto:'email', mode:'email'})}
    ${field({label:'Número de telefone', bind:'volDraft.telefone', type:'tel', ph:'(61) 99999-9999', icon:'phone', auto:'tel', mask:'tel', mode:'tel'})}
    ${selectField({label:'Gênero', bind:'volDraft.genero', ph:'Selecione', options:['Feminino','Masculino','Não binário','Prefiro não informar']})}
    ${field({label:'Data de nascimento', bind:'volDraft.nascimento', type:'date', icon:'calendar', max:iso(HOJE)})}
    ${field({label:'Endereço completo', bind:'volDraft.endereco', ph:'Rua, número e bairro', icon:'pin', auto:'street-address'})}
    <button class="link start" data-a="fill-vol1">Preencher com dados de exemplo</button>`,
  foot:`<div class="row"><button class="btn btn-ghost" data-a="back">Voltar</button><button class="btn btn-primary btn-grow" data-a="vol-next">Continuar</button></div>`
});

SCREENS['vol-cad-2'] = () => ({
  title:'Cadastro de voluntário',
  body:`<div class="head"><div class="steps" aria-hidden="true"><i class="on"></i><i class="on"></i></div><p class="eyebrow">Etapa 2 de 2</p><h2 class="h-lg">Sobre o seu voluntariado</h2></div>
    ${taField({label:'Já fez voluntariado antes? Onde?', bind:'volDraft.exp', ph:'Ex.: mutirões na escola, campanha do agasalho…', hint:'Se for a sua primeira vez, conte para a gente.'})}
    ${taField({label:'O que te motivou a se voluntariar?', bind:'volDraft.motivacao', ph:'Conte em poucas palavras'})}
    ${chipsField({label:'Com qual frequência deseja se voluntariar?', path:'volDraft.freq', options:['Toda semana','A cada 15 dias','Uma vez por mês','Quando eu puder']})}
    ${chipsField({label:'Como você quer ajudar?', path:'volDraft.ajudas', multi:true, options:['Trabalhar em eventos','Doar alimentos','Doar dinheiro'], hint:'Escolha uma ou mais opções.'})}
    <button class="link start" data-a="fill-vol2">Preencher com dados de exemplo</button>`,
  foot:`<div class="row"><button class="btn btn-ghost" data-a="back">Voltar</button><button class="btn btn-primary btn-grow" data-a="vol-finish">Finalizar cadastro</button></div>`
});

SCREENS['vol-cad-ok'] = () => ({
  top:`<div class="gingham" aria-hidden="true"></div>`,
  body:`<div class="done">${seal()}<h2 class="h-xl">Cadastro finalizado com sucesso!</h2><p class="muted">Estamos validando seu cadastro e divulgaremos o resultado em até 7 dias.</p></div>
    <div class="notice g">${icon('info',20)}<span><b>Enquanto isso</b><span class="small">Você já pode conhecer as próximas entregas, reservar uma vaga e fazer doações.</span></span></div>`,
  foot:`<button class="btn btn-primary btn-block" data-a="vol-explore">Explorar o MEZA</button>`
});

SCREENS['org-cad'] = () => ({
  title:'Cadastro de organização',
  body:`<div class="stack-6"><h2 class="h-lg">Dados da organização</h2><p class="muted small">Nossa equipe confere as informações antes de liberar o perfil para os voluntários.</p></div>
    ${field({label:'Nome da organização', bind:'orgDraft.nome', ph:'Ex.: Cozinha Solidária do Gama', icon:'org', auto:'organization'})}
    ${field({label:'CNPJ', bind:'orgDraft.cnpj', ph:'00.000.000/0000-00', icon:'doc', mask:'cnpj', mode:'numeric'})}
    ${chipsField({label:'Tipo de organização', path:'orgDraft.tipo', options:['ONG','Empresa','Coletivo comunitário','Outro']})}
    ${field({label:'Nome do responsável', bind:'orgDraft.resp', ph:'Quem responde pela organização', icon:'user', auto:'name'})}
    ${field({label:'E-mail de contato', bind:'orgDraft.email', type:'email', ph:'contato@organizacao.org', icon:'mail', mode:'email'})}
    ${field({label:'Telefone', bind:'orgDraft.tel', type:'tel', ph:'(61) 3333-3333', icon:'phone', mask:'tel', mode:'tel'})}
    ${field({label:'Endereço da sede', bind:'orgDraft.endereco', ph:'Onde os voluntários podem entregar doações', icon:'pin'})}
    ${taField({label:'O que a organização faz e quem atende?', bind:'orgDraft.sobre', ph:'Ex.: servimos 200 refeições por dia para…'})}
    ${chipsField({label:'O que vocês distribuem?', path:'orgDraft.distribui', multi:true, options:['Cestas básicas','Refeições prontas','Lanches','Hortifrúti']})}
    <button class="link start" data-a="fill-org">Preencher com dados de exemplo</button>`,
  foot:`<button class="btn btn-primary btn-block" data-a="org-submit">Enviar cadastro</button>`
});

SCREENS['org-cad-ok'] = () => {
  const o = myOrg();
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    body:`<div class="done">${seal()}<h2 class="h-xl">Cadastro enviado!</h2><p class="muted">Nossa equipe valida os dados da ${esc(o?.nome || 'organização')} em até 7 dias.</p></div>
      <div class="notice">${icon('info',20)}<span><b>Já dá para preparar a próxima entrega</b><span class="small">Os eventos que você publicar aparecem para os voluntários assim que o cadastro for aprovado.</span></span></div>`,
    foot:`<button class="btn btn-primary btn-block" data-a="org-enter">Ir para o painel</button>`
  };
};

/* ---------- voluntário ---------- */
SCREENS['v-home'] = () => {
  const u = S.user; const evs = eventosVoluntario();
  const minhas = S.inscricoes.map(i => ({ i, e: evOf(i.eventId) })).filter(x => x.e && diff(x.e.data) >= 0).sort((a, b) => byDate(a.e, b.e));
  const prox = minhas[0];
  let destaque;
  if (prox) {
    const p = prox.e.postos[prox.i.posto];
    destaque = `<p class="lbl">Sua próxima ação · ${rel(prox.e.data)}</p>${eventCard(prox.e, 'v-evento', `<span class="badge y">${esc(p.nome)} · ${prox.e.turnos[prox.i.turno]}</span>`)}`;
  } else if (evs[0]) {
    destaque = `<p class="lbl">Próxima entrega perto de você · ${rel(evs[0].data)}</p>${eventCard(evs[0], 'v-evento')}`;
  } else destaque = '';
  // item com menor cobertura da meta
  let pior = null;
  orgsComNecessidade().forEach(o => S.needs[o.id].forEach(n => { const r = (n.atual + n.prom) / n.meta; if (!pior || r < pior.r) pior = { o, n, r }; }));
  const necessidade = pior ? (() => { const c = CAT[pior.n.id]; const falta = Math.max(0, pior.n.meta - pior.n.atual - pior.n.prom);
    return `<section class="sec"><h2 class="h-md">Quem mais precisa agora</h2>
      <div class="card stack">
        <div class="need-h"><span><b>${c.nome}</b><small>${c.un}</small><small>${esc(pior.o.nome)}</small></span><span class="badge t">${Math.round(pior.r * 100)}% da meta</span></div>
        ${prog(pior.n.atual, pior.n.meta, pior.n.prom)}
        <div class="row between"><span class="small muted num">Faltam ${falta} ${c.pl}</span><button class="btn btn-ghost btn-sm" data-a="food-start" data-org="${pior.o.id}">Doar ${c.nome.toLowerCase()}</button></div>
      </div></section>`; })() : '';
  return {
    top:`<section class="hero home-hero gut">
      <div class="top"><span class="logo">meza</span><button class="avatar" data-a="tab" data-r="v-perfil" aria-label="Abrir perfil">${initials(u.nome)}</button></div>
      <p class="greet">Olá, ${esc(first(u.nome))}</p>
      ${destaque}
    </section>`,
    body:`${u.status === 'em_validacao' ? `<div class="notice">${icon('info',20)}<span><b>Cadastro em validação</b><span class="small">Divulgamos o resultado em até 7 dias. Você já pode reservar vagas e doar.</span></span></div>` : ''}
      <div class="grid2">
        <button class="quick t" data-a="food-start">${icon('bread',26)}<span><b>Doar alimentos</b><small>Escolha o que levar</small></span></button>
        <button class="quick y" data-a="don-start">${icon('coins',26)}<span><b>Doar dinheiro</b><small>Pix, cartão ou espécie</small></span></button>
      </div>
      ${necessidade}
      <section class="sec"><div class="sec-h"><h2 class="h-md">Próximas entregas</h2><button class="link" data-a="tab" data-r="v-eventos">Ver todas</button></div>
        ${evs.slice(0, 3).map(e => eventCard(e, 'v-evento')).join('') || `<p class="muted">Nenhuma entrega marcada por enquanto.</p>`}
      </section>`,
    tabs:'vol', tabOn:'v-home'
  };
};

SCREENS['v-eventos'] = () => {
  const evs = eventosVoluntario();
  const tipos = ['Todas', ...TIPOS_EV.filter(t => evs.some(e => e.tipo === t))];
  if (!tipos.includes(S.filtro)) S.filtro = 'Todas';
  const lista = evs.filter(e => S.filtro === 'Todas' || e.tipo === S.filtro);
  return {
    title:'Próximas entregas',
    body:`<p class="lede">Ações publicadas pelas organizações parceiras. Escolha uma para ver os postos e horários.</p>
      <div class="chips x" role="group" aria-label="Filtrar por tipo">${tipos.map(t => `<button class="chip" aria-pressed="${S.filtro === t}" data-a="filtro" data-v="${t}">${t}</button>`).join('')}</div>
      <div class="stack">${lista.map(e => eventCard(e, 'v-evento')).join('') || `<p class="muted">Nenhuma entrega deste tipo agora.</p>`}</div>`,
    tabs:'vol', tabOn:'v-eventos'
  };
};

SCREENS['v-evento'] = () => {
  const e = evOf(S.params.id); if (!e) return SCREENS['v-eventos']();
  const o = orgOf(e.orgId); const ins = minhaInsc(e.id);
  S.sel[e.id] = S.sel[e.id] || { posto:null, turno:null };
  const sel = S.sel[e.id];
  const itens = e.itens.length
    ? `<section class="sec"><h2 class="h-md">Itens que a ação precisa</h2><div class="chips">${e.itens.map(i => `<span class="badge t">${CAT[i].nome}</span>`).join('')}</div><button class="link start" data-a="food-start" data-org="${o.id}" data-ev="${e.id}">Levar alguns destes itens</button></section>` : '';
  let escolha, foot;
  if (ins) {
    const p = e.postos[ins.posto];
    const cancel = S.confirm === 'cancel-' + e.id;
    escolha = `<div class="notice g">${icon('check',20)}<span><b>Você está inscrito</b><span class="small">${esc(p.nome)} · turno ${e.turnos[ins.turno]}${S.user.status === 'em_validacao' ? '. A vaga fica reservada até a aprovação do seu cadastro.' : '.'}</span></span></div>`;
    foot = `<button class="btn ${cancel ? 'btn-warn' : 'btn-ghost'} btn-block" data-a="cancel-insc" data-id="${e.id}">${cancel ? 'Confirmar cancelamento' : 'Cancelar inscrição'}</button>`;
  } else {
    const livres = vagasLivres(e);
    escolha = `<section class="sec"><h2 class="h-md">Escolha seu posto</h2>
        <div class="stack-sm" role="radiogroup" aria-label="Posto">
        ${e.postos.map((p, i) => { const l = p.vagas - p.inscritos; return optCard({ checked: sel.posto === i, action:'pick', data:`data-p="sel.${e.id}.posto" data-v="${i}" data-n="1"`, title:esc(p.nome), sub:`${l > 0 ? `${plural(l,'vaga livre','vagas livres')} de ${p.vagas}` : 'Sem vagas'}`, disabled: l <= 0 }); }).join('')}
        </div></section>
      <section class="sec"><h2 class="h-md">Escolha o turno</h2>
        <div class="chips" role="group" aria-label="Turno">${e.turnos.map((t, i) => `<button class="chip" aria-pressed="${sel.turno === i}" data-a="pick" data-p="sel.${e.id}.turno" data-v="${i}" data-n="1">${icon('clock',15)} ${t}</button>`).join('')}</div>
      </section>`;
    const ok = sel.posto !== null && sel.turno !== null;
    foot = livres === 0 ? `<button class="btn btn-primary btn-block" disabled>Ação lotada</button>`
      : `${ok ? '' : `<span class="hint">Escolha um posto e um turno para confirmar.</span>`}<button class="btn btn-primary btn-block" data-a="inscrever" data-id="${e.id}" ${ok ? '' : 'disabled'}>Confirmar inscrição</button>`;
  }
  return {
    title:e.tipo,
    body:`<div class="stack-sm"><p class="eyebrow">${esc(o.nome)}</p><h2 class="h-xl">${esc(e.titulo)}</h2></div>
      <div class="kv">
        ${icon('calendar',18)}<span><b>${fmtLonga(e.data)}</b><small>${cap(rel(e.data))}</small></span>
        ${icon('clock',18)}<span>${e.inicio} às ${e.fim}</span>
        ${icon('pin',18)}<span>${esc(e.local)}${e.endereco !== e.local ? `<small>${esc(e.endereco)}</small>` : ''}</span>
        ${icon('users',18)}<span>${inscritosTotal(e)} de ${vagasTotal(e)} vagas preenchidas</span>
      </div>
      <p>${esc(e.desc)}</p>
      ${escolha}
      ${itens}`,
    foot
  };
};

SCREENS['v-inscricao-ok'] = () => {
  const e = evOf(S.params.id); const ins = minhaInsc(e.id); const p = e.postos[ins.posto];
  const pend = S.user.status === 'em_validacao';
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    body:`<div class="done">${seal()}<h2 class="h-xl">${pend ? 'Vaga reservada!' : 'Inscrição confirmada!'}</h2><p class="muted">${pend ? 'A vaga é confirmada assim que seu cadastro for aprovado. A organização recebe seu nome hoje.' : `A ${esc(orgOf(e.orgId).nome)} já recebeu seu nome. Chegue 15 minutos antes do seu turno.`}</p></div>
      <div class="card stack">
        <h3 class="h-sm">${esc(e.titulo)}</h3>
        <div class="kv">${icon('calendar',18)}<span>${cap(fmtLonga(e.data))}</span>${icon('clock',18)}<span>Turno ${e.turnos[ins.turno]}</span>${icon('users',18)}<span>${esc(p.nome)}</span>${icon('pin',18)}<span>${esc(e.local)}<small>${esc(e.endereco)}</small></span></div>
      </div>`,
    foot:`<div class="row"><button class="btn btn-ghost btn-grow" data-a="tab" data-r="v-home">Início</button><button class="btn btn-primary btn-grow" data-a="tab" data-r="v-perfil">Minha agenda</button></div>`
  };
};

SCREENS['v-doar'] = () => {
  const hist = S.doacoes.slice().reverse().slice(0, 3);
  return {
    title:'Doações e ofertas',
    body:`<div class="stack"><p class="lede">Escolha como você quer ajudar hoje.</p>
      <button class="big-opt t" data-a="food-start"><span class="ic">${icon('bread',28)}</span><span><b>Alimentos</b><small>Veja o que cada organização ainda precisa e escolha a quantidade.</small></span>${icon('right',20)}</button>
      <button class="big-opt y" data-a="don-start"><span class="ic">${icon('coins',28)}</span><span><b>Dinheiro</b><small>Doe por Pix, cartão ou entregue em mãos em um evento.</small></span>${icon('right',20)}</button></div>
      ${hist.length ? `<section class="sec"><h2 class="h-md">Suas últimas doações</h2><div class="card"><div class="list">${hist.map(doacaoLi).join("")}</div></div></section>` : ''}`,
    tabs:'vol', tabOn:'v-doar'
  };
};
function doacaoLi(d) {
  const o = orgOf(d.orgId);
  if (d.tipo === 'alimentos') {
    const tot = Object.values(d.itens).reduce((a, b) => a + b, 0);
    return `<div class="li two"><span class="ic">${icon('bread',20)}</span><span><span class="li-t"><b>${plural(tot,'item','itens')} de alimento</b><span class="badge y">A entregar</span></span><small>${esc(o.nome)} · ${fmtCurta(d.data)}</small></span></div>`;
  }
  const m = { pix:['qr','Pix'], cartao:['card','Cartão'], dinheiro:['cash','Em espécie'] }[d.metodo];
  return `<div class="li two"><span class="ic">${icon(m[0],20)}</span><span><span class="li-t"><b class="num">${brl(d.cents)}</b>${d.metodo === 'dinheiro' ? '<span class="badge y">A entregar</span>' : '<span class="badge">Confirmada</span>'}</span><small>${esc(o.nome)} · ${m[1]} · ${fmtCurta(d.data)}</small></span></div>`;
}

SCREENS['v-valor'] = () => {
  const c = S.don.cents; const orgs = S.orgs.filter(o => o.status === 'aprovada');
  return {
    title:'Valor',
    body:`${selectField({label:'Para qual organização?', bind:'don.orgId', icon:'org', options:orgs.map(o => [o.id, o.nome])})}
      <div class="stack center"><p class="muted small">Valor da doação</p><p class="amount${c ? '' : ' zero'}" aria-live="polite">${brl(c)}</p>
      <div class="amounts" role="group" aria-label="Valores sugeridos">${[1000, 2500, 5000, 10000].map(v => `<button class="chip" aria-pressed="${c === v}" data-a="quick" data-v="${v}">${brl(v).replace(',00','')}</button>`).join('')}</div></div>
      <div class="keys" role="group" aria-label="Teclado numérico">
        ${[1,2,3,4,5,6,7,8,9].map(n => `<button class="key" data-a="key" data-k="${n}">${n}</button>`).join('')}
        <button class="key fn" data-a="key" data-k="c">Limpar</button><button class="key" data-a="key" data-k="0">0</button><button class="key fn" data-a="key" data-k="b" aria-label="Apagar">${icon('back',24)}</button>
      </div>`,
    foot:`${c > 0 && c < 100 ? '<span class="hint">O valor mínimo é R$ 1,00.</span>' : ''}<button class="btn btn-primary btn-block" data-a="go" data-r="v-metodo" ${c >= 100 ? '' : 'disabled'}>Continuar</button>`
  };
};

SCREENS['v-metodo'] = () => {
  const o = orgOf(S.don.orgId); const m = S.don.metodo;
  return {
    title:'Métodos de pagamento',
    body:`<div class="card row between"><span class="stack-xs"><span class="small muted">Doação para ${esc(o.nome)}</span><b class="h-lg num">${brl(S.don.cents)}</b></span><button class="link" data-a="back">Alterar</button></div>
      <div class="stack-sm" role="radiogroup" aria-label="Método de pagamento">
        ${optCard({ checked:m === 'pix', action:'pick', data:'data-p="don.metodo" data-v="pix"', ic:'qr', title:'Pix', sub:'Aprovação na hora, pelo app do seu banco.' })}
        ${optCard({ checked:m === 'cartao', action:'pick', data:'data-p="don.metodo" data-v="cartao"', ic:'card', title:'Cartão', sub:'Crédito ou débito.' })}
        ${optCard({ checked:m === 'dinheiro', action:'pick', data:'data-p="don.metodo" data-v="dinheiro"', ic:'cash', title:'Dinheiro', sub:'Entregue em mãos em um evento da organização.' })}
      </div>`,
    foot:`<button class="btn btn-primary btn-block" data-a="go" data-r="v-checkout">Continuar</button>`
  };
};

SCREENS['v-checkout'] = () => {
  const o = orgOf(S.don.orgId); const c = S.don.cents; const m = S.don.metodo;
  if (m === 'pix') {
    const code = pixCode(c, o);
    return {
      title:'Checkout',
      body:`<div class="head center"><h2 class="h-lg">Instruções para o pagamento</h2><p class="muted">Escaneie o QR Code com o app do seu banco.</p></div>
        <div class="stack center"><div class="qr">${qrSvg(o.id + c)}</div><div class="stack-xs"><p class="amount md">${brl(c)}</p><p class="small muted">Para ${esc(o.nome)}, válido por 30 minutos</p></div></div>
        <div class="stack-sm"><span class="label">Ou use o Pix copia e cola</span><div class="pixcode" id="pixcode">${code}</div><button class="btn btn-ghost btn-sm" data-a="copy-pix">${icon('copy',18)} Copiar código</button></div>
        <p class="hint">Protótipo: o QR Code e o código são ilustrativos e não geram cobrança.</p>`,
      foot:`<button class="btn btn-primary btn-block" data-a="don-confirm">Já fiz o pagamento</button>`
    };
  }
  if (m === 'cartao') {
    return {
      title:'Checkout',
      body:`<div class="head"><h2 class="h-lg">Pagamento com cartão</h2><p class="muted">Doação de <b class="num">${brl(c)}</b> para ${esc(o.nome)}.</p></div>
        <div class="mockcard" aria-label="Cartão de teste"><span class="logo">meza</span><span class="no">•••• •••• •••• 4242</span><span class="row between small"><span>CARTÃO DE TESTE</span><span>12/30</span></span></div>
        <div class="notice">${icon('info',20)}<span><b>Como funciona no app final</b><span class="small">Os dados do cartão são digitados na tela segura do provedor de pagamento, e o MEZA não guarda esses dados. Aqui o pagamento é só simulado.</span></span></div>`,
      foot:`<button class="btn btn-primary btn-block" data-a="don-confirm">Simular pagamento de ${brl(c)}</button>`
    };
  }
  const evs = eventosVoluntario().filter(e => e.orgId === o.id);
  if (S.don.eventId === null || !evs.some(e => e.id === S.don.eventId) && S.don.eventId !== 'sede') S.don.eventId = evs[0]?.id || 'sede';
  return {
    title:'Checkout',
    body:`<div class="head"><h2 class="h-lg">Entrega em mãos</h2><p class="muted">Leve <b class="num">${brl(c)}</b> e entregue à equipe da organização. Você recebe um recibo na hora.</p></div>
      <section class="sec" role="radiogroup" aria-label="Onde entregar"><h2 class="h-md">Onde você vai entregar?</h2>
        ${evs.map(e => optCard({ checked:S.don.eventId === e.id, action:'pick', data:`data-p="don.eventId" data-v="${e.id}"`, ic:'calendar', title:esc(e.titulo), sub:`${fmtCurta(e.data)} · ${e.inicio}–${e.fim} · ${esc(e.local)}` })).join('')}
        ${optCard({ checked:S.don.eventId === 'sede', action:'pick', data:'data-p="don.eventId" data-v="sede"', ic:'org', title:'Na sede da organização', sub:`${esc(o.horario)} · ${esc(o.endereco)}` })}
      </section>`,
    foot:`<button class="btn btn-primary btn-block" data-a="don-confirm">Confirmar doação</button>`
  };
};

SCREENS['v-doacao-ok'] = () => {
  const d = S.doacoes[S.doacoes.length - 1]; const o = orgOf(d.orgId);
  const esp = d.metodo === 'dinheiro';
  const onde = esp ? (d.eventId === 'sede' ? `na sede (${esc(o.endereco)})` : `no evento “${esc(evOf(d.eventId).titulo)}”, ${fmtCurta(evOf(d.eventId).data)}`) : '';
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    body:`<div class="done">${seal()}<h2 class="h-xl">${esp ? 'Doação combinada!' : 'Obrigado pela doação!'}</h2><p class="muted">${esp ? `Entregue ${brl(d.cents)} ${onde}. A equipe confirma o recebimento na hora.` : `${brl(d.cents)} chegam à ${esc(o.nome)} e entram nas compras da próxima entrega.`}</p></div>
      <div class="card"><div class="list">${doacaoLi(d)}</div></div>`,
    foot:`<div class="row"><button class="btn btn-ghost btn-grow" data-a="tab" data-r="v-doar">Doar de novo</button><button class="btn btn-primary btn-grow" data-a="tab" data-r="v-home">Início</button></div>`
  };
};

SCREENS['v-alimentos'] = () => {
  const orgs = orgsComNecessidade();
  if (!orgs.some(o => o.id === S.food.orgId)) S.food.orgId = orgs[0].id;
  const o = orgOf(S.food.orgId); const needs = S.needs[o.id];
  const tot = Object.values(S.food.qty).reduce((a, b) => a + b, 0);
  return {
    title:'Quero doar alimentos',
    body:`<p class="lede">Escolha a organização e o que você vai levar. A lista mostra o que cada uma ainda precisa arrecadar.</p>
      <div class="chips x" role="group" aria-label="Organização">${orgs.map(x => `<button class="chip" aria-pressed="${x.id === o.id}" data-a="food-org" data-v="${x.id}">${esc(x.nome)}</button>`).join('')}</div>
      <p class="small muted">${esc(o.sobre)}</p>
      <div class="card"><div class="list">
        ${needs.map(n => { const c = CAT[n.id]; const q = S.food.qty[n.id] || 0; const falta = Math.max(0, n.meta - n.atual - n.prom);
          return `<div class="need">
            <div class="need-h"><span><b>${c.nome}</b><small>${c.un}</small></span>
              <span class="stepper"><button data-a="qty" data-id="${n.id}" data-d="-1" aria-label="Menos ${c.nome}" ${q ? '' : 'disabled'}>${icon('minus',18)}</button><output aria-live="polite">${q}</output><button data-a="qty" data-id="${n.id}" data-d="1" aria-label="Mais ${c.nome}">${icon('plus',18)}</button></span></div>
            ${prog(n.atual, n.meta, n.prom + q)}
            <small class="num">${n.atual} arrecadados${n.prom ? ` · ${n.prom} a caminho` : ''} · faltam ${falta} ${c.pl}</small>
          </div>`; }).join('')}
      </div></div>`,
    foot:`<button class="btn btn-primary btn-block" data-a="go" data-r="v-alimentos-entrega" ${tot ? '' : 'disabled'}>${tot ? `Continuar com ${plural(tot,'item','itens')}` : 'Escolha ao menos um item'}</button>`
  };
};

SCREENS['v-alimentos-entrega'] = () => {
  const o = orgOf(S.food.orgId);
  const evs = eventosVoluntario().filter(e => e.orgId === o.id);
  if (!S.food.entrega || (S.food.entrega !== 'sede' && !evs.some(e => e.id === S.food.entrega))) S.food.entrega = evs[0]?.id || 'sede';
  const itens = Object.entries(S.food.qty).filter(([, q]) => q > 0);
  return {
    title:'Entrega dos alimentos',
    body:`<section class="sec"><h2 class="h-md">Você vai levar para ${esc(o.nome)}</h2>
        <div class="card"><div class="list">${itens.map(([id, q]) => `<div class="li-plain"><span>${CAT[id].nome}<small>${CAT[id].un}</small></span><b class="num">${q}×</b></div>`).join('')}</div></div></section>
      <section class="sec" role="radiogroup" aria-label="Onde entregar"><h2 class="h-md">Onde você vai entregar?</h2>
        ${evs.map(e => optCard({ checked:S.food.entrega === e.id, action:'pick', data:`data-p="food.entrega" data-v="${e.id}"`, ic:'calendar', title:`No evento: ${esc(e.titulo)}`, sub:`${fmtCurta(e.data)} · ${e.inicio}–${e.fim} · ${esc(e.local)}` })).join('')}
        ${optCard({ checked:S.food.entrega === 'sede', action:'pick', data:'data-p="food.entrega" data-v="sede"', ic:'org', title:'Na sede da organização', sub:`${esc(o.horario)} · ${esc(o.endereco)}` })}
      </section>
      <p class="hint">Confira a validade: a organização só aceita itens fechados e com pelo menos 30 dias até vencer.</p>`,
    foot:`<button class="btn btn-primary btn-block" data-a="food-confirm">Confirmar doação</button>`
  };
};

SCREENS['v-alimentos-ok'] = () => {
  const d = S.doacoes[S.doacoes.length - 1]; const o = orgOf(d.orgId);
  const e = d.entrega !== 'sede' ? evOf(d.entrega) : null;
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    body:`<div class="done">${seal()}<h2 class="h-xl">Doação combinada!</h2><p class="muted">${e ? `Leve os itens ao ${esc(e.local)} em ${fmtLonga(e.data)}, entre ${e.inicio} e ${e.fim}.` : `Leve os itens à sede da ${esc(o.nome)}: ${esc(o.endereco)}, ${esc(o.horario).toLowerCase()}.`} A organização confirma o recebimento na hora.</p></div>
      <div class="card"><div class="list">${Object.entries(d.itens).map(([id, q]) => `<div class="li-plain"><span>${CAT[id].nome}</span><b class="num">${q}×</b></div>`).join('')}</div></div>`,
    foot:`<div class="row"><button class="btn btn-ghost btn-grow" data-a="tab" data-r="v-doar">Doar de novo</button><button class="btn btn-primary btn-grow" data-a="tab" data-r="v-home">Início</button></div>`
  };
};

SCREENS['v-perfil'] = () => {
  const u = S.user;
  const agenda = S.inscricoes.map(i => ({ i, e: evOf(i.eventId) })).filter(x => x.e).sort((a, b) => byDate(a.e, b.e));
  return {
    title:'Perfil',
    body:`<div class="ident"><span class="avatar lg">${initials(u.nome)}</span><span><b class="h-md">${esc(u.nome)}</b><span class="small muted">${esc(u.email)}</span>${u.status === 'aprovado' ? '<span class="badge">Cadastro aprovado</span>' : '<span class="badge y">Cadastro em validação</span>'}</span></div>
      <section class="sec"><h2 class="h-md">Como quero ajudar</h2><div class="card stack"><div class="chips">${(u.ajudas || []).map(a => `<span class="badge n">${a}</span>`).join('')}</div><div class="pair"><span>Frequência</span><span>${esc(u.freq || '—')}</span></div></div></section>
      <section class="sec"><h2 class="h-md">Minha agenda</h2>
        ${agenda.length ? `<div class="card"><div class="list">${agenda.map(({ i, e }) => `<button class="li" data-a="go" data-r="v-evento" data-id="${e.id}"><span class="ic">${icon('calendar',20)}</span><span><b>${esc(e.titulo)}</b><small>${fmtCurta(e.data)} · ${e.turnos[i.turno]} · ${esc(e.postos[i.posto].nome)}</small></span>${icon('right',18)}</button>`).join('')}</div></div>` : `<p class="muted small">Você ainda não se inscreveu em nenhuma entrega. <button class="link start" data-a="tab" data-r="v-eventos">Ver entregas</button></p>`}
      </section>
      <section class="sec"><h2 class="h-md">Minhas doações</h2>
        ${S.doacoes.length ? `<div class="card"><div class="list">${S.doacoes.slice().reverse().map(doacaoLi).join("")}</div></div>` : `<p class="muted small">Nenhuma doação ainda.</p>`}
      </section>
      ${protoBlock()}`,
    tabs:'vol', tabOn:'v-perfil'
  };
};

/* ---------- organização ---------- */
function promessaLi(p) {
  const tot = Object.entries(p.itens).map(([id, q]) => `${q} ${CAT[id].nome.toLowerCase()}`).join(', ');
  const onde = p.entrega.tipo === 'sede' ? 'na sede' : `em ${esc(evOf(p.entrega.eventId)?.titulo || 'evento')}`;
  return `<div class="li two"><span class="ic">${icon('bread',20)}</span><span><span class="li-t"><b>${esc(p.nome)}</b><span class="badge y">A caminho</span></span><small>${tot}, entrega ${onde}</small></span></div>`;
}
SCREENS['o-painel'] = () => {
  const o = myOrg(); const evs = futuros().filter(e => e.orgId === o.id);
  const insc = evs.reduce((s, e) => s + inscritosTotal(e), 0);
  const proms = S.promessas.filter(p => p.orgId === o.id);
  const itens = proms.reduce((s, p) => s + Object.values(p.itens).reduce((a, b) => a + b, 0), 0);
  return {
    top:`<section class="hero org-hero gut"><div class="top"><span class="logo">meza</span>${o.status === 'aprovada' ? '<span class="badge">Parceiro aprovado</span>' : '<span class="badge y">Em validação</span>'}</div><p class="eyebrow">Painel da organização</p><h1 class="h-lg">${esc(o.nome)}</h1></section>`,
    body:`${o.status !== 'aprovada' ? `<div class="notice">${icon('info',20)}<span><b>Cadastro em validação</b><span class="small">Você já pode publicar entregas. Elas aparecem para os voluntários assim que a equipe MEZA aprovar a organização.</span></span></div>` : ''}
      <div class="stats">
        <div class="stat"><b>${evs.length}</b><small>próximas entregas</small></div>
        <div class="stat"><b>${insc}</b><small>voluntários inscritos</small></div>
        <div class="stat"><b>${itens}</b><small>itens a caminho</small></div>
      </div>
      <button class="btn btn-primary btn-block" data-a="tab" data-r="o-novo-evento">${icon('megaphone',20)} Publicar próxima entrega</button>
      <section class="sec"><h2 class="h-md">Suas próximas entregas</h2>
        ${evs.map(e => eventCard(e, 'o-evento', `<span class="badge">${inscritosTotal(e)}/${vagasTotal(e)} inscritos</span>`)).join('') || `<p class="muted small">Nenhuma entrega publicada. Publique a próxima para receber voluntários.</p>`}
      </section>
      <section class="sec"><h2 class="h-md">Alimentos a caminho</h2>
        ${proms.length ? `<div class="card"><div class="list">${proms.map(promessaLi).join("")}</div></div>` : '<p class="muted small">Nenhuma doação de alimentos combinada ainda.</p>'}
      </section>`,
    tabs:'org', tabOn:'o-painel'
  };
};

function blankEv() {
  const o = myOrg();
  return { tipo:'Distribuição de cestas', titulo:'', data:emDias(7), inicio:'08:00', fim:'12:00', local:o ? o.endereco : '', desc:'', postos:[{ nome:'Recepção', vagas:4 }, { nome:'Distribuição', vagas:8 }], itens:[] };
}
SCREENS['o-novo-evento'] = () => {
  if (!S.evDraft) S.evDraft = blankEv();
  const d = S.evDraft;
  const turnos = (d.inicio && d.fim && toMin(d.fim) > toMin(d.inicio)) ? turnosDe(d.inicio, d.fim) : [];
  return {
    title:'Publicar entrega',
    body:`<p class="lede">Os voluntários veem a data, o horário e os postos assim que você publicar.</p>
      ${chipsField({ label:'Tipo de ação', path:'evDraft.tipo', options:TIPOS_EV })}
      ${field({ label:'Título', bind:'evDraft.titulo', ph:'Ex.: Entrega de cestas de dezembro' })}
      ${field({ label:'Data', bind:'evDraft.data', type:'date', icon:'calendar', min:iso(HOJE) })}
      <div class="grid2">${field({ label:'Começa às', bind:'evDraft.inicio', type:'time', rer:true })}${field({ label:'Termina às', bind:'evDraft.fim', type:'time', rer:true })}</div>
      ${S.errors.fim ? '' : turnos.length ? `<p class="hint attach">${turnos.length > 1 ? `Os voluntários escolhem entre dois turnos: ${turnos.join(' e ')}.` : `Turno único: ${turnos[0]}.`}</p>` : ''}
      ${field({ label:'Local e endereço', bind:'evDraft.local', ph:'Onde os voluntários se encontram', icon:'pin' })}
      ${taField({ label:'Orientações para os voluntários', bind:'evDraft.desc', ph:'O que levar, roupa adequada, ponto de encontro…' })}
      <div class="field${S.errors.postos ? ' err' : ''}"><span class="lbl">Postos e vagas</span>
        <div class="posto-head"><span>Posto</span><span>Vagas</span><span></span></div>
        <div class="stack-sm">
        ${d.postos.map((p, i) => `<div class="posto-row"><div class="inp"><input data-bind="evDraft.postos.${i}.nome" value="${esc(p.nome)}" placeholder="Nome do posto" aria-label="Nome do posto ${i + 1}"></div><div class="inp"><input type="number" min="1" max="99" inputmode="numeric" data-bind="evDraft.postos.${i}.vagas" value="${esc(p.vagas)}" aria-label="Vagas do posto ${i + 1}"></div><button class="icon-btn" data-a="ev-del-posto" data-i="${i}" aria-label="Remover posto ${i + 1}" ${d.postos.length < 2 ? 'disabled' : ''}>${icon('x',18)}</button></div>`).join('')}
        </div>
        <button class="btn btn-ghost btn-sm start" data-a="ev-add-posto">${icon('plus',18)} Adicionar posto</button>
        ${errMsg('postos')}
      </div>
      ${chipsField({ label:'Itens que a ação precisa', path:'evDraft.itens', multi:true, options:Object.keys(CAT).map(k => CAT[k].nome), key:'itens', hint:'Aparecem para quem quer doar alimentos.' })}
      <button class="link start" data-a="fill-ev">Preencher com dados de exemplo</button>`,
    foot:`<button class="btn btn-primary btn-block" data-a="ev-publish">${icon('megaphone',20)} Publicar entrega</button>`,
    tabs:'org', tabOn:'o-novo-evento'
  };
};

function nomesPosto(e, i) {
  const p = e.postos[i];
  const mine = S.user && S.inscricoes.some(x => x.eventId === e.id && x.posto === i) ? 1 : 0;
  const n = Math.max(0, p.inscritos - mine); const seed = hash(e.id) + i * 5; const arr = [];
  for (let k = 0; k < n; k++) { const nm = POOL[(seed + k * 3) % POOL.length]; arr.push(`${nm} ${String.fromCharCode(65 + ((seed + k * 7) % 26))}.`); }
  if (mine) { const parts = S.user.nome.trim().split(/\s+/); arr.push(`${parts[0]} ${parts.length > 1 ? parts[parts.length - 1][0] + '.' : ''}`.trim()); }
  return arr;
}
function eventoGestao(e, admin) {
  const o = orgOf(e.orgId);
  const proms = S.promessas.filter(p => p.entrega.tipo === 'evento' && p.entrega.eventId === e.id);
  return `<div class="head"><p class="eyebrow">${esc(o.nome)}</p><h2 class="h-xl">${esc(e.titulo)}</h2>${o.status !== 'aprovada' ? '<span class="badge y start">Parceiro em validação, oculto aos voluntários</span>' : ''}</div>
    <div class="kv">
      ${icon('calendar',18)}<span><b>${fmtLonga(e.data)}</b><small>${cap(rel(e.data))}</small></span>
      ${icon('clock',18)}<span>${e.inicio} às ${e.fim}<small>${e.turnos.length > 1 ? "Turnos " + e.turnos.join(" e ") : "Turno único"}</small></span>
      ${icon('pin',18)}<span>${esc(e.local)}${e.endereco && e.endereco !== e.local ? `<small>${esc(e.endereco)}</small>` : ''}</span>
    </div>
    ${e.desc ? `<p>${esc(e.desc)}</p>` : ''}
    <section class="sec"><div class="sec-h"><h2 class="h-md">Postos e inscritos</h2><span class="small muted num">${inscritosTotal(e)}/${vagasTotal(e)}</span></div>
      <div class="card"><div class="list">
      ${e.postos.map((p, i) => { const ns = nomesPosto(e, i); return `<div class="need"><div class="need-h"><b>${esc(p.nome)}</b><span class="num small">${p.inscritos}/${p.vagas}</span></div>${prog(p.inscritos, p.vagas, 0, 'g')}<small>${ns.length ? esc(ns.join(', ')) : 'Ninguém inscrito ainda'}</small></div>`; }).join('')}
      </div></div>
    </section>
    <section class="sec"><h2 class="h-md">Itens pedidos</h2>${e.itens.length ? `<div class="chips">${e.itens.map(i => `<span class="badge t">${CAT[i].nome}</span>`).join('')}</div>` : '<p class="muted small">Esta ação não pede itens.</p>'}
      ${proms.length ? `<div class="card"><div class="list">${proms.map(promessaLi).join('')}</div></div>` : ''}</section>
    ${admin ? `<section class="sec"><h2 class="h-md">Parceiro</h2>
      <div class="card stack">
        <div class="pair"><span>Doações em dinheiro</span><b class="num">${brl(o.arrecadado)}</b></div>
        <div class="pair"><span>Responsável</span><span>${esc(o.resp)}</span></div>
        <div class="pair"><span>Telefone</span><span class="selectable">${esc(o.tel)}</span></div>
        <div class="pair"><span>E-mail</span><span class="selectable">${esc(o.email)}</span></div>
      </div></section>` : ''}`;
}
SCREENS['o-evento'] = () => { const e = evOf(S.params.id); return { title:'Entrega publicada', body:eventoGestao(e, false) }; };

SCREENS['o-perfil'] = () => {
  const o = myOrg();
  return {
    title:'Perfil da organização',
    body:`<div class="ident"><span class="avatar lg">${initials(o.nome)}</span><span><b class="h-md">${esc(o.nome)}</b><span class="small muted">${esc(o.tipo)}${o.cnpj ? ' · CNPJ ' + esc(o.cnpj) : ''}</span>${o.status === 'aprovada' ? '<span class="badge">Parceiro aprovado</span>' : '<span class="badge y">Em validação</span>'}</span></div>
      <p>${esc(o.sobre)}</p>
      <div class="card kv">${icon('user',18)}<span>${esc(o.resp)}</span>${icon('phone',18)}<span class="selectable">${esc(o.tel)}</span>${icon('mail',18)}<span class="selectable">${esc(o.email)}</span>${icon('pin',18)}<span>${esc(o.endereco)}</span>${icon('clock',18)}<span>${esc(o.horario)}</span></div>
      ${protoBlock()}`,
    tabs:'org', tabOn:'o-perfil'
  };
};

/* ---------- administrador ---------- */
SCREENS['a-eventos'] = () => {
  const todos = futuros();
  const orgsAg = S.orgs.filter(o => todos.some(e => e.orgId === o.id));
  if (S.afiltro !== 'todos' && !orgsAg.some(o => o.id === S.afiltro)) S.afiltro = 'todos';
  const evs = todos.filter(e => S.afiltro === 'todos' || e.orgId === S.afiltro);
  const grupos = [['Próximos 7 dias', e => diff(e.data) <= 7], ['Na semana seguinte', e => diff(e.data) > 7 && diff(e.data) <= 14], ['Mais adiante', e => diff(e.data) > 14]];
  const livres = evs.reduce((s, e) => s + vagasLivres(e), 0);
  return {
    title:'Agenda dos parceiros',
    body:`<div class="card stack-xs"><span class="small muted">Visão geral</span><p class="summary"><b class="num">${plural(evs.length,'entrega','entregas')}</b> nas próximas semanas, com <b class="num">${livres}</b> vagas livres em <b class="num">${plural(new Set(evs.map(e => e.orgId)).size,'parceiro','parceiros')}</b>.</p></div>
      <div class="chips x" role="group" aria-label="Filtrar por parceiro"><button class="chip" aria-pressed="${S.afiltro === 'todos'}" data-a="afiltro" data-v="todos">Todos</button>${orgsAg.map(o => `<button class="chip" aria-pressed="${S.afiltro === o.id}" data-a="afiltro" data-v="${o.id}">${esc(o.nome)}</button>`).join('')}</div>
      ${grupos.map(([g, f]) => { const l = evs.filter(f); return l.length ? `<section class="sec"><h2 class="h-sm">${g}</h2>${l.map(e => eventCard(e, 'a-evento', `<span class="badge ${vagasLivres(e) ? '' : 'n'}">${inscritosTotal(e)}/${vagasTotal(e)} inscritos</span>${e.itens.length ? `<span class="badge t">${plural(e.itens.length,'item pedido','itens pedidos')}</span>` : ''}${orgOf(e.orgId).status !== 'aprovada' ? '<span class="badge y">Parceiro em validação</span>' : ''}`)).join('')}</section>` : ''; }).join('')}`,
    tabs:'admin', tabOn:'a-eventos'
  };
};
SCREENS['a-evento'] = () => { const e = evOf(S.params.id); return { title:'Detalhe da entrega', body:eventoGestao(e, true) }; };

SCREENS['a-validacoes'] = () => {
  const pv = pendentesVol(), po = pendentesOrg();
  const tab = S.valTab;
  const btns = (kind, id) => {
    const rej = S.confirm === `rej-${kind}-${id}`;
    return `<div class="row"><button class="btn ${rej ? 'btn-warn' : 'btn-ghost'} btn-sm btn-grow" data-a="reject" data-kind="${kind}" data-id="${id}">${rej ? 'Confirmar recusa' : 'Recusar'}</button><button class="btn btn-primary btn-sm btn-grow" data-a="approve" data-kind="${kind}" data-id="${id}">${icon('check',18)} Aprovar</button></div>`;
  };
  let lista;
  if (tab === 'vol') {
    lista = pv.length ? pv.map(v => `<div class="card stack">
        <div class="person"><span class="avatar">${initials(v.nome)}</span><span><b>${esc(v.nome)}</b>${v.id === 'me' ? ' <span class="badge y">você</span>' : ''}<small>Cadastro ${esc(v.quando)} · ${esc(v.cidade)}</small></span></div>
        <p class="quote">${esc(v.motivacao)}</p>
        <div class="chips">${v.ajudas.map(a => `<span class="badge n">${a}</span>`).join('')}<span class="badge n">${esc(v.freq)}</span></div>
        ${v.exp ? `<div class="stack-xs"><span class="small muted">Experiência</span><p class="small">${esc(v.exp)}</p></div>` : ''}
        ${btns('vol', v.id)}</div>`).join('') : `<p class="muted">Nenhum voluntário aguardando validação.</p>`;
  } else {
    lista = po.length ? po.map(o => `<div class="card stack">
        <div class="person"><span class="avatar">${initials(o.nome)}</span><span><b>${esc(o.nome)}</b>${o.id === 'o-me' ? ' <span class="badge y">sua</span>' : ''}<small>${esc(o.tipo)} · enviado ${esc(o.enviado || 'agora')}</small></span></div>
        <p class="small">${esc(o.sobre)}</p>
        <div class="kv sm">${icon('doc',16)}<span class="selectable">CNPJ ${esc(o.cnpj)}</span>${icon('user',16)}<span>${esc(o.resp)} · <span class="selectable">${esc(o.tel)}</span></span>${icon('pin',16)}<span>${esc(o.endereco)}</span></div>
        <div class="chips">${o.distribui.map(a => `<span class="badge n">${a}</span>`).join('')}</div>
        ${btns('org', o.id)}</div>`).join('') : `<p class="muted">Nenhuma organização aguardando validação.</p>`;
  }
  const revisados = tab === 'vol' ? S.pendVol.filter(v => v.status !== 'pendente').map(v => [v.nome, v.status]) : S.orgs.filter(o => o.revisada).map(o => [o.nome, o.status]);
  return {
    title:'Validações',
    body:`<p class="lede">Confira os cadastros antes de liberar o acesso. O prazo prometido a quem se cadastra é de 7 dias.</p>
      <div class="seg" role="group" aria-label="Tipo de cadastro"><button data-a="valtab" data-v="vol" aria-pressed="${tab === 'vol'}">Voluntários (${pv.length})</button><button data-a="valtab" data-v="org" aria-pressed="${tab === 'org'}">Organizações (${po.length})</button></div>
      <div class="stack">${lista}</div>
      ${revisados.length ? `<section class="sec"><h2 class="h-sm">Revisados nesta sessão</h2><div class="card"><div class="list">${revisados.map(([n, s]) => `<div class="li-plain"><span>${esc(n)}</span>${/aprovad/.test(s) ? '<span class="badge">Aprovado</span>' : '<span class="badge t">Recusado</span>'}</div>`).join('')}</div></div></section>` : ''}`,
    tabs:'admin', tabOn:'a-validacoes'
  };
};

SCREENS['a-perfil'] = () => ({
  title:'Perfil',
  body:`<div class="ident"><span class="avatar lg">${icon('shield',28)}</span><span><b class="h-md">Equipe MEZA</b><span class="small muted">Administração do programa · Brasília – DF</span></span></div>
    <div class="stats"><div class="stat"><b>${S.orgs.filter(o => o.status === 'aprovada').length}</b><small>parceiros ativos</small></div><div class="stat"><b>${futuros().length}</b><small>entregas na agenda</small></div><div class="stat"><b>${pendentesVol().length + pendentesOrg().length}</b><small>cadastros pendentes</small></div></div>
    ${protoBlock()}`,
  tabs:'admin', tabOn:'a-perfil'
});

SCREENS.roteiro = () => ({
  title:'Roteiro do protótipo',
  body:`<p class="lede">Cada história de usuário abre a tela que a atende. As quatro histórias da folha do grupo mantêm a prioridade definida lá. As demais foram acrescentadas no protótipo e a prioridade delas ainda precisa ser confirmada.</p>
    <div>${storiesHtml()}</div>
    ${S.role ? '' : `<div class="card stack"><b>Ver o app como</b>${roleSeg()}</div>`}`
});

/* ================= abas ================= */
const TABS = {
  vol:[['v-home','Início','home'],['v-eventos','Entregas','calendar'],['v-doar','Doar','heart'],['v-perfil','Perfil','user']],
  org:[['o-painel','Painel','grid'],['o-novo-evento','Publicar','megaphone'],['o-perfil','Perfil','user']],
  admin:[['a-eventos','Agenda','calendar'],['a-validacoes','Validações','shield'],['a-perfil','Perfil','user']]
};
function tabsHtml(k, on) {
  return `<nav class="tabs gut" aria-label="Navegação principal">${TABS[k].map(([r, l, ic]) => {
    const n = r === 'a-validacoes' ? pendentesVol().length + pendentesOrg().length : 0;
    return `<button class="tab${r === on ? ' on' : ''}" data-a="tab" data-r="${r}" ${r === on ? 'aria-current="page"' : ''}><span class="pill">${icon(ic,22)}</span>${l}${n ? `<span class="count">${n}</span>` : ''}</button>`;
  }).join('')}</nav>`;
}

/* ================= render ================= */
const $app = document.getElementById('app');
const $guide = document.getElementById('guide');
function render(top) {
  const sc = (SCREENS[S.route] || SCREENS.welcome)();
  const old = $app.querySelector('.scroll');
  const prev = top || !old ? 0 : old.scrollTop;
  const bar = sc.title != null ? `<header class="bar gut${S.stack.length ? '' : ' root'}">${S.stack.length ? `<button class="icon-btn" data-a="back" aria-label="Voltar">${icon('left',24)}</button>` : ''}<h1>${sc.title}</h1></header>` : '';
  $app.innerHTML = `${bar}<main class="scroll${top ? ' enter' : ''}">${sc.top || ''}<div class="content gut">${sc.body}</div></main>${sc.foot ? `<footer class="foot gut">${sc.foot}</footer>` : ''}${sc.tabs ? tabsHtml(sc.tabs, sc.tabOn) : ''}`;
  $app.querySelector('.scroll').scrollTop = prev;
  document.body.classList.toggle('hero-top', !!sc.top && sc.title == null && sc.top.indexOf('class="hero') > -1);
  renderGuide();
  if (S.focusErr) {
    S.focusErr = false;
    const f = $app.querySelector('.field.err input, .field.err textarea, .field.err select, .field.err button');
    if (f) { f.focus({ preventScroll:true }); f.scrollIntoView({ block:'center', behavior:'smooth' }); }
  }
}
function renderGuide() {
  $guide.innerHTML = `<div class="stack-sm"><div class="logo">meza</div><p class="slogan">“a mesa é de todos.”</p><p class="values">mobilização • empatia • zelo • alimentação</p></div>
    <div class="guide-card stack"><span class="label">Ver o app como</span>${roleSeg()}<div class="guide-actions"><button class="link" data-a="home">Voltar para a tela de cadastro</button><span class="row" style="gap:var(--s-2)"><button class="btn btn-ghost btn-sm" data-a="theme">${isDark() ? icon('sun',18) + ' Tema claro' : icon('moon',18) + ' Tema escuro'}</button><button class="btn btn-ghost btn-sm" data-a="fullscreen">${document.fullscreenElement ? icon('shrink',18) + ' Sair da tela cheia' : icon('expand',18) + ' Tela cheia'}</button></span></div></div>
    <div class="guide-card sec"><h2 class="h-sm">Histórias de usuário (MoSCoW)</h2>${storiesHtml()}</div>
    <p class="hint">Protótipo funcional com dados de exemplo. Nenhum pagamento é processado e nada é enviado.</p>`;
}
/* Tema: segue o sistema até o primeiro toque no botão; depois fixa data-theme no <html> e guarda a escolha no navegador. */
const THEME_KEY = 'meza-tema';
try { const t = localStorage.getItem(THEME_KEY); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; } catch (e) {}
const sysDark = matchMedia('(prefers-color-scheme: dark)');
function isDark() { const t = document.documentElement.dataset.theme; return t ? t === 'dark' : sysDark.matches; }
sysDark.addEventListener('change', () => { if (!document.documentElement.dataset.theme) render(false); });
let toastT;
function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2800); }

/* ================= navegação ================= */
function go(route, params = {}) { S.stack.push({ route:S.route, params:S.params }); S.route = route; S.params = params; S.errors = {}; S.confirm = null; render(true); }
function back() { const p = S.stack.pop(); if (!p) return; S.route = p.route; S.params = p.params; S.errors = {}; S.confirm = null; render(true); }
function tab(route) { S.stack = []; S.route = route; S.params = {}; S.errors = {}; S.confirm = null; if (route === 'o-novo-evento' && !S.evDraft) S.evDraft = blankEv(); render(true); }
const HOME = { vol:'v-home', org:'o-painel', admin:'a-eventos' };
function ensureDemoUser() {
  if (S.user) return;
  S.user = JSON.parse(JSON.stringify(DEMO_USER));
  S.inscricoes = [{ eventId:'e3', posto:1, turno:0 }]; evOf('e3').postos[1].inscritos++;
  S.doacoes = [{ id:'d0', tipo:'dinheiro', orgId:'o2', cents:2500, metodo:'pix', data:emDias(-12) }];
}
function setRole(r) {
  S.role = r; S.stack = []; S.params = {}; S.errors = {}; S.confirm = null;
  if (r === 'vol') ensureDemoUser();
  if (r === 'org' && !S.myOrgId) S.myOrgId = 'o1';
}

/* ================= validação ================= */
const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
function valVol1(d) {
  const e = {};
  if (d.nome.trim().split(/\s+/).filter(Boolean).length < 2) e.nome = 'Digite nome e sobrenome.';
  if (!emailOk(d.email)) e.email = 'Digite um e-mail válido, como nome@email.com.';
  if (d.telefone.replace(/\D/g, '').length < 10) e.telefone = 'Digite o telefone com DDD.';
  if (!d.genero) e.genero = 'Selecione uma opção. Se preferir, escolha “Prefiro não informar”.';
  if (!d.nascimento) e.nascimento = 'Informe sua data de nascimento.';
  else if (d.nascimento > iso(HOJE)) e.nascimento = 'A data de nascimento não pode estar no futuro.';
  if (d.endereco.trim().length < 8) e.endereco = 'Informe rua, número e bairro.';
  return e;
}
function valVol2(d) {
  const e = {};
  if (d.motivacao.trim().length < 5) e.motivacao = 'Conte em poucas palavras o que te motivou.';
  if (!d.freq) e.freq = 'Escolha uma frequência.';
  if (!d.ajudas.length) e.ajudas = 'Escolha pelo menos uma forma de ajudar.';
  return e;
}
function valOrg(d) {
  const e = {};
  if (d.nome.trim().length < 3) e.nome = 'Digite o nome da organização.';
  if (d.cnpj.replace(/\D/g, '').length !== 14) e.cnpj = 'O CNPJ tem 14 números.';
  if (!d.tipo) e.tipo = 'Escolha o tipo de organização.';
  if (d.resp.trim().split(/\s+/).filter(Boolean).length < 2) e.resp = 'Digite nome e sobrenome do responsável.';
  if (!emailOk(d.email)) e.email = 'Digite um e-mail válido.';
  if (d.tel.replace(/\D/g, '').length < 10) e.tel = 'Digite o telefone com DDD.';
  if (d.endereco.trim().length < 8) e.endereco = 'Informe o endereço completo da sede.';
  if (d.sobre.trim().length < 10) e.sobre = 'Conte em uma frase o que vocês fazem.';
  if (!d.distribui.length) e.distribui = 'Escolha pelo menos uma opção.';
  return e;
}
function valEv(d) {
  const e = {};
  if (d.titulo.trim().length < 4) e.titulo = 'Dê um título para a entrega.';
  if (!d.data) e.data = 'Escolha a data.'; else if (d.data < iso(HOJE)) e.data = 'A data não pode estar no passado.';
  if (!d.inicio) e.inicio = 'Informe o horário de início.';
  if (!d.fim || (d.inicio && toMin(d.fim) <= toMin(d.inicio))) e.fim = 'O término precisa ser depois do início.';
  if (d.local.trim().length < 5) e.local = 'Informe onde os voluntários se encontram.';
  const ps = d.postos.filter(p => String(p.nome).trim() && Number(p.vagas) > 0);
  if (!ps.length || ps.length !== d.postos.length) e.postos = 'Cada posto precisa de nome e de pelo menos 1 vaga.';
  return e;
}
function fail(errs) { S.errors = errs; S.focusErr = true; render(false); }

/* ================= máscaras ================= */
const maskTel = v => { const d = v.replace(/\D/g, '').slice(0, 11); if (!d) return ''; if (d.length <= 2) return `(${d}`; if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`; if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`; return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`; };
const maskCnpj = v => { const d = v.replace(/\D/g, '').slice(0, 14); let o = d.slice(0, 2); if (d.length > 2) o += '.' + d.slice(2, 5); if (d.length > 5) o += '.' + d.slice(5, 8); if (d.length > 8) o += '/' + d.slice(8, 12); if (d.length > 12) o += '-' + d.slice(12); return o; };

/* ================= ações ================= */
const A = {
  back, home() { S.role = null; S.stack = []; S.route = 'welcome'; S.params = {}; render(true); },
  go(d) { go(d.r, d.id ? { id:d.id } : {}); },
  tab(d) { tab(d.r); },
  theme() {
    const t = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    render(false);
  },
  role(d) { setRole(d.r); S.route = HOME[d.r]; render(true); },
  'start-vol'() { go('vol-cad-1'); },
  'start-org'() { go('org-cad'); },
  'fill-vol1'() { Object.assign(S.volDraft, { nome:'Lucas Almeida', email:'lucas.almeida@email.com', telefone:'(61) 98877-6655', genero:'Masculino', nascimento:'2001-08-22', endereco:'QNL 12, casa 8, Taguatinga Norte' }); S.errors = {}; render(false); },
  'fill-vol2'() { Object.assign(S.volDraft, { exp:'Ajudei na distribuição de cestas da paróquia do bairro em 2024.', motivacao:'Quero transformar parte do meu tempo livre em comida no prato de quem precisa.', freq:'A cada 15 dias', ajudas:['Trabalhar em eventos','Doar alimentos'] }); S.errors = {}; render(false); },
  'fill-org'() { Object.assign(S.orgDraft, { nome:'Cozinha Solidária do Gama', cnpj:'27.615.904/0001-58', tipo:'Coletivo comunitário', resp:'Dona Lourdes Pereira', email:'cozinhagama@email.com', tel:'(61) 99654-3210', endereco:'Setor Leste, Quadra 9, Gama', sobre:'Servimos 150 almoços por dia para trabalhadores informais e famílias do bairro.', distribui:['Refeições prontas'] }); S.errors = {}; render(false); },
  'fill-ev'() { Object.assign(S.evDraft, { tipo:'Distribuição de cestas', titulo:'Entrega de cestas de fim de mês', inicio:'08:00', fim:'12:00', desc:'Chegue 15 minutos antes. Use roupa confortável e sapato fechado. Água e lanche por nossa conta.', postos:[{ nome:'Recepção das famílias', vagas:4 }, { nome:'Entrega das cestas', vagas:8 }, { nome:'Carga e descarga', vagas:3 }], itens:['Arroz','Feijão','Óleo de soja'] }); S.errors = {}; render(false); },
  'vol-next'() { const e = valVol1(S.volDraft); Object.keys(e).length ? fail(e) : go('vol-cad-2'); },
  'vol-finish'() {
    const e = valVol2(S.volDraft); if (Object.keys(e).length) return fail(e);
    S.user = { ...JSON.parse(JSON.stringify(S.volDraft)), status:'em_validacao' };
    S.inscricoes = []; S.doacoes = [];
    const bairro = S.user.endereco.split(',').pop().trim();
    S.pendVol = S.pendVol.filter(v => v.id !== 'me');
    S.pendVol.unshift({ id:'me', nome:S.user.nome, cidade:bairro || 'Brasília', quando:'agora', ajudas:S.user.ajudas, freq:S.user.freq, motivacao:S.user.motivacao, exp:S.user.exp, status:'pendente' });
    S.volDraft = blankVol(); S.stack = []; S.route = 'vol-cad-ok'; S.params = {}; render(true);
  },
  'vol-explore'() { S.role = 'vol'; tab('v-home'); },
  'org-submit'() {
    const e = valOrg(S.orgDraft); if (Object.keys(e).length) return fail(e);
    const d = S.orgDraft;
    S.orgs = S.orgs.filter(o => o.id !== 'o-me'); S.events = S.events.filter(x => x.orgId !== 'o-me');
    S.orgs.push({ id:'o-me', nome:d.nome.trim(), tipo:d.tipo, endereco:d.endereco.trim(), resp:d.resp.trim(), tel:d.tel, email:d.email.trim(), status:'pendente', sobre:d.sobre.trim(), distribui:d.distribui.slice(), arrecadado:0, horario:'Seg a sex, 9h às 17h', cnpj:d.cnpj, enviado:'agora' });
    S.needs['o-me'] = [];
    S.myOrgId = 'o-me'; S.evDraft = null; S.orgDraft = blankOrg(); S.stack = []; S.route = 'org-cad-ok'; S.params = {}; render(true);
  },
  'org-enter'() { S.role = 'org'; tab('o-painel'); },
  pick(d) { setPath(d.p, d.n ? Number(d.v) : d.v); if (d.k) delete S.errors[d.k]; render(false); },
  toggle(d) { const arr = getPath(d.p); const i = arr.indexOf(d.v); i < 0 ? arr.push(d.v) : arr.splice(i, 1); if (d.k) delete S.errors[d.k]; render(false); },
  filtro(d) { S.filtro = d.v; render(false); },
  afiltro(d) { S.afiltro = d.v; render(false); },
  valtab(d) { S.valTab = d.v; S.confirm = null; render(false); },
  inscrever(d) {
    const e = evOf(d.id); const sel = S.sel[e.id];
    if (sel.posto === null || sel.turno === null) return;
    const p = e.postos[sel.posto]; if (p.inscritos >= p.vagas) { toast('Esse posto acabou de lotar. Escolha outro.'); return; }
    p.inscritos++; S.inscricoes.push({ eventId:e.id, posto:sel.posto, turno:sel.turno }); S.sel[e.id] = { posto:null, turno:null };
    S.stack = [{ route:'v-eventos', params:{} }]; S.route = 'v-inscricao-ok'; S.params = { id:e.id }; render(true);
  },
  'cancel-insc'(d) {
    if (S.confirm !== 'cancel-' + d.id) { S.confirm = 'cancel-' + d.id; render(false); return; }
    const i = S.inscricoes.findIndex(x => x.eventId === d.id); const ins = S.inscricoes[i];
    evOf(d.id).postos[ins.posto].inscritos--; S.inscricoes.splice(i, 1); S.confirm = null; toast('Inscrição cancelada. A vaga voltou para a lista.'); render(false);
  },
  'don-start'(d) { const orgId = d.org || S.don.orgId; S.don = { orgId, cents:0, metodo:'pix', eventId:null }; go('v-valor'); },
  key(d) {
    let c = S.don.cents;
    if (d.k === 'b') c = Math.floor(c / 10); else if (d.k === 'c') c = 0; else if (c < 1000000) c = c * 10 + Number(d.k);
    S.don.cents = c; render(false);
  },
  quick(d) { S.don.cents = Number(d.v); render(false); },
  'copy-pix'() {
    const el = document.getElementById('pixcode'); const txt = el ? el.textContent : '';
    const fallback = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast('Código selecionado. Copie pelo menu do aparelho.'); };
    try { navigator.clipboard.writeText(txt).then(() => toast('Código Pix copiado'), fallback); } catch (err) { fallback(); }
  },
  'don-confirm'() {
    const d = S.don; const o = orgOf(d.orgId);
    S.doacoes.push({ id:'d' + Date.now(), tipo:'dinheiro', orgId:d.orgId, cents:d.cents, metodo:d.metodo, eventId:d.metodo === 'dinheiro' ? d.eventId : null, data:iso(HOJE) });
    if (d.metodo !== 'dinheiro') o.arrecadado += d.cents;
    S.stack = []; S.route = 'v-doacao-ok'; S.params = {}; render(true);
  },
  'food-start'(d) { const orgs = orgsComNecessidade(); const orgId = d.org || (orgs.some(o => o.id === S.food.orgId) ? S.food.orgId : orgs[0].id); S.food = { orgId, qty:{}, entrega:d.ev || null }; go('v-alimentos'); },
  'food-org'(d) { S.food = { orgId:d.v, qty:{}, entrega:null }; render(false); },
  qty(d) { const q = (S.food.qty[d.id] || 0) + Number(d.d); S.food.qty[d.id] = Math.max(0, Math.min(99, q)); render(false); },
  'food-confirm'() {
    const f = S.food; const itens = {}; Object.entries(f.qty).forEach(([id, q]) => { if (q > 0) { itens[id] = q; needOf(f.orgId, id).prom += q; } });
    const entrega = f.entrega === 'sede' ? { tipo:'sede' } : { tipo:'evento', eventId:f.entrega };
    const parts = S.user.nome.trim().split(/\s+/);
    S.promessas.push({ id:'p' + Date.now(), orgId:f.orgId, itens, entrega, nome:`${parts[0]} ${parts.length > 1 ? parts[parts.length - 1][0] + '.' : ''}`.trim() });
    S.doacoes.push({ id:'d' + Date.now(), tipo:'alimentos', orgId:f.orgId, itens, entrega:f.entrega, data:iso(HOJE) });
    S.food = { orgId:f.orgId, qty:{}, entrega:null };
    S.stack = []; S.route = 'v-alimentos-ok'; S.params = {}; render(true);
  },
  'ev-add-posto'() { S.evDraft.postos.push({ nome:'', vagas:2 }); render(false); },
  'ev-del-posto'(d) { if (S.evDraft.postos.length > 1) { S.evDraft.postos.splice(Number(d.i), 1); render(false); } },
  'ev-publish'() {
    const d = S.evDraft; const e = valEv(d); if (Object.keys(e).length) return fail(e);
    const id = 'e' + Date.now(); const o = myOrg();
    const nomeToId = Object.fromEntries(Object.entries(CAT).map(([k, v]) => [v.nome, k]));
    const itens = d.itens.map(n => nomeToId[n]).filter(Boolean);
    const loc = d.local.trim();
    S.events.push({ id, orgId:o.id, tipo:d.tipo, titulo:d.titulo.trim(), data:d.data, inicio:d.inicio, fim:d.fim, local:loc, endereco:loc, desc:d.desc.trim(), turnos:turnosDe(d.inicio, d.fim), postos:d.postos.map(p => ({ nome:String(p.nome).trim(), vagas:Number(p.vagas), inscritos:0 })), itens });
    itens.forEach(it => { if (!needOf(o.id, it)) (S.needs[o.id] = S.needs[o.id] || []).push({ id:it, meta:50, atual:0, prom:0 }); });
    S.evDraft = null; S.stack = [{ route:'o-painel', params:{} }]; S.route = 'o-evento'; S.params = { id }; render(true);
    toast(o.status === 'aprovada' ? 'Entrega publicada. Os voluntários já podem se inscrever.' : 'Entrega salva. Ela aparece aos voluntários após a aprovação.');
  },
  approve(d) {
    if (d.kind === 'vol') { const v = S.pendVol.find(x => x.id === d.id); v.status = 'aprovado'; if (d.id === 'me' && S.user) S.user.status = 'aprovado'; toast(`${first(v.nome)} foi aprovado e já pode se inscrever.`); }
    else { const o = orgOf(d.id); o.status = 'aprovada'; o.revisada = true; toast(`${o.nome} aprovada. As entregas dela já aparecem para os voluntários.`); }
    S.confirm = null; render(false);
  },
  reject(d) {
    const key = `rej-${d.kind}-${d.id}`;
    if (S.confirm !== key) { S.confirm = key; render(false); return; }
    if (d.kind === 'vol') { const v = S.pendVol.find(x => x.id === d.id); v.status = 'recusado'; if (d.id === 'me' && S.user) S.user.status = 'recusado'; }
    else { const o = orgOf(d.id); o.status = 'recusada'; o.revisada = true; }
    S.confirm = null; toast('Cadastro recusado. A pessoa recebe o motivo por e-mail no app final.'); render(false);
  },
  story(d) {
    S.params = {}; S.errors = {}; S.confirm = null;
    switch (d.k) {
      case 's-vol': S.role = null; S.stack = [{ route:'welcome', params:{} }]; S.route = 'vol-cad-1'; break;
      case 's-org': S.role = null; S.stack = [{ route:'welcome', params:{} }]; S.route = 'org-cad'; break;
      case 's-pub': setRole('org'); S.route = 'o-novo-evento'; if (!S.evDraft) S.evDraft = blankEv(); break;
      case 's-adm': setRole('admin'); S.route = 'a-eventos'; break;
      case 's-posto': { setRole('vol'); const e = eventosVoluntario().find(x => !minhaInsc(x.id) && vagasLivres(x) > 0); S.stack = [{ route:'v-eventos', params:{} }]; S.route = 'v-evento'; S.params = { id:e.id }; break; }
      case 's-din': setRole('vol'); S.stack = [{ route:'v-doar', params:{} }]; S.don = { orgId:S.don.orgId, cents:0, metodo:'pix', eventId:null }; S.route = 'v-valor'; break;
      case 's-ali': setRole('vol'); S.stack = [{ route:'v-doar', params:{} }]; S.food = { orgId:S.food.orgId, qty:{}, entrega:null }; S.route = 'v-alimentos'; break;
    }
    render(true);
  },
  fullscreen() {
    const el = document.documentElement;
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (el.requestFullscreen) el.requestFullscreen().catch(() => toast('O navegador não liberou a tela cheia. Use F11.'));
      else toast('Use F11 para entrar em tela cheia.');
    } catch (err) { toast('Use F11 para entrar em tela cheia.'); }
  },
  reset() {
    if (S.confirm !== 'reset') { S.confirm = 'reset'; render(false); return; }
    S = initialState(); render(true); toast('Demonstração reiniciada.');
  }
};

document.addEventListener('click', e => {
  const el = e.target.closest('[data-a]'); if (!el || el.disabled) return;
  const fn = A[el.dataset.a]; if (fn) { e.preventDefault(); fn(el.dataset, el); }
});
document.addEventListener('input', e => {
  const el = e.target; if (!el.dataset || !el.dataset.bind || el.tagName === 'SELECT') return;
  let v = el.value;
  if (el.dataset.mask === 'tel') { v = maskTel(v); el.value = v; }
  if (el.dataset.mask === 'cnpj') { v = maskCnpj(v); el.value = v; }
  if (el.type === 'number') v = el.value === '' ? '' : Number(el.value);
  setPath(el.dataset.bind, v);
  const k = el.dataset.bind.split('.').pop();
  const f = el.closest('.field');
  if (S.errors[k] && f) { delete S.errors[k]; f.classList.remove('err'); f.querySelector('.msg-err')?.remove(); }
});
document.addEventListener('change', e => {
  const el = e.target; if (!el.dataset || !el.dataset.bind) return;
  if (el.tagName === 'SELECT') { setPath(el.dataset.bind, el.value); delete S.errors[el.dataset.bind.split('.').pop()]; }
  if (el.dataset.rerender) render(false);
});

document.addEventListener('fullscreenchange', renderGuide);
render(true);
})();
