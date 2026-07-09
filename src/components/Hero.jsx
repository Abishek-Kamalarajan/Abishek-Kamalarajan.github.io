export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
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
          <a href="#projects" className="btn solid">View Work</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
