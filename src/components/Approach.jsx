import { BookOpenCheck, Database, MessagesSquare } from 'lucide-react'

const APPROACH = [
  {
    icon: BookOpenCheck,
    title: 'Learn by building',
    description: 'I learn through practical projects, documentation, and working through problems one step at a time.',
  },
  {
    icon: Database,
    title: 'Think from data to interface',
    description: 'I enjoy taking a web system from its data foundation through to a useful, responsive interface.',
  },
  {
    icon: MessagesSquare,
    title: 'Keep growing together',
    description: 'I value collaboration, thoughtful feedback, and code reviews as part of getting better at the craft.',
  },
]

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-heading">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">My approach</span>
          <h2 className="h2 reveal-title" id="approach-heading" data-reveal>How I like to build.</h2>
        </div>
        <div className="approach-grid">
          {APPROACH.map(({ icon: Icon, title, description }, index) => (
            <article
              className="approach-card"
              data-reveal
              key={title}
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <Icon size={22} className="approach-icon" aria-hidden="true" />
              <h3 className="h3">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
