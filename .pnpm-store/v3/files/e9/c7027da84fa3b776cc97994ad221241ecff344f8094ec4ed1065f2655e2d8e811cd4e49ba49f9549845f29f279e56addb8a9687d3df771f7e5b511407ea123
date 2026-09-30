<div align="center">

# Hanzo Design System

**Monochrome. Dark by default. One hue rendered through an opacity ladder.**

The single source of truth for how every Hanzo surface looks — tokens, components, brand assets, and the guidelines that hold them together.

`@hanzo/design`

</div>

## If you are an agent

Read [`skills/design-system/SKILL.md`](skills/design-system/SKILL.md). It is the
**one** way an AI surface learns this design system — chat, hanzo.app and Claude
Code all load the same file, so there is a single author and nothing to drift.
It ends by running the gate below, which is what makes the rules enforceable
rather than advisory:

```sh
npx hanzo-design-lint <paths…>
```

`prompts/` holds the longer material the skill points at. It is reference, not a
second entry point.

## Use it

One import pulls in the whole token layer — fonts, colour, type, spacing, radius,
elevation, motion, **z**, base:

```css
@import "@hanzo/design/styles.css";
```

Import the **whole** file. Cherry-picking `tokens/*.css` is how surfaces ended up
without the z ladder or the elevation ramp. The fonts are self-hosted, so this
makes **no third-party request** — there is no longer a reason to skip a part of it.

### Programmatic tokens (control look & feel from code)

The same tokens are exposed to TypeScript — **generated from the CSS**, so the two
can never drift. Edit a token in `tokens/*.css`, run `npm run build`, and both the
stylesheet and the code API update together. This is the one place to drive Hanzo's
look & feel programmatically (the `@hanzogui/shell` theme, Tamagui, any TS surface):

```ts
import { colors, spacing, radius, zIndex, cssVar } from '@hanzo/design'

spacing['space-4']    // "1rem"
radius['radius-full'] // "9999px"
zIndex['z-header']    // 300

// Prefer cssVar() so a value resolves through the live cascade (honors light/dark):
element.style.background = cssVar('--background')          // "var(--background)"
element.style.color      = cssVar('--foreground', '#fff')  // with a fallback
```

Groups: `colors`, `typography`, `spacing`, `radius`, `elevation`, `motion`, `zIndex`,
`fonts`, `base` (semantic aliases), plus `cssVars` (every token by its literal
`--name`). All authored **once** in the token CSS — the single source of truth.

Everything below is expressed as CSS custom properties, so code copies over 1:1 — the semantic names match `hanzo.ai`'s variables exactly.

```jsx
import { Button } from "@hanzo/design/components/core/Button.jsx";
import { HanzoLogo } from "@hanzo/design/components/core/HanzoLogo.jsx";

<Button pill>Try Hanzo</Button>
```

## What's inside

| Path | What |
|------|------|
| `styles.css` | The one entry point — imports every token file below. |
| `tokens/` | The palette. `colors` (monochrome opacity ladder, dark-default), `typography`, `spacing`, `radius`, `elevation`, `motion`, `z`, `fonts`, `base`. |
| `components/` | `core` (Button, Card, Badge, Icon, HanzoLogo, Avatar, ChromeText…), `forms`, `overlays`, `navigation` — each as `.jsx` + `.d.ts` + a `.prompt.md` usage guide. |
| `prompts/` | System-level generation guidance — the "make it look Hanzo" system prompt, do/don't rules, page prompts. |
| `content/` | The words — brand voice and taglines. |
| `docs/` | How to use the system — integrate the tokens, theme, extend. |
| `guidelines/` | Specimen cards — color, type, spacing, brand, iconography — the visual reference. |
| `assets/fonts/` | Zen + Zen Mono, self-hosted (two variable `.woff2`, 141 KB, SIL OFL-1.1). No Google Fonts request. |
| `assets/` | The mark, wordmark, favicon, provider + partner logos, brand imagery. |
| `scripts/check-tokens.mjs` | The gate: every token file is served, every internal `var()` resolves, and the contrast floors hold. Runs on `npm run build`. |
| `ui_kits/` | Composed surfaces (e.g. `SiteChrome`) assembled from the components. |

## Two kinds of boundary

Not interchangeable, and the difference is a conformance requirement rather than
a matter of taste:

| Token | Kind | Contrast |
|---|---|---|
| `--border`, `--border-hairline`, `--border-card` | **decorative** — separates content | none required |
| `--border-strong` | **perceivable** — identifies a *control* (input edge, switch, checkbox) | ≥ 3:1, WCAG 1.4.11 |
| `--ring` | the focus indicator | ≥ 3:1, WCAG 2.4.11 |

Reach for `--border-strong` whenever the boundary **is** the affordance. Both
conformant tokens resolve to `--neutral-500`, the only rung on this ladder that
clears 3:1 on every surface in **both** themes — `scripts/check-tokens.mjs`
measures this on every build and fails if it ever stops being true.

Note that the `--white-*` opacity ladder does **not** invert in light theme, so
`--white-40` is white-on-white there. Anything needing a visible edge in both
themes must use `--border-strong`.

## Principles

- **Monochrome by construction** — one neutral ladder plus an opacity ladder is the entire palette. Color appears only as genuine semantics (live/error/warning).
- **Dark is the default theme** — surfaces mount dark-first; light is the override.
- **A token that is referenced must resolve** — an undefined custom property paints
  *nothing*, silently. `cssVar()` therefore accepts only real token names (a typo
  is a compile error) and emits the authored literal as a fallback, so a reference
  still paints on a host that has not loaded the CSS.
- **White-label by fork** — `@luxfi/design` and `@zooai/design` carry the same token
  *names* over their own values. A change here must be measured against all three
  before it ships; one that fixes Hanzo and breaks Zoo is a regression.
- **Self-contained components** — inline styles, no CSS-framework coupling, so a component drops into any host (Next, Vite, Tamagui, none) and renders identically.
- **Every component ships its own `.prompt.md`** — a one-screen usage guide for humans and AI alike.

## Source of truth

Tokens track `hanzo.ai` (`app/globals.css`, `tailwind.config.ts`, `DESIGN.md`) and the press kit. When the brand moves, it moves here first.

## License

MIT OR Apache-2.0, per [HIP-0137](https://github.com/hanzoai/hips/blob/main/HIPs/hip-0137-one-license.md). Brand marks (the Hanzo logo, partner and provider logos) are the property of their respective owners and are provided for identification.

## Using it in a Tailwind app

One import, after Tailwind's:

```css
@import "tailwindcss";
@import "@hanzo/design/tailwind.css";
```

That carries the tokens **and** maps them onto Tailwind's namespace, so
`bg-background`, `text-muted-foreground` and `border-border` resolve to the
system's values. There is no `@theme` block to hand-write and keep in sync.

Not using Tailwind? `@import "@hanzo/design/styles.css"` is the same tokens
without the bridge.

### Two rules, and the build enforces both

- **Import it after `tailwindcss`.** `@theme` extends the framework, so it has
  to follow it.
- **Don't re-declare tokens in your app.** An app that states its own palette
  drifts from every other surface, and any token it forgets resolves to nothing
  — `border-border` becomes `currentColor`, which paints a white hairline on
  black and reads as a design choice rather than a missing line.
