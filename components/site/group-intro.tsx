import { siteContent } from '@/content/site';

export function GroupIntro() {
  return (
    <section
      className="section group-intro"
      aria-labelledby="group-intro-title"
    >
      <div className="section-heading">
        <div>
          <h1 id="group-intro-title">O grupo</h1>
        </div>
        <p>
          Formação, troca e produção de jogos dentro da Universidade Federal
          Fluminense.
        </p>
      </div>
      <div className="group-story">
        <p className="statement">{siteContent.group.statement}</p>
        <div>
          {siteContent.group.history.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
