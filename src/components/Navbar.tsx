
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const checkBannerVisible = () => {
      const bannerShown = localStorage.getItem('bannerShown');
      const bannerExpiry = localStorage.getItem('bannerExpiry');
      const discountUsed = localStorage.getItem('discountUsed');
      
      if (discountUsed === 'true') {
        setIsBannerVisible(false);
        return;
      }
      
      if (bannerShown === 'true' && bannerExpiry) {
        const expiryTime = parseInt(bannerExpiry, 10);
        const currentTime = new Date().getTime();
        
        setIsBannerVisible(expiryTime > currentTime);
      }
    };
    
    // Listen for banner visibility changes
    const handleBannerVisibilityChanged = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsBannerVisible(customEvent.detail.visible);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);
    checkBannerVisible();
    
    const handleStorageChange = () => {
      checkBannerVisible();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);
    };
  }, []);

  return (
    <header 
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'}`} 
      style={{ top: isBannerVisible ? '60px' : '0' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold">HANZO</Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/#services" className="text-primary/80 hover:text-primary font-medium transition">Services</Link>
            <Link to="/#why-hanzo" className="text-primary/80 hover:text-primary font-medium transition">Why Hanzo</Link>
            <Link to="/projects" className="text-primary/80 hover:text-primary font-medium transition">Projects</Link>
            <Link to="/#case-studies" className="text-primary/80 hover:text-primary font-medium transition">Case Studies</Link>
            <Link to="/#testimonials" className="text-primary/80 hover:text-primary font-medium transition">Testimonials</Link>
            <Link to="/#pricing" className="text-primary/80 hover:text-primary font-medium transition">Pricing</Link>
            <Link to="/#faq" className="text-primary/80 hover:text-primary font-medium transition">FAQ</Link>
          </nav>
          
          <div className="hidden lg:block">
            <Link to="/#get-started" className="bg-transparent text-white border border-white rounded-full py-2 px-4 inline-flex items-center font-medium hover:bg-white/10 transition-all duration-300">
              Let's talk
              <ArrowUpRight size={16} className="ml-1 text-white" />
            </Link>
          </div>
          
          <button 
            className="lg:hidden p-2 text-primary focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div className={`lg:hidden bg-beige-50 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen shadow-md' : 'max-h-0'}`}>
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/#services" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/#why-hanzo" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Why Hanzo</Link>
            <Link to="/projects" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/#case-studies" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
            <Link to="/#testimonials" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
            <Link to="/#pricing" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link to="/#faq" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/#get-started" className="bg-transparent text-white border border-white rounded-full py-2 px-4 inline-flex items-center w-fit hover:bg-white/10 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              Let's talk
              <ArrowUpRight size={16} className="ml-1 text-white" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
