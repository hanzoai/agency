import { EVENTS } from '@hanzo/event';
import { analytics } from '@/analytics';

/**
 * Where money changes hands: the pay site, which is the one host that answers.
 *
 * It takes `?plan=` and `?return=` and comes back to the return address. The
 * return must be a host commerce allows — `GET api.hanzo.ai/v1/commerce/org`
 * publishes that allowlist, and hanzo.agency is on it.
 */
const PAY = 'https://pay.hanzo.ai';

/** The public commerce read a checkout page boots from. Needs no credential. */
const COMMERCE = 'https://api.hanzo.ai/v1/commerce';

/** The brand this site sells under. */
const ORG = 'hanzo';

/**
 * The checkout address for a plan.
 *
 * ONE writer for this address. A plan id only selects the card a reader clicked
 * if every writer spells the query the same way.
 */
export function checkoutUrl(planId?: string, returnPath = '/payment-success'): string {
  if (!planId) return PAY;
  const back = new URL(returnPath, window.location.origin).toString();
  return `${PAY}/?plan=${encodeURIComponent(planId)}&return=${encodeURIComponent(back)}`;
}

export type PaymentProvider = { name: string; enabled: boolean };

export type CheckoutConfig = {
  brand: { displayName: string; legalName: string; termsUrl: string; privacyUrl: string };
  providers: PaymentProvider[];
};

/**
 * What the pay site will offer, read from commerce rather than assumed.
 *
 * The provider list is the deployment's, so a method this site advertises and a
 * method checkout accepts cannot disagree. Callers that only need a link do not
 * need this.
 */
export async function checkoutConfig(): Promise<CheckoutConfig> {
  const res = await fetch(`${COMMERCE}/org?org=${ORG}`);
  if (!res.ok) throw new Error(`commerce org config: ${res.status}`);
  return res.json();
}

/** Cents to a display string. */
export const formatCurrency = (amount: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100);

/**
 * The moment money changed hands. ONE event; the pack is a PROPERTY, never part
 * of the name.
 */
export const trackPurchaseSuccess = (orderId: string, products: unknown[], totalAmount: number) => {
  analytics.capture(
    EVENTS.ORDER_COMPLETED,
    { orderId, items: products },
    { revenue: totalAmount, currency: 'USD', quantity: products.length },
  );
};
