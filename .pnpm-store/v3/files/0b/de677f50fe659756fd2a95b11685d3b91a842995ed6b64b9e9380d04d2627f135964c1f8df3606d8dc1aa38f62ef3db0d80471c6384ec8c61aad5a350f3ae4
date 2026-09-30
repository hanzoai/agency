# Integrate

## 1. Install

```bash
pnpm add @hanzo/design
```

## 2. Import the tokens — once

```css
/* app/globals.css, or the root of your styles */
@import "@hanzo/design/styles.css";
```

That one file pulls in, in order: fonts (Geist + Geist Mono), color, typography,
spacing, radius, elevation, motion, z, and base element defaults. After it,
every token below is a live CSS custom property.

## 3. Build with tokens, not literals

```css
.panel{
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  color: var(--text-secondary);
  font: var(--type-body);
}
.panel h3{ font: var(--type-h3); color: var(--text-primary); }
```

There is a token for color, type, space, radius, elevation, motion, and stacking
order. If you find yourself typing a hex, a px font-size, or a bare z-index,
there is a variable for it — use that instead.

## 4. Theme

Dark is the default; the tokens are already the dark values at `:root`. To render
a subtree light, add `.light` to an ancestor:

```html
<body>            <!-- dark: the Hanzo default -->
  <article class="light"> … </article>   <!-- inverted, for brand/docs pages -->
</body>
```

Nothing else changes — the same token names resolve to inverted values.

## 5. Use a component

Each part ships as `.jsx` + `.d.ts` + a `.prompt.md` usage guide. They are
self-contained (inline styles), so they need no framework:

```jsx
import { Button } from "@hanzo/design/components/core/Button.jsx";
import { HanzoLogo } from "@hanzo/design/components/core/HanzoLogo.jsx";

<HanzoLogo />
<Button pill>Get started</Button>
```

Read the neighboring `Button.prompt.md` for variants and rules before you place
one.

## 6. Extend without breaking the brand

- Add a new component? Consume the tokens; do not introduce a value that is not
  already one. Ship it with a `.prompt.md`.
- Need a color the ladder does not have? You almost certainly don't. The only
  new hues allowed are the reserved semantics in `prompts/rules.md`.
- Building on Tamagui / `@hanzo/gui`? Map these CSS custom properties to your
  Tamagui tokens 1:1 — same names, same values — so the two layers never drift.

## 7. Generate with AI

Give a model `prompts/system.md` as its system prompt, hand it the relevant
`prompts/pages.md` block, and check the result against `prompts/rules.md`. The
constraints are written so an agent can satisfy every one of them with a token.

## Reference

- Values: [`../tokens/`](../tokens/)
- Rendered specimens: [`../guidelines/`](../guidelines/)
- Voice: [`../content/voice.md`](../content/voice.md)
