import { useCallback, useEffect, useMemo, useState } from 'react'
import { WaitlistClient, type LeaderboardEntry } from './client'
import { useCountUp } from './useCountUp'

export type LeaderboardMode = 'load-more' | 'paginate'

export interface WaitlistLeaderboardProps {
  /** Slug or id of the waitlist. */
  waitlist: string
  /** Base server URL. Defaults to current origin. */
  baseUrl?: string
  /** Entries per page. Default 25. */
  pageSize?: number
  /** Theme override ('auto' | 'light' | 'dark'). */
  theme?: 'auto' | 'light' | 'dark'
  /**
   * Highlight the row matching this email (typically the current viewer).
   * The widget's `Waitlist` component stores the joined email in
   * localStorage under `hanzo-waitlist:<slug>` — read it there to wire up.
   */
  highlightEmail?: string
  /**
   * `'load-more'` (default) — single button at the bottom that appends the
   * next chunk; no page counters or arrows.
   * `'paginate'` — classic next/prev with a page count.
   */
  mode?: LeaderboardMode
  /** Override the load-more button text. */
  loadMoreLabel?: string
  /** Text shown after the last page in load-more mode. Set to '' to hide. */
  exhaustedLabel?: string
  /**
   * Animated count-up on the total ("1,205 on the list"). Pass `false`
   * to disable, or an object to tune the duration. Default true / 1200ms.
   */
  animateTotal?: boolean | { duration?: number }
  /** Optional className on the root container. */
  className?: string
  style?: React.CSSProperties
  /**
   * Custom renderer for the "email" cell. Default shows the masked email.
   * Use this to render avatars, social links, etc.
   */
  renderEmail?: (entry: LeaderboardEntry) => React.ReactNode
}

/**
 * Paginated leaderboard view of a waitlist. The widget itself stays per-user
 * (Join + your-rank); this is the public list view. Same monochrome surface,
 * same CSS variables, same brand-neutral design — drop in next to <Waitlist>.
 */
export function WaitlistLeaderboard(props: WaitlistLeaderboardProps) {
  const {
    waitlist,
    baseUrl,
    pageSize = 25,
    theme = 'auto',
    highlightEmail,
    mode = 'load-more',
    loadMoreLabel = 'Show more',
    exhaustedLabel = "That's everyone",
    animateTotal = true,
    className,
    style,
    renderEmail,
  } = props

  const client = useMemo(() => new WaitlistClient({ baseUrl }), [baseUrl])
  const [page, setPage] = useState(1)
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [meta, setMeta] = useState<{ total: number; totalPages: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  // For load-more, accumulate; for paginate, replace.
  const load = useCallback(async (p: number, append: boolean) => {
    setBusy(true)
    setError(null)
    const res = await client.list({ waitlist, page: p, pageSize })
    if ('ok' in res && res.ok) {
      setMeta({ total: res.total, totalPages: res.totalPages })
      setEntries((prev) => {
        if (!append) return res.entries
        // Dedup by rank in case of overlapping fetches.
        const seen = new Set(prev.map((e) => e.rank))
        const fresh = res.entries.filter((e) => !seen.has(e.rank))
        return [...prev, ...fresh]
      })
    } else {
      setError(res.message || 'failed to load')
    }
    setBusy(false)
  }, [client, pageSize, waitlist])

  // Initial load and whenever waitlist/pageSize change.
  useEffect(() => {
    setPage(1)
    setEntries([])
    load(1, false)
  }, [load])

  const total = meta?.total ?? 0
  const animDuration = animateTotal === false ? 0 : (typeof animateTotal === 'object' ? animateTotal.duration ?? 1200 : 1200)
  const animatedTotal = useCountUp(meta ? total : null, { duration: animDuration })
  const displayedTotal = animateTotal === false ? total : animatedTotal
  const isPaginate = mode === 'paginate'
  const isLastPage = meta ? page >= meta.totalPages : false
  const isExhausted = mode === 'load-more' && meta && entries.length >= meta.total

  const onLoadMore = useCallback(() => {
    if (busy) return
    const next = page + 1
    setPage(next)
    load(next, true)
  }, [busy, load, page])

  const themeAttr = theme === 'auto' ? undefined : theme

  return (
    <div className={['hanzo-waitlist', className].filter(Boolean).join(' ')} data-theme={themeAttr} style={style}>
      <div className="hanzo-waitlist__card hanzo-waitlist-lb">
        <header className="hanzo-waitlist-lb__head">
          <div>
            <h3 className="hanzo-waitlist__title">Leaderboard</h3>
            <p className="hanzo-waitlist__subtitle">
              <span className="hanzo-waitlist-lb__total">{displayedTotal.toLocaleString()}</span> on the list
            </p>
          </div>
          {isPaginate && (
            <Pager
              page={page}
              totalPages={meta?.totalPages ?? 1}
              busy={busy}
              onChange={(p) => { setPage(p); load(p, false) }}
            />
          )}
        </header>

        {error && <p className="hanzo-waitlist__error" role="alert">{error}</p>}

        <ol className="hanzo-waitlist-lb__list">
          {entries.map((e) => {
            const mine = highlightEmail && e.email.toLowerCase() === highlightEmail.toLowerCase()
            return (
              <li
                key={`${e.rank}-${e.email}`}
                className="hanzo-waitlist-lb__row"
                data-mine={mine ? 'true' : undefined}
              >
                <span className="hanzo-waitlist-lb__rank">#{e.rank.toLocaleString()}</span>
                <span className="hanzo-waitlist-lb__email">
                  {renderEmail ? renderEmail(e) : e.email}
                </span>
                <span className="hanzo-waitlist-lb__refs" aria-label={`${e.referralCount} referrals`}>
                  {e.referralCount.toLocaleString()}
                </span>
              </li>
            )
          })}
          {!error && entries.length === 0 && (
            <li className="hanzo-waitlist-lb__empty">
              {busy ? 'Loading…' : 'No one yet — be the first.'}
            </li>
          )}
        </ol>

        {!isPaginate && meta && !isExhausted && (
          <footer className="hanzo-waitlist-lb__foot">
            <button
              type="button"
              className="hanzo-waitlist__button hanzo-waitlist__button--ghost hanzo-waitlist-lb__more"
              onClick={onLoadMore}
              disabled={busy}
            >
              {busy ? 'Loading…' : loadMoreLabel}
            </button>
          </footer>
        )}
        {!isPaginate && isExhausted && exhaustedLabel && (
          <footer className="hanzo-waitlist-lb__foot">
            <span className="hanzo-waitlist-lb__exhausted">{exhaustedLabel}</span>
          </footer>
        )}
        {isPaginate && (meta?.totalPages ?? 1) > 1 && (
          <footer className="hanzo-waitlist-lb__foot">
            <Pager
              page={page}
              totalPages={meta?.totalPages ?? 1}
              busy={busy}
              onChange={(p) => { setPage(p); load(p, false) }}
            />
          </footer>
        )}
        {!isPaginate && isLastPage && false /* suppress noop */}
      </div>
    </div>
  )
}

function Pager(p: { page: number; totalPages: number; busy: boolean; onChange: (n: number) => void }) {
  const prev = () => p.onChange(Math.max(1, p.page - 1))
  const next = () => p.onChange(Math.min(p.totalPages, p.page + 1))
  return (
    <div className="hanzo-waitlist-lb__pager">
      <button
        type="button"
        className="hanzo-waitlist__button hanzo-waitlist__button--ghost"
        onClick={prev}
        disabled={p.busy || p.page <= 1}
        aria-label="Previous page"
      >&larr;</button>
      <span className="hanzo-waitlist-lb__pageinfo">
        {p.page.toLocaleString()} / {p.totalPages.toLocaleString()}
      </span>
      <button
        type="button"
        className="hanzo-waitlist__button hanzo-waitlist__button--ghost"
        onClick={next}
        disabled={p.busy || p.page >= p.totalPages}
        aria-label="Next page"
      >&rarr;</button>
    </div>
  )
}
