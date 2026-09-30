/**
 * Fold the CommonJS pass into `dist` as `.cjs`.
 *
 * `tsc` emits one module format per outDir, so the CJS build lands in
 * `dist-cjs` beside the ESM one. Both halves ship from `dist`, distinguished by
 * extension — `.cjs` is CommonJS whatever the package `type` says, which is the
 * only way an ESM-typed package can hand a `require()` consumer real CJS.
 *
 * Specifiers are rewritten on the way in. The sources name siblings with an
 * explicit `./x.js`, which `tsc` copies through verbatim, so an unrewritten
 * `dist/index.cjs` would `require('./tokens.gen.js')` — the ESM copy sitting
 * right next to it. That either throws or loads a SECOND instance of every
 * token, so the extension has to travel with the file.
 */
import { mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const cjs = join(root, 'dist-cjs')

const files = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    statSync(p).isDirectory() ? files(p, out) : out.push(p)
  }
  return out
}

// `from './x.js'`, `import './x.js'`, `import('./x.js')`, `require('./x.js')`
const SPECIFIER = /(\bfrom\s*|\bimport\s*\(?\s*|\brequire\s*\(\s*)(['"])(\.[^'"]*)\.js\2/g

for (const f of files(cjs)) {
  if (!f.endsWith('.js')) continue
  const src = readFileSync(f, 'utf8')
  const out = src.replace(SPECIFIER, (_, head, q, spec) => `${head}${q}${spec}.cjs${q}`)
  const dest = join(dist, relative(cjs, f)).replace(/\.js$/, '.cjs')
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, out)
}

rmSync(cjs, { recursive: true, force: true })
