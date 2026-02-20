"use client"

import { useEffect, useRef } from "react"

export function MarqueeBand() {
  const trackRef = useRef<HTMLDivElement>(null)

  const items = [
    "NUEVAS CEPAS DISPONIBLES",
    "ENTREGAS INMEDIATAS",
    "QUINTA TEMPORADA",
    "CARTUCHOS PREMIUM",
    "VAPES DESECHABLES",
    "EL GREENCH EDITION",
    "PANAMERICANA SERIES",
    "ENVIOS A TODA COLOMBIA",
  ]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let pos = 0
    const speed = 0.5
    let raf: number

    const step = () => {
      pos -= speed
      const firstHalf = track.firstElementChild as HTMLElement
      if (firstHalf && Math.abs(pos) >= firstHalf.offsetWidth) {
        pos = 0
      }
      track.style.transform = `translateX(${pos}px)`
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const renderItems = () =>
    items.map((item, i) => (
      <span
        key={i}
        className="mx-6 inline-flex shrink-0 items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase sm:mx-8"
        style={{ color: "#a0aab4" }}
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#00FF87]" style={{ boxShadow: "0 0 6px rgba(0,255,135,0.6)" }} />
        {item}
      </span>
    ))

  return (
    <div
      className="relative overflow-hidden border-y border-[#1e3a52] py-5"
      style={{
        backgroundImage: "url('/images/smoke-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#0a1520]/85" />

      <div
        ref={trackRef}
        className="relative z-10 flex w-max will-change-transform"
        style={{ transform: "translateX(0)" }}
      >
        <div className="flex shrink-0">{renderItems()}</div>
        <div className="flex shrink-0" aria-hidden="true">{renderItems()}</div>
        <div className="flex shrink-0" aria-hidden="true">{renderItems()}</div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#0a1520] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#0a1520] to-transparent" />
    </div>
  )
}
