import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/projects.js'

export default function ProjectCaseStudy({ slug }) {
  const project = projects.find((item) => item.id === slug)

  if (!project) {
    return (
      <main className="case-study-page" id="main">
        <div className="container">
          <a className="case-study-back" href="/#projects"><ArrowLeft size={17} /> Back to projects</a>
          <h1 className="h2">Project not found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="case-study-page" id="main">
      <article className="container case-study">
        <a className="case-study-back" href="/#projects"><ArrowLeft size={17} /> Back to projects</a>
        <header className="case-study-header">
          <span className="eyebrow">{project.category}</span>
          <h1 className="h1">{project.name}</h1>
        </header>

        <div className="case-study-preview">
          {(project.image || project.preview) ? (
            <img
              src={project.image || project.preview}
              alt={`Cover image for ${project.name}`}
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>

        <div className="case-study-grid">
          <section className="case-study-panel">
            <h2 className="h3">Overview</h2>
            <p>{project.description}</p>
          </section>
          <section className="case-study-panel">
            <h2 className="h3">My role</h2>
            <p>[ADD: my role]</p>
          </section>
          <section className="case-study-panel">
            <h2 className="h3">Tech stack</h2>
            <div className="tag-row">
              {project.tags.map((tag) => <span className="tag mono" key={tag}>{tag}</span>)}
            </div>
          </section>
          <section className="case-study-panel">
            <h2 className="h3">Key features</h2>
            <p>[ADD: key features]</p>
          </section>
          <section className="case-study-panel">
            <h2 className="h3">What I learned</h2>
            <p>[ADD: what I learned]</p>
          </section>
        </div>

        <div className="case-study-actions">
          {project.repo && (
            <a className="btn btn-sm" href={project.repo} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> {project.repoLabel || 'Repository'}
            </a>
          )}
          {project.demo && (
            <a className="btn btn-sm btn-primary" href={project.demo} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight size={16} /> Live demo
            </a>
          )}
        </div>
      </article>
    </main>
  )
}
