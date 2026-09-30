import { useCallback, useMemo, useState } from 'react'
import { WaitlistClient, type InviteResponse } from './client'

export interface WaitlistInviteFriendsProps {
  /** Waitlist slug. */
  waitlist: string
  /** Viewer's referral code (server credits the points here). */
  refCode: string
  /** Base server URL. */
  baseUrl?: string
  /** Points per invite-sent, for display. Server is the source of truth. */
  pointPerInvite?: number
  /** Points per converted invite (when invited friend joins). */
  pointPerConversion?: number
  /** Max emails per submit (default 50). */
  maxBatch?: number
  /** Initial message body (optional, sent to the server). */
  defaultMessage?: string
  /** Callback after a successful submit. */
  onSent?: (result: InviteResponse) => void
}

function parseEmails(input: string): string[] {
  return input
    .split(/[\s,;]+/)
    .map((s) => s.trim())
    .filter(Boolean)
}

export function WaitlistInviteFriends(props: WaitlistInviteFriendsProps) {
  const {
    waitlist, refCode, baseUrl,
    pointPerInvite = 1,
    pointPerConversion = 5,
    maxBatch = 50,
    defaultMessage = '',
    onSent,
  } = props

  const client = useMemo(() => new WaitlistClient({ baseUrl }), [baseUrl])
  const [open, setOpen] = useState(false)
  const [raw, setRaw] = useState('')
  const [message, setMessage] = useState(defaultMessage)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<InviteResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const emails = useMemo(() => parseEmails(raw), [raw])
  const count = emails.length
  const over = count > maxBatch
  const potential = count * pointPerInvite

  const submit = useCallback(async () => {
    if (count === 0 || over || busy) return
    setBusy(true)
    setError(null)
    setResult(null)
    const res = await client.invite({ waitlist, refCode, emails, message: message || undefined })
    if ('ok' in res && res.ok) {
      setResult(res)
      setRaw('')
      onSent?.(res)
    } else {
      setError(res.message || 'failed to send')
    }
    setBusy(false)
  }, [busy, client, count, emails, message, onSent, over, refCode, waitlist])

  return (
    <div className="hanzo-waitlist__invite">
      <button
        type="button"
        className="hanzo-waitlist__invite-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>Invite friends</span>
        <span className="hanzo-waitlist__invite-toggle-meta">
          +{pointPerInvite}/sent &middot; +{pointPerConversion}/joined
        </span>
        <span aria-hidden="true" className={`hanzo-waitlist__chev${open ? ' is-open' : ''}`}>›</span>
      </button>

      {open && (
        <div className="hanzo-waitlist__invite-panel">
          <label className="hanzo-waitlist__invite-label" htmlFor="hw-invite-emails">
            Emails
            <span className="hanzo-waitlist__invite-hint">
              {count} {count === 1 ? 'address' : 'addresses'}
              {over && ` — max ${maxBatch}`}
              {!over && count > 0 && ` &middot; +${potential} pts pending`}
            </span>
          </label>
          <textarea
            id="hw-invite-emails"
            className="hanzo-waitlist__invite-textarea"
            placeholder={`friend1@example.com\nfriend2@example.com, friend3@example.com`}
            rows={4}
            value={raw}
            onChange={(e) => setRaw(e.currentTarget.value)}
            disabled={busy}
          />
          <input
            type="text"
            className="hanzo-waitlist__input"
            placeholder="Personal note (optional)"
            value={message}
            maxLength={500}
            onChange={(e) => setMessage(e.currentTarget.value)}
            disabled={busy}
          />
          <button
            type="button"
            className="hanzo-waitlist__button"
            onClick={submit}
            disabled={busy || count === 0 || over}
          >
            {busy ? 'Sending…' : count > 0 ? `Send ${count} ${count === 1 ? 'invite' : 'invites'}` : 'Send invites'}
          </button>

          {error && <p className="hanzo-waitlist__error" role="alert">{error}</p>}
          {result && (
            <p className="hanzo-waitlist__invite-result" role="status">
              Sent <strong>{result.sent}</strong>
              {result.skipped > 0 && <>, skipped {result.skipped} <small>(already on list)</small></>}
              {result.invalid > 0 && <>, {result.invalid} invalid</>}
              {result.duplicates > 0 && <>, {result.duplicates} duplicates</>}
              {result.pointsAwarded > 0 && <> &middot; +{result.pointsAwarded} pts</>}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
