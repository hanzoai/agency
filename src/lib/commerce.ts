import { EVENTS } from '@hanzo/event';
import { analytics } from '@/analytics';
import { amount, planById } from '@/data/plans';

// --- Commerce API (Square, crypto, wire) ---

const COMMERCE_API = 'https://commerce.hanzo.ai/api/v1';

export type PaymentMethod = 'card' | 'crypto' | 'wire';

export type CommerceCheckoutResult =
  | { type: 'redirect'; url: string; sessionId: string }
  | { type: 'wire'; instructions: Record<string, unknown> };

export async function createCommerceCheckout(
  planId: string,
  options: { email: string; name: string; paymentMethod?: PaymentMethod }
): Promise<CommerceCheckoutResult> {
  const { email, name, paymentMethod = 'card' } = options;

  if (paymentMethod === 'wire') {
    const res = await fetch(`${COMMERCE_API}/checkout/wire/instructions?org=hanzo`);
    if (!res.ok) throw new Error(`Wire instructions request failed: ${res.status}`);
    const data = await res.json();
    return { type: 'wire' as const, instructions: data };
  }

  // Named plans only. An id outside the catalogue has no price, and a checkout
  // is the last place to invent one.
  const plan = planById(planId);
  if (!plan) throw new Error(`Unknown plan: ${planId}`);

  const res = await fetch(`${COMMERCE_API}/checkout/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      org: 'hanzo',
      providerHint: paymentMethod === 'crypto' ? 'ethereum' : 'square',
      currency: 'USD',
      customer: { email, name },
      items: [{
        name: plan.name,
        amount: amount(plan),
        quantity: 1,
      }],
      successUrl: `${window.location.origin}/onboarding-success`,
      cancelUrl: `${window.location.origin}/pricing`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Commerce checkout failed: ${body}`);
  }

  const data = await res.json();
  return { type: 'redirect' as const, url: data.checkoutUrl, sessionId: data.sessionId };
}

// Helper to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);
};

// Track successful purchase (to be called on success page). ONE event for the
// moment money changed hands — the pack is a PROPERTY, never part of the name.
export const trackPurchaseSuccess = (sessionId: string, products: any[], totalAmount: number) => {
  analytics.capture(
    EVENTS.ORDER_COMPLETED,
    { orderId: sessionId, items: products },
    { revenue: totalAmount, currency: 'USD', quantity: products.length },
  );
};
