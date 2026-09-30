import { useCallback, useMemo, useState } from 'react'
import type { WaitlistEntry } from './client'
import { WaitlistShare, type SharePlatformId, type ShareTarget } from './Share'
import { WaitlistInviteFriends } from './InviteFriends'

export interface WaitlistStatusProps {
  /** The entry to render. Server is the source of truth; this is just the view. */
  entry: WaitlistEntry
  /** Waitlist slug — needed for share + invite POSTs. */
  waitlist: string
  /** Base server URL. Defaults to current origin. */
  baseUrl?: string

  /** Override the "You're on the list" headline. */
  title?: string
  /** Override the subtitle line under the rank. */
  subtitle?: (entry: WaitlistEntry) => string

  /** Hide the share grid. */
  hideShare?: boolean
  /** Hide the invite-friends panel. */
  hideInvite?: boolean
  /** Hide the points score block. */
  hidePoints?: boolean
  /** Restrict / reorder share platforms. */
  shareTargets?: Array<SharePlatformId | ShareTarget>

  /**
   * Called whenever the user earns points locally (share click, invite send)
   * so consumers can keep external caches in sync. Receives the updated entry.
   */
  onEntryChange?: (next: WaitlistEntry) => void
}

const defaultSubtitle = (e: WaitlistEntry) =>
  e.aheadOf && e.aheadOf > 0
    ? `${e.aheadOf.toLocaleString()} ${e.aheadOf === 1 ? 'person is' : 'people are'} behind you. Refer friends to climb.`
    : 'Refer friends to climb the list.'

/**
 * Presentational gamified post-join view: rank, points breakdown, share grid,
 * invite panel. State-light by design — pass it an entry, render the entry,
 * notify the caller on local point gains. No network on mount, no localStorage.
 */
export function WaitlistStatus(props: WaitlistStatusProps) {
  const {
    entry, waitlist, baseUrl,
    title = "You're on the list",
    subtitle = defaultSubtitle,
    hideShare, hideInvite, hidePoints, shareTargets,
    onEntryChange,
  } = props

  // Local mirror so we can optimistically reflect share/invite point gains
  // even when the caller doesn't pass onEntryChange. The server is still the
  // source of truth — caller can blow this away with a fresh entry whenever.
  const [local, setLocal] = useState<WaitlistEntry>(entry)
  // Reset local to upstream whenever a new entry is passed.
  if (entry !== local && entry.email === local.email && entry.points !== local.points) {
    setLocal(entry)
  }

  const view = entry === local || entry.points >= local.points ? entry : local

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return view.shareUrl
    const u = new URL(window.location.href)
    u.search = ''
    u.searchParams.set('ref', view.refCode)
    return u.toString()
  }, [view.refCode, view.shareUrl])

  const bump = useCallback((points: number, breakdown: WaitlistEntry['pointBreakdown']) => {
    const next = { ...view, points, pointBreakdown: breakdown }
    setLocal(next)
    onEntryChange?.(next)
  }, [onEntryChange, view])

  const pb = view.pointBreakdown
  const pv = view.pointValues

  return (
    <div className="hanzo-waitlist__success">
      <h3 className="hanzo-waitlist__title" style={{ textAlign: 'center' }}>{title}</h3>
      <div className="hanzo-waitlist__rank" aria-label={`Rank ${view.rank} of ${view.total}`}>
        {view.rank.toLocaleString()}
      </div>
      <p className="hanzo-waitlist__of" aria-hidden="true">of {view.total.toLocaleString()}</p>
      <p className="hanzo-waitlist__meta">{subtitle(view)}</p>

      {!hidePoints && (
        <div className="hanzo-waitlist__score" aria-label={`${view.points} points`}>
          <div className="hanzo-waitlist__score-num">
            {view.points.toLocaleString()}
            <span className="hanzo-waitlist__score-suffix">pts</span>
          </div>
          <ul className="hanzo-waitlist__score-breakdown" role="list">
            <li><b>{pb.referrals}</b> referrals <small>×{pv.REFERRAL}</small></li>
            <li><b>{pb.shares}</b> shares <small>×{pv.SHARE}</small></li>
            <li><b>{pb.invitesSent}</b> invites <small>×{pv.INVITE_SENT}</small></li>
            <li><b>{pb.invitesConverted}</b> joined <small>×{pv.INVITE_CONVERTED}</small></li>
          </ul>
        </div>
      )}

      {!hideShare && (
        <WaitlistShare
          waitlist={waitlist}
          refCode={view.refCode}
          shareUrl={shareUrl}
          rank={view.rank}
          total={view.total}
          baseUrl={baseUrl}
          shareTargets={shareTargets}
          pointValues={view.pointValues}
          onShared={(_platform, awarded) => {
            if (awarded > 0) bump(view.points + awarded, { ...pb, shares: pb.shares + awarded })
          }}
        />
      )}

      {!hideInvite && (
        <WaitlistInviteFriends
          waitlist={waitlist}
          refCode={view.refCode}
          baseUrl={baseUrl}
          pointPerInvite={pv.INVITE_SENT}
          pointPerConversion={pv.INVITE_CONVERTED}
          onSent={(r) => bump(view.points + r.pointsAwarded, { ...pb, invitesSent: pb.invitesSent + r.pointsAwarded })}
        />
      )}
    </div>
  )
}
