import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Lock, Mail, Loader2, CreditCard, Coins, Landmark } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { createAgencyCheckout } from '@/lib/stripe';
import { createCommerceCheckout, type PaymentMethod, type CommerceCheckoutResult } from '@/lib/stripe';
import { useToast } from '@/hooks/use-toast';

const PAYMENT_METHODS: { value: PaymentMethod; label: string; icon: React.ElementType; desc: string }[] = [
  { value: 'card', label: 'Card (Square)', icon: CreditCard, desc: 'Visa, Mastercard, Amex' },
  { value: 'crypto', label: 'Crypto', icon: Coins, desc: 'ETH, BTC, USDC' },
  { value: 'wire', label: 'Wire Transfer', icon: Landmark, desc: 'Bank wire (ACH / SWIFT)' },
];

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [wireInstructions, setWireInstructions] = useState<Record<string, unknown> | null>(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const plan = (searchParams.get('plan') || 'agency') as 'agency' | 'instant-site' | 'enterprise';
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
  });

  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    setIsLoading(true);
    setWireInstructions(null);

    try {
      const result: CommerceCheckoutResult = await createCommerceCheckout(plan, {
        email: formData.email,
        name: formData.name,
        paymentMethod,
      });

      if (result.type === 'wire') {
        setWireInstructions(result.instructions);
        setIsLoading(false);
      } else if (result.type === 'redirect') {
        window.location.href = result.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      // Fall back to legacy Stripe checkout for card payments
      if (paymentMethod === 'card') {
        try {
          await createAgencyCheckout(plan, {
            email: formData.email,
            name: formData.name,
          });
          return; // Stripe will redirect
        } catch (fallbackError) {
          console.error('Stripe fallback error:', fallbackError);
        }
      }
      toast({
        title: 'Checkout Failed',
        description: 'Unable to start checkout. Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  const getPlanDetails = () => {
    if (plan === 'instant-site') {
      return {
        name: 'Instant Site',
        price: 500,
        recurring: false,
        description: '3-page website in 24 hours',
        features: [
          'Custom-built 3-page website',
          'Up to 10 premium images',
          '24-hour turnaround',
          '1 design revision',
          'Lifetime ownership',
        ],
      };
    }

    if (plan === 'enterprise') {
      return {
        name: 'Enterprise',
        price: 9999,
        recurring: true,
        description: 'Dedicated team, priority everything',
        features: [
          'Everything in Agency Service, plus:',
          'Dedicated full-stack team (4+ creatives)',
          'Unlimited custom AI agents',
          '240+ hours dedicated per month',
          'Same-day priority turnaround',
          'Video production (up to 4/month)',
          '3D, AR, and immersive design',
          'AI consulting & marketing strategy',
        ],
      };
    }

    return {
      name: 'Agency Service',
      price: 9999,
      recurring: true,
      description: 'Full-service creative agency',
      features: [
        'Dedicated Creative Director',
        'Dedicated Project Manager',
        '120 hours per month',
        'Unlimited revisions',
        'Full copyright ownership',
      ],
    };
  };

  const planDetails = getPlanDetails();

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handlePayment} className="space-y-8">
                {/* Contact Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get Started</h2>
                  <p className="text-sm text-gray-400 mb-6">
                    Enter your details below and choose your preferred payment method.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm text-gray-300 mb-1 block">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-gray-900/50 border-gray-800 text-white px-4 py-3 rounded-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm text-gray-300 mb-1 block">Email</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-gray-900/50 border-gray-800 text-white pl-4 pr-10 py-3 rounded-lg"
                        />
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <Link to="/login" className="text-white hover:text-gray-300 text-sm">
                      Already have an account? Log in
                    </Link>
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div>
                  <Label className="text-sm text-gray-300 mb-3 block">Payment Method</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {PAYMENT_METHODS.map((method) => {
                      const Icon = method.icon;
                      const selected = paymentMethod === method.value;
                      return (
                        <button
                          key={method.value}
                          type="button"
                          onClick={() => { setPaymentMethod(method.value); setWireInstructions(null); }}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-colors ${
                            selected
                              ? 'border-white bg-white/10 text-white'
                              : 'border-gray-800 bg-gray-900/30 text-gray-400 hover:border-gray-600'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-sm font-medium">{method.label}</span>
                          <span className="text-xs text-gray-500">{method.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Wire Instructions (shown after submit when wire selected) */}
                {wireInstructions && (
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 space-y-3">
                    <h3 className="text-lg font-semibold mb-4">Wire Transfer Instructions</h3>
                    {wireInstructions.bankName && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Bank</span>
                        <span className="font-mono">{String(wireInstructions.bankName)}</span>
                      </div>
                    )}
                    {wireInstructions.routingNumber && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Routing Number</span>
                        <span className="font-mono">{String(wireInstructions.routingNumber)}</span>
                      </div>
                    )}
                    {wireInstructions.accountNumber && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Account Number</span>
                        <span className="font-mono">{String(wireInstructions.accountNumber)}</span>
                      </div>
                    )}
                    {wireInstructions.swift && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">SWIFT</span>
                        <span className="font-mono">{String(wireInstructions.swift)}</span>
                      </div>
                    )}
                    {wireInstructions.reference && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Reference</span>
                        <span className="font-mono">{String(wireInstructions.reference)}</span>
                      </div>
                    )}
                    {wireInstructions.beneficiary && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Beneficiary</span>
                        <span className="font-mono">{String(wireInstructions.beneficiary)}</span>
                      </div>
                    )}
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400 mb-4">
                        Please include the reference code above in your wire transfer memo.
                        We will confirm receipt within 1-2 business days.
                      </p>
                      <Link
                        to="/onboarding-success"
                        className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium bg-white text-black hover:bg-gray-100 transition-colors"
                      >
                        I've sent the wire
                      </Link>
                    </div>
                  </div>
                )}

                {/* Submit Button (hidden when wire instructions are showing) */}
                {!wireInstructions && (
                  <Button
                    type="submit"
                    disabled={isLoading || !formData.email || !formData.name}
                    className="w-full bg-white hover:bg-gray-100 text-black py-4 text-lg font-semibold rounded-lg transition-colors"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {paymentMethod === 'wire' ? 'Fetching wire instructions...' : 'Redirecting to checkout...'}
                      </span>
                    ) : (
                      paymentMethod === 'wire' ? 'Get Wire Instructions' : 'Continue to Payment'
                    )}
                  </Button>
                )}

                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Lock className="h-4 w-4" />
                  <span>Secure payment via Hanzo Commerce</span>
                </div>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 lg:sticky lg:top-32">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                {/* Product Item */}
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-800">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">H</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{planDetails.name}</h3>
                    <p className="text-sm text-gray-400">{planDetails.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${planDetails.price.toLocaleString()}</p>
                    {planDetails.recurring && <p className="text-sm text-gray-400">/month</p>}
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${planDetails.price.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-800">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="flex items-center">
                        <span className="text-sm text-gray-400 mr-2">USD</span>
                        ${planDetails.price.toLocaleString()}
                      </span>
                    </div>
                    {planDetails.recurring && (
                      <p className="text-sm text-gray-400 text-right mt-1">
                        Billed monthly
                      </p>
                    )}
                  </div>
                </div>

                {/* What's Included */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">What's included:</h3>
                  <ul className="space-y-3">
                    {planDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security Note */}
                <div className="mt-8 p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is encrypted and secure</span>
                  </div>
                </div>
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
