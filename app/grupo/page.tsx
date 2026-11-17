import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Members } from '@/components/site/members';
import { Founders } from '@/components/site/founders';
import { Footer } from '@/components/site/footer';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
  title: 'O grupo — DJUFF',
  description:
    'História e integrantes do grupo de desenvolvimento de jogos da UFF.',
};
export const dynamic = 'force-static';
export default function GroupPage() {
  return (
    <main>
      <Header />
      <section className="section group-intro">
        <div className="section-heading">
          <div>
            <span className="section-number">01</span>
            <h1>O grupo</h1>
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
        <Founders />
      </section>
      <Members />
      <Footer />
    </main>
  );
}
