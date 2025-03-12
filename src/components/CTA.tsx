
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="section-padding bg-accent relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 -z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto text-white">
          <div className="mb-4 font-medium uppercase tracking-wide opacity-90 reveal">
            SUBSCRIBE NOW
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Get started with unlimited design support.
          </h2>
          <p className="text-xl opacity-90 mb-10 reveal">
            Say goodbye to flaky freelancers. Use our team of funnel building experts & professional graphic designers.
          </p>
          
          <div className="flex justify-center reveal">
            <a 
              href="/subscribe" 
              className="bg-white text-accent hover:bg-white/90 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center"
            >
              Subscribe Today
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
