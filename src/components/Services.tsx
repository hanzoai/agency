
import { Layout, PenTool, Palette, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layout size={24} />,
    title: "App Design",
    description: "Web apps, mobile apps, SaaS apps (UI/UX)."
  },
  {
    icon: <PenTool size={24} />,
    title: "Brand Design",
    description: "Logos, brandkits, slide decks, templates."
  },
  {
    icon: <Globe size={24} />,
    title: "Website & Landing Page Design",
    description: "Full websites, splash pages, sales pages, lead generation pages."
  },
  {
    icon: <Zap size={24} />,
    title: "And so much more...",
    description: "Anything you can think of, your designer can design it."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 text-primary/70 font-medium uppercase tracking-wide reveal">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            What Your Hanzo Designer Can Do
          </h2>
          <p className="text-lg text-primary/80 reveal">
            We give you direct control over your full-stack designer to meet all your startup's design needs—landing pages, logos, UI/UX. You envision, they create.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="circle-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-primary/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
