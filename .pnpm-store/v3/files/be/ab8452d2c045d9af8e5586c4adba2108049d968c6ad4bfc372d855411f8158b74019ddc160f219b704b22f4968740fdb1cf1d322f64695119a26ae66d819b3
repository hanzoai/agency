// A brand's declared theme, projected onto the semantic tokens.
//
// A brand package (@luxfi/brand, @zooai/brand) carries its own light and dark
// theme in brand.json. This is the ONE place that says which semantic token each
// of those answers for — the design system owns the token contract, a brand owns
// the values, and neither holds a copy of the other.
//
// It exists because that mapping was about to be written twice: once in each
// brand package to generate a stylesheet, and once in every app that resolves its
// brand at runtime and cannot import a build-time stylesheet. Two copies of a
// mapping is how a brand comes to look like itself in one surface and not
// another.

/** The palette a brand declares. Every field is optional: an undeclared key
 *  leaves the design system's own value standing rather than overwriting it. */
export interface BrandTheme {
  surface1?: string
  surface2?: string
  surface3?: string
  neutral1?: string
  neutral2?: string
  neutral3?: string
  accent1?: string
  accent2?: string
  accent3?: string
  border?: string
  success?: string
  warning?: string
  error?: string
}

/** theme key → the semantic tokens it answers for. */
const OWNS: Record<keyof BrandTheme, readonly string[]> = {
  surface1: ['--background'],
  surface2: ['--card', '--popover', '--muted'],
  surface3: ['--accent'],
  neutral1: ['--foreground', '--card-foreground', '--popover-foreground', '--accent-foreground'],
  neutral2: ['--muted-foreground'],
  neutral3: [],
  accent1: ['--primary'],
  accent2: [],
  accent3: [],
  border: ['--border'],
  success: ['--state-success'],
  warning: ['--state-warning'],
  error: ['--state-error'],
}

/**
 * The tokens a brand's theme sets, as `{ '--background': '#000', … }`.
 *
 * Only ground, ink, accent and the edges drawn on them. The radius scale, the
 * type ramp, spacing, motion and z are NOT here and must not be: they are the
 * system's grammar rather than a brand's voice, and a brand that redefines them
 * is a fork wearing a stylesheet.
 */
export function themeToTokens(theme: BrandTheme): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [key, tokens] of Object.entries(OWNS) as [keyof BrandTheme, readonly string[]][]) {
    const value = theme[key]
    if (!value) continue
    for (const token of tokens) out[token] = value
  }
  // --primary carries ink on top of it, so the accent names its own contrast
  // partner rather than leaving whatever the previous theme set.
  if (theme.accent1 && theme.surface1) out['--primary-foreground'] = theme.surface1
  return out
}

/** Apply a brand's theme to a live document — for an app that resolves its brand
 *  at runtime and so cannot import a build-time stylesheet. */
export function applyBrandTheme(theme: BrandTheme, el: HTMLElement): void {
  for (const [name, value] of Object.entries(themeToTokens(theme))) {
    el.style.setProperty(name, value)
  }
}
