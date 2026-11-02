import { useEffect, useState } from 'react'

export default function LogoIntro() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    try {
      if (window.sessionStorage.getItem('portfolio-intro-shown') === 'true') return undefined
      window.sessionStorage.setItem('portfolio-intro-shown', 'true')
    } catch {
      return undefined
    }

    setVisible(true)
    const closeTimer = window.setTimeout(() => setClosing(true), 820)
    const hideTimer = window.setTimeout(() => setVisible(false), 1000)
    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`logo-intro${closing ? ' is-closing' : ''}`} role="status" aria-label="Bikendra Giri portfolio">
      <div className="logo-intro-brand">
        <span className="brand-mark" aria-hidden="true">BG</span>
        <span className="logo-intro-name">Bikendra Giri</span>
      </div>
      <button className="logo-intro-skip" type="button" onClick={() => setVisible(false)}>
        Skip intro
      </button>
    </div>
  )
}
