import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Mail, Lock, Tag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  "Unlimited Project Requests Every Month",
  "Quick Response & Delivery",
  "No contracts. Cancel Anytime.",
  "One Rate For All Your Funnel Building Needs",
  "All the skills you need to start, grow, and scale your online business",
  "Professional graphic designers & funnel building experts",
];

interface FormData {
  fullName: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  discountCode: string;
}

const DISCOUNT_CODES = {
  'HANZO50': 50,
  'NEW200': 200,
  'WELCOME100': 100
};

const Subscribe = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    discountCode: ''
  });
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [isDiscountApplied, setIsDiscountApplied] = useState<boolean>(false);

  const basePrice = 1250;
  const finalPrice = basePrice - appliedDiscount;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const applyDiscount = () => {
    const code = formData.discountCode.trim().toUpperCase();
    if (!code) {
      toast({
        title: "No discount code entered",
        description: "Please enter a discount code to apply",
        variant: "destructive"
      });
      return;
    }

    if (code in DISCOUNT_CODES) {
      const discountAmount = DISCOUNT_CODES[code as keyof typeof DISCOUNT_CODES];
      setAppliedDiscount(discountAmount);
      setIsDiscountApplied(true);
      toast({
        title: "Discount applied!",
        description: `$${discountAmount} discount has been applied to your order`
      });
    } else {
      toast({
        title: "Invalid discount code",
        description: "The discount code you entered is not valid",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our service",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-beige-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Subscribe Today</h1>
            <p className="text-center text-lg text-primary/70 mb-10">
              Complete your subscription to get started with unlimited design support
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Personal Information</h3>
                      
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-primary/70 mb-1">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary/70 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full border border-gray-300 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Credit Card Details</h3>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-primary/70 mb-1">
                          Card Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CreditCard size={18} className="text-gray-400" />
                          </div>
                          <input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                            className="w-full border border-gray-300 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                            value={formData.cardNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-primary/70 mb-1">
                            Expiry Date
                          </label>
                          <input
                            id="expiryDate"
                            name="expiryDate"
                            type="text"
                            placeholder="MM/YY"
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                            value={formData.expiryDate}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-primary/70 mb-1">
                            CVV
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Lock size={18} className="text-gray-400" />
                            </div>
                            <input
                              id="cvv"
                              name="cvv"
                              type="text"
                              placeholder="123"
                              required
                              className="w-full border border-gray-300 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                              value={formData.cvv}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Billing Address</h3>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-primary/70 mb-1">
                          Street Address
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          required
                          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-primary/70 mb-1">
                            City
                          </label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-primary/70 mb-1">
                            State/Province
                          </label>
                          <input
                            id="state"
                            name="state"
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-primary/70 mb-1">
                          ZIP/Postal Code
                        </label>
                        <input
                          id="zipCode"
                          name="zipCode"
                          type="text"
                          required
                          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                          value={formData.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Discount Code</h3>
                      
                      <div className="flex items-center gap-2">
                        <div className="relative flex-grow">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Tag size={18} className="text-gray-400" />
                          </div>
                          <input
                            id="discountCode"
                            name="discountCode"
                            type="text"
                            placeholder="Enter discount code"
                            className="w-full border border-gray-300 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                            value={formData.discountCode}
                            onChange={handleChange}
                            disabled={isDiscountApplied}
                          />
                        </div>
                        <Button 
                          type="button" 
                          onClick={applyDiscount}
                          disabled={isDiscountApplied}
                          variant="outline"
                        >
                          Apply
                        </Button>
                      </div>
                      
                      {isDiscountApplied && (
                        <div className="flex items-center text-accent">
                          <Check size={16} className="mr-1" />
                          <span className="text-sm">Discount of ${appliedDiscount} applied!</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-white p-3 rounded-md font-medium"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : `Subscribe Now • $${finalPrice}/month`}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm sticky top-8">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-primary/70">Monthly Subscription</span>
                      <span>${basePrice}</span>
                    </div>
                    
                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-accent">
                        <span>Discount</span>
                        <span>-${appliedDiscount}</span>
                      </div>
                    )}
                    
                    <div className="border-t pt-3 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${finalPrice}/month</span>
                    </div>
                  </div>
                  
                  <div className="bg-beige-100 p-4 rounded-lg text-sm">
                    <p className="font-medium mb-2">What's included:</p>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="text-accent mr-2 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscribe;
