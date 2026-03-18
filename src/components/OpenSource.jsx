const projects = [
  {
    name: 'LazyPredict',
    stars: '3,000+',
    desc: 'A low-code Python library that builds and evaluates dozens of ML models with a single line of code. Thousands of downloads and widely used for rapid prototyping.',
    url: 'https://github.com/shankarpandala/lazypredict',
    tags: ['Python', 'Machine Learning', 'AutoML'],
  },
  {
    name: 'LazyProfiler',
    stars: '100+',
    desc: 'Python utility for monitoring CPU and GPU utilization during model training and inference. Helps identify performance bottlenecks.',
    url: 'https://github.com/shankarpandala/lazyprofiler',
    tags: ['Python', 'Profiling', 'GPU'],
  },
]

export default function OpenSource() {
  return (
    <section className="section" id="opensource">
      <p className="section-label">// 02 — Open Source</p>
      <h2 className="section-title">Open-Source Tools</h2>
      <p className="section-desc">
        Libraries used by thousands of developers worldwide.
      </p>
      <div className="opensource-grid">
        {projects.map(p => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opensource-card"
            style={{ textDecoration: 'none' }}
          >
            <h3>{p.name}</h3>
            <div className="stars">★ {p.stars} GitHub Stars</div>
            <p>{p.desc}</p>
            <div className="project-tags" style={{ marginTop: 16 }}>
              {p.tags.map(t => (
                <span className="project-tag" key={t}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
