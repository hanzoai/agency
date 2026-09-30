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
export declare const TYPE_MIN = 0.85;
export declare const TYPE_MAX = 1.4;
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
export declare const RATIO_MIN = 0.75;
export declare const RATIO_MAX = 1.5;
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
export declare const MODULAR_MIN = 1.05;
export declare const MODULAR_MAX = 2;
/**
 * Is this a colour, or is it something being smuggled into a style attribute?
 *
 * A preference is user input and its destination is CSS. `#fff`, `rgb(...)`,
 * `oklch(...)` and the bare keywords are colours; anything carrying a `;`, a
 * `}`, or a `url(` is trying to be a second declaration, and the answer is to
 * drop the axis rather than to sanitise a string into something plausible.
 */
export declare function isColor(v: string): boolean;
/**
 * The custom properties a preference produces.
 *
 * Only the axes actually set appear, so an app can spread the result over
 * whatever it already has without a default silently overriding a brand.
 */
export declare function vars(p: Preference): Record<string, string>;
/** `vars()` as a declaration block, for a <style> tag or an SSR inline. */
export declare function css(p: Preference, selector?: string): string;
//# sourceMappingURL=preference.d.ts.map