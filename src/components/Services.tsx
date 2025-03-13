
import { Circle } from 'lucide-react';

const services = [
  {
    title: "Cost-Effective App Design",
    description: "Web apps, mobile apps, SaaS apps (UI/UX) at budget-friendly rates."
  },
  {
    title: "Reliable Brand Design",
    description: "Consistent logos, brandkits, slide decks, and templates you can depend on."
  },
  {
    title: "Affordable Websites",
    description: "Full websites, splash pages, sales pages without breaking the bank."
  },
  {
    title: "And so much more...",
    description: "Quality solutions for all your design needs at predictable prices."
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
            Reliable design solutions that deliver consistent value. Quality services at affordable prices, tailored to fit your budget and exceed your expectations.
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
                  Years of<br/>reliability
                </div>
              </div>
              <p className="text-lg text-primary/80">
                Consistently delivering value to our clients.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-flex items-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                <span>0.8K</span>
                <div className="ml-4 text-base uppercase text-primary/70 normal-case font-normal">
                  Satisfied<br/>customers
                </div>
              </div>
              <p className="text-lg text-primary/80">
                Our business is built on trust and affordability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
