
import { Check } from 'lucide-react';

const features = [
  "Unlimited Project Requests Every Month",
  "Quick Response & Delivery",
  "No contracts. Cancel Anytime.",
  "One Rate For All Your Funnel Building Needs",
  "All the skills you need to start, grow, and scale your online business",
  "Professional graphic designers & funnel building experts",
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 reveal-slide-up">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-accent p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-2">Get Started</h3>
                <p className="opacity-90">Unlimited Graphic Design & Web Development</p>
              </div>
              
              <div className="p-8">
                <div className="flex justify-center items-baseline mb-6">
                  <span className="text-5xl font-bold">$1200</span>
                  <span className="ml-2 text-primary/70">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/subscribe" 
                  className="btn-primary w-full"
                >
                  Subscribe Today
                </a>
                
                <p className="text-center text-sm text-primary/70 mt-4">
                  Try us risk-free with our 15-day money-back guarantee!
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal-slide-right">
            <div className="mb-4 text-primary/70 font-medium uppercase tracking-wide">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlimited Graphic Design & Web Development for just $1200/Month
            </h2>
            <p className="text-lg text-primary/80 mb-6">
              Fast turnarounds. Reliable and affordable. Unlimited graphic design & landing page builds every month. Save $1000's on graphic design and web development.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
              <h3 className="font-bold mb-2">For Teams of All Sizes</h3>
              <p className="text-primary/80">
                All prices include our widely acclaimed team of graphic designers, experienced funnel building experts, and project managers. Our team works with businesses of all sizes.
              </p>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
              <div className="flex items-center mb-2">
                <span className="font-bold bg-accent text-white px-3 py-1 rounded-full text-sm mr-3">$50 OFF</span>
                <h3 className="font-bold">Hanzo</h3>
              </div>
              <p className="text-primary/80">
                Try us risk-free with our 15-day money-back guarantee!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
