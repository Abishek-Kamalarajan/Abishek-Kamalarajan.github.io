const TIMELINE = [
  {
    period: 'Oct 2022 — Present',
    title: 'B.Sc. Honours in Surveying Sciences (GIS Specialization)',
    org: 'Sabaragamuwa University of Sri Lanka, Ratnapura',
    desc: 'Geodesy, land & engineering surveying, GIS, remote sensing, photogrammetry and spatial data analysis. Final year.',
  },
  {
    period: 'Oct 2025 — Present',
    title: 'Higher Diploma in Information Technology (HDIT)',
    org: 'University of Colombo School of Computing (UCSC)',
    desc: 'Programming, databases and software development — bridging IT skills with geospatial work.',
  },
  {
    period: 'Oct 2024 — Jul 2025',
    title: 'Diploma in Information Technology (DIT)',
    org: 'University of Colombo School of Computing (UCSC)',
    desc: 'Foundations of computing, web technologies and problem solving.',
  },
  {
    period: '2020',
    title: 'G.C.E. Advanced Level — Physical Science',
    org: 'Highlands Central College, Hatton',
    desc: 'Combined Mathematics, Physics and Chemistry stream.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section reveal">
      <div className="section-tag">06 — education</div>
      <h2 className="section-title">
        Learning <span>path</span>
      </h2>
      <ul className="edu-timeline">
        {TIMELINE.map((t) => (
          <li key={t.title} className="edu-item">
            <span className="edu-node" aria-hidden="true" />
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
