import { Check, ArrowUpRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const starterFeatures = ["Web design (UI/UX)", "Front End Engineer", "Dedicated Designer", "Print design", "AI-enhanced creative", "Logo Creation", "Branding services"];
const growthFeatures = ["Illustration design", "eBooks & report design", "Packaging & merchandise design", "Video production (up to 2 videos/month)", "Motion design", "Ad creative", "Social media creative", "Presentation design", "Email creation"];
const enterpriseFeatures = ["Unlimited Web design & landing pages", "3D & AR design", "Specialized concept creation", "Dedicated Project Manager", "Priority delivery & unlimited revisions", "AI consulting", "Marketing strategy", "Video Production"];
const Pricing = () => {
  return <section id="pricing" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 reveal">
            Subscription Plans
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto reveal mb-2">
            Choose the plan that fits your needs. All plans include our widely acclaimed team of design experts.
          </p>
          <p className="text-md text-accent font-medium max-w-2xl mx-auto reveal flex items-center justify-center gap-1">
            <Info size={18} />
            New customers get a 7-day free trial!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 reveal-slide-up">
          {/* Starter Plan */}
          <Card className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
            <CardHeader className="bg-black p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Starter</h3>
              <p className="opacity-90">Essential design services</p>
            </CardHeader>
            
            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-6">
                <span className="text-4xl font-bold text-white">$3,500</span>
                <span className="ml-2 text-white/70">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {starterFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>
            
            <CardFooter className="p-6 pt-0">
              <Link to="/subscribe" className="lets-talk-btn w-full justify-center text-lg py-3">
                Start free trial
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
          
          {/* Growth Plan */}
          <Card className="border-2 border-accent overflow-hidden flex flex-col h-full shadow-lg relative bg-[#282828]">
            <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-bold">
              POPULAR
            </div>
            <CardHeader className="bg-accent p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">UNLIMITED</h3>
              <p className="opacity-90">Advanced design solutions</p>
            </CardHeader>
            
            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-6">
                <span className="text-4xl font-bold text-white">$5,500</span>
                <span className="ml-2 text-white/70">/month</span>
              </div>
              
              <p className="text-sm text-white/70 mb-4 font-medium">Everything in Starter, plus:</p>
              
              <ul className="space-y-4 mb-8">
                {growthFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>
            
            <CardFooter className="p-6 pt-0">
              <Link to="/subscribe" className="lets-talk-btn w-full justify-center text-lg py-3 bg-accent hover:bg-accent/90">
                Start free trial
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
          
          {/* Enterprise Plan */}
          <Card className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
            <CardHeader className="bg-black p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Enterprise</h3>
              <p className="opacity-90">Comprehensive solutions</p>
            </CardHeader>
            
            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              
              <p className="text-sm text-white/70 mb-4 font-medium">Everything in Growth, plus:</p>
              
              <ul className="space-y-4 mb-8">
                {enterpriseFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>
            
            <CardFooter className="p-6 pt-0">
              <Link to="/contact" className="lets-talk-btn w-full justify-center text-lg py-3 bg-primary/10 text-primary hover:bg-primary/20">
                Talk to Sales
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-primary/70 mb-4">
            Not sure which plan is right for you? Contact us for a personalized quote.
          </p>
          <Link to="/contact" className="lets-talk-btn">
            Contact us
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>;
};
export default Pricing;