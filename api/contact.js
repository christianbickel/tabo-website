import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!resend) {
    return res.status(500).json({ error: 'RESEND_API_KEY ist nicht gesetzt.' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte alle Felder ausfuellen.' })
  }

  try {
    await resend.emails.send({
      from: 'Website Kontakt <onboarding@resend.dev>',
      to: ['christian@tabo.li'],
      replyTo: email,
      subject: `Neue Website-Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    })

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'E-Mail Versand fehlgeschlagen.' })
  }
}
