
import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);

    const revealElements = document.querySelectorAll('.reveal, .reveal-slide-up, .reveal-slide-right');
    
    revealElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        revealElements.forEach((element) => {
          observerRef.current?.unobserve(element);
        });
      }
    };
  }, []);

  return null;
};

export const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useScrollReveal();
  return <>{children}</>;
};

export default ScrollReveal;
