import { useState, useEffect } from 'react'

const NAMESPACE = 'shankarpandala-github-io'
const KEY = 'visits'
const OFFSET = 700

export default function Footer() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
      .then(res => res.json())
      .then(data => setCount(data.value + OFFSET))
      .catch(() => setCount(null))
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
