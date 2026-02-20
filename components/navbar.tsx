"use client"

import { useState, useEffect } from "react"
import { Menu, X, Instagram, MessageCircle } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Productos", href: "#productos" },
    { label: "Temporada", href: "#temporada" },
    { label: "Social", href: "#social" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1B2A]/95 backdrop-blur-md border-b border-[#1e3a52]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-0.5">
              <path d="M14 2L14 10M14 10L8 6M14 10L20 6" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" />
              <circle cx="14" cy="14" r="3" fill="#00FF87" />
              <path d="M14 18L14 26" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 20L14 26L18 20" stroke="#00FF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-bold tracking-[0.35em] text-[#F8F9FA]">
              VAPORA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#6C757D] transition-colors hover:text-[#00FF87]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://instagram.com/vap.ora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6C757D] transition-colors hover:text-[#F8F9FA]"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/573244613307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#00FF87] px-5 py-2.5 text-sm font-semibold text-[#0D1B2A] transition-all hover:shadow-[0_0_20px_rgba(0,255,135,0.4)]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#F8F9FA] md:hidden"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#1e3a52] bg-[#0D1B2A]/98 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-[#F8F9FA] transition-colors hover:bg-[#1e3a52] hover:text-[#00FF87]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-[#1e3a52] pt-4">
              <a
                href="https://wa.me/573244613307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#00FF87] px-5 py-3 text-sm font-semibold text-[#0D1B2A]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp - +57 324 461 3307
              </a>
              <a
                href="https://instagram.com/vap.ora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full border border-[#1e3a52] p-3 text-[#F8F9FA]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
