(function(m,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("micromark"),require("striptags"),require("feather-icons")):typeof define=="function"&&define.amd?define(["exports","micromark","striptags","feather-icons"],u):(m=typeof globalThis<"u"?globalThis:m||self,u(m.jsonresumeThemeEvenKoKr={},m.micromark,m.striptags,m.feather))})(this,function(m,u,x,b){"use strict";function e(i,...t){return i.reduce((o,r,a)=>{const n=t[a];return Array.isArray(n)?o+r+n.join(""):n!=null&&!!n!==n?o+r+n:o+r},"")}function d(i,t=!1){const o=u(i);return t?x(o):o}const w=i=>new Date(i).toLocaleDateString("ko",{month:"short",year:"numeric",timezone:"KST"});function p(i){return e`<time datetime="${i}">${w(i)}</time>`}function j(i=[]){return i.length>0&&e`
      <section id="awards">
        <h3>수상</h3>
        <div class="stack">
          ${i.map(({awarder:t,date:o,summary:r,title:a})=>e`
              <article>
                <header>
                  <h4>${a}</h4>
                  <div class="meta">
                    ${t&&e`<div>Awarded by <strong>${t}</strong></div>`} ${o&&p(o)}
                  </div>
                </header>
                ${r&&d(r)}
              </article>
            `)}
        </div>
      </section>
    `}const L=i=>i.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function h(i,t){return t?i?e`<a href="${i}">${t}</a>`:t:i&&e`<a href="${i}">${L(i)}</a>`}function z(i=[]){return i.length>0&&e`
      <section id="certificates">
        <h3>자격증</h3>
        <div class="stack">
          ${i.map(({date:t,issuer:o,name:r,url:a})=>e`
              <article>
                <header>
                  <h4>${h(a,r)}</h4>
                  <div class="meta">
                    ${o&&e`<div>발급: <strong>${o}</strong></div>`} ${t&&p(t)}
                  </div>
                </header>
              </article>
            `)}
        </div>
      </section>
    `}function y(i,t){return e`${p(i)} – ${t?p(t):"현재"}`}function q(i=[]){return i.length>0&&e`
      <section id="education">
        <h3>교육</h3>
        <div class="stack">
          ${i.map(({area:t,courses:o=[],institution:r,startDate:a,endDate:n,studyType:l,url:c})=>e`
              <article>
                <header>
                  <h4>${h(c,r)}</h4>
                  <div class="meta">
                    ${t&&e`<strong>${t}</strong>`}
                    ${a&&e`<div>${y(a,n)}</div>`}
                  </div>
                </header>
                ${l&&d(l)}
                ${o.length>0&&e`
                  <h5>이수</h5>
                  <ul>
                    ${o.map(s=>e`<li>${d(s)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
    `}function f(i,t){return(b.icons[i.toLowerCase()]||t&&b.icons[t.toLowerCase()])?.toSvg({width:16,height:16})}const I=i=>Intl.DisplayNames?new Intl.DisplayNames(["ko"],{type:"region"}).of(i):i;function R(i={}){const{email:t,image:o,label:r,location:a,name:n,phone:l,profiles:c=[],summary:s,url:$}=i;return e`
    <header class="masthead">
      ${o&&e`<img src="${o}" alt="" />`}
      <div>${n&&e`<h1>${n}</h1>`} ${r&&e`<h2>${r}</h2>`}</div>
      ${s&&e`<article>${d(s)}</article>`}
      <ul class="icon-list">
        ${a?.city&&e`
          <li>
            ${f("map-pin")} ${a.city}${a.countryCode&&e`, ${I(a.countryCode)}`}
          </li>
        `}
        ${t&&e`
          <li>
            ${f("mail")}
            <a href="mailto:${t}">${t}</a>
          </li>
        `}
        ${l&&e`
          <li>
            ${f("phone")}
            <a href="tel:${l.replace(/\s/g,"")}">${l}</a>
          </li>
        `}
        ${$&&e`<li>${f("link")} ${h($)}</li>`}
        ${c.map(({network:v,url:g,username:k})=>e`
            <li>
              ${v&&f(v,"user")} ${h(g,k)}
              ${v&&e`<span class="network">(${v})</span>`}
            </li>
          `)}
      </ul>
    </header>
  `}function S(i=[]){return i.length>0&&e`
      <section id="interests">
        <h3>관심 분야</h3>
        <div class="grid-list">
          ${i.map(({keywords:t=[],name:o})=>e`
              <div>
                ${o&&e`<h4>${o}</h4>`}
                ${t.length>0&&e`
                  <ul class="tag-list">
                    ${t.map(r=>e`<li>${r}</li>`)}
                  </ul>
                `}
              </div>
            `)}
        </div>
      </section>
    `}function C(i=[]){return i.length>0&&e`
      <section id="languages">
        <h3>언어</h3>
        <div class="grid-list">
          ${i.map(({fluency:t,language:o})=>e`<div>${o&&e`<h4>${o}</h4>`} ${t}</div>`)}
        </div>
      </section>
    `}function O(i={}){const{name:t,summary:o}=i;return e`
    ${t&&e`<title>${t}</title>`}
    ${o&&e`<meta name="description" content="${d(o,!0)}" />`}
  `}const T=i=>Intl.ListFormat?new Intl.ListFormat("en").format(i):i.join(", ");function A(i=[]){return i.length>0&&e`
      <section id="projects">
        <h3>프로젝트</h3>
        <div class="stack">
          ${i.map(({description:t,entity:o,highlights:r=[],keywords:a=[],name:n,startDate:l,endDate:c,roles:s=[],type:$,url:v})=>e`
              <article>
                <header>
                  <h4>${h(v,n)}</h4>
                  <div class="meta">
                    <div>
                      ${s.length>0&&e`<strong>${T(s)}</strong>`}
                      ${o&&e`at <strong>${o}</strong>`}
                    </div>
                    ${l&&e`<div>${y(l,c)}</div>`} ${$&&e`<div>${$}</div>`}
                  </div>
                </header>
                ${t&&d(t)}
                ${r.length>0&&e`
                  <ul>
                    ${r.map(g=>e`<li>${d(g)}</li>`)}
                  </ul>
                `}
                ${a.length>0&&e`
                  <ul class="tag-list">
                    ${a.map(g=>e`<li>${g}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
    `}function P(i=[]){return i.length>0&&e`
      <section id="publications">
        <h3>출판/발행</h3>
        <div class="stack">
          ${i.map(({name:t,publisher:o,releaseDate:r,summary:a,url:n})=>e`
              <article>
                <header>
                  <h4>${h(n,t)}</h4>
                  <div class="meta">
                    ${o&&e`<div>Published by <strong>${o}</strong></div>`}
                    ${r&&p(r)}
                  </div>
                </header>
                ${a&&d(a)}
              </article>
            `)}
        </div>
      </section>
    `}function K(i=[]){return i.length>0&&e`
      <section id="references">
        <h3>추천사</h3>
        <div class="stack">
          ${i.map(({name:t,reference:o})=>e`
              <blockquote>
                ${o&&d(o)}
                ${t&&e`
                  <p>
                    <cite>${t}</cite>
                  </p>
                `}
              </blockquote>
            `)}
        </div>
      </section>
    `}function E(i=[]){return i.length>0&&e`
      <section id="skills">
        <h3>보유 스킬</h3>
        <div class="grid-list">
          ${i.map(({keywords:t=[],name:o})=>e`
              <div>
                ${o&&e`<h4>${o}</h4>`}
                ${t.length>0&&e`
                  <ul class="tag-list">
                    ${t.map(r=>e`<li>${r}</li>`)}
                  </ul>
                `}
              </div>
            `)}
        </div>
      </section>
    `}function F(i=[]){return i.length>0&&e`
      <section id="volunteer">
        <h3>봉사활동</h3>
        <div class="stack">
          ${i.map(({highlights:t=[],organization:o,position:r,startDate:a,endDate:n,summary:l,url:c})=>e`
              <article>
                <header>
                  <h4>${h(c,o)}</h4>
                  <div class="meta">
                    <strong>${r}</strong>
                    ${a&&e`<div>${y(a,n)}</div>`}
                  </div>
                </header>
                ${l&&d(l)}
                ${t.length>0&&e`
                  <ul>
                    ${t.map(s=>e`<li>${d(s)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
    `}function M(i=[]){const t=i.reduce((o,{description:r,name:a,url:n,...l})=>{const c=o[o.length-1];return c&&c.name===a&&c.description===r&&c.url===n?c.items.push(l):o.push({description:r,name:a,url:n,items:[l]}),o},[]);return i.length>0&&e`
      <section id="work">
        <h3>경력</h3>
        <div class="stack">
          ${t.map(({description:o,name:r,url:a,items:n=[]})=>e`
              <article>
                <header>
                  <h4>${h(a,r)}</h4>
                  <div class="meta">${o&&e`<div>${o}</div>`}</div>
                </header>
                <div class="timeline">
                  ${n.map(({highlights:l=[],location:c,position:s,startDate:$,endDate:v,summary:g})=>e`
                      <div>
                        <div>
                          <h5>${s}</h5>
                          <div class="meta">
                            ${$&&e`<div>${y($,v)}</div>`}
                            ${c&&e`<div>${c}</div>`}
                          </div>
                        </div>
                        ${g&&d(g)}
                        ${l.length>0&&e`
                          <ul>
                            ${l.map(k=>e`<li>${d(k)}</li>`)}
                          </ul>
                        `}
                      </div>
                    `)}
                </div>
              </article>
            `)}
        </div>
      </section>
    `}function N(i={}){const t=i.themeOptions?.colors;return t&&Object.entries(t).map(([o,[r,a=r]])=>`--color-${o}-light:${r}; --color-${o}-dark:${a};`).join(" ")}function W(i,t){return e`<!doctype html>
    <html lang="ko" style="${N(i.meta)}">
      <head>
        <meta charset="utf-8" />
        ${O(i.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        <style>
          ${t}
        </style>
      </head>
      <body>
        ${R(i.basics)} ${M(i.work)} ${F(i.volunteer)} ${q(i.education)}
        ${A(i.projects)} ${j(i.awards)} ${z(i.certificates)}
        ${P(i.publications)} ${E(i.skills)} ${C(i.languages)}
        ${S(i.interests)} ${K(i.references)}
      </body>
    </html>`}const D=`:root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #f3f4f5;--color-primary-light: #191e23;--color-secondary-light: #6c7781;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.25;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}body{background:var(--color-background);color:var(--color-primary);display:grid;font:1em/1.5 Lato,sans-serif;gap:2em;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;margin-bottom:4em}body:before{content:"";grid-column:full;grid-row:content}ol,ul{padding-left:1em}:not(.icon-list,.tag-list)>li+li{margin-top:.4em}li::marker,.network{color:var(--color-secondary)}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}h1,h2,h3{line-height:1.2}h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem}h4{font-size:var(--scale2)}h5{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:4em 0;text-align:center}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.6em}.meta{color:var(--color-secondary)}.stack{display:grid;gap:1.5em}.icon-list{display:flex;flex-wrap:wrap;gap:.4em 1em;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:right;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:contents}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}
`,H={mediaType:"print"},U=i=>W(i,D);m.pdfRenderOptions=H,m.render=U,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
