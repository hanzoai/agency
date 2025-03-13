
import React, { useEffect, useRef } from 'react';

const AnimatedGradient = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const gradientElement = gradientRef.current;
    if (!gradientElement) return;
    
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      mouseY = scrollY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    const animateGradient = () => {
      // Smooth follow effect with easing
      posX += (mouseX - posX) * 0.05;
      posY += (mouseY - posY) * 0.05;
      
      // Update gradient position
      const gradientPositionX = 50 + (posX * 20);
      const gradientPositionY = 50 + (posY * 20);
      
      gradientElement.style.backgroundPosition = `${gradientPositionX}% ${gradientPositionY}%`;
      
      requestAnimationFrame(animateGradient);
    };
    
    const animationFrame = requestAnimationFrame(animateGradient);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div 
      ref={gradientRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-50 transition-opacity duration-1000"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #34a85380 0%, transparent 40%), radial-gradient(circle at 70% 30%, #141414 0%, transparent 40%)',
        backgroundSize: '200% 200%',
        filter: 'blur(80px)',
      }}
    />
  );
};

export default AnimatedGradient;
