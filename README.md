# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Kontaktformular mit SMTP

1. Lege eine `.env.local` im Projektroot an (siehe `.env.local.example`).
2. Setze deine SMTP-Daten:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS` (oder `SMTP_PASSWORD`)
   - optional `SMTP_SECURE` (`true` fuer SSL/465, sonst `false`)
   - optional `SMTP_FROM` (z. B. `Tabo Website <mailer@example.com>`)
3. Starte den Dev-Server neu, damit die Umgebungsvariable geladen wird.

Das Formular sendet dann an `christian@tabo.li` via `POST /api/contact`.
