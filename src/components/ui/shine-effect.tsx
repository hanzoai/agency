import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ShineEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  color?: 'white' | 'blue' | 'gradient';
  disabled?: boolean;
}

export const ShineEffect = ({
  children,
  className,
  intensity = 'medium',
  color = 'white',
  disabled = false,
}: ShineEffectProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Intensity configurations
  const intensityConfig = {
    subtle: {
      opacity: 'opacity-10',
      size: 'w-[150px] h-[150px]',
      blur: 'blur-xl',
    },
    medium: {
      opacity: 'opacity-20',
      size: 'w-[200px] h-[200px]',
      blur: 'blur-lg',
    },
    strong: {
      opacity: 'opacity-30',
      size: 'w-[250px] h-[250px]',
      blur: 'blur-md',
    },
  };

  // Color configurations
  const colorConfig = {
    white: 'bg-white',
    blue: 'bg-blue-400',
    gradient: 'bg-gradient-to-r from-white via-blue-300 to-white',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!disabled) setIsHovering(false);
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden group',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Shine effect */}
      {!disabled && (
        <div
          className={cn(
            'absolute pointer-events-none transition-opacity rounded-full -translate-x-1/2 -translate-y-1/2',
            intensityConfig[intensity].size,
            intensityConfig[intensity].blur,
            colorConfig[color],
            isHovering ? intensityConfig[intensity].opacity : 'opacity-0'
          )}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        />
      )}
    </div>
  );
};

export default ShineEffect;