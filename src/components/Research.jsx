import BrandIcon from './BrandIcon.jsx'

const STATS = [
  { value: '1,940 km²', label: 'study area — Kandy district' },
  { value: '949,906', label: 'daily trips modeled' },
  { value: '17,754', label: 'road links simulated' },
  { value: '12%', label: 'emissions cut, best scenario' },
]

const SCENARIOS = [
  { tag: 'Baseline', desc: 'Do-nothing reference' },
  { tag: 'Scenario A', desc: 'EUR 54.97M highway bypass' },
  { tag: 'Scenario B', desc: 'US$75M Bus Rapid Transit system' },
  { tag: 'Scenario C', desc: 'BRT + Transit-Oriented Development zoning — best overall performer', best: true },
]

const STACK = [
  { name: 'Python', logo: 'python' },
  {
    name: 'AequilibraE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 17 12 7l6 10H6Z" />
        <circle cx="6" cy="17" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="17" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'UrbanSim',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="6" height="10" />
        <rect x="14" y="6" width="6" height="14" />
      </svg>
    ),
  },
  {
    name: 'COPERT',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 16c-1.4 0-2.5-1.1-2.5-2.5S5.1 11 6.5 11c.3-2.1 2.1-3.7 4.2-3.7s3.9 1.6 4.2 3.7h.6c1.4 0 2.5 1.1 2.5 2.5S16.9 16 15.5 16h-9Z" />
        <path d="M8 20h.01M12 20h.01M16 20h.01" />
      </svg>
    ),
  },
  { name: 'Jupyter Notebook', logo: 'jupyter' },
]

export default function Research() {
  return (
    <section id="research" className="section reveal">
      <div className="section-tag">04 — research</div>
      <h2 className="section-title">
        Undergraduate <span>research</span>
      </h2>
      <div className="panel research-card">
        <div className="research-head">
          <div>
            <span className="coords">Sabaragamuwa University of Sri Lanka</span>
            <h3 className="research-title">LUTI-Kandy — Land-Use Transport Interaction Model</h3>
          </div>
          <a
            href="https://github.com/Abishek-Kamalarajan/LUTI-Kandy"
            target="_blank"
            rel="noreferrer"
            className="btn solid"
          >
            View Repository ↗
          </a>
        </div>

        <p className="research-desc">
          A macroscopic land-use &amp; transport interaction model for Kandy district,
          simulating how four transport-policy scenarios reshape urban growth, housing
          affordability, congestion and emissions from 2026 to 2046 — combining gravity-model
          trip demand, network assignment and land-use simulation across 1,202 traffic
          analysis zones.
        </p>

        <ul className="research-stats">
          {STATS.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="research-scenarios">
          {SCENARIOS.map((s) => (
            <div key={s.tag} className={`research-scenario${s.best ? ' is-best' : ''}`}>
              <span className="research-scenario-tag">{s.tag}</span>
              <span className="research-scenario-desc">{s.desc}</span>
            </div>
          ))}
        </div>

        <div className="research-tools">
          <span className="coords research-tools-label">Built with</span>
          <ul className="research-tools-list">
            {STACK.map((t) => (
              <li key={t.name}>
                <span className="research-tool-icon">
                  {t.logo ? <BrandIcon slug={t.logo} /> : t.icon}
                </span>
                <span className="research-tool-name">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
