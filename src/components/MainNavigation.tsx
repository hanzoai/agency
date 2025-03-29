import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigationItems";
import { ArrowUpRight, ExternalLink, Menu, X } from "lucide-react";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Toggle body class when menu state changes
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close the mobile menu when clicking any link
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };
  return (
    <div className="w-full bg-black fixed top-0 z-50 border-b border-border/40" role="banner">
      <div className="w-full max-w-full px-4 mx-auto flex h-16 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-2xl">Hanzo</span>
        </Link>
        
        <NavigationMenu className="w-full bg-black text-white">
          <NavigationMenuList className="w-full justify-start">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.href && !item.children && !item.capabilities && !item.industries && !item.categories ? (
                  <Link to={item.href}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    
                    {/* Solutions/Capabilities layout */}
                    {(item.capabilities || item.industries) && (
                      <NavigationMenuContent>
                        <div className="p-6 w-full mx-auto">
                          <div className="grid gap-8 grid-cols-3">
                            {/* Capabilities Column */}
                            {item.capabilities && (
                              <div className="col-span-1">
                                <h3 className="font-medium text-white text-sm mb-4">Capabilities</h3>
                                <ul className="space-y-2">
                                  {item.capabilities.map((capability) => (
                                    <ListItem
                                      key={capability.title}
                                      title={capability.title}
                                      href={capability.href}
                                      icon={capability.icon}
                                      className="w-full"
                                      isExternal={capability.isExternal}
                                      compact
                                    >
                                      {capability.description}
                                    </ListItem>
                                  ))}
                                </ul>
                                <button className="mt-4 text-xs text-gray-400 hover:text-white inline-flex items-center">
                                  View all 
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </button>
                              </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                            )}

                            {/* Industries Column */}
                            {item.industries && (
                              <div className="col-span-1">
                                <h3 className="font-medium text-white text-sm mb-4">Industries</h3>
                                <ul className="space-y-2">
                                  {item.industries.map((industry) => (
                                    <ListItem
                                      key={industry.title}
                                      title={industry.title}
                                      href={industry.href}
                                      icon={industry.icon}
                                      className="w-full"
                                      isExternal={industry.isExternal}
                                      compact
                                    >
                                      {industry.description}
                                    </ListItem>
                                  ))}
                                </ul>
                                <button className="mt-4 text-xs text-gray-400 hover:text-white inline-flex items-center">
                                  View all 
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </button>
                              </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                                        <span className="text-sm font-medium text-white">{feature.title}</span>
                                      </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                                    )}
                                    {!feature.icon && (
                                      <h3 className="text-sm font-medium text-white mb-2">{feature.title}</h3>
                                    )}
                                    <p className="text-xs text-gray-400 mb-3">{feature.description}</p>
                                    {feature.cta && (
                                      <a href={feature.href} className="text-xs text-white inline-flex items-center hover:underline">
                                        {feature.cta}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </a>
                                    )}
                                  </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                                ))}
                              </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                            )}
                          </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                        </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                      </NavigationMenuContent>
                    )}
                    
                    {/* Services Categories Layout */}
                    {item.categories && (
                      <NavigationMenuContent>
                        <div className="p-6 w-full mx-auto">
                          <div className="grid gap-8 grid-cols-4">
                            {/* Categories Columns */}
                            {item.categories.map((category, categoryIndex) => (
                              <div key={category.title} className={categoryIndex === 3 ? "col-span-1" : "col-span-1"}>
                                <a 
                                  href={category.href} 
                                  className="font-medium text-white text-sm mb-4 flex items-center hover:underline group"
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
                                </a>
                                <ul className="space-y-2 mt-3">
                                  {category.items.map((item) => (
                                    <ListItem
                                      key={item.title}
                                      title={item.title}
                                      href={item.href}
                                      icon={item.icon}
                                      className="w-full"
                                      isExternal={item.isExternal}
                                      compact
                                      isNew={item.isNew}
                                    >
                                      {item.description}
                                    </ListItem>
                                  ))}
                                </ul>
                              </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                                        <span className="text-sm font-medium text-white">{feature.title}</span>
                                      </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                                    )}
                                    {!feature.icon && (
                                      <h3 className="text-sm font-medium text-white mb-2">{feature.title}</h3>
                                    )}
                                    <p className="text-xs text-gray-400 mb-3">{feature.description}</p>
                                    {feature.cta && (
                                      <a href={feature.href} className="text-xs text-white inline-flex items-center hover:underline">
                                        {feature.cta}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </a>
                                    )}
                                  </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                                ))}
                              </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                            )}
                          </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                        </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
                      </NavigationMenuContent>
                    )}
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <a
            href="https://cloud.hanzo.ai"
            className="text-sm font-medium transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Console
          </a>
          <a
            href="https://auth.hanzo.ai"
            className="text-sm font-medium transition-colors hover:text-primary mr-2"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </a>
          
          <button 
            className="lg:hidden ml-4 p-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
      </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
    </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ComponentType<{ className?: string }>;
    isExternal?: boolean;
    compact?: boolean;
    isNew?: boolean;
  }
>(({ className, title, children, icon: Icon, isExternal, compact, isNew, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-gray-800 text-white focus:bg-gray-800",
            compact ? "py-1 px-2" : "p-3",
            className
          )}
          {...props}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          <div className="flex items-center gap-2 mb-1">
            {Icon && <Icon className="h-4 w-4 text-gray-400" />}
            <div className="text-sm font-medium leading-none flex items-center">
              {title}
              {isNew && <span className="ml-2 bg-green-500 text-white text-[10px] px-1 py-0.5 rounded">New</span>}
            </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
            {isExternal && (
              <ExternalLink className="h-3 w-3 text-gray-400" />
            )}
          </div>

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
            <a href="https://cloud.hanzo.ai" className="text-foreground/90 hover:text-white py-2 font-medium transition border border-white/60 hover:border-white rounded-full px-6 py-2.5 inline-block mt-4" onClick={handleMobileLinkClick}>Console</a>
            <Link to="/login" className="bg-white text-black px-7 py-2.5 rounded-full font-medium hover:bg-white/90 inline-flex items-center whitespace-nowrap mt-4" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    )}
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNavigation;
