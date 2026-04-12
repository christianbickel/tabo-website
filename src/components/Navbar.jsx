import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'Über uns' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/tabo-logo.svg" alt="Tabo GmbH" className="h-8" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-charcoal"
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
