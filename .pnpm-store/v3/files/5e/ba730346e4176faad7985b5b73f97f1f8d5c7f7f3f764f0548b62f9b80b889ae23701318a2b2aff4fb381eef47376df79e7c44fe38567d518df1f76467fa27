"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RATIO_MAX = exports.RATIO_MIN = exports.TYPE_MAX = exports.TYPE_MIN = exports.isColor = exports.css = exports.vars = void 0;
exports.cssVar = cssVar;
exports.tokenValue = tokenValue;
exports.injectDesignCss = injectDesignCss;
// @hanzo/design — the ONE programmatic control plane for Hanzo's look & feel.
//
// The look/feel is authored ONCE as CSS custom properties in tokens/*.css
// (monochrome, dark-default — "one hue through an opacity ladder"). This module
// exposes those exact tokens to code, generated from the CSS so the two can
// never drift. Change a token in the CSS → the stylesheet AND every code
// consumer (the @hanzogui/shell theme, Tamagui, any TS surface) update together.
//
//   import '@hanzo/design/styles.css'                 // the CSS layer (unchanged)
//   import { colors, spacing, radius, cssVar } from '@hanzo/design'  // the code layer
//
__exportStar(require("./tokens.gen.cjs"), exports);
__exportStar(require("./brand.cjs"), exports);
const tokens_gen_js_1 = require("./tokens.gen.cjs");
/**
 * A `var(--name, <authored literal>)` reference to a token — the ONE way code
 * should reach a token, so it resolves through the live CSS cascade (honoring
 * the viewer's light/dark theme and any brand fork) rather than baking a value.
 *
 *   background: cssVar('--background')      // → "var(--background, #000000)"
 *   color:      cssVar('foreground', '#fff')// → "var(--foreground, #fff)"
 *
 * The name is checked AGAINST THE STYLESHEET at compile time. That check used to
 * be opted out of with `| (string & {})`, which is how `cssVar('surface-1')`
 * shipped: the token did not exist, `var(--surface-1)` resolved to nothing, and
 * a menu painted transparent with no error anywhere. An undefined custom
 * property fails SILENTLY, so the type is the only place it can be caught.
 *
 * When no explicit fallback is given the token's own authored literal is used,
 * so the reference still paints on a host that has not loaded the CSS layer.
 */
function cssVar(name, fallback) {
    const n = (name.startsWith('--') ? name : `--${name}`);
    const lit = fallback ?? tokens_gen_js_1.cssVars[n];
    return lit ? `var(${n}, ${lit})` : `var(${n})`;
}
/** The raw authored value of a token (the literal from the CSS), or `undefined`. */
function tokenValue(name) {
    return tokens_gen_js_1.cssVars[name];
}
/**
 * Inject the design-system stylesheet from code (idempotent) for surfaces that
 * cannot use a bundler CSS import (e.g. a runtime-mounted island). Prefer the
 * static `import '@hanzo/design/styles.css'` where a bundler is available.
 * No-op outside the browser.
 *
 * `href` is REQUIRED: this used to default to esm.sh, which silently made a
 * third-party CDN the origin of the entire token layer for anyone who called it
 * bare. Pass a URL you serve.
 */
function injectDesignCss(href) {
    if (typeof document === 'undefined')
        return;
    if (document.querySelector('link[data-hanzo-design]'))
        return;
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    l.setAttribute('data-hanzo-design', '');
    document.head.appendChild(l);
}
// A person's own reading of the system — type size, density, accent — as CSS
// custom properties. Pure: it maps a preference to variables and returns them,
// so an app, an embedded preview and a server render all apply it the same way.
var preference_js_1 = require("./preference.cjs");
Object.defineProperty(exports, "vars", { enumerable: true, get: function () { return preference_js_1.vars; } });
Object.defineProperty(exports, "css", { enumerable: true, get: function () { return preference_js_1.css; } });
Object.defineProperty(exports, "isColor", { enumerable: true, get: function () { return preference_js_1.isColor; } });
Object.defineProperty(exports, "TYPE_MIN", { enumerable: true, get: function () { return preference_js_1.TYPE_MIN; } });
Object.defineProperty(exports, "TYPE_MAX", { enumerable: true, get: function () { return preference_js_1.TYPE_MAX; } });
Object.defineProperty(exports, "RATIO_MIN", { enumerable: true, get: function () { return preference_js_1.RATIO_MIN; } });
Object.defineProperty(exports, "RATIO_MAX", { enumerable: true, get: function () { return preference_js_1.RATIO_MAX; } });
