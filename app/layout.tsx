import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#15121c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'AXCEL — Train Smarter. Build Stronger.',
  description: 'High-performance fitness app for athletes and fitness enthusiasts.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AXCEL',
  },
  applicationName: 'AXCEL',
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/icons/icon.svg',
    apple: '/icons/apple-touch-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${bebasNeue.variable} ${dmSans.variable} bg-background text-on-background font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
