import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { GamePortfolio } from '@/components/site/game-portfolio';
import { Footer } from '@/components/site/footer';

export const metadata: Metadata = {
  title: 'Jogos — DJUFF',
  description: 'Jogos publicados pelo DJUFF e por seus integrantes.',
};
export const dynamic = 'force-static';
export default function GamesPage() {
  return (
    <main>
      <Header />
      <GamePortfolio />
      <Footer />
    </main>
  );
}
