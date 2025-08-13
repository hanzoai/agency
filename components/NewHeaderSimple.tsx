import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigationItems } from "../src/data/navigationItems";
import { ArrowUpRight, ExternalLink, FileImage, Book, HelpCircle, Palette, Coffee, ChevronDown, Menu, X } from "lucide-react";
import React from "react";
import "./HeaderDropdown.css";

const NewHeader = () => {
  const [showLogoMenu, setShowLogoMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const logoMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem('authToken');
      setIsAuthenticated(!!authToken);
    };

    checkAuth();
    // Listen for storage changes
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  // Close the context menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (logoMenuRef.current && !logoMenuRef.current.contains(event.target as Node)) {
        setShowLogoMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [navigate]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Custom context menu for the logo
  const handleLogoContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLogoMenu(true);
  };

  // Toggle mobile submenu
  const toggleMobileSubmenu = (title: string) => {
    setMobileExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  // Links for the logo context menu
  const logoMenuLinks = [
    {
      title: "Hanzo.ai Main Site",
      href: "https://hanzo.ai",
      icon: <ArrowUpRight className="h-4 w-4" />
    },
    {
      title: "Branding Kit",
      href: "https://hanzo.ai/brand",
      icon: <FileImage className="h-4 w-4" />
    },
    {
      title: "Press Page",
      href: "https://hanzo.ai/press",
      icon: <Book className="h-4 w-4" />
    },
    {
      title: "FAQ",
      href: "/faq",
      icon: <HelpCircle className="h-4 w-4" />
    },
    {
      title: "Brand Page",
      href: "https://hanzo.ai/brand",
      icon: <Palette className="h-4 w-4" />
    },
    {
      title: "Zen of Hanzo",
      href: "https://hanzo.ai/zen",
      icon: <Coffee className="h-4 w-4" />
    }
  ];

  return (
    <div className="w-full bg-black fixed top-0 z-50 border-b border-border/40" role="banner">
      <div className="header-container w-full max-w-[1920px] px-4 mx-auto flex h-16 items-center">
        <div className="logo-container relative mr-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              ref={logoRef}
              src="/images/logo/logo.png"
              alt="Hanzo"
              className="h-6 w-auto object-contain"
              onContextMenu={handleLogoContextMenu}
            />
            <span className="font-bold text-lg text-white whitespace-nowrap">Hanzo</span>
          </Link>

          {/* Logo context menu */}
          {showLogoMenu && (
            <div
              ref={logoMenuRef}
              className="absolute top-full left-0 mt-2 w-60 bg-black border border-gray-800 rounded-md shadow-lg z-50 overflow-hidden"
              style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="py-2">
                <div className="px-4 py-2 text-xs text-gray-500 uppercase">Hanzo Resources</div>
                {logoMenuLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={() => setShowLogoMenu(false)}
                  >
                    <span className="mr-2 text-gray-400">{link.icon}</span>
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 bg-black text-white items-center justify-center">
          <div className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.href && !item.children && !item.capabilities && !item.industries && !item.categories ? (
                  <Link to={item.href} className="text-white hover:text-gray-300 font-medium px-4 py-2 rounded-md transition-colors">
                    {item.title}
                  </Link>
                ) : (
                  <div className="relative group dropdown-trigger">
                    <button className="text-white hover:text-gray-300 font-medium px-4 py-2 rounded-md transition-colors flex items-center gap-1">
                      {item.title}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Solutions Layout with Capabilities & Industries */}
                    {(item.capabilities || item.industries) && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full pt-1 w-[900px]">
                        {/* Invisible bridge to maintain hover */}
                        <div className="absolute top-0 left-0 right-0 h-2"></div>
                        <div className="dropdown-menu bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto">
                        <div className="p-6">
                          <div className="grid gap-8 grid-cols-3">
                            {/* Capabilities Column */}
                            {item.capabilities && (
                              <div className="col-span-1">
                                <h3 className="font-bold text-white text-sm mb-4">Capabilities</h3>
                                <ul className="space-y-2">
                                  {item.capabilities.map((capability) => (
                                    <li key={capability.title}>
                                      {capability.isExternal ? (
                                        <a
                                          href={capability.href}
                                          className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {capability.icon && <capability.icon className="h-4 w-4 text-gray-400" />}
                                          <span className="font-bold">{capability.title}</span>
                                          <ExternalLink className="h-3 w-3 text-gray-400" />
                                        </a>
                                      ) : (
                                        <Link
                                          to={capability.href}
                                          className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                                        >
                                          {capability.icon && <capability.icon className="h-4 w-4 text-gray-400" />}
                                          <span className="font-bold">{capability.title}</span>
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                                <Link to="/solutions?category=capabilities" className="mt-4 text-xs text-gray-400 hover:text-white inline-flex items-center">
                                  View all
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Link>
                              </div>
                            )}

                            {/* Industries Column */}
                            {item.industries && (
                              <div className="col-span-1">
                                <h3 className="font-bold text-white text-sm mb-4">Industries</h3>
                                <ul className="space-y-2">
                                  {item.industries.map((industry) => (
                                    <li key={industry.title}>
                                      {industry.isExternal ? (
                                        <a
                                          href={industry.href}
                                          className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {industry.icon && <industry.icon className="h-4 w-4 text-gray-400" />}
                                          <span className="font-bold">{industry.title}</span>
                                          <ExternalLink className="h-3 w-3 text-gray-400" />
                                        </a>
                                      ) : (
                                        <Link
                                          to={industry.href}
                                          className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                                        >
                                          {industry.icon && <industry.icon className="h-4 w-4 text-gray-400" />}
                                          <span className="font-bold">{industry.title}</span>
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                                <Link to="/solutions?category=industries" className="mt-4 text-xs text-gray-400 hover:text-white inline-flex items-center">
                                  View all
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Link>
                              </div>
                            )}

                            {/* Featured Column */}
                            {item.featured && (
                              <div className="col-span-1">
                                {item.featured.map((feature, index) => (
                                  <div
                                    key={feature.title}
                                    className={`bg-gray-800/50 rounded-md p-5 ${index > 0 ? 'mt-4' : ''}`}
                                  >
                                    {feature.icon && (
                                      <div className="flex items-center gap-2 mb-2">
                                        <div className="bg-gray-700 text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">
                                          {feature.icon}
                                        </div>
                                        <span className="text-sm font-bold text-white">{feature.title}</span>
                                      </div>
                                    )}
                                    {!feature.icon && (
                                      <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                                    )}
                                    <p className="text-xs text-gray-400 mb-3">{feature.description}</p>
                                    {feature.cta && (
                                      <a
                                        href={feature.href}
                                        target={feature.isExternal ? "_blank" : undefined}
                                        rel={feature.isExternal ? "noopener noreferrer" : undefined}
                                        className="text-xs text-white inline-flex items-center hover:underline"
                                      >
                                        {feature.cta}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        </div>
                      </div>
                    )}

                    {/* Services Categories Layout */}
                    {item.categories && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full pt-1 w-[1200px]">
                        {/* Invisible bridge to maintain hover */}
                        <div className="absolute top-0 left-0 right-0 h-2"></div>
                        <div className="dropdown-menu bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto">
                        <div className="p-6">
                          <div className="grid gap-8 grid-cols-5">
                            {/* Categories Columns */}
                            {item.categories.map((category, categoryIndex) => (
                              <div key={category.title} className="col-span-1">
                                <Link
                                  to={category.href}
                                  className="font-bold text-white text-sm mb-4 flex items-center hover:underline group"
                                >
                                  {category.title}
                                  <svg
                                    className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </Link>
                                <ul className="space-y-2 mt-3">
                                  {category.items.map((item) => (
                                    <li key={item.title}>
                                      {item.isExternal ? (
                                        <a
                                          href={item.href}
                                          className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.icon && <item.icon className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />}
                                          <div>
                                            <div className="flex items-center gap-2">
                                              <span className="font-bold">{item.title}</span>
                                              {item.isNew && <span className="bg-green-500 text-white text-[10px] px-1 py-0.5 rounded">New</span>}
                                              <ExternalLink className="h-3 w-3 text-gray-400" />
                                            </div>
                                            {item.description && (
                                              <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                                            )}
                                          </div>
                                        </a>
                                      ) : (
                                        <Link
                                          to={item.href}
                                          className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                                        >
                                          {item.icon && <item.icon className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />}
                                          <div>
                                            <div className="flex items-center gap-2">
                                              <span className="font-bold">{item.title}</span>
                                              {item.isNew && <span className="bg-green-500 text-white text-[10px] px-1 py-0.5 rounded">New</span>}
                                            </div>
                                            {item.description && (
                                              <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                                            )}
                                          </div>
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Featured Column */}
                            {item.featured && (
                              <div className="col-span-1">
                                {item.featured.map((feature, index) => (
                                  <div
                                    key={feature.title}
                                    className={`bg-gray-800/50 rounded-md p-5 ${index > 0 ? 'mt-4' : ''}`}
                                  >
                                    {feature.icon && (
                                      <div className="flex items-center gap-2 mb-2">
                                        <div className="bg-gray-700 text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">
                                          {feature.icon}
                                        </div>
                                        <span className="text-sm font-bold text-white">{feature.title}</span>
                                      </div>
                                    )}
                                    {!feature.icon && (
                                      <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                                    )}
                                    <p className="text-xs text-gray-400 mb-3">{feature.description}</p>
                                    {feature.cta && (
                                      <a href={feature.href} className="text-xs text-white inline-flex items-center hover:underline">
                                        {feature.cta}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex ml-auto items-center space-x-3">
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-200 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm font-medium"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm font-medium"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-200 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden ml-auto p-2 text-white hover:bg-gray-800 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black z-50 overflow-y-auto">
          <div className="px-4 py-6">
            {/* Mobile Navigation Items */}
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.href && !item.children && !item.capabilities && !item.industries && !item.categories ? (
                    <Link
                      to={item.href}
                      className="block text-white hover:text-gray-300 font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(item.title)}
                        className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium py-2"
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileExpandedItems.includes(item.title) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Mobile Submenu */}
                      {mobileExpandedItems.includes(item.title) && (
                        <div className="mt-2 ml-4 space-y-2">
                          {/* Capabilities */}
                          {item.capabilities && (
                            <div className="pb-4">
                              <h4 className="text-sm font-bold text-gray-400 mb-2">Capabilities</h4>
                              {item.capabilities.map((capability) => (
                                <Link
                                  key={capability.title}
                                  to={capability.href}
                                  className="block text-gray-300 hover:text-white py-1 text-sm"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {capability.title}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Industries */}
                          {item.industries && (
                            <div className="pb-4">
                              <h4 className="text-sm font-bold text-gray-400 mb-2">Industries</h4>
                              {item.industries.map((industry) => (
                                <Link
                                  key={industry.title}
                                  to={industry.href}
                                  className="block text-gray-300 hover:text-white py-1 text-sm"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {industry.title}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Categories */}
                          {item.categories && item.categories.map((category) => (
                            <div key={category.title} className="pb-4">
                              <Link
                                to={category.href}
                                className="text-sm font-bold text-gray-400 mb-2 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {category.title} →
                              </Link>
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  className="block text-gray-300 hover:text-white py-1 text-sm ml-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="mt-8 space-y-3">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="block w-full text-center bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-200 px-4 py-3 rounded-full text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block w-full text-center border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 px-4 py-3 rounded-full text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full text-center bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-200 px-4 py-3 rounded-full text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewHeader;
