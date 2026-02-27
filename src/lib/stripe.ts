import { loadStripe } from '@stripe/stripe-js';
import { analytics } from '@/utils/analytics';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  'pk_live_51Qv57WJ03IK6WYmUum87SddG7ofxE9uACRSRUfsMSkfpeBCorljB0T99XV1D9OeYQsfVDBa19VwUmUik2cr4Osyw00DIPd0X92'
);

// API endpoint (will use relative URL in production)
const API_URL = import.meta.env.VITE_API_URL || '';

// Helper function to create a Stripe Checkout session via API
export const createCheckoutSession = async (
  priceId: string,
  quantity: number = 1,
  metadata?: any
) => {
  try {
    const response = await fetch(`${API_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        quantity,
        metadata,
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/cancel`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { sessionId, url } = await response.json();

    // Track checkout initiation
    analytics.trackBeginCheckout([{
      id: priceId,
      name: metadata?.productName || 'Credit Pack',
      category: 'credits',
      price: metadata?.price || 0,
      quantity: quantity
    }], metadata?.totalPrice || 0);

    // Redirect to Stripe Checkout
    if (url) {
      window.location.href = url;
    } else {
      // Fallback to client-side redirect
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) throw error;
    }
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
};

// Price IDs - Create these in your Stripe Dashboard
export const STRIPE_PRICE_IDS = {
  // Credit Packs (create these as one-time products in Stripe)
  STARTER_100_CREDITS: 'price_1QvKqDJ03IK6WYmUxGzK5DXg', // $100
  PROFESSIONAL_500_CREDITS: 'price_1QvKqWJ03IK6WYmUJX9PqvHM', // $450
  ENTERPRISE_2000_CREDITS: 'price_1QvKqiJ03IK6WYmU7vwMNGLC', // $1,500

  // Services (create these in Stripe)
  AGENCY_MONTHLY: 'price_1QvKr3J03IK6WYmUbCwK4LFp', // $9,999/month recurring
  INSTANT_SITE: 'price_1QvKrHJ03IK6WYmUYKq0Zx8n', // $500 one-time
  ENTERPRISE_MONTHLY: 'price_1QvKrZJ03IK6WYmUeNtP9Kx2', // $9,999/month recurring
};

// Plan configuration for agency checkout
const PLAN_CONFIG: Record<string, {
  priceId: string;
  mode: 'subscription' | 'payment';
  name: string;
  price: number;
  amount: number;
}> = {
  'agency': {
    priceId: STRIPE_PRICE_IDS.AGENCY_MONTHLY,
    mode: 'subscription' as const,
    name: 'Agency Service',
    price: 9999,
    amount: 999900,
  },
  'instant-site': {
    priceId: STRIPE_PRICE_IDS.INSTANT_SITE,
    mode: 'payment' as const,
    name: 'Instant Site',
    price: 500,
    amount: 50000,
  },
  'enterprise': {
    priceId: STRIPE_PRICE_IDS.ENTERPRISE_MONTHLY,
    mode: 'subscription' as const,
    name: 'Enterprise',
    price: 9999,
    amount: 999900,
  },
};

// --- Commerce API (Square, crypto, wire) ---

const COMMERCE_API = 'https://commerce.hanzo.ai/api/v1';

export type PaymentMethod = 'card' | 'crypto' | 'wire';

export type CommerceCheckoutResult =
  | { type: 'redirect'; url: string; sessionId: string }
  | { type: 'wire'; instructions: Record<string, unknown> };

export async function createCommerceCheckout(
  plan: string,
  options: { email: string; name: string; paymentMethod?: PaymentMethod }
): Promise<CommerceCheckoutResult> {
  const { email, name, paymentMethod = 'card' } = options;

  if (paymentMethod === 'wire') {
    const res = await fetch(`${COMMERCE_API}/checkout/wire/instructions?org=hanzo`);
    if (!res.ok) throw new Error(`Wire instructions request failed: ${res.status}`);
    const data = await res.json();
    return { type: 'wire' as const, instructions: data };
  }

  const config = PLAN_CONFIG[plan];
  const res = await fetch(`${COMMERCE_API}/checkout/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      org: 'hanzo',
      providerHint: paymentMethod === 'crypto' ? 'ethereum' : 'square',
      currency: 'USD',
      customer: { email, name },
      items: [{
        name: config?.name || plan,
        amount: config?.amount || 999900,
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

// Create a Stripe Checkout session for agency plans
export const createAgencyCheckout = async (
  plan: keyof typeof PLAN_CONFIG,
  customer: { email: string; name: string }
) => {
  const config = PLAN_CONFIG[plan];
  if (!config) throw new Error(`Unknown plan: ${plan}`);

  try {
    const successPath = plan === 'instant-site' ? '/instant-site-form' : '/onboarding-success';

    const response = await fetch(`${API_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan,
        priceId: config.priceId,
        mode: config.mode,
        quantity: 1,
        metadata: {
          plan,
          productName: config.name,
          email: customer.email,
          customerName: customer.name,
        },
        customerEmail: customer.email,
        successUrl: `${window.location.origin}${successPath}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/payment?plan=${plan}`,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Checkout session failed: ${errBody}`);
    }

    const { sessionId, url } = await response.json();

    // Track checkout initiation
    analytics.trackBeginCheckout([{
      id: config.priceId,
      name: config.name,
      category: 'agency_services',
      price: config.price,
      quantity: 1,
    }], config.price);

    // Redirect to Stripe Checkout
    if (url) {
      window.location.href = url;
    } else {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) throw error;
    }
  } catch (error) {
    console.error('Agency checkout error:', error);
    throw error;
  }
};

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
