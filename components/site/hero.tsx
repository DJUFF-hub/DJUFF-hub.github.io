import { siteContent } from '@/content/site';
import { ExternalLink } from './external-link';
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="eyebrow">
        Universidade Federal Fluminense · Niterói, RJ
      </div>
      <h1>
        Jogos se
        <br />
        aprendem <em>fazendo.</em>
      </h1>
      <div className="hero-bottom">
        <p>{siteContent.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#jogos">
            Conheça os jogos <span aria-hidden="true">↘</span>
          </a>
          <ExternalLink href={siteContent.links.itch}>
            Jogar no itch.io
          </ExternalLink>
        </div>
      </div>
      <div className="hero-marquee" aria-label="Áreas de atuação">
        {siteContent.disciplines.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
