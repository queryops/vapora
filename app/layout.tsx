import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VAPORA - Eleva Tu Experiencia',
  description: 'VAPORA - Cartuchos premium, vapes desechables y accesorios. Quinta temporada. Nuevas cepas. Mismo ritual. Entregas inmediatas en Colombia.',
  keywords: ['vapora', 'vape', 'cartuchos', 'disposable', 'colombia', 'premium'],
  openGraph: {
    title: 'VAPORA - Eleva Tu Experiencia',
    description: 'Cartuchos premium, vapes desechables y accesorios. Entregas inmediatas.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D1B2A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
