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
                          <ul className="grid gap-4 w-full grid-cols-2 lg:grid-cols-3 mb-6">
                            {item.children.map((child) => (
                              <ListItem
                                key={child.title}
                                title={child.title}
                                href={child.href}
                                icon={child.icon}
                                className="w-full"
                                isExternal={child.isExternal}
                              >
                                {child.description}
                              </ListItem>
                            ))}
                          </ul>
                          
                          {item.featured && (
                            <div className="mt-6 border-t border-gray-700 pt-6">
                              <h3 className="text-sm font-medium text-white mb-4">Featured</h3>
                              <ul className="grid gap-4 w-full grid-cols-1 md:grid-cols-2">
                                {item.featured.map((feature) => (
                                  <a 
                                    key={feature.title}
                                    href={feature.href} 
                                    className="group flex p-3 rounded-md hover:bg-gray-800 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <div>
                                      <div className="flex items-center">
                                        <h4 className="text-sm font-medium text-white">{feature.title}</h4>
                                        <ExternalLink className="ml-1 h-3 w-3 text-gray-400 group-hover:text-white transition-colors" />
                                      </div>
                                      <p className="mt-1 text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                  </a>
                                ))}
                              </ul>
                            </div>
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
  }
>(({ className, title, children, icon: Icon, isExternal, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 text-white focus:bg-gray-800",
            className
          )}
          {...props}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          <div className="flex items-center gap-2 mb-1">
            {Icon && <Icon className="h-4 w-4 text-gray-400" />}
            <div className="text-sm font-medium leading-none">{title}</div>
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
