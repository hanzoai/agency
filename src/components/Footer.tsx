import { ArrowUpRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-beige-50 py-16 md:py-20 border-t border-black/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white">CONTACT</h2>
            <div className="space-y-3 mb-8">
              <p className="text-primary/80">
                Hanzo Industries, Inc.<br/>
                500 Market Street, Suite 800<br/>
                San Francisco, CA 94105<br/>
                United States
              </p>
              <p className="text-primary/80">
                hello.verywell@gmail.com<br/>
                (+65) 13370-9976
              </p>
            </div>
            <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8" className="lets-talk-btn">
              Let's talk
              <ArrowUpRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <a href="#" className="geometric-circle border border-black/20 aspect-square flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="geometric-circle border border-black/20 aspect-square flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="geometric-circle border border-black/20 aspect-square flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="geometric-circle border border-black/20 aspect-square flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary/70 border-t border-black/10 pt-8">
          <div>© {new Date().getFullYear()} Hanzo Inc. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-primary transition">Index</Link>
            <Link to="/projects" className="hover:text-primary transition">Projects</Link>
            <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
