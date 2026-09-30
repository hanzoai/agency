import { useCallback, useMemo, useState } from 'react'
import { WaitlistClient, type WaitlistEntry } from './client'
import { readPendingReferrer } from './storage'

export interface WaitlistJoinProps {
  /** Slug or id of the waitlist. */
  waitlist: string
  /** Base server URL. Defaults to current origin. */
  baseUrl?: string
  /** Copy. */
  title?: string
  subtitle?: string
  submitLabel?: string
  /** Cloudflare Turnstile token, if Turnstile is enabled server-side. */
  turnstileToken?: string
  /** Pre-fill the email field. */
  email?: string
  /** Fires with the new entry after a successful POST /join. */
  onSuccess?: (entry: WaitlistEntry) => void
  /** Fires on validation OR server error. */
  onError?: (err: { message: string; status: number }) => void
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Pure join form. No localStorage, no success view — that's the composer's
 * job (see <Waitlist>). Drops a single POST /v1/waitlist/join and notifies
 * onSuccess/onError. Pre-fills the referrerCode from storage if present.
 */
export function WaitlistJoin(props: WaitlistJoinProps) {
  const {
    waitlist, baseUrl,
    title = 'Join the waitlist',
    subtitle,
    submitLabel = 'Join',
    turnstileToken,
    email: initialEmail,
    onSuccess, onError,
  } = props

  const client = useMemo(() => new WaitlistClient({ baseUrl }), [baseUrl])
  const [email, setEmail] = useState(initialEmail ?? '')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (busy) return
    const normalized = email.trim().toLowerCase()
    if (!EMAIL_RE.test(normalized)) {
      const msg = 'Enter a valid email address.'
      setError(msg)
      onError?.({ message: msg, status: 0 })
      return
    }

    setBusy(true)
    setError(null)
    const res = await client.join({
      waitlist,
      email: normalized,
      referrerCode: readPendingReferrer(),
      turnstileToken,
    })

    if ('ok' in res && res.ok) {
      setBusy(false)
      onSuccess?.(res)
      return
    }
    const message = res.message || 'Something went wrong. Try again.'
    setError(message)
    onError?.({ message, status: res.status })
    setBusy(false)
  }, [busy, client, email, onError, onSuccess, turnstileToken, waitlist])

  return (
    <form onSubmit={submit} noValidate>
      <h3 className="hanzo-waitlist__title">{title}</h3>
      {subtitle && <p className="hanzo-waitlist__subtitle">{subtitle}</p>}
      <div className="hanzo-waitlist__row">
        <input
          className="hanzo-waitlist__input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          disabled={busy}
          aria-label="Email address"
          required
        />
        <button type="submit" className="hanzo-waitlist__button" disabled={busy || !email}>
          {busy ? '…' : submitLabel}
        </button>
      </div>
      {error && <p className="hanzo-waitlist__error" role="alert">{error}</p>}
    </form>
  )
}
