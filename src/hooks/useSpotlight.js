import { useEffect } from 'react'

// Tracks the pointer over .skill-card / .proj-card and exposes it as CSS vars
// so the hover glow follows the cursor. No-op on touch / reduced-motion.
export default function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const onMove = (e) => {
      const card = e.target.closest('.skill-card, .proj-card')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
