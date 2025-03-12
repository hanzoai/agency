
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-beige-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-accent/5 -z-10"></div>
      <div className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-beige-100 -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6 reveal-slide-up">
            <Check size={16} className="mr-2" />
            SIGN UP
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 reveal-slide-up">
            Netflix for Design
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-primary/90 mb-8 reveal-slide-up">
            Designer as a Service: Unlimited Designs for Your Startup
          </h2>
          
          <p className="text-xl text-primary/80 mb-10 reveal-slide-up">
            Unlimited designs (UI/UX, graphics, landing pages) from a dedicated full-stack designer. 
            All in one monthly subscription.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-slide-up">
            <a href="#get-started" className="btn-primary w-full sm:w-auto">
              Get My Designer
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#services" className="btn-secondary w-full sm:w-auto">
              See What We Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
