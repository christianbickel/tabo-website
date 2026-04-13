import { TrendingUp, Lightbulb, Code2 } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Beteiligungen',
    description:
      'Wir reden nicht nur, sondern investieren auch selbst in interessante Projekte. Dabei geht es uns nicht um den kurzfristigen Gewinn, sondern um die Schaffung von nachhaltigen Werten und erfolgreichen Unternehmen.',
  },
  {
    icon: Lightbulb,
    title: 'Beratung',
    description:
      'Mit über 30 Jahren Erfahrung in der Software-Branche bieten wir massgeschneiderte Beratung, die Klarheit in komplexen Situationen schafft. Von der Idee zur Strategie und bis zur erfolgreichen Vermarktung.',
  },
  {
    icon: Code2,
    title: 'Software-Entwicklung',
    description:
      'Moderne, skalierbare Softwareentwicklung mit KI-Unterstützung - von der Konzeption, dem Design bis zum Go-Live. Wir verfügen über das Know-How und die Technologie, die Ihrem Projekt einen Vorsprung verschafft.',
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
