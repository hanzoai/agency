# Stripe Payment Integration

This guide explains how to set up and use the Stripe payment integration for the Hanzo Agency website.

## Setup Instructions

### 1. Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com) and create an account
2. Once logged in, navigate to the [Stripe Dashboard](https://dashboard.stripe.com)

### 2. Get Your API Keys

1. In the Stripe Dashboard, go to **Developers** > **API keys**
2. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
3. Keep your **Secret key** safe (you'll need it for backend integration)

### 3. Create Products and Prices

In the Stripe Dashboard, go to **Products** and create the following:

#### Credit Packs:

1. **Starter Pack**
   - Name: "100 Credits - Starter Pack"
   - Price: $100.00 (one-time)
   - Copy the price ID (starts with `price_`)

2. **Professional Pack**
   - Name: "500 Credits - Professional Pack"
   - Price: $450.00 (one-time)
   - Copy the price ID

3. **Enterprise Pack**
   - Name: "2000 Credits - Enterprise Pack"
   - Price: $1,500.00 (one-time)
   - Copy the price ID

#### Services:

1. **Agency Service**
   - Name: "Full-Service Creative Agency"
   - Price: $5,000.00/month (recurring)
   - Copy the price ID

2. **Instant Site**
   - Name: "Instant Site - 24hr Delivery"
   - Price: $500.00 (one-time)
   - Copy the price ID

### 4. Configure Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`)
2. Add your Stripe configuration:

```env
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here

# Credit Pack Price IDs
VITE_STRIPE_STARTER_PRICE_ID=price_xxxxx
VITE_STRIPE_PROFESSIONAL_PRICE_ID=price_xxxxx
VITE_STRIPE_ENTERPRISE_PRICE_ID=price_xxxxx

# Service Price IDs
VITE_STRIPE_AGENCY_PRICE_ID=price_xxxxx
VITE_STRIPE_INSTANT_SITE_PRICE_ID=price_xxxxx
```

### 5. Install Dependencies

```bash
npm install
# or
pnpm install
```

## Testing the Integration

### Test Credit Cards

Use these test card numbers in test mode:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires Authentication**: 4000 0025 0000 3155

Use any future date for expiry and any 3 digits for CVC.

### Testing Flow

1. Go to `/login` and create a test account
2. Navigate to `/dashboard`
3. Click "Purchase Credits"
4. Select a credit pack and quantity
5. Click "Continue to Payment"
6. You'll be redirected to Stripe Checkout
7. Use a test card to complete payment
8. You'll be redirected back to `/success` or `/cancel`

## Current Implementation

### Client-Side Only
The current implementation uses Stripe's client-side checkout, which is suitable for:
- Simple payment flows
- Fixed-price products
- Public pricing

### Limitations
- No server-side validation
- Credits are managed in localStorage (not secure for production)
- No webhook handling for payment confirmation
- No customer management

## Production Recommendations

For production use, you should:

1. **Add Backend API**
   - Create checkout sessions server-side
   - Validate payments with webhooks
   - Store credits in a database
   - Manage customer records

2. **Security Improvements**
   - Never expose secret keys
   - Validate all payments server-side
   - Use webhooks to confirm payments
   - Implement proper authentication

3. **Enhanced Features**
   - Customer portal for managing subscriptions
   - Invoice generation
   - Email receipts
   - Refund handling

## File Structure

```
src/
├── lib/
│   └── stripe.ts          # Stripe configuration and helpers
├── pages/
│   ├── PurchaseCredits.tsx # Credit purchase page
│   ├── PaymentSuccess.tsx  # Success redirect page
│   ├── PaymentCancel.tsx   # Cancel redirect page
│   └── Payment.tsx         # General payment page
└── App.tsx                 # Routes configuration
```

## Troubleshooting

### "Stripe not loaded" error
- Check that your publishable key is correct
- Ensure you're using the correct environment (test/live)

### Payment fails
- Check the browser console for errors
- Verify price IDs are correct
- Ensure products are active in Stripe Dashboard

### Success page shows error
- This demo uses localStorage, so make sure it's not blocked
- In production, implement proper backend validation

## Next Steps

1. Set up a backend server (Node.js, Python, etc.)
2. Implement Stripe webhooks
3. Create a database for user and credit management
4. Add customer portal integration
5. Implement subscription management for agency services

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)
- [API Reference](https://stripe.com/docs/api)
