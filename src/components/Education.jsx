const education = [
  {
    year: '2020 — 2021',
    degree: 'PGP — Cloud Computing',
    institution: 'Greatlakes Executive Education',
  },
  {
    year: '2017 — Present',
    degree: 'Nanodegrees: Azure ML, Deep Learning, AI for Trading, Self-Driving Car',
    institution: 'Udacity',
  },
  {
    year: '2011 — 2013',
    degree: 'PGDM — Financial Markets',
    institution: 'ITM Business School',
  },
  {
    year: '2005 — 2009',
    degree: 'B.Tech — Computer Science Engineering',
    institution: 'JNTU',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <p className="section-label">// 05 — Education</p>
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((e, i) => (
          <div className="education-card" key={i}>
            <div className="year">{e.year}</div>
            <h3>{e.degree}</h3>
            <div className="institution">{e.institution}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
