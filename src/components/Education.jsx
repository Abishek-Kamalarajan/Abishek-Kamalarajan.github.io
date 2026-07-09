const TIMELINE = [
  {
    period: 'Oct 2022 — 2026',
    title: 'BSc (Hons) in Surveying Science',
    org: 'Sabaragamuwa University of Sri Lanka',
    desc: 'Geodesy, land & engineering surveying, GIS, remote sensing, photogrammetry and spatial data analysis.',
  },
  {
    period: 'Oct 2024 — Present',
    title: 'Higher Diploma in Information Technology',
    org: 'University of Colombo School of Computing (UCSC)',
    desc: 'Programming, databases and software development — bridging IT skills with geospatial work.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section reveal">
      <div className="section-tag">05 — education</div>
      <h2 className="section-title">
        Learning <span>path</span>
      </h2>
      <ul className="edu-timeline">
        {TIMELINE.map((t) => (
          <li key={t.title} className="edu-item">
            <span className="edu-node" />
            <div className="panel edu-card">
              <span className="coords">{t.period}</span>
              <h3 className="edu-title">{t.title}</h3>
              <p className="edu-org">{t.org}</p>
              <p className="edu-desc">{t.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
