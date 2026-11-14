# Guia de frontend

O projeto usa React, TypeScript e Vinext (rotas no formato App Router), com Vite e Tailwind CSS 4. Os componentes do site usam CSS convencional. Não é necessário trocar o framework para alterar o visual ou acrescentar bibliotecas.

## Mapa dos arquivos

| Local | Responsabilidade |
| --- | --- |
| `app/` | Rotas e composição das páginas; metadados em cada página e no layout |
| `app/globals.css` | Entrada dos estilos e ordem de importação |
| `styles/theme.css` | Paleta oficial, cores por função, fontes e espaçamento lateral |
| `styles/fonts.ts` | Arquivos de fontes e pesos carregados localmente |
| `styles/base.css` | Reset mínimo e regras globais |
| `styles/site/navigation.css` | Cabeçalho, marca e navegação |
| `styles/site/sections.css` | Seções editoriais, jogos, atividades e parceiros |
| `styles/site/group.css` | Foto inicial, história e integrantes |
| `styles/site/footer.css` | Rodapé |
| `styles/responsive.css` | Ajustes de telas menores e movimento reduzido |
| `components/site/` | Componentes das páginas institucionais |
| `components/ui/` | Componentes reutilizáveis disponíveis; independentes das seções |
| `content/site.ts` | Marca, textos, história, atividades, parceiros e links |
| `content/navigation.ts` | Rótulos e destinos do menu |
| `content/members.ts` | Membros atuais, ex-membros e caminhos das fotos |
| `public/brand/` | Logo oficial, sem alterações no arquivo fornecido |
| `public/participants/` | Retratos dos integrantes |
| `public/partners/` | Marcas dos parceiros |
| `public/sponsors/` | Marcas dos patrocinadores recorrentes |
| `lib/`, `hooks/` | Utilitários, leitura do catálogo e hooks compartilhados |
| `scripts/sync-itch.mjs` | Sincronização do portfólio |

## Identidade e estilos

A paleta original fica nas variáveis `--brand-*`. As variáveis por função (`--background`, `--surface`, `--text`, `--heading`, `--accent`, `--line`) determinam como ela é aplicada. Para mudar o tema, comece pelos aliases em `styles/theme.css`, sem substituir cores em dezenas de seletores.

O azul `#33387c` é o fundo principal e o índigo `#5b61ba` separa áreas. O lilás `#858ced` destaca títulos grandes e foco. O violeta `#8c52ff` permanece disponível como cor de marca. Cinzas servem a bordas e elementos neutros. Branco é usado principalmente nos textos e em pequenas bases para logos de parceiros, sem grandes fundos brancos. Não há gradientes ou sombras decorativas.

Anton é a fonte dos títulos e DM Sans, dos textos e da interface. Carregamos Anton 400 e DM Sans 400, 500 e 700. Para trocar fontes, instale o pacote, atualize `styles/fonts.ts` e altere `--font-body` e `--font-display`. Prefira os pesos já carregados.

Textos pequenos usam branco: o cinza `#a6a6a6` e o lilás `#858ced` sobre o azul principal têm contraste de 4,32:1 e 3,49:1, insuficiente para texto normal no nível AA. Branco sobre azul tem 10,51:1; branco sobre índigo, 5,44:1. Reavalie contraste ao trocar aliases.

## Bibliotecas e componentes novos

1. Instale dependências de execução com `npm install nome-do-pacote` e ferramentas de desenvolvimento com `npm install -D nome-do-pacote`.
2. Importe o componente no arquivo que o utiliza. Componentes que precisam de estado ou APIs do navegador devem declarar `'use client'`.
3. Se a biblioteca tiver CSS global, importe-o em `app/globals.css` antes dos estilos locais para permitir sobrescritas. Use as variáveis do tema nos ajustes.
4. Para estilos isolados de componentes novos, arquivos `Nome.module.css` podem ficar ao lado do `.tsx`. Mantenha tokens compartilhados em `theme.css`.
5. Tailwind está disponível pelo import inicial. `components.json` mantém a entrada global para o gerador shadcn. Componentes de bibliotecas podem exigir seus próprios tokens; mapeie-os aos aliases do tema conforme forem usados.

## Validação e publicação

```bash
npm ci
npm run dev
npm run typecheck
npm run build:pages
```

Confira as cinco rotas (`/`, `/grupo`, `/jogos`, `/atividades`, `/parceiros`) em desktop e celular, incluindo navegação, recorte das fotos e foco do teclado. O comando `npm run format:site` formata apenas os arquivos institucionais, sem reformatar a biblioteca de UI inteira.

O workflow em `.github/workflows/deploy-pages.yml` publica no GitHub Pages. Preserve `public/data/itch-games.json`, `content/itch-overrides.json` e o sincronizador ao fazer mudanças apenas visuais.

Os patrocinadores recorrentes são editados em `siteContent.sponsors`, em `content/site.ts`, com `name`, `url` e `logo`. Use `darkLogoBackground: true` para marcas brancas sobre fundo transparente. Parceiros e patrocinadores compartilham `components/site/organization-list.tsx`.

As fotos da página inicial ficam em `siteContent.homePhotos`, em `content/site.ts`. Cada entrada define `src`, `alt`, `width` e `height`. As duas primeiras fotos aparecem lado a lado no desktop; a última ocupa a largura total abaixo. No celular, as três ficam em uma coluna, preservando a proporção original.
