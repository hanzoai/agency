import React, { useState, useEffect } from 'react';
import GradientBackground from './GradientBackground';

interface StatItemProps {
  value: number;
  label: string;
  symbol?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, symbol = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const incrementTime = duration / end;
    let timer: NodeJS.Timeout;

    const updateCount = () => {
      start += 1;
      setCount(start);
      
      if (start < end) {
        timer = setTimeout(updateCount, incrementTime);
      }
    };

    updateCount();

    return () => {
      clearTimeout(timer);
    };
  }, [value, duration, isInView]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {count}{symbol}
      </div>
      <div className="text-foreground/70">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <GradientBackground variant="accent" intensity="subtle" className="absolute inset-0 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          <StatItem value={98} label="Client Satisfaction Rate" symbol="%" />
          <StatItem value={35} label="AI-Powered Projects" symbol="+" />
          <StatItem value={12} label="Industry Partnerships" symbol="+" />
          <StatItem value={5} label="Years of AI Expertise" symbol="+" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
