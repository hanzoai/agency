import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const clientLogos = [
  'Triller', 'Damon', 'Bellabeat', 'Unikrn', 'Cover', 'Casper', 'Myle', 'Drumpants', 'Cove', 'Aura', 'KANOA', 'SKULLY', 'LUX', 'ZOO'
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
    // overflow-x-clip: the decorative blurs below sit at -right-20 and animate
    // outward, so their right edge lands past the viewport and the whole
    // document scrolls sideways at >=sm. Clip rather than hide -- `hidden`
    // would force overflow-y to auto and make this a scroll container.
    <div className="bg-black text-white overflow-x-clip">
      {/* Main Hero Section */}
      <div className="min-h-screen flex flex-col pt-16">
        <div className="flex-grow flex items-center">
          <div className="container-custom pt-16 pb-28 sm:pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content - Centered on mobile */}
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono mb-6 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>One plan. $999 a month. Then call us.</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="animated-text-container">
                    <span className="animated-text">Your forward-deployed</span>{' '}
                    <span className="animated-text">AI team.</span>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 mt-6 lg:mt-8">
                  Run ads and resell Hanzo, white-labeled as your own AI agency. One workstream at a time. More than that, call us.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    to="/payment?plan=agency"
                    className="bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition hover:bg-white/90 flex items-center justify-center w-full sm:w-auto text-sm shadow-lg cursor-pointer"
                  >
                    <span>Start for $999</span> <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white/10 hover:bg-white/15 border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-semibold transition text-center w-full sm:w-auto text-sm cursor-pointer"
                  >
                    <span>Call us</span>
                  </Link>
                </div>
              </div>

              {/* Hero Graphics - Hidden on small mobile, centered on larger screens */}
              <div className="relative hidden sm:block">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float -z-10"></div>
                <div className="absolute bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed -z-10"></div>

                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/15 rounded-2xl p-6 lg:p-8 shadow-2xl">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-sm text-gray-400">Agency</div>
                      <div className="text-5xl font-bold tracking-tight">$999</div>
                    </div>
                    <div className="text-right text-sm text-gray-400">per month<br />pause anytime</div>
                  </div>
                  <ul className="mt-6 space-y-2.5 text-sm text-gray-200">
                    <li>White-label Hanzo as your own AI agency</li>
                    <li>Run ads and resell under your brand</li>
                    <li>Unlimited requests, one workstream at a time</li>
                    <li>Engineering, AI, design, research, and growth</li>
                    <li>You own everything we ship</li>
                  </ul>
                  <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold">12+</div>
                      <div className="text-xs text-gray-400">years of AI experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-xs text-gray-400">venture-funded startups</div>
                    </div>
                  </div>
                  <Link
                    to="/payment?plan=agency"
                    className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 flex items-center justify-center"
                  >
                    Start for $999 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Mobile Stats - Visible only on small screens */}
              <div className="sm:hidden mt-8 mb-16">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-white/15 rounded-2xl p-6 text-left">
                  <div className="text-sm text-gray-400">Agency</div>
                  <div className="text-4xl font-bold">$999<span className="text-base font-normal text-gray-400">/mo</span></div>
                  <p className="text-sm text-gray-300 mt-3">White-label the platform. Run ads. Resell it as your agency. One workstream at a time.</p>
                  <div className="grid grid-cols-2 gap-3 mt-4 pr-12">
                    <div>
                      <div className="text-xl font-bold">12+</div>
                      <div className="text-xs text-gray-400">years of AI experience</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">100+</div>
                      <div className="text-xs text-gray-400">venture-funded startups</div>
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
