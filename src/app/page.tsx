import { Banner } from '@/sections/Banner'
import { Features } from '@/sections/Features'
import { Hero } from '@/sections/Hero'
import { LogoTicker } from '@/sections/LogoTicker'
import { Navbar } from '@/sections/Navbar'
import { ProductShowcase } from '@/sections/ProductShowcase'

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
    </>
  )
}
