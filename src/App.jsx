import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Approach from './components/Approach.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './components/NotFound.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import LogoIntro from './components/LogoIntro.jsx'

const ProjectCaseStudy = lazy(() => import('./components/ProjectCaseStudy.jsx'))
const GitHubSection = lazy(() => import('./components/GitHubSection.jsx'))

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  const projectRoute = pathname.match(/^\/project\/([^/]+)\/?$/)

  useEffect(() => {
    const progress = document.querySelector('.scroll-progress-bar')
    if (!progress) return undefined

    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const amount = scrollable > 0 ? window.scrollY / scrollable : 0
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const desktop = window.matchMedia('(min-width: 768px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const updateParallax = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const offset = desktop.matches && !reducedMotion.matches
          ? Math.min(window.scrollY * 0.12, 150)
          : 0
        root.style.setProperty('--glow-parallax-y', `${offset}px`)
      })
    }

    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
      root.style.removeProperty('--glow-parallax-y')
    }
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = document.querySelectorAll('[data-reveal]')
    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (projectRoute) {
    return (
      <>
        <a className="skip-link" href="#main">Skip to content</a>
        <Suspense fallback={<div className="route-loading" role="status">Loading project…</div>}>
          <ProjectCaseStudy slug={projectRoute[1]} />
        </Suspense>
        <CursorGlow /><LogoIntro />
      </>
    )
  }
  if (pathname !== '/' && pathname !== '/index.html') {
    return <><a className="skip-link" href="#main">Skip to content</a><NotFound /><CursorGlow /><LogoIntro /></>
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" />
      </div>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <section id="github" className="github-section" aria-label="GitHub profile statistics">
          <Suspense fallback={<div className="container"><p role="status">Loading GitHub section…</p></div>}>
            <GitHubSection />
          </Suspense>
        </section>
        <Approach />
        <Contact />
      </main>
      <Footer />
      <CursorGlow />
      <LogoIntro />
    </>
  )
}
