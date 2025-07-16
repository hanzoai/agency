import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const clientLogos = [
  'Triller', 'Damon', 'Bellabeat', 'Unikrn', 'Cover', 'Casper', 'Myle', 'Coinbase'
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
      <div className="min-h-screen flex flex-col pt-16">
        <div className="flex-grow flex items-center">
          <div className="container-custom py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content - Centered on mobile */}
              <div className="relative z-10 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="animated-text-container">
                    <span className="animated-text">AI is our </span>
                    <Link to="/onboarding" className="animated-text animated-underline hover:no-underline">super power.</Link>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-xl mx-auto lg:mx-0 mt-6 lg:mt-10">
                  Transforming traditional creative paradigms with an AI-enhanced approach that delivers measurable outcomes.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://calendar.app.google/z1YsZQrqR4s6jQqD8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium transition hover:bg-white/90 flex items-center justify-center rainbow-hover-btn w-full sm:w-auto"
                  >
                    <span>Schedule a Consultation</span> <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Link 
                    to="/services" 
                    className="border border-white/60 hover:border-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-medium transition hover:bg-white/10 text-center w-full sm:w-auto"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Hero Graphics - Hidden on small mobile, centered on larger screens */}
              <div className="relative hidden sm:block">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float -z-10"></div>
                <div className="absolute bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed -z-10"></div>

                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg blur-lg opacity-20 animate-pulse-slow -z-10"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg blur-lg opacity-20 animate-pulse-slow-delayed -z-10"></div>

                  <div className="text-sm text-gray-400 mb-2 text-center lg:text-left">THE AI-POWERED ENGINE</div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center lg:text-left">Powering 30+ successful exits and countless industry awards.</h3>

                  <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-6 lg:mt-8">
                    <div className="bg-gray-800/50 rounded-lg p-3 lg:p-4 text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white">92%</div>
                      <div className="text-xs lg:text-sm text-gray-400">conversion rate increase</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 lg:p-4 text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white">3.5x</div>
                      <div className="text-xs lg:text-sm text-gray-400">ROI improvement</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 lg:p-4 text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white">75%</div>
                      <div className="text-xs lg:text-sm text-gray-400">time to market reduction</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 lg:p-4 text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white">24+</div>
                      <div className="text-xs lg:text-sm text-gray-400">industry awards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Stats - Visible only on small screens */}
              <div className="sm:hidden mt-8">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
                  <div className="text-sm text-gray-400 mb-2 text-center">THE AI-POWERED ENGINE</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Powering 30+ successful exits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">92%</div>
                      <div className="text-xs text-gray-400">conversion increase</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">3.5x</div>
                      <div className="text-xs text-gray-400">ROI improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Clients Section */}
        <div className="py-8 lg:py-12 border-t border-gray-800/50 backdrop-blur-md bg-black/30">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-sm lg:text-base uppercase text-white font-medium text-center lg:text-left">
                Trusted by<br className="hidden lg:block" />
                <span className="lg:hidden"> </span>industry leaders
              </div>
              <div className="hidden lg:block h-px bg-gray-800 flex-grow mx-8"></div>
              <div className="overflow-hidden relative w-full lg:w-3/4">
                <div className="flex animate-marquee whitespace-nowrap">
                  {/* Repeat the logos 4 times for smoother infinite scroll */}
                  {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                    <span key={index} className="text-xl sm:text-2xl lg:text-3xl mx-6 lg:mx-8 text-white font-bold relative group cursor-pointer">
                      {client}
                      <span className="sparkle-emoji">✨</span>
                    </span>
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
