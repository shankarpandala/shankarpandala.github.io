const skillCategories = [
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'R', 'C++', 'SQL', 'JavaScript', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    title: 'Cloud & MLOps',
    items: ['Azure ML', 'Azure OpenAI', 'AI Foundry', 'Databricks', 'AWS SageMaker', 'Docker', 'Git'],
  },
  {
    title: 'Data Science',
    items: ['Machine Learning', 'Deep Learning', 'NLP/LLMs', 'Time Series', 'Computer Vision', 'Forecasting'],
  },
  {
    title: 'Visualization',
    items: ['Tableau', 'Matplotlib', 'Plotly', 'Streamlit'],
  },
  {
    title: 'Databases',
    items: ['Oracle', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Interests',
    items: ['Acrylic Painting', 'Reading', 'Meetups', 'Open Source', 'Teaching'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">// 06 — Skills</p>
      <h2 className="section-title">Skills &amp; Tools</h2>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div className="skill-category" key={i}>
            <h3>{cat.title}</h3>
            <div className="skill-items">
              {cat.items.map(item => (
                <span className="skill-item" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
