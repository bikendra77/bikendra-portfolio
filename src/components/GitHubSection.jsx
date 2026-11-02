import { useEffect, useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'

const CACHE_KEY = 'github-profile-bikendra77-v2'
const CACHE_MAX_AGE = 15 * 60 * 1000
const PROFILE_URL = 'https://api.github.com/users/bikendra77'
const REPOSITORIES_URL = 'https://api.github.com/users/bikendra77/repos?per_page=4&sort=pushed'

function readCache() {
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const cached = JSON.parse(raw)
    return Date.now() - cached.fetchedAt < CACHE_MAX_AGE ? cached.payload : null
  } catch {
    return null
  }
}

async function fetchGitHubJson(url) {
  const response = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
  if (!response.ok) {
    const error = new Error(`GitHub API returned ${response.status}`)
    error.status = response.status
    throw error
  }
  return response.json()
}

function errorMessage(errors) {
  if (errors.some((error) => error?.status === 403 || error?.status === 429)) {
    return 'GitHub is rate-limiting requests right now. Visit the profile directly for the latest information.'
  }
  return 'GitHub information could not be loaded right now. Visit the profile directly to see repositories.'
}

export default function GitHubSection() {
  const [data, setData] = useState(() => readCache())
  const [loading, setLoading] = useState(() => !readCache())
  const [message, setMessage] = useState('')
  const [nearViewport, setNearViewport] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setNearViewport(true)
      return undefined
    }

    const section = document.getElementById('github')
    if (!section) {
      setNearViewport(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true)
        observer.disconnect()
      }
    }, { rootMargin: '250px 0px' })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (data || !nearViewport) return undefined

    let active = true
    Promise.allSettled([
      fetchGitHubJson(PROFILE_URL),
      fetchGitHubJson(REPOSITORIES_URL),
    ]).then((results) => {
      if (!active) return

      const profile = results[0].status === 'fulfilled' ? results[0].value : null
      const repositories = results[1].status === 'fulfilled' ? results[1].value : null
      const errors = results
        .filter((result) => result.status === 'rejected')
        .map((result) => result.reason)
      const payload = {
        profile: profile && {
          publicRepos: profile.public_repos,
        },
        repositories: Array.isArray(repositories)
          ? repositories.map(({ id, name, html_url: url, description }) => ({
            id,
            name,
            url,
            description,
          }))
          : null,
      }

      if (payload.profile || payload.repositories) {
        setData(payload)
        try {
          window.sessionStorage.setItem(CACHE_KEY, JSON.stringify({
            fetchedAt: Date.now(),
            payload,
          }))
        } catch {
          // The live response is still shown when session storage is unavailable.
        }
      }
      if (errors.length) setMessage(errorMessage(errors))
      setLoading(false)
    }).catch(() => {
      if (!active) return
      setMessage('GitHub information could not be loaded right now. Visit the profile directly to see repositories.')
      setLoading(false)
    })

    return () => { active = false }
  }, [data, nearViewport])

  const repositories = data?.repositories || []

  return (
    <div className="github-section-content">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">GitHub</span>
          <h2 className="h2 reveal-title" id="github-heading" data-reveal>My open-source activity.</h2>
        </div>

        <div className="github-panel">
          <div className="github-stats" aria-label="GitHub profile statistics">
            <div className="github-stat">
              <span className="github-stat-value">{data?.profile?.publicRepos ?? '—'}</span>
              <span className="github-stat-label">Public repositories</span>
            </div>
          </div>

          <div className="github-repositories">
            <h3 className="h3">Latest repositories</h3>
            {repositories.length ? (
              <ul className="github-repository-list">
                {repositories.map((repository) => (
                  <li key={repository.id}>
                    <a href={repository.url} target="_blank" rel="noopener noreferrer">
                      <span>
                        <strong>{repository.name}</strong>
                        {repository.description && <span className="github-repo-description">{repository.description}</span>}
                      </span>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="github-muted">{loading ? 'Loading repositories…' : 'Repository information is unavailable.'}</p>
            )}
          </div>
        </div>

        {loading && <p className="github-status" role="status">Loading GitHub information…</p>}
        {!loading && message && <p className="github-status" role="status">{message}</p>}
        <a className="all-repos-link github-profile-link" href="https://github.com/bikendra77" target="_blank" rel="noopener noreferrer">
          <Github size={16} aria-hidden="true" /> View GitHub profile
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
