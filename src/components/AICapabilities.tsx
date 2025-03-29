import React from 'react';
import GradientBackground from './GradientBackground';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';

const AICapabilities = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GradientBackground variant="secondary" intensity="medium" className="absolute inset-0 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AI-Powered Solutions</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Transforming business challenges into technological opportunities with cutting-edge AI capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 hover:border-border/60 transition-all">
            <div className="flex items-center justify-center h-48 mb-6 overflow-hidden">
              <img 
                src="/images/graphics/ai-nodes.svg" 
                alt="Neural network visualization" 
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Systems</h3>
            <p className="text-foreground/70 mb-4">
              Build self-adapting systems that learn and evolve with your business needs, creating smarter operations and insights.
            </p>
            <p className="text-foreground/60 text-sm">Applications: Workflow automation, customer insights, decision support</p>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 hover:border-border/60 transition-all">
            <div className="flex items-center justify-center h-48 mb-6 overflow-hidden">
              <img 
                src="/images/graphics/data-wave.svg" 
                alt="Data visualization" 
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
            <p className="text-foreground/70 mb-4">
              Transform raw data into actionable insights and forecasts that help you anticipate market shifts and customer needs.
            </p>
            <p className="text-foreground/60 text-sm">Applications: Demand forecasting, risk assessment, trend analysis</p>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 hover:border-border/60 transition-all">
            <div className="flex items-center justify-center h-48 mb-6 overflow-hidden">
              <img 
                src="/images/graphics/code-blocks.svg" 
                alt="Code visualization" 
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
            <p className="text-foreground/70 mb-4">
              Create bespoke AI solutions tailored to your specific business challenges, with human expertise guiding every step.
            </p>
            <p className="text-foreground/60 text-sm">Applications: Custom models, specialized algorithms, integration solutions</p>
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8">
            <Button 
              variant="primary" 
              size="lg" 
              className={buttonModifiers.interactive + " font-medium px-8"}
            >
              Explore our capabilities
              <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
