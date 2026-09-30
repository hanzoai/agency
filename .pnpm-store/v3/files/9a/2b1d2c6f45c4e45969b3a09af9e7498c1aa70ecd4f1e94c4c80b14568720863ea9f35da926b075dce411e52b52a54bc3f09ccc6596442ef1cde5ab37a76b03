import { useCallback, useMemo, useState } from 'react'
import { WaitlistClient, type PointValues } from './client'

export type SharePlatformId =
  | 'webshare' | 'email' | 'x' | 'linkedin' | 'facebook'
  | 'reddit' | 'telegram' | 'whatsapp' | 'sms' | 'copy'

export interface ShareTarget {
  id: SharePlatformId | string
  label: string
  /** Points awarded for this action. If undefined, falls back to pointValues.SHARE. */
  points?: number
  /**
   * Returns a URL to open, OR `null` to skip the navigation (e.g. for copy /
   * webshare which do their own thing in `onClick`).
   */
  href: (ctx: ShareContext) => string | null
  /** Optional custom click handler — runs INSTEAD of href navigation. */
  onClick?: (ctx: ShareContext) => void | Promise<void>
}

export interface ShareContext {
  url: string
  text: string
  rank: number
  refCode: string
}

export interface WaitlistShareProps {
  /** Slug of the waitlist (needed for track-share calls). */
  waitlist: string
  /** The viewer's referral code (server credits points to this code). */
  refCode: string
  /** Full share URL (typically the host page with `?ref=<code>` appended). */
  shareUrl: string
  /** Optional viewer rank — used in default share text. */
  rank?: number
  /** Optional total — used in default share text. */
  total?: number

  /**
   * Override the share message. Receives the same ctx as href functions.
   * Default: `I'm #N on the waitlist. Join me:`
   */
  message?: (ctx: ShareContext) => string

  /**
   * Restrict / reorder targets. Pass an array of platform IDs from the
   * built-in set, OR a full ShareTarget for custom platforms. Defaults to
   * the full built-in roster.
   */
  shareTargets?: Array<SharePlatformId | ShareTarget>

  /**
   * Override the server's published point values for display only. The
   * actual point award still happens server-side per pointValues; this is
   * for showing custom labels.
   */
  pointValues?: Partial<PointValues>

  /** Base server URL. Defaults to current origin. */
  baseUrl?: string

  /** Callback after a successful track-share (or copy). */
  onShared?: (platform: string, awarded: number, alreadyClaimed: boolean) => void
}

const DEFAULT_ORDER: SharePlatformId[] = [
  'webshare', 'email', 'x', 'linkedin', 'facebook',
  'reddit', 'telegram', 'whatsapp', 'sms', 'copy',
]

const BUILTIN: Record<SharePlatformId, Omit<ShareTarget, 'id'>> = {
  webshare: {
    label: 'Share',
    href: () => null,
    onClick: async ({ url, text }) => {
      if (typeof navigator !== 'undefined' && 'share' in navigator) {
        try { await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share({ text, url }) } catch { /* user cancelled */ }
      }
    },
  },
  email: {
    label: 'Email',
    href: ({ url, text }) => `mailto:?subject=${encodeURIComponent('Join the waitlist')}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
  },
  x: {
    label: 'X',
    href: ({ url, text }) => `https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
  },
  linkedin: {
    label: 'LinkedIn',
    href: ({ url }) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    label: 'Facebook',
    href: ({ url }) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  reddit: {
    label: 'Reddit',
    href: ({ url, text }) => `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
  },
  telegram: {
    label: 'Telegram',
    href: ({ url, text }) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  whatsapp: {
    label: 'WhatsApp',
    href: ({ url, text }) => `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  sms: {
    label: 'SMS',
    href: ({ url, text }) => `sms:?&body=${encodeURIComponent(`${text} ${url}`)}`,
  },
  copy: {
    label: 'Copy link',
    href: () => null,
    onClick: async ({ url }) => {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        try { await navigator.clipboard.writeText(url) } catch { /* noop */ }
      }
    },
  },
}

function resolveTargets(spec: WaitlistShareProps['shareTargets']): ShareTarget[] {
  const list = spec ?? DEFAULT_ORDER
  return list
    .map((entry) => {
      if (typeof entry === 'string') {
        const builtin = BUILTIN[entry as SharePlatformId]
        if (!builtin) return null
        return { id: entry, ...builtin }
      }
      return entry
    })
    .filter((x): x is ShareTarget => Boolean(x))
}

export function WaitlistShare(props: WaitlistShareProps) {
  const {
    waitlist, refCode, shareUrl, rank = 0, total: _total,
    message, shareTargets, pointValues, baseUrl, onShared,
  } = props

  const client = useMemo(() => new WaitlistClient({ baseUrl }), [baseUrl])
  const targets = useMemo(() => resolveTargets(shareTargets), [shareTargets])
  const [busy, setBusy] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  const sharePoints = pointValues?.SHARE ?? 2

  const ctx: ShareContext = useMemo(() => {
    const text = message
      ? message({ url: shareUrl, text: '', rank, refCode })
      : (rank ? `I'm #${rank.toLocaleString()} on the waitlist. Climb with me:` : 'Join me on the waitlist:')
    return { url: shareUrl, text, rank, refCode }
  }, [message, rank, refCode, shareUrl])

  // Hide Web Share when the API isn't there.
  const visibleTargets = useMemo(() => {
    if (typeof navigator === 'undefined' || !('share' in navigator)) {
      return targets.filter((t) => t.id !== 'webshare')
    }
    return targets
  }, [targets])

  const fire = useCallback(async (t: ShareTarget) => {
    if (busy) return
    setBusy(String(t.id))
    setToast(null)

    // Side action (copy / webshare) first so the user gets immediate feedback.
    try {
      if (t.onClick) await t.onClick(ctx)
    } catch { /* swallow — UX over correctness here */ }

    // Open the share URL (if any) in a new tab. Mailto/sms use same window.
    const href = t.href(ctx)
    if (href) {
      const sameWindow = href.startsWith('mailto:') || href.startsWith('sms:')
      if (sameWindow) {
        window.location.href = href
      } else {
        window.open(href, '_blank', 'noopener,noreferrer')
      }
    }

    // Fire-and-forget point award. Caps and dedup live on the server.
    const result = await client.trackShare({ waitlist, refCode, platform: String(t.id) })
    let awarded = 0
    let alreadyClaimed = false
    if ('ok' in result && result.ok) {
      awarded = result.awarded
      alreadyClaimed = result.alreadyClaimed
      if (awarded > 0) setToast(`+${awarded} from ${t.label}`)
      else if (alreadyClaimed) setToast(`Already counted today`)
    }
    onShared?.(String(t.id), awarded, alreadyClaimed)

    setBusy(null)
    // Auto-clear toast.
    setTimeout(() => setToast(null), 2200)
  }, [busy, client, ctx, onShared, refCode, waitlist])

  return (
    <div className="hanzo-waitlist__share-wrap">
      <ul className="hanzo-waitlist__share" role="list">
        {visibleTargets.map((t) => {
          const pts = t.points ?? sharePoints
          const isBusy = busy === String(t.id)
          const emphasized = t.id === 'webshare' || t.id === 'copy'
          return (
            <li key={String(t.id)}>
              <button
                type="button"
                className={`hanzo-waitlist__share-btn${emphasized ? '' : ' hanzo-waitlist__button--ghost'}`}
                onClick={() => fire(t)}
                disabled={isBusy}
                aria-label={`${t.label} (+${pts})`}
              >
                <span className="hanzo-waitlist__share-label">{t.label}</span>
                {pts > 0 && (
                  <span className="hanzo-waitlist__share-pts" aria-hidden="true">+{pts}</span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
      <div className="hanzo-waitlist__toast" role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  )
}
