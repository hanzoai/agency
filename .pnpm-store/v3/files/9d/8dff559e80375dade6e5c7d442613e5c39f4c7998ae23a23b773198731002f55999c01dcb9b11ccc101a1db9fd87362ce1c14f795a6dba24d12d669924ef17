// Browser-safe REST client for a Hanzo Base waitlist plugin.
//
// The client speaks the /v1/waitlist/{join,status,export} surface. It has
// no React or DOM dependency — safe to use from server code, Node tools,
// or other frontends.

export interface JoinInput {
  /** Waitlist slug or id, as configured on the Base server. */
  waitlist: string
  email: string
  /** Optional referral code from the URL `?ref=<code>` parameter. */
  referrerCode?: string
  /** Cloudflare Turnstile token, if Turnstile is enabled server-side. */
  turnstileToken?: string
}

export interface StatusInput {
  waitlist: string
  email: string
}

export interface PointBreakdown {
  referrals: number
  shares: number
  invitesSent: number
  invitesConverted: number
  /** Points from verified social follows/joins (X, Discord, Telegram, ...). */
  social?: number
  /** Points from running a hanzod node. */
  hanzod?: number
}

export interface PointValues {
  REFERRAL: number
  SHARE: number
  INVITE_SENT: number
  INVITE_CONVERTED: number
}

export interface WaitlistEntry {
  ok: true
  waitlist: string
  email: string
  refCode: string
  rank: number
  total: number
  referralCount: number
  shareUrl: string
  /** Total points (referrals*REFERRAL + shares*SHARE + invitesSent + invitesConverted*INVITE_CONVERTED). */
  points: number
  pointBreakdown: PointBreakdown
  pointValues: PointValues
  alreadyJoined?: boolean
  aheadOf?: number
}

export interface TrackShareInput {
  waitlist: string
  refCode: string
  platform: string
}

export interface TrackShareResponse {
  ok: true
  awarded: number
  alreadyClaimed: boolean
  points: number
  pointBreakdown: PointBreakdown
}

export interface InviteInput {
  waitlist: string
  refCode: string
  emails: string[]
  message?: string
}

export interface InviteResponse {
  ok: true
  sent: number
  skipped: number
  invalid: number
  duplicates: number
  pointsAwarded: number
  points: number
  pointBreakdown: PointBreakdown
}

export type ActivityType = 'join' | 'share' | 'invite' | 'referral' | 'social' | 'hanzod'

export interface ActivityEvent {
  ts: number
  type: ActivityType
  who: string
  source?: 'direct' | 'referral'
  platform?: string
  invited?: string
}

export interface ActivityInput {
  waitlist: string
  limit?: number
  types?: ActivityType[]
}

export interface ActivityResponse {
  ok: true
  waitlist: string
  /** Server wall-clock at the time of response — use this to compute
   * relative times consistently even with client clock skew. */
  now: number
  entries: ActivityEvent[]
}

export interface ListInput {
  waitlist: string
  page?: number
  pageSize?: number
}

export interface LeaderboardEntry {
  rank: number
  email: string         // masked unless admin auth attached
  refCode: string | null
  points: number
  referralCount: number
  createdAt: string
}

export interface LeaderboardPage {
  ok: true
  waitlist: string
  page: number
  pageSize: number
  total: number
  totalPages: number
  entries: LeaderboardEntry[]
}

export interface NeighborhoodInput {
  waitlist: string
  email: string
  /** How many entries to show above and below the caller (1..100, default 25). */
  window?: number
}

export interface NeighborRow {
  rank: number
  email: string           // masked
  points: number
  referralCount: number
  isMe?: boolean
}

export interface NeighborhoodResponse {
  ok: true
  waitlist: string
  email: string
  rank: number
  total: number
  points: number
  window: number
  /** The caller and its nearest neighbors, ordered by rank (best first). */
  entries: NeighborRow[]
}

export interface ApiError {
  ok: false
  status: number
  message: string
  data?: unknown
}

export type Result<T> = T | ApiError

export interface ClientOptions {
  /**
   * Base URL of the Hanzo Base server, e.g. `https://api.example.com`.
   * Defaults to the current page origin.
   */
  baseUrl?: string
  /**
   * Optional path prefix to prepend before `/v1/waitlist`. Useful when
   * Base is mounted under a sub-path (`BASE_API_PREFIX=/v1/foo`).
   * Should NOT include `/v1` — defaults to empty.
   */
  pathPrefix?: string
  /** Optional fetch override, for testing or custom transports. */
  fetch?: typeof fetch
}

export class WaitlistClient {
  private readonly baseUrl: string
  private readonly prefix: string
  private readonly fetchFn: typeof fetch

  constructor(opts: ClientOptions = {}) {
    this.baseUrl = (opts.baseUrl ?? (typeof window !== 'undefined' ? window.location.origin : '')).replace(/\/$/, '')
    this.prefix = (opts.pathPrefix ?? '').replace(/\/$/, '')
    this.fetchFn = opts.fetch ?? (typeof fetch !== 'undefined' ? fetch.bind(globalThis) : (() => { throw new Error('fetch is not available') })()) as typeof fetch
  }

  private url(path: string): string {
    return `${this.baseUrl}${this.prefix}/v1/waitlist${path}`
  }

  async join(input: JoinInput): Promise<Result<WaitlistEntry>> {
    const res = await this.fetchFn(this.url('/join'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    return this.parse(res)
  }

  async status(input: StatusInput): Promise<Result<WaitlistEntry>> {
    const q = new URLSearchParams({ waitlist: input.waitlist, email: input.email })
    const res = await this.fetchFn(this.url(`/status?${q}`), { method: 'GET' })
    return this.parse(res)
  }

  async list(input: ListInput): Promise<Result<LeaderboardPage>> {
    const q = new URLSearchParams({ waitlist: input.waitlist })
    if (input.page) q.set('page', String(input.page))
    if (input.pageSize) q.set('pageSize', String(input.pageSize))
    const res = await this.fetchFn(this.url(`/list?${q}`), { method: 'GET' })
    return this.parseGeneric<LeaderboardPage>(res)
  }

  /**
   * The scalable "around me" leaderboard view: the caller's absolute rank in a
   * list of any size, plus the `window` entries just above and below. Backed by
   * keyset index seeks server-side, so it stays cheap (~0.1ms) even on a
   * multi-million-row list — never fetch the whole leaderboard to show a slice.
   */
  async neighborhood(input: NeighborhoodInput): Promise<Result<NeighborhoodResponse>> {
    const q = new URLSearchParams({ waitlist: input.waitlist, email: input.email })
    if (input.window) q.set('window', String(input.window))
    const res = await this.fetchFn(this.url(`/neighborhood?${q}`), { method: 'GET' })
    return this.parseGeneric<NeighborhoodResponse>(res)
  }

  async trackShare(input: TrackShareInput): Promise<Result<TrackShareResponse>> {
    const res = await this.fetchFn(this.url('/track-share'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    return this.parseGeneric<TrackShareResponse>(res)
  }

  async invite(input: InviteInput): Promise<Result<InviteResponse>> {
    const res = await this.fetchFn(this.url('/invite'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    return this.parseGeneric<InviteResponse>(res)
  }

  async activity(input: ActivityInput): Promise<Result<ActivityResponse>> {
    const q = new URLSearchParams({ waitlist: input.waitlist })
    if (input.limit) q.set('limit', String(input.limit))
    if (input.types?.length) q.set('types', input.types.join(','))
    const res = await this.fetchFn(this.url(`/activity?${q}`), { method: 'GET' })
    return this.parseGeneric<ActivityResponse>(res)
  }

  /**
   * Returns a CSV string. Requires either a superuser auth cookie/token
   * already attached to the request, OR an admin secret passed via
   * `Authorization: Bearer <secret>`.
   */
  async exportCsv(waitlist: string, init: { authorization?: string } = {}): Promise<string> {
    const q = new URLSearchParams({ waitlist })
    const headers: Record<string, string> = {}
    if (init.authorization) headers.Authorization = init.authorization
    const res = await this.fetchFn(this.url(`/export?${q}`), { method: 'GET', headers })
    if (!res.ok) throw new Error(`export failed: ${res.status} ${await res.text()}`)
    return res.text()
  }

  private async parse(res: Response): Promise<Result<WaitlistEntry>> {
    return this.parseGeneric<WaitlistEntry>(res)
  }

  private async parseGeneric<T>(res: Response): Promise<Result<T>> {
    let body: unknown = null
    try { body = await res.json() } catch { /* fall through */ }
    if (!res.ok) {
      const msg = (body && typeof body === 'object' && 'message' in body && typeof (body as { message: unknown }).message === 'string')
        ? (body as { message: string }).message
        : `request failed with ${res.status}`
      return { ok: false, status: res.status, message: msg, data: body }
    }
    return body as T
  }
}

/** Convenience one-shot client. */
export async function join(input: JoinInput, opts?: ClientOptions): Promise<Result<WaitlistEntry>> {
  return new WaitlistClient(opts).join(input)
}

export async function status(input: StatusInput, opts?: ClientOptions): Promise<Result<WaitlistEntry>> {
  return new WaitlistClient(opts).status(input)
}
