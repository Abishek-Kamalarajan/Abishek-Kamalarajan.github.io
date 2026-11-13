import { useEffect, useState } from 'react'

const ROLES = [
  'Geospatial Data Analyst',
  'Surveyor',
  'GIS Specialist',
  'Spatial Modeller in Python',
]

const TYPE_MS = 55
const DELETE_MS = 30
const HOLD_MS = 1900

// Typewriter role line. Screen readers get the full static list; sighted
// users see one role typed at a time. Reduced motion shows the static text.
export default function TypeRole() {
  const [reduce, setReduce] = useState(false)
  const [idx, setIdx] = useState(0)
  const [len, setLen] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    const onChange = (e) => setReduce(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduce) return
    const word = ROLES[idx]
    let delay = deleting ? DELETE_MS : TYPE_MS
    if (!deleting && len === word.length) delay = HOLD_MS
    if (deleting && len === 0) delay = 300

    const t = setTimeout(() => {
      if (!deleting && len === word.length) {
        setDeleting(true)
      } else if (deleting && len === 0) {
        setDeleting(false)
        setIdx((i) => (i + 1) % ROLES.length)
      } else {
        setLen((l) => l + (deleting ? -1 : 1))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [reduce, idx, len, deleting])

  const label = `Geospatial Data Analyst, Surveyor and GIS Specialist`

  if (reduce) {
    return <p className="hero-role">Geospatial Data Analyst &amp; Surveyor</p>
  }

  return (
    <p className="hero-role" aria-label={label}>
      <span className="hero-role-prompt" aria-hidden="true">&gt;</span>
      <span className="hero-role-text" aria-hidden="true">
        {ROLES[idx].slice(0, len)}
        <span className="hero-role-caret" />
      </span>
    </p>
  )
}
