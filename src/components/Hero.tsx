import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const clientLogos = [
  'Triller', 'Damon', 'Bellabeat', 'Unikrn', 'Cover', 'Casper', 'Myle', 
  'Coinbase', 'Oracle', 'Microsoft', 'Adobe', 'Tesla', 'SpaceX'
];

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Main Hero Section */}
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center">
          <div className="container-custom py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  AI is our super power.
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
                  Transforming traditional creative paradigms with an AI-enhanced approach that delivers measurable outcomes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/schedule" className="bg-white text-black px-8 py-3.5 rounded-full font-medium transition hover:bg-white/90 flex items-center">
                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/services" className="border border-white/60 hover:border-white px-8 py-3.5 rounded-full text-white font-medium transition hover:bg-white/10">
                    Explore Services
                  </Link>
                </div>
              </div>
              
              {/* Hero Graphics */}
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg blur-lg opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg blur-lg opacity-20"></div>
                  
                  <div className="text-sm text-gray-400 mb-2">THE AI-POWERED ENGINE</div>
                  <h3 className="text-2xl font-bold mb-4">Powering 30+ successful exits and countless industry awards.</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-blue-400">92%</div>
                      <div className="text-sm text-gray-400">conversion rate increase</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-emerald-400">3.5x</div>
                      <div className="text-sm text-gray-400">ROI improvement</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-amber-400">75%</div>
                      <div className="text-sm text-gray-400">time to market reduction</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-purple-400">24+</div>
                      <div className="text-sm text-gray-400">industry awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrolling Clients Section */}
        <div className="py-8 border-t border-gray-800/50 backdrop-blur-md bg-black/30">
          <div className="container-custom">
            <div className="flex justify-between items-center">
              <div className="text-sm uppercase text-gray-500 font-medium">Trusted by industry leaders</div>
              <div className="h-px bg-gray-800 flex-grow mx-8"></div>
              <div className="overflow-hidden relative w-3/4">
                <div className="flex animate-marquee whitespace-nowrap">
                  {clientLogos.map((client, index) => (
                    <span key={index} className="text-xl mx-8 text-gray-400">{client}</span>
                  ))}
                  {clientLogos.map((client, index) => (
                    <span key={`repeat-${index}`} className="text-xl mx-8 text-gray-400">{client}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;