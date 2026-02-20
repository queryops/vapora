"use client"

import { Instagram } from "lucide-react"

const posts = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-W5KLPMMHdslk7UUqWgQ0hBUVqOsvBZ.png",
    alt: "El Greench VAPORA Quinta Temporada",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%283%29-FGLWxZTjbcUk38nQxEYBKlfrPYkYVg.png",
    alt: "Haze Ascend Blend Disponible",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%282%29-mJdlLqGgefg44QF3UGQgxwieIG2E7m.png",
    alt: "Panamericana Series",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%285%29-svVkODMyYV32QurEhh83meZy74jPNf.png",
    alt: "Capsulas Runtz",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%288%29-yNJBNmN33dQzUg7n4oPCUoDJBLWdeZ.png",
    alt: "Half Bakd PHC",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%281%29-qCZwlOu1PE7nE7j1NqfQqn0UuWjQdj.png",
    alt: "Vapers de Nicotina",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%286%29-RYY0mCkk7U3LvlS73d8ZZjqxOPSS3j.png",
    alt: "Bateria Brass Knuckles",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%287%29-lzxYVepq3gSFwn8ctROMLzaMUK3sjR.png",
    alt: "Vapers de Nicotina Disponibles",
  },
]

export function InstagramFeed() {
  return (
    <section id="social" className="relative py-24" style={{ background: "#0D1B2A" }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2">
            <Instagram className="h-5 w-5 text-[#F8F9FA]" />
            <span className="text-sm font-semibold tracking-wider text-[#F8F9FA] uppercase">
              @vap.ora
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-[#F8F9FA] sm:text-4xl text-balance">
            {'S\u00edguenos en Instagram'}
          </h2>
          <p className="max-w-md text-sm text-[#6C757D] leading-relaxed">
            {'Ent\u00e9rate de drops antes que todos. Nuevas temporadas, productos y m\u00e1s.'}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/vap.ora"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#0D1B2A]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-[#F8F9FA]" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://instagram.com/vap.ora"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#1e3a52] px-6 py-3 text-sm font-semibold text-[#F8F9FA] transition-all hover:border-[#F8F9FA]/30 hover:bg-[#F8F9FA]/5"
          >
            <Instagram className="h-4 w-4" />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
