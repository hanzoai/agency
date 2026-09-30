#!/usr/bin/env node
// lint.mjs — the gate on CONSUMER code. `check-tokens.mjs` proves the token
// layer is sound; this proves the code that USES it actually reaches it.
//
// Every rule here is a defect that shipped, silently, to a live Hanzo surface:
// a var() nothing declares paints nothing, a raw hex ignores the theme, a bare
// z-index wins a fight it should have lost, an ALL-CAPS label is a different
// brand. None of them throw. So they fail here.
//
//   npx hanzo-design-lint <path...>        # default: cwd
//
// Exit 1 on any violation. That is the point.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative, extname, sep } from 'node:path'

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), '..')

// ── the vocabulary: every token the design system actually declares ──────
const TOKENS = new Set()
{
  const dir = join(pkgRoot, 'tokens')
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.css')))
    for (const [, n] of readFileSync(join(dir, f), 'utf8').matchAll(/--([A-Za-z0-9-]+)\s*:/g))
      TOKENS.add(n)
}

// ── what we read ─────────────────────────────────────────────────────────
const EXT = new Set(['.css', '.scss', '.jsx', '.tsx', '.js', '.ts', '.vue', '.svelte', '.html', '.md'])
// Markdown is PROSE, and prose legitimately says `var(--x)` while explaining
// what a var is. Only its FENCED CSS BLOCKS are code, and only rule 1 runs on
// them. That is not a technicality — `docs/integrate.md` shipped the
// copy-paste snippet every new consumer starts from, and its `.panel` rule
// drew `1px solid var(--border-card)`, a token nothing declares. Anyone who
// followed the integration guide got a white hairline on black, from the
// document whose job is to prevent exactly that.
const FENCED_CSS = /```(?:css|scss)\n([\s\S]*?)```/g
const SKIP = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'out', 'coverage', 'vendor', '__pycache__'])
// Third-party marks keep their own hex by design (DESIGN.md §2.4); so do the
// token files themselves, which are where raw values are SUPPOSED to live, and
// the specimen cards, whose whole job is to render a palette swatch at its
// literal value.
//
// This exempts those paths from the VALUE rules only. It used to skip them
// entirely, and rule 1 — "a var() must resolve" — is not a value rule, it is a
// correctness rule, and the exemption hid seven live instances of the exact
// defect this package documents: `guidelines/*.card.html` drew borders from
// `--border-hairline` and `--border-card`, neither of which anything declares.
// An undefined custom property makes the declaration invalid, `border-color`
// falls back to `currentColor`, and the specimen cards for this system's own
// border scale had been painting near-white hairlines on black.
// The three GENERATED artifacts are on the list for the same reason `tokens/`
// is: each one is that directory, emitted. `src/tokens.gen.ts` carries every
// authored literal into TypeScript; `styles.css` and `tailwind.css` are the
// flattened bundles. Flagging any of them for raw colour is flagging them for
// working. They are still checked by rule 1 and by check-tokens.mjs, which is
// what actually governs them.
const EXEMPT = /(^|\/)(tokens|assets|logos|providers|ui_kits|guidelines)(\/|$)|\.card\.html$|(^|\/)(tokens\.gen\.ts|styles\.css|tailwind\.css)$/

const walk = (p, out = []) => {
  const st = statSync(p)
  if (st.isFile()) { if (EXT.has(extname(p))) out.push(p); return out }
  for (const e of readdirSync(p)) if (!SKIP.has(e) && !e.startsWith('.')) walk(join(p, e), out)
  return out
}

const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
const lineOf = (src, i) => src.slice(0, i).split('\n').length

// Read one property's value out of a JSX style object, respecting quotes and
// nested parens — `linear-gradient(a, var(--x))` is ONE value, not two.
function styleValue(body, key) {
  const at = body.search(new RegExp(`\\b${key}\\s*:`))
  if (at < 0) return null
  let i = body.indexOf(':', at) + 1, depth = 0, quote = null, out = ''
  for (; i < body.length; i++) {
    const c = body[i]
    if (quote) { out += c; if (c === quote && body[i - 1] !== '\\') quote = null; continue }
    if (c === '"' || c === "'" || c === '`') { quote = c; out += c; continue }
    if (c === '(' || c === '[') depth++
    if (c === ')' || c === ']') depth--
    if (c === ',' && depth === 0) break
    out += c
  }
  return out.trim()
}

const findings = []
const flag = (file, line, rule, detail, fix) =>
  findings.push({ file, line, rule, detail, fix })

// ── the rules ────────────────────────────────────────────────────────────
// 1. var() must resolve — against the design tokens or a local declaration.
//    This is the menu that painted with undefined tokens. It runs on EVERY
//    file, including the ones exempt from the value rules: a swatch is allowed
//    to state a hex, and is not allowed to name a token that does not exist.
function lintUnresolved(rel, src) {
  const local = new Set([...src.matchAll(/--([A-Za-z0-9-]+)\s*:/g)].map((m) => m[1]))
  for (const m of src.matchAll(/var\(\s*--([A-Za-z0-9-]+)\s*(\)|,)/g)) {
    const [, name, close] = m
    if (TOKENS.has(name) || local.has(name)) continue
    if (close === ',') continue // an explicit fallback is a deliberate choice
    flag(rel, lineOf(src, m.index), 'unresolved-token',
      `var(--${name}) — nothing declares it`,
      'use a token from @hanzo/design or declare it locally')
  }
}

/** A build product says so at the top, and there is no point telling anyone to
 *  fix it — the fix belongs in the generator. Every convention in use is
 *  accepted, and only the head of the file is read, so a file that merely
 *  MENTIONS the phrase is still linted. */
const GENERATED = /@generated|AUTO-?GENERATED|DO NOT EDIT|Generated by|autogenerated/i

function lintFile(abs, root) {
  const rel = relative(root, abs).split(sep).join('/')
  const raw = readFileSync(abs, 'utf8')
  if (GENERATED.test(raw.slice(0, 400))) return
  if (extname(rel) === '.md') {
    // Line numbers stay true: replace everything outside a css fence with
    // blanks rather than extracting the fences, so a reported line is the line.
    let masked = raw.replace(/[^\n]/g, ' ')
    for (const m of raw.matchAll(FENCED_CSS))
      masked = masked.slice(0, m.index) + m[0] + masked.slice(m.index + m[0].length)
    lintUnresolved(rel, strip(masked))
    return
  }
  const src = strip(raw)
  lintUnresolved(rel, src)
  if (EXEMPT.test('/' + rel)) return
  const isStyle = /\.(css|scss)$/.test(rel)

  // 2. no raw colour in a surface. The theme cannot reach a literal.
  for (const m of src.matchAll(/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b|\b(?:rgba?|hsla?)\(/g)) {
    const line = lineOf(src, m.index)
    const text = src.split('\n')[line - 1] ?? ''
    if (/currentColor|transparent|url\(|\.svg|<svg|xmlns|viewBox|stopColor|fill=/.test(text)) continue
    flag(rel, line, 'raw-color', m[0].startsWith('#') ? m[0] : m[0] + '…)',
      'use --foreground / --surface-card / the --white-* ladder')
  }

  // 3. no bare z-index. The ladder is --z-base … --z-notification.
  for (const m of src.matchAll(/z-?[Ii]ndex\s*[:=]\s*['"{ ]*(-?\d+)/g))
    flag(rel, lineOf(src, m.index), 'raw-z-index', `z-index: ${m[1]}`,
      'use --z-dropdown / --z-modal / --z-toast …')
  for (const m of src.matchAll(/\bz-\[(-?\d+)\]/g))
    flag(rel, lineOf(src, m.index), 'raw-z-index', `z-[${m[1]}]`,
      'use var(--z-…) via an arbitrary property, not a magic number')

  // 4. no raw font-size. The scale is --type-* / --text-*.
  for (const m of src.matchAll(/font-?[Ss]ize\s*[:=]\s*['"{ ]*(\d+(?:\.\d+)?)(px|pt)/g))
    flag(rel, lineOf(src, m.index), 'raw-font-size', `${m[1]}${m[2]}`,
      'use --type-body / --type-h2 / the --text-* scale')

  // 5. sentence case. ALL CAPS is a different brand — eyebrows excepted, and
  //    an eyebrow says so by using --type-eyebrow / the eyebrow class.
  if (isStyle) {
    for (const m of src.matchAll(/text-transform\s*:\s*uppercase/g)) {
      const around = src.slice(Math.max(0, m.index - 400), m.index)
      if (/eyebrow|--type-eyebrow|tracking-widest/i.test(around)) continue
      flag(rel, lineOf(src, m.index), 'all-caps', 'text-transform: uppercase',
        'sentence case; use --type-eyebrow if it is genuinely an eyebrow')
    }
  } else {
    for (const m of src.matchAll(/>\s*([A-Z][A-Z0-9 &/'-]{5,40})\s*</g)) {
      const t = m[1].trim()
      if (!/[A-Z]{2}/.test(t) || /^[A-Z0-9 &/'-]+$/.test(t) === false) continue
      if (t.split(/\s+/).every((w) => w.length <= 3)) continue // AI, API, GPU…
      const line = lineOf(src, m.index)
      const around = src.split('\n').slice(Math.max(0, line - 4), line).join(' ')
      if (/eyebrow|uppercase|tracking-widest/i.test(around)) continue
      flag(rel, line, 'all-caps', `"${t}"`, 'sentence case for labels and headings')
    }
  }

  // 6. no inline style carrying design decisions. It outranks every token and
  //    every theme, which is exactly why it keeps being reached for.
  //    Only a LITERAL is a violation: `color:'#fff'`, `fontSize:13`. An
  //    identifier (`background:FILL[variant]`) is indirection we cannot read,
  //    and guessing there would train people to ignore the linter.
  for (const m of src.matchAll(/style=\{\{([^}]*)\}\}/g)) {
    const body = m[1]
    const bad = ['color', 'background', 'backgroundColor', 'fontSize', 'boxShadow', 'borderColor']
      .filter((k) => {
        const val = styleValue(body, k)
        if (val === null) return false
        if (/var\(/.test(val)) return false
        if (/^['"`]?(transparent|none|inherit|currentColor|unset|initial|auto)['"`]?$/i.test(val)) return false
        return /^['"`]/.test(val) || /^-?\d/.test(val)
      })
    if (bad.length)
      flag(rel, lineOf(src, m.index), 'inline-style', `style={{ ${bad.join(', ')} }}`,
        'move to a class; if it must be inline, the value must be var(--token)')
  }

  // 7. one icon set.
  for (const m of src.matchAll(/from\s+['"](@?[\w./-]*(?:react-icons|heroicons|font-awesome|@mui\/icons|feather-icons|phosphor)[\w./-]*)['"]/g))
    flag(rel, lineOf(src, m.index), 'icon-set', m[1], 'lucide-react, one set, no other')

  // 8. the import that makes all of the above resolvable.
  for (const m of src.matchAll(/['"]@hanzoai\/design/g))
    flag(rel, lineOf(src, m.index), 'wrong-package', '@hanzoai/design',
      'the package is @hanzo/design — @hanzoai/design is a 404 and resolves nothing')

  // ── the four layers ────────────────────────────────────────────────────
  // Rules 1-8 catch a surface writing a VALUE it should have named. These four
  // catch a surface OWNING something it should have imported, which is the
  // failure that costs a fleet its coherence rather than a component its
  // colour. The estate has exactly four layers and every surface is meant to
  // be pure composition over them:
  //
  //     values     -> @hanzo/design     tokens, the ramp, the ladder
  //     structure  -> @hanzo/gui        the primitives things are built from
  //     chrome     -> @hanzogui/shell   header, search, nav, launcher, footer
  //     components -> @hanzo/ui         everything assembled from the above
  //
  // A surface holds data and layout. Nothing else. Each rule below is one of
  // those four layers being re-implemented locally, and each has shipped:
  // hanzo.ai carried a 244-line token table that disagreed with the canon on
  // nearly every rung; hanzo.app loaded @hanzo/brand's sheet ahead of the one
  // that owns the same names; both drew their own search control.

  // 9. ONE table binds the ramp. `createGui`/`createTokens`/`createFont` is
  //    that binding, it lives in @hanzo/ui, and a second one is not a second
  //    opinion — every @hanzo/ui component asks the HOST's table for its
  //    sizes, so one library renders at two sizes depending on the site.
  for (const m of src.matchAll(/\b(createGui|createTokens|createFont|createThemes)\s*\(/g))
    flag(rel, lineOf(src, m.index), 'local-token-table', `${m[1]}()`,
      "import the fleet's table — `export { config as default } from '@hanzo/ui/gui-config'`")

  // 10. ONE publisher per token name. A surface that declares a name design
  //     already declares has entered a fight decided by LOAD ORDER, which is
  //     not a decision anyone made. (Declaring your own new name is fine —
  //     that is what a surface-specific token IS. This is only collision.)
  //
  //     A DECLARATION, never a mention. In a stylesheet that is `--x:` at the
  //     top of a declaration; in JS it is a QUOTED key, which is the only way a
  //     custom property can be set from there. Matching the bare name in JS
  //     read every comment explaining WHICH token to use as a redeclaration of
  //     it — this package's own Button and Card, whose comments are the
  //     reasoning for reaching one rung over another.
  for (const m of src.matchAll(isStyle ? /(?:^|[\s;{])--([A-Za-z0-9-]+)\s*:/g : /['"]--([A-Za-z0-9-]+)['"]\s*:/g))
    if (TOKENS.has(m[1]))
      flag(rel, lineOf(src, m.index), 'redeclared-token', `--${m[1]}`,
        'the name is @hanzo/design\'s — read it with var(), or pick a name of your own')

  // 11. a SECOND sheet of the same tokens. Two publishers is how a ramp drifts:
  //     the loser is silent, and which one loses depends on import order.
  for (const m of src.matchAll(
    /from\s+['"]([^'"]*(?:@hanzo\/brand\/styles|@hanzogui\/themes|tailwindcss\/theme|cdn\.tailwindcss\.com|fonts\.googleapis)[^'"]*)['"]|import\s+['"]([^'"]*(?:@hanzo\/brand\/styles|cdn\.tailwindcss\.com|fonts\.googleapis)[^'"]*)['"]/g))
    flag(rel, lineOf(src, m.index), 'second-publisher', m[1] ?? m[2],
      '@hanzo/design is the token layer; @hanzo/ui/theme.css or /glass.css carries the material')

  // 12. the chrome is the shell's. A header, a search control, a product menu,
  //     an org switcher, an app launcher and a footer are ONE set of controls
  //     across every Hanzo surface — that is what makes them recognisable as
  //     one product. A local copy is a control that drifts by a release.
  //
  //     A WRAPPER IS NOT A COPY, and the question is which one this is. A file
  //     that imports the shell and composes it — passing this site's pages into
  //     `HanzoHeader` — is doing exactly what it should, and hanzo.ai's
  //     `SiteHeader`/`SiteFooter` are that. So the rule asks whether the shell
  //     is in the file at all; if it is, the name is a local alias for shell
  //     chrome and not a second implementation of it.
  if (!/['"]@hanzogui\/shell/.test(src))
    for (const m of src.matchAll(
      /\b(?:function|const)\s+(Hanzo?(?:Header|Footer)|(?:Site|App|Global|Main|Top)(?:Header|Nav|Footer|Bar)|(?:Header|Nav|Command|Search)(?:Search|Palette|Trigger|Bar)|OrgSwitcher|OrgHeader|AppLauncher|MegaMenu)\b/g))
      flag(rel, lineOf(src, m.index), 'shell-owned-chrome', m[1],
        'import it from @hanzogui/shell — the chrome is one set of controls, fleet-wide')
}

// ── run ──────────────────────────────────────────────────────────────────
const targets = process.argv.slice(2).filter((a) => !a.startsWith('-'))
const roots = targets.length ? targets : [process.cwd()]
let scanned = 0
for (const r of roots) for (const f of walk(r)) { scanned++; lintFile(f, r === f ? dirname(r) : r) }

const RULES = [
  'unresolved-token', 'raw-color', 'raw-z-index', 'raw-font-size', 'all-caps',
  'inline-style', 'icon-set', 'wrong-package',
  'local-token-table', 'redeclared-token', 'second-publisher', 'shell-owned-chrome',
]

/**
 * THE RATCHET — `hanzo-design.allow.json`, beside the code being linted.
 *
 * A gate that can only pass on a perfect tree cannot be turned on, and a gate
 * nobody turns on prevents nothing. So a surface declares what it currently
 * owes, per rule, and the number MAY ONLY SHRINK. Every new violation fails the
 * build on the day it is written; the backlog burns down on its own schedule.
 *
 *   { "raw-color": 412, "redeclared-token": 6 }
 *
 * A count UNDER its allowance is REPORTED, loudly, and does not fail. That was
 * the other way round for one release and it froze hanzo.app's: the count a tree
 * produces is not identical everywhere — a working copy holds files a fresh
 * checkout does not — so an allowance that has to match EXACTLY turns a
 * difference of environment into a red release. Every gate this package exists
 * to add has to be worth more than the shipping it stops, and a stale number is
 * never worth that.
 *
 * So: over the allowance FAILS — that violation was written today and there is
 * nothing environmental about it. Under it prints the number to write down. The
 * ratchet is still a ratchet, because the allowance can only be lowered by hand
 * and this line tells you exactly what to lower it to.
 *
 * A rule with no entry is allowed ZERO, so a new rule is live everywhere the
 * day it ships and no surface has to opt in.
 *
 * It is read from the WORKING DIRECTORY, not from the paths being linted. Every
 * real invocation is a package script (`hanzo-design-lint components app`), so
 * the cwd is the surface's root — one place, whatever subtrees are named, and
 * nothing to derive from a list of arguments that may be files or directories.
 */
const RATCHET = 'hanzo-design.allow.json'
let allow = {}
try { allow = JSON.parse(readFileSync(join(process.cwd(), RATCHET), 'utf8')) } catch { /* none: everything is zero */ }

const count = Object.fromEntries(RULES.map((r) => [r, findings.filter((f) => f.rule === r).length]))
const over = RULES.filter((r) => count[r] > (allow[r] ?? 0))
const under = RULES.filter((r) => count[r] < (allow[r] ?? 0))

for (const rule of RULES) {
  const hits = findings.filter((f) => f.rule === rule)
  if (!hits.length) continue
  const owed = allow[rule] ?? 0
  const verdict = count[rule] > owed ? `NEW — allowed ${owed}` : `at the allowance (${owed})`
  console.log(`\n${rule}  (${hits.length}, ${verdict})  — ${hits[0].fix}`)
  for (const h of hits.slice(0, 20)) console.log(`  ${h.file}:${h.line}  ${h.detail}`)
  if (hits.length > 20) console.log(`  … ${hits.length - 20} more`)
}

// A key that is not a rule allows NOTHING, and the author who wrote it believes
// they filed an exemption — the same silent failure this whole file exists to
// end. Keys starting with `_` are prose and are skipped, so the file can explain
// itself without inventing a second format.
const unknown = Object.keys(allow).filter((k) => !k.startsWith('_') && !RULES.includes(k))
if (unknown.length) {
  console.log(`\n  ${RATCHET} names ${unknown.length} thing(s) that are not rules: ${unknown.join(', ')}`)
  console.log(`  the rules are: ${RULES.join(', ')}`)
  process.exit(1)
}

for (const r of under)
  console.log(`  ${r}: ${count[r]} found against ${allow[r] ?? 0} allowed — ${(allow[r] ?? 0) - count[r]} fixed. ` +
    `Lower it to ${count[r]} in ${RATCHET}.`)

if (!over.length) {
  const owed = RULES.reduce((a, r) => a + (allow[r] ?? 0), 0)
  console.log(`hanzo-design-lint: ${scanned} files, clean${owed ? ` (${owed} allowed by ${RATCHET})` : ''}`)
  process.exit(0)
}
for (const r of over)
  console.log(`\n  ${r}: ${count[r]} found, ${allow[r] ?? 0} allowed — a NEW violation. Fix it.`)
console.log(`\n${findings.length} violation(s) across ${scanned} files`)
process.exit(1)
