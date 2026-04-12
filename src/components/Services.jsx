import { TrendingUp, Lightbulb, Code2 } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Beteiligungen',
    description:
      'Strategische Investments in zukunftsweisende Unternehmen und Technologien. Wir identifizieren Potenziale und schaffen nachhaltige Werte.',
  },
  {
    icon: Lightbulb,
    title: 'Beratung',
    description:
      'Massgeschneiderte Beratung für Unternehmen, die Klarheit in komplexen Situationen suchen. Von der Strategie bis zur Umsetzung.',
  },
  {
    icon: Code2,
    title: 'Software-Entwicklung',
    description:
      'Moderne, skalierbare Softwarelösungen — von der Konzeption bis zum Go-Live. Technologie, die Ihrem Geschäft einen Vorsprung gibt.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-charcoal/40 mb-4">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-16">
          Was wir tun
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                {title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
