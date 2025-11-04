import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl text-amber-900 sm:text-4xl">Begin the conversation</h2>
        <p className="mt-3 text-amber-900/80">Share a few details — we9ll be in touch with availability and next steps.</p>
      </div>

      <motion.form
        className="grid grid-cols-1 gap-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-amber-900/10 backdrop-blur"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-amber-900/80">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-amber-900/20 bg-white/90 px-3 py-2 text-amber-900 placeholder-amber-900/50 shadow-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-amber-900/80">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-md border border-amber-900/20 bg-white/90 px-3 py-2 text-amber-900 placeholder-amber-900/50 shadow-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              placeholder="you@email.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-amber-900/80">Date</label>
            <input
              type="date"
              className="w-full rounded-md border border-amber-900/20 bg-white/90 px-3 py-2 text-amber-900 placeholder-amber-900/50 shadow-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-amber-900/80">Location</label>
            <input
              type="text"
              className="w-full rounded-md border border-amber-900/20 bg-white/90 px-3 py-2 text-amber-900 placeholder-amber-900/50 shadow-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              placeholder="Naples, Amalfi Coast, Capri..."
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm text-amber-900/80">Message</label>
          <textarea
            rows={5}
            className="w-full rounded-md border border-amber-900/20 bg-white/90 px-3 py-2 text-amber-900 placeholder-amber-900/50 shadow-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            placeholder="Tell us about your day, your story, what moves you..."
          />
        </div>
        <div className="mt-2 flex justify-center">
          <button
            type="submit"
            className="rounded-full bg-amber-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-amber-800"
          >
            Send enquiry
          </button>
        </div>
      </motion.form>
    </section>
  )
}
