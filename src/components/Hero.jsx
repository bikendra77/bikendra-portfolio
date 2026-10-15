import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <span className="pill-dot" aria-hidden="true" />
            Open to opportunities
          </span>

          <h1 className="hero-headline">
            Building digital <span className="gradient-text">experiences</span> with purpose.
          </h1>

          <p className="lede hero-lede">
            I'm Bikendra Giri, a BCA graduate and web developer from Nepal. I enjoy turning
            ideas into responsive, useful, and engaging web experiences while continuously
            improving my skills.
          </p>
          <p className="hero-sub">
            Open to remote opportunities, internships, and freelance collaborations.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="https://github.com/bikendra77"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-location mono">
            <MapPin size={14} />
            Bharatpur, Nepal
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <div className="orbit-scene">
      <svg viewBox="0 0 520 520" className="orbit-svg" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#74F4E5" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D7FFFA" />
            <stop offset="45%" stopColor="#74F4E5" />
            <stop offset="100%" stopColor="#0D1420" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="260" cy="260" r="80" fill="url(#coreGrad)" opacity="0.9" />
        <circle cx="260" cy="260" r="34" fill="#0D1420" stroke="url(#ringGrad)" strokeWidth="1.5" />
        <text x="260" y="266" textAnchor="middle" className="orbit-core-label" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#EEF2F8">&lt;/&gt;</text>

        <g className="orbit-ring orbit-ring-a">
          <ellipse cx="260" cy="260" rx="190" ry="190" fill="none" stroke="url(#ringGrad)" strokeOpacity="0.35" strokeWidth="1" />
          <circle cx="450" cy="260" r="5" fill="#74F4E5" />
        </g>

        <g className="orbit-ring orbit-ring-b">
          <ellipse cx="260" cy="260" rx="150" ry="150" fill="none" stroke="url(#ringGrad)" strokeOpacity="0.45" strokeWidth="1" transform="rotate(-18 260 260)" />
          <circle cx="110" cy="260" r="4" fill="#A89BFF" />
        </g>

        <g className="orbit-ring orbit-ring-c">
          <ellipse cx="260" cy="260" rx="230" ry="230" fill="none" stroke="url(#ringGrad)" strokeOpacity="0.2" strokeWidth="1" transform="rotate(32 260 260)" />
        </g>

        <g stroke="var(--border-strong)" strokeWidth="1" opacity="0.5">
          <line x1="260" y1="30" x2="260" y2="80" />
          <line x1="260" y1="440" x2="260" y2="490" />
          <line x1="30" y1="260" x2="80" y2="260" />
          <line x1="440" y1="260" x2="490" y2="260" />
        </g>
      </svg>

      <div className="float-card float-card-1">
        <span className="float-dot" />
        <span className="mono">React · Vite</span>
      </div>
      <div className="float-card float-card-2">
        <span className="mono">status: building</span>
      </div>
      <div className="float-card float-card-3">
        <span className="mono">PHP · MySQL</span>
      </div>
    </div>
  )
}
