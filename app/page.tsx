import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { ProductsBento } from "@/components/products-bento"
import { VapersGrid } from "@/components/vapers-grid"
import { CharacterShowcase } from "@/components/character-showcase"
import { InstagramFeed } from "@/components/instagram-feed"
import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { SmokeOverlay } from "@/components/smoke-overlay"

export default function Home() {
  return (
    <>
      <SmokeOverlay />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <ProductsBento />
        <VapersGrid />
        <CharacterShowcase />
        <InstagramFeed />
        <WhatsAppCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
