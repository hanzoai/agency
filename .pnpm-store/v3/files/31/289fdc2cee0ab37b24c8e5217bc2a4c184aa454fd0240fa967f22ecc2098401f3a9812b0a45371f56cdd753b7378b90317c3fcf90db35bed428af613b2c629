// @hanzo/design — the ONE programmatic control plane for Hanzo's look & feel.
//
// The look/feel is authored ONCE as CSS custom properties in tokens/*.css
// (monochrome, dark-default — "one hue through an opacity ladder"). This module
// exposes those exact tokens to code, generated from the CSS so the two can
// never drift. Change a token in the CSS → the stylesheet AND every code
// consumer (the @hanzogui/shell theme, Tamagui, any TS surface) update together.
//
//   import '@hanzo/design/styles.css'                 // the CSS layer (unchanged)
//   import { colors, spacing, radius, cssVar } from '@hanzo/design'  // the code layer
//
export * from './tokens.gen.js'
export * from './brand.js'
import { cssVars, type CssVarName } from './tokens.gen.js'

/** A token name with the leading `--` omitted: `'background'` for `'--background'`. */
export type TokenName = CssVarName extends `--${infer N}` ? N : never

/**
 * A `var(--name, <authored literal>)` reference to a token — the ONE way code
 * should reach a token, so it resolves through the live CSS cascade (honoring
 * the viewer's light/dark theme and any brand fork) rather than baking a value.
 *
 *   background: cssVar('--background')      // → "var(--background, #000000)"
 *   color:      cssVar('foreground', '#fff')// → "var(--foreground, #fff)"
 *
 * The name is checked AGAINST THE STYLESHEET at compile time. That check used to
 * be opted out of with `| (string & {})`, which is how `cssVar('surface-1')`
 * shipped: the token did not exist, `var(--surface-1)` resolved to nothing, and
 * a menu painted transparent with no error anywhere. An undefined custom
 * property fails SILENTLY, so the type is the only place it can be caught.
 *
 * When no explicit fallback is given the token's own authored literal is used,
 * so the reference still paints on a host that has not loaded the CSS layer.
 */
export function cssVar(name: CssVarName | TokenName, fallback?: string): string {
  const n = (name.startsWith('--') ? name : `--${name}`) as CssVarName
  const lit = fallback ?? (cssVars as Record<string, string>)[n]
  return lit ? `var(${n}, ${lit})` : `var(${n})`
}

/** The raw authored value of a token (the literal from the CSS), or `undefined`. */
export function tokenValue(name: CssVarName): string | undefined {
  return (cssVars as Record<string, string>)[name]
}

/**
 * Inject the design-system stylesheet from code (idempotent) for surfaces that
 * cannot use a bundler CSS import (e.g. a runtime-mounted island). Prefer the
 * static `import '@hanzo/design/styles.css'` where a bundler is available.
 * No-op outside the browser.
 *
 * `href` is REQUIRED: this used to default to esm.sh, which silently made a
 * third-party CDN the origin of the entire token layer for anyone who called it
 * bare. Pass a URL you serve.
 */
export function injectDesignCss(href: string): void {
  if (typeof document === 'undefined') return
  if (document.querySelector('link[data-hanzo-design]')) return
  const l = document.createElement('link')
  l.rel = 'stylesheet'
  l.href = href
  l.setAttribute('data-hanzo-design', '')
  document.head.appendChild(l)
}

// A person's own reading of the system — type size, density, accent — as CSS
// custom properties. Pure: it maps a preference to variables and returns them,
// so an app, an embedded preview and a server render all apply it the same way.
export { vars, css, isColor, TYPE_MIN, TYPE_MAX, RATIO_MIN, RATIO_MAX } from './preference.js';
export type { Preference, Density, Face, Measure } from './preference.js';
