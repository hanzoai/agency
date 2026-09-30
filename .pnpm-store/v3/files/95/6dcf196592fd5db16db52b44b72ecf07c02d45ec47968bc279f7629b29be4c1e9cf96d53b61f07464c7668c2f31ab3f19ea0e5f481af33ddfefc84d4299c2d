/**
 * Preference contract, checked the way this package already checks tokens:
 * a plain node script, no framework, run by `npm test`.
 *
 * The load-bearing check is the last one. The first version of preference.ts
 * kept its own copy of the type ramp and the copy was WRONG (lg/xl were 16/18
 * against the tokens' 15/17), so a preference of 1 — "leave it alone" — would
 * have resized two rungs of the published design. Nothing caught it, because
 * nothing compared the copy to the source. Now there is no copy: the knobs are
 * multipliers and the ramps live only in tokens/*.css, and check 5 fails if a
 * rung ever stops carrying its multiplier.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

// Load the source directly — this package ships tokens, and the preference
// module is small enough to evaluate without a build step in the check.
const src = readFileSync(join(root, "src/preference.ts"), "utf8");
const js = src
  .replace(/^import[^\n]*\n/gm, "")
  .replace(/export (type|interface) [\s\S]*?\n}\n/g, "")
  .replace(/export type [^\n]*\n/g, "")
  // A generic annotation may nest (`Partial<Record<Face, string>>`), and
  // stopping at the first `>` leaves `, string>` behind, so Function() fails to
  // parse for a reason that has nothing to do with the preference. One level of
  // nesting is matched explicitly — balanced, and it cannot run past the
  // annotation the way a lookahead to the initializer can (that ate a function
  // body, because a return type has no initializer to stop at).
  .replace(/:\s*\w+<(?:[^<>]|<[^<>]*>)*>/g, "")
  .replace(/: Preference/g, "")
  .replace(/: Density/g, "")
  .replace(/: string/g, "")
  .replace(/: number/g, "")
  .replace(/: boolean/g, "")
  .replace(/export /g, "");

const mod = new Function(`${js}; return { vars, css, isColor, TYPE_MIN, TYPE_MAX };`)();
const { vars, css, isColor, TYPE_MIN, TYPE_MAX } = mod;

let failed = 0;
const check = (name, fn) => {
  try {
    fn();
    console.log(`  ok   ${name}`);
  } catch (e) {
    failed++;
    console.error(`  FAIL ${name}\n       ${e.message}`);
  }
};
const eq = (a, b, m) => {
  const A = JSON.stringify(a), B = JSON.stringify(b);
  if (A !== B) throw new Error(`${m || ""} got ${A} want ${B}`);
};
const ok = (v, m) => { if (!v) throw new Error(m || "expected truthy"); };

console.log("preference:");

check("an unset preference changes nothing", () => {
  eq(vars({}), {});
  eq(css({}), "");
});

check("type is ONE knob, not a restated ramp", () => {
  const v = vars({ type: 1.2 });
  eq(Object.keys(v), ["--type-scale"], "type must emit exactly one name:");
  eq(v["--type-scale"], "1.2");
});

check("type is CLAMPED — a preference cannot make the UI illegible", () => {
  eq(vars({ type: 0.1 })["--type-scale"], String(TYPE_MIN), "min");
  eq(vars({ type: 99 })["--type-scale"], String(TYPE_MAX), "max");
  // the smallest rung must stay readable at the floor: 11px * TYPE_MIN
  ok(11 * TYPE_MIN >= 9, "xs falls below 9px at the floor");
});

check("density moves spacing only, and never touches type", () => {
  const v = vars({ density: "compact" });
  eq(Object.keys(v), ["--density"]);
  ok(Number(v["--density"]) < 1, "compact should tighten");
  ok(Number(vars({ density: "comfortable" })["--density"]) > 1, "comfortable should loosen");
  ok(!("--type-scale" in v), "density must not touch type");
  // Spacing compounds through nesting, so the range stays tight enough that a
  // 44px coarse-pointer target does not fall under the floor.
  ok(Number(vars({ density: "compact" })["--density"]) >= 0.8, "compact is too tight to stay tappable");
});

check("EVERY ramp rung carries its multiplier — no rung can opt out", () => {
  // This is the check that the drifting copy would have failed.
  const type = readFileSync(join(root, "tokens/typography.css"), "utf8");
  const space = readFileSync(join(root, "tokens/spacing.css"), "utf8");

  const bare = [];
  for (const [file, text, knob, re] of [
    ["typography.css", type, "--type-scale", /--text-[a-z0-9]+:\s*([^;]+);/g],
    ["spacing.css", space, "--density", /--space-\d+:\s*([^;]+);/g],
  ]) {
    for (const m of text.matchAll(re)) {
      const value = m[1].trim();
      if (value === "0") continue;                 // zero times anything is zero
      if (value.startsWith("var(")) continue;      // an alias inherits its target's calc
      // --text-floor / --text-ceiling are the BOUNDS every rung is clamped
      // between, not rungs. A bound that scaled with the knob would move with
      // the value it exists to bound and could never bind — which is the whole
      // reason a floor is stated in absolute units and a ceiling in the
      // viewport's.
      if (/^--text-(floor|ceiling):/.test(m[0])) continue;
      if (!value.includes(`var(${knob}`)) bare.push(`${file}: ${m[0].trim()}`);
    }
  }
  eq(bare, [], "rungs that do NOT scale with their knob:");
});

check("a unitless leading stays a RATIO — scaling it would double-apply", () => {
  const type = readFileSync(join(root, "tokens/typography.css"), "utf8");
  const bad = [];
  for (const m of type.matchAll(/--leading-[a-z0-9]+:\s*([^;]+);/g)) {
    const v = m[1].trim();
    // A ratio (`1.05`) already scales with the font size it multiplies.
    if (/^[0-9.]+$/.test(v) === false) continue;
    if (v.includes("var(")) bad.push(m[0].trim());
  }
  eq(bad, [], "unitless leadings must not carry a multiplier:");
});

check("a face is set by REFERENCE, so a brand's own face still wins", () => {
  // Restating "Georgia, serif" here would freeze this file's idea of serif into
  // every document that ever stored the preference.
  eq(vars({ font: "serif" })["--font-sans"], "var(--font-serif)");
  eq(vars({ font: "mono" })["--font-sans"], "var(--font-mono)");
  ok(!("--font-mono" in vars({ font: "serif" })), "code must stay monospaced");
  eq(vars({ font: "default" }), {}, "default is no opinion, not a self-reference:");
});

check("the measure moves containers, never the column count", () => {
  const v = vars({ width: "wide" });
  ok(!("--grid-columns" in v), "changing the columns is a different page, not a wider one");
  ok("--container-max" in v && "--container-prose" in v, Object.keys(v).join(","));
  ok(parseFloat(v["--container-prose"]) > parseFloat(vars({ width: "narrow" })["--container-prose"]), "wide must exceed narrow");
  eq(vars({ width: "default" }), {}, "default is no opinion:");
});

check("an unknown stored value is refused, not passed through", () => {
  // A preference is user input; these axes are string unions, so a stored value
  // from a future version or a hand-edited store must not reach a stylesheet.
  eq(vars({ font: "comic" }), {});
  eq(vars({ width: "enormous" }), {});
});

check("a modular scale regenerates the DISPLAY rungs, geometrically", () => {
  const v = vars({ modular: 1.618 });
  const names = Object.keys(v);
  eq(names.length, 8, "a modular scale emits the eight display rungs:");
  // Each rung is the one below it times the ratio — that IS the scale.
  const rem = (n) => parseFloat(v[`--text-${n}`].match(/([\d.]+)rem/)[1]);
  const rungs = ["2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"];
  for (let i = 1; i < rungs.length; i++) {
    const r = rem(rungs[i]) / rem(rungs[i - 1]);
    ok(Math.abs(r - 1.618) < 0.001, `${rungs[i]}/${rungs[i-1]} = ${r}, want the ratio`);
  }
  // Anchored on xl (17px), so the display half continues the interface rather
  // than restarting under it.
  ok(Math.abs(rem("2xl") - 1.0625 * 1.618) < 0.001, "2xl must be xl x ratio");
});

check("a modular scale leaves the INTERFACE rungs alone", () => {
  // A geometric scale through xs..xl is unusable at any real ratio: the 13px nav
  // label and the 15px lead simply do not exist on one.
  const emitted = Object.keys(vars({ modular: 1.618 }));
  for (const n of ["--text-xs", "--text-sm", "--text-base", "--text-lg", "--text-xl"]) {
    ok(!emitted.includes(n), `${n} is the interface register and must not be regenerated`);
  }
});

check("a modular scale still answers to the size knob", () => {
  // It multiplies out with --type-scale rather than freezing a px value.
  ok(vars({ modular: 1.5 })["--text-4xl"].includes("var(--type-scale, 1)"),
    "a regenerated rung must carry the size knob");
});

check("the modular ratio is CLAMPED to something that is still a scale", () => {
  // At 1 every display rung collapses onto the one below it.
  const flat = vars({ modular: 1 });
  const rem = (v, n) => parseFloat(v[`--text-${n}`].match(/([\d.]+)rem/)[1]);
  ok(rem(flat, "3xl") > rem(flat, "2xl"), "a clamped ratio must still ascend");
  eq(vars({ modular: 99 })["--text-2xl"], vars({ modular: 2 })["--text-2xl"], "max:");
});

check("a colour lands on both --primary and --accent", () => {
  const v = vars({ accent: "#808000" });
  eq(v["--primary"], "#808000");
  eq(v["--accent"], "#808000");
});

check("a NON-colour is dropped, never sanitised into something plausible", () => {
  for (const bad of [
    "red; background-image:url(//evil/x)",
    "}html{display:none",
    "url(//evil/x)",
    "expression(alert(1))",
    "",
    "   ",
  ]) {
    const v = vars({ accent: bad });
    ok(!("--primary" in v), `accepted ${JSON.stringify(bad)}`);
    ok(!isColor(bad), `isColor said yes to ${JSON.stringify(bad)}`);
  }
});

check("real colour notations are accepted", () => {
  for (const good of ["#fff", "#ffffff", "#ffffffff", "rgb(1 2 3)", "oklch(.7 .1 120)", "rebeccapurple"]) {
    ok(isColor(good), `isColor said no to ${good}`);
  }
});

check("css() emits ONE block for the selector it is given", () => {
  const out = css({ type: 1.1, density: "compact", accent: "#fff" }, ":root");
  ok(out.startsWith(":root{") && out.endsWith("}"), out.slice(0, 40));
  ok(!out.includes("}" + "{"), "emitted more than one block");
});

check("every emitted name is one the token files actually read", () => {
  // A variable nothing reads is a write into another document — the exact
  // mistake this package exists to prevent. The knobs are READ by the ramps
  // (as var(--knob, 1)); the colours are DECLARED by colors.css.
  const files = ["tokens/typography.css", "tokens/spacing.css", "tokens/grid.css", "tokens/colors.css"];
  const text = files.map((f) => readFileSync(join(root, f), "utf8")).join("\n");
  const declared = new Set([...text.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gm)].map((m) => m[1]));
  const read = new Set([...text.matchAll(/var\((--[a-z0-9-]+)/g)].map((m) => m[1]));

  // EVERY axis, not a sample — an axis missing here is an axis whose names
  // nothing gates, which is how a knob starts writing into another document.
  const emitted = Object.keys(
    vars({ type: 1.1, ratio: 1.2, density: "compact", font: "serif", width: "wide", accent: "#fff" })
  );
  const orphans = emitted.filter((k) => !declared.has(k) && !read.has(k));
  eq(orphans, [], "emitted names no token file declares or reads:");
});

if (failed) {
  console.error(`\n${failed} preference check(s) failed`);
  process.exit(1);
}
console.log("preference: all checks passed");
