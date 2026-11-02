import { ArrowUp, Github } from 'lucide-react'

const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">BG</span>
          <div>
            <p className="footer-name">Bikendra Giri</p>
            <p className="footer-tagline mono">Building, one project at a time.</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="footer-link">{link.label}</a>
          ))}
          <a href="https://github.com/bikendra77" target="_blank" rel="noopener noreferrer" className="footer-link">
            <Github size={16} />
            GitHub profile
          </a>
          <a href="#home" className="footer-link">
            <ArrowUp size={16} />
            Back to top
          </a>
        </nav>

        <p className="footer-copyright mono">© {year} Bikendra Giri</p>
      </div>
    </footer>
  )
}
