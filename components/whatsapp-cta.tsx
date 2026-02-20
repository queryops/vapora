import { MessageCircle, Truck, Shield, Clock } from "lucide-react"

export function WhatsAppCta() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(180deg, #0D1B2A 0%, #091119 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,255,135,0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Trust badges */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: Truck, label: "Entregas Inmediatas" },
            { icon: Shield, label: "Calidad Premium" },
            { icon: Clock, label: "Respuesta en Minutos" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <badge.icon className="h-4 w-4 text-[#00FF87]" />
              <span className="text-xs font-semibold tracking-wider text-[#6C757D] uppercase">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <h2 className="mb-6 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl md:text-6xl text-balance">
          {'Elev\u00e1 Tu Experiencia'}
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-lg text-[#6C757D] leading-relaxed">
          {'Solicita el cat\u00e1logo completo, consulta precios y realiza tu pedido directamente por WhatsApp. Entregas en toda Colombia.'}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/573244613307"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-[#00FF87] px-10 py-5 text-base font-bold tracking-wider text-[#0D1B2A] uppercase transition-all hover:shadow-[0_0_40px_rgba(0,255,135,0.4)]"
          >
            <MessageCircle className="h-5 w-5" />
            {'Escribir por WhatsApp'}
          </a>
          <a
            href="https://instagram.com/vap.ora"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#1e3a52] px-10 py-5 text-base font-semibold tracking-wider text-[#F8F9FA] uppercase transition-all hover:border-[#F8F9FA]/30"
          >
            Ver Instagram
          </a>
        </div>

        {/* Phone number */}
        <a
          href="https://wa.me/573244613307"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-lg font-mono font-semibold text-[#00FF87] transition-opacity hover:opacity-80"
        >
          +57 324 461 3307
        </a>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-[#6C757D]/60 leading-relaxed">
          {'Desde 18K. Sin drama. Con calidad. Consulta disponibilidad antes de realizar tu pedido.'}
        </p>
      </div>
    </section>
  )
}
