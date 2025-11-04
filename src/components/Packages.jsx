import { motion } from 'framer-motion'

const packages = [
  {
    name: 'Spark',
    desc: 'An intimate highlight crafted with tenderness — the essence of your day in luminous vignettes.',
  },
  {
    name: 'Essence',
    desc: 'A poetic short film blending vows, glances, and coastal light — refined and heartfelt.',
  },
  {
    name: 'Journey',
    desc: 'From morning to moonlight — a cinematic narrative that traces the arc of your celebration.',
  },
  {
    name: 'Vision',
    desc: 'Our most expansive offering — multi-day storytelling with aerials and editorial finesse.',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-serif text-3xl text-amber-900 sm:text-4xl">Collections</h2>
        <p className="mt-3 text-amber-900/80">
          Four ways to tell your story — choose the rhythm that feels like you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {packages.map((p, i) => (
          <motion.div
            key={p.name}
            className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-amber-900/10 backdrop-blur-md transition hover:shadow-md"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-rose-50/30 opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <h3 className="font-serif text-2xl text-amber-900">{p.name}</h3>
              <p className="mt-3 text-amber-900/80">{p.desc}</p>
              <div className="mt-6">
                <button className="rounded-full bg-amber-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-800">
                  Discover more
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
