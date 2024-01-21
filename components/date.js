import html from '../utils/html.js'

/**
 * @param {string} dateString
 * @returns {string}
 */
const formatDate = dateString =>
  new Date(dateString).toLocaleDateString('ko', {
    month: 'short',
    year: 'numeric',
    timezone: 'KST',
  })

/**
 * @param {string} date
 * @returns {string}
 */
export default function Duration(date) {
  return html`<time datetime="${date}">${formatDate(date)}</time>`
}
