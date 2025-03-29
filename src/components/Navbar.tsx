import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FancyButton } from '@/components/ui/fancy-button';
import { GradientBorderButton } from '@/components/ui/gradient-border-button';
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
      } else {
        setIsBannerVisible(false);
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

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    
    // If we're on the homepage
    if (window.location.pathname === '/') {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    } else {
      // If we're on a different page, navigate to homepage first and then scroll
      window.location.href = `/${target}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'}`} 
      style={{ top: isBannerVisible ? '60px' : '0' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold">HANZO</Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/#services" className="text-primary/80 hover:text-primary font-medium transition" onClick={(e) => handleNavLinkClick(e, '#services')}>Services</a>
            <a href="/#why-hanzo" className="text-primary/80 hover:text-primary font-medium transition" onClick={(e) => handleNavLinkClick(e, '#why-hanzo')}>Why Hanzo</a>
            <Link to="/case-studies" className="text-primary/80 hover:text-primary font-medium transition">
              Case Studies
            </Link>
            <a href="/#testimonials" className="text-primary/80 hover:text-primary font-medium transition" onClick={(e) => handleNavLinkClick(e, '#testimonials')}>Testimonials</a>
            <a href="/#pricing" className="text-primary/80 hover:text-primary font-medium transition" onClick={(e) => handleNavLinkClick(e, '#pricing')}>Pricing</a>
            <a href="/#faq" className="text-primary/80 hover:text-primary font-medium transition" onClick={(e) => handleNavLinkClick(e, '#faq')}>FAQ</a>
          </nav>
          
          <div className="hidden lg:block">
            <Link to="/subscribe">
              <FancyButton variant="shiny" className="py-2 px-4">
                Sign Up
                <ArrowUpRight size={16} className="ml-1" />
              </FancyButton>
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
            <a href="/#services" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={(e) => handleNavLinkClick(e, '#services')}>Services</a>
            <a href="/#why-hanzo" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={(e) => handleNavLinkClick(e, '#why-hanzo')}>Why Hanzo</a>
            <Link to="/case-studies" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
            <a href="/#testimonials" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={(e) => handleNavLinkClick(e, '#testimonials')}>Testimonials</a>
            <a href="/#pricing" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={(e) => handleNavLinkClick(e, '#pricing')}>Pricing</a>
            <a href="/#faq" className="text-primary/80 hover:text-primary py-2 font-medium transition" onClick={(e) => handleNavLinkClick(e, '#faq')}>FAQ</a>
            <Link to="/subscribe" onClick={() => setIsMenuOpen(false)}>
              <GradientBorderButton className="py-2 px-4 text-sm font-medium w-fit" gradientColors={['#ffffff', '#aaaaaa', '#ffffff']}>
                Sign Up
                <ArrowUpRight size={16} className="ml-1" />
              </GradientBorderButton>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;