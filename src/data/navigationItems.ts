import { icons } from './navigationIcons';

export type NavigationItem = {
  title: string;
  href?: string;
  description?: string;
  featured?: {
    title: string;
    href: string;
    description: string;
  }[];
  children?: {
    title: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
    isExternal?: boolean;
  }[];
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Our Work",
    href: "/work",
  },
  {
    title: "Services",
    children: [
      {
        title: "Creative Design",
        href: "/services/creative-design",
        description: "Design services powered by AI technology",
        icon: icons.panelLeft
      },
      {
        title: "Web & Video Production",
        href: "/services/web-video-production",
        description: "High-quality websites and video content",
        icon: icons.laptop
      },
      {
        title: "Digital Marketing",
        href: "/services/marketing",
        description: "AI-driven marketing strategies",
        icon: icons.lineChart
      },
      {
        title: "Ad Creative",
        href: "/services/ad-creative",
        description: "Performance-focused advertising creative",
        icon: icons.layers
      },
      {
        title: "Email Creation",
        href: "/services/email",
        description: "Effective email marketing campaigns",
        icon: icons.mail
      },
      {
        title: "Social Media",
        href: "/services/social",
        description: "Engaging social media content",
        icon: icons.messageSquare
      },
      {
        title: "Illustration & Design",
        href: "/services/illustration",
        description: "Creative illustrations and graphic design",
        icon: icons.panelLeft
      },
      {
        title: "Motion & Animation",
        href: "/services/motion",
        description: "Engaging animations and motion graphics",
        icon: icons.layers
      },
      {
        title: "Visual Brilliance",
        href: "/services/visual",
        description: "Stunning visual content and imagery",
        icon: icons.globe
      },
      {
        title: "Packaging & Merchandise",
        href: "/services/packaging",
        description: "Product packaging and merchandise design",
        icon: icons.shoppingBag
      },
      {
        title: "Sensei",
        href: "/services/sensei",
        description: "Executive-level AI services for C-suite leaders",
        icon: icons.brainCircuit
      }
    ],
    featured: [
      {
        title: "AI Cloud Platform",
        href: "https://hanzo.ai",
        description: "Enterprise-grade AI solutions for your business"
      }
    ]
  },
  {
    title: "Solutions",
    children: [
      {
        title: "Capabilities",
        href: "/solutions/capabilities",
        description: "Our core technical and creative capabilities",
        icon: icons.lightbulb
      },
      {
        title: "Industries",
        href: "/solutions/industries",
        description: "Sector-specific AI and creative solutions",
        icon: icons.factory
      },
      {
        title: "Branding Solutions",
        href: "/solutions/branding",
        description: "Strategic brand development and management",
        icon: icons.layers
      },
      {
        title: "AI Consulting",
        href: "/solutions/ai-consulting",
        description: "Expert guidance on AI implementation",
        icon: icons.brainCircuit
      },
      {
        title: "Enterprise Solutions",
        href: "/solutions/enterprise",
        description: "Tailored solutions for large organizations",
        icon: icons.building
      },
      {
        title: "Growth Strategy",
        href: "/solutions/growth",
        description: "Data-driven growth planning",
        icon: icons.lineChart
      },
      {
        title: "Creative Production",
        href: "/solutions/creative-production",
        description: "Streamlined creative content production",
        icon: icons.layers
      },
      {
        title: "AI with Humans",
        href: "/solutions/ai-human-collaboration",
        description: "Optimal human-AI collaboration models",
        icon: icons.bot
      },
      {
        title: "Maximizing Conversion",
        href: "/solutions/conversion",
        description: "Strategies to increase conversion rates",
        icon: icons.arrowUpRight
      },
      {
        title: "AI with Tailored Strategies",
        href: "/solutions/tailored-ai",
        description: "Custom AI solutions for your specific needs",
        icon: icons.brainCircuit
      }
    ],
    featured: [
      {
        title: "DX Platform",
        href: "https://hanzo.ai",
        description: "Our digital experience platform for enterprises"
      }
    ]
  },
  {
    title: "Help",
    href: "/help",
  },
];
