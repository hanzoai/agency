import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
    
    window.addEventListener('scroll', handleScroll);
    checkBannerVisible();
    
    const handleStorageChange = () => {
      checkBannerVisible();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`} style={{ top: isBannerVisible ? '40px' : '0' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="text-xl font-display font-bold">Hanzo.io</a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-primary/80 hover:text-primary font-medium transition">Services</a>
            <a href="#why-hanzo" className="text-primary/80 hover:text-primary font-medium transition">Why Hanzo</a>
            <a href="#case-studies" className="text-primary/80 hover:text-primary font-medium transition">Case Studies</a>
            <a href="#testimonials" className="text-primary/80 hover:text-primary font-medium transition">Testimonials</a>
            <a href="#pricing" className="text-primary/80 hover:text-primary font-medium transition">Pricing</a>
            <a href="#faq" className="text-primary/80 hover:text-primary font-medium transition">FAQ</a>
          </nav>
          
          <div className="hidden lg:block">
            <a href="#get-started" className="btn-primary">Book a Call</a>
          </div>
          
          <button 
            className="lg:hidden p-2 text-primary focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen shadow-md' : 'max-h-0'}`}>
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#why-hanzo" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Why Hanzo</a>
            <a href="#case-studies" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
            <a href="#testimonials" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#get-started" className="btn-primary inline-block text-center" onClick={() => setIsMenuOpen(false)}>Book a Call</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
