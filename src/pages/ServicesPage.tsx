import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { PlanCards } from '@/components/Pricing';
import { services } from '@/data/services';
import ServiceTemplate from './services/ServiceTemplate';

// Service category interface
interface ServiceCategory {
  title: string;
  color: string;
  services: Service[];
}

// Service interface
interface Service {
  name: string;
  description: string;
  icon: string;
  link: string;
}

// ServicesPage component
const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('creative');

  // Service categories data
  const serviceCategories: ServiceCategory[] = [
    // ... existing code ...
  ];

  // Filter services based on active category
  const filteredServices = serviceCategories.find(category =>
    category.title.toLowerCase().includes(activeCategory.toLowerCase())
  )?.services || [];

  // Get the service param from the URL
  const { "*": serviceParam } = useParams<{ "*": string }>();

  // If a specific service is requested, render the ServiceTemplate component
  if (serviceParam) {
    // Extract the service ID from the URL path
    const serviceId = serviceParam;
    const service = services[serviceId];

    if (service) {
      return <ServiceTemplate service={service} />;
    } else {
      // Return a 404 page for unknown service
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-400 mb-8">The service "{serviceId}" could not be found.</p>
            <Link to="/services" className="text-blue-400 hover:underline">
              ← Back to Services
            </Link>
          </div>
        </div>
      );
    }
  }

  // Otherwise render the main services overview page
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar removed since it's now global */}

      <main className="pt-24">
        {/* Hero Section */}
        <div className="pt-32 pb-20 border-b border-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">AI-ENABLED CREATIVE SOLUTIONS</h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transforming traditional creative paradigms with an AI-enhanced approach that delivers measurable outcomes.
              </p>

              <a href="https://auth.hanzo.ai" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Categories Tab */}
        <div className="py-16 border-b border-gray-800 bg-black">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {serviceCategories.map((category) => (
                <button
                  key={category.title}
                  className={`px-6 py-3 rounded-full font-medium text-base transition-colors ${activeCategory.toLowerCase() === category.title.toLowerCase().split(' ')[0].toLowerCase()
                    ? `bg-${category.color} text-black`
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  onClick={() => setActiveCategory(category.title.toLowerCase().split(' ')[0])}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.name} className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link to={service.link} className="text-white hover:text-blue-400 inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-300">
                All services available in our simple monthly subscription. Scale up or down as needed.
              </p>
            </div>

            <PlanCards />
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-black border-t border-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Creative Process?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Join innovative companies leveraging AI-powered creative solutions for measurable results.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/pricing" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
                  See pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8" className="border border-white px-8 py-4 rounded-full font-medium hover:bg-white/10 inline-flex items-center text-lg">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;