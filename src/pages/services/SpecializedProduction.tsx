import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { Video, FileVideo, Sparkles, Cube, Tv3d, PcCase } from 'lucide-react';

const SpecializedProduction = () => {
  return (
    <ServiceTemplate
      title="Specialized Production Services"
      description="Elevate your brand with cutting-edge video, motion, and 3D content that engages audiences and drives results."
      icon={<Video className="h-6 w-6" />}
      color="emerald"
      services={[
        {
          name: "Video Production",
          description: "Effortless video production at scale for any platform",
          icon: <FileVideo className="h-5 w-5 text-emerald-400" />
        },
        {
          name: "Motion Design",
          description: "Dynamic animations for websites, ads, and presentations",
          icon: <Sparkles className="h-5 w-5 text-emerald-400" />
        },
        {
          name: "3D & AR Design",
          description: "Innovative solutions for immersive digital experiences",
          icon: <Cube className="h-5 w-5 text-emerald-400" />
        },
        {
          name: "VR Experiences",
          description: "Immersive virtual reality content for engaging brand interactions",
          icon: <PcCase className="h-5 w-5 text-emerald-400" />
        },
        {
          name: "Interactive Content",
          description: "Engaging interactive elements for digital platforms",
          icon: <Tv3d className="h-5 w-5 text-emerald-400" />
        },
        {
          name: "Live Production",
          description: "Professional live streaming and event production",
          icon: <Video className="h-5 w-5 text-emerald-400" />
        }
      ]}
      features={[
        "End-to-end production management from concept to delivery",
        "Industry-leading equipment and production techniques",
        "Expert team with backgrounds in film, animation, and digital media",
        "Seamless integration with your existing brand assets",
        "Optimized for engagement across all platforms and devices",
        "AI-enhanced workflows for faster turnaround times",
        "Comprehensive quality control and review processes",
        "Full rights to all delivered content",
        "Strategic guidance to maximize ROI on production investments"
      ]}
      caseStudies={[
        {
          id: "nexgen-motors",
          title: "Product Launch Video Campaign",
          company: "NexGen Motors",
          industry: "Automotive",
          image: "/images/case-studies/nexgen-motors.jpg"
        },
        {
          id: "virtual-summit",
          title: "Virtual Conference Experience",
          company: "Global Tech Summit",
          industry: "Events",
          image: "/images/case-studies/virtual-summit.jpg"
        },
        {
          id: "retail-ar",
          title: "AR Shopping Experience",
          company: "LuxModa",
          industry: "Retail",
          image: "/images/case-studies/retail-ar.jpg"
        }
      ]}
    />
  );
};

export default SpecializedProduction;