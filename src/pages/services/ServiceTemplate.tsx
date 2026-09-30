import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { buttonModifiers } from '@/lib/button-utils';
import Footer from '@/components/Footer';
import CaseStudyTrio from '@/components/CaseStudyTrio';
import { Button } from '@/components/ui/button';
import { Service } from '@/data/services';
import { app } from '@/data/contact';

interface ServiceTemplateProps {
  service: Service;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ service }) => {
  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  const { title, description, icon, color, services, features, caseStudies } = service;

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className={`inline-flex items-center text-${color}-400 mb-4`}>
                  <span className="text-4xl">{icon}</span>
                  <h4 className="font-medium ml-2">Services</h4>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-white/80 mb-8">{description}</p>
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
              <div className={`rounded-3xl bg-gradient-to-br from-black to-gray-900 p-10 border border-gray-800`}>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                      <span className="text-2xl">{service.icon}</span>
                      <h3 className="text-xl font-bold mt-4 mb-2">{service.name}</h3>
                      <p className="text-sm text-white/70">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why choose our {title} services</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We deliver exceptional results through a combination of experienced talent, proven processes, and cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className={`w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4`}>
                    <Check className={`h-5 w-5 text-green-400`} />
                  </div>
                  <p className="text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CaseStudyTrio
          studies={caseStudies}
          lede={`See how we've helped businesses across industries achieve their goals through ${title.toLowerCase()}.`}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="container-custom">
            <div className="bg-black/30 p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your business with {title.toLowerCase()}?</h2>
                  <p className="text-lg text-white/80 mb-0">
                    Our expert team is ready to help you achieve your goals and drive results.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-end">
                  <a href={app.login}>
                    <Button
                      variant="primary"
                      size="lg"
                      className={buttonModifiers.interactive + " font-medium w-full md:w-auto justify-center"}
                    >
                      Try Hanzo
                      <ArrowUpRight size={16} className="ml-1" />
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className={buttonModifiers.interactive + " font-medium w-full md:w-auto justify-center"}
                    >
                      Talk to us
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
