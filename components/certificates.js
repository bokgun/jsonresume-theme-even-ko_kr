import html from '../utils/html.js'
import Date from './date.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['certificates']} certificates
 * @returns {string | false}
 */
export default function Certificates(certificates = []) {
  return (
    certificates.length > 0 &&
    html`
      <section id="certificates">
        <h3>자격증</h3>
        <div class="stack">
          ${certificates.map(
            ({ date, issuer, name, url }) => html`
              <article>
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div class="meta">
                    ${issuer && html`<div>발급: <strong>${issuer}</strong></div>`} ${date && Date(date)}
                  </div>
                </header>
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
