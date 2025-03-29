import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('creative');
  
  // Service categories data
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Creative Design",
      color: "lime-400",
      services: [
        {
          name: "Ad Creative",
          description: "Eye-catching designs that perform and convert across all platforms",
          icon: "🎯",
          link: "/services/ad-creative"
        },
        {
          name: "Social Media Creative",
          description: "Engaging assets for all platforms optimized for maximum impact",
          icon: "📱",
          link: "/services/social-media-creative"
        },
        {
          name: "Presentation Design",
          description: "Captivating slides that tell your story and engage your audience",
          icon: "📊",
          link: "/services/presentation-design"
        },
        {
          name: "Illustration Design",
          description: "Visual storytelling for your brand that captures attention",
          icon: "🎨",
          link: "/services/illustration-design"
        },
        {
          name: "Branding Services",
          description: "Expertise & custom design services to define your identity",
          icon: "⭐",
          link: "/services/branding-services"
        },
        {
          name: "Web Design",
          description: "Stunning websites built to engage and convert visitors",
          icon: "🖥️",
          link: "/services/web-design"
        }
      ]
    },
    {
      title: "Production",
      color: "emerald-500",
      services: [
        {
          name: "Video Production",
          description: "Effortless video production at scale for all your needs",
          icon: "🎬",
          link: "/services/video-production"
        },
        {
          name: "Motion Design",
          description: "Dynamic animations for websites, ads, and presentations",
          icon: "✨",
          link: "/services/motion-design"
        },
        {
          name: "3D & AR Design",
          description: "Innovative solutions for 3D design services and AR experiences",
          icon: "🔍",
          link: "/services/3d-ar-design"
        },
        {
          name: "Email Creation",
          description: "Click-worthy emails that drive engagement and conversions",
          icon: "📧",
          link: "/services/email-creation"
        },
        {
          name: "Print Design",
          description: "Tangible designs that leave a lasting impression on your audience",
          icon: "📚",
          link: "/services/print-design"
        },
        {
          name: "Packaging & Merchandise",
          description: "Bring your brand to life with custom packaging and merchandise",
          icon: "👕",
          link: "/services/packaging-merchandise-design"
        }
      ]
    },
    {
      title: "AI Services",
      color: "blue-500",
      services: [
        {
          name: "AI Enhanced Creative",
          description: "Human brilliance powered by AI for extraordinary results",
          icon: "🤖",
          link: "/services/ai-enhanced-creative"
        },
        {
          name: "AI Consulting",
          description: "Maximize AI with tailored strategies for your business",
          icon: "💬",
          link: "/services/ai-consulting"
        },
        {
          name: "Concept Creation",
          description: "Big ideas crafted for maximum impact using AI and human creativity",
          icon: "💡",
          link: "/services/concept-creation"
        },
        {
          name: "eBooks & Reports",
          description: "Your digital content supercharged with AI-powered insights",
          icon: "📄",
          link: "/services/ebooks-report-design"
        }
      ]
    },
    {
      title: "Marketing",
      color: "amber-500",
      services: [
        {
          name: "Marketing Strategy",
          description: "Grow your brand with expert consultants and data-driven approaches",
          icon: "📈",
          link: "/services/marketing-strategy"
        }
      ]
    }
  ];

  // Filter services based on active category
  const filteredServices = serviceCategories.find(category => 
    category.title.toLowerCase().includes(activeCategory.toLowerCase())
  )?.services || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 border-b border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI-ENABLED CREATIVE SOLUTIONS</h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Transforming traditional creative paradigms with an AI-enhanced approach that delivers measurable outcomes.
            </p>
            
            <Link to="/login" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
                className={`px-6 py-3 rounded-full font-medium text-base transition-colors ${
                  activeCategory.toLowerCase() === category.title.toLowerCase().split(' ')[0].toLowerCase()
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
          
          <div className="max-w-lg mx-auto">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
              <div className="p-8 bg-blue-600 text-center">
                <h3 className="text-3xl font-bold mb-2">Enterprise Plan</h3>
                <div className="text-5xl font-bold my-6">$5,000<span className="text-xl font-normal">/month</span></div>
                <p className="text-lg opacity-90">Billed monthly. Cancel anytime.</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Access to all creative services with unlimited revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Dedicated creative team for your projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" />
                    <span>AI-powered creative solutions and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Priority support and fast turnaround times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Regular strategy meetings and performance reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Complete asset ownership and source files</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link to="/login" className="block w-full bg-white text-black py-4 rounded-full text-center font-medium hover:bg-white/90 transition-colors text-lg">
                    Sign Up Now
                  </Link>
                  <p className="text-center mt-4 text-gray-400">No credit card required to start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">
              Our solutions have helped companies achieve remarkable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/casper/logo.png" alt="Casper" className="h-8" />
              </div>
              <p className="text-gray-300 mb-4">
                "Hanzo's AI-enhanced creative approach helped us increase our conversion rates by 65% while maintaining our brand identity."
              </p>
              <p className="font-medium">Marketing Director, Casper</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/triller/logo.png" alt="Triller" className="h-8" />
              </div>
              <p className="text-gray-300 mb-4">
                "The team at Hanzo delivered exceptional creative assets that helped us stand out in a crowded marketplace."
              </p>
              <p className="font-medium">CMO, Triller</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/damon/logo.png" alt="Damon Motorcycles" className="h-8" />
              </div>
              <p className="text-gray-300 mb-4">
                "Hanzo's work on our brand and marketing materials directly contributed to our successful launch and funding rounds."
              </p>
              <p className="font-medium">CEO, Damon Motorcycles</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Creative Process?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Join innovative companies leveraging AI-powered creative solutions for measurable results.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/login" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
                Sign Up for $5,000/month <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8" className="border border-white px-8 py-4 rounded-full font-medium hover:bg-white/10 inline-flex items-center text-lg">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;