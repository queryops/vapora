import { Instagram, MessageCircle, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#1e3a52]" style={{ background: "#091119" }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L14 10M14 10L8 6M14 10L20 6" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" />
                <circle cx="14" cy="14" r="3" fill="#00FF87" />
                <path d="M14 18L14 26" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 20L14 26L18 20" stroke="#00FF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-bold tracking-[0.35em] text-[#F8F9FA]">VAPORA</span>
            </div>
            <p className="mb-4 max-w-xs text-sm text-[#6C757D] leading-relaxed">
              {'Elev\u00e1 tu experiencia. Cartuchos premium, vapes desechables y accesorios de alta calidad. Entregas inmediatas en Colombia.'}
            </p>
            <a
              href="https://wa.me/573244613307"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-block font-mono text-sm font-semibold text-[#00FF87] transition-opacity hover:opacity-80"
            >
              +57 324 461 3307
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/vap.ora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a52] text-[#6C757D] transition-all hover:border-[#F8F9FA]/30 hover:text-[#F8F9FA]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/573244613307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a52] text-[#6C757D] transition-all hover:border-[#00FF87]/30 hover:text-[#00FF87]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/573244613307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a52] text-[#6C757D] transition-all hover:border-[#F8F9FA]/30 hover:text-[#F8F9FA]"
                aria-label="Telefono"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-[#F8F9FA] uppercase">
              {'Navegaci\u00f3n'}
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Productos", href: "#productos" },
                { label: "Temporada", href: "#temporada" },
                { label: "Instagram", href: "#social" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6C757D] transition-colors hover:text-[#00FF87]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-[#F8F9FA] uppercase">
              {'Categor\u00edas'}
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Cartuchos Premium",
                "Vapes Desechables",
                "Vapers de Nicotina",
                "Accesorios",
                "Nuevos Drops",
              ].map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-[#6C757D]">{cat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-[#1e3a52] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-[#6C757D]/60">
            {'© 2026 VAPORA. Todos los derechos reservados.'}
          </p>
          <p className="text-xs text-[#6C757D]/40">
            {'Quinta Temporada \u2022 Nuevas Cepas \u2022 Mismo Ritual'}
          </p>
        </div>
      </div>

      {/* Giant brand name */}
      <div className="overflow-hidden border-t border-[#1e3a52]/30 py-8">
        <p
          className="text-center text-6xl font-black tracking-[0.3em] text-[#1e3a52]/20 sm:text-8xl md:text-9xl"
          aria-hidden="true"
        >
          VAPORA
        </p>
      </div>
    </footer>
  )
}
