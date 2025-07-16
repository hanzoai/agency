import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
// For production, use environment variables
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here';

// Initialize Stripe
export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

// Stripe configuration
export const STRIPE_CONFIG = {
  // Product/Price IDs for different credit packs
  creditPacks: {
    starter: {
      priceId: import.meta.env.VITE_STRIPE_STARTER_PRICE_ID || 'price_starter_test',
      productId: 'prod_starter_test'
    },
    professional: {
      priceId: import.meta.env.VITE_STRIPE_PROFESSIONAL_PRICE_ID || 'price_professional_test',
      productId: 'prod_professional_test'
    },
    enterprise: {
      priceId: import.meta.env.VITE_STRIPE_ENTERPRISE_PRICE_ID || 'price_enterprise_test',
      productId: 'prod_enterprise_test'
    }
  },
  
  // Service plan price IDs
  services: {
    agency: {
      priceId: import.meta.env.VITE_STRIPE_AGENCY_PRICE_ID || 'price_agency_test',
      productId: 'prod_agency_test'
    },
    instantSite: {
      priceId: import.meta.env.VITE_STRIPE_INSTANT_SITE_PRICE_ID || 'price_instant_site_test',
      productId: 'prod_instant_site_test'
    }
  },
  
  // Stripe checkout configuration
  checkoutConfig: {
    mode: 'payment' as const, // 'payment' for one-time, 'subscription' for recurring
    successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}/cancel`,
    billingAddressCollection: 'required' as const,
  }
};

// Helper function to create checkout session
export const createCheckoutSession = async (priceId: string, quantity: number = 1, metadata?: any) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe not loaded');

    // In a real app, this would call your backend API
    // For now, we'll use Stripe's client-side checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity }],
      mode: STRIPE_CONFIG.checkoutConfig.mode,
      successUrl: STRIPE_CONFIG.checkoutConfig.successUrl,
      cancelUrl: STRIPE_CONFIG.checkoutConfig.cancelUrl,
      billingAddressCollection: STRIPE_CONFIG.checkoutConfig.billingAddressCollection,
    });

    if (error) {
      console.error('Stripe checkout error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Failed to create checkout session:', error);
    throw error;
  }
};

// Helper function to format price
export const formatPrice = (amount: number, currency: string = 'usd'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100);
};
