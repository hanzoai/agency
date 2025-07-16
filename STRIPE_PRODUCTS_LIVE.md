# Stripe Product Configuration

## Products Created in Stripe Dashboard

The following products have been created in your live Stripe account:

### Credit Packs (One-time payments)

1. **100 Credits - Starter Pack**
   - Price ID: `price_1QvKqDJ03IK6WYmUxGzK5DXg`
   - Amount: $100.00 USD
   - Type: One-time payment

2. **500 Credits - Professional Pack**
   - Price ID: `price_1QvKqWJ03IK6WYmUJX9PqvHM`
   - Amount: $450.00 USD
   - Type: One-time payment
   - Savings: $50 (10% off)

3. **2000 Credits - Enterprise Pack**
   - Price ID: `price_1QvKqiJ03IK6WYmU7vwMNGLC`
   - Amount: $1,500.00 USD
   - Type: One-time payment
   - Savings: $500 (25% off)

### Services

4. **Agency Service**
   - Price ID: `price_1QvKr3J03IK6WYmUbCwK4LFp`
   - Amount: $5,000.00 USD
   - Type: Monthly subscription

5. **Instant Site**
   - Price ID: `price_1QvKrHJ03IK6WYmUYKq0Zx8n`
   - Amount: $500.00 USD
   - Type: One-time payment

## Webhook Configuration

Your webhook endpoint has been configured in Stripe:
- Endpoint URL: `https://your-domain.vercel.app/api/stripe-webhook`
- Webhook Secret: `PURGED`

## Environment Variables for Vercel

Add these to your Vercel project settings:

```
STRIPE_SECRET_KEY=PURGED
STRIPE_WEBHOOK_SECRET=PURGED
```

## Analytics Events Tracked

- Page views
- Product selection
- Add to cart
- Checkout initiation
- Purchase completion
- User registration
- User login
- Form submissions

## Testing

To test the integration:
1. Go to `/purchase-credits`
2. Select a credit pack
3. Click "Continue to Payment"
4. Complete the Stripe checkout
5. You'll be redirected back to `/success`

## Security Notes

- Secret keys are only used in serverless functions
- All payment processing happens server-side
- Webhook signatures are verified
- Analytics track all key conversion events
