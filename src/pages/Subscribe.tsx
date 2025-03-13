
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Mail, Lock, Tag, Check, Info } from 'lucide-react';
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
  trialCode: string;
}

// Define the trial codes that can be used
const validTrialPrefixes = ['FREE7'];

const Subscribe = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
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
    trialCode: ''
  });
  const [isTrialApplied, setIsTrialApplied] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('growth');

  const plans = {
    starter: {
      name: 'Starter',
      price: 3500
    },
    growth: {
      name: 'Growth',
      price: 5500
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom'
    }
  };

  // Determine the selected plan price
  const selectedPrice = selectedPlan === 'enterprise' 
    ? 'Custom (Talk to Sales)' 
    : `$${plans[selectedPlan as keyof typeof plans].price}/month`;

  // Check if there's a trial code from the banner when page loads
  useEffect(() => {
    const savedCode = localStorage.getItem('trialCode');
    if (savedCode && !isTrialApplied) {
      setFormData(prev => ({ ...prev, trialCode: savedCode }));
    }
  }, [isTrialApplied]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const applyTrial = () => {
    const code = formData.trialCode.trim().toUpperCase();
    if (!code) {
      toast({
        title: "No trial code entered",
        description: "Please enter a trial code to apply",
        variant: "destructive"
      });
      return;
    }

    // Check if it's a valid trial code (starting with FREE7)
    if (validTrialPrefixes.some(prefix => code.startsWith(prefix)) && code.length >= 8) {
      setIsTrialApplied(true);
      toast({
        title: "Free trial applied!",
        description: "You'll have 7 days to try our services before your card is charged."
      });
      return;
    }

    toast({
      title: "Invalid trial code",
      description: "The trial code you entered is not valid",
      variant: "destructive"
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      
      // Mark the trial code as used if one was applied
      if (isTrialApplied) {
        localStorage.setItem('trialUsed', 'true');
        
        // Calculate the trial end date (7 days from now)
        const trialEndDate = new Date();
        trialEndDate.setDate(trialEndDate.getDate() + 7);
        localStorage.setItem('trialEndDate', trialEndDate.toISOString());
        localStorage.setItem('selectedPlan', selectedPlan);
      }
      
      toast({
        title: isTrialApplied ? "Free trial started!" : "Subscription successful!",
        description: isTrialApplied 
          ? `Your 7-day free trial has begun. Your card will be charged on ${new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString()}.`
          : "Thank you for subscribing to our service",
      });

      // Set a session storage item to indicate successful subscription
      sessionStorage.setItem('onboardingComplete', 'false');
      
      // Redirect to the onboarding form
      navigate('/onboarding');
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
              {isTrialApplied 
                ? "Complete your details to start your 7-day free trial" 
                : "Complete your subscription to get started with unlimited design support"}
            </p>
            
            {/* Plan Selection */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">Select Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <div 
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`border p-4 rounded-lg cursor-pointer transition-all ${
                      selectedPlan === key 
                        ? 'border-accent bg-accent/10' 
                        : 'border-gray-200 hover:border-accent/50'
                    }`}
                  >
                    <h3 className="font-semibold">{plan.name}</h3>
                    <p className="text-lg font-bold">
                      {typeof plan.price === 'number' ? `$${plan.price}/month` : plan.price}
                    </p>
                    {isTrialApplied && (
                      <p className="text-sm text-accent mt-2">
                        <span className="flex items-center gap-1">
                          <Info size={14} />
                          7-day free trial
                        </span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Personal Information</h3>
                      
                      {/* Personal Info Fields */}
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
                      {isTrialApplied && (
                        <div className="p-3 bg-blue-50 text-blue-700 rounded-md flex items-start gap-2 text-sm mb-2">
                          <Info size={16} className="flex-shrink-0 mt-0.5" />
                          <span>Your card will not be charged until after your 7-day free trial ends.</span>
                        </div>
                      )}
                      
                      {/* Credit Card Fields */}
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
                      
                      {/* Billing Address Fields */}
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
                      <h3 className="font-medium">Free Trial Code</h3>
                      
                      <div className="flex items-center gap-2">
                        <div className="relative flex-grow">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Tag size={18} className="text-gray-400" />
                          </div>
                          <input
                            id="trialCode"
                            name="trialCode"
                            type="text"
                            placeholder="Enter trial code"
                            className="w-full border border-gray-300 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent"
                            value={formData.trialCode}
                            onChange={handleChange}
                            disabled={isTrialApplied}
                          />
                        </div>
                        <Button 
                          type="button" 
                          onClick={applyTrial}
                          disabled={isTrialApplied}
                          variant="outline"
                        >
                          Apply
                        </Button>
                      </div>
                      
                      {isTrialApplied && (
                        <div className="flex items-center text-accent">
                          <Check size={16} className="mr-1" />
                          <span className="text-sm">7-day free trial applied!</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-white p-3 rounded-md font-medium"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : isTrialApplied 
                        ? `Start Free Trial • ${selectedPrice} after 7 days` 
                        : `Subscribe Now • ${selectedPrice}`}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm sticky top-8">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-primary/70">Selected Plan</span>
                      <span>{plans[selectedPlan as keyof typeof plans].name}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-primary/70">Monthly Rate</span>
                      <span>{selectedPrice}</span>
                    </div>
                    
                    {isTrialApplied && (
                      <div className="flex justify-between text-accent">
                        <span>Free Trial</span>
                        <span>7 days</span>
                      </div>
                    )}
                    
                    <div className="border-t pt-3 flex justify-between font-semibold">
                      <span>{isTrialApplied ? 'First Payment' : 'Total'}</span>
                      {isTrialApplied ? (
                        <span>Due in 7 days</span>
                      ) : (
                        <span>{selectedPrice}</span>
                      )}
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
