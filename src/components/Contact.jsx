import { useState } from 'react'
import { MapPin, Mail, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitState, setSubmitState] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState('submitting')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Senden fehlgeschlagen.')
      }

      setSubmitState('success')
      setFeedback('Nachricht erfolgreich gesendet. Wir melden uns zeitnah.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitState('error')
      setFeedback(error.message || 'Senden fehlgeschlagen. Bitte erneut versuchen.')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-charcoal/40 mb-4">
          Kontakt
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-4">
          30+ Jahre Erfahrung in der Software-Branche.
        </h2>
        <p className="text-lg text-charcoal/60 mb-16 max-w-2xl">
          Lassen Sie uns darüber sprechen, wie wir Ihr Projekt unterstützen können.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
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
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition resize-none"
                placeholder="Wie können wir Ihnen helfen?"
              />
            </div>

            <button
              type="submit"
              disabled={submitState === 'submitting'}
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-white font-medium px-6 py-3 rounded-xl hover:bg-charcoal-light transition-colors w-fit cursor-pointer"
            >
              {submitState === 'submitting' ? 'Sende...' : 'Senden'}
              <Send size={16} />
            </button>

            {feedback && (
              <p
                className={`text-sm ${
                  submitState === 'success' ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {feedback}
              </p>
            )}
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
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-charcoal">Telefon</p>
                <a
                  href="tel:+436605280444"
                  className="text-accent hover:text-accent-hover transition-colors mt-1 block"
                >
                  +43 660 5280444
                </a>
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
