"use client"

import { ArrowRight } from "lucide-react"

export function CharacterShowcase() {
  return (
    <section
      id="temporada"
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(180deg, #0D1B2A 0%, #0b1e12 50%, #0D1B2A 100%)" }}
    >
      {/* Glow background */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(27,67,50,0.5) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#00FF87] uppercase">
            Quinta Temporada
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl md:text-6xl text-balance">
            EL GREENCH
          </h2>
          <p className="max-w-lg text-base text-[#6C757D] leading-relaxed">
            {'Nuestro personaje ic\u00f3nico presenta las nuevas colecciones. Reb\u00e9lde, sofisticado y siempre con la mejor calidad.'}
          </p>
        </div>

        {/* Character grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* El Greench - Military Edition */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#1e3a52]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent z-[1]" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-W5KLPMMHdslk7UUqWgQ0hBUVqOsvBZ.png"
              alt="El Greench - Quinta Temporada VAPORA con Runtz AK-47"
              className="h-full min-h-[400px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 md:min-h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-8">
              <span className="mb-2 inline-block rounded-full bg-[#00FF87] px-3 py-1 text-[10px] font-bold tracking-wider text-[#0D1B2A] uppercase">
                El Greench Edition
              </span>
              <h3 className="mb-2 text-3xl font-black text-[#F8F9FA]">
                Runtz AK-47
              </h3>
              <p className="mb-4 text-sm text-[#6C757D]">
                {'HHC Hybrid - Vape Cartridge 1 Gram. Porque tu d\u00eda merece un plot twist.'}
              </p>
              <a
                href="https://wa.me/573244613307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00FF87] transition-all group-hover:gap-3"
              >
                {'Quiero este'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* El Greench - Panamericana Edition */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#1e3a52]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent z-[1]" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%282%29-mJdlLqGgefg44QF3UGQgxwieIG2E7m.png"
              alt="El Greench - Panamericana Series con VAPORA Cartridge"
              className="h-full min-h-[400px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 md:min-h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-8">
              <span className="mb-2 inline-block rounded-full bg-[#FFD60A] px-3 py-1 text-[10px] font-bold tracking-wider text-[#0D1B2A] uppercase">
                Panamericana Series
              </span>
              <h3 className="mb-2 text-3xl font-black text-[#F8F9FA]">
                VAPORA Classics
              </h3>
              <p className="mb-4 text-sm text-[#6C757D]">
                Panamericana. Nuevamente disponible. Cartuchos premium para toda Latinoamerica.
              </p>
              <a
                href="https://wa.me/573244613307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD60A] transition-all group-hover:gap-3"
              >
                {'Llev\u00e1me'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 flex flex-col items-center text-center">
          <blockquote className="max-w-2xl text-xl font-light italic text-[#6C757D] leading-relaxed sm:text-2xl">
            {'"Quinta temporada. Nuevas cepas. Mismo ritual."'}
          </blockquote>
          <div className="mt-4 h-px w-16 bg-[#00FF87]/30" />
        </div>
      </div>
    </section>
  )
}
