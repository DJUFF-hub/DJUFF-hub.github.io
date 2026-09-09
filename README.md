# DJUFF — site institucional

Esqueleto editorial e pipeline de projetos para a fachada pública do DJUFF.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Dados do GitHub

```bash
npm run sync:projects
```

Sem `GITHUB_TOKEN`, a API pública do GitHub aplica um limite menor. No GitHub Actions, o token temporário do próprio workflow é usado automaticamente.

Leia `DESIGN-HANDOFF.md` antes de iniciar o frontend final.
