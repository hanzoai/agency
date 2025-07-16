import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { XCircle, ArrowLeft } from 'lucide-react';

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-2xl text-center">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8">
            <XCircle className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
            <p className="text-gray-300 text-lg mb-8">
              Your payment was cancelled and no charges were made.
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-2">Changed your mind?</h3>
              <p className="text-gray-400 mb-4">
                No worries! Your selected items are still available. You can return to complete your purchase at any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/purchase-credits')}
                  className="bg-white hover:bg-gray-100 text-black"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return to Purchase
                </Button>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              <p>Need help? Contact our support team at support@hanzo.ai</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentCancel;
