import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { buttonModifiers } from '@/lib/button-utils';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface ServiceTemplateProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  services: {
    name: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  features: string[];
  caseStudies: {
    id: string;
    title: string;
    company: string;
    industry: string;
    image: string;
  }[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  icon,
  color,
  services,
  features,
  caseStudies
}) => {
  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className={`inline-flex items-center text-${color}-400 mb-4`}>
                  {icon}
                  <h4 className="font-medium ml-2">Services</h4>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-foreground/80 mb-8">{description}</p>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className={buttonModifiers.interactive + " font-medium"}
                    >
                      Get a quote
                      <ArrowUpRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button
                      variant="outline"
                      size="lg"
                      className={buttonModifiers.interactive + " font-medium"}
                    >
                      View pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className={`rounded-3xl bg-gradient-to-br from-black to-${color}-950/30 p-10 border border-${color}-900/40`}>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                      {service.icon}
                      <h3 className="text-xl font-bold mt-4 mb-2">{service.name}</h3>
                      <p className="text-sm text-foreground/70">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-neutral-950">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why choose our {title} services</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                We deliver exceptional results through a combination of experienced talent, proven processes, and cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className={`w-10 h-10 rounded-full bg-${color}-500/20 flex items-center justify-center mb-4`}>
                    <Check className={`h-5 w-5 text-${color}-400`} />
                  </div>
                  <p className="text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                See how we've helped businesses across industries achieve their goals through {title.toLowerCase()}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Link key={index} to={`/case-study/${study.id}`} className="group">
                  <div className="relative overflow-hidden rounded-lg h-80 transition-all">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex items-center mb-1">
                        <div className="text-xs text-foreground/60">{study.industry}</div>
                        <div className="mx-2 text-foreground/30">•</div>
                        <div className="text-xs font-bold">{study.company}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                      <span className="inline-flex items-center text-sm font-medium text-accent opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        View case study
                        <ArrowUpRight size={14} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/our-work">
                <Button
                  variant="outline"
                  size="lg"
                  className={buttonModifiers.interactive + " font-medium"}
                >
                  View all case studies
                  <ArrowUpRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-black">
          <div className="container-custom">
            <div className="bg-black/30 p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your business with {title.toLowerCase()}?</h2>
                  <p className="text-lg text-foreground/80 mb-0">
                    Our expert team is ready to help you achieve your goals and drive results.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-end">
                  <Link to="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className={buttonModifiers.interactive + " font-medium w-full md:w-auto justify-center"}
                    >
                      Get started
                      <ArrowUpRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button
                      variant="outline"
                      size="lg"
                      className={buttonModifiers.interactive + " font-medium w-full md:w-auto justify-center"}
                    >
                      View pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceTemplate;