import { MapPin, Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-charcoal/40 mb-4">
          Kontakt
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-16">
          Sprechen wir darüber
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition"
                placeholder="ihre@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition resize-none"
                placeholder="Wie können wir Ihnen helfen?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-white font-medium px-6 py-3 rounded-xl hover:bg-charcoal-light transition-colors w-fit cursor-pointer"
            >
              Senden
              <Send size={16} />
            </button>
          </form>

          {/* Address */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-charcoal">Tabo GmbH</p>
                <p className="text-charcoal/60 mt-1 leading-relaxed">
                  Industriestrasse 57
                  <br />
                  9491 Ruggell
                  <br />
                  Liechtenstein
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-charcoal">E-Mail</p>
                <a
                  href="mailto:hey@tabo.li"
                  className="text-accent hover:text-accent-hover transition-colors mt-1 block"
                >
                  hey@tabo.li
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
