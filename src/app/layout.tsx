import type { Metadata } from 'next';
import { LanguageProvider } from '../contexts/language-context';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { Toaster } from '../components/ui/toaster';
import { cn } from '../lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'BAZ CONSULTING | Saudi Premium Residency & Business Setup',
  description: 'Your expert guide to obtaining Saudi Premium Residency and establishing your business in Saudi Arabia. We offer comprehensive services for individuals and businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&family=Noto+Kufi+Arabic:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
