import { useEffect, useRef, useState } from 'react'

const LINKS = ['about', 'experience', 'research', 'skills', 'projects', 'education', 'contact']

const MENU_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

const CLOSE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const barRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Primary">
      <a href="#hero" className="nav-logo">
        Abishek <span className="nav-accent">Kamalarajan</span>
      </a>
      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="nav-menu"
      >
        {open ? CLOSE_ICON : MENU_ICON}
      </button>
      <ul id="nav-menu" className={`nav-links ${open ? 'nav-open' : ''}`}>
        {LINKS.map((l) => (
          <li key={l}>
            <a
              href={`#${l}`}
              className={active === l ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </li>
      </ul>
      <span className="nav-progress" ref={barRef} aria-hidden="true" />
    </nav>
  )
}
