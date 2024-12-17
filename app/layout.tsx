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
  title: "Patte à l'eau",
  description: "Services pour animaux de compagnie",
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
