import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../src/components/ui/navigation-menu";
import { cn } from "../src/lib/utils";
import { navigationItems } from "../src/data/navigationItems";
import { ArrowUpRight, ExternalLink, FileImage, Book, HelpCircle, Palette, Coffee } from "lucide-react";
import React from "react";

const NewHeader = () => {
  const [showLogoMenu, setShowLogoMenu] = useState(false);
  const logoMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

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

  // Custom context menu for the logo
  const handleLogoContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLogoMenu(true);
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
      <div className="w-full max-w-full px-4 mx-auto flex h-16 items-center">
        <div className="relative mr-6">
          <Link to="/" className="flex items-center space-x-2">
            <img
              ref={logoRef}
              src="/images/logo/logo.png"
              alt="Hanzo"
              className="h-8 w-8 object-contain"
              onContextMenu={handleLogoContextMenu}
            />
            <span className="font-bold text-xl text-white">Hanzo</span>
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

                    {/* Solutions Layout with Capabilities & Industries */}
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
                                        <span className="text-sm font-medium text-white">{feature.title}</span>
                                      </div>
                                    )}
                                    {!feature.icon && (
                                      <h3 className="text-sm font-medium text-white mb-2">{feature.title}</h3>
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
                                        <span className="text-sm font-medium text-white">{feature.title}</span>
                                      </div>
                                    )}
                                    {!feature.icon && (
                                      <h3 className="text-sm font-medium text-white mb-2">{feature.title}</h3>
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
                      </NavigationMenuContent>
                    )}
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-3">
          <a
            href="/login"
            className="border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm font-medium whitespace-nowrap"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-200 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm font-medium whitespace-nowrap"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

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
            {isExternal && (
              <ExternalLink className="h-3 w-3 text-gray-400" />
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NewHeader;
