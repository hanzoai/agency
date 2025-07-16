import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { notifyAdmins } from '@/utils/emailNotifications';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState(false);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const processPayment = async () => {
      if (!sessionId) {
        setError(true);
        setIsProcessing(false);
        return;
      }

      try {
        // In a real app, you would verify the session with your backend
        // For now, we'll simulate processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Get stored metadata from before the checkout
        const pendingPurchase = localStorage.getItem('pendingPurchase');
        if (pendingPurchase) {
          const { credits, amount, type } = JSON.parse(pendingPurchase);
          
          // Update user credits
          const currentCredits = parseInt(localStorage.getItem('userCredits') || '0');
          const newCredits = currentCredits + credits;
          localStorage.setItem('userCredits', newCredits.toString());

          // Add to purchase history
          const history = JSON.parse(localStorage.getItem('creditHistory') || '[]');
          history.push({
            id: sessionId,
            type: 'purchase',
            credits: credits,
            amount: amount,
            description: `Purchased ${credits} credits`,
            date: new Date().toISOString(),
            stripeSessionId: sessionId
          });
          localStorage.setItem('creditHistory', JSON.stringify(history));

          // Send notification
          const userEmail = localStorage.getItem('userEmail') || '';
          notifyAdmins.creditsPurchased(userEmail, credits, amount);

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
              <h1 className="text-3xl font-bold mb-4">Payment Error</h1>
              <p className="text-gray-300 mb-6">
                There was an issue processing your payment. Please try again or contact support.
              </p>
              <Button 
                onClick={() => navigate('/purchase-credits')}
                className="bg-white hover:bg-gray-100 text-black"
              >
                Try Again
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
              Your credits have been added to your account and are ready to use.
            </p>
            
            <div className="bg-gray-900/30 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-2">What's next?</h3>
              <p className="text-gray-400 mb-4">
                You can now use your credits to access any of our creative services.
              </p>
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
            </div>

            <div className="text-sm text-gray-400">
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
