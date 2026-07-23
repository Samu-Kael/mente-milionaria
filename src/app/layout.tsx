import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mente Milionária - Organizador de Finanças',
  description: 'Sistema completo para organizar as suas finanças pessoais e metas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500 selection:text-zinc-950 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}