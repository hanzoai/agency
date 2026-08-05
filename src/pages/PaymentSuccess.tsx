import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { trackPurchaseSuccess } from '@/lib/commerce';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState<any>(null);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const processPayment = async () => {
      if (!sessionId) {
        setError(true);
        setIsProcessing(false);
        return;
      }

      try {
        // Get stored purchase details
        const pendingPurchase = localStorage.getItem('pendingPurchase');
        if (pendingPurchase) {
          const details = JSON.parse(pendingPurchase);
          setPurchaseDetails(details);
          
          // Update user credits
          const currentCredits = parseInt(localStorage.getItem('userCredits') || '0');
          const newCredits = currentCredits + details.credits;
          localStorage.setItem('userCredits', newCredits.toString());

          // Add to purchase history
          const history = JSON.parse(localStorage.getItem('creditHistory') || '[]');
          history.push({
            id: sessionId,
            type: 'purchase',
            credits: details.credits,
            amount: details.amount,
            description: `Purchased ${details.credits} credits`,
            date: new Date().toISOString(),
            checkoutSessionId: sessionId
          });
          localStorage.setItem('creditHistory', JSON.stringify(history));

          // ONE order_completed for this purchase. The pack, the credits and the
          // quantity are PROPERTIES of it — a second "credit_purchase_completed"
          // event for the same moment would double every conversion count.
          trackPurchaseSuccess(
            sessionId,
            [{
              id: details.packId,
              name: details.productName,
              category: 'credit_packs',
              price: details.unitPrice,
              quantity: details.quantity,
              credits: details.credits
            }],
            details.amount
          );

          // Clear pending purchase
          localStorage.removeItem('pendingPurchase');
        }

        setIsProcessing(false);
      } catch (error) {
        console.error('Error processing payment:', error);
        setError(true);
        setIsProcessing(false);
      }
    };

    processPayment();
  }, [sessionId]);

  if (isProcessing) {
    return (
      <>
        <main className="pt-32 pb-20 bg-black text-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Processing your payment...</h2>
            <p className="text-gray-400">Please wait while we confirm your purchase.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <main className="pt-32 pb-20 bg-black text-white min-h-screen">
          <div className="container-custom max-w-2xl text-center">
            <div className="bg-red-900/20 border border-red-800 rounded-xl p-8 mb-8">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Payment Verification Error</h1>
              <p className="text-gray-300 mb-6">
                We couldn't verify your payment. This might happen if you accessed this page directly.
                If you just completed a payment, please contact support with your session ID.
              </p>
              {sessionId && (
                <p className="text-sm text-gray-400 mb-6">
                  Session ID: {sessionId}
                </p>
              )}
              <Button 
                onClick={() => navigate('/purchase-credits')}
                className="bg-white hover:bg-gray-100 text-black"
              >
                Return to Purchase
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-2xl text-center">
          <div className="bg-green-900/20 border border-green-800 rounded-xl p-8 mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-gray-300 text-lg mb-8">
              Your payment has been processed successfully.
              {purchaseDetails && ` ${purchaseDetails.credits} credits have been added to your account.`}
            </p>
            
            {purchaseDetails && (
              <div className="bg-gray-900/30 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                <h3 className="font-semibold mb-4 text-center">Purchase Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credits Purchased:</span>
                    <span>{purchaseDetails.credits.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount Paid:</span>
                    <span>${purchaseDetails.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button className="bg-white hover:bg-gray-100 text-black">
                  Go to Dashboard
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Browse Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Transaction ID: {sessionId}</p>
              <p className="mt-2">
                A receipt has been sent to your email address.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
