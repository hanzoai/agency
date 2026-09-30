import type { Plan } from '@/data/plans';

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
