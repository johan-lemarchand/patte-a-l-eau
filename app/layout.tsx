import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/style.css";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'Patte à l\'eau | Toilettage pour chiens et chats à Rountzenheim-Auenheim',
    template: '%s | Patte à l\'eau'
  },
  description: 'Salon de toilettage professionnel pour chiens et chats à Rountzenheim-Auenheim. Services de toilettage, bain, coupe et soins adaptés à chaque animal.',
  keywords: ['toilettage', 'chien', 'chat', 'Rountzenheim', 'Auenheim', 'Alsace', 'toiletteur', 'animaux'],
  authors: [{ name: 'Clara' }],
  creator: 'Clara',
  metadataBase: new URL('https://pattesaleau-toilettage.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pattesaleau-toilettage.fr',
    title: 'Patte à l\'eau | Toilettage pour chiens et chats',
    description: 'Salon de toilettage professionnel à Rountzenheim-Auenheim. Services personnalisés pour le bien-être de vos animaux.',
    siteName: 'Patte à l\'eau',
    images: [{
      url: '/og-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Patte à l\'eau - Toilettage pour chiens et chats à Rountzenheim-Auenheim'
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'fFGYn-20JhShCB1Lg5yOrLuiaZFBByGL_6JtqV7dr2A'
  },
  alternates: {
    canonical: 'https://pattesaleau-toilettage.fr'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
        
        {/* Scripts externes */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script 
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
