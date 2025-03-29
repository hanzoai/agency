
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buttonModifiers } from '@/lib/button-utils';

const CTA = () => {
  return (
    <section id="get-started" className="section-padding bg-background text-foreground relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-secondary/20 to-transparent opacity-40 blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent opacity-30 blur-3xl -z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 reveal">
              Unlimited<br/>Full-Stack App<br/>Development
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl reveal">
              Expand your in-house creative team with top global talent and cutting-edge AI workflows, bringing any vision to life quickly and cost-effectively.
            </p>
            
            <div className="flex justify-center md:justify-start reveal gap-4">
              <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className={buttonModifiers.interactive + " font-medium"}
                >
                  Let's talk
                  <ArrowUpRight size={16} className="ml-1" />
                </Button>
              </a>
              
              <a href="/subscribe">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className={buttonModifiers.interactive + " font-medium"}
                >
                  Get Started
                  <ArrowUpRight size={16} className="ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
