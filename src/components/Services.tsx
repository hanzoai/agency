
import { Circle } from 'lucide-react';

const services = [
  {
    title: "App Design",
    description: "Web apps, mobile apps, SaaS apps (UI/UX)."
  },
  {
    title: "Brand Design",
    description: "Logos, brandkits, slide decks, templates."
  },
  {
    title: "Website & Landing Page",
    description: "Full websites, splash pages, sales pages."
  },
  {
    title: "And so much more...",
    description: "Anything you can think of, we can design it."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="text-center md:text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 reveal">
            WHAT WE<br/>OFFER
          </h2>
          <p className="text-lg text-primary/80 reveal">
            Homes that are designed to blend into the natural landscape. Explore premium properties with personalized browsing and expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border-t border-black pt-6 reveal-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="text-xl font-bold mb-3 uppercase">{service.title}</h3>
              <p className="text-primary/80">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-20 border-t border-black/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                <span>TEN+</span>
                <div className="ml-4 text-base uppercase text-primary/70 normal-case font-normal">
                  Years in the<br/>business
                </div>
              </div>
              <p className="text-lg text-primary/80">
                We look beyond existing possibilities.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-flex items-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                <span>0.8K</span>
                <div className="ml-4 text-base uppercase text-primary/70 normal-case font-normal">
                  Serving<br/>customers
                </div>
              </div>
              <p className="text-lg text-primary/80">
                Our business is B CORP certified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
