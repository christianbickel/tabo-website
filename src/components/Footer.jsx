export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-charcoal/40">
        <p>&copy; {new Date().getFullYear()} Tabo GmbH. Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-6">
          <a href="#blog" className="hover:text-charcoal transition-colors">
            Blog
          </a>
          <a href="#impressum" className="hover:text-charcoal transition-colors">
            Impressum
          </a>
        </div>
      </div>
    </footer>
  )
}
