import type { Metadata } from 'next';
import antonLatinUrl from '@fontsource/anton/files/anton-latin-400-normal.woff2?url';
import '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'DJUFF — Desenvolvimento de Jogos da UFF',
  description:
    'Coletivo estudantil de formação, produção e cultura de jogos da Universidade Federal Fluminense.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href={antonLatinUrl}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
