---
name: design-system
description: "Use whenever you generate, edit, or review a Hanzo user interface — a page, component, screen, email, or any code change touching colour, type, spacing, elevation, motion, or stacking order. Use it when PLANNING UI work too, so the plan names tokens rather than values. Teaches the Hanzo token layer (@hanzo/design, derived from @hanzo/brand plus @hanzo/logo) and runs the linter that proves generated code actually reaches it. Triggers — build a page, add a component, style, theme, dark mode, colour, hex, palette, font size, spacing, padding, z-index, modal, dropdown, toast, button, card, dialog, icon, make it look Hanzo, brand, design review."
license: MIT OR Apache-2.0
---

# The Hanzo design system

One atom, and everything else follows from it:

**Monochrome. True black. White type. Colour only as state, never as decoration.**

## The derivation chain — never reach past it

```
@hanzo/brand   (brand.json — the identity: marks, palette source, motion intent)
@hanzo/logo    (the mark itself, as SVG + React)
        │  derive
        ▼
@hanzo/design  (tokens/*.css — 221 CSS custom properties, the ONLY vocabulary)
        │  consume
        ▼
your component
```

A component reads `@hanzo/design`. It does **not** reach past it to `@hanzo/brand`,
to `@hanzo/logo`'s raw SVG, or to a literal value. If a component needs something
the token layer does not express, the fix is a **new token**, not a local
constant — otherwise the next surface invents a second one and the two drift.
(That is how one product ended up with 25 different z-index values.)

The package is **`@hanzo/design`**. `@hanzoai/design` does not exist on npm; an
import of it resolves to nothing, and an unresolved token layer paints nothing.

## Start here

```css
@import "@hanzo/design/styles.css";   /* every token, as a CSS custom property */
```

Then reach for a **name**, never a value:

| You want | Use | Never |
|---|---|---|
| a page / text | `--background`, `--foreground`, `--text-secondary` | `#000`, `#fff`, `rgb(…)` |
| a card, a panel | `--surface-card`, `--border` | a hand-mixed grey |
| depth — a tool over the workspace | `--sheet-1` + `--shadow-sheet-1` | a box round both, or your own `box-shadow` |
| "this expands" | `--fold-face` | a fold as ornament |
| rank / emphasis | the ladder `--white-05 … --white-80` | an off-ladder 12% or 37% |
| a size | `--type-body`, `--type-h2`, `--text-sm` | `font-size: 13px` |
| space | `--space-*`, `--gutter*`, `--container-max` | `padding: 13px` |
| a layer | `--z-dropdown`, `--z-modal`, `--z-toast` | `z-index: 9999` |
| a scrim | `--surface-scrim` | `rgba(0,0,0,.8)` |
| an icon | `lucide-react` | react-icons, heroicons, MUI |

The **only** coloured pixels permitted: `--state-error`, `--state-online`,
`--state-success`, the macOS chrome dot trio, and third-party brand logos. A blue
button or a purple gradient is not Hanzo — make it white on black.

Sentence case for headings and buttons. ALL CAPS is only an eyebrow, and an
eyebrow says so with `--type-eyebrow`.

## Read before you write

Load these from the installed package (`node_modules/@hanzo/design/`) or the repo:

| File | When |
|---|---|
| `prompts/system.md` | Always. The whole language, one screen. Paste as system prompt for a sub-agent. |
| `prompts/rules.md` | The do/don't table. Walk it before you return code. |
| `components/**/*.prompt.md` | Per component, when you place one. |
| `guidelines/DESIGN.md` | The reasoning, when a rule seems to be in your way. |
| `tokens/*.css` | The authoritative list. Grep it rather than guessing a name. |

## Finish by proving it — this step is not optional

Generated code that violates the token layer must be **caught, not shipped**.
Nothing here fails loudly on its own: an undefined `var()` paints nothing, a raw
hex silently ignores the theme, a class with no rule paints nothing. So run the
gate on every file you touched:

```sh
npx hanzo-design-lint <paths…>        # exit 0 = clean, exit 1 = violations
```

It checks eight things, each of which has shipped to production at least once:

1. `unresolved-token` — a `var(--x)` nothing declares
2. `raw-color` — a hex / `rgb()` / `hsl()` literal in a surface
3. `raw-z-index` — a magic number instead of the ladder
4. `raw-font-size` — `px`/`pt` instead of the scale
5. `all-caps` — an uppercase label that is not an eyebrow
6. `inline-style` — a literal colour/size in `style={{…}}` (a `var()` is fine)
7. `icon-set` — an icon library that is not lucide
8. `wrong-package` — `@hanzoai/design`, which resolves to nothing

Fix every finding, then re-run until clean. **Do not** silence a rule, and do not
report the work as done on a red gate. If a rule is genuinely wrong for a case,
say so explicitly in your summary rather than working around it.

## The one test

Monochrome, true black, white type, colour only as state. If the screenshot would
look at home on hanzo.ai, it passes. If it looks like a generic SaaS template, it
fails — and the fix is your work, never the atom.
