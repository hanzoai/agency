import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  WaitlistClient,
  type ActivityEvent,
  type ActivityType,
} from './client'

export type ActivityFormatter = (evt: ActivityEvent, ctx: { relative: string }) => React.ReactNode

export interface WaitlistActivityProps {
  /** Slug or id of the waitlist. */
  waitlist: string
  /** Base server URL. */
  baseUrl?: string
  /** Items to show. Default 8. */
  limit?: number
  /** Restrict to specific event types. Default: all. */
  types?: ActivityType[]
  /** Poll interval in ms. 0 = no polling (one-shot). Default 12000. */
  pollInterval?: number
  /** Theme override. */
  theme?: 'auto' | 'light' | 'dark'
  /** Override each row's content. Receives event + computed relative time. */
  formatEvent?: ActivityFormatter
  /** Custom relative-time formatter. */
  formatRelative?: (deltaMs: number) => string
  /** Show heading. Default true. */
  showHeading?: boolean
  /** Heading text. Default "Recent activity". */
  heading?: string
  /** Empty-state message. */
  emptyLabel?: string
  className?: string
  style?: React.CSSProperties
}

function defaultRelative(deltaMs: number): string {
  const s = Math.max(0, Math.floor(deltaMs / 1000))
  if (s < 30) return 'just now'
  if (s < 60) return `${s}s ago`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d}d ago`
  const w = Math.floor(d / 7)
  return `${w}w ago`
}

function platformLabel(p?: string): string {
  if (!p) return 'somewhere'
  const m: Record<string, string> = {
    x: 'X', twitter: 'X',
    linkedin: 'LinkedIn',
    facebook: 'Facebook',
    reddit: 'Reddit',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    email: 'email',
    sms: 'SMS',
    copy: 'link',
    webshare: 'a friend',
    mastodon: 'Mastodon',
    bluesky: 'Bluesky',
    threads: 'Threads',
  }
  return m[p.toLowerCase()] ?? p
}

function defaultFormat(evt: ActivityEvent): React.ReactNode {
  switch (evt.type) {
    case 'join':
      return <><b>{evt.who}</b> joined{evt.source === 'referral' ? ' (referred)' : ''}</>
    case 'share': {
      const p = evt.platform?.toLowerCase()
      if (p === 'copy') return <><b>{evt.who}</b> copied their link</>
      if (p === 'webshare') return <><b>{evt.who}</b> shared via system</>
      if (p === 'email') return <><b>{evt.who}</b> shared by email</>
      if (p === 'sms') return <><b>{evt.who}</b> texted their link</>
      return <><b>{evt.who}</b> shared on {platformLabel(evt.platform)}</>
    }
    case 'invite':
      return <><b>{evt.who}</b> invited a friend</>
    case 'referral':
      return <><b>{evt.who}</b> earned a referral</>
  }
}

export function WaitlistActivity(props: WaitlistActivityProps) {
  const {
    waitlist, baseUrl,
    limit = 8,
    types,
    pollInterval = 12000,
    theme = 'auto',
    formatEvent,
    formatRelative,
    showHeading = true,
    heading = 'Recent activity',
    emptyLabel = 'Quiet for now.',
    className, style,
  } = props

  const client = useMemo(() => new WaitlistClient({ baseUrl }), [baseUrl])
  const [events, setEvents] = useState<ActivityEvent[]>([])
  const [serverNow, setServerNow] = useState<number | null>(null)
  const [, force] = useState(0)
  const mounted = useRef(true)

  // Initial + polling fetch.
  useEffect(() => {
    mounted.current = true
    const fetchOnce = async () => {
      const r = await client.activity({ waitlist, limit, types })
      if (!mounted.current) return
      if ('ok' in r && r.ok) {
        setEvents(r.entries)
        setServerNow(r.now)
      }
    }
    fetchOnce()
    if (pollInterval <= 0) return undefined
    const id = window.setInterval(fetchOnce, pollInterval)
    return () => {
      mounted.current = false
      window.clearInterval(id)
    }
  }, [client, waitlist, limit, pollInterval, types])

  // Tick relative times even between polls so "just now" → "10s ago".
  useEffect(() => {
    const id = window.setInterval(() => force((n) => n + 1), 10000)
    return () => window.clearInterval(id)
  }, [])

  const themeAttr = theme === 'auto' ? undefined : theme

  const rel = useCallback((ts: number) => {
    const fmt = formatRelative ?? defaultRelative
    // Use server-now if we have it; the wall-clock drift is handled by
    // the difference computation.
    const base = serverNow ?? Date.now()
    const wallDrift = Date.now() - (serverNow ?? Date.now())
    return fmt(base - ts + wallDrift)
  }, [formatRelative, serverNow])

  return (
    <div className={['hanzo-waitlist', className].filter(Boolean).join(' ')} data-theme={themeAttr} style={style}>
      <div className="hanzo-waitlist__card hanzo-waitlist-act">
        {showHeading && (
          <header className="hanzo-waitlist-act__head">
            <h3 className="hanzo-waitlist__title">{heading}</h3>
            <span className="hanzo-waitlist-act__pulse" aria-hidden="true" />
          </header>
        )}
        {events.length === 0 ? (
          <p className="hanzo-waitlist__hint" style={{ textAlign: 'left' }}>{emptyLabel}</p>
        ) : (
          <ul className="hanzo-waitlist-act__list" role="list">
            {events.map((e, i) => {
              const relative = rel(e.ts)
              return (
                <li key={`${e.ts}-${i}`} className="hanzo-waitlist-act__row">
                  <span className={`hanzo-waitlist-act__dot hanzo-waitlist-act__dot--${e.type}`} aria-hidden="true" />
                  <span className="hanzo-waitlist-act__text">
                    {formatEvent ? formatEvent(e, { relative }) : defaultFormat(e)}
                  </span>
                  <time className="hanzo-waitlist-act__time" dateTime={new Date(e.ts).toISOString()}>
                    {relative}
                  </time>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
