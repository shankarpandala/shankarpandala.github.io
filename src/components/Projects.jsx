const platforms = [
  {
    icon: '∑',
    iconBg: 'rgba(167, 139, 250, 0.15)',
    iconColor: '#a78bfa',
    name: 'Math4AI',
    url: 'https://www.pandala.in/math4ai/',
    urlLabel: 'pandala.in/math4ai',
    desc: 'Mathematics for Artificial Intelligence — from linear algebra and calculus to probability, all tuned for ML practitioners.',
    tags: ['Linear Algebra', 'Calculus', 'Probability', 'Interactive'],
  },
  {
    icon: '</>',
    iconBg: 'rgba(96, 165, 250, 0.15)',
    iconColor: '#60a5fa',
    name: 'LearnCpp',
    url: 'https://www.pandala.in/learn-cpp/',
    urlLabel: 'pandala.in/learn-cpp',
    desc: 'Interactive C++ learning — modern C++ concepts, memory management, templates, and systems-level programming.',
    tags: ['C++20', 'Systems', 'Templates'],
  },
  {
    icon: '⚙',
    iconBg: 'rgba(244, 114, 182, 0.15)',
    iconColor: '#f472b6',
    name: 'Learn AgenticAI',
    url: 'https://www.pandala.in/Learn-AgenticAI/',
    urlLabel: 'pandala.in/Learn-AgenticAI',
    desc: 'Agentic AI Engineering — building autonomous AI systems, tool use, multi-agent architectures, and real-world deployment.',
    tags: ['Agents', 'Tool Use', 'Multi-Agent'],
  },
  {
    icon: '💬',
    iconBg: 'rgba(74, 222, 128, 0.15)',
    iconColor: '#4ade80',
    name: 'Learn LLM',
    url: 'https://www.pandala.in/learn-llm/',
    urlLabel: 'pandala.in/learn-llm',
    desc: 'Large Language Models from the ground up — tokenization, attention, training, fine-tuning, RLHF, and inference optimization.',
    tags: ['Transformers', 'Fine-tuning', 'RLHF'],
  },
  {
    icon: '◆',
    iconBg: 'rgba(251, 191, 36, 0.15)',
    iconColor: '#fbbf24',
    name: 'Learn Deep Learning',
    url: 'https://www.pandala.in/learn-deep-learning/',
    urlLabel: 'pandala.in/learn-deep-learning',
    desc: 'From basics to research frontiers — neural networks, CNNs, RNNs, GANs, diffusion models, and cutting-edge architectures.',
    tags: ['Neural Nets', 'CNNs', 'Diffusion', 'Research'],
  },
  {
    icon: '📈',
    iconBg: 'rgba(92, 224, 216, 0.15)',
    iconColor: '#5ce0d8',
    name: 'Learn Forecasting',
    url: 'https://www.pandala.in/learn-forecasting/',
    urlLabel: 'pandala.in/learn-forecasting',
    desc: 'Time series forecasting — ARIMA, Prophet, neural forecasting models, and practical applications in finance and demand planning.',
    tags: ['Time Series', 'ARIMA', 'Prophet', 'Finance'],
  },
  {
    icon: '🔬',
    iconBg: 'rgba(129, 140, 248, 0.15)',
    iconColor: '#818cf8',
    name: 'Learn Semiconductors',
    url: 'https://www.pandala.in/learn-semi/',
    urlLabel: 'pandala.in/learn-semi',
    desc: 'Semiconductors for Data Scientists — chip design, fabrication, Moore\'s Law, and how hardware shapes AI compute.',
    tags: ['Semiconductors', 'Chip Design', 'AI Hardware'],
  },
  {
    icon: '📊',
    iconBg: 'rgba(99, 102, 241, 0.15)',
    iconColor: '#6366f1',
    name: 'Quant Finance',
    url: 'https://www.pandala.in/quant-finance/',
    urlLabel: 'pandala.in/quant-finance',
    desc: 'Quantitative Finance — options pricing, portfolio optimization, risk management, and trading strategies with Indian market focus.',
    tags: ['Options', 'Portfolio', 'Risk', 'Indian Markets'],
  },
  {
    icon: '🦀',
    iconBg: 'rgba(222, 110, 75, 0.15)',
    iconColor: '#de6e4b',
    name: 'Rust for Python',
    url: 'https://www.pandala.in/rust4python/',
    urlLabel: 'pandala.in/rust4python',
    desc: 'Rust for Python developers — ownership, borrowing, lifetimes, and performance-oriented programming for Pythonistas.',
    tags: ['Rust', 'Python', 'Performance', 'Systems'],
  },
  {
    icon: '🤖',
    iconBg: 'rgba(118, 185, 0, 0.15)',
    iconColor: '#76b900',
    name: 'Learn NemoClaw',
    url: 'https://www.pandala.in/learn-nemoclaw/',
    urlLabel: 'pandala.in/learn-nemoclaw',
    desc: 'NVIDIA NemoClaw & OpenClaw — secure AI agent deployment, guardrails, sandboxed execution, and safe tool use for LLM agents.',
    tags: ['NVIDIA', 'AI Agents', 'Guardrails', 'Security'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">// 01 — Projects</p>
      <h2 className="section-title">Learning Platforms</h2>
      <p className="section-desc">
        Interactive, in-depth learning experiences across AI, math, and systems programming.
      </p>
      <div className="projects-grid">
        {platforms.map(p => (
          <a
            key={p.name}
            href={p.url}
            className="project-card"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="project-icon"
              style={{ background: p.iconBg, color: p.iconColor }}
            >
              {p.icon}
            </div>
            <h3>{p.name}</h3>
            <div className="project-link">{p.urlLabel}</div>
            <p>{p.desc}</p>
            <div className="project-tags">
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
