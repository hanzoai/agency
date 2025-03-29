export type NavigationItem = {
  title: string;
  href?: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
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
        description: "Design services powered by AI technology"
      },
      {
        title: "Web & Video Production",
        href: "/services/web-video-production",
        description: "High-quality websites and video content"
      },
      {
        title: "Digital Marketing",
        href: "/services/marketing",
        description: "AI-driven marketing strategies"
      },
      {
        title: "Ad Creative",
        href: "/services/ad-creative",
        description: "Performance-focused advertising creative"
      },
      {
        title: "Email Creation",
        href: "/services/email",
        description: "Effective email marketing campaigns"
      },
      {
        title: "Social Media",
        href: "/services/social",
        description: "Engaging social media content"
      },
    ]
  },
  {
    title: "Solutions",
    children: [
      {
        title: "Branding Solutions",
        href: "/solutions/branding",
        description: "Strategic brand development and management"
      },
      {
        title: "AI Consulting",
        href: "/solutions/ai-consulting",
        description: "Expert guidance on AI implementation"
      },
      {
        title: "Enterprise Solutions",
        href: "/solutions/enterprise",
        description: "Tailored solutions for large organizations"
      },
      {
        title: "Growth Strategy",
        href: "/solutions/growth",
        description: "Data-driven growth planning"
      },
      {
        title: "Creative Production",
        href: "/solutions/creative-production",
        description: "Streamlined creative content production"
      },
      {
        title: "AI with Humans",
        href: "/solutions/ai-human-collaboration",
        description: "Optimal human-AI collaboration models"
      },
    ]
  },
  {
    title: "Help",
    href: "/help",
  },
];
