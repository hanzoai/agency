// check-tokens.mjs — the gate. Every defect this file tests for was, at some
// point, LIVE and SILENT: an undefined custom property paints nothing, an
// unimported token file resolves nothing, and a 1.66:1 focus ring looks fine to
// whoever shipped it. None of them can fail loudly on their own, so they fail
// here. Run via `npm test` (part of `build`).
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const tokensDir = join(root, 'tokens')
const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '')
const read = (p) => readFileSync(p, 'utf8')

let failures = 0
const fail = (msg) => { console.error(`  FAIL  ${msg}`); failures++ }
const pass = (msg) => console.log(`  ok    ${msg}`)

// ── 1. styles.css must CARRY every token file ────────────────────────────
// tokens/z.css was authored, exported and documented — and left out of
// styles.css, so the whole ladder resolved to nothing on every consumer.
//
// The entry point is now generated and FLATTENED, so this checks for the
// declarations themselves rather than for an @import naming the file. That is
// the stronger test and it is the one that was actually needed: the old shape
// passed for years while no bundler could resolve a single token, because a
// relative url() resolves against the CONSUMER's directory. Presence of the
// import proved nothing about presence of the tokens.
{
  const entry = strip(read(join(root, 'styles.css')))
  const files = readdirSync(tokensDir).filter((f) => f.endsWith('.css'))
  const missing = files.filter((f) => {
    const decls = [...strip(read(join(tokensDir, f))).matchAll(/--([A-Za-z0-9-]+)\s*:/g)].map((m) => m[1])
    // A file with no custom properties (pure element rules, e.g. base.css) is
    // carried if one of its selectors made it across.
    if (!decls.length) return !entry.includes(strip(read(join(tokensDir, f))).trim().split('\n')[0].trim())
    return !decls.every((d) => entry.includes(`--${d}`))
  })
  missing.length
    ? fail(`styles.css does not carry the tokens from: ${missing.join(', ')}`)
    : pass(`styles.css carries all ${files.length} token files, flattened`)

  // And it must stay resolvable: an @import here is the exact defect above.
  entry.includes('@import')
    ? fail('styles.css contains an @import — a consumer cannot resolve it (see gen-tokens.mjs)')
    : pass('styles.css has no @import to resolve')

  // Every asset it names must EXIST at the path it names, from the root the
  // bundle now sits at. tokens/fonts.css points one directory up because it is
  // authored one directory down; flattening rebases that, and a rebase that
  // silently stopped happening would put the faces outside the package and fail
  // every consumer's build on a missing module.
  const urls = [...entry.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)]
    .map((m) => m[1])
    .filter((u) => !/^(data:|https?:|\/\/)/.test(u))
  const broken = urls.filter((u) => !existsSync(join(root, u)))
  broken.length
    ? broken.forEach((u) => fail(`styles.css references ${u}, which does not exist at the package root`))
    : pass(`all ${urls.length} asset url()s resolve from the package root`)
}

// ── 1a. the bundles must PARSE ───────────────────────────────────────────
// edit added prose to the end of a comment that was already closed, so a
// paragraph of English sat in the stylesheet as raw CSS, terminated by a
// second `*/`. Browsers recover from that — they skip to the next thing that
// looks like a rule and carry on — so the whole kit rendered correctly in
// Chromium at three widths in both themes, and every screenshot looked right.
// PostCSS does not recover. It throws, which means those two versions could
// not be built against by any Vite/Next/Tailwind consumer at all.
//
// The lesson is specific: RENDERING IS NOT PARSING. A visual check cannot see
// this class of defect, because the browser's error recovery is what hides it.
// So it is checked structurally, here, on the artifacts a consumer receives.
//
// Done by hand rather than with postcss because the defect is lexical and the
// scan is fifteen lines — CSS comments do not nest, so one left-to-right pass
// that skips comment bodies finds every stray terminator and every unclosed
// opener. A parser dependency would be a heavier answer to a smaller question.
{
  for (const f of ['styles.css']) {
    const s = read(join(root, f))
    let i = 0, opened = 0, strays = [], unterminated = null
    while (i < s.length - 1) {
      if (s[i] === '/' && s[i + 1] === '*') {
        opened++
        const j = s.indexOf('*/', i + 2)
        if (j < 0) { unterminated = s.slice(0, i).split('\n').length; break }
        i = j + 2
        continue
      }
      if (s[i] === '*' && s[i + 1] === '/') { strays.push(s.slice(0, i).split('\n').length); i += 2; continue }
      i++
    }
    const braces = [...s].reduce((n, c) => n + (c === '{') - (c === '}'), 0)
    if (unterminated !== null) fail(`${f}: unterminated /* at line ${unterminated}`)
    else if (strays.length) fail(`${f}: stray */ outside any comment at line ${strays.join(', ')} — a consumer's PostCSS build throws here`)
    else if (braces !== 0) fail(`${f}: ${Math.abs(braces)} unbalanced ${braces > 0 ? '{' : '}'}`)
    else pass(`${f} is lexically sound — ${opened} comments closed, braces balanced`)
  }
}

// 1b was the Tailwind bridge — a generated `tailwind.css` mapping every token
// onto a `--color-*` utility slot. Gone with the utility layer it existed to
// feed: this system's one substrate is @hanzo/gui, which reads the tokens
// directly, so a second sheet republishing them as utilities was the "one fact,
// two homes" shape the `second-publisher` lint rule exists to catch.

// ── 1c. element defaults must LOSE to an app's utilities ─────────────────
// A rule outside a cascade layer beats a rule inside one regardless of
// specificity, so an unlayered `a{color:...}` here silently outranked every
// Tailwind text utility on every anchor — a `text-neutral-950` primary button
// rendered white-on-white and read as a rendering glitch. These are DEFAULTS;
// a default that cannot be overridden is not a default.
{
  const base = strip(read(join(tokensDir, 'base.css'))).trim()
  const layered = /^@layer\s+base\s*\{/.test(base) && base.endsWith('}')
  layered
    ? pass('base.css element defaults are inside @layer base')
    : fail('base.css is UNLAYERED — its element rules outrank every utility an app writes')
}

// ── 1d. exactly ONE rule decides focus ───────────────────────────────────
// Until 0.4.9 there were two: a field rule that suppressed the outline and drew
// a brightened edge + halo, and the generic ring. Both computed to (0,1,0) —
// :where() zeroes its contents and each side keeps one pseudo-class — so the
// cascade fell through to SOURCE ORDER inside @layer base, the generic rule was
// written later, and it overrode the `outline:none` the field rule stated
// expressly to prevent it. Every focused input on every consumer drew BOTH.
// Each rule read as correct alone; the defect existed only in their order,
// which is why it survived review in both files.
//
// Order is not testable as intent, so this tests the property that replaced it:
// one rule paints the indicator, and nothing else touches focus. A second rule
// is how they disagree, `outline:none` is how an indicator disappears, and
// box-shadow is how a second one appears — none of the three can return quietly.
{
  const base = strip(read(join(tokensDir, 'base.css')))
  // `outline-offset` is a different property and never matches: the colon must
  // follow `outline` itself.
  const OUTLINE = /(?:^|[;{\s])outline\s*:\s*([^;}]+)/
  const rules = [...base.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .map(([, sel, body]) => ({ sel: sel.trim().replace(/\s+/g, ' '), body }))
    .filter(({ sel }) => sel.includes(':focus-visible'))

  const paints = rules.filter(({ body }) => { const m = body.match(OUTLINE); return m && m[1].trim() !== 'none' })
  const mutes = rules.filter(({ body }) => { const m = body.match(OUTLINE); return m && m[1].trim() === 'none' })
  const halos = rules.filter(({ body }) => /(?:^|[;{\s])box-shadow\s*:/.test(body))

  paints.length === 1
    ? pass(`one focus indicator, one rule: \`${paints[0].sel}\``)
    : fail(`${paints.length} rules paint a focus outline (${paints.map((r) => r.sel).join(' / ')}) — equal specificity inside @layer base, so source order decides which one a user actually sees`)
  mutes.forEach(({ sel }) => fail(`\`${sel}\` sets outline:none — it removes the focus indicator instead of replacing it`))
  halos.forEach(({ sel }) => fail(`\`${sel}\` adds a box-shadow on focus — a second indicator beside the ring`))
}

// ── 2. every var() used inside the token layer must resolve ──────────────
{
  const declared = new Set()
  const used = new Map() // name -> file
  for (const f of readdirSync(tokensDir).filter((f) => f.endsWith('.css'))) {
    const css = strip(read(join(tokensDir, f)))
    for (const [, n] of css.matchAll(/--([A-Za-z0-9-]+)\s*:/g)) declared.add(n)
    for (const [, n] of css.matchAll(/var\(\s*--([A-Za-z0-9-]+)/g)) if (!used.has(n)) used.set(n, f)
  }
  const ghosts = [...used].filter(([n]) => !declared.has(n))
  ghosts.length
    ? ghosts.forEach(([n, f]) => fail(`tokens/${f} references --${n}, which nothing declares`))
    : pass(`all ${used.size} internal var() references resolve`)
}

// ── 3. the focus-indicator contrast gate (WCAG 2.4.11) ───────────────────
// The focus indicator must clear 3:1 against EVERY surface it can land on, in
// BOTH themes. --ring was #333333 = 1.66:1 on --background.
//
// --border-control was gated here too and no longer is. That was not a
// regression, it was the point: pinning a control's RESTING edge at 3:1 forces
// it to a mid-grey on a near-black ground, four times heavier than the hairline
// beside it, and a form drawn that way reads as a wireframe. The edge is now
// rgb(255 255 255 / .15) — the reference's own value — and the contrast budget
// is spent entirely on --ring, which is what a keyboard user actually navigates
// by. A resting edge is an affordance; a focus ring is a position.
{
  const css = strip(read(join(tokensDir, 'colors.css')))
  const block = (re) => { const m = css.match(re); const o = {}; if (m) for (const [, n, v] of m[1].matchAll(/--([A-Za-z0-9-]+)\s*:\s*([^;]+);/g)) o[n] = v.trim(); return o }
  const dark = block(/:root\s*\{([\s\S]*?)\n\}/)
  const themes = { dark, light: { ...dark, ...block(/\.light\s*\{([\s\S]*?)\n\}/) } }

  const deref = (v, s, d = 0) => { const m = d < 10 && v && String(v).match(/^var\(\s*--([A-Za-z0-9-]+)\s*\)$/); return m ? deref(s[m[1]], s, d + 1) : v }
  const rgb = (v) => {
    if (!v) return null
    let m = String(v).trim().match(/^#([0-9a-f]{6})$/i)
    if (m) { const n = parseInt(m[1], 16); return [n >> 16 & 255, n >> 8 & 255, n & 255, 1] }
    m = String(v).trim().match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[/,]\s*([\d.]+))?\s*\)$/i)
    return m ? [+m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4]] : null
  }
  const over = (f, b) => [0, 1, 2].map((i) => f[i] * f[3] + b[i] * (1 - f[3]))
  const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4 }
  const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
  const ratio = (fg, bg, s) => {
    const f = rgb(deref(fg, s)), b = rgb(deref(bg, s))
    if (!f || !b) return null
    const bo = b[3] < 1 ? over(b, [0, 0, 0, 1]) : b.slice(0, 3)
    const fo = f[3] < 1 ? over(f, bo) : f.slice(0, 3)
    const [A, B] = [lum(fo), lum(bo)].sort((x, y) => y - x)
    return (A + 0.05) / (B + 0.05)
  }

  const CANVASES = ['background', 'card', 'popover', 'muted', 'secondary', 'surface-card', 'surface-overlay']
  // The gate follows the DUTY, not the name — and exactly ONE duty owes a
  // ratio. --ring is the focus indicator: transient, keyboard-only, and the
  // whole of how someone knows where they are. Every boundary that is merely an
  // affordance — --border, --border-strong, --border-control, --border-focus,
  // --border-selected — is free to be as quiet as it looks.
  const GATED = { ring: 3 }
  for (const [theme, scope] of Object.entries(themes)) {
    for (const [tok, min] of Object.entries(GATED)) {
      let worst = Infinity, where = ''
      for (const c of CANVASES) {
        const r = ratio(scope[tok], scope[c], scope)
        if (r !== null && r < worst) { worst = r; where = `--${c}` }
      }
      if (!isFinite(worst)) { fail(`--${tok} (${theme}) could not be measured`); continue }
      worst < min
        ? fail(`--${tok} (${theme}) is ${worst.toFixed(2)}:1 on ${where} — needs ${min}:1`)
        : pass(`--${tok} (${theme}) ${worst.toFixed(2)}:1 worst case (${where})`)
    }
  }

  // ── 4. every white-alpha token must be restated for the light theme ──────
  // The opacity ladder does NOT invert. A semantic token built from
  // rgb(255 255 255 / a) is white-on-white in `.light` — the border does not
  // change colour, it STOPS EXISTING — and nothing renders an error. The raw
  // ladder itself (--white-*) is exempt: it is a palette, not a semantic token,
  // and light-theme tokens are expected to restate rather than invert it.
  //
  // Two things widen this from where it started. It scans tokens/elevation.css
  // as well as tokens/colors.css, because that is where the light lives now —
  // an inset white highlight, a white hover bloom and a white panel sheen all
  // fail in `.light` exactly the way a white border does, and more invisibly,
  // since a missing lift looks like a design choice. And it matches white-alpha
  // ANYWHERE INSIDE a value rather than requiring the whole value to be one
  // colour, because every one of those tokens is a shadow or a gradient with
  // the colour buried in it — `inset 0 1px 0 0 rgb(255 255 255 / .07)` would
  // have sailed through a whole-value parse.
  {
    const PALETTE = /^(white|neutral|pure|hanzo)-/
    const FILES = ['colors', 'elevation']
    const blockOf = (src, re) => { const m = strip(src).match(re); const o = {}; if (m) for (const [, n, v] of m[1].matchAll(/--([A-Za-z0-9-]+)\s*:\s*([^;]+);/g)) o[n] = v.trim(); return o }
    const ROOT = /:root\s*\{([\s\S]*?)\n\}/
    const LIGHT = /\.light\s*\{([\s\S]*?)\n\}/

    const sources = Object.fromEntries(FILES.map((f) => [f, read(join(tokensDir, `${f}.css`))]))
    // One scope to resolve against: elevation references --white-* rungs that
    // colors declares, so a per-file scope could not expand them.
    const scope = {}
    for (const f of FILES) Object.assign(scope, blockOf(sources[f], ROOT))
    // Restating in ANY file's .light block counts — the cascade does not care
    // which file a declaration came from.
    const lightKeys = new Set()
    for (const f of FILES) for (const k of Object.keys(blockOf(sources[f], LIGHT))) lightKeys.add(k)

    // Expansion STOPS at any token that is itself restated in `.light`.
    // `--ring-focus: 0 0 0 3px var(--ring-halo)` is theme-safe precisely
    // because --ring-halo inverts underneath it — var() resolves per theme at
    // use time, so deferring to a token that flips IS the fix, and a checker
    // that expanded through it would demand every wrapper be restated too.
    const expand = (v, d = 0) =>
      d > 10 ? v : String(v).replace(/var\(\s*--([A-Za-z0-9-]+)\s*\)/g,
        (m, n) => (n in scope && !lightKeys.has(n) ? expand(scope[n], d + 1) : m))
    const WHITE_ALPHA = /rgba?\(\s*255[\s,]+255[\s,]+255\s*[/,]\s*(?:0?\.\d+|0)\s*\)/i

    const leaked = []
    for (const f of FILES)
      for (const k of Object.keys(blockOf(sources[f], ROOT))) {
        if (PALETTE.test(k) || lightKeys.has(k)) continue
        if (WHITE_ALPHA.test(expand(scope[k]))) leaked.push(`${k} (tokens/${f}.css)`)
      }
    leaked.length
      ? leaked.forEach((k) => fail(`--${k} is built from white-alpha and has no .light value — it vanishes in the light theme`))
      : pass(`every white-alpha token in ${FILES.join('/')}.css is restated in .light`)
  }
}

// ── 5. one light, from one direction ─────────────────────────────────────
// The paper ramp reads as one space only while every edge and every drop in
// the system agrees where the light is. A single `2px 4px` — the spelling
// every other library ships — puts a second lamp in the room, and the failure
// is not visible on any one component: the panel with the offset shadow looks
// fine, and it is the SCREEN that stops making sense. So the rule is checked
// on the values instead of trusted to whoever writes the next one: the light
// is directly above, so a shadow moves down and never sideways.
//
// Structural, not by name — a layer counts as a shadow when its first two
// lengths are lengths, which is what a shadow is and what a size is not.
{
  const css = strip(read(join(tokensDir, 'elevation.css')))
  const LEN = /^-?[\d.]+(px|rem|em)?$/
  const offenders = []
  for (const [, name, value] of css.matchAll(/--([A-Za-z0-9-]+)\s*:\s*([^;]+);/g))
    for (const layer of value.split(',')) {
      const t = layer.trim().replace(/^inset\s+/, '').split(/\s+/)
      if (LEN.test(t[0]) && LEN.test(t[1] ?? '') && parseFloat(t[0]) !== 0)
        offenders.push(`--${name} (${layer.trim()})`)
    }
  offenders.length
    ? offenders.forEach((o) => fail(`${o} is offset sideways — the light is above, so every shadow is \`0 <y> …\``))
    : pass('one light direction — every shadow in elevation.css drops straight down')
}

// ── 6. the TS table is arithmetic, not CSS ───────────────────────────────
// `--text-xs` is `calc(0.6875rem * var(--type-scale, 1))` in the sheet, which is
// how one property retunes the whole ramp. Emitting that string into the
// programmatic table too shipped a value no JavaScript can use: a consumer
// computing with it gets NaN, silently, and a consumer writing it into an inline
// style outranks every stylesheet.
//
// It happened. hanzo.ai's accuracy-at-cost scatter sizes SVG text by
// `parseFloat(typography['text-xs']) * 16`; against 0.5.x every label measured NaN,
// the placement pass could not seat a single one, and the chart gate went red —
// which, because the gates run in the publishing job, froze the whole SITE.
//
// So the generator unwraps a knob (`scale()` in gen-tokens.mjs) and this holds it:
// the knob belongs to the cascade, the value belongs to the table, and neither may
// take the other's job. styles.css is generated from the CSS directly, so the
// runtime knob is untouched — this only governs what JavaScript is handed.
{
  const gen = read(join(root, 'src', 'tokens.gen.ts'))
  const offenders = [...gen.matchAll(/'([^']+)': '([^']*var\(--(?:type-scale|density)[^']*)'/g)]
  offenders.length
    ? offenders.forEach(([, n, v]) =>
        fail(`${n} is emitted as \`${v}\` — a knob cannot be resolved in JS; the table carries the value`))
    : pass('the generated table carries values, not knobs — every length parses as a number')
}

console.log(failures ? `\n${failures} check(s) failed` : '\nall token checks passed')
process.exit(failures ? 1 : 0)
