// gen-tokens.mjs — the ONE source→TS bridge for @hanzo/design.
// The hand-authored token CSS under tokens/*.css is the source of truth; this
// script parses every `--name: value;` custom property out of it and emits a
// typed TypeScript module (src/tokens.gen.ts). CSS and code therefore can never
// drift — you edit a token in ONE place (the CSS) and both the stylesheet and
// the programmatic API update. Run via `npm run gen` (part of `build`).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const tokensDir = join(root, 'tokens')

// The token files, in the same order styles.css imports them. base.css is the
// semantic-alias layer (references other vars) — parsed too, so `--background`
// etc. are available programmatically.
const FILES = ['colors', 'typography', 'spacing', 'grid', 'radius', 'elevation', 'motion', 'z', 'fonts', 'base']

// group name for each file (the export const); a couple read better renamed.
const GROUP = { z: 'zIndex' }

/** Strip /* *​/ comments, then pull every `--name: value;` pair (multi-per-line ok). */
function parse(css) {
  const noComments = css.replace(/\/\*[\s\S]*?\*\//g, '')
  const out = []
  const re = /--([A-Za-z0-9-]+)\s*:\s*([^;]+);/g
  let m
  while ((m = re.exec(noComments))) out.push([m[1].trim(), m[2].trim()])
  return out
}

// A token may be authored more than once — the dark `:root{}` default and a
// light `@media`/`[data-theme]` override carry the SAME name. Keep the FIRST
// occurrence (dark, the default theme): the static map is the authored default;
// live theme switching happens through the CSS cascade via cssVar()/var(--x).
/**
 * A knob is CSS's, so the TS table publishes the VALUE and leaves the knob behind.
 *
 * `--text-xs` and `--space-1` are authored as `calc(0.6875rem * var(--type-scale, 1))`
 * so one property retunes the whole ramp at runtime. That is right in a stylesheet
 * and unusable in JavaScript twice over: nothing in JS can resolve a `var()`, so a
 * consumer computing with the value gets NaN, and a consumer writing it into an
 * inline style outranks every stylesheet — which is the one thing this package
 * spends its whole cascade avoiding.
 *
 * So the two facts braided into that one string are separated here. The value is
 * the ramp; the knob is the cascade's, and `styles.css` is generated straight from
 * the CSS, so it keeps the calc and the runtime knob still works. `cssVar()`'s
 * fallback gets the literal too, which is what a host with no token layer mounted
 * actually wants — there is no `--type-scale` there either.
 *
 * The shape is exact (`calc(<value> * var(--<knob>, 1))`) and only that shape is
 * unwrapped; a genuinely composite calc (`calc(var(--fold) - 1px)`) is untouched.
 * check-tokens.mjs holds it: no emitted value may name a knob.
 *
 * The type ramp adds a second knob INSIDE the first — a rung is
 * `calc((<anchor> ± <delta> * var(--type-ratio, 1)) * var(--type-scale, 1))`, and
 * the small rungs wrap that in a `max()` floor. Both are peeled here, in the
 * order they nest, and the arithmetic is then done at the published defaults
 * (both knobs 1) so the table carries exactly the rung the sheet renders — which
 * is the same number it carried before the ratio existed. The floor is DROPPED
 * rather than evaluated: it exists to catch a person's settings compounding, and
 * at the defaults it never binds, so keeping it would put a guard in the table
 * against a knob the table does not have.
 */
const KNOB = /^calc\(\s*([^*]+?)\s*\*\s*var\(--(?:type-scale|density),\s*1\)\s*\)$/
// The BOUNDS peel first. Every rung is `clamp(floor, value, ceiling)` — one
// rule at both ends — and the table carries the VALUE: a bound is a rendering
// decision the browser makes against a live viewport, so a JS table cannot hold
// one and must not pretend to. `max(floor, value)` is the older one-ended form,
// kept so a token file mid-migration still generates.
const BOUNDS = [
  /^clamp\(\s*[^,]+,\s*(calc\(.*\))\s*,\s*[^,]+\)$/,
  /^max\(\s*[\d.]+[a-z%]*\s*,\s*(calc\(.+\))\s*\)$/,
]
const RUNG =
  /^calc\(\(\s*([\d.]+)(r?em|px)\s*([+-])\s*([\d.]+)(?:r?em|px)\s*\*\s*var\(--type-ratio,\s*1\)\s*\)\s*\*\s*var\(--type-scale,\s*1\)\s*\)$/

const scale = (v) => {
  let inner = v
  for (const b of BOUNDS) {
    const m = inner.match(b)
    if (m) { inner = m[1]; break }
  }
  const r = inner.match(RUNG)
  if (r) {
    const [, anchor, unit, sign, delta] = r
    const n = sign === '-' ? Number(anchor) - Number(delta) : Number(anchor) + Number(delta)
    // 4dp, then trim — 0.875 + 0.75 must read `1.625rem`, not `1.6250000000000002rem`.
    return `${Number(n.toFixed(4))}${unit}`
  }
  return inner.match(KNOB)?.[1] ?? inner
}

const groupMaps = {} // groupName -> Map(name->value), first-wins
const flatMap = new Map() // '--name' -> value, first-wins
for (const f of FILES) {
  let css
  try {
    css = readFileSync(join(tokensDir, `${f}.css`), 'utf8')
  } catch {
    continue
  }
  const g = GROUP[f] ?? f
  const gm = (groupMaps[g] ??= new Map())
  for (const [n, v0] of parse(css)) {
    const v = scale(v0)
    if (!gm.has(n)) gm.set(n, v)
    if (!flatMap.has(`--${n}`)) flatMap.set(`--${n}`, v)
  }
}
const groups = Object.fromEntries(Object.entries(groupMaps).map(([g, m]) => [g, [...m]]))
const flat = [...flatMap]

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
const objLit = (pairs) =>
  '{\n' + pairs.map(([n, v]) => `  '${esc(n)}': '${esc(v)}',`).join('\n') + '\n} as const'

let ts = `// AUTO-GENERATED by scripts/gen-tokens.mjs from tokens/*.css — DO NOT EDIT.
// Edit the token in tokens/<group>.css and re-run \`npm run gen\`.
/* eslint-disable */

`

// Per-group typed maps (keyed by the var name WITHOUT the leading '--').
for (const [g, pairs] of Object.entries(groups)) {
  ts += `/** ${g} tokens (from tokens/${Object.keys(GROUP).find((k) => GROUP[k] === g) ?? g}.css). Values are raw CSS. */\n`
  ts += `export const ${g} = ${objLit(pairs)}\n\n`
}

// The complete flat map, keyed by the literal CSS custom-property name.
ts += `/** Every token, keyed by its literal CSS custom-property name ('--background', …). */\n`
ts += `export const cssVars = ${objLit(flat)}\n\n`

ts += `export type CssVarName = keyof typeof cssVars\n`

writeFileSync(join(root, 'src', 'tokens.gen.ts'), ts)
console.log(`gen-tokens: wrote src/tokens.gen.ts — ${flat.length} tokens across ${Object.keys(groups).length} groups`)

// ── styles.css, FLATTENED ────────────────────────────────────────────────
// The entry point says "import THIS one file", and for a long time no bundler
// could. It was a list of `@import url("tokens/*.css")`, and a relative url
// resolves against the file doing the importing — so a consumer's
// `@import "@hanzo/design/styles.css"` sent webpack looking for
// `<their app>/tokens/fonts.css` and the build died on a module it never had.
// Nested imports also have to precede every other rule, which the spec then
// invalidates the moment the consumer imports anything before them; browsers
// drop them silently, every token resolves to nothing, and `border-border`
// falls back to currentColor — a stark white hairline on black.
//
// Both failures are the same fact: an @import list is not a stylesheet a
// consumer can use. So the entry point is now the CONTENT, concatenated in the
// same order, with no imports to resolve and no order to get wrong. That is why
// nothing consumed this package and every app hand-rolled its own palette.
//
// Authoring does not change: tokens/*.css stays the source of truth and this is
// its build product, exactly like tokens.gen.ts.
const banner = `/* Hanzo Design System — the entry point. Import THIS one file.
 *
 * AUTO-GENERATED by scripts/gen-tokens.mjs from tokens/*.css — DO NOT EDIT.
 * Edit the token in tokens/<group>.css and re-run "npm run gen".
 *
 * Flattened deliberately: a consumer's bundler resolves a nested url() against
 * ITS OWN directory, not ours, so an @import list here is a build error in
 * every app that follows the instruction above. Nested imports must also
 * precede all other rules, which the spec invalidates the moment the consumer
 * imports anything first — browsers then drop them silently and every token
 * resolves to nothing. The content is inlined in the order the groups were
 * always imported in.
 */
`
// Hoisting a file from tokens/ to the package root moves what its relative
// url()s point at. tokens/fonts.css says `../assets/fonts/Geist-Variable.woff2`
// — correct from tokens/, one directory too high from the root, where it lands
// outside the package entirely and every consumer's build fails on a missing
// module. Rebasing is therefore part of flattening, not an afterthought: the
// bundle is one level shallower, so `../` becomes `./`.
const rebase = (css) =>
  css.replace(/url\((\s*['"]?)\.\.\/(?!\.)/g, 'url($1./')

const bundle = banner + FILES.map((f) => {
  const css = rebase(readFileSync(join(tokensDir, `${f}.css`), 'utf8').trim())
  return `\n/* ── tokens/${f}.css ─────────────────────────────────────── */\n${css}\n`
}).join('')
writeFileSync(join(root, 'styles.css'), bundle)
console.log(`gen-tokens: wrote styles.css — ${FILES.length} token groups, flattened`)

