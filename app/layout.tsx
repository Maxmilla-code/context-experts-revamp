import type { Metadata } from 'next';
import './globals.css';
import '@/styles/animations.css';
import { Inter, Archivo } from 'next/font/google';
import { siteConfig } from '@/config/site';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
        <Header />
        <main className="flex-1 container-px">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
