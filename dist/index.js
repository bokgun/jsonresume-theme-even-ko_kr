import b from 'feather-icons'
import k from 'micromark'
import y from 'striptags'
function t(i, ...e) {
  return i.reduce((o, r, a) => {
    const n = e[a]
    return Array.isArray(n) ? o + r + n.join('') : n != null && !!n !== n ? o + r + n : o + r
  }, '')
}
function d(i, e = !1) {
  const o =
    /** @type {string} */
    k(i)
  return e ? y(o) : o
}
const x = i =>
  new Date(i).toLocaleDateString('ko', {
    month: 'short',
    year: 'numeric',
    timezone: 'KST',
  })
function p(i) {
  return t`<time datetime="${i}">${x(i)}</time>`
}
function w(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="awards">
        <h3>수상</h3>
        <div class="stack">
          ${i.map(
            ({ awarder: e, date: o, summary: r, title: a }) => t`
              <article>
                <header>
                  <h4>${a}</h4>
                  <div class="meta">
                    ${e && t`<div>Awarded by <strong>${e}</strong></div>`} ${o && p(o)}
                  </div>
                </header>
                ${r && d(r)}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
const L = i => i.replace(/^(https?:|)\/\//, '').replace(/\/$/, '')
function v(i, e) {
  return e ? (i ? t`<a href="${i}">${e}</a>` : e) : i && t`<a href="${i}">${L(i)}</a>`
}
function z(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="certificates">
        <h3>자격증</h3>
        <div class="stack">
          ${i.map(
            ({ date: e, issuer: o, name: r, url: a }) => t`
              <article>
                <header>
                  <h4>${v(a, r)}</h4>
                  <div class="meta">
                    ${o && t`<div>발급: <strong>${o}</strong></div>`} ${e && p(e)}
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
function u(i, e) {
  return t`${p(i)} – ${e ? p(e) : '현재'}`
}
function j(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="education">
        <h3>교육</h3>
        <div class="stack">
          ${i.map(
            ({ area: e, courses: o = [], institution: r, startDate: a, endDate: n, studyType: l, url: c }) => t`
              <article>
                <header>
                  <h4>${v(c, r)}</h4>
                  <div class="meta">
                    ${e && t`<strong>${e}</strong>`}
                    ${a && t`<div>${u(a, n)}</div>`}
                  </div>
                </header>
                ${l && d(l)}
                ${
                  o.length > 0 &&
                  t`
                  <h5>이수</h5>
                  <ul>
                    ${o.map(s => t`<li>${d(s)}</li>`)}
                  </ul>
                `
                }
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
function g(i, e) {
  return (
    b.icons[
      /** @type {FeatherIconNames} */
      i.toLowerCase()
    ] ||
    (e &&
      b.icons[
        /** @type {FeatherIconNames} */
        e.toLowerCase()
      ])
  )?.toSvg({ width: 16, height: 16 })
}
const I = i => (Intl.DisplayNames ? new Intl.DisplayNames(['ko'], { type: 'region' }).of(i) : i)
function C(i = {}) {
  const { email: e, image: o, label: r, location: a, name: n, phone: l, profiles: c = [], summary: s, url: m } = i
  return t`
    <header class="masthead">
      ${o && t`<img src="${o}" alt="" />`}
      <div>${n && t`<h1>${n}</h1>`} ${r && t`<h2>${r}</h2>`}</div>
      ${s && t`<article>${d(s)}</article>`}
      <ul class="icon-list">
        ${
          a?.city &&
          t`
          <li>
            ${g('map-pin')} ${a.city}${a.countryCode && t`, ${I(a.countryCode)}`}
          </li>
        `
        }
        ${
          e &&
          t`
          <li>
            ${g('mail')}
            <a href="mailto:${e}">${e}</a>
          </li>
        `
        }
        ${
          l &&
          t`
          <li>
            ${g('phone')}
            <a href="tel:${l.replace(/\s/g, '')}">${l}</a>
          </li>
        `
        }
        ${m && t`<li>${g('link')} ${v(m)}</li>`}
        ${c.map(
          ({ network: h, url: $, username: f }) => t`
            <li>
              ${h && g(h, 'user')} ${v($, f)}
              ${h && t`<span class="network">(${h})</span>`}
            </li>
          `,
        )}
      </ul>
    </header>
  `
}
function R(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="interests">
        <h3>관심 분야</h3>
        <div class="grid-list">
          ${i.map(
            ({ keywords: e = [], name: o }) => t`
              <div>
                ${o && t`<h4>${o}</h4>`}
                ${
                  e.length > 0 &&
                  t`
                  <ul class="tag-list">
                    ${e.map(r => t`<li>${r}</li>`)}
                  </ul>
                `
                }
              </div>
            `,
          )}
        </div>
      </section>
    `
  )
}
function q(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="languages">
        <h3>언어</h3>
        <div class="grid-list">
          ${i.map(({ fluency: e, language: o }) => t`<div>${o && t`<h4>${o}</h4>`} ${e}</div>`)}
        </div>
      </section>
    `
  )
}
function A(i = {}) {
  const { name: e, summary: o } = i
  return t`
    ${e && t`<title>${e}</title>`}
    ${o && t`<meta name="description" content="${d(o, !0)}" />`}
  `
}
const S = i => (Intl.ListFormat ? new Intl.ListFormat('en').format(i) : i.join(', '))
function O(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="projects">
        <h3>프로젝트</h3>
        <div class="stack">
          ${i.map(
            ({
              description: e,
              entity: o,
              highlights: r = [],
              keywords: a = [],
              name: n,
              startDate: l,
              endDate: c,
              roles: s = [],
              type: m,
              url: h,
            }) => t`
              <article>
                <header>
                  <h4>${v(h, n)}</h4>
                  <div class="meta">
                    <div>
                      ${s.length > 0 && t`<strong>${S(s)}</strong>`}
                      ${o && t`at <strong>${o}</strong>`}
                    </div>
                    ${l && t`<div>${u(l, c)}</div>`} ${m && t`<div>${m}</div>`}
                  </div>
                </header>
                ${e && d(e)}
                ${
                  r.length > 0 &&
                  t`
                  <ul>
                    ${r.map($ => t`<li>${d($)}</li>`)}
                  </ul>
                `
                }
                ${
                  a.length > 0 &&
                  t`
                  <ul class="tag-list">
                    ${a.map($ => t`<li>${$}</li>`)}
                  </ul>
                `
                }
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
function P(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="publications">
        <h3>출판/발행</h3>
        <div class="stack">
          ${i.map(
            ({ name: e, publisher: o, releaseDate: r, summary: a, url: n }) => t`
              <article>
                <header>
                  <h4>${v(n, e)}</h4>
                  <div class="meta">
                    ${o && t`<div>Published by <strong>${o}</strong></div>`}
                    ${r && p(r)}
                  </div>
                </header>
                ${a && d(a)}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
function F(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="references">
        <h3>추천사</h3>
        <div class="stack">
          ${i.map(
            ({ name: e, reference: o }) => t`
              <blockquote>
                ${o && d(o)}
                ${
                  e &&
                  t`
                  <p>
                    <cite>${e}</cite>
                  </p>
                `
                }
              </blockquote>
            `,
          )}
        </div>
      </section>
    `
  )
}
function N(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="skills">
        <h3>보유 스킬</h3>
        <div class="grid-list">
          ${i.map(
            ({ keywords: e = [], name: o }) => t`
              <div>
                ${o && t`<h4>${o}</h4>`}
                ${
                  e.length > 0 &&
                  t`
                  <ul class="tag-list">
                    ${e.map(r => t`<li>${r}</li>`)}
                  </ul>
                `
                }
              </div>
            `,
          )}
        </div>
      </section>
    `
  )
}
function W(i = []) {
  return (
    i.length > 0 &&
    t`
      <section id="volunteer">
        <h3>봉사활동</h3>
        <div class="stack">
          ${i.map(
            ({ highlights: e = [], organization: o, position: r, startDate: a, endDate: n, summary: l, url: c }) => t`
              <article>
                <header>
                  <h4>${v(c, o)}</h4>
                  <div class="meta">
                    <strong>${r}</strong>
                    ${a && t`<div>${u(a, n)}</div>`}
                  </div>
                </header>
                ${l && d(l)}
                ${
                  e.length > 0 &&
                  t`
                  <ul>
                    ${e.map(s => t`<li>${d(s)}</li>`)}
                  </ul>
                `
                }
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
function D(i = []) {
  const e = i.reduce(
    (o, { description: r, name: a, url: n, ...l }) => {
      const c = o[o.length - 1]
      return (
        c && c.name === a && c.description === r && c.url === n
          ? c.items.push(l)
          : o.push({ description: r, name: a, url: n, items: [l] }),
        o
      )
    },
    /** @type {NestedWork[]} */
    [],
  )
  return (
    i.length > 0 &&
    t`
      <section id="work">
        <h3>경력</h3>
        <div class="stack">
          ${e.map(
            ({ description: o, name: r, url: a, items: n = [] }) => t`
              <article>
                <header>
                  <h4>${v(a, r)}</h4>
                  <div class="meta">${o && t`<div>${o}</div>`}</div>
                </header>
                <div class="timeline">
                  ${n.map(
                    ({ highlights: l = [], location: c, position: s, startDate: m, endDate: h, summary: $ }) => t`
                      <div>
                        <div>
                          <h5>${s}</h5>
                          <div class="meta">
                            ${m && t`<div>${u(m, h)}</div>`}
                            ${c && t`<div>${c}</div>`}
                          </div>
                        </div>
                        ${$ && d($)}
                        ${
                          l.length > 0 &&
                          t`
                          <ul>
                            ${l.map(f => t`<li>${d(f)}</li>`)}
                          </ul>
                        `
                        }
                      </div>
                    `,
                  )}
                </div>
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
function E(i = {}) {
  const e = i.themeOptions?.colors
  return (
    e &&
    Object.entries(e)
      .map(([o, [r, a = r]]) => `--color-${o}-light:${r}; --color-${o}-dark:${a};`)
      .join(' ')
  )
}
function H(i, e) {
  return t`<!doctype html>
    <html lang="ko" style="${E(i.meta)}">
      <head>
        <meta charset="utf-8" />
        ${A(i.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        <style>
          ${e}
        </style>
      </head>
      <body>
        ${C(i.basics)} ${D(i.work)} ${W(i.volunteer)} ${j(i.education)}
        ${O(i.projects)} ${w(i.awards)} ${z(i.certificates)}
        ${P(i.publications)} ${N(i.skills)} ${q(i.languages)}
        ${R(i.interests)} ${F(i.references)}
      </body>
    </html>`
}
const K = `:root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #f3f4f5;--color-primary-light: #191e23;--color-secondary-light: #6c7781;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.25;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}body{background:var(--color-background);color:var(--color-primary);display:grid;font:1em/1.5 Lato,sans-serif;gap:2em;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;margin-bottom:4em}body:before{content:"";grid-column:full;grid-row:content}ol,ul{padding-left:1em}:not(.icon-list,.tag-list)>li+li{margin-top:.4em}li::marker,.network{color:var(--color-secondary)}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}h1,h2,h3{line-height:1.2}h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem}h4{font-size:var(--scale2)}h5{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:4em 0;text-align:center}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.6em}.meta{color:var(--color-secondary)}.stack{display:grid;gap:1.5em}.icon-list{display:flex;flex-wrap:wrap;gap:.4em 1em;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:right;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:contents}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}
`,
  V = { mediaType: 'print' },
  B = i => H(i, K)
export { V as pdfRenderOptions, B as render }
