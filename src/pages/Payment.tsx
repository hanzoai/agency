import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Lock } from 'lucide-react';
import { buttonModifiers } from '@/lib/button-utils';
import { useLocation } from 'react-router-dom';

// This would be replaced with your actual publishable key from Stripe
const STRIPE_PUBLISHABLE_KEY = 'pk_test_replace_with_your_actual_key';

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get('plan') || 'agency';
  
  useEffect(() => {
    // Set dark theme
    document.body.classList.add('dark');
    
    // Load Stripe.js script
    const loadStripe = () => {
      if (!document.getElementById('stripe-js')) {
        const script = document.createElement('script');
        script.id = 'stripe-js';
        script.src = 'https://js.stripe.com/v3/';
        script.async = true;
        document.body.appendChild(script);
      }
    };
    
    loadStripe();
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);
  
  const handlePayment = () => {
    setIsLoading(true);
    
    // In a real implementation, you'd typically:
    // 1. Call your backend to create a Checkout Session
    // 2. Redirect to Stripe Checkout with the session ID
    setTimeout(() => {
      // Simulate redirect to Stripe checkout
      window.location.href = `https://checkout.stripe.com/c/pay/cs_test_replace_with_actual_checkout_session_id`;
    }, 1000);
  };
  
  const getPlanDetails = () => {
    // Default to agency plan
    return {
      name: 'Agency Service',
      price: '$5,000',
      billing: 'per month',
      features: [
        'Dedicated Creative Director',
        'Dedicated Project Manager',
        '2 specialized creatives simultaneously',
        '120 hours dedicated per month',
        '2 custom brand-trained AI agents',
        '24-hour turnaround for basic requests',
        'Access to 100+ creative services',
        'Full copyright ownership',
        'Unlimited revisions & requests',
        '4 hours of consultation per month'
      ]
    };
  };
  
  const planDetails = getPlanDetails();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Your Subscription</h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              You're just one step away from accessing our full-service creative agency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background/5 p-6 rounded-lg border border-border/20">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="mb-6 pb-6 border-b border-border/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{planDetails.name}</span>
                  <span className="font-medium">{planDetails.price}</span>
                </div>
                <div className="text-sm text-foreground/70">
                  Billed monthly • Cancel anytime after 3 months
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">What's included:</h3>
                <ul className="space-y-2">
                  {planDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-sm text-foreground/70">
                <p className="mb-2">
                  Your subscription begins immediately. You'll be charged upon completion of this payment process.
                </p>
                <p>
                  By subscribing, you agree to our <a href="/terms" className="text-accent hover:underline">Terms of Service</a> and <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
            
            <div className="bg-background/5 p-6 rounded-lg border border-border/20">
              <h2 className="text-xl font-bold mb-4">Payment Details</h2>
              
              <p className="flex items-center gap-2 text-sm text-foreground/70 mb-6">
                <Lock className="h-4 w-4" />
                <span>Your payment details are securely processed by Stripe</span>
              </p>
              
              <Button
                onClick={handlePayment}
                disabled={isLoading}
                className={`${buttonModifiers.interactive} w-full justify-center text-lg py-6 mt-6`}
              >
                {isLoading ? 'Processing...' : 'Proceed to Payment'}
                {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
              
              <div className="flex items-center justify-center gap-4 mt-6">
                <img src="/images/graphics/stripe-logo.svg" alt="Stripe" className="h-6" />
                <img src="/images/graphics/visa.svg" alt="Visa" className="h-5" />
                <img src="/images/graphics/mastercard.svg" alt="Mastercard" className="h-5" />
                <img src="/images/graphics/amex.svg" alt="American Express" className="h-5" />
              </div>
              
              <div className="text-center mt-6 text-sm text-foreground/70">
                <p>Need help? <a href="/contact" className="text-accent hover:underline">Contact our team</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Payment;