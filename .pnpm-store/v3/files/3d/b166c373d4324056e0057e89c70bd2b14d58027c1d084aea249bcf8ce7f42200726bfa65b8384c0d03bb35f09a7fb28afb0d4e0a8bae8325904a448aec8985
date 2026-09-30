/**
 * A person's own reading of the system: type size, density, accent.
 *
 * Three knobs, and each is ONE multiplier on a whole axis — never a restated
 * ramp. The ramps live in `tokens/*.css`, authored once, and each rung carries
 * its own `calc(<base> * var(--type-scale, 1))`. So a preference sets three
 * numbers and every rung follows, including rungs added later and rungs this
 * file has never heard of.
 *
 * That is not a style choice; it is the fix for a real bug. The first version of
 * this module kept its own copy of the type ramp so it could recompute each
 * rung, and the copy was WRONG — it had `lg: 1rem` and `xl: 1.125rem` (16px and
 * 18px) while `tokens/typography.css` says `0.9375rem` and `1.0625rem` (15px and
 * 17px). Setting a preference of 1 — "leave it alone" — would have silently
 * resized two rungs of the published design. A second copy of a value is a
 * second source of truth, and it drifted before anyone used it.
 *
 * Because the knobs are plain multipliers, any OTHER ramp can opt in the same
 * way. @hanzo/gui compiles its own `--f-size-*` scale for the 1600-odd
 * `fontSize="$n"` call sites in the apps; an app that redeclares those as
 * `calc(<its px> * var(--type-scale, 1))` gets the same control with no change
 * at scale 1.
 *
 * It is a pure function on purpose: it maps a preference to custom properties
 * and returns them, touching no document. That is what lets an app, an embedded
 * preview and a server render apply it identically.
 */

export type Density = "compact" | "default" | "comfortable";

/**
 * The face, named by what it IS rather than by a family — the families are the
 * token file's to choose, and it already names four.
 */
export type Face = "default" | "system" | "serif" | "mono";

/** How wide the page runs before it stops. */
export type Measure = "narrow" | "default" | "wide";

export interface Preference {
  /** Multiplier on the type ramp. 1 is the published scale. */
  type?: number;
  /**
   * How far APART the rungs sit — the ramp's contrast, where `type` is its size.
   * 1 is the published scale; below 1 flattens it toward a uniform register,
   * above 1 opens the display end and tightens the small one.
   */
  ratio?: number;
  /**
   * A modular scale for the display rungs — 1.618 for golden, 1.25 for a major
   * third. Absent means the authored ramp, which is the tuned default.
   */
  modular?: number;
  density?: Density;
  /** Which face the page is set in. */
  font?: Face;
  /** How wide the page runs — the measure, not the window. */
  width?: Measure;
  /** A CSS colour for --primary / --accent. Rejected unless it is one. */
  accent?: string;
}

/**
 * The type multiplier is CLAMPED, and the bounds are not arbitrary.
 *
 * Below 0.85 the smallest rung (--text-xs, 11px) drops under 9.4px, which stops
 * being small and starts being unreadable — and a preference that lets someone
 * render their own tools illegible is a trap, not a choice. Above 1.4 the
 * chrome stops fitting its own containers: this app's builder header already
 * overlaps its actions below 1440px at scale 1.
 */
export const TYPE_MIN = 0.85;
export const TYPE_MAX = 1.4;

/**
 * The ratio's bounds are looser than type's, because the ramp defends its own
 * floor.
 *
 * `tokens/typography.css` floors --text-xs/sm with `max()`, so the failure mode
 * that forces type's tight clamp — a knob quietly rendering 9px labels — cannot
 * happen on this axis however it combines with type. What is left to bound is
 * only whether the ramp still READS as a ramp: at 0.75 the app register is
 * within a hair of uniform, and past 1.5 a page's h2 has left its own body text
 * behind entirely.
 */
export const RATIO_MIN = 0.75;
export const RATIO_MAX = 1.5;

/**
 * A MODULAR scale — the classical one, where each display rung is the one below
 * it times a fixed ratio. Golden is 1.618; the musical intervals designers name
 * are 1.2 (minor third), 1.25 (major third), 1.333 (perfect fourth) and 1.5
 * (perfect fifth).
 *
 * This is a different RULE from `ratio`, not another dial on it. `ratio` tunes
 * the contrast of the ramp `tokens/typography.css` authored; this REPLACES that
 * ramp's display half with a geometric one. Naming a golden-ratio preset as a
 * contrast value would have been the dishonest version of this feature.
 *
 * Bounded below 1.05 because a ratio at 1 is not a scale — every display rung
 * collapses onto the one before it — and above 2 because doubling every step
 * puts the fourth rung past a phone's whole width.
 *
 * Golden is exactly 1.618 here and is NOT clamped down to something tamer,
 * because a scale that quietly gives you not-golden when you asked for golden is
 * worse than one that refuses. What makes that safe is the ceiling below: this
 * ramp has EIGHT display rungs and a classical modular scale is used with about
 * four, so at 1.618 the eighth would be 799px. Measured, --text-8xl and
 * --text-9xl are referenced in 15 files across the fleet, so that is a broken
 * page and not a hypothetical.
 */
export const MODULAR_MIN = 1.05;
export const MODULAR_MAX = 2;

/**
 * The rungs a modular scale REGENERATES, in order, and the one it starts from.
 *
 * It deliberately stops at the display register. A geometric scale through the
 * interface rungs is unusable at any real ratio: at 1.25 from a 14px base the
 * next rungs are 17.5 and 21.9, so the 13px nav label and the 15px lead — the
 * near-linear steps a dense interface is built on — do not exist. `xl` is the
 * anchor because it is the last interface rung, so the display half continues
 * from where the interface ends rather than restarting under it.
 */
const DISPLAY_RUNGS = ["2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];
const MODULAR_ANCHOR_REM = 1.0625; // --text-xl, 17px

/**
 * Density moves SPACING only, and its range is much tighter than type's.
 *
 * Spacing compounds: a page nests padding inside gap inside margin, so a 0.75
 * multiplier is already three-quarters of every one of those in sequence. Below
 * that, touch targets fall under the 44px floor `base.css` sets for coarse
 * pointers, and the control that promised comfort takes it away.
 */
const DENSITY: Record<Density, number> = {
  compact: 0.85,
  default: 1,
  comfortable: 1.15,
};

/**
 * A face is chosen from the ones `tokens/fonts.css` already declares, and it is
 * set by REFERENCE — `var(--font-serif)`, never a family list restated here.
 *
 * That is what keeps a preference from pinning a face: when the token file
 * changes what "mono" means, or a brand overrides it, a person who chose mono
 * follows. Writing `Georgia, serif` here would freeze this file's idea of serif
 * into every document that ever stored the preference.
 *
 * `default` is deliberately absent from the map rather than mapped to
 * `var(--font-sans)`: the axis writes `--font-sans`, so resolving it to itself
 * is a cycle, and "no opinion" is already how every other axis says default.
 */
const FACE: Partial<Record<Face, string>> = {
  system: "ui-sans-serif, system-ui, -apple-system, sans-serif",
  serif: "var(--font-serif)",
  mono: "var(--font-mono)",
};

/**
 * The measure moves the CONTAINERS, not the columns.
 *
 * `--grid-columns` is 12 because layouts are authored against 12; changing it
 * re-flows every span a page declares and is a different page, not a wider one.
 * What a reader actually means by "wider" is how far the text runs before it
 * wraps, which is `--container-*` — so that is the knob, and the grid inside it
 * is untouched.
 */
const MEASURE: Partial<Record<Measure, { max: string; prose: string; wide: string }>> = {
  narrow: { max: "64rem", prose: "40rem", wide: "58rem" },
  wide: { max: "96rem", prose: "56rem", wide: "86rem" },
};

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/** Trim to 4dp so a multiplier cannot emit a 17-digit float into a stylesheet. */
const round = (n: number) => String(Math.round(n * 10000) / 10000);

/**
 * Is this a colour, or is it something being smuggled into a style attribute?
 *
 * A preference is user input and its destination is CSS. `#fff`, `rgb(...)`,
 * `oklch(...)` and the bare keywords are colours; anything carrying a `;`, a
 * `}`, or a `url(` is trying to be a second declaration, and the answer is to
 * drop the axis rather than to sanitise a string into something plausible.
 */
export function isColor(v: string): boolean {
  const s = v.trim();
  if (!s || s.length > 64) return false;
  if (/[;{}()]/.test(s) && !/^(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color)\([^;{}]*\)$/i.test(s)) return false;
  return (
    /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(s) ||
    /^(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color)\([^;{}]*\)$/i.test(s) ||
    /^[a-z]{3,20}$/i.test(s)
  );
}

/**
 * The custom properties a preference produces.
 *
 * Only the axes actually set appear, so an app can spread the result over
 * whatever it already has without a default silently overriding a brand.
 */
export function vars(p: Preference): Record<string, string> {
  const out: Record<string, string> = {};

  if (typeof p.type === "number" && Number.isFinite(p.type)) {
    out["--type-scale"] = round(clamp(p.type, TYPE_MIN, TYPE_MAX));
  }

  if (typeof p.ratio === "number" && Number.isFinite(p.ratio)) {
    out["--type-ratio"] = round(clamp(p.ratio, RATIO_MIN, RATIO_MAX));
  }

  if (typeof p.modular === "number" && Number.isFinite(p.modular)) {
    // Each display rung is the anchor times the ratio to its step, emitted as an
    // explicit property. An INLINE custom property on :root outranks the
    // stylesheet, so these simply replace the authored rungs — nothing has to be
    // unset first, and the interface rungs the sheet declares are untouched
    // because none is named here. It multiplies out with `--type-scale` for free,
    // since every rung is still read through that ramp's own calc.
    const r = clamp(p.modular, MODULAR_MIN, MODULAR_MAX);
    DISPLAY_RUNGS.forEach((rung, i) => {
      const rem = MODULAR_ANCHOR_REM * Math.pow(r, i + 1);
      // THE SAME clamp the authored ramp carries, read from the same two names.
      // A regenerated rung and an authored one must be bounded identically or
      // the bound is a property of which code path produced the value, which is
      // exactly the kind of "it depends" a design system exists to delete. The
      // bounds are declared once, in tokens/typography.css, and referenced here
      // — never restated, so moving one moves both.
      out[`--text-${rung}`] =
        `clamp(var(--text-floor), calc(${round(rem)}rem * var(--type-scale, 1)), var(--text-ceiling))`;
    });
  }

  if (p.density && p.density in DENSITY) {
    out["--density"] = round(DENSITY[p.density]);
  }

  // Indexed, not `in`-checked: the maps omit `default`, so a lookup answers
  // undefined for it and for anything stored that is not a face at all. One
  // read, no cast, and an unknown value is refused by the same line that
  // resolves a known one.
  const face = p.font ? FACE[p.font] : undefined;
  if (face) out["--font-sans"] = face;

  const measure = p.width ? MEASURE[p.width] : undefined;
  if (measure) {
    out["--container-max"] = measure.max;
    out["--container-prose"] = measure.prose;
    out["--container-wide"] = measure.wide;
  }

  if (p.accent && isColor(p.accent)) {
    // Both names, because the ramp uses --primary for action surfaces and
    // --accent for selection. One hue, stated once, landing on both.
    out["--primary"] = p.accent.trim();
    out["--accent"] = p.accent.trim();
  }

  return out;
}

/** `vars()` as a declaration block, for a <style> tag or an SSR inline. */
export function css(p: Preference, selector = "html:root"): string {
  const v = vars(p);
  const keys = Object.keys(v);
  if (!keys.length) return "";
  return `${selector}{${keys.map((k) => `${k}:${v[k]}`).join(";")}}`;
}
