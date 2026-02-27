import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'PURGED', {
  apiVersion: '2023-10-16',
});

// Plan-to-price mapping (server-side source of truth)
const PLAN_PRICES: Record<string, { priceId: string; mode: 'payment' | 'subscription' }> = {
  'agency': {
    priceId: 'price_1QvKr3J03IK6WYmUbCwK4LFp',
    mode: 'subscription',
  },
  'instant-site': {
    priceId: 'price_1QvKrHJ03IK6WYmUYKq0Zx8n',
    mode: 'payment',
  },
  'enterprise': {
    priceId: 'price_1QvKrZJ03IK6WYmUeNtP9Kx2',
    mode: 'subscription',
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).json({});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { plan, priceId, mode, quantity, successUrl, cancelUrl, metadata, customerEmail } = req.body;

    // Determine price ID and mode from plan name or explicit params
    let resolvedPriceId = priceId;
    let resolvedMode: 'payment' | 'subscription' = mode || 'payment';

    if (plan && PLAN_PRICES[plan]) {
      resolvedPriceId = PLAN_PRICES[plan].priceId;
      resolvedMode = PLAN_PRICES[plan].mode;
    }

    if (!resolvedPriceId) {
      return res.status(400).json({ error: 'Missing priceId or valid plan name' });
    }

    // Build session params
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: [{
        price: resolvedPriceId,
        quantity: quantity || 1,
      }],
      mode: resolvedMode,
      success_url: successUrl || `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.origin}/cancel`,
      metadata: metadata || {},
      billing_address_collection: 'required',
    };

    // Attach customer email if provided
    if (customerEmail || metadata?.email) {
      sessionParams.customer_email = customerEmail || metadata.email;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: error.message });
  }
}
