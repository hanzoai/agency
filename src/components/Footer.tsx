
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-beige-50 py-16 md:py-20 border-t border-black/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">CONTACT</h2>
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
            <Link to="/#contact" className="lets-talk-btn">
              Let's talk
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="geometric-circle border border-black/20 aspect-square flex items-center justify-center">IG</div>
            <div className="geometric-circle border border-black/20 aspect-square flex items-center justify-center">FB</div>
            <div className="geometric-circle border border-black/20 aspect-square flex items-center justify-center">X</div>
            <div className="geometric-circle border border-black/20 aspect-square flex items-center justify-center">LI</div>
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
