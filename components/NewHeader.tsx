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

const NewHeader = () => {
  return (
    <header className="w-full bg-background fixed top-0 z-50 border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-2xl">Hanzo</span>
        </Link>
        
        <NavigationMenu className="mx-auto">
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
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <ListItem
                              key={child.title}
                              title={child.title}
                              href={child.href}
                              className="w-full"
                            >
                              {child.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Link
            to="/console"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Console
          </Link>
          <Link
            to="/signin"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NewHeader;
