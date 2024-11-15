import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Initialize Inter font with all needed weights
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

// Metadata configuration
export const metadata: Metadata = {
  title: {
    template: '%s | Blockchain & Kryptographie',
    default: 'Blockchain & Kryptographie Präsentation',
  },
  description: 'Eine interaktive Präsentation über Blockchain und Kryptographie Grundlagen',
  keywords: [
    'Blockchain',
    'Kryptographie',
    'Präsentation',
    'Technologie',
    'Smart Contracts',
    'Dezentralisierung',
    'Web3',
    'DLT'
  ],
  authors: [{ name: 'M T' }],
  creator: 'M T',
  publisher: 'M T',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://your-domain.com', 
    title: 'Blockchain & Kryptographie Präsentation',
    description: 'Eine interaktive Präsentation über Blockchain und Kryptographie Grundlagen',
    siteName: 'Blockchain & Kryptographie',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain & Kryptographie Präsentation',
    description: 'Eine interaktive Präsentation über Blockchain und Kryptographie Grundlagen',
    creator: '@yourusername',
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#13103F',
};

// Interface for layout props
interface RootLayoutProps {
  children: React.ReactNode;
}

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="de" 
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preconnect to external resources */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#13103F] text-white antialiased">
        {/* Next.js 13 Anti-flicker snippet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                document.documentElement.style.opacity = "0";
                window.onload = function() {
                  document.documentElement.style.opacity = "1";
                };
              })();
            `,
          }}
        />

        {/* Main content wrapper */}
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>

        {/* Vercel Analytics */}
        <Analytics />

        {/* Portal container for modals */}
        <div id="portal-root" />
      </body>
    </html>
  );
}