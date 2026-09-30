import { EVENTS } from '@hanzo/event';
import type { Plan } from '@/data/plans';
import { analytics } from '@/analytics';

/**
 * Where money changes hands: the checkout at hanzo.ai/pay (pay.hanzo.ai
 * redirects there).
 *
 * Its cart takes `?plan=` and `?returnUrl=`, charges the commerce plan under that
 * slug by card, and comes back to the return address with
 * `?checkout=<status>&plan=<slug>` appended. The return must be a host commerce
 * allows: `GET api.hanzo.ai/v1/commerce/org` publishes that allowlist, and
 * hanzo.agency is on it.
 */
const PAY = 'https://hanzo.ai/pay';

/** Where a paid buyer lands: the page that confirms the plan. */
const BACK = '/payment-success';

/**
 * The checkout address for a plan. ONE writer for this address, so the plan a
 * reader clicked is the plan the cart opens on.
 */
export function checkoutUrl(plan: Plan): string {
  const back = new URL(BACK, window.location.origin).toString();
  return `${PAY}/cart?plan=${encodeURIComponent(plan.slug)}&returnUrl=${encodeURIComponent(back)}`;
}

/**
 * The page is leaving for the checkout on `plan`. Every exit to the cart calls
 * this once, beside checkoutUrl. `plan` is the commerce slug: the catalog's
 * spelling, and never this site's id, since the id `agency` names a different
 * commerce plan. The batch goes by beacon now, while the page still exists,
 * rather than waiting on pagehide as the page is torn down.
 */
export function depart(plan: Plan): void {
  analytics.capture(EVENTS.CHECKOUT_STARTED, { plan: plan.slug });
  analytics.flush(true);
}

/** A plan button was pressed: the buyer chose `plan` and leaves for its checkout. */
export function choose(plan: Plan): void {
  analytics.capture(EVENTS.PLAN_CLICKED, { plan: plan.slug });
  depart(plan);
}
