
import { ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "Save 50+ hours & $5K+ Per Month",
    description: "Skip the 3-month hire process and high costs. Get on board in 1 business day with Hanzo for less, with greater output than agencies."
  },
  {
    title: "100% Control. 0 Headaches",
    description: "No lengthy contracts or unexpected fees. Enjoy a flat monthly rate. Start or pause at any time and appreciate the simplicity of clear terms."
  },
  {
    title: "Design Freedom",
    description: "Skip the limits of agencies and full-time designers. Our team focuses on designs that boost your growth—be it landing pages, pitch decks, or UI/UX."
  },
];

const WhyHanzo = () => {
  return (
    <section id="why-hanzo" className="section-padding bg-beige-100 relative overflow-hidden">
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-beige-200/50 -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center md:text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 reveal">
            EXCLUSIVITY<br/>WITH US
          </h2>
          <p className="text-lg text-primary/80 reveal">
            Homes that are designed to blend into the natural landscape. Explore premium properties with personalized browsing and expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border-t border-black pt-6 reveal-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-xl font-bold mb-4 uppercase">{feature.title}</h3>
              <p className="text-primary/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center md:text-left reveal">
          <a href="#get-started" className="lets-talk-btn">
            Let's talk
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyHanzo;
