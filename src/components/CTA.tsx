
import { ArrowUpRight } from 'lucide-react';
import { FancyButton } from '@/components/ui/fancy-button';
import { GradientBorderButton } from '@/components/ui/gradient-border-button';

const CTA = () => {
  return (
    <section id="get-started" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 -z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 reveal">
              UNLIMITED<br/>FULL-STACK APP<br/>DEVELOPMENT
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl reveal">
              Expand your in-house creative team with top global talent and cutting-edge AI workflows, bringing any vision to life quickly and cost-effectively.
            </p>
            
            <div className="flex justify-center md:justify-start reveal gap-4">
              <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8">
                <FancyButton variant="default" size="lg" className="text-lg font-medium">
                  Let's talk
                  <ArrowUpRight size={20} className="ml-2" />
                </FancyButton>
              </a>
              
              <a href="/subscribe">
                <GradientBorderButton 
                  className="text-lg font-medium py-3 px-6 h-12"
                  gradientColors={['#ffffff', '#cccccc', '#ffffff']}
                  borderWidth={2}
                  animationDuration={4}
                >
                  Get Started
                  <ArrowUpRight size={20} className="ml-2" />
                </GradientBorderButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
