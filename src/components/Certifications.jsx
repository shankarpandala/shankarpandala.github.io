const certifications = [
  { icon: '☁️', name: 'Azure Certified Data Scientist Associate', issuer: 'Microsoft' },
  { icon: '☁️', name: 'AWS Certified Machine Learning Specialty', issuer: 'Amazon Web Services' },
  { icon: '📊', name: 'Data Science & ML Essentials', issuer: 'Microsoft' },
  { icon: '🐍', name: 'Data Scientist with Python Track', issuer: 'DataCamp' },
  { icon: '🚗', name: 'Autonomous Tech Scholarship', issuer: 'KPIT & Udacity' },
  { icon: '🏆', name: 'Best Summer Project', issuer: 'ITM Business School' },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <p className="section-label">// 07 — Certifications &amp; Awards</p>
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certifications.map((c, i) => (
          <div className="cert-item" key={i}>
            <div className="cert-icon">{c.icon}</div>
            <div>
              <h4>{c.name}</h4>
              <div className="cert-issuer">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
