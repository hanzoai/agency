import React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface LinearButtonProps extends ButtonProps {
  active?: boolean;
}

const LinearButton = React.forwardRef<HTMLButtonElement, LinearButtonProps>(
  ({ 
    className, 
    children, 
    active = false,
    variant = 'default',
    disabled,
    ...props 
  }, ref) => {
    return (
      <Button 
        ref={ref} 
        variant={active ? 'secondary' : variant}
        className={cn(
          'transition-colors text-sm font-medium',
          active && 'bg-accent/10',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

LinearButton.displayName = 'LinearButton';

export { LinearButton };
