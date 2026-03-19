import { useState, useEffect } from 'react'

const OFFSET = 700

function getVisitCount() {
  const key = 'sp_visit_count'
  const stored = parseInt(localStorage.getItem(key) || '0', 10)
  const newCount = stored + 1
  localStorage.setItem(key, String(newCount))
  return newCount + OFFSET
}

export default function Footer() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    setCount(getVisitCount())
  }, [])

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Shankar Rao Pandala &middot; pandala.in
        </div>
        {count !== null && (
          <div className="visitor-count">
            👁 {count.toLocaleString()} visitors
          </div>
        )}
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
