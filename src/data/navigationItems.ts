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
    href: "/work",
  },
  {
    title: "Services",
    categories: [
      {
        title: "Creative design services",
        href: "/services/creative-design",
        items: [
          {
            title: "Ad creative",
            href: "/services/ad-creative",
            description: "Eye-catching designs that perform",
            icon: icons.layers
          },
          {
            title: "Social media creative",
            href: "/services/social",
            description: "Engaging assets for all platforms",
            icon: icons.messageSquare
          },
          {
            title: "Presentation design",
            href: "/services/presentation",
            description: "Captivating slides that tell your story",
            icon: icons.panelLeft
          },
          {
            title: "Illustration design",
            href: "/services/illustration",
            description: "Visual storytelling for your brand",
            icon: icons.panelLeft
          },
          {
            title: "Branding services",
            href: "/services/branding",
            description: "Expertise & custom design services",
            icon: icons.layers
          },
          {
            title: "Email creation",
            href: "/services/email",
            description: "Click-worthy emails that drive engagement",
            icon: icons.mail
          },
          {
            title: "Web design",
            href: "/services/web-design",
            description: "Stunning websites built to engage",
            icon: icons.laptop
          },
          {
            title: "eBooks & report design",
            href: "/services/ebooks",
            description: "Your digital content supercharged",
            icon: icons.panelLeft
          },
          {
            title: "Concept creation",
            href: "/services/concept",
            description: "Big ideas crafted for maximum impact",
            icon: icons.lightbulb
          },
          {
            title: "Print design",
            href: "/services/print",
            description: "Tangible designs that leave a lasting impression",
            icon: icons.layers
          },
          {
            title: "Packaging & merchandise design",
            href: "/services/packaging",
            description: "Bring your brand to life",
            icon: icons.shoppingBag
          }
        ]
      },
      {
        title: "Specialized production services",
        href: "/services/production",
        items: [
          {
            title: "Video production",
            href: "/services/video-production",
            description: "Effortless video production at scale",
            icon: icons.laptop
          },
          {
            title: "Motion design",
            href: "/services/motion",
            description: "For websites, ads, and presentations",
            icon: icons.layers
          },
          {
            title: "3D & AR design",
            href: "/services/3d-ar",
            description: "Innovative solutions for 3D design services",
            icon: icons.layers
          },
          {
            title: "Web3 services",
            href: "/services/web3",
            description: "Blockchain and decentralized solutions",
            icon: icons.globe
          }
        ]
      },
      {
        title: "AI services",
        href: "/services/ai",
        items: [
          {
            title: "AI enhanced creative",
            href: "/services/ai-creative",
            description: "Human brilliance powered by AI",
            icon: icons.brainCircuit
          },
          {
            title: "AI consulting",
            href: "/services/ai-consulting",
            description: "Maximize AI with tailored strategies",
            icon: icons.brainCircuit
          }
        ]
      },
      {
        title: "Marketing services",
        href: "/services/marketing",
        items: [
          {
            title: "Marketing strategy",
            href: "/services/marketing-strategy",
            description: "Grow your brand with expert consultants",
            icon: icons.lineChart,
            isNew: true
          },
          {
            title: "Customer Support",
            href: "/services/customer-support",
            description: "Support that drives satisfaction",
            icon: icons.messageSquare
          }
        ]
      }
    ],
    featured: [
      {
        title: "Sensei",
        href: "/services/sensei",
        description: "Executive-level AI services designed exclusively for C-suite leaders. Strategic implementation with measurable ROI.",
        cta: "Learn more",
        icon: "SG"
      },
      {
        title: "AI Cloud Platform",
        href: "https://hanzo.ai",
        description: "Enterprise-grade AI solutions for your business",
        cta: "Explore platform"
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
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];
