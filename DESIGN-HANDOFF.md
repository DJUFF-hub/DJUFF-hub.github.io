# Handoff para design

Este projeto separa apresentação, conteúdo e sincronização. A designer pode redesenhar a página sem alterar o pipeline do GitHub.

## Onde trabalhar

- `app/page.tsx`: composição mínima da página.
- `components/site/`: um componente por seção, onde a frontend pode trabalhar isoladamente.
- `app/globals.css`: tokens, layout, tipografia e responsividade.
- `content/site.ts`: textos, links, atividades e parceiros.
- `public/`: logotipo, fotografias, capturas e outros assets aprovados pelo grupo.

## O que não precisa ser alterado

- `public/data/itch-games.json`: último catálogo válido gerado automaticamente.
- `content/itch-overrides.json`: correções editoriais, renomes e jogos ocultos.
- `scripts/sync-itch.mjs`: sincronizador resiliente do perfil público.
- `.github/workflows/deploy-pages.yml`: compila e publica o site.

## Catálogo de jogos

O workflow consulta o perfil do DJUFF antes de cada publicação e atualiza `public/data/itch-games.json`. Se a coleta falhar ou retornar um catálogo incompleto, o passo fica sinalizado no Actions, mas a compilação usa o último JSON válido e a página não sai do ar. Ajustes manuais ficam em `content/itch-overrides.json`.

## Princípios visuais

- Usar imagens reais dos jogos e eventos, sempre com crédito e autorização.
- Tratar a diversidade estética dos jogos como acervo, não como inconsistência.
- Evitar cartões repetidos, gradientes genéricos, ilustração gerada e textos promocionais vagos.
- Manter foco visível, contraste, navegação por teclado e corpo de texto com pelo menos 16 px.

## Identidade aplicada aos placeholders

Os tokens em `app/globals.css` seguem o manual entregue pela equipe:

- Primárias: `#33387c`, `#5b61ba`, `#858ced` e `#8c52ff`.
- Neutras: `#000000`, `#737373`, `#a6a6a6` e `#ffffff`.
- Títulos: Anton.
- Texto e interface: DM Sans.

As fontes são servidas localmente pelos pacotes `@fontsource`, sem depender do Google Fonts no navegador. A marca provisória no cabeçalho e a faixa do estado vazio são placeholders; substitua pela versão vetorial oficial quando a equipe disponibilizar o arquivo-fonte do logo.

## Publicação

Crie o repositório da página na organização, envie este projeto para a branch `main` e configure **Settings → Pages → Source → GitHub Actions**. O workflow também roda diariamente para descobrir novos repositórios públicos.
