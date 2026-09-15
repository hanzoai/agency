import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Shield, Tag, Coins, Landmark, ArrowRight, Lock } from 'lucide-react';
import { checkoutUrl } from '@/lib/commerce';

interface InstantSiteCheckoutProps {
  formData: any;
  onSubmit: (paymentData: any) => void;
}

const InstantSiteCheckout = ({ formData, onSubmit }: InstantSiteCheckoutProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const basePrice = 500; // $500 canonical Instant Site
  const [finalPrice, setFinalPrice] = useState(basePrice);

  const handleDiscountApply = () => {
    const code = discountCode.trim().toLowerCase();
    
    if (code === 'testtest') {
      setDiscountApplied(true);
      setFinalPrice(0);
      toast({
        title: "Test discount applied!",
        description: "Test mode activated - no payment required for testing.",
      });
    } else if (code) {
      toast({
        title: "Invalid discount code",
        description: "Please check your code and try again.",
        variant: "destructive"
      });
    }
  };

  const handleProceedToPayment = () => {
    if (discountApplied) {
      onSubmit({ ...formData, payment: { testMode: true, discountCode }, totalAmount: 0 });
      return;
    }
    setIsProcessing(true);
    // Save pending form data locally so return page can recover it
    try {
      localStorage.setItem('pendingInstantSiteBrief', JSON.stringify(formData));
    } catch {
      // ignore
    }
    // Route to Hanzo Commerce on pay.hanzo.ai
    window.location.href = checkoutUrl('instant-site', '/instant-site-success');
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <CreditCard className="text-white mr-3" /> Secure Checkout
      </h2>

      {/* Pricing Summary */}
      <div className="mb-6 p-5 bg-black/60 rounded-xl border border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300">Instant Site Package</span>
          <span className="font-semibold">${basePrice}</span>
        </div>
        {discountApplied && (
          <div className="flex justify-between items-center text-green-400 mb-2">
            <span>Test Discount</span>
            <span>-${basePrice}</span>
          </div>
        )}
        <div className="border-t border-gray-800 pt-3 mt-3">
          <div className="flex justify-between items-center font-bold text-xl">
            <span>Total Due</span>
            <span className="text-white">${finalPrice}</span>
          </div>
        </div>
      </div>

      {/* Discount Code */}
      <div className="mb-6">
        <Label htmlFor="discountCode" className="text-gray-300 text-sm">Discount Code</Label>
        <div className="flex gap-2 mt-2">
          <Input
            id="discountCode"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Promo code"
            className="bg-black/50 border-gray-700 text-white"
            disabled={discountApplied}
          />
          <Button
            type="button"
            onClick={handleDiscountApply}
            disabled={discountApplied || !discountCode}
            className="bg-white hover:bg-gray-100 text-black px-6 font-medium"
          >
            <Tag className="w-4 h-4 mr-1" />
            Apply
          </Button>
        </div>
        {discountApplied && (
          <p className="text-green-400 text-sm mt-2">
            Test mode activated — no payment required
          </p>
        )}
      </div>

      {/* Payment Rails Accepted */}
      {!discountApplied && (
        <div className="mb-8 space-y-3">
          <p className="text-sm text-gray-400">Accepted payment methods via Hanzo Commerce:</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-black/40 border border-gray-800 rounded-lg flex flex-col items-center justify-center text-center">
              <CreditCard className="w-5 h-5 text-gray-300 mb-1" />
              <span className="text-xs text-gray-300 font-medium">Card (Square)</span>
            </div>
            <div className="p-3 bg-black/40 border border-gray-800 rounded-lg flex flex-col items-center justify-center text-center">
              <Coins className="w-5 h-5 text-gray-300 mb-1" />
              <span className="text-xs text-gray-300 font-medium">Crypto</span>
            </div>
            <div className="p-3 bg-black/40 border border-gray-800 rounded-lg flex flex-col items-center justify-center text-center">
              <Landmark className="w-5 h-5 text-gray-300 mb-1" />
              <span className="text-xs text-gray-300 font-medium">Bank Wire</span>
            </div>
          </div>
        </div>
      )}

      {/* Security Note */}
      <div className="mb-6 flex items-center text-xs text-gray-400 bg-gray-900/80 p-3 rounded-lg border border-gray-800">
        <Lock className="w-4 h-4 mr-2 text-gray-300 flex-shrink-0" />
        <span>Payments are processed securely via Hanzo Commerce at <strong>pay.hanzo.ai</strong> with Square sandbox/production encryption.</span>
      </div>

      {/* Submit Button */}
      <Button
        type="button"
        onClick={handleProceedToPayment}
        disabled={isProcessing}
        className="w-full bg-white hover:bg-gray-100 text-black py-4 text-base font-semibold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg"
      >
        {isProcessing ? (
          'Redirecting to checkout...'
        ) : discountApplied ? (
          'Complete Order (Test Mode)'
        ) : (
          <>
            Continue to Payment (${finalPrice})
            <ArrowRight className="w-5 h-5 ml-1" />
          </>
        )}
      </Button>
    </div>
  );
};

export default InstantSiteCheckout;
