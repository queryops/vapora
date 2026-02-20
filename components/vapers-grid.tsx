"use client"

import { MessageCircle } from "lucide-react"

const vapers = [
  { name: "HYVE", price: "18.000", puffs: "5.000 Puffs", rank: 6 },
  { name: "SNOOP DOG", price: "23.000", puffs: "7.000 Puffs", rank: 1 },
  { name: "FRUITIA", price: "23.000", puffs: "7.000 Puffs", rank: 3 },
  { name: "SNOOPY", price: "27.000", puffs: "15.000 Puffs", rank: 2 },
  { name: "PRIV-AR", price: "32.000", puffs: "15.000 Puffs", rank: 5 },
  { name: "EQUATOR", price: "35.000", puffs: "30.000 Puffs", rank: 4 },
]

export function VapersGrid() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #0D1B2A 0%, #0a1a15 50%, #0D1B2A 100%)" }}>
      {/* Smoke overlay */}
      <div
        className="animate-smoke absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,255,135,0.15) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#FFD60A] uppercase">
            IV Temporada
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl text-balance">
            Vapers de Nicotina
          </h2>
          <p className="max-w-md text-base text-[#6C757D] leading-relaxed">
            Las mejores marcas de vapers desechables de nicotina. Precios en COP.
          </p>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {vapers.map((vaper) => (
            <div
              key={vaper.name}
              className="group relative flex flex-col items-center rounded-2xl border border-[#1e3a52] bg-[#0f2235]/80 p-6 text-center transition-all duration-300 hover:border-[#00FF87]/30 hover:bg-[#0f2235]"
            >
              <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#1e3a52] text-[9px] font-bold text-[#6C757D]">
                {vaper.rank}
              </div>
              <h3 className="mb-2 text-sm font-black tracking-wide text-[#F8F9FA] sm:text-base">
                {vaper.name}
              </h3>
              <span className="mb-1 font-mono text-xl font-black text-[#00FF87] sm:text-2xl">
                {vaper.price}
              </span>
              <span className="text-[10px] font-medium tracking-wider text-[#6C757D] uppercase">
                COP
              </span>
              <div className="mt-3 rounded-full bg-[#1B4332]/30 px-3 py-1">
                <span className="text-[10px] font-semibold text-[#00FF87]">{vaper.puffs}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/573244613307"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-[#1e3a52] bg-[#0f2235] px-8 py-4 text-sm font-semibold text-[#F8F9FA] transition-all hover:border-[#00FF87] hover:shadow-[0_0_30px_rgba(0,255,135,0.15)]"
          >
            <MessageCircle className="h-4 w-4 text-[#00FF87]" />
            {'Solicita el Cat\u00e1logo Completo'}
          </a>
        </div>
      </div>
    </section>
  )
}
