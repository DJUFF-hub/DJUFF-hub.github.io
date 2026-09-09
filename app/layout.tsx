import type { Metadata } from 'next';
import '@fontsource/anton/400.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'DJUFF — Desenvolvimento de Jogos da UFF',
  description: 'Coletivo estudantil de formação, produção e cultura de jogos da Universidade Federal Fluminense.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
