import { siteContent } from '@/content/site';
export function Footer() {
  return (
    <footer>
      <div>
        <strong>DJUFF</strong>
        <p>Desenvolvimento de Jogos da Universidade Federal Fluminense.</p>
      </div>
      <div className="footer-links">
        <a href={siteContent.links.github}>GitHub ↗</a>
        <a href={siteContent.links.instagram}>Instagram ↗</a>
        <a href={siteContent.links.itch}>itch.io ↗</a>
      </div>
      <p className="footer-note">Site e conteúdo mantidos pelo coletivo.</p>
    </footer>
  );
}
