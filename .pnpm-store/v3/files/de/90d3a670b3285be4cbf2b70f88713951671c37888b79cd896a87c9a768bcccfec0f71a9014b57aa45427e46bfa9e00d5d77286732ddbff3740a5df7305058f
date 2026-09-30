// Top-level convenience component composing the join flow.
//
// Composition layout — each piece is independently usable, see ./Join,
// ./Status, ./Share, ./InviteFriends:
//
//   <Waitlist>
//     <Card>
//       {entry ? <WaitlistStatus/> : <WaitlistJoin/>}
//     </Card>
//
// State management is delegated to storage.usePersistedEntry — the same
// hook the host page uses to drive its sticky CTA. One source of truth.

import { useCallback, useEffect, useMemo, useState } from 'react'
import { WaitlistClient, type WaitlistEntry } from './client'
import { WaitlistJoin, type WaitlistJoinProps } from './Join'
import { WaitlistStatus } from './Status'
import { captureReferrerFromUrl, usePersistedEntry, writePersistedEntry } from './storage'
import type { SharePlatformId, ShareTarget } from './Share'

export type WaitlistMode = 'inline' | 'modal'
export type WaitlistTheme = 'auto' | 'light' | 'dark'

export interface WaitlistProps {
  /** Slug or id of the waitlist on the Base server. */
  waitlist: string
  /** Where the Base server lives. Defaults to current origin. */
  baseUrl?: string
  /** Layout: `inline` renders the form in place, `modal` renders a button that opens it. */
  mode?: WaitlistMode
  /** Light / dark / `auto` (follow OS). */
  theme?: WaitlistTheme
  /** Consumer-provided logo (rendered above the title in both Join and Status). */
  logo?: React.ReactNode

  /** Join form copy + Turnstile token. */
  title?: WaitlistJoinProps['title']
  subtitle?: WaitlistJoinProps['subtitle']
  submitLabel?: WaitlistJoinProps['submitLabel']
  turnstileToken?: WaitlistJoinProps['turnstileToken']

  /** Status view copy. */
  successTitle?: string
  successSubtitle?: (entry: WaitlistEntry) => string

  /** Optional CTA before user submits (modal mode). */
  triggerLabel?: string

  /** Toggle pieces of the status view. */
  hideShare?: boolean
  hideInvite?: boolean
  hidePoints?: boolean
  shareTargets?: Array<SharePlatformId | ShareTarget>

  /** Forward to root container. */
  className?: string
  style?: React.CSSProperties

  /** Callbacks. */
  onSuccess?: (entry: WaitlistEntry) => void
  onError?: WaitlistJoinProps['onError']
}

export function Waitlist(props: WaitlistProps) {
  const {
    waitlist, baseUrl,
    mode = 'inline',
    theme = 'auto',
    logo,
    title, subtitle, submitLabel, turnstileToken,
    successTitle, successSubtitle,
    triggerLabel = 'Join waitlist',
    hideShare, hideInvite, hidePoints, shareTargets,
    className, style,
    onSuccess, onError,
  } = props

  const client = useMemo(() => new WaitlistClient({ baseUrl }), [baseUrl])
  const cached = usePersistedEntry(waitlist)
  const [entry, setEntry] = useState<WaitlistEntry | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // On mount: capture inbound ?ref= URL and rehydrate the cached entry.
  useEffect(() => { captureReferrerFromUrl() }, [])

  useEffect(() => {
    if (!cached?.email) { setEntry(null); return }
    let cancelled = false
    client.status({ waitlist, email: cached.email }).then((res) => {
      if (cancelled) return
      if ('ok' in res && res.ok) setEntry(res)
    })
    return () => { cancelled = true }
  }, [cached?.email, client, waitlist])

  const handleSuccess = useCallback((next: WaitlistEntry) => {
    writePersistedEntry(waitlist, { email: next.email, rank: next.rank, refCode: next.refCode })
    setEntry(next)
    onSuccess?.(next)
  }, [onSuccess, waitlist])

  const card = (
    <Card theme={theme} className={className} style={style}>
      {logo && <div className="hanzo-waitlist__logo">{logo}</div>}
      {entry ? (
        <WaitlistStatus
          entry={entry}
          waitlist={waitlist}
          baseUrl={baseUrl}
          title={successTitle}
          subtitle={successSubtitle}
          hideShare={hideShare}
          hideInvite={hideInvite}
          hidePoints={hidePoints}
          shareTargets={shareTargets}
          onEntryChange={setEntry}
        />
      ) : (
        <WaitlistJoin
          waitlist={waitlist}
          baseUrl={baseUrl}
          title={title}
          subtitle={subtitle}
          submitLabel={submitLabel}
          turnstileToken={turnstileToken}
          onSuccess={handleSuccess}
          onError={onError}
        />
      )}
    </Card>
  )

  if (mode === 'inline') return card

  return (
    <>
      <button
        type="button"
        className="hanzo-waitlist__trigger"
        onClick={() => setModalOpen(true)}
      >
        {entry ? `#${entry.rank.toLocaleString()} — view` : triggerLabel}
      </button>
      {modalOpen && (
        <div
          className="hanzo-waitlist__backdrop"
          role="dialog"
          aria-modal="true"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="hanzo-waitlist__dialog">{card}</div>
        </div>
      )}
    </>
  )
}

function Card(p: { theme: WaitlistTheme; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const themeAttr = p.theme === 'auto' ? undefined : p.theme
  const className = ['hanzo-waitlist', p.className].filter(Boolean).join(' ')
  return (
    <div className={className} data-theme={themeAttr} style={p.style}>
      <div className="hanzo-waitlist__card">{p.children}</div>
    </div>
  )
}
