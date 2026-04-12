import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Consolidate',
    url: 'https://www.consolidate.eu',
    logo: '/logos/consolidate.svg',
    logoBg: 'bg-charcoal',
    description:
      'Software-Plattform, die Kommunikation, Projekte, CRM, Dokumente und Kalender in einer zentralen, KI-unterstützten Lösung für mittlere Unternehmen vereint.',
  },
  {
    name: 'GlessHub',
    url: 'https://www.glesshub.at',
    logo: '/logos/glesshub.png',
    logoBg: 'bg-white',
    description:
      'Coworking-Space in Lustenau, Vorarlberg — flexible Arbeitsplätze, private Büros, Seminar- und Meetingräume mit einer aktiven Community.',
  },
  {
    name: 'Cater.Work',
    url: 'https://cater.work',
    logo: null,
    logoBg: 'bg-accent',
    description:
      'Plattform für die Catering-Branche, die es ermöglicht, Personal und Events in Minuten zu organisieren — automatisierte Personalplanung statt WhatsApp-Chaos.',
  },
]

export default function Projects() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-charcoal/40 mb-4">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-16">
          Aktuelle Projekte & Beteiligungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ name, url, logo, logoBg, description }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg overflow-hidden flex flex-col"
            >
              {/* Logo area */}
              <div className={`${logoBg} h-32 flex items-center justify-center p-6`}>
                {logo ? (
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-12 max-w-[160px] object-contain"
                  />
                ) : (
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {name}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-charcoal">
                    {name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-charcoal/30 group-hover:text-accent transition-colors"
                  />
                </div>
                <p className="text-charcoal/60 leading-relaxed text-sm">
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
