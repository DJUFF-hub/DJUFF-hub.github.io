import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DJUFF — Desenvolvimento de Jogos da UFF',
  description: 'Coletivo estudantil de formação, produção e cultura de jogos da Universidade Federal Fluminense.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
