import { siteContent } from '@/content/site';
import projectsData from '@/public/data/projects.json';
import type { Project } from '@/lib/projects';

const projects = projectsData as Project[];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link" href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="DJUFF — início"><span aria-hidden="true">D</span> DJUFF</a>
        <nav aria-label="Navegação principal"><a href="#jogos">Jogos</a><a href="#grupo">O grupo</a><a href="#atividades">Atividades</a><a href="#parceiros">Parceiros</a></nav>
        <a className="header-cta" href={siteContent.links.instagram} target="_blank" rel="noreferrer">Participar <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="eyebrow">Universidade Federal Fluminense · Niterói, RJ</div>
        <h1>Jogos se<br />aprendem <em>fazendo.</em></h1>
        <div className="hero-bottom">
          <p>{siteContent.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#jogos">Conheça os jogos <span aria-hidden="true">↘</span></a><ExternalLink href={siteContent.links.itch}>Jogar no itch.io</ExternalLink></div>
        </div>
        <div className="hero-marquee" aria-label="Áreas de atuação">{siteContent.disciplines.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="section projects-section" id="jogos">
        <div className="section-heading"><div><span className="section-number">01</span><h2>Projetos</h2></div><p>Jogos e ferramentas publicados pela organização no GitHub. A lista é atualizada automaticamente.</p></div>
        {projects.length > 0 ? (
          <ol className="project-list">{projects.map((project, index) => <li key={project.repository}><span className="project-index">{String(index + 1).padStart(2, '0')}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><span>{project.statusLabel}</span><span>{project.technology || 'Tecnologia não informada'}</span></div><ExternalLink href={project.repositoryUrl}>Código</ExternalLink></li>)}</ol>
        ) : (
          <div className="empty-projects"><p className="empty-kicker">Em preparação</p><h3>Os primeiros repositórios públicos entram aqui automaticamente.</h3><div><p>A estrutura já está pronta para título, descrição, tecnologia, estado do projeto e links para código e itch.io.</p><ExternalLink href={siteContent.links.github}>Abrir organização no GitHub</ExternalLink></div></div>
        )}
      </section>

      <section className="section about-section" id="grupo">
        <div className="section-heading light"><div><span className="section-number">02</span><h2>O grupo</h2></div></div>
        <div className="about-grid"><p className="statement">Um coletivo estudantil para quem quer entender jogos por dentro — e construir junto.</p><div className="about-copy"><p>{siteContent.about}</p><p className="fact-line">Desde 2019 · Aberto a diferentes cursos e níveis de experiência</p></div></div>
      </section>

      <section className="section" id="atividades">
        <div className="section-heading"><div><span className="section-number">03</span><h2>O que fazemos</h2></div><p>As frentes mudam conforme as pessoas e os projetos. Estas são as quatro atividades permanentes.</p></div>
        <ol className="activity-list">{siteContent.activities.map((activity, index) => <li key={activity.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{activity.title}</h3><p>{activity.description}</p></li>)}</ol>
      </section>

      <section className="section partners-section" id="parceiros">
        <div className="section-heading"><div><span className="section-number">04</span><h2>Parceiros</h2></div><p>Instituições e grupos que fortalecem a formação, a produção e o ecossistema de jogos no Rio de Janeiro.</p></div>
        <div className="partner-groups">{siteContent.partnerGroups.map((group) => <div key={group.label}><h3>{group.label}</h3><ul>{group.partners.map((partner) => <li key={partner.name}><a href={partner.url} target="_blank" rel="noreferrer">{partner.name}<span aria-hidden="true">↗</span></a></li>)}</ul></div>)}</div>
      </section>

      <footer><div><strong>DJUFF</strong><p>Desenvolvimento de Jogos da Universidade Federal Fluminense.</p></div><div className="footer-links"><a href={siteContent.links.github}>GitHub ↗</a><a href={siteContent.links.instagram}>Instagram ↗</a><a href={siteContent.links.itch}>itch.io ↗</a></div><p className="footer-note">Site e conteúdo mantidos pelo coletivo.</p></footer>
    </main>
  );
}
