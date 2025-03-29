import React from 'react';
import { cn } from '@/lib/utils';

interface PricingToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  className?: string;
  labelLeft?: string;
  labelRight?: string;
}

export function PricingToggle({
  enabled,
  onChange,
  className,
  labelLeft = 'Monthly',
  labelRight = 'Billed yearly',
}: PricingToggleProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      {labelLeft && (
        <span className={cn(
          "text-sm transition",
          !enabled ? "text-foreground" : "text-foreground/60"
        )}>
          {labelLeft}
        </span>
      )}
      
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          enabled ? "bg-accent" : "bg-accent/30"
        )}
        onClick={() => onChange(!enabled)}
      >
        <span
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-foreground shadow-lg ring-0 transition-transform",
            enabled ? "translate-x-5" : "translate-x-1"
          )}
        />
      </button>
      
      {labelRight && (
        <span className={cn(
          "text-sm transition",
          enabled ? "text-foreground" : "text-foreground/60"
        )}>
          {labelRight}
        </span>
      )}
    </div>
  );
}
