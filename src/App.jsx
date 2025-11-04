import Hero from './components/Hero'
import Packages from './components/Packages'
import Quote from './components/Quote'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-cover bg-center">
      {/* Soft warm veil to keep backgrounds cohesive across sections */}
      <div className="bg-amber-50/70">
        {/* Header */}
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-amber-900/90" />
            <div className="leading-tight">
              <p className="font-serif text-lg text-amber-900">Ciro Bernardo</p>
              <p className="text-xs tracking-wide text-amber-900/70">Photofilm</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-amber-900/80 sm:flex">
            <a href="#packages" className="hover:text-amber-900">Collections</a>
            <a href="#contact" className="hover:text-amber-900">Enquire</a>
          </nav>
        </header>

        <main>
          <Hero />
          <Packages />
          <Quote />
          <Contact />
        </main>

        <footer className="border-t border-amber-900/10 bg-white/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
            <p className="text-sm text-amber-900/70">© {new Date().getFullYear()} Ciro Bernardo Photofilm — Naples & Amalfi Coast</p>
            <div className="flex gap-4 text-sm text-amber-900/70">
              <a href="#contact" className="hover:text-amber-900">Contact</a>
              <a href="#packages" className="hover:text-amber-900">Packages</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
