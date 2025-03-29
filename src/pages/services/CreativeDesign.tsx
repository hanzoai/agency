import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { Palette, Brush, PenTool, ImagePlus, MonitorSmartphone, Mail, Lightbulb, FileText, Package, BookOpen } from 'lucide-react';

const CreativeDesign = () => {
  return (
    <ServiceTemplate
      title="Creative Design Services"
      description="Transform your brand with eye-catching designs that captivate audiences and drive engagement across all touchpoints."
      icon={<Palette className="h-6 w-6" />}
      color="lime"
      services={[
        {
          name: "Ad Creative",
          description: "Eye-catching designs that perform and convert across platforms",
          icon: <Brush className="h-5 w-5 text-lime-400" />
        },
        {
          name: "Social Media Creative",
          description: "Engaging assets optimized for all social platforms",
          icon: <MonitorSmartphone className="h-5 w-5 text-lime-400" />
        },
        {
          name: "Presentation Design",
          description: "Captivating slides that tell your story effectively",
          icon: <FileText className="h-5 w-5 text-lime-400" />
        },
        {
          name: "Illustration Design",
          description: "Visual storytelling that brings your brand to life",
          icon: <PenTool className="h-5 w-5 text-lime-400" />
        },
        {
          name: "Email Creation",
          description: "Click-worthy emails that drive engagement and conversions",
          icon: <Mail className="h-5 w-5 text-lime-400" />
        },
        {
          name: "Concept Creation",
          description: "Big ideas crafted for maximum impact and resonance",
          icon: <Lightbulb className="h-5 w-5 text-lime-400" />
        },
        {
          name: "eBooks & Reports",
          description: "Your digital content supercharged with stunning design",
          icon: <BookOpen className="h-5 w-5 text-lime-400" />
        },
        {
          name: "Packaging Design",
          description: "Tangible designs that make lasting impressions",
          icon: <Package className="h-5 w-5 text-lime-400" />
        }
      ]}
      features={[
        "Strategic design aligned with your brand and business objectives",
        "Expert designers with experience across industries and mediums",
        "Rapid turnaround for time-sensitive projects",
        "Unlimited revisions until you're completely satisfied",
        "Comprehensive brand consistency across all deliverables",
        "AI-enhanced workflows for increased efficiency and creativity",
        "Collaborative process with dedicated project managers",
        "Full copyright ownership of all delivered designs",
        "Cross-platform optimization for all digital assets"
      ]}
      caseStudies={[
        {
          id: "techstream",
          title: "Brand Identity Transformation",
          company: "TechStream",
          industry: "SaaS",
          image: "/images/case-studies/techstream.jpg"
        },
        {
          id: "quantum-finance",
          title: "Financial Report Design System",
          company: "Quantum Finance",
          industry: "Finance",
          image: "/images/case-studies/quantum-finance.jpg"
        },
        {
          id: "artisan-retail",
          title: "E-commerce Visual Identity",
          company: "Artisan Retail",
          industry: "E-commerce",
          image: "/images/case-studies/artisan-retail.jpg"
        }
      ]}
    />
  );
};

export default CreativeDesign;