/** The palette a brand declares. Every field is optional: an undeclared key
 *  leaves the design system's own value standing rather than overwriting it. */
export interface BrandTheme {
    surface1?: string;
    surface2?: string;
    surface3?: string;
    neutral1?: string;
    neutral2?: string;
    neutral3?: string;
    accent1?: string;
    accent2?: string;
    accent3?: string;
    border?: string;
    success?: string;
    warning?: string;
    error?: string;
}
/**
 * The tokens a brand's theme sets, as `{ '--background': '#000', … }`.
 *
 * Only ground, ink, accent and the edges drawn on them. The radius scale, the
 * type ramp, spacing, motion and z are NOT here and must not be: they are the
 * system's grammar rather than a brand's voice, and a brand that redefines them
 * is a fork wearing a stylesheet.
 */
export declare function themeToTokens(theme: BrandTheme): Record<string, string>;
/** Apply a brand's theme to a live document — for an app that resolves its brand
 *  at runtime and so cannot import a build-time stylesheet. */
export declare function applyBrandTheme(theme: BrandTheme, el: HTMLElement): void;
//# sourceMappingURL=brand.d.ts.map