import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Footer from '@/components/Footer';
import { Mail, Lock, Eye, EyeOff, CreditCard, User } from 'lucide-react';
import { notifyAdmins } from '@/utils/emailNotifications';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCardFields, setShowCardFields] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate signup
    setTimeout(() => {
      // Store auth token and user data
      localStorage.setItem('authToken', 'demo-token');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', formData.name);
      localStorage.setItem('userCredits', '0');
      localStorage.setItem('hasPaymentMethod', showCardFields ? 'true' : 'false');
      
      // Check if admin
      const adminEmails = ['a@hanzo.ai', 'z@hanzo.ai'];
      const isAdmin = adminEmails.includes(formData.email);
      localStorage.setItem('isAdmin', isAdmin.toString());
      
      // Send email notification to admins
      notifyAdmins.newSignup(formData.email, formData.name);
      
      navigate(isAdmin ? '/admin' : '/dashboard');
    }, 1000);
  };

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Account</h1>
            <p className="text-gray-400">
              Join to start using our credit-based design services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">
                    Full Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white pl-12 pr-4 py-3 rounded-lg w-full"
                      placeholder="John Doe"
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white pl-12 pr-4 py-3 rounded-lg w-full"
                      placeholder="you@example.com"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-300 mb-2 block">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white pl-12 pr-12 py-3 rounded-lg w-full"
                      placeholder="••••••••"
                      minLength={8}
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-gray-300">
                      Payment Method (Optional)
                    </Label>
                    <button
                      type="button"
                      onClick={() => setShowCardFields(!showCardFields)}
                      className="text-sm text-white hover:text-gray-300"
                    >
                      {showCardFields ? 'Remove' : 'Add Card'}
                    </button>
                  </div>
                  
                  {showCardFields && (
                    <div className="space-y-4 p-4 bg-gray-900/50 rounded-lg">
                      <p className="text-sm text-gray-400 mb-3">
                        Add a card now to purchase credits later
                      </p>
                      <div>
                        <Label htmlFor="cardNumber" className="sr-only">Card Number</Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            type="text"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                            className="bg-gray-800/50 border-gray-700 text-white pl-12 pr-4 py-3 rounded-lg w-full"
                            placeholder="1234 5678 9012 3456"
                          />
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="sr-only">Expiry</Label>
                          <Input
                            id="expiry"
                            type="text"
                            value={formData.expiry}
                            onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                            className="bg-gray-800/50 border-gray-700 text-white px-4 py-3 rounded-lg"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvc" className="sr-only">CVC</Label>
                          <Input
                            id="cvc"
                            type="text"
                            value={formData.cvc}
                            onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                            className="bg-gray-800/50 border-gray-700 text-white px-4 py-3 rounded-lg"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    required
                    className="rounded border-gray-700 bg-gray-900/50 text-white focus:ring-white mt-1"
                  />
                  <label className="text-sm text-gray-400">
                    I agree to the{' '}
                    <Link to="/terms" className="text-white hover:text-gray-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-white hover:text-gray-300">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-100 text-black py-3 text-lg font-semibold rounded-lg transition-colors mt-8"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </Button>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <Link to="/login" className="text-white hover:text-gray-300">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;