const EXPERIENCE = [
  {
    period: 'Jul 2026 — Oct 2026',
    title: 'Intern Surveyor',
    org: 'SULECO Private Limited',
    location: 'Pitakotte, Sri Lanka',
    tags: ['GNSS', 'Levelling', 'RINEX', 'AutoCAD', 'Civil 3D', 'LiDAR', 'UAV'],
    bullets: [
      'Contributed to monument and control establishment, static GNSS observations and a 28 km level line during a field survey across Arugam Bay, Pottuvil and Panama.',
      'Checked and organised survey records, prepared levelling sheets, drafted bridge and culvert details in AutoCAD and produced river sections in Civil 3D.',
      'Downloaded and post-processed RINEX data in Leica Infinity and learned CORSnet workflows.',
      'Supported the initial CMC survey at Thalakotuwa Gardens: planning, control establishment, GNSS and digital-level data collection, and first-pass data export and processing.',
      'Helped prepare GNSS equipment and delivered user workshops.',
      'Gained exposure to LiDAR processing, UAV platforms (DJI Matrice 300 RTK and Matrice 4T) and drone regulations.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="section-tag">02 — experience</div>
      <h2 className="section-title">
        Industry <span>experience</span>
      </h2>
      <ul className="xp-timeline">
        {EXPERIENCE.map((x) => (
          <li key={x.title + x.org} className="xp-item">
            <span className="edu-node" aria-hidden="true" />
            <article className="panel xp-card">
              <header className="xp-head">
                <div>
                  <span className="coords">{x.period}</span>
                  <h3 className="xp-title">{x.title}</h3>
                  <p className="xp-org">
                    {x.org} <span className="xp-loc">· {x.location}</span>
                  </p>
                </div>
                <ul className="xp-tags" aria-label="Key skills used">
                  {x.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </header>
              <ul className="xp-bullets">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
