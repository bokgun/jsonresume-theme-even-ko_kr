import html from '../utils/html.js'
import markdown from '../utils/markdown.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['references']} references
 * @returns {string | false}
 */
export default function References(references = []) {
  return (
    references.length > 0 &&
    html`
      <section id="references">
        <h3>추천사</h3>
        <div class="stack">
          ${references.map(
            ({ name, reference }) => html`
              <blockquote>
                ${reference && markdown(reference)}
                ${name &&
                html`
                  <p>
                    <cite>${name}</cite>
                  </p>
                `}
              </blockquote>
            `,
          )}
        </div>
      </section>
    `
  )
}
