# Page prompts

Drop-in prompts for whole sections. Each already carries the brand constraints,
so you can hand one to a model with only the specifics filled in. They assume the
system prompt (`system.md`) is already loaded and `styles.css` is imported.

## Hero

> Build a hero section for **{product}**. Dark, `--background`. Centered column,
> `--container-prose`, vertical rhythm `--hero-y`/`--hero-y-lg`. One `--type-hero`
> `h1` (≤ 7 words, scaling to `--text-7xl` on lg), one `--type-lead` subline
> (≤ 140 chars), one primary `<Button pill>` plus one `outline` secondary.
> Behind the column, a single `--glow-hero` radial — nothing else. Entry:
> `hanzo-fade-up`, `--duration-slow`, `--stagger` between the three elements.

## Feature grid

> Build a 3-column feature grid (1 column on mobile). Each cell: a `lucide-react`
> icon at h-6 in `--foreground` at 80%, a `--type-h3` title, a `--type-body`
> `--text-secondary` description. Cells use `--surface-card`, `--radius-lg`,
> `--border-card`. No shadows. Constrain to `--container-max`, gutters
> `--gutter*`. Stagger the cells in on scroll with `hanzo-slide-up-fade`.

## Pricing

> Build a 3-tier pricing row. Monochrome cards, `--surface-card`; emphasize the
> recommended tier with `--surface-card-emphasis` and a `--brand` hairline — not
> a colored fill. Price in `--type-h2`, cadence in `--text-helper`. "Free" and
> "Save N%" are the only colored text, `--state-success`. One primary CTA per
> card, the rest `outline`.

## CTA / resources block (every product page ends with this)

> Build the closing section: a top hairline (`--border-hairline`), centered
> `--container-prose`, a `--type-h2` "Get started", and a row of two or three
> links — "Read the docs", "View on GitHub", "Talk to us" — as `--text-primary`
> with underline-on-hover. No new color, no new component.

## Navigation + footer

> Build a fixed header: `--surface-header` with backdrop blur, `--header-height`
> tall, `--z-header`. Left: the H mark from `assets/logo.svg`. Right: text nav
> links at `--text-secondary`, hover `--text-primary`, and one primary
> `<Button pill size="sm">`. Footer: `--container-max`, columns of quiet
> `--text-tertiary` links over `--background`, a hairline on top.

## Rules that still apply

- One primary action per view.
- No hue outside the reserved semantics.
- Everything Tab-reachable, focus visible, reduced-motion honored.

After generating, run `prompts/rules.md` against the output.
