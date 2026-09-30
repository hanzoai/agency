# prompts — make an AI build it Hanzo

> **Entry point is `skills/design-system/SKILL.md`**, not this folder. The skill
> is what chat, hanzo.app and Claude Code load; it points here for the long form
> and finishes by running `hanzo-design-lint`. Everything below is the reference
> the skill cites.

Guidance an agent reads *before* generating a Hanzo surface. Two layers, no
overlap:

| Layer | Lives | Answers |
|-------|-------|---------|
| **System** (this folder) | `prompts/` | "How does anything Hanzo look and behave?" |
| **Component** (co-located) | `components/**/*.prompt.md` | "How do I use *this* Button / Dialog / Card?" |

Read the system layer first, then pull the per-component prompt for each part you
place.

| File | Use |
|------|-----|
| [`system.md`](system.md) | Paste as the system prompt. The whole brand, compressed to one screen. |
| [`rules.md`](rules.md) | The do / don't checklist. Grep it before you ship. |
| [`pages.md`](pages.md) | Ready prompts for full sections — hero, feature grid, pricing, CTA. |

Everything here assumes one import gives you the tokens:

```css
@import "@hanzo/design/styles.css";
```

So every rule below can be obeyed with a CSS variable, never a hardcoded hex.

## The two prompts (one and one way)
- **`system.md`** — the design LANGUAGE prompt: paste as a system prompt to make any
  model generate Hanzo-looking output (monochrome, true-black, token-only).
- **`studio-designer.md`** — the AGENTIC prompt Hanzo Studio's Design System designer
  hands the Hanzo agent stack to GENERATE/EDIT this repo's file tree with its file
  tools, grounded in `guidelines/DESIGN.md`. Uses `system.md`'s language rules.
