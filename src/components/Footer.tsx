import { ArrowUpRight, Instagram, Facebook, Twitter, Github, MessageSquare, Mail, MapPin, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '@/data/contact';
import { WaitlistJoin } from '@hanzo/waitlist';
import '@hanzo/waitlist/styles.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer
      style={{
        position: 'relative',
        background: 'var(--background, #000)',
        paddingBlock: 'var(--band) calc(var(--band) / 2)',
        borderTop: '1px solid var(--pane-edge)',
        overflow: 'hidden',
      }}
    >

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
            {/* The waitlist is its own product: @hanzo/waitlist speaks
                 POST /v1/waitlist/join, which Hanzo Base serves. This site
                 renders it and owns none of the transport. */}
            <WaitlistJoin
              waitlist="agency"
              baseUrl="https://api.hanzo.ai"
              title=""
              subtitle=""
              submitLabel="Subscribe"
            />
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

            <div className="pt-4 flex flex-col gap-3 w-fit">
              <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8"
                className="group bg-white text-black border border-gray-700 px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 ease-in-out inline-flex items-center justify-start whitespace-nowrap">
                Schedule a Consultation
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="https://auth.hanzo.ai"
                className="group bg-transparent text-white border border-gray-700 hover:border-white px-8 py-3.5 rounded-full font-medium hover:bg-black/20 transition-all duration-200 ease-in-out inline-flex items-center justify-between whitespace-nowrap">
                Login / Sign Up
                <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </a>
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
                  {contact.entity}<br />
                  {contact.address[0]}<br />
                  {contact.address[1]}
                </span>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                <Mail size={20} className="text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <a href={`mailto:${contact.email}`} className="text-gray-400 group-hover:text-white transition-colors duration-200">{contact.email}</a>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                <Phone size={20} className="text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <a href={contact.phoneHref} className="text-gray-400 group-hover:text-white transition-colors duration-200">{contact.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-6 md:mb-0 flex items-center">
            <span>© {currentYear} {contact.entity}</span>
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
            <a href="https://www.instagram.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/hanzo-inc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
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