import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Members } from '@/components/site/members';
import { Founders } from '@/components/site/founders';
import { GroupIntro } from '@/components/site/group-intro';
import { Footer } from '@/components/site/footer';

export const metadata: Metadata = {
  title: 'O grupo — DJUFF',
  description:
    'Fundadores, integrantes e ex-integrantes do grupo de desenvolvimento de jogos da UFF.',
};
export const dynamic = 'force-static';
export default function GroupPage() {
  return (
    <main>
      <Header />
      <GroupIntro>
        <Founders />
      </GroupIntro>
      <Members />
      <Footer />
    </main>
  );
}
