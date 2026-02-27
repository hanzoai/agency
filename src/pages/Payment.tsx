import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Lock, Mail, Loader2 } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { createAgencyCheckout } from '@/lib/stripe';
import { useToast } from '@/hooks/use-toast';

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
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

    try {
      await createAgencyCheckout(plan, {
        email: formData.email,
        name: formData.name,
      });
    } catch (error) {
      console.error('Checkout error:', error);
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
                    Enter your details below. You'll be redirected to our secure payment provider to complete your purchase.
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || !formData.email || !formData.name}
                  className="w-full bg-white hover:bg-gray-100 text-black py-4 text-lg font-semibold rounded-lg transition-colors"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Redirecting to checkout...
                    </span>
                  ) : (
                    `Continue to Payment`
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Lock className="h-4 w-4" />
                  <span>Secure payment powered by Stripe</span>
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
