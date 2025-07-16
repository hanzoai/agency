import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Shield, Tag } from 'lucide-react';

interface InstantSiteCheckoutProps {
  formData: any;
  onSubmit: (paymentData: any) => void;
}

const InstantSiteCheckout = ({ formData, onSubmit }: InstantSiteCheckoutProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentRequired, setPaymentRequired] = useState(true);

  const basePrice = 650; // $650 for instant site
  const [finalPrice, setFinalPrice] = useState(basePrice);

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    billingZip: ''
  });

  const handleDiscountApply = () => {
    const code = discountCode.trim().toLowerCase();
    
    if (code === 'testtest') {
      setDiscountApplied(true);
      setFinalPrice(0);
      setPaymentRequired(false);
      toast({
        title: "Test discount applied!",
        description: "Payment information is not required for testing.",
      });
    } else if (code) {
      toast({
        title: "Invalid discount code",
        description: "Please check your code and try again.",
        variant: "destructive"
      });
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validatePayment = () => {
    if (!paymentRequired) return true;

    if (!paymentData.cardNumber || !paymentData.cardName || 
        !paymentData.expiryMonth || !paymentData.expiryYear || 
        !paymentData.cvv || !paymentData.billingZip) {
      toast({
        title: "Missing information",
        description: "Please fill in all payment fields.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePayment()) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const submissionData = {
        ...formData,
        payment: paymentRequired ? paymentData : { testMode: true, discountCode },
        totalAmount: finalPrice
      };

      onSubmit(submissionData);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <CreditCard className="text-blue-400 mr-2" /> Payment Information
      </h2>

      {/* Pricing Summary */}
      <div className="mb-6 p-4 bg-black/50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span>Instant Site Package</span>
          <span>${basePrice}</span>
        </div>
        {discountApplied && (
          <div className="flex justify-between items-center text-green-500 mb-2">
            <span>Test Discount</span>
            <span>-${basePrice}</span>
          </div>
        )}
        <div className="border-t border-gray-700 pt-2 mt-2">
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span>${finalPrice}</span>
          </div>
        </div>
      </div>

      {/* Discount Code */}
      <div className="mb-6">
        <Label htmlFor="discountCode">Discount Code (Optional)</Label>
        <div className="flex gap-2 mt-2">
          <Input
            id="discountCode"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Enter discount code"
            className="bg-black/50 border-gray-700 text-white"
            disabled={discountApplied}
          />
          <Button
            type="button"
            onClick={handleDiscountApply}
            disabled={discountApplied || !discountCode}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            <Tag className="w-4 h-4 mr-1" />
            Apply
          </Button>
        </div>
        {discountApplied && (
          <p className="text-green-500 text-sm mt-2">
            Test mode activated - no payment required
          </p>
        )}
      </div>

      {/* Payment Fields */}
      {paymentRequired && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="cardName">Cardholder Name *</Label>
            <Input
              id="cardName"
              name="cardName"
              required={paymentRequired}
              value={paymentData.cardName}
              onChange={handlePaymentChange}
              className="bg-black/50 border-gray-700 text-white"
            />
          </div>

          <div>
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              required={paymentRequired}
              placeholder="1234 5678 9012 3456"
              value={paymentData.cardNumber}
              onChange={handlePaymentChange}
              className="bg-black/50 border-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="expiryMonth">Month *</Label>
              <Input
                id="expiryMonth"
                name="expiryMonth"
                required={paymentRequired}
                placeholder="MM"
                maxLength={2}
                value={paymentData.expiryMonth}
                onChange={handlePaymentChange}
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="expiryYear">Year *</Label>
              <Input
                id="expiryYear"
                name="expiryYear"
                required={paymentRequired}
                placeholder="YY"
                maxLength={2}
                value={paymentData.expiryYear}
                onChange={handlePaymentChange}
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV *</Label>
              <Input
                id="cvv"
                name="cvv"
                required={paymentRequired}
                placeholder="123"
                maxLength={4}
                value={paymentData.cvv}
                onChange={handlePaymentChange}
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billingZip">Billing ZIP Code *</Label>
            <Input
              id="billingZip"
              name="billingZip"
              required={paymentRequired}
              value={paymentData.billingZip}
              onChange={handlePaymentChange}
              className="bg-black/50 border-gray-700 text-white"
            />
          </div>

          {/* Security Note */}
          <div className="mt-6 flex items-center text-sm text-gray-400">
            <Shield className="w-4 h-4 mr-2" />
            Your payment information is secure and encrypted
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold rounded-full"
            >
              {isProcessing ? 'Processing...' : `Complete Order - $${finalPrice}`}
            </Button>
          </div>
        </form>
      )}

      {/* Test Mode Submit Button */}
      {!paymentRequired && (
        <div className="mt-8">
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isProcessing}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold rounded-full"
          >
            {isProcessing ? 'Processing...' : 'Complete Order (Test Mode)'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default InstantSiteCheckout;
