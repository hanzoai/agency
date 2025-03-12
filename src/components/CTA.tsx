
import { ArrowUpRight } from 'lucide-react';

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
              Our mission is to change the current landscape of logistics real estate, one destination at a time. We do so by developing logistics projects with a focus on Architecture, Technology, and Functionality.
            </p>
            
            <div className="flex justify-center md:justify-start reveal">
              <a 
                href="/subscribe" 
                className="lets-talk-btn text-lg py-3 px-6"
              >
                Let's talk
                <ArrowUpRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
