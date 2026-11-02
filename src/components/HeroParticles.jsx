import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 20
const FRAME_INTERVAL = 1000 / 30

export default function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = canvas?.closest('.hero')
    if (!canvas || !hero) return undefined

    const desktop = window.matchMedia('(min-width: 768px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!desktop.matches || reducedMotion.matches || !('IntersectionObserver' in window)) return undefined

    const context = canvas.getContext('2d')
    if (!context) return undefined

    let width = 0
    let height = 0
    let frame = 0
    let scrollTimer = 0
    let inView = false
    let lastFrameTime = 0
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: 1 + Math.random() * 1.8,
      speedX: (Math.random() - 0.5) * 0.00016,
      speedY: (Math.random() - 0.5) * 0.00016,
      alpha: 0.18 + Math.random() * 0.38,
      color: Math.random() > 0.5 ? '139, 92, 246' : '217, 70, 239',
    }))

    const resize = () => {
      const bounds = hero.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      canvas.width = Math.max(1, Math.floor(width))
      canvas.height = Math.max(1, Math.floor(height))
    }

    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
      window.clearTimeout(scrollTimer)
      scrollTimer = 0
    }

    const draw = (timestamp) => {
      frame = 0
      if (!inView || document.hidden) return
      if (timestamp - lastFrameTime < FRAME_INTERVAL) {
        frame = requestAnimationFrame(draw)
        return
      }
      lastFrameTime = timestamp

      context.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.x = (particle.x + particle.speedX + 1) % 1
        particle.y = (particle.y + particle.speedY + 1) % 1
        context.beginPath()
        context.arc(particle.x * width, particle.y * height, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(${particle.color}, ${particle.alpha})`
        context.fill()
      })

      frame = requestAnimationFrame(draw)
    }

    const start = () => {
      if (!frame && inView && !document.hidden) {
        lastFrameTime = 0
        frame = requestAnimationFrame(draw)
      }
    }
    const handleScroll = () => {
      if (!inView) return
      stop()
      if (!document.hidden) scrollTimer = window.setTimeout(start, 180)
    }
    const handleVisibilityChange = () => {
      if (document.hidden) stop()
      else start()
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (inView) start()
      else stop()
    })
    observer.observe(hero)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', resize)
    resize()

    return () => {
      stop()
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />
}
