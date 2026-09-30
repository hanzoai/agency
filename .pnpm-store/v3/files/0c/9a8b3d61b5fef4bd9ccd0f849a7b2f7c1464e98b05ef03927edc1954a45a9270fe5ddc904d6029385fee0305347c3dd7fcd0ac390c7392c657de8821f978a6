# Hanzo Design System — Canonical Tokens

`@hanzo/ui` is the single source of truth for the shared Hanzo product look across
the **Tailwind** apps (hanzo.chat, hanzo.app, hanzo console, commerce, hanzo-desktop).
Change a value here; apps converge on it. This file is that source of truth for the
three things that must read as **one product**: typography, the sidebar/panel system,
and the dark-black palette.

> One library: **`@hanzo/ui@8`** (`pkg/ui`, on **`@hanzo/gui`**) IS the component
> library — the cross-platform product/record layer every surface consumes.
> **`@hanzo/ui-shadcn`** (`pkgs/ui`) is the legacy shadcn/Tailwind/Radix kit, kept
> only for existing v5 consumers (pin `@hanzo/ui-shadcn@^5`; no new adoptions).
> This file stays the source of truth for the *token values* (fonts, dark palette,
> the sidebar glyph) both render.

---

## 1. Typography — Zen

| Role | Family | Notes |
|------|--------|-------|
| UI / body / display / heading (`sans`) | **Zen** | Variable, `wght` 100–900. One file covers every weight. |
| code / data / mono (`mono`) | **Zen Mono** | Variable, same axis. |
| display accents | **Zen Pixel** | Five cuts: Circle, Grid, Line, Square, Triangle. |
| Arabic / Hebrew (`--font-ar` / `--font-he`) | unchanged | i18n only — keep. |

**There is one family.** No Basel Grotesk, no Druk, no Inter, DM Sans, Figtree,
PT Sans or Roboto Mono — and no licensed third-party face at all, which is the
point: Zen is ours, so nothing here is a seat count or a domain licence.

**An app writes nothing.** `@hanzo/design/styles.css` declares the `@font-face`
rules and serves the binaries out of this package, so importing the token layer
is the whole integration. Do NOT hand-write an `@font-face`, do NOT reach for
`next/font/google`, and do NOT add a per-app copy of the files.

```css
@import "@hanzo/design/styles.css";   /* faces + tokens, one line */
```

Then name the role, never the face: `var(--font-sans)`, `var(--font-mono)`.

### Brand presets

`@hanzo/font/presets.css` carries five settings, each a point in Zen's own
parameter space that a brand has settled on. Two were FITTED by pixel residual
against the faces they replace, so the swap holds on metrics rather than on
taste.

| preset | wght | scaleX | track | use |
|---|---|---|---|---|
| `.zen-air` | 220 | — | −.030em | thin display |
| `.zen-book` | 497 | — | — | text |
| `.zen-medium` | 606 | — | — | UI emphasis |
| `.zen-wide` | 845 | 1.56 | −.040em | monumental caps |
| `.zen-round` | 900 | — | −.018em | heavy and friendly |

`.zen-wide` transforms, so its LAYOUT box stays the untransformed width — give
it room or clip its container.

**Zen's own alternates cover the neo-grotesque register**, so a brand that wants
that voice changes a feature setting rather than a family: `ss01` is the
single-storey `a`, `ss04` the straight-leg `R`, `ss09` a slashed zero and serif
one. Eleven sets ship.

---

## 2. Sidebar toggle icon — lucide `PanelLeft`

One glyph everywhere: lucide **`PanelLeft`** (the shadcn `SidebarTrigger` default).
Where a directional open/close affordance is wanted, use the pair
**`PanelLeftClose`** (expanded) / **`PanelLeft`** (collapsed). Never a hamburger,
a magnifier, a directional arrow, or a bespoke panel SVG for the sidebar toggle.

- Icon: stroke-2, ~16–20px, `currentColor`.
- Button: ghost/outline, square (`size-7`/`h-6 w-6`), subtle hover.

---

## 3. Sidebar + panels

| Spec | Value |
|------|-------|
| Sidebar width (expanded) | **16rem / 256px** (`SIDEBAR_WIDTH`) |
| Sidebar width (collapsed / icon rail) | **3rem / 48px** (apps vary 48–70px) |
| Sidebar / panel surface | resting **#0a0a0a** over the true-black page |
| Border / separation | `border-border` — subtle white-alpha ~10% in dark (`border-r` / `border-l`) |
| Item hover | subtle `white/5` |
| Item active | monochrome `white/10` — **no colored accent** (the house style is monochrome) |
| Right panel rail | `border-l border-border`, same surface, collapsible |

Prefer the `@hanzo/ui` `Sidebar` primitive (`pkgs/ui/primitives/sidebar.tsx`,
`SidebarTrigger` → `PanelLeft`) where the app can consume it; otherwise match these
classes/tokens.

---

## 4. Dark-black palette (true-black OLED)

The house dark theme is a **true-black** canvas (matches hanzo.ai marketing +
hanzo.chat OLED), with a shallow surface-depth ladder for cards/panels and quiet
hairline borders — never harsh pure-white on pure-black.

| Token | Value | Use |
|-------|-------|-----|
| Page background | **#000000** (`oklch(0 0 0)`) | body / canvas |
| Surface / sidebar / panel (resting) | **#0a0a0a** | sidebars, panels, cards |
| Press | **#050505** | pressed surface |
| Elevated / hover | **#171717** | hover, raised card |
| Border / divider | **rgba(255,255,255,0.10)** (≈ `#171717` opaque on black) | hairlines |
| Foreground (primary text) | near-white **#ededf1** (`oklch(0.985)`) — not pure `#fff` | body text |
| Muted / secondary text | `white/70` (≈ `#a1a1aa`) | secondary |

Keep each app's theme-token engine (CSS vars / Tailwind tokens / Tamagui `$color*`);
converge the **values/usage** to the table above, don't rip the engine.

Reference: `pkgs/ui/style/hanzo-default-colors.css` (`.dark` / `.hanzo-ui-dark-theme`).
