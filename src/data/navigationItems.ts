import { icons } from './navigationIcons';

export type NavigationItem = {
  title: string;
  href?: string;
  description?: string;
  featured?: {
    title: string;
    href: string;
    description: string;
    cta?: string;
    icon?: string;
  }[];
  children?: {
    title: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
    isExternal?: boolean;
  }[];
  capabilities?: {
    title: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
    isExternal?: boolean;
  }[];
  industries?: {
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
    capabilities: [
      {
        title: "Cloud",
        href: "/solutions/capabilities/cloud",
        icon: icons.cloud
      },
      {
        title: "Cybersecurity",
        href: "/solutions/capabilities/cybersecurity",
        icon: icons.layers
      },
      {
        title: "Data and Artificial Intelligence",
        href: "/solutions/capabilities/data-ai",
        icon: icons.brainCircuit
      },
      {
        title: "Digital Engineering",
        href: "/solutions/capabilities/digital-engineering",
        icon: icons.code
      },
      {
        title: "Emerging Technology",
        href: "/solutions/capabilities/emerging-tech",
        icon: icons.lightbulb
      },
      {
        title: "Finance and Risk Management",
        href: "/solutions/capabilities/finance-risk",
        icon: icons.lineChart
      },
      {
        title: "Fractional CXO",
        href: "/solutions/capabilities/fractional-cxo",
        icon: icons.briefcase
      }
    ],
    industries: [
      {
        title: "Aerospace and Defense",
        href: "/solutions/industries/aerospace-defense",
        icon: icons.globe
      },
      {
        title: "Automotive",
        href: "/solutions/industries/automotive",
        icon: icons.lineChart
      },
      {
        title: "Banking",
        href: "/solutions/industries/banking",
        icon: icons.building
      },
      {
        title: "Capital Markets",
        href: "/solutions/industries/capital-markets",
        icon: icons.lineChart
      },
      {
        title: "Chemicals",
        href: "/solutions/industries/chemicals",
        icon: icons.factory
      },
      {
        title: "Communications and Media",
        href: "/solutions/industries/communications-media",
        icon: icons.globe
      },
      {
        title: "Consumer Goods and Services",
        href: "/solutions/industries/consumer-goods",
        icon: icons.shoppingBag
      }
    ],
    featured: [
      {
        title: "Sensei Group",
        href: "/sensei-group",
        description: "Accelerate enterprise transformation with our elite collective of CXOs and technology experts. Strategic implementation for digital evolution.",
        cta: "Learn more",
        icon: "SG"
      },
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
