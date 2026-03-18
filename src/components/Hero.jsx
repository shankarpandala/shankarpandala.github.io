export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-badge">Building in public</div>
      <h1 className="hero-name">
        Shankar <span className="hero-name-accent">Pandala</span>
      </h1>
      <p className="hero-tagline">
        Data Scientist &amp; AI Engineer with 13+ years of experience. I build
        interactive learning platforms and open-source tools to make complex
        topics accessible.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          Explore Projects <span aria-hidden="true">&#8599;</span>
        </a>
        <a href="#experience" className="btn btn-secondary">
          View Resume
        </a>
      </div>
    </section>
  )
}
