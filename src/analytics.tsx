import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { createAnalytics, ORG_KEY } from '@hanzo/event'
import { AnalyticsProvider, usePageview } from '@hanzo/event/react'

/** The ONE Hanzo telemetry front door — POST api.hanzo.ai/v1/event. Cloud fans the
 *  single batched stream out to the web (analytics), product (insights) and error
 *  lenses, so there is no second analytics SDK and no second error SDK. The client
 *  never sends the org; Cloud resolves the tenant from the publishable key. */
const HOST = 'https://api.hanzo.ai'

/** Publishable ingest key: the hanzo org's, from the keyring @hanzo/event carries
 *  for its brands. Every visitor here is logged out, so this write-only,
 *  bundle-safe key is how pageviews and errors resolve to an org. hanzo.agency
 *  sells under the hanzo org (ORG in src/lib/commerce.ts) but is not a host the
 *  SDK maps to an org, so the key is named here rather than resolved from the
 *  hostname.
 *
 *  With a key the SDK sends each batch as a CORS-simple request: the key rides
 *  ?ingest_key=, the body is text/plain, and credentials are omitted. api.hanzo.ai
 *  accepts exactly that from this origin. Without one the SDK sends a
 *  credentialed JSON POST, which the API refuses for this origin.
 *
 *  The deploy workflow asserts this key resolves at the ingest endpoint before it
 *  publishes. */
const INGEST_KEY = ORG_KEY.hanzo

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
