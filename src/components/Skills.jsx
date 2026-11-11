import BrandIcon from './BrandIcon.jsx'

const SQL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="7" ry="2.6" />
    <path d="M5 5v14c0 1.4 3.13 2.6 7 2.6s7-1.2 7-2.6V5" />
    <path d="M5 12c0 1.4 3.13 2.6 7 2.6s7-1.2 7-2.6" />
  </svg>
)


const ico = (d) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
)
const GNSS_ICON = ico(<><path d="M12 21V11M12 11l-5-7h10l-5 7Z" /><path d="M8 21h8M4 5a9 9 0 0 1 16 0" /></>)
const CUBE_ICON = ico(<><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" /></>)
const DRONE_ICON = ico(<><circle cx="5" cy="5" r="2.5" /><circle cx="19" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="m7 7 2 2M17 7l-2 2M7 17l2-2M17 17l-2-2" /></>)
const SATELLITE_ICON = ico(<><path d="m13 7 4-4 4 4-4 4Z" /><path d="m7 13 4-4 4 4-4 4Z" /><path d="m3 17 4-4 4 4-4 4Z" /><path d="M15 15a4 4 0 0 1 4 4" /><path d="M15 11a8 8 0 0 1 8 8" /></>)
const MARKUP_ICON = ico(<><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>)
const STYLE_ICON = ico(<><path d="M4 20h16M4 4h16" /><path d="M8 4v16M16 4v16" /><path d="M4 12h16" /></>)
const ROAD_ICON = ico(<><path d="M5 21 9 3h6l4 18" /><path d="M12 6v3M12 12v3M12 18v3" /></>)
const EARTH_ICON = ico(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.8 2.6 15.2 0 18M12 3c-2.6 2.8-2.6 15.2 0 18" /></>)
const SHEET_ICON = ico(<><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M4 15h16M10 4v16" /></>)

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
      { name: 'Leica Infinity', icon: GNSS_ICON },
      { name: 'iTwin Capture Modeler', icon: CUBE_ICON },
      { name: 'DJI Terra', icon: DRONE_ICON },
      { name: 'Remote Sensing', icon: SATELLITE_ICON },
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
      { name: 'SQL', icon: SQL_ICON },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'HTML', icon: MARKUP_ICON },
      { name: 'CSS', icon: STYLE_ICON },
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
      { name: 'Civil 3D', icon: ROAD_ICON },
      { name: 'Google Earth Engine', logo: 'googleearthengine' },
      { name: 'Google Earth Pro', icon: EARTH_ICON },
      { name: 'PyCharm', logo: 'pycharm' },
      { name: 'Excel', icon: SHEET_ICON },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="section-tag">04 — skills</div>
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
        Also comfortable with GNSS/CORSnet post-processing workflows, photogrammetry and UAV data capture.
      </p>
    </section>
  )
}
