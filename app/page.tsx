import Banner from '@/components/home/Banner'
import About from '@/components/home/About'
import Service from '@/components/home/Service'
import Testimonial from '@/components/home/Testimonial'
import Faq from '@/components/home/Faq'
import Contact from '@/components/home/Contact'
import Partner from '@/components/home/Partner'
import Pricing from '@/components/home/Pricing'

export default function Home() {
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