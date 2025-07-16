import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Footer from '@/components/Footer';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';

const AddPaymentMethod = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate adding payment method
    setTimeout(() => {
      localStorage.setItem('hasPaymentMethod', 'true');
      navigate('/purchase-credits');
    }, 1500);
  };

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-md">
          <div className="mb-12">
            <Link to="/purchase-credits" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Add Payment Method</h1>
            <p className="text-gray-400">
              Add a card to purchase credits for design services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-800">
                <CreditCard className="h-6 w-6 text-gray-400" />
                <h2 className="text-xl font-semibold">Card Information</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="cardNumber" className="text-gray-300 mb-2 block">
                    Card Number
                  </Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white pl-4 pr-12 py-3 rounded-lg w-full"
                      placeholder="1234 5678 9012 3456"
                    />
                    <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-gray-300 mb-2 block">
                      Expiry Date
                    </Label>
                    <Input
                      id="expiry"
                      type="text"
                      required
                      value={formData.expiry}
                      onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white px-4 py-3 rounded-lg"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="text-gray-300 mb-2 block">
                      CVC
                    </Label>
                    <Input
                      id="cvc"
                      type="text"
                      required
                      value={formData.cvc}
                      onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white px-4 py-3 rounded-lg"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">
                    Name on Card
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-gray-900/50 border-gray-700 text-white px-4 py-3 rounded-lg w-full"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Lock className="h-4 w-4" />
                  <span>Your payment information is encrypted and secure</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-100 text-black py-3 text-lg font-semibold rounded-lg transition-colors mt-8"
              >
                {isLoading ? 'Adding card...' : 'Add Payment Method'}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddPaymentMethod;