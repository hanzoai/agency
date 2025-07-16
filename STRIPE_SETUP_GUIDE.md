# Stripe Integration Setup Guide

## ⚠️ CRITICAL SECURITY WARNING ⚠️

**NEVER expose your Secret Key (`sk_live_...`) in frontend code!** It should only be used on your backend server.

## Current Implementation Status

This is a **client-side only** implementation using Stripe Checkout. It works for simple one-time payments but has limitations.

## Setup Steps

### 1. Create Products in Stripe Dashboard

Go to [https://dashboard.stripe.com/products](https://dashboard.stripe.com/products) and create the following products:

#### Credit Packs (One-time payments):
1. **Starter Pack - 100 Credits**
   - Price: $100.00
   - Price ID: `price_starter_100` (or note the auto-generated ID)

2. **Professional Pack - 500 Credits**
   - Price: $450.00
   - Price ID: `price_professional_500`

3. **Enterprise Pack - 2000 Credits**
   - Price: $1,500.00
   - Price ID: `price_enterprise_2000`

#### Services:
4. **Agency Service** (Recurring monthly)
   - Price: $5,000.00/month
   - Price ID: `price_agency_monthly`

5. **Instant Site** (One-time)
   - Price: $500.00
   - Price ID: `price_instant_site`

### 2. Update Price IDs in Code

Edit `/src/lib/stripe.ts` and replace the price IDs:

```typescript
export const STRIPE_PRICE_IDS = {
  STARTER_100_CREDITS: 'price_xxxxx', // Your actual price ID
  PROFESSIONAL_500_CREDITS: 'price_xxxxx',
  ENTERPRISE_2000_CREDITS: 'price_xxxxx',
  AGENCY_MONTHLY: 'price_xxxxx',
  INSTANT_SITE: 'price_xxxxx',
};
```

### 3. Environment Variables

The `.env.local` file has been created with your publishable key. This is safe for frontend use.

### 4. Install Dependencies

Due to Node.js version constraints, you need Node.js 18+ to install Stripe packages.

## Current Limitations

1. **No Backend Verification** - Payments are processed but not verified server-side
2. **No Webhooks** - Can't automatically update credits when payment is confirmed
3. **Local Storage Only** - Credits are stored in browser, not a database
4. **No Customer Management** - Can't track customers or payment history properly
5. **No Subscription Management** - Can't handle recurring payments properly

## Production Requirements

For a production-ready system, you need:

1. **Backend Server** (Node.js, Python, etc.) to:
   - Create checkout sessions securely
   - Handle webhooks from Stripe
   - Verify payments
   - Update user credits in a database

2. **Database** to store:
   - User accounts
   - Credit balances
   - Purchase history
   - Customer IDs

3. **Webhook Endpoint** to:
   - Listen for `checkout.session.completed` events
   - Update credits when payment is confirmed
   - Handle failed payments

4. **Security Measures**:
   - Never expose secret keys
   - Validate all payments server-side
   - Use HTTPS for all requests

## Testing

1. Use test mode first with test keys
2. Test cards: `4242 4242 4242 4242`
3. Switch to live mode when ready

## Next Steps

1. Set up a backend server (e.g., Node.js with Express)
2. Move checkout session creation to backend
3. Implement webhook handling
4. Set up a proper database
5. Add customer portal for subscription management

## Support

- [Stripe Checkout Docs](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Security Best Practices](https://stripe.com/docs/security)
