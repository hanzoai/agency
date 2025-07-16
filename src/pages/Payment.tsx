import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, CreditCard, Lock, Mail } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get('plan') || 'agency';

  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: '',
    country: 'United States',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    emailUpdates: false
  });

  useEffect(() => {
    // Set dark theme
    document.body.classList.add('dark');

    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      if (plan === 'instant-site') {
        window.location.href = '/instant-site-form';
      } else {
        window.location.href = '/onboarding-success';
      }
    }, 1500);
  };

  const getPlanDetails = () => {
    if (plan === 'instant-site') {
      return {
        name: 'Instant Site',
        price: 500,
        description: '3-page website in 24 hours',
        features: [
          'Custom-built 3-page website',
          'Up to 10 premium images',
          '24-hour turnaround',
          '1 design revision',
          'Lifetime ownership'
        ]
      };
    }
    
    return {
      name: 'Agency Service',
      price: 5000,
      description: 'Full-service creative agency',
      features: [
        'Dedicated Creative Director',
        'Dedicated Project Manager',
        '120 hours per month',
        'Unlimited revisions',
        'Full copyright ownership'
      ]
    };
  };

  const planDetails = getPlanDetails();

  const handleApplyDiscount = () => {
    // Simulate discount code validation
    if (discountCode.toUpperCase() === 'SAVE20') {
      const discount = planDetails.price * 0.2;
      setDiscountAmount(discount);
      setDiscountApplied(true);
    } else if (discountCode.toUpperCase() === 'LAUNCH50') {
      const discount = planDetails.price * 0.5;
      setDiscountAmount(discount);
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
      setDiscountAmount(0);
    }
  };

  const finalPrice = planDetails.price - discountAmount;

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
                  <h2 className="text-2xl font-bold mb-6">Contact</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="sr-only">Email</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-gray-900/50 border-gray-800 text-white pl-4 pr-10 py-3 rounded-lg"
                        />
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="emailUpdates"
                        checked={formData.emailUpdates}
                        onChange={(e) => setFormData({...formData, emailUpdates: e.target.checked})}
                        className="rounded border-gray-700 bg-gray-900/50 text-white focus:ring-white"
                      />
                      <Label htmlFor="emailUpdates" className="text-sm text-gray-400 cursor-pointer">
                        Email me with news and offers
                      </Label>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <Link to="/login" className="text-white hover:text-gray-300 text-sm">
                      Log in
                    </Link>
                  </div>
                </div>

                {/* Payment Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Payment</h2>
                  <p className="text-sm text-gray-400 mb-6">All transactions are secure and encrypted.</p>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg">
                    {/* Credit Card Header */}
                    <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <span className="font-medium">Credit card</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 15'%3E%3Crect width='24' height='15' rx='2' fill='%23fff'/%3E%3Ctext x='12' y='10' text-anchor='middle' font-size='8' fill='%23000'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="h-5" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 15'%3E%3Crect width='24' height='15' rx='2' fill='%23eb001b'/%3E%3Ccircle cx='8' cy='7.5' r='5' fill='%23ff5f00'/%3E%3Ccircle cx='16' cy='7.5' r='5' fill='%23f79e1b'/%3E%3C/svg%3E" alt="Mastercard" className="h-5" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 15'%3E%3Crect width='24' height='15' rx='2' fill='%23016fd0'/%3E%3Ctext x='12' y='10' text-anchor='middle' font-size='6' fill='%23fff'%3EAMEX%3C/text%3E%3C/svg%3E" alt="Amex" className="h-5" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 15'%3E%3Crect width='24' height='15' rx='2' fill='%23ff5f00'/%3E%3Ctext x='12' y='10' text-anchor='middle' font-size='6' fill='%23fff'%3EDISCOVER%3C/text%3E%3C/svg%3E" alt="Discover" className="h-5" />
                      </div>
                    </div>
                    
                    {/* Card Form Fields */}
                    <div className="p-4 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber" className="sr-only">Card number</Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            type="text"
                            placeholder="Card number"
                            required
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                            className="bg-gray-800/50 border-gray-700 text-white pl-4 pr-10 py-3 rounded-lg"
                          />
                          <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="sr-only">Expiration date</Label>
                          <Input
                            id="expiry"
                            type="text"
                            placeholder="Expiration date (MM / YY)"
                            required
                            value={formData.expiry}
                            onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                            className="bg-gray-800/50 border-gray-700 text-white px-4 py-3 rounded-lg"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvc" className="sr-only">Security code</Label>
                          <div className="relative">
                            <Input
                              id="cvc"
                              type="text"
                              placeholder="Security code"
                              required
                              value={formData.cvc}
                              onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                              className="bg-gray-800/50 border-gray-700 text-white pl-4 pr-10 py-3 rounded-lg"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                <path strokeWidth="2" d="M12 8v4m0 4h.01"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="name" className="sr-only">Name on card</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Name on card"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-gray-800/50 border-gray-700 text-white px-4 py-3 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing Address Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Billing address</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="country" className="sr-only">Country/Region</Label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                        <SelectTrigger className="bg-gray-900/50 border-gray-800 text-white py-3 rounded-lg">
                          <SelectValue placeholder="Country/Region" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800 text-white">
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="sr-only">First name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="First name"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="bg-gray-900/50 border-gray-800 text-white px-4 py-3 rounded-lg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="sr-only">Last name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="bg-gray-900/50 border-gray-800 text-white px-4 py-3 rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="sr-only">Address</Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="Address"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="bg-gray-900/50 border-gray-800 text-white px-4 py-3 rounded-lg"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="sr-only">City</Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder="City"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="bg-gray-900/50 border-gray-800 text-white px-4 py-3 rounded-lg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="sr-only">State</Label>
                        <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                          <SelectTrigger className="bg-gray-900/50 border-gray-800 text-white py-3 rounded-lg">
                            <SelectValue placeholder="State" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-800 text-white">
                            <SelectItem value="KS">Kansas</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zip" className="sr-only">ZIP code</Label>
                        <Input
                          id="zip"
                          type="text"
                          placeholder="ZIP code"
                          required
                          value={formData.zip}
                          onChange={(e) => setFormData({...formData, zip: e.target.value})}
                          className="bg-gray-900/50 border-gray-800 text-white px-4 py-3 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-gray-100 text-black py-4 text-lg font-semibold rounded-lg transition-colors"
                >
                  {isLoading ? 'Processing...' : 'Pay now'}
                </Button>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 lg:sticky lg:top-32">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                {/* Product Item */}
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-800">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{planDetails.name}</h3>
                    <p className="text-sm text-gray-400">{planDetails.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${planDetails.price.toLocaleString()}</p>
                    {plan === 'agency' && <p className="text-sm text-gray-400">/month</p>}
                  </div>
                </div>
                
                {/* Discount Code Section */}
                <div className="mt-6 pb-6 border-b border-gray-800">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Discount code"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="flex-1 bg-gray-900/50 border-gray-800 text-white px-4 py-2 rounded-lg"
                      />
                      <Button
                        type="button"
                        onClick={handleApplyDiscount}
                        className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Apply
                      </Button>
                    </div>
                    {discountApplied && (
                      <p className="text-sm text-green-400">Discount applied successfully!</p>
                    )}
                  </div>
                </div>
                
                {/* Pricing Breakdown */}
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${planDetails.price.toLocaleString()}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-sm text-green-400">
                      <span>Discount</span>
                      <span>-${discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-gray-800">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="flex items-center">
                        <span className="text-sm text-gray-400 mr-2">USD</span>
                        ${finalPrice.toLocaleString()}
                      </span>
                    </div>
                    {plan === 'agency' && (
                      <p className="text-sm text-gray-400 text-right mt-1">
                        Billed monthly • 3 month minimum
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