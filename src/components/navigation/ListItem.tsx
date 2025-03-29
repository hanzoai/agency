import React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  icon?: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
  compact?: boolean;
  isNew?: boolean;
};

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, icon: Icon, isExternal, compact, isNew, ...props }, ref) => {
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
              {isExternal && <ExternalLink className="h-3 w-3 text-gray-400" />}
            </div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                {children}
              </p>
            )}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;