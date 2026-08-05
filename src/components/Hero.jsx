const ARROW_DOWN = (
  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
)

const CROSSHAIR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21" />
  </svg>
)

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <span className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Open to opportunities
        </span>
        <p className="hero-greet">Hello, I&apos;m</p>
        <h1 className="hero-name">
          Abishek <span>Kamalarajan</span>
        </h1>
        <h2 className="hero-role">Surveyor &amp; GIS Analyst</h2>
        <p className="hero-desc">
          I turn the physical world into precise spatial data — combining
          surveying science with GIS, remote sensing and a developer&apos;s
          toolkit to map, analyze and visualize geography.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn solid">View Work {ARROW_DOWN}</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
        <p className="hero-meta coords">
          <span className="hero-meta-icon">{CROSSHAIR}</span>
          7.8731° N, 80.7718° E — Sri Lanka
        </p>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
        <span>scroll</span>
      </a>
    </section>
  )
}
