import { Compass, MapPin, Target } from 'lucide-react'

const INFO = [
  { icon: MapPin, label: 'Base', value: 'Bharatpur, Chitwan, Nepal' },
  { icon: Compass, label: 'Focus', value: 'Web development & user-focused interfaces' },
  { icon: Target, label: 'Looking for', value: 'Remote opportunities & freelance projects' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">About</span>
          <h2 className="h2">Curious mind. Practical builder. Always learning.</h2>
          <p className="lede about-lede">
            I recently completed my Bachelor of Computer Applications, and most of what I know
            about building for the web has come from working through projects on my own —
            reading documentation, breaking things, and fixing them again. I like the practical
            side of development: taking a system that only exists as an idea and getting it
            running, from the database up through the interface.
          </p>
          <p className="lede about-lede">
            I'm still early in my career, which means I'm looking for real collaboration —
            feedback, code review, and projects where I can contribute and keep growing
            alongside people who know the craft better than I do.
          </p>
        </div>

        <div className="about-info">
          {INFO.map(({ icon: Icon, label, value }) => (
            <div className="info-block" key={label}>
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
