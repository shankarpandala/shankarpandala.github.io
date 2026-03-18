const experiences = [
  {
    period: '2020 — Present',
    title: 'Senior Algorithm Developer',
    company: 'Applied Materials, INC',
    points: [
      'Providing ML and business analytics solutions across multiple product lines',
      'Deployed on-premise ML application to Azure ML for cancer cell annotation',
      'Built ML models for cost/price prediction of manufactured machines',
      'Team lead for multiple projects, mentoring associate engineers',
      'SME for Azure Cloud — trained colleagues on Azure ML, OpenAI, and AI Foundry',
      'Built analytics & visualization dashboards using Tableau',
    ],
    tags: ['Azure ML', 'Python', 'Tableau', 'Azure OpenAI', 'Databricks'],
  },
  {
    period: '2013 — 2020',
    title: 'Data Scientist',
    company: 'Cognizant Technology Solutions',
    points: [
      'Demand forecasting of optical fiber — worked directly with client CEO and CSO',
      'Yield improvement projects handling 1300+ variables and 1M+ rows using R and Oracle',
      'Anomaly detection in optical fiber production — collaborated with CTO',
      'Built Tableau dashboards for real-time process visualization',
    ],
    tags: ['R', 'Python', 'Oracle', 'Tableau', 'Forecasting'],
  },
  {
    period: '2016',
    title: 'Manager — Loyalty and Analytics',
    company: 'Richfeel Health and Beauty Pvt. Ltd.',
    points: [
      'Reported to founder/CSO providing business analytics insights',
      'Customer behavior clustering and sales forecasting',
      'Marketing ROI analysis for budgeting decisions',
    ],
    tags: ['Analytics', 'Clustering', 'Time Series'],
  },
  {
    period: '2013 — 2015',
    title: 'Associate Analyst',
    company: 'XLDynamics India Pvt. Ltd.',
    points: [
      'Managed team of 10 associate analysts',
      'Prepared SOPs and checklists for loan document analysis',
    ],
    tags: ['Team Lead', 'Analytics'],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label">// 04 — Experience</p>
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div className="experience-item" key={i}>
            <div className="experience-period">{exp.period}</div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <div className="company">{exp.company}</div>
              <ul>
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {exp.tags.map(t => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
