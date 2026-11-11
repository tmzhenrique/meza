# MEZA

Protótipo funcional do MEZA, app de voluntariado que conecta voluntários a instituições parceiras (ONGs, empresas e coletivos que distribuem alimentos). Slogan: “a mesa é de todos.” Valores: mobilização • empatia • zelo • alimentação.

Projeto acadêmico do Ibmec Brasília. Fontes do produto: o protótipo de papel e a folha de user stories em `docs/referencias/`, e a identidade visual no Figma (https://www.figma.com/design/8MHxkJJR7gRTR1AvuFGXJc/MEZA).

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
| `index.html` | Casca da página: fontes, CSS, marcação do palco (`aside.guide` + `.device > #app` + `#toast`) e o script |
| `src/styles.css` | Tokens de design no `:root` (claro e escuro) e todos os estilos |
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
- **Navegação**: `go(rota, params)` empilha, `back()` desempilha e `tab(rota)` zera a pilha. O papel atual fica em `S.role` e muda por `setRole()`.
- **Ações**: cliques são delegados. Um elemento com `data-a="nome"` chama `A.nome(dataset, el)`; os outros atributos `data-*` chegam como parâmetros.
- **Formulários**: `<input data-bind="caminho.no.estado">` grava direto em `S` via `setPath`. `data-mask="tel"` ou `"cnpj"` aplica máscara. Use os helpers `field`, `selectField`, `taField`, `chipsField` e `optCard`.
- **Validação**: `valVol1`, `valVol2`, `valOrg` e `valEv` devolvem `{ campo: 'mensagem' }`; `fail(errs)` mostra os erros e foca o primeiro campo com problema.
- **Confirmações destrutivas** (cancelar inscrição, recusar cadastro, recomeçar) usam dois toques controlados por `S.confirm`. Não use `alert()` nem `confirm()`.
- **Segurança**: todo texto digitado pelo usuário passa por `esc()` antes de entrar no HTML.
- **Dinheiro** é guardado em centavos (`cents`) e formatado com `brl()`.

### Para adicionar uma tela

1. Crie `SCREENS['minha-rota'] = () => ({ title: '…', body: `…` })`.
2. Ligue a navegação com `data-a="go" data-r="minha-rota"` ou com uma ação nova em `A`.
3. Se a tela for uma aba, inclua-a em `TABS`.
4. Cubra o fluxo em `tests/smoke.mjs`.

## Papéis e rotas

- **Voluntário** (`v-*`): início, próximas entregas, inscrição com posto e turno, doação em dinheiro, doação de alimentos e perfil com agenda e histórico.
- **Organização** (`o-*`): painel, publicação de entrega com postos e vagas, detalhe com inscritos e alimentos a caminho.
- **Administrador** (`a-*`): agenda dos parceiros e validação de cadastros de voluntários e organizações.
- **Cadastro**: `vol-cad-1`, `vol-cad-2` e `org-cad`, com telas de sucesso.
- **`roteiro`**: lista as user stories e abre a tela de cada uma. No computador o mesmo roteiro aparece no painel à esquerda do aparelho.

A doação em dinheiro segue o protótipo de papel: Doações e ofertas → Valor (teclado numérico) → Métodos de pagamento (Pix, Cartão, Dinheiro) → Checkout com QR Code. Pagamentos são simulados; o QR Code e o código Pix são ilustrativos.

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

Os tokens estão no topo de `src/styles.css`. Estilize sempre por token; cor literal só no QR Code, que precisa de fundo branco nos dois temas.

- **Paleta do Figma**: verde profundo `#194B35` (escuro `#103123`, claro `#207D54`), amarelo acolhedor `#E9B96E` (`#AF894F`, `#FCD79E`), terracota `#D17C5B` (`#A15D43`, `#F58E66`), creme `#F5F1E7` (`#E0DACB`, `#FFFFFF`) e texto `#2C2C2C`.
- **Tipografia**: no Figma o logotipo “meza” e os títulos usam Aconchego (Bold, Medium e Black, espaçamento de -5%). É uma fonte de teste sem licença para web, então o código usa Outfit com `letter-spacing: -0.05em`. O texto corrido usa Poppins, como no Figma.
- **Elementos**: o slogan, a linha de valores e a faixa xadrez terracota (`.gingham`), que lembra uma toalha de mesa.
- O tema segue o sistema (`prefers-color-scheme`) e respeita `data-theme="light"` ou `"dark"` no `<html>`. O botão de tema (ação `theme`, no painel do computador e no bloco “Protótipo” dos perfis) grava esse atributo e salva a escolha no `localStorage` (chave `meza-tema`), que é a única coisa que sobrevive à recarga; `isDark()` diz o tema em uso. Toda cor nova precisa de valor nos três blocos de tokens.
- **Escalas** (tokens no `:root`): espaçamento `--s-1`…`--s-8` (4, 8, 12, 16, 20, 24, 32, 40 px); tipo `--t-xs`…`--t-2xl` (12, 13, 15, 17, 20, 24, 30 px); raio `--r-sm`/`--r`/`--r-lg` (peças pequenas, controles, cartões). Não use valores soltos nem `style="gap:…"` inline.
- **Ritmo e hierarquia**: `.content` separa blocos por 24 px. Uma seção com título é `<section class="sec">` + `h2.h-md` (20 px); subgrupos usam `.h-sm` (17 px, o mesmo do título de cartão). Cabeçalho de página é `.head` (rótulo `.eyebrow` + `.h-lg`/`.h-xl`); texto introdutório abaixo da barra é `.lede`. Listas (`.list` com `.li` ou `.li-plain`) ficam dentro de `.card`; selos de status vão na linha do título (`.li-t`). Pares rótulo/valor usam `.pair`; dados com ícone usam `.kv` com a linha de apoio em `<small>`. Rótulos não usam caixa alta.
- Layout: no celular o app ocupa a tela com margem `--gut` (16 px, 20 px a partir de 400 px); entre 600 e 979 px o conteúdo vira uma coluna central de 560 px (`.gut`); a partir de 980 px aparece o roteiro à esquerda e o aparelho à direita. Abaixo de 360 px há ajustes em `@media (max-width:359px)`, e o teste de fumaça confere que nada transborda em 320 px.

## Limitações conhecidas

- Sem back end, login ou persistência: tudo vive em memória.
- Pagamentos, e-mails e notificações são simulados.
- Os nomes de inscritos exibidos para organizações são gerados a partir dos dados de exemplo.
