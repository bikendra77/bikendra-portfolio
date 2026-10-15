import { ArrowUp, Github } from 'lucide-react'

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

        <div className="footer-links">
          <a href="https://github.com/bikendra77" target="_blank" rel="noopener noreferrer" className="footer-link">
            <Github size={16} />
            GitHub
          </a>
          <a href="#home" className="footer-link">
            <ArrowUp size={16} />
            Back to top
          </a>
        </div>

        <p className="footer-copyright mono">© {year} Bikendra Giri</p>
      </div>
    </footer>
  )
}
