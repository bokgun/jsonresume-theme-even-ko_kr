import html from '../utils/html.js'
import Date from './date.js'

/**
 * @param {string} startDate
 * @param {string} [endDate]
 * @returns {string}
 */
export default function Duration(startDate, endDate) {
  return html`${Date(startDate)} – ${endDate ? Date(endDate) : '현재'}`
}
