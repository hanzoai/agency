import React from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 auto-rows-[minmax(400px,1fr)] gap-4 md:gap-6",
      className
    )}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  className?: string;
  title?: string;
  description?: string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const BentoCard: React.FC<BentoCardProps> = ({ 
  className, 
  size = "medium", 
  children 
}) => {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-xl relative",
        {
          "md:col-span-1 row-span-1": size === "small",
          "md:col-span-1 md:row-span-1": size === "medium",
          "md:col-span-2 md:row-span-1": size === "large"
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoGrid;