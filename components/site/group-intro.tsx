import type { ReactNode } from 'react';
import { siteContent } from '@/content/site';

export function GroupIntro({ children }: { children: ReactNode }) {
  return (
    <section
      className="section group-intro"
      aria-labelledby="group-intro-title"
    >
      <div className="section-heading">
        <div>
          <span className="section-number">01</span>
          <h1 id="group-intro-title">O grupo</h1>
        </div>
        <p>
          Formação, troca e produção de jogos dentro da Universidade Federal
          Fluminense.
        </p>
      </div>
      {children}
    </section>
  );
}

export function GroupStory() {
  return (
    <section
      className="section group-story"
      aria-labelledby="group-story-title"
    >
      <h1 className="statement" id="group-story-title">
        {siteContent.group.statement}
      </h1>
      <div>
        {siteContent.group.history.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
