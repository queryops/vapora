"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Full background image with vape + green smoke */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-vape-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0D1B2A]/40" />
        {/* Bottom gradient fade to next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D1B2A] to-transparent" />
        {/* Top subtle gradient for navbar blend */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0D1B2A]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 text-center">
        {/* Season badge */}
        <div
          className={`mb-10 transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#00FF87]/30 bg-[#0D1B2A]/60 px-5 py-2.5 text-[11px] font-semibold tracking-[0.25em] text-[#00FF87] uppercase backdrop-blur-sm">
            <span
              className="h-2 w-2 rounded-full bg-[#00FF87]"
              style={{ boxShadow: "0 0 8px rgba(0,255,135,0.8)" }}
            />
            QUINTA TEMPORADA DISPONIBLE
          </span>
        </div>

        {/* Main title - massive VAPORA */}
        <h1
          className={`mb-8 transition-all duration-1000 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span
            className="block text-[4rem] font-black text-white sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]"
            style={{
              letterSpacing: "0.3em",
              textShadow: "0 0 80px rgba(0,255,135,0.15)",
              fontWeight: 900,
            }}
          >
            VAPORA
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mb-14 text-lg font-light tracking-[0.15em] text-[#c0c8d0] sm:text-xl md:text-2xl transition-all duration-1000 delay-400 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ fontStyle: "italic" }}
        >
          {"ELEV\u00c1 TU EXPERIENCIA"}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center gap-4 sm:flex-row sm:gap-5 transition-all duration-1000 delay-600 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* Primary - Explorar Catalogo */}
          <a
            href="#productos"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#00FF87] px-10 py-4 text-sm font-bold tracking-[0.15em] text-[#0D1B2A] uppercase transition-all hover:shadow-[0_0_50px_rgba(0,255,135,0.5)]"
            style={{ minWidth: "240px", justifyContent: "center" }}
          >
            <span className="relative z-10">{"EXPLORAR CAT\u00c1LOGO"}</span>
            <span className="relative z-10 text-[#FFD60A] text-lg">+</span>
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-15" />
          </a>

          {/* Secondary - Contactar */}
          <a
            href="https://wa.me/573244613307"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#F8F9FA]/20 bg-[#0D1B2A]/40 px-10 py-4 text-sm font-semibold tracking-[0.15em] text-[#F8F9FA] uppercase backdrop-blur-sm transition-all hover:border-[#00FF87]/50 hover:text-[#00FF87]"
            style={{ minWidth: "200px", justifyContent: "center" }}
          >
            <span>CONTACTAR</span>
            <span className="text-base">{"🇨🇴"}</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#productos"
          className="flex flex-col items-center gap-3 text-[#6C757D] transition-colors hover:text-[#00FF87]"
          aria-label="Scroll down"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">SCROLL</span>
          <span className="block h-8 w-px bg-[#00FF87]" />
        </a>
      </div>
    </section>
  )
}
