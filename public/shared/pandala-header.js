/**
 * <pandala-header> Web Component
 *
 * A shared branded header for all pandala.in project pages.
 * Uses Shadow DOM for complete style isolation.
 *
 * Usage:
 *   <script src="https://www.pandala.in/shared/pandala-header.js"></script>
 *   <pandala-header
 *     project-name="Math4AI"
 *     project-url="https://www.pandala.in/math4ai/"
 *     project-icon="Σ"
 *     project-color="#a78bfa"
 *   ></pandala-header>
 */
(function () {
  if (customElements.get('pandala-header')) return;

  class PandalaHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const projectName = this.getAttribute('project-name') || '';
      const projectUrl = this.getAttribute('project-url') || '#';
      const projectIcon = this.getAttribute('project-icon') || '';
      const projectColor = this.getAttribute('project-color') || '#5ce0d8';

      this.shadowRoot.innerHTML = `
        <style>
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

          :host {
            display: block;
            position: sticky;
            top: 0;
            z-index: 9999;
            font-family: 'JetBrains Mono', ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
          }

          .pandala-bar {
            background: rgba(10, 15, 26, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid #1e293b;
            height: 40px;
            display: flex;
            align-items: center;
            padding: 0 24px;
          }

          .pandala-bar a {
            text-decoration: none;
            transition: opacity 0.2s;
          }

          .pandala-bar a:hover {
            opacity: 0.8;
          }

          .home-link {
            font-size: 14px;
            color: #64748b;
            display: flex;
            align-items: center;
          }

          .home-link .brand {
            color: #5ce0d8;
          }

          .separator {
            color: #2d3a4d;
            margin: 0 14px;
            font-size: 16px;
            user-select: none;
          }

          .project-link {
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 6px;
            color: ${projectColor};
            font-weight: 500;
          }

          .project-icon {
            font-size: 16px;
          }
        </style>

        <div class="pandala-bar">
          <a class="home-link" href="https://www.pandala.in">
            ~/<span class="brand">pandala.in</span>
          </a>
          ${projectName ? `
            <span class="separator">|</span>
            <a class="project-link" href="${projectUrl}">
              ${projectIcon ? `<span class="project-icon">${projectIcon}</span>` : ''}
              ${projectName}
            </a>
          ` : ''}
        </div>
      `;
    }
  }

  customElements.define('pandala-header', PandalaHeader);
})();
