import BrandIcon from './BrandIcon.jsx'

const SQL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="7" ry="2.6" />
    <path d="M5 5v14c0 1.4 3.13 2.6 7 2.6s7-1.2 7-2.6V5" />
    <path d="M5 12c0 1.4 3.13 2.6 7 2.6s7-1.2 7-2.6" />
  </svg>
)

const GROUPS = [
  {
    label: 'GIS & Spatial',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 20 4 18V6l5 2 6-2 5 2v12l-5-2-6 2Z" />
        <path d="M9 8v12M15 6v12" />
      </svg>
    ),
    items: [
      { name: 'QGIS', logo: 'qgis' },
      { name: 'ArcGIS Pro', logo: 'arcgis' },
      { name: 'ArcMap', logo: 'arcgis' },
    ],
  },
  {
    label: 'Programming',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4" />
      </svg>
    ),
    items: [
      { name: 'Python', logo: 'python' },
      { name: 'R', logo: 'r' },
      { name: 'SQL', icon: SQL_ICON },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'Java', logo: 'java' },
    ],
  },
  {
    label: 'Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
      </svg>
    ),
    items: [
      { name: 'AutoCAD', logo: 'autocad' },
      { name: 'Google Earth Engine', logo: 'googleearthengine' },
      { name: 'PyCharm', logo: 'pycharm' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="section-tag">02 — skills</div>
      <h2 className="section-title">
        Tech <span>stack</span>
      </h2>
      <div className="skills-grid">
        {GROUPS.map((g) => (
          <div key={g.label} className="panel skill-card">
            <div className="skill-head">
              <span className="skill-icon">{g.icon}</span>
              <h3>{g.label}</h3>
              <span className="skill-count">{String(g.items.length).padStart(2, '0')}</span>
            </div>
            <ul className="skill-list">
              {g.items.map((s) => (
                <li key={s.name}>
                  <span className="skill-item-icon">
                    {s.logo ? <BrandIcon slug={s.logo} /> : s.icon}
                  </span>
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="skills-note">
        Toolkit always expanding — new tools &amp; tech being added.
      </p>
    </section>
  )
}
