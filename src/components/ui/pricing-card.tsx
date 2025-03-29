import React, { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface PricingFeature {
  text: string;
  link?: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: PricingFeature[];
  ctaText: string;
  ctaAction?: () => void;
  ctaLink?: string;
  secondaryAction?: {
    text: string;
    link: string;
  };
  highlighted?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  ctaAction,
  ctaLink,
  secondaryAction,
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col h-full border border-border/20 rounded-lg bg-card/40 backdrop-blur-sm",
        highlighted && "border-border/40 bg-card/80", 
        className
      )}
    >
      <div className="p-6 border-b border-border/20 flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold">{price}</span>
          {price !== 'Custom pricing' && price !== '$0' && (
            <span className="text-foreground/60 text-sm">per user/month</span>
          )}
        </div>
        {description && (
          <p className="text-foreground/60 text-sm mt-2">{description}</p>
        )}
      </div>
      
      <div className="p-6 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex gap-3 items-start">
              <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
              <span className="text-foreground/80 text-sm">
                {feature.link ? (
                  <a href={feature.link} className="text-foreground hover:underline">
                    {feature.text}
                  </a>
                ) : (
                  feature.text
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-2 mt-auto">
        <Button 
          variant={highlighted ? "primary" : "outline"}
          className="w-full" 
          onClick={ctaAction}
          asChild={Boolean(ctaLink)}
        >
          {ctaLink ? <a href={ctaLink}>{ctaText}</a> : ctaText}
        </Button>
        
        {secondaryAction && (
          <div className="text-center mt-4">
            <span className="text-sm text-foreground/60 mr-1">or</span>
            <a 
              href={secondaryAction.link} 
              className="text-sm text-foreground hover:underline"
            >
              {secondaryAction.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
