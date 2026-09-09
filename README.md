# DJUFF — site institucional

Esqueleto editorial e pipeline de projetos para a fachada pública do DJUFF.

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
