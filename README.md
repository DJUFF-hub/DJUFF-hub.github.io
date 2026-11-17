# DJUFF — site institucional

Esqueleto editorial e pipeline de projetos para a fachada pública do DJUFF.

## Páginas

- `/` — história do grupo, links para as páginas do site e galeria de fotos
- `/jogos/` — portfólio sincronizado com o itch.io
- `/grupo/` — fundadores, membros atuais e ex-integrantes
- `/atividades/` — frentes permanentes do coletivo
- `/parceiros/` — rede institucional e universitária

## Desenvolvimento

```bash
npm install
npm run dev
```

## Portfólio

Os jogos são sincronizados das coleções públicas do perfil do DJUFF no itch.io:

```bash
npm run sync:itch
```

O GitHub Actions executa essa sincronização antes de publicar. Correções editoriais ficam em `content/itch-overrides.json`.

Leia `DESIGN-HANDOFF.md` antes de iniciar o frontend final.

## Fotos dos integrantes

As fotos ficam em `public/participants/`. Em `content/members.ts`, use o campo opcional `photo` com o caminho público, por exemplo `/participants/Ana Beatriz.jpeg`. A lista `members` reúne os membros atuais, `formerMembers`, os ex-integrantes, e `partnerMembers`, os agregados parceiros. Quem ainda não tem foto mantém o espaço reservado. Os retratos são exibidos na proporção 4:5, com recorte central.

## Edição de conteúdo e identidade

Consulte [o guia de frontend](docs/FRONTEND.md) para localizar os textos, integrantes, navegação, logo, paleta, fontes e estilos. O guia também explica como incluir bibliotecas e validar alterações.
