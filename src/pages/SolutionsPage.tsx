import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { buttonModifiers } from '@/lib/button-utils';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  industries?: string[];
}

const solutions: Record<string, Solution> = {
  'cloud': {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Transform your business with scalable, secure cloud infrastructure and services',
    icon: '☁️',
    features: [
      'Multi-cloud architecture design and implementation',
      'Cloud migration and modernization',
      'Container orchestration with Kubernetes',
      'Serverless computing solutions',
      'Cloud cost optimization',
      'Disaster recovery and business continuity'
    ],
    benefits: [
      'Reduce infrastructure costs by up to 40%',
      'Scale resources instantly based on demand',
      'Improve application performance and reliability',
      'Enable remote work and collaboration',
      'Enhance security and compliance',
      'Accelerate time to market'
    ],
    industries: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing']
  },
  'cybersecurity': {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions and threat management',
    icon: '🔒',
    features: [
      'Security assessment and audit',
      'Threat detection and response',
      'Identity and access management',
      'Data encryption and protection',
      'Security operations center (SOC)',
      'Compliance management'
    ],
    benefits: [
      'Protect against data breaches and cyber attacks',
      'Ensure regulatory compliance',
      'Reduce security incidents by up to 90%',
      'Safeguard customer trust and reputation',
      'Minimize downtime and business disruption',
      'Lower security operational costs'
    ],
    industries: ['Banking', 'Healthcare', 'Government', 'Retail', 'Technology']
  },
  'data-ai': {
    id: 'data-ai',
    title: 'Data and Artificial Intelligence',
    description: 'Unlock insights and automate processes with advanced AI and data analytics',
    icon: '🤖',
    features: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'Data warehouse and lake design',
      'Real-time data processing'
    ],
    benefits: [
      'Improve decision-making with data insights',
      'Automate repetitive tasks and processes',
      'Enhance customer experience with personalization',
      'Predict trends and prevent issues',
      'Increase operational efficiency by 50%',
      'Drive innovation and competitive advantage'
    ],
    industries: ['Retail', 'Healthcare', 'Finance', 'Manufacturing', 'Media']
  },
  'digital-engineering': {
    id: 'digital-engineering',
    title: 'Digital Engineering',
    description: 'Build modern, scalable applications with cutting-edge engineering practices',
    icon: '⚙️',
    features: [
      'Full-stack application development',
      'Microservices architecture',
      'API design and development',
      'DevOps and CI/CD pipelines',
      'Quality engineering and testing',
      'Legacy system modernization'
    ],
    benefits: [
      'Accelerate product development by 3x',
      'Improve code quality and reliability',
      'Enable rapid feature deployment',
      'Reduce technical debt',
      'Enhance team productivity',
      'Future-proof your technology stack'
    ],
    industries: ['Technology', 'Finance', 'E-commerce', 'Healthcare', 'Media']
  },
  'emerging-tech': {
    id: 'emerging-tech',
    title: 'Emerging Technology',
    description: 'Stay ahead with blockchain, IoT, AR/VR, and other cutting-edge technologies',
    icon: '🚀',
    features: [
      'Blockchain and Web3 development',
      'Internet of Things (IoT) solutions',
      'Augmented and Virtual Reality',
      'Edge computing',
      'Quantum computing readiness',
      '5G technology implementation'
    ],
    benefits: [
      'Pioneer new business models',
      'Create unique customer experiences',
      'Gain first-mover advantage',
      'Unlock new revenue streams',
      'Transform industry operations',
      'Build future-ready solutions'
    ],
    industries: ['Gaming', 'Retail', 'Manufacturing', 'Real Estate', 'Entertainment']
  },
  'finance-risk': {
    id: 'finance-risk',
    title: 'Finance and Risk Management',
    description: 'Optimize financial operations and manage risk with advanced analytics',
    icon: '📊',
    features: [
      'Risk modeling and assessment',
      'Regulatory compliance automation',
      'Financial forecasting and planning',
      'Fraud detection and prevention',
      'Portfolio optimization',
      'Real-time financial reporting'
    ],
    benefits: [
      'Reduce financial risk exposure by 60%',
      'Ensure regulatory compliance',
      'Improve forecasting accuracy',
      'Detect fraud in real-time',
      'Optimize investment returns',
      'Streamline financial operations'
    ],
    industries: ['Banking', 'Insurance', 'Capital Markets', 'Private Equity', 'Corporate Finance']
  }
};

const industries = [
  {
    id: 'aerospace-defense',
    title: 'Aerospace and Defense',
    description: 'Mission-critical systems and advanced technology solutions',
    icon: '✈️',
    solutions: ['cloud', 'cybersecurity', 'data-ai', 'digital-engineering']
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Connected vehicles and intelligent transportation systems',
    icon: '🚗',
    solutions: ['emerging-tech', 'data-ai', 'cloud', 'digital-engineering']
  },
  {
    id: 'banking',
    title: 'Banking',
    description: 'Digital banking transformation and fintech innovation',
    icon: '🏦',
    solutions: ['finance-risk', 'cybersecurity', 'cloud', 'data-ai']
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    description: 'Trading platforms and investment technology',
    icon: '📈',
    solutions: ['finance-risk', 'data-ai', 'cloud', 'cybersecurity']
  },
  {
    id: 'chemicals',
    title: 'Chemicals',
    description: 'Supply chain optimization and process automation',
    icon: '⚗️',
    solutions: ['data-ai', 'cloud', 'digital-engineering', 'emerging-tech']
  },
  {
    id: 'communications-media',
    title: 'Communications and Media',
    description: 'Content delivery and audience engagement platforms',
    icon: '📡',
    solutions: ['cloud', 'data-ai', 'digital-engineering', 'emerging-tech']
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods and Services',
    description: 'E-commerce and customer experience solutions',
    icon: '🛍️',
    solutions: ['data-ai', 'cloud', 'digital-engineering', 'emerging-tech']
  }
];

const SolutionsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const capability = searchParams.get('capability');
  const industry = searchParams.get('industry');
  const [activeTab, setActiveTab] = useState<'capabilities' | 'industries'>('capabilities');

  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  useEffect(() => {
    if (industry) {
      setActiveTab('industries');
    } else {
      setActiveTab('capabilities');
    }
  }, [capability, industry]);

  const selectedSolution = capability ? solutions[capability] : null;
  const selectedIndustry = industry ? industries.find(ind => ind.id === industry) : null;

  if (selectedSolution) {
    return (
      <div className="min-h-screen bg-black text-white">
        <main className="pt-24">
          {/* Solution Detail Hero */}
          <section className="py-24">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-6xl mb-6">{selectedSolution.icon}</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{selectedSolution.title}</h1>
                <p className="text-xl text-white/80 mb-8">{selectedSolution.description}</p>
                <div className="flex gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className={buttonModifiers.interactive}>
                      Get started
                      <ArrowUpRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" size="lg" className={buttonModifiers.interactive}>
                      View pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-gradient-to-b from-black to-gray-950">
            <div className="container-custom">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedSolution.features.map((feature, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <Check className="h-6 w-6 text-green-400 mb-4" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20">
            <div className="container-custom">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Business Benefits</h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {selectedSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries */}
          {selectedSolution.industries && (
            <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
              <div className="container-custom">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Industries We Serve</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  {selectedSolution.industries.map((ind, index) => (
                    <div key={index} className="bg-white/5 px-6 py-3 rounded-full border border-white/10">
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  if (selectedIndustry) {
    return (
      <div className="min-h-screen bg-black text-white">
        <main className="pt-24">
          {/* Industry Detail Hero */}
          <section className="py-24">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-6xl mb-6">{selectedIndustry.icon}</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{selectedIndustry.title}</h1>
                <p className="text-xl text-white/80 mb-8">{selectedIndustry.description}</p>
                <Link to="/contact">
                  <Button variant="primary" size="lg" className={buttonModifiers.interactive}>
                    Get industry insights
                    <ArrowUpRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Solutions for Industry */}
          <section className="py-20 bg-gradient-to-b from-black to-gray-950">
            <div className="container-custom">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Solutions for {selectedIndustry.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {selectedIndustry.solutions.map((solutionId) => {
                  const solution = solutions[solutionId];
                  return (
                    <Link key={solutionId} to={`/solutions?capability=${solutionId}`} className="group">
                      <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                        <div className="text-4xl mb-4">{solution.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                        <p className="text-white/70 mb-4">{solution.description}</p>
                        <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300">
                          Learn more
                          <ArrowUpRight size={16} className="ml-1" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Main Solutions Page
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Enterprise Solutions</h1>
              <p className="text-xl text-white/80">
                Comprehensive technology solutions designed to transform your business and drive growth
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="border-b border-gray-800">
          <div className="container-custom">
            <div className="flex justify-center">
              <button
                onClick={() => setActiveTab('capabilities')}
                className={`px-8 py-4 text-lg font-medium transition-all ${
                  activeTab === 'capabilities'
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                By Capability
              </button>
              <button
                onClick={() => setActiveTab('industries')}
                className={`px-8 py-4 text-lg font-medium transition-all ${
                  activeTab === 'industries'
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                By Industry
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container-custom">
            {activeTab === 'capabilities' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.values(solutions).map((solution) => (
                  <Link key={solution.id} to={`/solutions?capability=${solution.id}`} className="group">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all h-full">
                      <div className="text-4xl mb-4">{solution.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-white/70 mb-4">{solution.description}</p>
                      <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300">
                        Explore solution
                        <ArrowUpRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry) => (
                  <Link key={industry.id} to={`/solutions?industry=${industry.id}`} className="group">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all h-full">
                      <div className="text-4xl mb-4">{industry.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                      <p className="text-white/70 mb-4">{industry.description}</p>
                      <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300">
                        View solutions
                        <ArrowUpRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="container-custom">
            <div className="bg-black/30 p-12 rounded-3xl border border-white/10 backdrop-blur-sm text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our solutions can help you achieve your goals and drive innovation.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className={buttonModifiers.interactive}>
                    Schedule consultation
                    <ArrowUpRight size={16} className="ml-1" />
                  </Button>
                </Link>
                <Link to="/enterprise">
                  <Button variant="outline" size="lg" className={buttonModifiers.interactive}>
                    Enterprise solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
