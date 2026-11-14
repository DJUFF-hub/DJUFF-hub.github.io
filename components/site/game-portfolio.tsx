import catalogData from '@/public/data/itch-games.json';
import { siteContent } from '@/content/site';
import type { ItchCatalog } from '@/lib/itch';
import { ExternalLink } from './external-link';
const catalog = catalogData as ItchCatalog;
export function GamePortfolio() {
  return (
    <section className="section projects-section" id="jogos">
      <div className="section-heading">
        <div>
          <span className="section-number">01</span>
          <h2>Jogos</h2>
        </div>
        <div>
          <p>
            Projetos do coletivo e de seus membros, organizados pelas mesmas
            coleções do nosso portfólio.
          </p>
          <ExternalLink href={siteContent.links.itch}>
            Ver perfil completo no itch.io
          </ExternalLink>
        </div>
      </div>
      <div className="collection-list">
        {catalog.collections.map((collection, i) => (
          <section
            className="game-collection"
            key={collection.title}
            aria-labelledby={`collection-${i}`}
          >
            <div className="collection-heading">
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3 id={`collection-${i}`}>{collection.title}</h3>
              <ExternalLink href={collection.url}>Abrir coleção</ExternalLink>
            </div>
            <div className="game-grid">
              {collection.games.map((game) => (
                <a
                  className="game-item"
                  href={game.url}
                  target="_blank"
                  rel="noreferrer"
                  key={game.url}
                >
                  <img
                    src={game.image}
                    alt={`Capa de ${game.name}`}
                    loading="lazy"
                    width="315"
                    height="250"
                  />
                  <span className="game-meta">
                    <strong>{game.name}</strong>
                    {game.description && <small>{game.description}</small>}
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
