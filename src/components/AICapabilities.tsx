import React, { useState } from 'react';
import GradientBackground from './GradientBackground';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';

// Image component with error handling and loading state
const LogoImage = ({ src, alt, label }: { src: string; alt: string; label: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    console.error(`Failed to load image: ${src}`);
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-10 w-auto flex items-center justify-center">
        {imageError ? (
          <div className="h-10 w-20 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-xs text-gray-400">{label}</span>
          </div>
        ) : (
          <>
            {imageLoading && (
              <div className="h-10 w-20 bg-gray-700 rounded animate-pulse" />
            )}
            <img
              src={src}
              alt={alt}
              className={`h-10 w-auto opacity-70 hover:opacity-100 transition-opacity ${imageLoading ? 'hidden' : ''}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </>
        )}
      </div>
      <span className="text-xs text-foreground/60 mt-2">{label}</span>
    </div>
  );
};

// Feature card component with image error handling
const FeatureCard = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  applications 
}: { 
  imageSrc: string; 
  imageAlt: string; 
  title: string; 
  description: string; 
  applications: string; 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="bg-black border border-gray-700 rounded-[24px] p-8 hover:border-gray-600 transition-all">
      <div className="flex items-center justify-center h-48 mb-6 overflow-hidden">
        {imageError ? (
          <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">{imageAlt}</span>
          </div>
        ) : (
          <>
            {imageLoading && (
              <div className="w-full h-full bg-gray-800 rounded-lg animate-pulse" />
            )}
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`w-full h-auto ${imageLoading ? 'hidden' : ''}`}
              onError={() => {
                console.error(`Failed to load image: ${imageSrc}`);
                setImageError(true);
                setImageLoading(false);
              }}
              onLoad={() => setImageLoading(false)}
              loading="lazy"
            />
          </>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <p className="text-foreground/60 text-sm">{applications}</p>
    </div>
  );
};

const AICapabilities = () => {
  const features = [
    {
      imageSrc: "/images/graphics/ai-nodes.svg",
      imageAlt: "Neural network visualization",
      title: "Intelligent Systems",
      description: "Build self-adapting systems that learn and evolve with your business needs, creating smarter operations and insights.",
      applications: "Applications: Workflow automation, customer insights, decision support"
    },
    {
      imageSrc: "/images/graphics/data-wave.svg",
      imageAlt: "Data visualization",
      title: "Predictive Analytics",
      description: "Transform raw data into actionable insights and forecasts that help you anticipate market shifts and customer needs.",
      applications: "Applications: Demand forecasting, risk assessment, trend analysis"
    },
    {
      imageSrc: "/images/graphics/code-blocks.svg",
      imageAlt: "Code visualization",
      title: "Custom Development",
      description: "Create bespoke AI solutions tailored to your specific business challenges, with human expertise guiding every step.",
      applications: "Applications: Custom models, specialized algorithms, integration solutions"
    }
  ];

  const aiModels = [
    { src: "/images/logo/openai.svg", alt: "OpenAI", label: "OpenAI" },
    { src: "/images/logo/anthropic.svg", alt: "Anthropic", label: "Anthropic" },
    { src: "/images/logo/mistral.svg", alt: "Mistral AI", label: "Mistral AI" },
    { src: "/images/logo/meta.svg", alt: "Meta AI", label: "Meta AI" },
    { src: "/images/logo/huggingface.svg", alt: "Hugging Face", label: "Hugging Face" },
    { src: "/images/logo/pytorch.svg", alt: "PyTorch", label: "PyTorch" },
    { src: "/images/logo/tensorflow.svg", alt: "TensorFlow", label: "TensorFlow" },
    { src: "/images/logo/langchain.svg", alt: "LangChain", label: "LangChain" }
  ];

  const cloudPlatforms = [
    { src: "/images/logo/aws.svg", alt: "AWS", label: "AWS" },
    { src: "/images/logo/gcp.svg", alt: "Google Cloud", label: "Google Cloud" },
    { src: "/images/logo/azure.svg", alt: "Microsoft Azure", label: "Azure" },
    { src: "/images/logo/vercel.svg", alt: "Vercel", label: "Vercel" },
    { src: "/images/logo/databricks.svg", alt: "Databricks", label: "Databricks" },
    { src: "/images/logo/snowflake.svg", alt: "Snowflake", label: "Snowflake" }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GradientBackground variant="secondary" intensity="medium" className="absolute inset-0 z-0" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="mb-16 flex justify-between items-end gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AI-Powered Solutions</h2>
            <p className="text-xl text-foreground/80 max-w-2xl">
              Transforming business challenges into technological opportunities with cutting-edge AI capabilities
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0">
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

        {/* Mobile button */}
        <div className="mb-8 md:hidden">
          <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8">
            <Button
              variant="primary"
              size="lg"
              className={buttonModifiers.interactive + " font-medium px-8 w-full"}
            >
              Explore our capabilities
              <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-40">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight mb-12 pb-8 max-w-3xl mx-auto">
            We work with all leading frontier models<br />
            and open source software
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {aiModels.map((model, index) => (
              <LogoImage key={index} {...model} />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {cloudPlatforms.map((platform, index) => (
              <LogoImage key={index} {...platform} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
