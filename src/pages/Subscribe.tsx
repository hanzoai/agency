import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Mail, Lock, Tag, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const starterFeatures = [
  "Web design (UI/UX)",
  "Front End Engineer",
  "Dedicated Designer",
  "Print design",
  "AI-enhanced creative",
  "Logo Creation",
  "Branding services",
];

const growthFeatures = [
  "Illustration design",
  "eBooks & report design",
  "Packaging & merchandise design",
  "Video production (up to 2 videos/month)",
  "Motion design",
  "Ad creative",
  "Social media creative",
  "Presentation design",
  "Email creation",
];

const enterpriseFeatures = [
  "Unlimited Web design & landing pages",
  "3D & AR design",
  "Specialized concept creation",
  "Dedicated Project Manager",
  "Priority delivery & unlimited revisions",
  "AI consulting",
  "Marketing strategy",
  "Video Production",
];

const allGrowthFeatures = [...starterFeatures, ...growthFeatures];

const allEnterpriseFeatures = [...starterFeatures, ...growthFeatures, ...enterpriseFeatures];

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
}

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
  });
  
  const [isTrialApplied, setIsTrialApplied] = useState<boolean>(true);
  const [selectedPlan, setSelectedPlan] = useState<string>('growth');
  const [agreementOpen, setAgreementOpen] = useState(false);
  const [agreementAccepted, setAgreementAccepted] = useState(false);

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

  const selectedPrice = selectedPlan === 'enterprise' 
    ? 'Custom (Talk to Sales)' 
    : `$${plans[selectedPlan as keyof typeof plans].price}/month`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreementAccepted) {
      toast({
        title: "Agreement Required",
        description: "You must accept the free trial agreement to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      
      localStorage.setItem('trialUsed', 'true');
      
      const trialEndDate = new Date();
      trialEndDate.setDate(trialEndDate.getDate() + 7);
      localStorage.setItem('trialEndDate', trialEndDate.toISOString());
      localStorage.setItem('selectedPlan', selectedPlan);
      
      toast({
        title: "Free trial started!",
        description: `Your 7-day free trial has begun. Your card will be charged on ${new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString()}.`,
      });

      sessionStorage.setItem('onboardingComplete', 'false');
      
      navigate('/onboarding');
    }, 2000);
  };

  const getFeaturesByPlan = () => {
    switch(selectedPlan) {
      case 'starter':
        return starterFeatures;
      case 'growth':
        return allGrowthFeatures;
      case 'enterprise':
        return allEnterpriseFeatures;
      default:
        return starterFeatures;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow py-16 pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white mt-10">Start Your Free Trial</h1>
            <p className="text-center text-lg text-white/70 mb-10">
              Complete your details to start your 7-day free trial
            </p>
            
            <div className="bg-transparent border border-white/20 p-6 rounded-xl mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">Select Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <div 
                    key={key}
                    onClick={() => key !== 'enterprise' && setSelectedPlan(key)}
                    className={`border p-4 rounded-lg ${key !== 'enterprise' ? 'cursor-pointer' : 'cursor-default'} transition-all bg-transparent ${
                      selectedPlan === key 
                        ? 'border-accent bg-accent/10' 
                        : 'border-white/20 hover:border-white/50'
                    }`}
                  >
                    <h3 className="font-semibold text-white">{plan.name}</h3>
                    {typeof plan.price === 'number' ? (
                      <div>
                        <div className="flex items-center">
                          <span className="text-lg font-bold line-through text-white/40">${plan.price}/month</span>
                        </div>
                        <p className="text-accent font-bold">$0 with free trial</p>
                      </div>
                    ) : (
                      <p className="text-lg font-bold text-white">{plan.price}</p>
                    )}
                    <p className="text-sm mt-2">
                      {key !== 'enterprise' ? (
                        <span className="flex items-center gap-1 text-accent">
                          <Info size={14} />
                          7-day free trial
                        </span>
                      ) : (
                        <>
                          <span className="flex items-center gap-1 text-white">
                            <Info size={14} />
                            Free trial not available
                          </span>
                          <a 
                            href="https://calendar.app.google/dHbVXQP6g7GvB6fj9" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white underline mt-1 block hover:text-accent transition-colors"
                          >
                            Contact our sales team to discuss pricing.
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-transparent border border-white/20 p-8 rounded-xl">
                <h2 className="text-xl font-semibold mb-6 text-white">Payment Information</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-white">Personal Information</h3>
                      
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-white/70 mb-1">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          className="w-full border border-white/20 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-white/40" />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full border border-white/20 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-white">Credit Card Details</h3>
                      <div className="p-3 bg-blue-500/10 text-blue-300 rounded-md flex items-start gap-2 text-sm mb-2 border border-blue-500/20">
                        <Info size={16} className="flex-shrink-0 mt-0.5" />
                        <span>Your card will not be charged until after your 7-day free trial ends.</span>
                      </div>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-white/70 mb-1">
                          Card Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CreditCard size={18} className="text-white/40" />
                          </div>
                          <input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                            className="w-full border border-white/20 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white placeholder:text-white/30"
                            value={formData.cardNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-white/70 mb-1">
                            Expiry Date
                          </label>
                          <input
                            id="expiryDate"
                            name="expiryDate"
                            type="text"
                            placeholder="MM/YY"
                            required
                            className="w-full border border-white/20 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white placeholder:text-white/30"
                            value={formData.expiryDate}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-white/70 mb-1">
                            CVV
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Lock size={18} className="text-white/40" />
                            </div>
                            <input
                              id="cvv"
                              name="cvv"
                              type="text"
                              placeholder="123"
                              required
                              className="w-full border border-white/20 rounded-md pl-10 p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white placeholder:text-white/30"
                              value={formData.cvv}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-white">Billing Address</h3>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-white/70 mb-1">
                          Street Address
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          required
                          className="w-full border border-white/20 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-white/70 mb-1">
                            City
                          </label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            className="w-full border border-white/20 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-white/70 mb-1">
                            State/Province
                          </label>
                          <input
                            id="state"
                            name="state"
                            type="text"
                            required
                            className="w-full border border-white/20 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-white/70 mb-1">
                          ZIP/Postal Code
                        </label>
                        <input
                          id="zipCode"
                          name="zipCode"
                          type="text"
                          required
                          className="w-full border border-white/20 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent bg-transparent text-white"
                          value={formData.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="border-t border-white/20 pt-4 mt-6">
                      <button 
                        type="button" 
                        onClick={() => setAgreementOpen(true)}
                        className="text-white underline hover:text-accent transition-colors text-sm"
                      >
                        View Free Trial Agreement
                      </button>
                      
                      <div className="flex items-start space-x-2 mt-2">
                        <Checkbox 
                          id="agreement" 
                          checked={agreementAccepted}
                          onCheckedChange={(checked) => {
                            setAgreementAccepted(checked === true);
                          }}
                          className="border-white data-[state=checked]:bg-accent data-[state=checked]:border-accent mt-1"
                        />
                        <label 
                          htmlFor="agreement" 
                          className="text-sm text-white/90"
                        >
                          I agree that by initiating the free trial, I fully acknowledge, understand, and accept all conditions outlined in the above without reservation.
                        </label>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-black p-4 rounded-md font-medium text-lg"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Start Free Trial'}
                    </Button>
                    
                    <p className="text-center text-sm text-white/50">
                      By starting your free trial, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </form>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-transparent border border-white/20 p-6 rounded-xl sticky top-8">
                  <h3 className="text-lg font-semibold mb-4 text-white">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white/70">Selected Plan</span>
                      <span className="text-white">{plans[selectedPlan as keyof typeof plans].name}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-white/70">Monthly Rate</span>
                      {typeof plans[selectedPlan as keyof typeof plans].price === 'number' ? (
                        <span className="line-through text-white/40">{selectedPrice}</span>
                      ) : (
                        <span className="text-white">{selectedPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex justify-between text-accent font-bold">
                      <span>Free Trial</span>
                      <span>7 days</span>
                    </div>
                    
                    <div className="border-t border-white/20 pt-3 flex justify-between font-semibold text-white">
                      <span>First Payment</span>
                      <span>Due in 7 days</span>
                    </div>
                  </div>
                  
                  <div className="bg-transparent border border-white/20 p-4 rounded-lg text-sm">
                    <p className="font-medium mb-2 text-white">What's included:</p>
                    <ul className="space-y-2">
                      {getFeaturesByPlan().map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="text-accent mr-2 mt-1 flex-shrink-0" />
                          <span className="text-white">{feature}</span>
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
      
      <Dialog open={agreementOpen} onOpenChange={setAgreementOpen}>
        <DialogContent className="bg-black border border-white/20 text-white max-w-3xl max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">Hanzo Free Trial Terms of Service Agreement</DialogTitle>
            <DialogDescription className="text-white/70">
              This Terms of Service Agreement ("Agreement") governs the relationship between you ("Subscriber") and Hanzo.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-2 text-white">
            <div>
              <h3 className="font-semibold">Selected Plan and Payment Terms</h3>
              <p>Plan: {plans[selectedPlan as keyof typeof plans].name}</p>
              <p>Monthly Rate: ${typeof plans[selectedPlan as keyof typeof plans].price === 'number' ? plans[selectedPlan as keyof typeof plans].price : 'Custom'}/month</p>
              <p>Free Trial Period: 7 days</p>
              <p>First Payment Due: In 7 days</p>
            </div>
            
            <div>
              <h3 className="font-semibold">What's Included:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {getFeaturesByPlan().map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <p>
              Subscriber authorizes Hanzo to automatically charge the provided payment method for the monthly subscription fee immediately upon completion of the free trial unless the subscription is explicitly canceled during the trial.
            </p>
            
            <div>
              <h3 className="font-semibold">Payment Authorization & Ownership of Funds</h3>
              <p>
                Subscriber warrants that the payment method provided belongs to them and that funds are legally theirs to use. Subscriber agrees explicitly not to initiate any chargebacks or payment disputes once the trial period concludes and subscription charges commence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Cancellation Policy</h3>
              <p>
                Subscriber agrees to proactively cancel the subscription before the end of the free trial period to avoid automatic billing. Cancellations after this period will apply to the subsequent billing cycle. Subscriber must communicate intent to cancel clearly and explicitly to Hanzo.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Project Workflow</h3>
              <p>
                Subscriber will submit requests clearly. Hanzo will deliver designs sequentially, offering unlimited revisions. Subscriber receives full rights and ownership of completed designs and source files upon project completion.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Limitation of Liability</h3>
              <p>
                Hanzo shall not be held liable for any indirect, incidental, special, consequential, or punitive damages resulting from service usage or project outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Indemnification</h3>
              <p>
                Subscriber agrees to indemnify Hanzo against claims or liabilities arising from their use of the services, ensuring Hanzo is free from legal repercussions related to subscriber's project content or intended use.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Subscribe;
