import React from 'react';
import GradientBackground from './GradientBackground';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Hanzo transformed our approach to customer data, building an AI solution that revealed patterns we'd never seen before. Their team bridged our business knowledge with cutting-edge technology.",
    author: "Sarah Chen",
    title: "CTO, Fintech Innovators",
    image: "/images/placeholder.svg" // This would be replaced with actual images
  },
  {
    quote: "Working with Hanzo feels like having an AI R&D department that actually understands our business goals. They don't just implement technology—they solve real problems.",
    author: "Marcus Johnson",
    title: "VP of Innovation, Enterprise Solutions",
    image: "/images/placeholder.svg"
  },
  {
    quote: "The Hanzo team delivered a custom AI solution in half the time we expected, with better results than we imagined possible. They're the perfect blend of technical brilliance and practical business sense.",
    author: "Alicia Rodriguez",
    title: "Director of Operations, Global Retail",
    image: "/images/placeholder.svg"
  }
];

const ModernTestimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GradientBackground variant="tertiary" intensity="medium" className="absolute inset-0 z-0" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Partner Success Stories</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Hear from organizations that have transformed their capabilities with our AI solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-lg border border-border/40 bg-background/30 backdrop-blur-sm p-8 relative hover:border-border/60 transition-all"
            >
              <Quote className="text-primary/20 w-10 h-10 absolute top-4 right-4" />
              <p className="text-foreground/80 mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full overflow-hidden border border-border/60">
                  <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
