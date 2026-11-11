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
          Open to Geospatial Analyst roles
        </span>
        <p className="hero-greet">Hello, I&apos;m</p>
        <h1 className="hero-name">
          Abishek <span>Kamalarajan</span>
        </h1>
        <p className="hero-role">Geospatial Data Analyst &amp; Surveyor</p>
        <p className="hero-desc">
          Final-year Surveying Sciences undergraduate specialising in GIS. I
          combine field surveying, spatial analysis and Python to turn raw
          measurements into maps, models and decisions for urban planning and
          the environment.
        </p>
        <div className="hero-cta">
          <a href="#experience" className="btn solid">View Work {ARROW_DOWN}</a>
          <a href="/resume.pdf" className="btn" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
        <p className="hero-meta coords">
          <span className="hero-meta-icon">{CROSSHAIR}</span>
          6.8916° N, 80.5955° E — Hatton, Sri Lanka
        </p>
      </div>
      <div className="hero-visual">
        <div className="hero-portrait">
          <img
            src="/portrait.webp"
            width="640"
            height="640"
            alt="Abishek Kamalarajan"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <span className="hero-portrait-tag coords" aria-hidden="true">
          <span className="hero-badge-dot" />
          Surveyor · GIS
        </span>
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
