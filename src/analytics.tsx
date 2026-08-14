import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { createAnalytics } from '@hanzo/event'
import { AnalyticsProvider, usePageview } from '@hanzo/event/react'

/** The ONE Hanzo telemetry front door — POST api.hanzo.ai/v1/event. Cloud fans the
 *  single batched stream out to the web (analytics), product (insights) and error
 *  lenses, so there is no second analytics SDK and no second error SDK. The client
 *  never sends the org; Cloud resolves the tenant from the publishable key. */
const HOST = 'https://api.hanzo.ai'

/** Publishable ingest key. Every visitor here is logged out, so no bearer can ride
 *  the request and this write-only, bundle-safe key IS how anonymous pageviews and
 *  errors resolve to an org.
 *
 *  A publishable key ships in the client bundle by construction, so it is site
 *  identity rather than a credential.
 *
 *  This used to carry a literal as a default, on the reasoning that a fetched
 *  value reaches only the lanes that remember to fetch it while a default reaches
 *  every lane. True, and it still cost more than it paid: the literal named no
 *  project, so `POST /v1/event` answered 403 ingest_key_unknown for it. A default
 *  that does not resolve buys nothing — the site records exactly as little as it
 *  would with no key — and it costs two things. Analytics fails quietly, in the
 *  browser, where nobody is looking. And the deploy lane greps the built bundle
 *  for the FIRST `pk-` it finds, so a second key sitting in the file could be the
 *  one it tests, making the gate's verdict about a string nothing sends.
 *
 *  So: one key, from the lane that owns it, and no fallback. Absent means the
 *  build fails naming the absence, which is the loud version of the same fact.
 *  ⚠ A default here is only ever safe if something proves it still resolves;
 *  restoring an unverified literal restores this bug. */
const INGEST_KEY = import.meta.env.VITE_PUBLISHABLE_KEY?.trim() ?? ''

/** Honor an explicit browser opt-out — Global Privacy Control first, then legacy
 *  DNT. Opting out suppresses pageviews AND errors. */
function consented(): boolean {
  if (typeof navigator === 'undefined') return true
  const nav = navigator as Navigator & {
    globalPrivacyControl?: boolean
    doNotTrack?: string | null
  }
  if (nav.globalPrivacyControl === true) return false
  const dnt = nav.doNotTrack
  return dnt !== '1' && dnt !== 'yes'
}

/** THE client, built once at module scope. It is exported because this app
 *  captures from plain modules too (checkout helpers are not components and
 *  cannot call a hook); handing the same instance to the provider below is what
 *  keeps that from becoming a second client with its own session id. */
export const analytics = createAnalytics({
  product: 'agency',
  host: HOST,
  ingestKey: INGEST_KEY,
  enabled: consented(),
})

function Pageview() {
  usePageview(useLocation().pathname)
  return null
}

/** Telemetry root. Renders INSIDE the router — <Pageview> reads the router's
 *  location, and one pageview per route change is the whole point on a
 *  client-routed SPA where a navigation never touches the network. The provider
 *  covers the initial load, registers auto error capture and flushes on unload. */
export function Analytics({ children }: { children: ReactNode }) {
  return (
    <AnalyticsProvider client={analytics}>
      <Pageview />
      {children}
    </AnalyticsProvider>
  )
}
