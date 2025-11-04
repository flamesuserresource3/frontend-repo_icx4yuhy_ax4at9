import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  // Amalfi Coast & Capri imagery from Unsplash
  'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1960&auto=format&fit=crop', // Amalfi coast
  'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1974&auto=format&fit=crop', // Positano
  'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1974&auto=format&fit=crop', // Capri
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background crossfade gallery */}
      <div className="absolute inset-0">
        {images.map((src, idx) => (
          <motion.img
            key={src}
            src={src}
            alt="Amalfi Coast and Capri"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: active === idx ? 1 : 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Warm filmic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-amber-900/10 to-white/60" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_20%_20%,rgba(255,240,230,0.35),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="font-serif text-4xl leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Your love, captured as timeless cinema.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base text-amber-50/90 sm:text-lg md:text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        >
          In the glow of Italian light, we listen to your vows, your laughter, your quiet glances —
          and weave them into moving images that feel like memory: warm, intimate, and everlasting.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#packages"
            className="rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-amber-900 shadow-sm ring-1 ring-white/60 backdrop-blur-md transition hover:bg-white"
          >
            Explore collections
          </a>
          <a
            href="#contact"
            className="rounded-full bg-amber-900/80 px-6 py-3 text-sm font-medium text-white shadow-md ring-1 ring-amber-800/40 backdrop-blur-md transition hover:bg-amber-900"
          >
            Enquire availability
          </a>
        </motion.div>
      </div>

      {/* Subtle film grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
    </section>
  )
}
