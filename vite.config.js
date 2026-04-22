import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { Resend } from 'resend'

function contactApiPlugin(mode) {
  const env = loadEnv(mode, process.cwd(), '')
  const resendApiKey = env.RESEND_API_KEY || env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY

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

        if (!resendApiKey) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'RESEND_API_KEY ist nicht gesetzt.' }))
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

            const resend = new Resend(resendApiKey)
            await resend.emails.send({
              from: 'Website Kontakt <onboarding@resend.dev>',
              to: ['christian@tabo.li'],
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
