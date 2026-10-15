import { ArrowUpRight, Github, ExternalLink, Hourglass } from 'lucide-react'
import { projects, allRepositoriesUrl } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2 className="h2">Selected work. Real projects. Constant progress.</h2>
          <p className="lede">
            A running record of what I've built while learning — academic projects and
            self-directed builds, each one sharpening a different part of the stack.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects-footer">
          <a
            href={allRepositoriesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="all-repos-link"
          >
            Explore all repositories
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const {
    number,
    name,
    category,
    description,
    tags,
    repo,
    repoReachable,
    demo,
    status,
    placeholder,
    preview,
    repoLabel,
  } = project

  return (
    <article
      className={`project-card ${placeholder ? 'is-placeholder' : ''}`}
      data-reveal
      style={{ transitionDelay: `${Math.min(index, 4) * 70}ms` }}
    >
      <div className="project-card-preview">
        {preview ? (
          <img className="project-card-preview-image" src={preview} alt={`${name} screenshot`} />
        ) : (
          <PreviewGlyph seed={number} />
        )}
        <span className="project-number mono">{number}</span>
      </div>

      <div className="project-card-body">
        <div className="project-card-top">
          <span className="eyebrow mono">{category}</span>
          <h3 className="h3">{name}</h3>
        </div>

        <p className="project-desc">{description}</p>

        {!repoReachable && repo && (
          <p className="project-note mono">
            Repository link provided but could not be verified — details above are conservative.
          </p>
        )}

        <div className="tag-row">
          {tags.map((tag) => (
            <span key={tag} className="tag mono">{tag}</span>
          ))}
        </div>

        <div className="project-card-actions">
          {repo ? (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
              <Github size={15} />
              {repoLabel || 'Repository'}
            </a>
          ) : (
            <span className="btn btn-sm is-disabled">
              <Hourglass size={14} />
              {status}
            </span>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              <ExternalLink size={15} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/* Original CSS/SVG mockup preview — no stock imagery, varies per project. */
function PreviewGlyph({ seed }) {
  return (
    <svg viewBox="0 0 320 180" className="preview-glyph" aria-hidden="true">
      <defs>
        <linearGradient id={`pg-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#74F4E5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#A89BFF" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="180" fill="#0D1420" />
      <rect x="18" y="18" width="284" height="28" rx="6" fill="none" stroke={`url(#pg-${seed})`} strokeWidth="1.2" />
      <circle cx="32" cy="32" r="4" fill="#74F4E5" opacity="0.7" />
      <circle cx="46" cy="32" r="4" fill="#A89BFF" opacity="0.5" />
      <rect x="18" y="60" width="130" height="100" rx="8" fill="none" stroke={`url(#pg-${seed})`} strokeWidth="1.2" />
      <rect x="160" y="60" width="142" height="46" rx="8" fill="none" stroke={`url(#pg-${seed})`} strokeWidth="1.2" />
      <rect x="160" y="114" width="142" height="46" rx="8" fill="none" stroke={`url(#pg-${seed})`} strokeWidth="1.2" />
      <rect x="32" y="78" width="100" height="8" rx="4" fill="#74F4E5" opacity="0.35" />
      <rect x="32" y="94" width="70" height="8" rx="4" fill="#A89BFF" opacity="0.3" />
    </svg>
  )
}
