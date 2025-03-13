
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-32 pb-20 md:pt-36 md:pb-28 relative overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/07f1f27c-7620-415b-9f5a-98f6b3191110.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Decorative circles with increased opacity for visibility against image */}
      <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-white/10 -z-10"></div>
      <div className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-beige-100/20 -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black leading-tight uppercase mb-8 tracking-tighter reveal-slide-up">
            RELIABLE &<br/>AFFORDABLE
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 reveal-slide-up">
            Quality design solutions that won't break your budget. Get unlimited designs 
            and development from our dedicated team, all at a predictable monthly rate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-slide-up">
            <a href="https://calendar.app.google/dHbVXQP6g7GvB6fj9" className="lets-talk-btn text-lg py-3 px-6">
              Let's talk
              <ArrowUpRight size={20} className="ml-2" />
            </a>
            <a href="#services" className="btn-secondary">
              See What We Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
