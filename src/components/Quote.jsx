import { motion } from 'framer-motion'

export default function Quote() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <motion.blockquote
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <p className="font-serif text-2xl text-amber-900 sm:text-3xl">
          “We film so that love remembers itself — in light, in movement, in the hush between words.”
        </p>
        <footer className="mt-4 text-amber-900/70">— Ciro Bernardo Photofilm</footer>
      </motion.blockquote>
    </section>
  )
}
