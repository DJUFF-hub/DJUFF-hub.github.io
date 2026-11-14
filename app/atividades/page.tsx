import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Activities } from '@/components/site/activities';
import { Footer } from '@/components/site/footer';

export const metadata: Metadata = {
  title: 'Atividades — DJUFF',
  description: 'Formação, produção, comunidade e publicação no DJUFF.',
};
export const dynamic = 'force-static';
export default function ActivitiesPage() {
  return (
    <main>
      <Header />
      <Activities />
      <Footer />
    </main>
  );
}
