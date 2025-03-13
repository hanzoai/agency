
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCheckmark, setShowCheckmark] = useState(false);
  const fullText = 'RELIABLE & AFFORDABLE';
  
  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
        setShowCheckmark(true);
      }
    }, 100); // Speed of the animation

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-28 bg-black relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-white/5 -z-10"></div>
      <div className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-beige-100 -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black leading-tight uppercase mb-8 tracking-tighter">
            {showCheckmark && (
              <Check size={40} className="inline-block mr-2 text-accent animate-scale-in" />
            )}
            <span className="inline-block min-h-[1.2em]">{displayedText}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto mb-12 reveal-slide-up">
            Quality design solutions that won't break your budget. Get unlimited designs 
            and development from our dedicated team, all at a predictable monthly rate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-slide-up">
            <a href="https://calendar.app.google/dHbVXQP6g7GvB6fj9" className="bg-transparent text-white border border-white rounded-full py-3 px-6 text-lg inline-flex items-center hover:bg-white/10 transition-all duration-300">
              Let's talk
              <ArrowUpRight size={20} className="ml-2 text-white" />
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
