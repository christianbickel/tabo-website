import nodemailer from 'nodemailer'

const smtpHost = process.env.SMTP_HOST
const smtpPort = Number(process.env.SMTP_PORT || 587)
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD
const smtpSecure = (process.env.SMTP_SECURE || `${smtpPort === 465}`) === 'true'
const smtpFrom = process.env.SMTP_FROM || smtpUser

const transporter = smtpHost && smtpUser && smtpPass
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  : null

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!transporter || !smtpFrom) {
    return res.status(500).json({ error: 'SMTP Konfiguration ist unvollstaendig.' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte alle Felder ausfuellen.' })
  }

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: 'christian@tabo.li',
      replyTo: email,
      subject: `Neue Website-Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    })

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'E-Mail Versand fehlgeschlagen.' })
  }
}
