import { ArrowUpRight, Instagram, Facebook, Twitter, Github, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-20 pb-12 border-t border-gray-800">
      <div className="container-custom">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <img src="/images/logo/logo.png" alt="Hanzo" className="h-10 w-auto" />
              <span className="text-2xl font-semibold tracking-tight">Hanzo</span>
            </div>
            
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Intelligent collaboration between human expertise and AI innovation. Transforming traditional creative paradigms.
            </p>
            
            <div className="pt-4">
              <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8" className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center">
                Schedule a Consultation <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white text-lg font-medium">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/creative-design" className="text-gray-400 hover:text-white transition-colors">Creative Design</Link></li>
              <li><Link to="/services/specialized-production" className="text-gray-400 hover:text-white transition-colors">Production</Link></li>
              <li><Link to="/services/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/services/marketing-services" className="text-gray-400 hover:text-white transition-colors">Marketing</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white text-lg font-medium">Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="/capabilities/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud</Link></li>
              <li><Link to="/capabilities/data-ai" className="text-gray-400 hover:text-white transition-colors">Data & AI</Link></li>
              <li><Link to="/capabilities/digital-engineering" className="text-gray-400 hover:text-white transition-colors">Digital Engineering</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/capabilities" className="text-gray-400 hover:text-white transition-colors">All Capabilities</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white text-lg font-medium">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Hanzo Industries, Inc.<br/>
                  1828 Golden Gate Ave<br/>
                  San Francisco, CA 94115
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <a href="mailto:hi@hanzo.agency" className="text-gray-400 hover:text-white transition-colors">hi@hanzo.agency</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <a href="tel:+14153732496" className="text-gray-400 hover:text-white transition-colors">+1 415 373 2496</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-800 w-full mb-10"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-6 md:mb-0">© {currentYear} Hanzo Industries Inc. All rights reserved.</div>
          
          <div className="flex space-x-6">
            <a href="https://instagram.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/hanzo-inc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://discord.com/invite/Xxxxxxx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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