import React from 'react';
import { Button, ButtonProps } from './button';
import { ShineEffect } from './shine-effect';
import { cn } from '@/lib/utils';

interface FancyButtonProps extends ButtonProps {
  shineIntensity?: 'subtle' | 'medium' | 'strong';
  shineColor?: 'white' | 'blue' | 'gradient';
  withShine?: boolean;
}

const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>(
  ({ 
    className, 
    children, 
    shineIntensity = 'medium', 
    shineColor = 'white',
    withShine = true,
    variant = 'default',
    disabled,
    ...props 
  }, ref) => {
    // If shine is disabled, just return a regular button
    if (!withShine) {
      return (
        <Button 
          ref={ref} 
          variant={variant} 
          className={className}
          disabled={disabled}
          {...props}
        >
          {children}
        </Button>
      );
    }
    
    return (
      <ShineEffect 
        intensity={shineIntensity} 
        color={shineColor}
        disabled={disabled}
        className={cn(
          'inline-block',
          className
        )}
      >
        <Button 
          ref={ref} 
          variant={variant}
          disabled={disabled}
          className="w-full"
          {...props}
        >
          {children}
        </Button>
      </ShineEffect>
    );
  }
);

FancyButton.displayName = 'FancyButton';

export { FancyButton };
