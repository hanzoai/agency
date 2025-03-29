import { useState } from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter, Github, MessageSquare, Mail, MapPin, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;

    setSubscribeStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribeStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <footer className="relative bg-black pt-20 pb-12 border-t border-gray-800 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl transform rotate-12 animate-pulse-glow"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl transform rotate-12 animate-pulse-glow"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Top Section with Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-800">
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-bold tracking-tight leading-tight">
              Join our newsletter to stay<br /> in the AI transformation loop
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Get the latest AI insights, case studies, and strategic updates directly in your inbox.
            </p>
          </div>

          <div className="flex items-center">
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-full pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out"
                >
                  {subscribeStatus === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : subscribeStatus === 'success' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>

              {subscribeStatus === 'success' && (
                <p className="mt-2 text-green-500 text-sm animate-fade-in">
                  Thanks for subscribing! Check your inbox soon.
                </p>
              )}
              {subscribeStatus === 'error' && (
                <p className="mt-2 text-red-500 text-sm animate-fade-in">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-3 text-gray-500 text-xs">
                By subscribing, you agree to our privacy policy and allow us to send you emails. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Main Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group transition-all duration-300 ease-in-out transform hover:translate-x-1">
              <img src="/images/logo/logo.png" alt="Hanzo" className="h-10 w-auto" />
              <span className="text-2xl font-semibold tracking-tight text-white">Hanzo</span>
            </div>

            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Intelligent collaboration between human expertise and AI innovation. Transforming traditional creative paradigms.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8"
                className="group bg-black text-white border border-white px-8 py-3.5 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-200 ease-in-out inline-flex items-center">
                Schedule a Consultation
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <Link to="/login"
                className="group bg-transparent text-white border border-gray-700 hover:border-white px-8 py-3.5 rounded-full font-medium hover:bg-black/20 transition-all duration-200 ease-in-out inline-flex items-center">
                Login / Sign Up
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white text-lg font-medium">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/creative-design" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Creative Design</span>
                </Link>
              </li>
              <li>
                <Link to="/services/specialized-production" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Production</span>
                </Link>
              </li>
              <li>
                <Link to="/services/ai-services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">AI Services</span>
                </Link>
              </li>
              <li>
                <Link to="/services/marketing-services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Pricing</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white text-lg font-medium">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/capabilities/cloud" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Cloud</span>
                </Link>
              </li>
              <li>
                <Link to="/capabilities/data-ai" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Data & AI</span>
                </Link>
              </li>
              <li>
                <Link to="/capabilities/digital-engineering" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Digital Engineering</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Industries</span>
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">All Capabilities</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white text-lg font-medium">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-200">
                  Hanzo Industries, Inc.<br />
                  1828 Golden Gate Ave<br />
                  San Francisco, CA 94115
                </span>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                <Mail size={20} className="text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <a href="mailto:hi@hanzo.agency" className="text-gray-400 group-hover:text-white transition-colors duration-200">hi@hanzo.agency</a>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                <Phone size={20} className="text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <a href="tel:+14153732496" className="text-gray-400 group-hover:text-white transition-colors duration-200">+1 415 373 2496</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-6 md:mb-0 flex items-center">
            <span>© {currentYear} Hanzo Industries Inc.</span>
            <span className="mx-2 text-gray-700">•</span>
            <span className="flex items-center text-primary/80">
              <span className="mr-1">Made with</span>
              <span className="relative inline-flex h-3 w-3 mx-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="ml-1">AI + Human Creativity</span>
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="https://instagram.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/hanzo-inc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Github size={20} />
            </a>
            <a href="https://discord.com/invite/Xxxxxxx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <MessageSquare size={20} />
            </a>
          </div>

          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;