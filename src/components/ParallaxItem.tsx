import React, { useRef, useState, useEffect } from 'react';

interface ParallaxItemProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxItem: React.FC<ParallaxItemProps> = ({ 
  children, 
  speed = 0.1, 
  className = "" 
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize position values
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateElementPosition = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    };

    updateElementPosition();
    window.addEventListener('resize', updateElementPosition);
    
    return () => {
      window.removeEventListener('resize', updateElementPosition);
    };
  }, []);

  // Handle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const windowHeight = window.innerHeight;
      const windowMid = window.scrollY + windowHeight / 2;
      const elementMid = elementTop + elementHeight / 2;
      
      // Calculate how far the element is from the middle of the viewport
      const distanceFromCenter = elementMid - windowMid;
      const parallaxOffset = distanceFromCenter * speed;
      
      setOffset(parallaxOffset);
      
      // Check if element is visible
      const elementBottom = elementTop + elementHeight;
      const isVisible = window.scrollY < elementBottom && 
                        (window.scrollY + windowHeight) > elementTop;
      
      setIsVisible(isVisible);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, elementTop, elementHeight]);

  return (
    <div 
      ref={elementRef}
      className={`relative ${className}`}
      style={{ 
        transform: `translateY(${offset}px)`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxItem;