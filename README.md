# meza

“a mesa é de todos.”

Protótipo funcional do MEZA, aplicativo de voluntariado que conecta voluntários a instituições parceiras que distribuem alimentos. Tem três visões: voluntário, organização parceira e administrador do programa.

## Abrir

Dê dois cliques em `index.html`. Funciona sem instalar nada.

No computador, o botão **Tela cheia** fica no painel ao lado do aparelho (ou use F11).

## Desenvolvimento

```bash
npm install
npx playwright install chromium   # só na primeira vez
npm test                          # percorre os fluxos principais
npm run build                     # gera dist/meza.html, um arquivo único
```

O `CLAUDE.md` descreve a arquitetura, as user stories e a identidade visual.

## Referências

- Protótipo de papel e folha de user stories: `docs/referencias/`
- Identidade visual: [Figma](https://www.figma.com/design/8MHxkJJR7gRTR1AvuFGXJc/MEZA)
