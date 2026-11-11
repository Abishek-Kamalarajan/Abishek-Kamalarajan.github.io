const PIN_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-6-5.4-6-10a6 6 0 0 1 12 0c0 4.6-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
)

const GLOBE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.8 2.6 15.2 0 18M12 3c-2.6 2.8-2.6 15.2 0 18" />
  </svg>
)

const BADGE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="9" r="5" />
    <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
  </svg>
)

const TARGET_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const FACTS = [
  { icon: PIN_ICON, label: 'Based in', value: 'Hatton, Sri Lanka' },
  { icon: GLOBE_ICON, label: 'Languages', value: 'Tamil (native) · English · Sinhala' },
  { icon: BADGE_ICON, label: 'Member', value: 'ISPRS Student Consortium' },
  { icon: TARGET_ICON, label: 'Looking for', value: 'GIS / Geospatial Analyst roles' },
]

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="section-tag">01 — about</div>
      <h2 className="section-title">
        A bit <span>about me</span>
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a final-year Surveying Sciences undergraduate (GIS
            specialization) at Sabaragamuwa University of Sri Lanka, also
            pursuing a Higher Diploma in IT at the University of Colombo School
            of Computing. I live at the intersection of the field and the code
            editor.
          </p>
          <p>
            During my internship at SULECO Private Limited I worked on GNSS
            control surveys, levelling, RINEX post-processing and CAD drafting.
            For my undergraduate research I built a Python-based land-use
            transport interaction (LUTI) model for the Kandy district.
          </p>
          <p>
            I&apos;m looking for a GIS or Geospatial Analyst role where I can
            apply spatial analysis and remote sensing to urban planning and
            environmental challenges.
          </p>
        </div>
        <ul className="about-facts">
          {FACTS.map((f) => (
            <li key={f.label} className="panel">
              <span className="about-fact-icon">{f.icon}</span>
              <span className="about-fact-body">
                <span className="coords">{f.label}</span>
                <strong>{f.value}</strong>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
