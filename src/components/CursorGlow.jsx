import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const pointer = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!pointer.matches || reducedMotion.matches || !cursorRef.current) return undefined

    const cursor = cursorRef.current
    let frame = 0
    let x = -100
    let y = -100
    let visible = false

    const updatePosition = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        cursor.style.opacity = visible ? '1' : '0'
      })
    }

    const handleMove = (event) => {
      x = event.clientX
      y = event.clientY
      visible = true
      updatePosition()
    }

    const updateActiveTarget = (target) => {
      setActive(target instanceof Element && Boolean(target.closest('a, button, .project-card, .skill-card')))
    }
    const handleOver = (event) => updateActiveTarget(event.target)
    const handleOut = (event) => updateActiveTarget(event.relatedTarget)

    const handleLeave = () => {
      visible = false
      setActive(false)
      updatePosition()
    }

    document.documentElement.classList.add('has-custom-cursor')
    window.addEventListener('pointermove', handleMove, { passive: true })
    document.addEventListener('pointerover', handleOver, { passive: true })
    document.addEventListener('pointerout', handleOut, { passive: true })
    window.addEventListener('blur', handleLeave)

    return () => {
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerover', handleOver)
      document.removeEventListener('pointerout', handleOut)
      window.removeEventListener('blur', handleLeave)
    }
  }, [])

  return <span ref={cursorRef} className={`cursor-glow${active ? ' is-active' : ''}`} aria-hidden="true" />
}
