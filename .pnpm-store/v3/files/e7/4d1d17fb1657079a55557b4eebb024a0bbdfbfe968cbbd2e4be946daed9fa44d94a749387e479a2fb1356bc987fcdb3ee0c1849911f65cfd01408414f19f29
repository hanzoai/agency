# Rules — do / don't

The checklist. Grep it before you ship a Hanzo surface. Every "don't" maps to a
token or pattern that makes the "do" trivial.

## Color

| Do | Don't |
|----|-------|
| Use `--background`, `--foreground`, `--surface-card`, the `--white-*` ladder. | Write a raw hex, `rgb()`, or `hsl()` in a component. |
| Rank by opacity (`--white-80` > `--white-40`). | Invent an off-ladder step (12%, 37%). |
| Add a hue **only** for `--state-error`, `--state-online`, `--state-success`, chrome dots, or a third-party logo. | Color a button, gradient, or hero for decoration. |
| Design the dark surface first. | Treat light as primary. |

## Type

| Do | Don't |
|----|-------|
| Use `--font-sans` / `--font-mono` and the `--type-*` roles. | Add a third typeface or a raw `font-size` in px. |
| Sentence case for headings and buttons. | ALL CAPS bodies or Title Case Buttons (eyebrows excepted). |

## Layout & spacing

| Do | Don't |
|----|-------|
| Constrain to `--container-max` / `--container-prose`; pad with `--gutter*`. | Let content run full-bleed edge to edge. |
| Space on the `--space-*` ramp. | Hardcode `padding: 13px`. |
| Remove an element when it feels crowded. | Shrink the spacing to cram more in. |

## Components

| Do | Don't |
|----|-------|
| One primary (white) action per view; everything else outline or ghost. | Two competing primary buttons. |
| Plain `<a>` / `<Link>` with className, or the shipped `<Button>`. | `<Button asChild>` — it breaks the build under React 18 strict children. |
| Separate two surfaces by RAISING one — `--sheet-1` + `--shadow-sheet-1`. | Outlining both, then raising one anyway. |
| A level because the surface means something: workspace, tool, opened. | A drop shadow for looks, or a second lamp — every shadow drops straight down. |
| A fold (`--fold-face`) only where the item expands. | A fold as ornament. |

## Motion

| Do | Don't |
|----|-------|
| Fade + `--entry-rise`, `hanzo-fade-up`, CSS-only hovers. | Springs, bounce, parallax, autoplay carousels. |
| Honor `prefers-reduced-motion`. | Animate a transform on hover. |

## Accessibility (non-negotiable)

| Do | Don't |
|----|-------|
| Keep every body/background pair at WCAG AA, 16px. | Ship `--white-30` text as body copy. |
| Keep focus visible via `--ring`. | `outline: none` without a replacement ring. |
| Make dialogs/menus Tab-reachable and Escape-closable. | Trap keyboard users. |
| Give every `<img>` alt text; mark decorative SVG `aria-hidden`. | Leave images unlabeled. |

## The one test

Monochrome, true black, white type, color only as state. If the screenshot
would look at home on hanzo.ai, it passes. If it looks like a generic SaaS
template, it fails.
