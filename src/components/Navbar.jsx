import { useEffect, useState } from 'react'

const LINKS = ['about', 'skills', 'projects', 'research', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        Abishek <span className="nav-accent">Kamalarajan</span>
      </a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? '✕' : '≡'}
      </button>
      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        {LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
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
    </nav>
  )
}
