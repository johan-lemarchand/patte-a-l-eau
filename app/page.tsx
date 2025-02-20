import Banner from '@/components/home/Banner'
import About from '@/components/home/About'
import Service from '@/components/home/Service'
import Testimonial from '@/components/home/Testimonial'
import Faq from '@/components/home/Faq'
import Contact from '@/components/home/Contact'
import Partner from '@/components/home/Partner'
import Pricing from '@/components/home/Pricing'
import { preloadImages } from '@/utils/minio-client'
import content from '@/content.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Salon de toilettage professionnel à Rountzenheim-Auenheim. Toilettage pour chiens et chats, bain, coupe, tonte et soins adaptés. Produits naturels et éco-responsables.',
  alternates: {
    canonical: 'https://pattesaleau-toilettage.fr'
  }
}

export default function Home() {
  // Précharger les images importantes au chargement de la page
  const importantImages = [
    content.header.logo.src,
    content.banner.images.main.src,
    ...content.services.items.map(service => service.image)
  ];

  preloadImages(importantImages);

  return (
    <main>
      <Banner />
      <About />
      <Service />
      <Pricing />
      <Testimonial />
      <Faq />
      <Partner />
      <Contact />
    </main>
  )
} 