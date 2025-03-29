import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  gradientColors?: string[];
  animationDuration?: number;
}

export const GradientBorderButton = ({
  children,
  className,
  borderWidth = 1,
  gradientColors = ['#ffffff', '#cccccc', '#ffffff'],
  animationDuration = 3,
  ...props
}: GradientBorderButtonProps) => {
  const gradientString = `linear-gradient(90deg, ${gradientColors.join(', ')})`;
  
  return (
    <div className="relative inline-block">
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 rounded-full animate-border-rotate"
        style={{
          background: gradientString, 
          padding: `${borderWidth}px`,
          backgroundSize: '200% 200%',
          animation: `border-rotate ${animationDuration}s linear infinite`,
        }}
      />
      
      {/* Button with black background creating the outline effect */}
      <button
        className={cn(
          'relative rounded-full bg-black text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center',
          className
        )}
        {...props}
      >
        {children}
      </button>
      
      <style jsx global>{`
        @keyframes border-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default GradientBorderButton;