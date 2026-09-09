# Handoff para design

Este projeto separa apresentação, conteúdo e sincronização. A designer pode redesenhar a página sem alterar o pipeline do GitHub.

## Onde trabalhar

- `app/page.tsx`: estrutura semântica e componentes da página.
- `app/globals.css`: tokens, layout, tipografia e responsividade.
- `content/site.ts`: textos, links, atividades e parceiros.
- `public/`: logotipo, fotografias, capturas e outros assets aprovados pelo grupo.

## O que não precisa ser alterado

- `scripts/sync-github.mjs`: consulta os repositórios públicos.
- `lib/projects.ts`: contrato dos dados de projeto.
- `.github/workflows/deploy-pages.yml`: atualiza o catálogo e publica o site.

## Convenção dos repositórios

Preencha a descrição de cada repositório e use tópicos para controlar a vitrine:

- `featured`: prioriza o projeto na lista.
- `released`, `prototype` ou `in-development`: estado exibido.
- `hide-from-site`: não publica o repositório na fachada.
- A linguagem principal do GitHub aparece como tecnologia.

O arquivo `public/data/projects.json` é gerado automaticamente. Não edite à mão, salvo para prototipação local.

## Princípios visuais

- Usar imagens reais dos jogos e eventos, sempre com crédito e autorização.
- Tratar a diversidade estética dos jogos como acervo, não como inconsistência.
- Evitar cartões repetidos, gradientes genéricos, ilustração gerada e textos promocionais vagos.
- Manter foco visível, contraste, navegação por teclado e corpo de texto com pelo menos 16 px.

## Publicação

Crie o repositório da página na organização, envie este projeto para a branch `main` e configure **Settings → Pages → Source → GitHub Actions**. O workflow também roda diariamente para descobrir novos repositórios públicos.
