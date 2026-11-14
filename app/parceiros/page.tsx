import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Partners, Sponsors } from '@/components/site/partners';
import { Footer } from '@/components/site/footer';

export const metadata: Metadata = {
  title: 'Parceiros — DJUFF',
  description:
    'Instituições e grupos parceiros e patrocinadores recorrentes dos eventos do DJUFF.',
};
export const dynamic = 'force-static';
export default function PartnersPage() {
  return (
    <main>
      <Header />
      <Partners />
      <Sponsors />
      <Footer />
    </main>
  );
}
