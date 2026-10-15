import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={handleLinkClick}>
          <span className="brand-mark" aria-hidden="true">BG</span>
          <span className="brand-text">
            <span className="brand-name">Bikendra Giri</span>
            <span className="brand-role mono">WEB DEVELOPER</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="navbar-cta">
          <a href="#contact" className="btn btn-primary btn-sm">Let's Talk</a>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>Let's Talk</a>
        </nav>
      </div>
    </header>
  )
}
