# MEZA

Protótipo funcional do MEZA, app de voluntariado que conecta voluntários a instituições parceiras (ONGs, empresas e coletivos que distribuem alimentos). Slogan: “a mesa é de todos.” Valores: mobilização • empatia • zelo • alimentação.

Projeto acadêmico do Ibmec Brasília. Fontes do produto: o protótipo de papel e a folha de user stories em `docs/referencias/`, a identidade visual no Figma (https://www.figma.com/design/8MHxkJJR7gRTR1AvuFGXJc/MEZA) e as telas redesenhadas no pen.dev (arquivo `meza.pen`, lido pelo MCP `pencil`). Quando o pen.dev tiver a tela, ele é a referência de layout, textos e ícones.

Escreva textos de interface, mensagens de commit e respostas em português do Brasil.

## Como rodar

- Abra `index.html` no navegador. Não há etapa de build nem servidor: é HTML, CSS e JavaScript puros, sem dependências em tempo de execução (só as fontes do Google Fonts).
- `npm run build` gera `dist/meza.html`, um arquivo único com CSS e JS embutidos, para apresentar em tela cheia ou enviar a alguém.
- `npm test` roda o teste de fumaça (`tests/smoke.mjs`, Playwright) sobre `index.html`. Na primeira vez rode `npm install` e `npx playwright install chromium`.
- `npm run test:build` gera o arquivo único e roda o mesmo teste nele.
- Depois de qualquer mudança em `src/`, rode `npm test` antes de dizer que terminou.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Casca da página: fontes, CSS, marcação do palco (`aside.guide` + `.phone > .device > #app` + `#toast`, com barra de status, ilha e indicador de início que só aparecem no computador) e o script |
| `src/styles.css` | Tokens de design no `:root` e todos os estilos |
| `src/app.js` | O app inteiro: estado, dados de exemplo, telas e ações |
| `scripts/build.mjs` | Gera `dist/meza.html` embutindo CSS e JS |
| `tests/smoke.mjs` | Percorre os fluxos principais no Chromium e falha se houver erro de JavaScript |
| `docs/referencias/` | Fotos do protótipo de papel (doação em dinheiro) e da folha de user stories |

## Arquitetura de `src/app.js`

Aplicação de página única sem framework, dentro de uma IIFE.

- **Estado**: um objeto `S` criado por `initialState()`. Não há back end nem persistência; recarregar a página volta ao início.
- **Dados de exemplo**: `seedOrgs`, `seedEvents`, `seedNeeds`, `seedPendVol`, `DEMO_USER` e o catálogo de alimentos `CAT`. As datas são relativas a hoje (`emDias(n)`), então a demo nunca fica com eventos no passado.
- **Telas**: `SCREENS[rota]()` devolve `{ title, top, body, foot, tabs, tabOn }` como strings HTML. Sem `title` não há barra superior. `tabs` ('vol', 'org' ou 'admin') liga a barra de abas, definida em `TABS`.
- **Renderização**: `render(top)` reconstrói `#app` inteiro a cada mudança. Com `top = true` a rolagem volta ao topo e a tela entra animada.
- **Navegação**: `go(rota, params)` empilha, `back()` desempilha e `tab(rota)` zera a pilha. O papel atual fica em `S.role` e muda por `setRole()`. O botão Voltar do navegador ou do celular também desempilha: enquanto houver pilha (ou o painel de notificações aberto), `render()` mantém uma entrada “guarda” no histórico (`armaGuarda()`) e o `popstate` chama `back()`. Sem pilha, o Voltar do sistema sai da página normalmente.
- **Ações**: cliques são delegados. Um elemento com `data-a="nome"` chama `A.nome(dataset, el)`; os outros atributos `data-*` chegam como parâmetros.
- **Formulários**: `<input data-bind="caminho.no.estado">` grava direto em `S` via `setPath`. `data-mask="tel"` ou `"cnpj"` aplica máscara. Use os helpers `field`, `selectField`, `taField`, `radioList` (escolha única em linhas), `checkList` (escolha múltipla com ícone e descrição), `chipsField` e `optCard`. Em `field`, `check:true` mostra o ✓ verde depois de uma tentativa de envio, e `action:{a, icon, label}` põe um botão de ícone à direita (ex.: localização). `selectField` não usa `<select>` nativo: desenha um botão (`.dd-btn`, com o `id` do campo) e uma lista `role="listbox"` (`#id-list`) no estilo do app; abrir e navegar (setas, Home/End, Enter, Esc, primeira letra) mexe só no DOM via `ddOpen`/`ddClose`, e escolher (`A['dd-pick']`) grava em `S` e redesenha. Telas de cadastro em etapas passam `steps:[atual, total]`, que desenha a barra de progresso no cabeçalho.
- **Validação**: `valVol1`, `valVol2`, `valOrg1`, `valOrg2` e `valEv` devolvem `{ campo: 'mensagem' }`; `fail(errs)` mostra os erros, marca `S.tried` e foca o primeiro campo com problema. `errSummary()` mostra o resumo “Revise os N campos destacados” no topo.
- **Notificações**: o sino do cabeçalho verde (início do voluntário e painel da organização) vem de `bellHtml()` e abre um painel sob ele (`S.notif`). A lista sai de `notifs()`, calculada do estado a cada render (cadastro em validação/aprovado, vaga reservada ou lembrete, última doação, item em falta, nova ação; para a organização, alimentos a caminho, inscritos e ação lotada). Cada uma tem id estável; as lidas ficam em `S.lidas` e o contador do sino mostra as não lidas. Tocar numa notificação marca como lida e abre a tela ligada (`A['notif-go']`); Esc, tocar fora ou navegar fecham o painel.
- **Confirmações destrutivas** (cancelar inscrição, recusar cadastro, recomeçar) usam dois toques controlados por `S.confirm`. Não use `alert()` nem `confirm()`.
- **Segurança**: todo texto digitado pelo usuário passa por `esc()` antes de entrar no HTML.
- **Dinheiro** é guardado em centavos (`cents`) e formatado com `brl()`.

### Para adicionar uma tela

1. Crie `SCREENS['minha-rota'] = () => ({ title: '…', body: `…` })`.
2. Ligue a navegação com `data-a="go" data-r="minha-rota"` ou com uma ação nova em `A`.
3. Se a tela for uma aba, inclua-a em `TABS`.
4. Cubra o fluxo em `tests/smoke.mjs`.

## Papéis e rotas

- **Voluntário** (`v-*`): início, perfil com agenda, doações, “Como quero ajudar” (editável em `v-ajuda`, com rascunho em `S.ajudaDraft`) e bloco Protótipo, próximas ações (aba “Ações”, com filtro por tipo e grupos “Esta semana” e “Mais adiante”), detalhe com escolha de posto e turno, vaga reservada (com download de `.ics` para o calendário), doação em dinheiro, doação de alimentos e perfil com agenda e histórico. Ações aparecem como `eventRow(e, rota, inscrição, modo)`: com `modo = 'org'` a linha mostra o tipo e as vagas preenchidas; com `'admin'`, a organização, os inscritos e os itens pedidos (ou “Parceiro em validação”). `eventCard()` não é mais usado nas telas. Cada evento tem `desc` (o que será feito) e `nota` opcional (orientação, como roupa e o que levar).
- **Organização** (`o-*`): painel com números no cabeçalho verde, próximas ações e alimentos a caminho; “Publicar ação” (`o-novo-evento`: tipo com ícone, horários com o aviso dos turnos, postos com total de vagas e itens em grade de duas colunas); detalhe da ação (`o-evento`, com o aviso “Ação publicada” quando `S.params.novo`), postos com barra de preenchimento e itens a caminho; perfil com contato editável em `o-perfil-editar` (rascunho em `S.orgEdit`). O detalhe do administrador (`a-evento`) reaproveita `eventoGestao()` e acrescenta a descrição e os dados do parceiro.
- **Administrador** (`a-*`): agenda dos parceiros (`a-eventos`, com seletor de parceiro e grupos “Próximos 7 dias”, “Semana que vem” e “Mais adiante”), detalhe da ação com dados do parceiro e “Ver perfil” (`a-org`), validações em abas (`a-validacoes`: depois de aprovar ou recusar, o cadastro continua na lista com o resultado e “Desfazer”; voluntários usam `revisado` e organizações `revisada`) e perfil com números e bloco Protótipo.
- **Cadastro**: os dois cadastros têm duas etapas e terminam em “Enviar cadastro”. Voluntário: `vol-cad-1` (gênero opcional; data de nascimento confere a idade mínima `IDADE_MIN`, 16 anos) e `vol-cad-2`. Organização: `org-cad` (“Sobre a organização” e “Contato”, valida com `valOrg1`) e `org-cad-2` (“O que vocês fazem”, `valOrg2`). As telas de sucesso mostram o andamento da validação. Cadastro recusado pelo administrador aparece como “Cadastro não aprovado” no perfil, no início ou painel e nas notificações (textos `REC_VOL` e `REC_ORG`), nunca como “em validação”.
- **`roteiro`**: lista as user stories agrupadas por prioridade (Essencial, Importante, Desejável, Fora do escopo) e abre a tela de cada uma; a bandeira marca as acrescentadas no protótipo. No computador, o painel à esquerda do aparelho (`renderGuide()`) mostra o seletor de papel com ícones, o nome da tela atual (`ROTA_NOME`) e a lista compacta das histórias (`storiesMini()`).

A doação em dinheiro segue o protótipo de papel, redesenhado no pen.dev em três etapas (`steps:[n, 3]`): Doar → Valor (teclado numérico e valores sugeridos) → Como você quer pagar (Pix, Cartão, Dinheiro em mãos) → Pix (QR Code, contador de 30 minutos em `pixRestante()` e “copia e cola” com estado de copiado; quando o código expira, a tela troca para “Gerar novo código”, ação `pix-novo`), Cartão (formulário de teste já preenchido com 4242…, máscaras `card`, `mmaa` e `digits`, validação em `valCard` e explicação do CVV que abre e fecha abaixo dos campos) ou Entrega em mãos (ação da organização ou sede). “Alterar” (`don-edit`) volta para o Valor. Pagamentos são simulados; o QR Code e o código Pix são ilustrativos.

**Destino das doações**: dinheiro e alimentos vão para o MEZA como um todo (a administração decide onde usar) ou para uma ação específica. `S.don.dest` e `S.food.dest` valem `'meza'` (padrão) ou o id da ação; os helpers `destEv`, `destNome`, `destPara`, `destOpcoes` e `needsFor` cuidam disso. Alimentos são entregues só na sede do MEZA ou num ponto de coleta parceiro (comércios do DF, constante `PONTOS`, nomes e endereços fictícios; `S.food.entrega` guarda o id) e a equipe do MEZA leva até a ação; voluntários não entram na sede das organizações parceiras. Dinheiro em mãos é entregue só na sede do MEZA (`PONTOS[0]`), sem escolha de local. Nos detalhes da ação, “Doar estes itens” abre a doação de alimentos já com aquela ação como destino. O que vai para o MEZA soma em `S.meza` (`caixa` em centavos e `prom`, alimentos a caminho) e aparece no perfil do administrador; o que vai para uma ação soma no `arrecadado` e nas metas da organização.

## User stories

Da folha do grupo (`docs/referencias/user-stories-moscow.jpg`), no máximo três “Must”:

| Prioridade | História | Onde está |
| --- | --- | --- |
| M | Voluntário se cadastra com informações básicas e diz como quer ajudar | `vol-cad-1`, `vol-cad-2` |
| M | Administrador vê os próximos eventos dos parceiros em lista, com data, horário e detalhes | `a-eventos`, `a-evento` |
| S | Voluntário escolhe horário, local e posto | `v-evento` |
| S | Voluntário faz doação financeira escolhendo o método de pagamento, com QR Code Pix | `v-valor`, `v-metodo`, `v-checkout` |

Acrescentadas no protótipo, com prioridade ainda a confirmar com o grupo:

| Sugerida | História | Onde está |
| --- | --- | --- |
| M | Organização publica a próxima entrega | `o-novo-evento` |
| S | Organização se cadastra como parceira | `org-cad` |
| C | Voluntário doa alimentos escolhendo item e quantidade | `v-alimentos` |
| W | Programa de doação unificado | fora do escopo |

As histórias e prioridades exibidas no app ficam na constante `STORIES` (`g: true` marca as que vêm da folha do grupo).

## Identidade visual

Os tokens estão no topo de `src/styles.css`. Estilize sempre por token; cor literal só no QR Code (fundo branco) e nos textos sobre o cabeçalho verde.

- **Tokens do pen.dev** (já aplicados): fundo `#F5F0E6`, superfície `#FFFDF9`, texto `#24211C`/`#6A6357`/`#736B5F` (`--fg`, `--muted`, `--muted-2`; o pen.dev usava `#9A9286` no `--muted-2`, escurecido para passar 4,5:1), bordas `#DDD4C4`/`#B9AF9E`, verde `#1B4A35`, ok `#2E7A52`, erro `#B03A26` com fundo `#FAE6DF` (`--danger`, `--danger-soft`), terracota de destaque `#C8694A` (`--accent`, só em fundos, barras e ícones; em texto use `--accent-ink` `#9E4F33`, que passa 4,5:1) e toalha `#E3A68E`. Todo texto precisa de contraste de pelo menos 4,5:1 com o fundo. Ícones novos vêm do Lucide (objeto `LU` no `app.js`, traço 2).
- **Paleta do Figma**: verde profundo `#194B35` (escuro `#103123`, claro `#207D54`), amarelo acolhedor `#E9B96E` (`#AF894F`, `#FCD79E`), terracota `#D17C5B` (`#A15D43`, `#F58E66`), creme `#F5F1E7` (`#E0DACB`, `#FFFFFF`) e texto `#2C2C2C`.
- **Tipografia**: no Figma o logotipo “meza” e os títulos usam Aconchego (Bold, Medium e Black, espaçamento de -5%). É uma fonte de teste sem licença para web, então o código usa Outfit com `letter-spacing: -0.05em`. O texto corrido usa Poppins, como no Figma.
- **Elementos**: o slogan “A mesa é de todos.”, a linha de valores “Mobilização · Empatia · Zelo · Alimentação” e a faixa xadrez terracota (`.gingham`, quadrados de 10 px em duas fileiras), que lembra uma toalha de mesa.
- O app só tem tema claro (`color-scheme: light` no `:root`); o modo escuro foi removido a pedido do grupo. Nada sobrevive à recarga: o app não usa `localStorage`.
- **Escalas** (tokens no `:root`): espaçamento `--s-1`…`--s-8` (4, 8, 12, 16, 20, 24, 32, 40 px); tipo `--t-xs`, `--t-sm`, `--t-ms`, `--t-base`, `--t-input`, `--t-md`, `--t-lg`, `--t-xl`, `--t-2xl` e `--t-3xl` (12, 13, 14, 15, 16, 17, 20, 26, 30 e 48 px; `--t-input` só em campos, para o iPhone não dar zoom, e `--t-3xl` só no valor da doação); raio `--r-sm`/`--r`/`--r-lg` (peças pequenas, controles, cartões). Não use valores soltos nem `style="gap:…"` inline. Nada abaixo de 12 px.
- **Alvos de toque**: tudo que se toca tem pelo menos 44 × 44 px. Links de texto ganham a área por um `::after` invisível (bloco “áreas de toque” no fim do `styles.css`), sem mudar o layout.
- **Textos**: verbos iguais para ações iguais (“Enviar cadastro”, “Publicar ação”, “Salvar”); a lista de doações se chama “Minhas doações” em todo lugar. Links soltos não têm sublinhado e usam peso 600; só links no meio de uma frase (`.link`) são sublinhados.
- **Ritmo e hierarquia**: `.content` separa blocos por 24 px. Uma seção com título é `<section class="sec">` + `h2.h-md` (20 px); subgrupos usam `.h-sm` (17 px, o mesmo do título de cartão). Cabeçalho de página é `.head` (rótulo `.eyebrow` + `.h-lg`/`.h-xl`); texto introdutório abaixo da barra é `.lede`. Listas (`.list` com `.li` ou `.li-plain`) ficam dentro de `.card`; selos de status vão na linha do título (`.li-t`). Pares rótulo/valor usam `.pair`; dados com ícone usam `.kv` com a linha de apoio em `<small>`. Rótulos não usam caixa alta.
- Layout: no celular o app ocupa a tela com margem `--gut` (16 px, 20 px a partir de 400 px); entre 600 e 979 px o conteúdo vira uma coluna central de 560 px (`.gut`); a partir de 980 px aparece o roteiro à esquerda e o aparelho à direita, com a tela sempre em 390 × 844; em janelas baixas o aparelho inteiro encolhe por `zoom` (variável `--k`, calculada em `fitPhone()`), sem mudar a proporção. Abaixo de 360 px há ajustes em `@media (max-width:359px)`, e o teste de fumaça confere que nada transborda em 320 px.

## Limitações conhecidas

- Sem back end, login ou persistência: tudo vive em memória.
- Pagamentos, e-mails e notificações são simulados.
- Os nomes de inscritos exibidos para organizações são gerados a partir dos dados de exemplo.
