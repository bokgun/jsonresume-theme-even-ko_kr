"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const y=require("micromark"),k=require("striptags"),b=require("feather-icons");function i(t,...e){return t.reduce((o,r,a)=>{const n=e[a];return Array.isArray(n)?o+r+n.join(""):n!=null&&!!n!==n?o+r+n:o+r},"")}function d(t,e=!1){const o=y(t);return e?k(o):o}const x=t=>new Date(t).toLocaleDateString("ko",{month:"short",year:"numeric",timezone:"KST"});function u(t){return i`<time datetime="${t}">${x(t)}</time>`}function w(t=[]){return t.length>0&&i`
      <section id="awards">
        <h3>수상</h3>
        <div class="stack">
          ${t.map(({awarder:e,date:o,summary:r,title:a})=>i`
              <article>
                <header>
                  <h4>${a}</h4>
                  <div class="meta">
                    ${e&&i`<div>Awarded by <strong>${e}</strong></div>`} ${o&&u(o)}
                  </div>
                </header>
                ${r&&d(r)}
              </article>
            `)}
        </div>
      </section>
    `}const L=t=>t.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function v(t,e){return e?t?i`<a href="${t}">${e}</a>`:e:t&&i`<a href="${t}">${L(t)}</a>`}function z(t=[]){return t.length>0&&i`
      <section id="certificates">
        <h3>자격증</h3>
        <div class="stack">
          ${t.map(({date:e,issuer:o,name:r,url:a})=>i`
              <article>
                <header>
                  <h4>${v(a,r)}</h4>
                  <div class="meta">
                    ${o&&i`<div>발급: <strong>${o}</strong></div>`} ${e&&u(e)}
                  </div>
                </header>
              </article>
            `)}
        </div>
      </section>
    `}function p(t,e){return i`${u(t)} – ${e?u(e):"현재"}`}function j(t=[]){return t.length>0&&i`
      <section id="education">
        <h3>교육</h3>
        <div class="stack">
          ${t.map(({area:e,courses:o=[],institution:r,startDate:a,endDate:n,studyType:l,url:c})=>i`
              <article>
                <header>
                  <h4>${v(c,r)}</h4>
                  <div class="meta">
                    ${e&&i`<strong>${e}</strong>`}
                    ${a&&i`<div>${p(a,n)}</div>`}
                  </div>
                </header>
                ${l&&d(l)}
                ${o.length>0&&i`
                  <h5>이수</h5>
                  <ul>
                    ${o.map(s=>i`<li>${d(s)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
    `}function g(t,e){return(b.icons[t.toLowerCase()]||e&&b.icons[e.toLowerCase()])?.toSvg({width:16,height:16})}const q=t=>Intl.DisplayNames?new Intl.DisplayNames(["ko"],{type:"region"}).of(t):t;function I(t={}){const{email:e,image:o,label:r,location:a,name:n,phone:l,profiles:c=[],summary:s,url:m}=t;return i`
    <header class="masthead">
      ${o&&i`<img src="${o}" alt="" />`}
      <div>${n&&i`<h1>${n}</h1>`} ${r&&i`<h2>${r}</h2>`}</div>
      ${s&&i`<article>${d(s)}</article>`}
      <ul class="icon-list">
        ${a?.city&&i`
          <li>
            ${g("map-pin")} ${a.city}${a.countryCode&&i`, ${q(a.countryCode)}`}
          </li>
        `}
        ${e&&i`
          <li>
            ${g("mail")}
            <a href="mailto:${e}">${e}</a>
          </li>
        `}
        ${l&&i`
          <li>
            ${g("phone")}
            <a href="tel:${l.replace(/\s/g,"")}">${l}</a>
          </li>
        `}
        ${m&&i`<li>${g("link")} ${v(m)}</li>`}
        ${c.map(({network:h,url:$,username:f})=>i`
            <li>
              ${h&&g(h,"user")} ${v($,f)}
              ${h&&i`<span class="network">(${h})</span>`}
            </li>
          `)}
      </ul>
    </header>
  `}function R(t=[]){return t.length>0&&i`
      <section id="interests">
        <h3>관심 분야</h3>
        <div class="grid-list">
          ${t.map(({keywords:e=[],name:o})=>i`
              <div>
                ${o&&i`<h4>${o}</h4>`}
                ${e.length>0&&i`
                  <ul class="tag-list">
                    ${e.map(r=>i`<li>${r}</li>`)}
                  </ul>
                `}
              </div>
            `)}
        </div>
      </section>
    `}function S(t=[]){return t.length>0&&i`
      <section id="languages">
        <h3>언어</h3>
        <div class="grid-list">
          ${t.map(({fluency:e,language:o})=>i`<div>${o&&i`<h4>${o}</h4>`} ${e}</div>`)}
        </div>
      </section>
    `}function C(t={}){const{name:e,summary:o}=t;return i`
    ${e&&i`<title>${e}</title>`}
    ${o&&i`<meta name="description" content="${d(o,!0)}" />`}
  `}const O=t=>Intl.ListFormat?new Intl.ListFormat("en").format(t):t.join(", ");function A(t=[]){return t.length>0&&i`
      <section id="projects">
        <h3>프로젝트</h3>
        <div class="stack">
          ${t.map(({description:e,entity:o,highlights:r=[],keywords:a=[],name:n,startDate:l,endDate:c,roles:s=[],type:m,url:h})=>i`
              <article>
                <header>
                  <h4>${v(h,n)}</h4>
                  <div class="meta">
                    <div>
                      ${s.length>0&&i`<strong>${O(s)}</strong>`}
                      ${o&&i`at <strong>${o}</strong>`}
                    </div>
                    ${l&&i`<div>${p(l,c)}</div>`} ${m&&i`<div>${m}</div>`}
                  </div>
                </header>
                ${e&&d(e)}
                ${r.length>0&&i`
                  <ul>
                    ${r.map($=>i`<li>${d($)}</li>`)}
                  </ul>
                `}
                ${a.length>0&&i`
                  <ul class="tag-list">
                    ${a.map($=>i`<li>${$}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
    `}function P(t=[]){return t.length>0&&i`
      <section id="publications">
        <h3>출판/발행</h3>
        <div class="stack">
          ${t.map(({name:e,publisher:o,releaseDate:r,summary:a,url:n})=>i`
              <article>
                <header>
                  <h4>${v(n,e)}</h4>
                  <div class="meta">
                    ${o&&i`<div>Published by <strong>${o}</strong></div>`}
                    ${r&&u(r)}
                  </div>
                </header>
                ${a&&d(a)}
              </article>
            `)}
        </div>
      </section>
    `}function F(t=[]){return t.length>0&&i`
      <section id="references">
        <h3>추천사</h3>
        <div class="stack">
          ${t.map(({name:e,reference:o})=>i`
              <blockquote>
                ${o&&d(o)}
                ${e&&i`
                  <p>
                    <cite>${e}</cite>
                  </p>
                `}
              </blockquote>
            `)}
        </div>
      </section>
    `}function M(t=[]){return t.length>0&&i`
      <section id="skills">
        <h3>보유 스킬</h3>
        <div class="grid-list">
          ${t.map(({keywords:e=[],name:o})=>i`
              <div>
                ${o&&i`<h4>${o}</h4>`}
                ${e.length>0&&i`
                  <ul class="tag-list">
                    ${e.map(r=>i`<li>${r}</li>`)}
                  </ul>
                `}
              </div>
            `)}
        </div>
      </section>
    `}function N(t=[]){return t.length>0&&i`
      <section id="volunteer">
        <h3>봉사활동</h3>
        <div class="stack">
          ${t.map(({highlights:e=[],organization:o,position:r,startDate:a,endDate:n,summary:l,url:c})=>i`
              <article>
                <header>
                  <h4>${v(c,o)}</h4>
                  <div class="meta">
                    <strong>${r}</strong>
                    ${a&&i`<div>${p(a,n)}</div>`}
                  </div>
                </header>
                ${l&&d(l)}
                ${e.length>0&&i`
                  <ul>
                    ${e.map(s=>i`<li>${d(s)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
    `}function T(t=[]){const e=t.reduce((o,{description:r,name:a,url:n,...l})=>{const c=o[o.length-1];return c&&c.name===a&&c.description===r&&c.url===n?c.items.push(l):o.push({description:r,name:a,url:n,items:[l]}),o},[]);return t.length>0&&i`
      <section id="work">
        <h3>경력</h3>
        <div class="stack">
          ${e.map(({description:o,name:r,url:a,items:n=[]})=>i`
              <article>
                <header>
                  <h4>${v(a,r)}</h4>
                  <div class="meta">${o&&i`<div>${o}</div>`}</div>
                </header>
                <div class="timeline">
                  ${n.map(({highlights:l=[],location:c,position:s,startDate:m,endDate:h,summary:$})=>i`
                      <div>
                        <div>
                          <h5>${s}</h5>
                          <div class="meta">
                            ${m&&i`<div>${p(m,h)}</div>`}
                            ${c&&i`<div>${c}</div>`}
                          </div>
                        </div>
                        ${$&&d($)}
                        ${l.length>0&&i`
                          <ul>
                            ${l.map(f=>i`<li>${d(f)}</li>`)}
                          </ul>
                        `}
                      </div>
                    `)}
                </div>
              </article>
            `)}
        </div>
      </section>
    `}function W(t={}){const e=t.themeOptions?.colors;return e&&Object.entries(e).map(([o,[r,a=r]])=>`--color-${o}-light:${r}; --color-${o}-dark:${a};`).join(" ")}function D(t,e){return i`<!doctype html>
    <html lang="ko" style="${W(t.meta)}">
      <head>
        <meta charset="utf-8" />
        ${C(t.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        <style>
          ${e}
        </style>
      </head>
      <body>
        ${I(t.basics)} ${T(t.work)} ${N(t.volunteer)} ${j(t.education)}
        ${A(t.projects)} ${w(t.awards)} ${z(t.certificates)}
        ${P(t.publications)} ${M(t.skills)} ${S(t.languages)}
        ${R(t.interests)} ${F(t.references)}
      </body>
    </html>`}const E=`:root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #f3f4f5;--color-primary-light: #191e23;--color-secondary-light: #6c7781;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.25;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}body{background:var(--color-background);color:var(--color-primary);display:grid;font:1em/1.5 Lato,sans-serif;gap:2em;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;margin-bottom:4em}body:before{content:"";grid-column:full;grid-row:content}ol,ul{padding-left:1em}:not(.icon-list,.tag-list)>li+li{margin-top:.4em}li::marker,.network{color:var(--color-secondary)}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}h1,h2,h3{line-height:1.2}h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem}h4{font-size:var(--scale2)}h5{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:4em 0;text-align:center}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.6em}.meta{color:var(--color-secondary)}.stack{display:grid;gap:1.5em}.icon-list{display:flex;flex-wrap:wrap;gap:.4em 1em;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:right;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:contents}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}
`,H={mediaType:"print"},K=t=>D(t,E);exports.pdfRenderOptions=H;exports.render=K;
