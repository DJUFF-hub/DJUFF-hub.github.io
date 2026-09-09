import { load } from 'cheerio';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const source = process.env.ITCH_PROFILE_URL || 'https://djuff-oficial.itch.io/';
const destination = resolve('public/data/itch-games.json');
const temporary = `${destination}.tmp`;
const overridesPath = resolve('content/itch-overrides.json');

const response = await fetch(source, {
  headers: { 'User-Agent': 'DJUFF-site-catalog-sync/1.0 (+https://github.com/DJUFF-Projects)' },
});
if (!response.ok) throw new Error(`itch.io respondeu ${response.status}`);

const $ = load(await response.text());
const overrides = JSON.parse(await readFile(overridesPath, 'utf8'));
const hiddenGames = new Set(overrides.hiddenGames || []);
const collections = [];

$('.collection_row').each((_, row) => {
  const collectionLink = $(row).find('h2 a').first();
  const rawTitle = collectionLink.text().trim();
  const games = [];

  $(row).find('.game_cell').each((__, cell) => {
    const titleLink = $(cell).find('.game_title a').first();
    const url = titleLink.attr('href');
    const image = $(cell).find('img').attr('data-lazy_src') || $(cell).find('img').attr('src');
    if (!url || !image || hiddenGames.has(url)) return;
    games.push({
      name: titleLink.text().trim(),
      url,
      image,
      description: $(cell).find('.game_text').attr('title') || $(cell).find('.game_text').text().trim() || undefined,
      ...(overrides.games?.[url] || {}),
    });
  });

  if (rawTitle && games.length) collections.push({
    title: overrides.collections?.[rawTitle]?.title || rawTitle,
    url: collectionLink.attr('href') || source,
    games,
  });
});

const gameCount = collections.reduce((total, collection) => total + collection.games.length, 0);
if (collections.length < 2 || gameCount < 5) {
  throw new Error(`Catálogo incompleto: ${collections.length} coleções e ${gameCount} jogos. O arquivo anterior foi preservado.`);
}

const catalog = { source, syncedAt: new Date().toISOString(), collections };
await mkdir(dirname(destination), { recursive: true });
await writeFile(temporary, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
await rename(temporary, destination);
console.log(`Sincronizados ${gameCount} jogos em ${collections.length} coleções.`);
