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
            I&apos;m a surveying science graduate who lives at the intersection
            of the field and the code editor. Whether it&apos;s capturing
            accurate ground data, building a GIS workflow or scripting an
            analysis in Python, I care about precision and the details.
          </p>
          <p>
            My background spans land &amp; engineering surveying, GIS, remote
            sensing and software development — and I enjoy turning spatial
            problems into clear, usable insight.
          </p>
        </div>
        <ul className="about-stats">
          <li className="panel">
            <strong>4</strong>
            <span className="coords">years in surveying</span>
          </li>
          <li className="panel">
            <strong>10+</strong>
            <span className="coords">field surveys</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
