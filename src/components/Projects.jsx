const PROJECT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
)

const LIVE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
)

const GITHUB_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
)

const PROJECTS = [
  {
    name: 'Turtle Race',
    desc: 'A browser-playable betting game built around a simulated turtle race — pick a color, place your bet, and watch six turtles sprint to the finish line at randomized speeds.',
    stack: ['Python', 'Turtle Graphics', 'HTML'],
    live: 'https://abishek-kamalarajan.github.io/turtle-race/',
    repo: 'https://github.com/Abishek-Kamalarajan/turtle-race',
    status: 'Live',
  },
  {
    name: 'Snake Game',
    desc: 'A classic Snake game built for the browser — steer with the arrow keys, eat to grow, and avoid crashing into yourself.',
    stack: ['Python', 'HTML', 'CSS'],
    live: 'https://abishek-kamalarajan.github.io/Snake-Game/',
    repo: 'https://github.com/Abishek-Kamalarajan/Snake-Game',
    status: 'Live',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="section-tag">05 — projects</div>
      <h2 className="section-title">
        Selected <span>work</span>
      </h2>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <div key={p.name} className="panel proj-card">
            <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="proj-top">
              <span className="proj-icon">{PROJECT_ICON}</span>
              <span className={`proj-status${p.status === 'Live' ? ' is-live' : ''}`}>
                {p.status || 'Coming soon'}
              </span>
            </div>
            <h3 className="proj-name">{p.name}</h3>
            <p className="proj-desc">{p.desc}</p>
            <ul className="proj-stack">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {(p.live || p.repo) && (
              <div className="proj-links">
                {p.live && (
                  <a href={p.live} className="btn solid" target="_blank" rel="noreferrer">
                    {LIVE_ICON} Live demo
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} className="btn" target="_blank" rel="noreferrer">
                    {GITHUB_ICON} Code
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="proj-note">
        Small builds from my HDIT coursework. My main technical work is the LUTI research model above — more GIS projects are on the way.
      </p>
    </section>
  )
}
