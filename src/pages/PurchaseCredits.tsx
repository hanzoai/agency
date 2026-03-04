import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import {
  ArrowLeft,
  Check,
  Star,
  Zap,
  TrendingUp,
  Shield
} from 'lucide-react';
import { formatCurrency } from '@/lib/commerce';
import { useToast } from '@/hooks/use-toast';
import { analytics } from '@/utils/analytics';

const PurchaseCredits = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
      return;
    }

    // Track page view
    analytics.trackPageView('/purchase-credits', 'Purchase Credits');
  }, [navigate]);

  const creditPacks = [
    {
      id: 'starter',
      credits: 100,
      price: 100,
      perCredit: 1.00,
      icon: Zap,
      features: [
        '100 credits',
        '$1 per credit',
        'Perfect for trying services',
        'No expiration'
      ]
    },
    {
      id: 'professional',
      credits: 500,
      price: 450,
      perCredit: 0.90,
      savings: 50,
      icon: TrendingUp,
      features: [
        '500 credits',
        '$0.90 per credit',
        'Save $50 (10% off)',
        'Most popular choice'
      ]
    },
    {
      id: 'enterprise',
      credits: 2000,
      price: 1500,
      perCredit: 0.75,
      savings: 500,
      icon: Star,
      features: [
        '2,000 credits',
        '$0.75 per credit',
        'Save $500 (25% off)',
        'Best value for teams'
      ],
      badge: 'BEST DEAL'
    }
  ];

  const handlePackSelect = (packId: string) => {
    setSelectedPack(packId);
    const pack = creditPacks.find(p => p.id === packId);
    if (pack) {
      // Track product selection
      analytics.trackProductView({
        id: pack.id,
        name: `${pack.credits} Credits Pack`,
        category: 'credit_packs',
        price: pack.price
      });

      // Track add to cart
      analytics.trackAddToCart({
        id: pack.id,
        name: `${pack.credits} Credits Pack`,
        category: 'credit_packs',
        price: pack.price,
        quantity: 1
      });
    }
  };

  const handlePurchase = async () => {
    if (!selectedPack) return;

    setIsLoading(true);
    const pack = creditPacks.find(p => p.id === selectedPack);
    if (!pack) return;

    // Redirect to billing portal for credit purchases
    window.location.href = `https://billing.hanzo.ai?pack=${selectedPack}&quantity=${quantity}`;
    setIsLoading(false);
  };

  const selectedPackDetails = creditPacks.find(p => p.id === selectedPack);
  const totalPrice = selectedPackDetails ? selectedPackDetails.price * quantity : 0;
  const totalCredits = selectedPackDetails ? selectedPackDetails.credits * quantity : 0;

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Purchase Credits</h1>
            <p className="text-gray-400 text-lg">
              Choose a credit pack that fits your needs. 1 credit = $1 value.
            </p>
          </div>

          {/* Credit Packs */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {creditPacks.map((pack) => {
              const Icon = pack.icon;
              const isSelected = selectedPack === pack.id;

              return (
                <div
                  key={pack.id}
                  className={`relative bg-gray-900/30 border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-white'
                      : 'border-gray-800 hover:border-gray-600'
                  } ${pack.id === 'enterprise' ? 'md:scale-105' : ''}`}
                  onClick={() => handlePackSelect(pack.id)}
                >
                  {pack.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                      {pack.badge}
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-black" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {pack.credits.toLocaleString()} Credits
                  </h3>
                  <p className="text-3xl font-bold mb-1">
                    ${pack.price.toLocaleString()}
                  </p>
                  <p className="text-gray-400 text-sm mb-6">
                    ${pack.perCredit.toFixed(2)} per credit
                  </p>

                  {pack.savings && (
                    <div className="bg-green-900/30 border border-green-800 rounded-lg px-3 py-2 mb-4">
                      <p className="text-green-400 text-sm font-semibold">
                        Save ${pack.savings} ({Math.round((pack.savings / (pack.credits * 1)) * 100)}% off)
                      </p>
                    </div>
                  )}

                  <ul className="space-y-3">
                    {pack.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Quantity and Purchase */}
          {selectedPack && (
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Select Quantity</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 bg-gray-900/50 border border-gray-700 text-white text-center py-2 rounded-lg"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Buy multiple packs at once
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Credits</span>
                      <span className="font-semibold">{totalCredits.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Unit Price</span>
                      <span>${selectedPackDetails.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Quantity</span>
                      <span>×{quantity}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-800">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>${totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handlePurchase}
                    disabled={isLoading}
                    className="w-full bg-white hover:bg-gray-100 text-black py-3 text-lg font-semibold rounded-lg transition-colors mt-6"
                  >
                    {isLoading ? 'Redirecting to payment...' : 'Continue to Payment'}
                  </Button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment via Hanzo Billing</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PurchaseCredits;
