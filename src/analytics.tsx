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
 *  DECLARED, with the env var as an override rather than the source. It was only
 *  `secrets.PUBLISHABLE_KEY` from the deploy lane, that secret is not set, and an
 *  unset secret is the empty string — so every build has shipped `undefined` and
 *  this site has recorded nothing. A fetched value reaches only the lanes that
 *  remember to fetch it; a default reaches every lane, including one nobody edits.
 *
 *  A publishable key ships in the client bundle by construction, so it is site
 *  identity rather than a credential — the same reason hanzo.ai declares its own.
 *
 *  The ORG key, deliberately, not a project key: `product: 'agency'` below is the
 *  attribution this site wants, and a project key REPLACES product with its own
 *  slug while the org key leaves it alone. */
const INGEST_KEY =
  import.meta.env.VITE_PUBLISHABLE_KEY?.trim() ||
  'pk-live-3489a31d546129d700ed0ea66173c8d7'

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
