import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';

const serviceCategories = [
  {
    title: "Creative Design",
    services: [
      { name: "Ad Creative", description: "AI-powered designs that drive measurable performance" },
      { name: "Social Media Creative", description: "Algorithm-optimized assets for maximum engagement" },
      { name: "Presentation Design", description: "Strategic narratives that elevate your message" },
      { name: "Illustration Design", description: "Visual storytelling engineered for brand recognition" },
      { name: "Web Design", description: "User-centric experiences built for conversions" },
      { name: "Branding Services", description: "Data-driven identity systems for market differentiation" }
    ]
  },
  {
    title: "Specialized Production",
    services: [
      { name: "Video Production", description: "Streamlined production systems for cinematic quality at scale" },
      { name: "Motion Design", description: "Dynamic visual systems for digital environments" },
      { name: "3D & AR Design", description: "Immersive experiences with practical implementation" }
    ]
  },
  {
    title: "AI Engineering",
    services: [
      { name: "RAG System Implementation", description: "Custom knowledge systems for specialized applications" },
      { name: "LLM Fine-Tuning", description: "Precision model adaptation for domain-specific requirements" },
      { name: "AI Pipeline Development", description: "End-to-end architecture from ingestion to deployment" },
      { name: "AI-Enhanced Creative", description: "Human expertise multiplied by computational intelligence" }
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">One subscription for access to all services</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            No matter your creative or technical need, initiating and managing projects is streamlined through our systematic approach.
          </p>
        </div>
        
        <div className="grid gap-12 mb-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-border/40">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="reveal-slide-up" style={{animationDelay: `${serviceIndex * 0.1}s`}}>
                    <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                    <p className="text-foreground/70">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="/services">
            <Button 
              variant="outline" 
              size="lg" 
              className={buttonModifiers.interactive + " font-medium px-8"}
            >
              View all services
              <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;