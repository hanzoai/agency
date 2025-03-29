import React from "react";
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
import { ArrowUpRight, ExternalLink } from "lucide-react";

const NewHeader = () => {
  return (
    <header className="w-full bg-black fixed top-0 z-50 border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-2xl">Hanzo</span>
        </Link>
        
        <NavigationMenu className="mx-auto bg-black text-white">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.href && !item.children ? (
                  <Link to={item.href}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    {item.children && (
                      <NavigationMenuContent>
                        <div className="p-6 max-w-7xl mx-auto w-full">
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
                                      <a href={feature.href} className="text-xs text-white inline-flex items-center hover:underline">
                                        {feature.cta}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                        <div className="p-6 max-w-7xl mx-auto w-full">
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
                                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                        </div>
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
        </div>
      </div>
    </header>
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
