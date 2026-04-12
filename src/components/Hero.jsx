import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-charcoal">
            Beteiligungen.
            <br />
            Beratung.
            <br />
            <span className="text-accent">Software.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-charcoal/60 max-w-xl leading-relaxed">
            Innovation aus dem Herzen Liechtensteins.
          </p>

          <a
            href="#services"
            className="inline-flex items-center gap-2 mt-12 text-sm font-medium text-charcoal/50 hover:text-charcoal transition-colors group"
          >
            Mehr erfahren
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
