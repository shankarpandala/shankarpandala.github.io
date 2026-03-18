export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Shankar Rao Pandala &middot; pandala.in
        </div>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/shankarpandala" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shankarpandala/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:shankar.pandala@live.com">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
