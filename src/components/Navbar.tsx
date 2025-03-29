import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buttonModifiers } from '@/lib/button-utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsTop(window.scrollY <= 20);
    };
    
    // Toggle body class when menu state changes
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
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
  }, [isMenuOpen]);

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
        document.body.classList.remove('menu-open');
      }
    } else {
      // If we're on a different page, navigate to homepage first and then scroll
      window.location.href = `/${target}`;
    }
  };
  
  // Close the mobile menu when clicking any link
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-16 flex items-center bg-black border-b border-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-3 py-1">
              <img src="/images/logo/logo.png" alt="Hanzo" className="h-8 w-auto" />
              <span className="text-xl font-semibold tracking-tight">Hanzo</span>
            </Link>
            
            <div className="container mx-auto max-w-screen-2xl px-6 flex justify-center">
              <nav className="hidden lg:flex items-center justify-center space-x-8">
                <Link to="/our-work" className="text-foreground/90 hover:text-foreground font-medium transition">
                  Our Work
                </Link>
                
                <div className="relative group">
                  <a href="/services" className="text-foreground/90 hover:text-foreground font-medium transition flex items-center gap-1">
                    Services
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:rotate-180">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </a>
                  
                  <div className="absolute left-0 top-full z-50 w-full bg-black border-t border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="container-custom py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Column 1: Creative design services */}
                        <div>
                          <a href="/services/creative-design" className="text-lime-400 font-medium hover:underline flex items-center gap-1 mb-4">
                            Creative design services
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                          </a>
                          <ul className="space-y-4">
                            <li>
                              <a href="/services/ad-creative" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Ad creative</h3>
                                    <p className="text-sm text-foreground/70">Eye-catching designs that perform</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">🎯</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/social-media-creative" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Social media creative</h3>
                                    <p className="text-sm text-foreground/70">Engaging assets for all platforms</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">📱</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/presentation-design" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Presentation design</h3>
                                    <p className="text-sm text-foreground/70">Captivating slides that tell your story</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">📊</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/illustration-design" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Illustration design</h3>
                                    <p className="text-sm text-foreground/70">Visual storytelling for your brand</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">🎨</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/branding-services" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Branding services</h3>
                                    <p className="text-sm text-foreground/70">Expertise & custom design services</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">⭐</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/email-creation" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Email creation</h3>
                                    <p className="text-sm text-foreground/70">Click-worthy emails that drive engagement</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">📧</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        
                        {/* Column 2: Creative design services continued + Specialized production services */}
                        <div>
                          <div className="mb-8">
                            <ul className="space-y-4">
                              <li>
                                <a href="/services/web-design" className="group/item block">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium hover:text-accent">Web design</h3>
                                      <p className="text-sm text-foreground/70">Stunning websites built to engage</p>
                                    </div>
                                    <span className="text-foreground/30 text-lg">🖥️</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/services/ebooks-report-design" className="group/item block">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium hover:text-accent">eBooks & report design</h3>
                                      <p className="text-sm text-foreground/70">Your digital content supercharged</p>
                                    </div>
                                    <span className="text-foreground/30 text-lg">📄</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/services/concept-creation" className="group/item block">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium hover:text-accent">Concept creation</h3>
                                      <p className="text-sm text-foreground/70">Big ideas crafted for maximum impact</p>
                                    </div>
                                    <span className="text-foreground/30 text-lg">💡</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/services/print-design" className="group/item block">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium hover:text-accent">Print design</h3>
                                      <p className="text-sm text-foreground/70">Tangible designs that leave a lasting impression</p>
                                    </div>
                                    <span className="text-foreground/30 text-lg">📚</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/services/packaging-merchandise-design" className="group/item block">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium hover:text-accent">Packaging & merchandise design</h3>
                                      <p className="text-sm text-foreground/70">Bring your brand to life</p>
                                    </div>
                                    <span className="text-foreground/30 text-lg">👕</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          
                          <a href="/services/specialized-production" className="text-emerald-700 font-medium hover:underline flex items-center gap-1 mb-4">
                            Specialized production services
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                          </a>
                        </div>
                        
                        {/* Column 3: Specialized production services continued + AI services */}
                        <div>
                          <ul className="space-y-4 mb-8">
                            <li>
                              <a href="/services/video-production" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Video production</h3>
                                    <p className="text-sm text-foreground/70">Effortless video production at scale</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">🎬</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/motion-design" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">Motion design</h3>
                                    <p className="text-sm text-foreground/70">For websites, ads, and presentations</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">✨</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/3d-ar-design" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">3D & AR design</h3>
                                    <p className="text-sm text-foreground/70">Innovative solutions for 3D design services</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">🔍</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                          
                          <a href="/services/ai-services" className="text-blue-700 font-medium hover:underline flex items-center gap-1 mb-4">
                            AI services
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                          </a>
                          <ul className="space-y-4">
                            <li>
                              <a href="/services/ai-enhanced-creative" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">AI enhanced creative</h3>
                                    <p className="text-sm text-foreground/70">Human brilliance powered by AI</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">🤖</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/services/ai-consulting" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium hover:text-accent">AI consulting</h3>
                                    <p className="text-sm text-foreground/70">Maximize AI with tailored strategies</p>
                                  </div>
                                  <span className="text-foreground/30 text-lg">💬</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        
                        {/* Column 4: Marketing services */}
                        <div>
                          <a href="/services/marketing-services" className="text-amber-500 font-medium hover:underline flex items-center gap-1 mb-4">
                            Marketing services
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                          </a>
                          <ul className="space-y-4">
                            <li>
                              <a href="/services/marketing-strategy" className="group/item block">
                                <div className="flex justify-between items-start">
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-medium hover:text-accent">Marketing strategy</h3>
                                    <span className="bg-lime-400 text-black text-xs px-2 py-0.5 rounded">New</span>
                                  </div>
                                  <span className="text-foreground/30 text-lg">📈</span>
                                </div>
                                <p className="text-sm text-foreground/70">Grow your brand with expert consultants</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <button className="text-foreground/90 hover:text-foreground font-medium transition flex items-center gap-1">
                    Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:rotate-180">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  
                  <div className="absolute left-0 top-full z-50 w-full bg-black border-t border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="container-custom py-8 grid grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-lg mb-4">Capabilities</h3>
                        <ul className="space-y-3">
                          <li><a href="/capabilities/cloud" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">☁️</span> Cloud</a></li>
                          <li><a href="/capabilities/cybersecurity" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">🔒</span> Cybersecurity</a></li>
                          <li><a href="/capabilities/data-ai" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">🧠</span> Data and Artificial Intelligence</a></li>
                          <li><a href="/capabilities/digital-engineering" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">⚙️</span> Digital Engineering</a></li>
                          <li><a href="/capabilities/emerging-tech" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">🚀</span> Emerging Technology</a></li>
                          <li><a href="/capabilities/finance-risk" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">💰</span> Finance and Risk Management</a></li>
                          <li><a href="https://sensei.group" target="_blank" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">👑</span> Fractional CXO</a></li>
                        </ul>
                        <a href="/capabilities" className="text-accent hover:underline mt-4 inline-block">View all</a>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-4">Industries</h3>
                        <ul className="space-y-3">
                          <li><a href="/industries/aerospace" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">✈️</span> Aerospace and Defense</a></li>
                          <li><a href="/industries/automotive" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">🚗</span> Automotive</a></li>
                          <li><a href="/industries/banking" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">🏦</span> Banking</a></li>
                          <li><a href="/industries/capital-markets" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">📈</span> Capital Markets</a></li>
                          <li><a href="/industries/chemicals" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">🧪</span> Chemicals</a></li>
                          <li><a href="/industries/communications" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">📱</span> Communications and Media</a></li>
                          <li><a href="/industries/consumer" className="text-foreground/80 hover:text-foreground flex items-center gap-2"><span className="w-5 h-5 bg-foreground/10 rounded-full flex items-center justify-center">🛍️</span> Consumer Goods and Services</a></li>
                        </ul>
                        <a href="/industries" className="text-accent hover:underline mt-4 inline-block">View all</a>
                      </div>
                      
                      <div className="bg-black/40 p-4 rounded-lg">
                        <div className="mb-4 flex items-center gap-2">
                          <div className="w-10 h-10 bg-emerald-800/30 rounded-lg flex items-center justify-center text-white">SG</div>
                          <h3 className="font-bold">Sensei Group</h3>
                        </div>
                        <p className="text-sm text-foreground/80 mb-4">Accelerate enterprise transformation with our elite collective of CXOs and technology experts. Strategic implementation for digital evolution.</p>
                        <a href="https://sensei.group" target="_blank" className="text-accent hover:underline flex items-center gap-1 text-sm">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link to="/help" className="text-foreground/90 hover:text-foreground font-medium transition">
                  Help
                </Link>
                
                <Link to="/pricing" className="text-foreground/90 hover:text-foreground font-medium transition">
                  Pricing
                </Link>
              </nav>
            </div>
            
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://cloud.hanzo.ai" className="border border-white/60 hover:border-white px-6 py-2.5 rounded-full text-foreground/90 hover:text-white font-medium transition">
                Console
              </a>
              <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap">
                Sign Up
              </Link>
            </div>
            
            <button 
              className="lg:hidden p-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 w-full h-full bg-black/95 backdrop-blur-lg z-[999] overflow-auto transition-all duration-300">
          <div className="container-custom py-20 min-h-screen">
            <nav className="flex flex-col space-y-6 divide-y divide-white/10 pb-20">
              <div className="py-4">
                <details className="group mobile-nav-details">
                  <summary className="text-foreground hover:text-foreground font-medium transition list-none flex items-center justify-between cursor-pointer py-2">
                    <span>Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-open:rotate-180">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </summary>
                  <div className="mt-2 ml-4 space-y-4">
                    {/* Creative design services */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-lime-400">Creative design services</h4>
                      <ul className="space-y-2 ml-2">
                        <li><a href="/services/ad-creative" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Ad creative</a></li>
                        <li><a href="/services/social-media-creative" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Social media creative</a></li>
                        <li><a href="/services/presentation-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Presentation design</a></li>
                        <li><a href="/services/illustration-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Illustration design</a></li>
                        <li><a href="/services/branding-services" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Branding services</a></li>
                        <li><a href="/services/email-creation" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Email creation</a></li>
                        <li><a href="/services/web-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Web design</a></li>
                        <li><a href="/services/ebooks-report-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>eBooks & report design</a></li>
                        <li><a href="/services/concept-creation" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Concept creation</a></li>
                        <li><a href="/services/print-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Print design</a></li>
                        <li><a href="/services/packaging-merchandise-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Packaging & merchandise design</a></li>
                      </ul>
                    </div>
                    
                    {/* Specialized production services */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-emerald-700">Specialized production services</h4>
                      <ul className="space-y-2 ml-2">
                        <li><a href="/services/video-production" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Video production</a></li>
                        <li><a href="/services/motion-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Motion design</a></li>
                        <li><a href="/services/3d-ar-design" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>3D & AR design</a></li>
                      </ul>
                    </div>
                    
                    {/* AI services */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-blue-700">AI services</h4>
                      <ul className="space-y-2 ml-2">
                        <li><a href="/services/ai-enhanced-creative" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>AI enhanced creative</a></li>
                        <li><a href="/services/ai-consulting" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>AI consulting</a></li>
                      </ul>
                    </div>
                    
                    {/* Marketing services */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-amber-500">Marketing services</h4>
                      <ul className="space-y-2 ml-2">
                        <li>
                          <a href="/services/marketing-strategy" className="text-foreground/80 hover:text-foreground text-sm flex items-center gap-2" onClick={handleMobileLinkClick}>
                            Marketing strategy
                            <span className="bg-lime-400 text-black text-xs px-1 py-0.5 rounded">New</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
              
              <div className="py-4">
                <details className="group mobile-nav-details">
                  <summary className="text-foreground hover:text-foreground font-medium transition list-none flex items-center justify-between cursor-pointer py-2">
                    <span>Solutions</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-open:rotate-180">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </summary>
                  <div className="mt-2 ml-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Capabilities</h4>
                      <ul className="space-y-2 ml-2">
                        <li><a href="/capabilities/cloud" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Cloud</a></li>
                        <li><a href="/capabilities/cybersecurity" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Cybersecurity</a></li>
                        <li><a href="/capabilities/data-ai" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Data and Artificial Intelligence</a></li>
                        <li><a href="/capabilities/digital-engineering" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Digital Engineering</a></li>
                        <li><a href="/capabilities/emerging-tech" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Emerging Technology</a></li>
                        <li><a href="/capabilities/finance-risk" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Finance and Risk Management</a></li>
                        <li><a href="https://sensei.group" target="_blank" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Fractional CXO</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Industries</h4>
                      <ul className="space-y-2 ml-2">
                        <li><a href="/industries/aerospace" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Aerospace and Defense</a></li>
                        <li><a href="/industries/automotive" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Automotive</a></li>
                        <li><a href="/industries/banking" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Banking</a></li>
                        <li><a href="/industries/capital-markets" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Capital Markets</a></li>
                        <li><a href="/industries/chemicals" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Chemicals</a></li>
                        <li><a href="/industries/communications" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Communications and Media</a></li>
                        <li><a href="/industries/consumer" className="text-foreground/80 hover:text-foreground text-sm" onClick={handleMobileLinkClick}>Consumer Goods and Services</a></li>
                      </ul>
                    </div>
                    
                    <div className="bg-black/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-emerald-800/30 rounded-lg flex items-center justify-center text-white text-xs">SG</div>
                        <h4 className="font-semibold text-sm">Sensei Group</h4>
                      </div>
                      <p className="text-xs text-foreground/80 mb-2">Accelerate enterprise transformation with our elite collective of CXOs and technology experts.</p>
                      <a href="https://sensei.group" target="_blank" className="text-accent hover:underline text-xs flex items-center gap-1" onClick={handleMobileLinkClick}>
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                      </a>
                    </div>
                  </div>
                </details>
              </div>
              
              <Link to="/help" className="text-foreground/90 hover:text-foreground py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Help</Link>
              <Link to="/pricing" className="text-foreground/90 hover:text-foreground py-2 font-medium transition" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
              <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;