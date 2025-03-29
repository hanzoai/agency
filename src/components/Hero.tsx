
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'THE HUMAN EDGE FOR AI';
  
  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 40);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="pt-48 pb-20 md:pt-52 md:pb-28 bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-secondary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent opacity-20 blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="inline-block min-h-[1.2em]">{displayedText}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 reveal-slide-up">
            We build tomorrow's solutions with today's teams. Hanzo pairs your vision with our expertise 
            to build AI-powered systems that transform your business.
          </p>
          
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 reveal-slide-up">
            The services arm of an AI tech powerhouse, focused on bridging human expertise with advanced technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-slide-up">
            <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8">
              <Button 
                variant="primary" 
                size="lg" 
                className={buttonModifiers.interactive + " font-medium"}
              >
                Partner with us
                <ArrowUpRight size={16} className="ml-1" />
              </Button>
            </a>
            
            <a href="#services">
              <Button 
                variant="outline" 
                size="lg" 
                className={buttonModifiers.interactive + " font-medium"}
              >
                Explore services
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
