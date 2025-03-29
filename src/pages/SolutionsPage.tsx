import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Category interface
interface Category {
  title: string;
  description: string;
  icon: string;
  link: string;
  id?: string; // Add id field for matching with query params
}

const SolutionsPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'capabilities' | 'industries'>('capabilities');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

  // Initialize with query parameters
  useEffect(() => {
    const industry = searchParams.get('industry');
    const capability = searchParams.get('capability');

    if (industry) {
      setActiveTab('industries');
      setSelectedIndustry(industry);
    } else if (capability) {
      setActiveTab('capabilities');
      setSelectedCapability(capability);
    }
  }, [searchParams]);

  // Capabilities data
  const capabilities: Category[] = [
    {
      title: "Cloud",
      description: "Secure, scalable cloud solutions tailored to your business needs",
      icon: "☁️",
      link: "/solutions?capability=cloud",
      id: "cloud"
    },
    {
      title: "Cybersecurity",
      description: "Protecting your digital assets with advanced security solutions",
      icon: "🔒",
      link: "/solutions?capability=cybersecurity",
      id: "cybersecurity"
    },
    {
      title: "Data and Artificial Intelligence",
      description: "Unleashing the power of your data with AI-driven insights",
      icon: "🧠",
      link: "/solutions?capability=data-ai",
      id: "data-ai"
    },
    {
      title: "Digital Engineering",
      description: "Building robust software solutions with cutting-edge technologies",
      icon: "⚙️",
      link: "/solutions?capability=digital-engineering",
      id: "digital-engineering"
    },
    {
      title: "Emerging Technology",
      description: "Harnessing next-generation technologies to drive innovation",
      icon: "🚀",
      link: "/solutions?capability=emerging-tech",
      id: "emerging-tech"
    },
    {
      title: "Finance and Risk Management",
      description: "Optimizing financial operations and mitigating risks",
      icon: "💰",
      link: "/solutions?capability=finance-risk",
      id: "finance-risk"
    },
    {
      title: "Fractional CXO",
      description: "Executive leadership expertise when you need it most",
      icon: "👑",
      link: "https://sensei.group",
      id: "fractional-cxo"
    }
  ];

  // Industries data
  const industries: Category[] = [
    {
      title: "Aerospace and Defense",
      description: "Advanced solutions for aerospace innovation and defense capabilities",
      icon: "✈️",
      link: "/solutions?industry=aerospace-defense",
      id: "aerospace-defense"
    },
    {
      title: "Automotive",
      description: "Driving digital transformation in the automotive industry",
      icon: "🚗",
      link: "/solutions?industry=automotive",
      id: "automotive"
    },
    {
      title: "Banking",
      description: "Modernizing banking operations with digital-first solutions",
      icon: "🏦",
      link: "/solutions?industry=banking",
      id: "banking"
    },
    {
      title: "Capital Markets",
      description: "Optimizing trading and investment operations with technology",
      icon: "📈",
      link: "/solutions?industry=capital-markets",
      id: "capital-markets"
    },
    {
      title: "Chemicals",
      description: "Digital transformation solutions for the chemical industry",
      icon: "🧪",
      link: "/solutions?industry=chemicals",
      id: "chemicals"
    },
    {
      title: "Communications and Media",
      description: "Innovative solutions for the evolving media landscape",
      icon: "📱",
      link: "/solutions?industry=communications-media",
      id: "communications-media"
    },
    {
      title: "Consumer Goods and Services",
      description: "Enhancing customer experience in the consumer goods sector",
      icon: "🛍️",
      link: "/solutions?industry=consumer-goods",
      id: "consumer-goods"
    },
    {
      title: "Energy and Utilities",
      description: "Sustainable and efficient solutions for the energy sector",
      icon: "⚡",
      link: "/solutions?industry=energy",
      id: "energy"
    },
    {
      title: "Healthcare and Life Sciences",
      description: "Innovative technology solutions for healthcare providers",
      icon: "🩺",
      link: "/solutions?industry=healthcare",
      id: "healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">INDUSTRY-SPECIFIC EXPERTISE</h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our specialized teams deliver tailored solutions for your unique business challenges across industries.
            </p>

            <Link to="/login" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="pb-20 border-b border-gray-800">
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900 p-1 rounded-full inline-flex">
              <button
                className={`px-8 py-3 rounded-full font-medium text-base transition-colors ${activeTab === 'capabilities' ? 'bg-white text-black' : 'text-white'
                  }`}
                onClick={() => setActiveTab('capabilities')}
              >
                Capabilities
              </button>
              <button
                className={`px-8 py-3 rounded-full font-medium text-base transition-colors ${activeTab === 'industries' ? 'bg-white text-black' : 'text-white'
                  }`}
                onClick={() => setActiveTab('industries')}
              >
                Industries
              </button>
            </div>
          </div>

          {activeTab === 'capabilities' ? (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Core Capabilities</h2>
                <p className="text-lg text-gray-300">
                  Comprehensive expertise across key technology domains to solve your complex business challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((capability) => (
                  <a
                    href={capability.link}
                    key={capability.title}
                    className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{capability.icon}</div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{capability.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">{capability.description}</p>
                    <div className="text-white group-hover:text-blue-400 inline-flex items-center transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
                <p className="text-lg text-gray-300">
                  Specialized solutions designed for the unique challenges of your industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry) => (
                  <a
                    href={industry.link}
                    key={industry.title}
                    className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{industry.icon}</div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{industry.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">{industry.description}</p>
                    <div className="text-white group-hover:text-blue-400 inline-flex items-center transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Hanzo Solutions</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our unique approach combines deep industry expertise with cutting-edge technology to deliver measurable results.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Industry Expertise</h3>
                    <p className="text-gray-400">Our specialized teams understand the unique challenges in your industry.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">AI-Powered Innovation</h3>
                    <p className="text-gray-400">Cutting-edge AI technology integrated into all our solutions.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Measurable Results</h3>
                    <p className="text-gray-400">Data-driven approaches that deliver clear ROI and business impact.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Scalable Solutions</h3>
                    <p className="text-gray-400">Our solutions grow with your business needs and adapt to market changes.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-xl">
                <div className="bg-gray-900 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Enterprise Solutions Package</h3>
                  <div className="text-4xl font-bold mb-4">$5,000<span className="text-xl font-normal">/month</span></div>
                  <p className="text-gray-300 mb-8">Comprehensive access to our full suite of capabilities and industry expertise.</p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Dedicated team of industry experts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>AI-powered solutions customized for your business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Regular strategy sessions and success metrics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Priority support and implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Quarterly business reviews and optimization</span>
                    </li>
                  </ul>

                  <Link to="/login" className="block w-full bg-white text-black py-3 rounded-full text-center font-medium hover:bg-white/90 transition-colors">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-300">
              See how our solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800 overflow-hidden group">
              <div className="h-56 overflow-hidden rounded-lg mb-6 relative">
                <img
                  src="/images/damon/cover.jpg"
                  alt="Damon Motorcycles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="text-xl font-bold">Damon Motorcycles</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered engineering solutions for next-generation electric motorcycles.
              </p>
              <div className="font-bold text-gray-300 mb-2">Results:</div>
              <ul className="text-sm text-gray-400 space-y-1 mb-6">
                <li>• 40% reduction in design iteration time</li>
                <li>• 25% increase in battery efficiency</li>
                <li>• Successful Series B funding round</li>
              </ul>
              <Link to="/case-study/damon" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                View case study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800 overflow-hidden group">
              <div className="h-56 overflow-hidden rounded-lg mb-6 relative">
                <img
                  src="/images/triller/cover.jpg"
                  alt="Triller"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="text-xl font-bold">Triller</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Comprehensive digital transformation for social media platform growth.
              </p>
              <div className="font-bold text-gray-300 mb-2">Results:</div>
              <ul className="text-sm text-gray-400 space-y-1 mb-6">
                <li>• 3x increase in user engagement</li>
                <li>• 65% improvement in algorithm performance</li>
                <li>• Successful market positioning</li>
              </ul>
              <Link to="/case-study/triller" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                View case study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800 overflow-hidden group">
              <div className="h-56 overflow-hidden rounded-lg mb-6 relative">
                <img
                  src="/images/bellabeat/cover.jpg"
                  alt="Bellabeat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="text-xl font-bold">Bellabeat</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Health tech innovation through AI-powered solutions and data analysis.
              </p>
              <div className="font-bold text-gray-300 mb-2">Results:</div>
              <ul className="text-sm text-gray-400 space-y-1 mb-6">
                <li>• 45% improvement in user retention</li>
                <li>• 78% increase in health insights accuracy</li>
                <li>• Successful partnership expansions</li>
              </ul>
              <Link to="/case-study/bellabeat" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                View case study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/our-work" className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white/10 inline-flex items-center">
              View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Join leading companies achieving remarkable results with our AI-powered solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/login" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
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

export default SolutionsPage;