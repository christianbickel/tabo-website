import { ArrowLeft } from 'lucide-react'

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/tabo-logo.svg" alt="Tabo GmbH" className="h-8" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Impressum
        </h1>

        <div className="space-y-12 text-charcoal/80 leading-relaxed">
          {/* Anschrift */}
          <section>
            <h2 className="text-lg font-semibold text-charcoal mb-3">
              Anschrift / Adresse
            </h2>
            <p>
              Tabo GmbH
              <br />
              Industriestrasse 56
              <br />
              9491 Ruggell
              <br />
              Fürstentum Liechtenstein
            </p>
          </section>

          {/* Geschäftsführung */}
          <section>
            <h2 className="text-lg font-semibold text-charcoal mb-3">
              Geschäftsführung
            </h2>
            <p>Christian Bickel, MBA CMC</p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-lg font-semibold text-charcoal mb-3">
              Kontakt
            </h2>
            <p>
              Telefon:{' '}
              <a
                href="tel:+436605280444"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                +43 660 5280444
              </a>
              <br />
              E-Mail:{' '}
              <a
                href="mailto:hey@tabo.li"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                hey@tabo.li
              </a>
            </p>
          </section>

          {/* Registereintrag */}
          <section>
            <h2 className="text-lg font-semibold text-charcoal mb-3">
              Registereintrag
            </h2>
            <p>
              Handelsregister Liechtenstein, Amt für Justiz
              <br />
              FL-0002.738.136-7
            </p>
          </section>

          {/* USt-ID */}
          <section>
            <h2 className="text-lg font-semibold text-charcoal mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß Art. 28 Abs. 1 UStG:
              <br />
              CHE-255.540.732
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-xl font-semibold text-charcoal mb-6">
              Haftungsausschluss
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Haftung für Inhalte
                </h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Haftung für Links
                </h3>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Urheberrecht
                </h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem liechtensteinischen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                  und jede Art der Verwertung außerhalb der Grenzen des
                  Urheberrechtes bedürfen der schriftlichen Zustimmung des
                  jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-charcoal/40">
          <p>
            &copy; {new Date().getFullYear()} Tabo GmbH. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
