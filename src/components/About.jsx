import { Compass, MapPin, Target } from 'lucide-react'
import aboutPhoto from '../../images/optimized/about-photo.jpg'

const INFO = [
  { icon: MapPin, label: 'Base', value: 'Bharatpur, Chitwan, Nepal' },
  { icon: Compass, label: 'Focus', value: 'Web development & user-focused interfaces' },
  { icon: Target, label: 'Looking for', value: 'Remote opportunities & freelance projects' },
]

const EXPERIENCE = [
  {
    title: 'Web Development Intern',
    organization: 'Akshyaraanga Sanjaal Pvt. Ltd',
    period: 'Sep 2025 - present',
    details: 'Building the Online Student Management System with React, PHP, Node.js and MongoDB.',
  },
  {
    title: 'BCA',
    organization: 'Birendra Multiple Campus',
    period: '2021-2026',
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head about-section-head">
          <span className="eyebrow">About</span>
          <h2 className="h2 reveal-title" data-reveal>Curious mind. Practical builder. Always learning.</h2>
        </div>

        <div className="about-grid">
          <div className="about-visual">
            <div className="about-photo-wrap">
              <div className="about-photo-placeholder" aria-hidden="true" />
              {/* Replace this file with your photo */}
              <img
                className="about-photo"
                src={aboutPhoto}
                alt="Bikendra Giri"
                width="1000"
                height="987"
                loading="lazy"
                decoding="async"
                onError={(event) => { event.currentTarget.hidden = true }}
              />
            </div>
          </div>

          <div className="about-copy">
            <h3 className="about-name gradient-text">Bikendra Giri</h3>
            <p className="lede about-lede">
              I recently completed my Bachelor of Computer Applications, and most of what I know
              about building for the web has come from working through projects on my own
              reading documentation, breaking things, and fixing them again. I like the practical
              side of development: taking a system that only exists as an idea and getting it
              running, from the database up through the interface.
            </p>
            <p className="lede about-lede">
              I'm still early in my career, which means I'm looking for real collaboration
              feedback, code review, and projects where I can contribute and keep growing
              alongside people who know the craft better than I do.
            </p>
          </div>
        </div>

        <div className="experience-timeline" aria-label="Experience and education">
          {EXPERIENCE.map((item, index) => (
            <article
              className="experience-item"
              key={item.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <span className="experience-dot" aria-hidden="true" />
              <div className="experience-card">
                <span className="eyebrow">{item.period}</span>
                <h3 className="h3">{item.title}</h3>
                <p>{item.organization}</p>
                {item.details && <p>{item.details}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="about-info">
          {INFO.map(({ icon: Icon, label, value }, i) => (
            <div
              className="info-block"
              key={label}
              data-reveal
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <Icon size={18} className="info-icon" />
              <div>
                <span className="info-label mono">{label}</span>
                <p className="info-value">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
