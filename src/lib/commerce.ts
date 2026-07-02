import { analytics } from '@/utils/analytics';

// --- Checkout via the server-side BFF ---
//
// The browser NEVER talks to commerce directly and NEVER holds a token. It
// POSTs the plan + buyer details to this app's OWN server (same origin,
// /v1/checkout); that Go BFF authenticates to commerce with a per-org Published
// storefront token it holds from KMS and mints the Square Payment Link. Org,
// item prices, and the success/cancel redirect are all server-authoritative —
// the client can only name a plan. This closes the P0 anonymous-mint hole while
// keeping the onboarding checkout working end-to-end.

const CHECKOUT_BFF = '/v1/checkout';

export type PaymentMethod = 'card' | 'crypto' | 'wire';

export type CommerceCheckoutResult =
  | { type: 'redirect'; url: string; sessionId: string }
  | { type: 'wire'; instructions: Record<string, unknown> };

export async function createCommerceCheckout(
  plan: string,
  options: { email: string; name: string; paymentMethod?: PaymentMethod }
): Promise<CommerceCheckoutResult> {
  const { email, name, paymentMethod = 'card' } = options;

  const res = await fetch(CHECKOUT_BFF, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan, email, name, paymentMethod }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Checkout failed: ${body}`);
  }

  const data = await res.json();
  if (data.type === 'wire') {
    return { type: 'wire' as const, instructions: data.instructions };
  }
  return { type: 'redirect' as const, url: data.url, sessionId: data.sessionId };
}

// Helper to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);
};

// Track successful purchase (to be called on success page)
export const trackPurchaseSuccess = (sessionId: string, products: any[], totalAmount: number) => {
  analytics.trackPurchase(sessionId, products, totalAmount);
};
