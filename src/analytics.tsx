import { lazy, Suspense, useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { createAnalytics, readConsent, startTags } from '@hanzo/event'
import { AnalyticsProvider, useConsent, usePageview } from '@hanzo/event/react'

/** The ONE Hanzo telemetry front door — POST api.hanzo.ai/v1/event. Cloud fans the
 *  single batched stream out to the web (analytics), product (insights) and error
 *  lenses, so there is no second analytics SDK and no second error SDK. The client
 *  never sends the org; Cloud resolves the tenant from the publishable key. */
const HOST = 'https://api.hanzo.ai'

/** The site's project key, cloud project `agency`: the project its events are
 *  filed under and whose tag set (GA4 and the Pixel, configuration in cloud, never
 *  ids in this repo) the tag manager loads. Write-only and bundle-safe.
 *
 *  With a key the SDK sends each batch as a CORS-simple request: the key rides
 *  ?ingest_key=, the body is text/plain, and credentials are omitted. api.hanzo.ai
 *  accepts exactly that from this origin.
 *
 *  The deploy workflow asserts this key resolves at the ingest endpoint before it
 *  publishes. */
const KEY = 'pk-26a2clOaJFe24aKJZ0PkI-GWR9F4EEa8rthHzgy_Efw'

const CONFIG = { product: 'agency', host: HOST, ingestKey: KEY }

/** The sites one visit can cross; GA4 keeps it one session across them. */
const DOMAINS = ['hanzo.agency', 'hanzo.ai', 'hanzo.id', 'pay.hanzo.ai', 'cal.hanzo.ai']

/** The stream's client as consent stands now. Plain modules capture too (checkout
 *  helpers are not components and cannot call a hook); asking here returns the
 *  same instance the provider holds, so there is never a second client with its
 *  own session id, and a capture made before Analytics is allowed sends nothing. */
export const analytics = () => createAnalytics({ ...CONFIG, enabled: readConsent().analytics })

const Banner = lazy(() => import('./banner'))

function Pageview() {
  usePageview(useLocation().pathname)
  return null
}

/** The tags. `startTags` fetches this site's tag set from cloud and the consent
 *  rule for this visitor's region, and loads only what consent allows. */
function Tags() {
  useEffect(() => startTags({ key: KEY, domains: DOMAINS }), [])
  return null
}

/** Telemetry root, the docs.hanzo.ai pattern. Renders INSIDE the router —
 *  <Pageview> reads the router's location, one pageview per route change on a
 *  client-routed SPA. The provider covers the initial load, registers auto error
 *  capture and flushes on unload. The stream runs while the visitor allows
 *  analytics, and <Banner> (@hanzo/ui's Consent, loaded beside the page rather
 *  than ahead of it) is the one banner that asks. Global Privacy Control and Do
 *  Not Track read as a refusal. */
export function Analytics({ children }: { children: ReactNode }) {
  const consent = useConsent()
  return (
    <AnalyticsProvider config={{ ...CONFIG, enabled: consent.analytics }}>
      <Tags />
      <Pageview />
      {children}
      <Suspense fallback={null}>
        <Banner />
      </Suspense>
    </AnalyticsProvider>
  )
}
