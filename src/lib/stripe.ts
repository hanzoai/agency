import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 
  'pk_live_51Qv57WJ03IK6WYmUum87SddG7ofxE9uACRSRUfsMSkfpeBCorljB0T99XV1D9OeYQsfVDBa19VwUmUik2cr4Osyw00DIPd0X92'
);

// Helper function to create a Stripe Checkout session
// Note: In production, you should create sessions on your backend
export const redirectToCheckout = async (
  priceId: string,
  quantity: number = 1,
  successUrl?: string,
  cancelUrl?: string
) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to load');

    // For now, we'll use a simple checkout with predefined prices
    // You'll need to create these prices in your Stripe Dashboard
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity }],
      mode: 'payment',
      successUrl: successUrl || `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: cancelUrl || `${window.location.origin}/cancel`,
      billingAddressCollection: 'required',
    });

    if (error) {
      console.error('Stripe checkout error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Failed to redirect to checkout:', error);
    throw error;
  }
};

// Price IDs - You need to create these in your Stripe Dashboard
// Go to https://dashboard.stripe.com/products and create products with these prices
export const STRIPE_PRICE_IDS = {
  // Credit Packs
  STARTER_100_CREDITS: 'price_starter_100', // Create a $100 one-time price
  PROFESSIONAL_500_CREDITS: 'price_professional_500', // Create a $450 one-time price
  ENTERPRISE_2000_CREDITS: 'price_enterprise_2000', // Create a $1,500 one-time price
  
  // Services
  AGENCY_MONTHLY: 'price_agency_monthly', // Create a $5,000/month recurring price
  INSTANT_SITE: 'price_instant_site', // Create a $500 one-time price
};

// Helper to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);
};
