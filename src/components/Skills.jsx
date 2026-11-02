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

const SKILL_COLORS = {
  HTML5: '#F97316',
  CSS3: '#3B82F6',
  JavaScript: '#FACC15',
  React: '#61DAFB',
  Bootstrap: '#A855F7',
  PHP: '#8B9CF6',
  MySQL: '#38BDF8',
  'Node.js': '#84CC16',
  MongoDB: '#4ADE80',
  'Git & GitHub': '#F97316',
}

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
              style={{
                transitionDelay: `${Math.min(i, 8) * 45}ms`,
                '--skill-accent': SKILL_COLORS[name],
              }}
            >
              <Icon size={20} className="skill-icon" />
              <span className="skill-name">{name}</span>
              <span className="skill-group mono">{group}</span>
              <span className="skill-level" aria-hidden="true">
                {Array.from({ length: 10 }, (_, dot) => <span className="skill-level-dot" key={dot} />)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
