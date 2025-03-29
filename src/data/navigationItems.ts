import { icons } from './navigationIcons';

export type NavigationItem = {
  title: string;
  href?: string;
  description?: string;
  isExternal?: boolean;
  featured?: {
    title: string;
    href: string;
    description: string;
    cta?: string;
    icon?: string;
    isExternal?: boolean;
  }[];
  children?: {
    title: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
    isExternal?: boolean;
    isNew?: boolean;
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
  categories?: {
    title: string;
    href: string;
    items: {
      title: string;
      href: string;
      description?: string;
      icon?: React.ComponentType<{ className?: string }>;
      isExternal?: boolean;
      isNew?: boolean;
    }[];
  }[];
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Our Work",
    href: "/our-work",
  },
  {
    title: "Services",
    href: "/services",
    categories: [
      {
        title: "Engineering",
        href: "/services/engineering",
        items: [
          {
            title: "Digital Engineering",
            href: "/services/digital-engineering",
            description: "Full-stack development and software solutions",
            icon: icons.code
          },
          {
            title: "Cloud Services",
            href: "/services/cloud",
            description: "Scalable cloud infrastructure and solutions",
            icon: icons.cloud
          },
          {
            title: "Web Development",
            href: "/services/web-development",
            description: "Custom websites and web applications",
            icon: icons.laptop
          },
          {
            title: "Mobile Development",
            href: "/services/mobile",
            description: "Native and cross-platform mobile solutions",
            icon: icons.laptop
          },
          {
            title: "Web3 & Blockchain",
            href: "/services/web3",
            description: "Decentralized solutions and smart contracts",
            icon: icons.globe
          }
        ]
      },
      {
        title: "Design",
        href: "/services/design",
        items: [
          {
            title: "UI/UX Design",
            href: "/services/ui-ux",
            description: "User-centered design solutions",
            icon: icons.layers
          },
          {
            title: "Brand Identity",
            href: "/services/branding",
            description: "Complete brand identity systems",
            icon: icons.layers
          },
          {
            title: "Creative Services",
            href: "/services/creative",
            description: "Ad creative, illustrations, and visual assets",
            icon: icons.layers
          },
          {
            title: "Motion & Video",
            href: "/services/motion-video",
            description: "Video production and motion graphics",
            icon: icons.laptop
          },
          {
            title: "Product Design",
            href: "/services/product-design",
            description: "End-to-end product design solutions",
            icon: icons.layers
          }
        ]
      },
      {
        title: "Research",
        href: "/services/research",
        items: [
          {
            title: "User Research",
            href: "/services/user-research",
            description: "Insights into user behaviors and needs",
            icon: icons.briefcase
          },
          {
            title: "Market Analysis",
            href: "/services/market-analysis",
            description: "Comprehensive market research",
            icon: icons.lineChart
          },
          {
            title: "Data Analytics",
            href: "/services/data-analytics",
            description: "Data-driven insights and visualization",
            icon: icons.lineChart
          },
          {
            title: "Competitive Analysis",
            href: "/services/competitive-analysis",
            description: "In-depth competitor research",
            icon: icons.lineChart
          },
          {
            title: "Emerging Tech",
            href: "/services/emerging-tech",
            description: "Research on cutting-edge technologies",
            icon: icons.lightbulb
          }
        ]
      },
      {
        title: "Growth",
        href: "/services/growth",
        items: [
          {
            title: "Marketing Strategy",
            href: "/services/marketing-strategy",
            description: "Comprehensive marketing plans",
            icon: icons.lineChart,
            isNew: true
          },
          {
            title: "AI Solutions",
            href: "/services/ai-solutions",
            description: "AI-powered business transformation",
            icon: icons.brainCircuit
          },
          {
            title: "Digital Marketing",
            href: "/services/digital-marketing",
            description: "Full-service digital marketing",
            icon: icons.messageSquare
          },
          {
            title: "Content Strategy",
            href: "/services/content-strategy",
            description: "Content planning and execution",
            icon: icons.messageSquare
          },
          {
            title: "Growth Optimization",
            href: "/services/growth-optimization",
            description: "Conversion and retention strategies",
            icon: icons.lineChart
          }
        ]
      }
    ],
    featured: [
      {
        title: "Enterprise Solutions",
        href: "/enterprise",
        description: "Comprehensive AI-powered solutions designed for enterprise scale and complexity",
        cta: "Learn more",
        icon: "🏢"
      },
      {
        title: "Sensei Group",
        href: "https://sensei.group",
        description: "Fractional CXO services from our elite collective of executives and technology experts",
        cta: "Hire CXX Talent",
        isExternal: true,
        icon: "SG"
      }
    ]
  },
  {
    title: "Solutions",
    capabilities: [
      {
        title: "Cloud",
        href: "/solutions?capability=cloud",
        icon: icons.cloud
      },
      {
        title: "Cybersecurity",
        href: "/solutions?capability=cybersecurity",
        icon: icons.layers
      },
      {
        title: "Data and Artificial Intelligence",
        href: "/solutions?capability=data-ai",
        icon: icons.brainCircuit
      },
      {
        title: "Digital Engineering",
        href: "/solutions?capability=digital-engineering",
        icon: icons.code
      },
      {
        title: "Emerging Technology",
        href: "/solutions?capability=emerging-tech",
        icon: icons.lightbulb
      },
      {
        title: "Finance and Risk Management",
        href: "/solutions?capability=finance-risk",
        icon: icons.lineChart
      }
    ],
    industries: [
      {
        title: "Aerospace and Defense",
        href: "/solutions?industry=aerospace-defense",
        icon: icons.globe
      },
      {
        title: "Automotive",
        href: "/solutions?industry=automotive",
        icon: icons.lineChart
      },
      {
        title: "Banking",
        href: "/solutions?industry=banking",
        icon: icons.building
      },
      {
        title: "Capital Markets",
        href: "/solutions?industry=capital-markets",
        icon: icons.lineChart
      },
      {
        title: "Chemicals",
        href: "/solutions?industry=chemicals",
        icon: icons.factory
      },
      {
        title: "Communications and Media",
        href: "/solutions?industry=communications-media",
        icon: icons.globe
      },
      {
        title: "Consumer Goods and Services",
        href: "/solutions?industry=consumer-goods",
        icon: icons.shoppingBag
      }
    ],
    featured: [
      {
        title: "AI Cloud Platform",
        href: "https://cloud.hanzo.ai",
        description: "Our enterprise AI platform for scalable, secure solutions.",
        cta: "Explore platform",
        isExternal: true
      },
      {
        title: "DX Platform",
        href: "https://hanzo.ai",
        description: "Our digital experience platform for enterprise transformation",
        cta: "Learn more",
        isExternal: true
      }
    ]
  },
  {
    title: "Pricing",
    href: "/pricing",
  }
];
