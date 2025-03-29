import { ArrowUpRight, Instagram, Facebook, Twitter, Github, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';

const Footer = () => {
  return (
    <footer className="bg-background py-16 md:py-20 border-t border-border/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo/logo.png" alt="Hanzo" className="h-8 w-auto" />
              <span className="text-xl font-semibold tracking-tight">Hanzo</span>
            </div>
            <p className="text-foreground/70 text-lg mb-8 max-w-md">
              The services arm of an AI tech powerhouse, building tomorrow's solutions with today's teams.
            </p>
            <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8">
              <Button 
                variant="primary" 
                size="default" 
                className={buttonModifiers.interactive}
              >
                Partner with us
                <ArrowUpRight size={14} className="ml-1" />
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-foreground/70 hover:text-foreground transition">Services</a></li>
              <li><a href="/#why-hanzo" className="text-foreground/70 hover:text-foreground transition">Why Hanzo</a></li>
              <li><Link to="/case-studies" className="text-foreground/70 hover:text-foreground transition">Case Studies</Link></li>
              <li><a href="/#pricing" className="text-foreground/70 hover:text-foreground transition">Pricing</a></li>
              <li><a href="/#faq" className="text-foreground/70 hover:text-foreground transition">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-foreground/60 mt-1 flex-shrink-0" />
                <span className="text-foreground/70">
                  Hanzo Industries, Inc.<br/>
                  1828 Golden Gate Ave<br/>
                  San Francisco, CA 94115
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-foreground/60 flex-shrink-0" />
                <a href="mailto:hi@hanzo.agency" className="text-foreground/70 hover:text-foreground transition">hi@hanzo.agency</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-foreground/60 flex-shrink-0" />
                <a href="tel:+14153732496" className="text-foreground/70 hover:text-foreground transition">+1 415 373 2496</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 md:order-2 mb-6 md:mb-0">
            <a href="https://instagram.com/hanzoai" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-foreground transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com/hanzo-inc" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-foreground transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/hanzoai" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-foreground transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href="https://discord.com/invite/Xxxxxxx" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-foreground transition-colors">
              <MessageSquare size={18} />
            </a>
          </div>
          
          <div className="text-sm text-foreground/60 md:order-1">© {new Date().getFullYear()} Hanzo Industries Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
