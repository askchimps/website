import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'AskChimps — AI voice agents that qualify your leads',
  description:
    'Every inbound lead from your website gets called within 60 seconds. We qualify them. You see only the warm ones.',
  metadataBase: new URL('https://www.askchimps.ai'),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-night text-ink font-body antialiased">{children}</body>
    </html>
  );
}
