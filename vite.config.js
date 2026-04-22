import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import nodemailer from 'nodemailer'

function contactApiPlugin(mode) {
  const env = loadEnv(mode, process.cwd(), '')
  const smtpHost = env.SMTP_HOST || process.env.SMTP_HOST
  const smtpPort = Number(env.SMTP_PORT || process.env.SMTP_PORT || 587)
  const smtpUser = env.SMTP_USER || process.env.SMTP_USER
  const smtpPass = env.SMTP_PASS || process.env.SMTP_PASS || env.SMTP_PASSWORD || process.env.SMTP_PASSWORD
  const smtpSecure = (env.SMTP_SECURE || process.env.SMTP_SECURE || `${smtpPort === 465}`) === 'true'
  const smtpFrom = env.SMTP_FROM || process.env.SMTP_FROM || smtpUser

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

  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed.' }))
          return
        }

        if (!transporter || !smtpFrom) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'SMTP Konfiguration ist unvollstaendig.' }))
          return
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })

        req.on('end', async () => {
          try {
            const { name, email, message } = JSON.parse(body)

            if (!name || !email || !message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Bitte alle Felder ausfuellen.' }))
              return
            }

            await transporter.sendMail({
              from: smtpFrom,
              to: 'christian@tabo.li',
              replyTo: email,
              subject: `Neue Website-Anfrage von ${name}`,
              text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
            })

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'E-Mail Versand fehlgeschlagen.' }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), contactApiPlugin(mode)],
}))
