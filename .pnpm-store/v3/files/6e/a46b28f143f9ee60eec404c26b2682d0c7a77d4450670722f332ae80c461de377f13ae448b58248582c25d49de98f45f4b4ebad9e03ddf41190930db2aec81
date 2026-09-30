// Single source of truth for the widget's localStorage shape.
//
// Both the widget and the host page may need to know "is this visitor
// already on the list, and what's their rank/refCode" — owning that key
// here keeps the contract in one place and lets consumers swap storage
// out cleanly (e.g. to a cookie or a server-rendered prop).

import { useEffect, useState } from 'react'

/** Persisted snapshot. Server is the source of truth; this is just a cache. */
export interface PersistedEntry {
  email: string
  rank?: number
  refCode?: string
}

const PREFIX = 'hanzo-waitlist:'
const REF_KEY = 'hanzo-waitlist:ref'

export function entryKey(slug: string): string {
  return PREFIX + slug
}

/** Synchronous read (returns null on miss / parse error / SSR). */
export function readPersistedEntry(slug: string): PersistedEntry | null {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(entryKey(slug))
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<PersistedEntry>
    if (!parsed?.email) return null
    return { email: parsed.email, rank: parsed.rank, refCode: parsed.refCode }
  } catch {
    return null
  }
}

export function writePersistedEntry(slug: string, entry: PersistedEntry): void {
  if (typeof localStorage === 'undefined') return
  try { localStorage.setItem(entryKey(slug), JSON.stringify(entry)) } catch { /* noop */ }
  // Notify same-tab subscribers — native `storage` event only fires cross-tab.
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('hanzo-waitlist:change', { detail: { slug } }))
  }
}

export function clearPersistedEntry(slug: string): void {
  if (typeof localStorage === 'undefined') return
  try { localStorage.removeItem(entryKey(slug)) } catch { /* noop */ }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('hanzo-waitlist:change', { detail: { slug } }))
  }
}

/** Capture an inbound ?ref=<code> URL param for later submission. */
export function captureReferrerFromUrl(): void {
  if (typeof window === 'undefined') return
  try {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (ref) localStorage.setItem(REF_KEY, ref)
  } catch { /* noop */ }
}

export function readPendingReferrer(): string | undefined {
  if (typeof localStorage === 'undefined') return undefined
  try { return localStorage.getItem(REF_KEY) ?? undefined } catch { return undefined }
}

/**
 * React hook: subscribes to the persisted entry for `slug`. Reactive to
 * same-tab writes (via custom event) and cross-tab writes (via native
 * `storage` event).
 */
export function usePersistedEntry(slug: string): PersistedEntry | null {
  const [entry, setEntry] = useState<PersistedEntry | null>(() => readPersistedEntry(slug))

  useEffect(() => {
    setEntry(readPersistedEntry(slug))
    const onChange = (e: Event) => {
      const target = (e as CustomEvent<{ slug?: string }>).detail?.slug
      if (target && target !== slug) return
      setEntry(readPersistedEntry(slug))
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key === entryKey(slug)) setEntry(readPersistedEntry(slug))
    }
    window.addEventListener('hanzo-waitlist:change', onChange)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('hanzo-waitlist:change', onChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [slug])

  return entry
}
