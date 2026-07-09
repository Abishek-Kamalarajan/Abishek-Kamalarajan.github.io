import { useEffect, useRef, useState } from 'react'

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      onDone()
      return
    }

    const start = performance.now()
    const DURATION = 1600
    let raf

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - t, 2)
      setPct(Math.round(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else if (!doneRef.current) {
        doneRef.current = true
        setLeaving(true)
        setTimeout(onDone, 500)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div className={`preloader ${leaving ? 'preloader-leave' : ''}`} role="status" aria-live="polite">
      <div className="pre-core">
        <span className="pre-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
            <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21" />
          </svg>
        </span>
        <div className="pre-tag">Locating coordinates</div>
        <div className="pre-name">Abishek Kamalarajan</div>
        <div className="pre-bar">
          <div className="pre-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="pre-pct">{String(pct).padStart(3, '0')}%</div>
      </div>
    </div>
  )
}
