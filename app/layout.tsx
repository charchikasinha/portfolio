import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: `${site.tagline}. ${site.statement}`,
  openGraph: { title: site.name, description: site.tagline, type: 'website' },
};

export const viewport: Viewport = { themeColor: '#F7F6F2' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip mono" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
