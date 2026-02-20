"use client"

import { useState } from "react"
import { ArrowRight, Zap, Wind, Battery } from "lucide-react"

const categories = [
  { id: "all", label: "Todo" },
  { id: "cartuchos", label: "Cartuchos" },
  { id: "disposable", label: "Desechables" },
  { id: "nicotina", label: "Nicotina" },
  { id: "accesorios", label: "Accesorios" },
]

const products = [
  {
    id: 1,
    name: "Runtz AK-47",
    category: "cartuchos",
    type: "HHC Hybrid",
    price: "Consultar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-W5KLPMMHdslk7UUqWgQ0hBUVqOsvBZ.png",
    badge: "Quinta Temporada",
    description: "Vape Cartridge 1 Gram (0.35 oz)",
    featured: true,
  },
  {
    id: 2,
    name: "Runtz Sour Diesel",
    category: "cartuchos",
    type: "Delta-8 Sativa",
    price: "Consultar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%285%29-svVkODMyYV32QurEhh83meZy74jPNf.png",
    badge: "Novedad",
    description: "Vaporizer Cartridge 1 Gram",
    featured: false,
  },
  {
    id: 3,
    name: "Haze Ascend Blend",
    category: "disposable",
    type: "Sativa Live Resin",
    price: "Consultar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%283%29-FGLWxZTjbcUk38nQxEYBKlfrPYkYVg.png",
    badge: "Disponible",
    description: "Quantum Kush 3 Gram Disposable",
    featured: true,
  },
  {
    id: 4,
    name: "Half Bak'd PHC",
    category: "disposable",
    type: "THC-P / THC-8",
    price: "Consultar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%288%29-yNJBNmN33dQzUg7n4oPCUoDJBLWdeZ.png",
    badge: "Miami Punch",
    description: "3G Disposable 3ML",
    featured: false,
  },
  {
    id: 5,
    name: "Brass Knuckles",
    category: "accesorios",
    type: "900mAh Battery",
    price: "35.000 COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%286%29-RYY0mCkk7U3LvlS73d8ZZjqxOPSS3j.png",
    badge: "Tradicional",
    description: "Adjustable Voltage Battery",
    featured: false,
  },
  {
    id: 6,
    name: "Fruitia x Fume",
    category: "nicotina",
    type: "8000 Puffs",
    price: "23.000 COP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%287%29-lzxYVepq3gSFwn8ctROMLzaMUK3sjR.png",
    badge: "Nicotina",
    description: "Vapers desechables de nicotina disponibles",
    featured: false,
  },
]

function ProductCard({ product, size = "normal" }: { product: typeof products[0]; size?: "large" | "normal" }) {
  const isLarge = size === "large"

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[#1e3a52] bg-[#0f2235] transition-all duration-500 hover:border-[#00FF87]/30 hover:shadow-[0_0_30px_rgba(0,255,135,0.08)] ${
        isLarge ? "row-span-2" : ""
      }`}
    >
      {/* Badge */}
      <div className="absolute left-4 top-4 z-10">
        <span className="rounded-full bg-[#00FF87] px-3 py-1 text-[10px] font-bold tracking-wider text-[#0D1B2A] uppercase">
          {product.badge}
        </span>
      </div>

      {/* Image */}
      <div className={`relative overflow-hidden ${isLarge ? "h-72 md:h-96" : "h-52 md:h-64"}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2235] via-transparent to-transparent z-[1]" />
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] -mt-8 p-5">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-[10px] font-semibold tracking-widest text-[#00FF87] uppercase">
            {product.type}
          </span>
        </div>
        <h3 className={`font-bold text-[#F8F9FA] ${isLarge ? "text-2xl" : "text-lg"}`}>
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-[#6C757D]">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-sm font-bold text-[#FFD60A]">{product.price}</span>
          <a
            href="https://wa.me/573244613307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-[#00FF87] transition-all group-hover:gap-2"
          >
            Consultar
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function ProductsBento() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="productos" className="relative py-24" style={{ background: "#0D1B2A" }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#00FF87] uppercase">
            {'Cat\u00e1logo'}
          </span>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl md:text-6xl text-balance">
            Productos Estelares
          </h2>
          <p className="max-w-lg text-base text-[#6C757D] leading-relaxed">
            {'Cartuchos premium, desechables de nueva generaci\u00f3n y accesorios de alta calidad. Desde 18K. Sin drama. Con calidad.'}
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? "bg-[#00FF87] text-[#0D1B2A] shadow-[0_0_20px_rgba(0,255,135,0.3)]"
                  : "border border-[#1e3a52] bg-transparent text-[#6C757D] hover:border-[#00FF87]/50 hover:text-[#F8F9FA]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              size={i === 0 || i === 2 ? "large" : "normal"}
            />
          ))}
        </div>

        {/* Feature badges */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Zap, title: "Entregas Inmediatas", desc: "Envios a toda Colombia" },
            { icon: Wind, title: "Cartuchos Premium", desc: "Las mejores marcas del mercado" },
            { icon: Battery, title: "Accesorios Pro", desc: "Baterias y complementos" },
          ].map((feat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-[#1e3a52] bg-[#0f2235]/50 p-5 transition-all hover:border-[#00FF87]/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00FF87]/10">
                <feat.icon className="h-5 w-5 text-[#00FF87]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#F8F9FA]">{feat.title}</h4>
                <p className="text-xs text-[#6C757D]">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
