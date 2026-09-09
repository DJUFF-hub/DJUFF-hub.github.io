import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const organization = process.env.GITHUB_ORG || 'DJUFF-Projects';
const token = process.env.GITHUB_TOKEN;
const destination = resolve('public/data/projects.json');
const statusLabels = { released: 'Publicado', prototype: 'Protótipo', 'in-development': 'Em desenvolvimento', archived: 'Arquivado' };
const response = await fetch(`https://api.github.com/orgs/${organization}/repos?type=public&sort=updated&per_page=100`, {
  headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'djuff-site-project-sync', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
});
if (!response.ok) throw new Error(`GitHub respondeu ${response.status}: ${await response.text()}`);
const repositories = await response.json();
const projects = repositories
  .filter((repo) => !repo.fork && !repo.archived && !repo.topics?.includes('hide-from-site'))
  .map((repo) => {
    const status = ['released', 'prototype', 'in-development', 'archived'].find((item) => repo.topics?.includes(item)) || 'in-development';
    return { title: repo.name.replaceAll('-', ' '), description: repo.description || 'Projeto do DJUFF.', repository: repo.full_name, repositoryUrl: repo.html_url, technology: repo.language || undefined, year: Number(repo.created_at.slice(0, 4)), featured: repo.topics?.includes('featured') || false, status, statusLabel: statusLabels[status], topics: repo.topics || [], updatedAt: repo.updated_at };
  })
  .sort((a, b) => Number(b.featured) - Number(a.featured) || b.updatedAt.localeCompare(a.updatedAt));
await mkdir(dirname(destination), { recursive: true });
await writeFile(destination, `${JSON.stringify(projects, null, 2)}\n`, 'utf8');
console.log(`Sincronizados ${projects.length} projetos de ${organization}.`);
