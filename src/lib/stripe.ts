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
  AGENCY_MONTHLY: 'price_1QvKr3J03IK6WYmUbCwK4LFp', // $5,000/month recurring
  INSTANT_SITE: 'price_1QvKrHJ03IK6WYmUYKq0Zx8n', // $500 one-time
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
