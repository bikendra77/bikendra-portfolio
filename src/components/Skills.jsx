import {
  Code2, Palette, Braces, Atom, LayoutGrid,
  Server, Database, Workflow, Leaf, GitBranch,
} from 'lucide-react'

const SKILLS = [
  { icon: Code2, name: 'HTML5', group: 'Markup' },
  { icon: Palette, name: 'CSS3', group: 'Styling' },
  { icon: Braces, name: 'JavaScript', group: 'Language' },
  { icon: Atom, name: 'React', group: 'Front-end' },
  { icon: LayoutGrid, name: 'Bootstrap', group: 'Styling' },
  { icon: Server, name: 'PHP', group: 'Back-end' },
  { icon: Database, name: 'MySQL', group: 'Database' },
  { icon: Workflow, name: 'Node.js', group: 'Back-end' },
  { icon: Leaf, name: 'MongoDB', group: 'Database' },
  { icon: GitBranch, name: 'Git & GitHub', group: 'Tooling' },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="h2">Tools I build with.</h2>
          <p className="lede">
            A working toolkit I use across front-end and back-end projects, growing with
            every build.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map(({ icon: Icon, name, group }, i) => (
            <div
              className="skill-card"
              key={name}
              data-reveal
              style={{ transitionDelay: `${Math.min(i, 8) * 45}ms` }}
            >
              <Icon size={20} className="skill-icon" />
              <span className="skill-name">{name}</span>
              <span className="skill-group mono">{group}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
