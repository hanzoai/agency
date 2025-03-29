import React from 'react';
import { 
  BrainCircuit, 
  PanelLeft, 
  Globe, 
  LineChart, 
  ShoppingBag, 
  Mail, 
  MessageSquare,
  Code,
  Laptop,
  Cloud,
  Building,
  ArrowUpRight,
  Lightbulb,
  Bot,
  Layers,
  Briefcase,
  Factory,
  Network
} from "lucide-react";

export const icons = {
  brainCircuit: (props: React.SVGProps<SVGSVGElement>) => <BrainCircuit {...props} />,
  panelLeft: (props: React.SVGProps<SVGSVGElement>) => <PanelLeft {...props} />,
  globe: (props: React.SVGProps<SVGSVGElement>) => <Globe {...props} />,
  lineChart: (props: React.SVGProps<SVGSVGElement>) => <LineChart {...props} />,
  shoppingBag: (props: React.SVGProps<SVGSVGElement>) => <ShoppingBag {...props} />,
  mail: (props: React.SVGProps<SVGSVGElement>) => <Mail {...props} />,
  messageSquare: (props: React.SVGProps<SVGSVGElement>) => <MessageSquare {...props} />,
  code: (props: React.SVGProps<SVGSVGElement>) => <Code {...props} />,
  laptop: (props: React.SVGProps<SVGSVGElement>) => <Laptop {...props} />,
  cloud: (props: React.SVGProps<SVGSVGElement>) => <Cloud {...props} />,
  building: (props: React.SVGProps<SVGSVGElement>) => <Building {...props} />,
  arrowUpRight: (props: React.SVGProps<SVGSVGElement>) => <ArrowUpRight {...props} />,
  lightbulb: (props: React.SVGProps<SVGSVGElement>) => <Lightbulb {...props} />,
  bot: (props: React.SVGProps<SVGSVGElement>) => <Bot {...props} />,
  layers: (props: React.SVGProps<SVGSVGElement>) => <Layers {...props} />,
  briefcase: (props: React.SVGProps<SVGSVGElement>) => <Briefcase {...props} />,
  factory: (props: React.SVGProps<SVGSVGElement>) => <Factory {...props} />,
  network: (props: React.SVGProps<SVGSVGElement>) => <Network {...props} />
};
