
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
            Designs used by your favorite startups and industry leaders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] overflow-hidden group reveal">
            <img 
              src="/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png" 
              alt="TrillerFest Music Festival" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white uppercase">TRILLERFEST</h3>
              <p className="text-white/80 mt-1 text-sm uppercase font-medium">LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY</p>
              <Link to="/case-study-trillerfest" className="mt-4 lets-talk-btn w-fit">
                Explore
                <ArrowUpRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] overflow-hidden group reveal">
            <img 
              src="/lovable-uploads/050894ef-9663-4050-b4f3-703025fef28a.png" 
              alt="Property example" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white uppercase">KROTE VILLA</h3>
              <p className="text-white/80 mt-1 text-sm uppercase font-medium">A NIFTY DUPLEX NEAR FLORIDA, USA</p>
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
