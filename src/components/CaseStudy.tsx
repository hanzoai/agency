
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
  return (
    <section id="case-studies" className="section-padding bg-beige-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center md:text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 reveal">
            FEATURED<br/>PROJECTS
          </h2>
          <p className="text-lg text-primary/80 reveal">
            Premium beauty and skincare brands that delight customers worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] overflow-hidden group reveal">
            <img 
              src="/lovable-uploads/544b28ac-2882-449e-a592-656385b9f4a7.png" 
              alt="Epidermis skincare" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white uppercase">EPIDERMIS</h3>
              <p className="text-white/80 mt-1 text-sm uppercase font-medium">PREMIUM SKINCARE BRAND BASED IN QUEBEC, CANADA</p>
              <button className="mt-4 lets-talk-btn w-fit">
                Explore
                <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] overflow-hidden group reveal">
            <img 
              src="/lovable-uploads/544b28ac-2882-449e-a592-656385b9f4a7.png" 
              alt="Lumina Beauty" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white uppercase">LUMINA BEAUTY</h3>
              <p className="text-white/80 mt-1 text-sm uppercase font-medium">LUXURY COSMETICS LINE FROM MONTREAL</p>
              <button className="mt-4 lets-talk-btn w-fit">
                Explore
                <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center md:text-left">
          <Link to="/projects" className="lets-talk-btn">
            View All Projects
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
