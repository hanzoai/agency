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
        
        <div className="text-center mb-16">
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
        
        <div className="mt-20">
          <h3 className="text-center text-lg font-medium mb-8">We work with all leading frontier models and open source software</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {/* AI Models */}
            <div className="flex flex-col items-center">
              <img src="/images/logo/openai.svg" alt="OpenAI" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">OpenAI</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/anthropic.svg" alt="Anthropic" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Anthropic</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/mistral.svg" alt="Mistral AI" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Mistral AI</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/meta.svg" alt="Meta AI" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Meta AI</span>
            </div>
            
            {/* Open Source */}
            <div className="flex flex-col items-center">
              <img src="/images/logo/huggingface.svg" alt="Hugging Face" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Hugging Face</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/pytorch.svg" alt="PyTorch" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">PyTorch</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/tensorflow.svg" alt="TensorFlow" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">TensorFlow</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/langchain.svg" alt="LangChain" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">LangChain</span>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Cloud Platforms */}
            <div className="flex flex-col items-center">
              <img src="/images/logo/aws.svg" alt="AWS" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">AWS</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/gcp.svg" alt="Google Cloud" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Google Cloud</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/azure.svg" alt="Microsoft Azure" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Azure</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/vercel.svg" alt="Vercel" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Vercel</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/databricks.svg" alt="Databricks" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Databricks</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/logo/snowflake.svg" alt="Snowflake" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Snowflake</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
