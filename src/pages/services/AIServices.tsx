import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { BrainCircuit, Bot, LineChart, Cpu, Sparkles, Database, Webhook, FileSearch } from 'lucide-react';

const AIServices = () => {
  return (
    <ServiceTemplate
      title="AI Services"
      description="Harness the power of artificial intelligence to transform your business with cutting-edge solutions designed for real-world impact."
      icon={<BrainCircuit className="h-6 w-6" />}
      color="blue"
      services={[
        {
          name: "AI-Enhanced Creative",
          description: "Human brilliance powered by AI for unprecedented creative output",
          icon: <Sparkles className="h-5 w-5 text-blue-400" />
        },
        {
          name: "AI Consulting",
          description: "Strategic guidance to maximize AI impact for your business",
          icon: <LineChart className="h-5 w-5 text-blue-400" />
        },
        {
          name: "Custom AI Development",
          description: "Bespoke AI systems built for your specific business needs",
          icon: <Cpu className="h-5 w-5 text-blue-400" />
        },
        {
          name: "RAG System Implementation",
          description: "Retrieval-augmented generation systems for intelligent knowledge management",
          icon: <Database className="h-5 w-5 text-blue-400" />
        },
        {
          name: "AI Integration",
          description: "Seamless incorporation of AI into your existing tech stack",
          icon: <Webhook className="h-5 w-5 text-blue-400" />
        },
        {
          name: "AI Training & Fine-tuning",
          description: "Custom model adaptation for your specific domain and data",
          icon: <Bot className="h-5 w-5 text-blue-400" />
        },
        {
          name: "AI Content Generation",
          description: "Scalable, high-quality content creation powered by advanced AI",
          icon: <FileSearch className="h-5 w-5 text-blue-400" />
        }
      ]}
      features={[
        "Cutting-edge AI models and techniques for optimal performance",
        "Seamless integration with your existing workflows and systems",
        "Ethical AI implementation with robust safety protocols",
        "Comprehensive training for your team on AI systems",
        "Ongoing support and system optimization",
        "Custom AI solutions tailored to your specific industry challenges",
        "Data privacy and security at every step of implementation",
        "Measurable ROI with clear performance metrics",
        "Scalable architecture that grows with your business"
      ]}
      caseStudies={[
        {
          id: "fintech-ai",
          title: "AI-Powered Risk Assessment",
          company: "FinTech Innovators",
          industry: "Finance",
          image: "/images/case-studies/fintech-ai.jpg"
        },
        {
          id: "health-rag",
          title: "Medical Knowledge System",
          company: "HealthCore",
          industry: "Healthcare",
          image: "/images/case-studies/health-rag.jpg"
        },
        {
          id: "retail-personalization",
          title: "AI Personalization Engine",
          company: "ShopSmart",
          industry: "Retail",
          image: "/images/case-studies/retail-personalization.jpg"
        }
      ]}
    />
  );
};

export default AIServices;