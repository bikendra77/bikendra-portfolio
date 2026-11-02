import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import heroPhoto from '../../images/hero-photo.jpg'
import HeroParticles from './HeroParticles.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-particle-layer" aria-hidden="true"><HeroParticles /></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <span className="pill-dot" aria-hidden="true" />
            Open to opportunities
          </span>
          <span className="pill availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Available for internship
          </span>

          <h1 className="hero-headline reveal-title" data-reveal>
            Building digital <span className="gradient-text">experiences</span> with purpose.
          </h1>

          <p className="lede hero-lede">
            I'm Bikendra Giri, a BCA graduate and <span className="hero-role-shimmer">web developer</span> from Nepal. I enjoy turning
            ideas into responsive, useful, and engaging web experiences while continuously
            improving my skills.
          </p>
          <p className="hero-sub">
            Open to remote opportunities, internships, and freelance collaborations.
          </p>

          <div className="hero-actions">
            <a href="/Bikendra_Giri_CV.pdf" className="btn btn-primary">
              <Download size={16} />
              Download CV
            </a>
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

          <div className="hero-socials" aria-label="Social profiles">
            <a href="https://github.com/bikendra77" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/your-profile-here" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="hero-photo-placeholder" aria-hidden="true" />
            {/* Replace this file with your photo */}
            <img
              className="hero-photo"
              src={heroPhoto}
              alt="Bikendra Giri"
              width="960"
              height="1280"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={(event) => { event.currentTarget.hidden = true }}
            />
            <span className="tech-float tech-float-react" aria-hidden="true">React</span>
            <span className="tech-float tech-float-node" aria-hidden="true">Node.js</span>
            <span className="tech-float tech-float-html" aria-hidden="true">HTML5</span>
          </div>
        </div>
      </div>
    </section>
  )
}
