const stats = [
  { number: '13+', label: 'Years in Data Science & AI', className: 'cyan' },
  { number: '6', label: 'Learning Platforms Live', className: 'purple' },
  { icon: '∞', label: 'Open-source Contributions', className: 'green' },
  { icon: '📍', label: 'Bangalore, India', className: 'pink' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <p className="section-label">// 03 — About</p>
      <div className="about-section">
        <div className="about-text">
          <h2 className="section-title">
            Engineer,<br />Educator, Builder
          </h2>
          <p>
            I&apos;m a Bangalore-based data scientist and AI engineer who believes the
            best way to learn is to build — and to share what you build. These
            platforms are my way of giving back to the community.
          </p>
          <a href="#experience" className="btn btn-secondary">
            Full Resume →
          </a>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              {s.icon && <div className="stat-icon">{s.icon}</div>}
              {s.number && <div className={`stat-number ${s.className}`}>{s.number}</div>}
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
