import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  services: {
    name: string;
    description: string;
    icon?: ReactNode;
  }[];
  features: string[];
  caseStudies: {
    id: string;
    title: string;
    company: string;
    industry: string;
    image: string;
  }[];
}

// Engineering Services
export const engineeringServices: Record<string, Service> = {
  'digital-engineering': {
    id: 'digital-engineering',
    title: 'Digital Engineering',
    description: 'Full-stack development and software solutions that power modern businesses',
    icon: '💻',
    color: 'blue',
    services: [
      {
        name: 'Full-Stack Development',
        description: 'End-to-end application development with modern frameworks',
        icon: '🔧'
      },
      {
        name: 'API Development',
        description: 'Scalable RESTful and GraphQL APIs for seamless integration',
        icon: '🔌'
      },
      {
        name: 'Microservices Architecture',
        description: 'Distributed systems design for maximum scalability',
        icon: '🏗️'
      },
      {
        name: 'DevOps & CI/CD',
        description: 'Automated deployment pipelines and infrastructure',
        icon: '🚀'
      }
    ],
    features: [
      'Modern tech stack with React, Node.js, Python, and Go',
      'Scalable microservices architecture',
      'Automated testing and deployment pipelines',
      'Security-first development approach',
      'Agile development methodology',
      'Real-time monitoring and analytics'
    ],
    caseStudies: [
      {
        id: 'damon-motorcycles',
        title: 'Building the future of motorcycle technology',
        company: 'Damon Motorcycles',
        industry: 'Automotive',
        image: '/images/damon/cover.jpg'
      },
      {
        id: 'casper-blockchain',
        title: 'Enterprise blockchain platform development',
        company: 'Casper',
        industry: 'Blockchain',
        image: '/images/casper/cover.jpg'
      }
    ]
  },
  'cloud': {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and solutions for modern enterprises',
    icon: '☁️',
    color: 'sky',
    services: [
      {
        name: 'Cloud Migration',
        description: 'Seamless migration to AWS, Azure, or Google Cloud',
        icon: '🔄'
      },
      {
        name: 'Cloud Architecture',
        description: 'Design and implement scalable cloud infrastructure',
        icon: '🏛️'
      },
      {
        name: 'Kubernetes & Containerization',
        description: 'Container orchestration for modern applications',
        icon: '📦'
      },
      {
        name: 'Serverless Solutions',
        description: 'Cost-effective serverless architecture design',
        icon: '⚡'
      }
    ],
    features: [
      'Multi-cloud expertise (AWS, Azure, GCP)',
      '99.9% uptime guarantee',
      'Auto-scaling infrastructure',
      'Cost optimization strategies',
      '24/7 monitoring and support',
      'Disaster recovery planning'
    ],
    caseStudies: [
      {
        id: 'unikoin-gold',
        title: 'Scaling blockchain infrastructure on AWS',
        company: 'Unikoin Gold',
        industry: 'Gaming',
        image: '/images/unikrn/cover.jpg'
      }
    ]
  },
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications that drive business growth',
    icon: '🌐',
    color: 'purple',
    services: [
      {
        name: 'Corporate Websites',
        description: 'Professional websites that represent your brand',
        icon: '🏢'
      },
      {
        name: 'E-commerce Platforms',
        description: 'Full-featured online stores with payment integration',
        icon: '🛒'
      },
      {
        name: 'Progressive Web Apps',
        description: 'Fast, reliable apps that work on any device',
        icon: '📱'
      },
      {
        name: 'CMS Development',
        description: 'Custom content management systems',
        icon: '📝'
      }
    ],
    features: [
      'Responsive design for all devices',
      'SEO optimization built-in',
      'Lightning-fast performance',
      'Accessibility compliance (WCAG 2.1)',
      'Analytics and conversion tracking',
      'Easy content management'
    ],
    caseStudies: [
      {
        id: 'cover-build',
        title: 'Revolutionary prefab housing platform',
        company: 'Cover Build',
        industry: 'Real Estate',
        image: '/images/cover/cover.jpg'
      },
      {
        id: 'bellabeat',
        title: 'Women\'s wellness e-commerce platform',
        company: 'Bellabeat',
        industry: 'Health Tech',
        image: '/images/bellabeat/cover.jpg'
      }
    ]
  },
  'mobile': {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile solutions for iOS and Android',
    icon: '📱',
    color: 'green',
    services: [
      {
        name: 'iOS Development',
        description: 'Native iOS apps with Swift and SwiftUI',
        icon: '🍎'
      },
      {
        name: 'Android Development',
        description: 'Native Android apps with Kotlin',
        icon: '🤖'
      },
      {
        name: 'React Native',
        description: 'Cross-platform apps from a single codebase',
        icon: '⚛️'
      },
      {
        name: 'Flutter Development',
        description: 'Beautiful, natively compiled applications',
        icon: '🦋'
      }
    ],
    features: [
      'Native performance and user experience',
      'Push notifications and real-time features',
      'Offline functionality',
      'App Store optimization',
      'In-app purchases and monetization',
      'Cross-platform code sharing'
    ],
    caseStudies: [
      {
        id: 'myle-tap',
        title: 'Innovative wearable companion app',
        company: 'Myle Tap',
        industry: 'Wearables',
        image: '/images/myle/cover.jpg'
      }
    ]
  },
  'web3': {
    id: 'web3',
    title: 'Web3 & Blockchain',
    description: 'Decentralized solutions and smart contracts for the future of the web',
    icon: '🔗',
    color: 'indigo',
    services: [
      {
        name: 'Smart Contract Development',
        description: 'Secure and audited smart contracts on multiple chains',
        icon: '📜'
      },
      {
        name: 'DeFi Applications',
        description: 'Decentralized finance platforms and protocols',
        icon: '💰'
      },
      {
        name: 'NFT Platforms',
        description: 'Custom NFT marketplaces and minting solutions',
        icon: '🎨'
      },
      {
        name: 'Web3 Integration',
        description: 'Wallet connections and blockchain interactions',
        icon: '🔐'
      }
    ],
    features: [
      'Multi-chain support (Ethereum, Polygon, Solana)',
      'Security audits and best practices',
      'Gas optimization strategies',
      'Decentralized storage integration',
      'Token economics design',
      'DAO development and governance'
    ],
    caseStudies: [
      {
        id: 'unikoin-gold',
        title: 'Esports betting on the blockchain',
        company: 'Unikoin Gold',
        industry: 'Gaming',
        image: '/images/unikrn/cover.jpg'
      },
      {
        id: 'casper-blockchain',
        title: 'Enterprise-ready blockchain platform',
        company: 'Casper',
        industry: 'Blockchain',
        image: '/images/casper/cover.jpg'
      }
    ]
  }
};

// Design Services
export const designServices: Record<string, Service> = {
  'ui-ux': {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that delight and convert',
    icon: '🎨',
    color: 'pink',
    services: [
      {
        name: 'User Research',
        description: 'Deep insights into user needs and behaviors',
        icon: '🔍'
      },
      {
        name: 'Interface Design',
        description: 'Beautiful, intuitive interfaces that users love',
        icon: '✨'
      },
      {
        name: 'Prototyping',
        description: 'Interactive prototypes for testing and validation',
        icon: '🎯'
      },
      {
        name: 'Design Systems',
        description: 'Scalable design systems for consistency',
        icon: '📐'
      }
    ],
    features: [
      'User journey mapping and personas',
      'Wireframing and rapid prototyping',
      'Usability testing and iteration',
      'Accessibility-first design',
      'Design system development',
      'Figma and design tool expertise'
    ],
    caseStudies: [
      {
        id: 'myle-tap',
        title: 'Intuitive wearable device interface',
        company: 'Myle Tap',
        industry: 'Wearables',
        image: '/images/myle/cover.jpg'
      },
      {
        id: 'bellabeat',
        title: 'Wellness app user experience',
        company: 'Bellabeat',
        industry: 'Health Tech',
        image: '/images/bellabeat/cover.jpg'
      }
    ]
  },
  'branding': {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Complete brand identity systems that tell your story',
    icon: '🏷️',
    color: 'orange',
    services: [
      {
        name: 'Logo Design',
        description: 'Memorable logos that represent your brand',
        icon: '✏️'
      },
      {
        name: 'Brand Guidelines',
        description: 'Comprehensive brand style guides',
        icon: '📖'
      },
      {
        name: 'Visual Identity',
        description: 'Complete visual language for your brand',
        icon: '🎨'
      },
      {
        name: 'Brand Strategy',
        description: 'Strategic positioning and messaging',
        icon: '🎯'
      }
    ],
    features: [
      'Brand discovery workshops',
      'Competitive analysis and positioning',
      'Logo design and variations',
      'Color palette and typography',
      'Brand voice and messaging',
      'Implementation guidelines'
    ],
    caseStudies: [
      {
        id: 'damon-motorcycles',
        title: 'Future-forward motorcycle brand',
        company: 'Damon Motorcycles',
        industry: 'Automotive',
        image: '/images/damon/cover.jpg'
      }
    ]
  },
  'creative': {
    id: 'creative',
    title: 'Creative Services',
    description: 'Ad creative, illustrations, and visual assets that capture attention',
    icon: '🎯',
    color: 'lime',
    services: [
      {
        name: 'Ad Creative',
        description: 'High-converting ads for all platforms',
        icon: '📱'
      },
      {
        name: 'Illustration',
        description: 'Custom illustrations and graphics',
        icon: '🎨'
      },
      {
        name: 'Print Design',
        description: 'Brochures, packaging, and print materials',
        icon: '📄'
      },
      {
        name: 'Social Media Assets',
        description: 'Engaging content for social platforms',
        icon: '📸'
      }
    ],
    features: [
      'Platform-specific optimization',
      'A/B testing and iteration',
      'Brand consistency across assets',
      'Fast turnaround times',
      'Unlimited revisions',
      'Performance analytics'
    ],
    caseStudies: [
      {
        id: 'trillerfest',
        title: 'Festival marketing campaign',
        company: 'Triller',
        industry: 'Entertainment',
        image: '/images/triller/cover.png'
      }
    ]
  },
  'motion-video': {
    id: 'motion-video',
    title: 'Motion & Video',
    description: 'Video production and motion graphics that tell your story',
    icon: '🎬',
    color: 'red',
    services: [
      {
        name: 'Video Production',
        description: 'Professional video content creation',
        icon: '📹'
      },
      {
        name: 'Motion Graphics',
        description: 'Animated graphics and visual effects',
        icon: '✨'
      },
      {
        name: '3D Animation',
        description: '3D modeling and animation',
        icon: '🎮'
      },
      {
        name: 'Video Editing',
        description: 'Professional post-production services',
        icon: '✂️'
      }
    ],
    features: [
      '4K video production',
      'Professional equipment and crew',
      'Motion graphics and VFX',
      'Color grading and sound design',
      'Multi-platform optimization',
      'Fast delivery times'
    ],
    caseStudies: [
      {
        id: 'cover-build',
        title: '3D visualization for prefab homes',
        company: 'Cover Build',
        industry: 'Real Estate',
        image: '/images/cover/cover.jpg'
      }
    ]
  },
  'product-design': {
    id: 'product-design',
    title: 'Product Design',
    description: 'End-to-end product design solutions from concept to launch',
    icon: '📦',
    color: 'teal',
    services: [
      {
        name: 'Product Strategy',
        description: 'Strategic product vision and roadmap',
        icon: '🗺️'
      },
      {
        name: 'User Experience',
        description: 'User flows and interaction design',
        icon: '👥'
      },
      {
        name: 'Visual Design',
        description: 'Beautiful, functional product interfaces',
        icon: '🎨'
      },
      {
        name: 'Design Handoff',
        description: 'Developer-ready designs and specs',
        icon: '🤝'
      }
    ],
    features: [
      'Product discovery and validation',
      'User research and testing',
      'Information architecture',
      'Interaction design',
      'Design system creation',
      'Developer collaboration'
    ],
    caseStudies: [
      {
        id: 'myle-tap',
        title: 'Wearable device ecosystem',
        company: 'Myle Tap',
        industry: 'Wearables',
        image: '/images/myle/cover.jpg'
      }
    ]
  }
};

// Research Services
export const researchServices: Record<string, Service> = {
  'user-research': {
    id: 'user-research',
    title: 'User Research',
    description: 'Deep insights into user behaviors, needs, and motivations',
    icon: '🔬',
    color: 'violet',
    services: [
      {
        name: 'User Interviews',
        description: 'In-depth conversations with your users',
        icon: '💬'
      },
      {
        name: 'Usability Testing',
        description: 'Testing designs with real users',
        icon: '🧪'
      },
      {
        name: 'Surveys & Analytics',
        description: 'Quantitative insights at scale',
        icon: '📊'
      },
      {
        name: 'Journey Mapping',
        description: 'Visualizing the complete user experience',
        icon: '🗺️'
      }
    ],
    features: [
      'Mixed methods research approach',
      'Remote and in-person testing',
      'Behavioral analytics integration',
      'Persona development',
      'Pain point identification',
      'Actionable recommendations'
    ],
    caseStudies: [
      {
        id: 'bellabeat',
        title: 'Understanding women\'s wellness needs',
        company: 'Bellabeat',
        industry: 'Health Tech',
        image: '/images/bellabeat/cover.jpg'
      }
    ]
  },
  'market-analysis': {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'Comprehensive market research and competitive intelligence',
    icon: '📈',
    color: 'blue',
    services: [
      {
        name: 'Market Research',
        description: 'Industry trends and market sizing',
        icon: '🔍'
      },
      {
        name: 'Competitive Analysis',
        description: 'Deep dive into competitor strategies',
        icon: '🎯'
      },
      {
        name: 'Customer Segmentation',
        description: 'Identify and profile target audiences',
        icon: '👥'
      },
      {
        name: 'Opportunity Assessment',
        description: 'Market gaps and growth opportunities',
        icon: '💡'
      }
    ],
    features: [
      'Primary and secondary research',
      'Market sizing and forecasting',
      'Competitive benchmarking',
      'SWOT analysis',
      'Customer insights',
      'Strategic recommendations'
    ],
    caseStudies: [
      {
        id: 'damon-motorcycles',
        title: 'Electric motorcycle market analysis',
        company: 'Damon Motorcycles',
        industry: 'Automotive',
        image: '/images/damon/cover.jpg'
      }
    ]
  },
  'data-analytics': {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Data-driven insights and visualization for better decisions',
    icon: '📊',
    color: 'green',
    services: [
      {
        name: 'Business Intelligence',
        description: 'Dashboards and reporting solutions',
        icon: '📈'
      },
      {
        name: 'Predictive Analytics',
        description: 'Machine learning models for forecasting',
        icon: '🔮'
      },
      {
        name: 'Data Visualization',
        description: 'Clear, actionable data presentations',
        icon: '📊'
      },
      {
        name: 'Analytics Strategy',
        description: 'Data collection and analysis frameworks',
        icon: '🎯'
      }
    ],
    features: [
      'Custom dashboard development',
      'Real-time data processing',
      'Advanced statistical analysis',
      'Machine learning models',
      'A/B testing frameworks',
      'ROI measurement'
    ],
    caseStudies: [
      {
        id: 'unikoin-gold',
        title: 'Gaming analytics platform',
        company: 'Unikoin Gold',
        industry: 'Gaming',
        image: '/images/unikrn/cover.jpg'
      }
    ]
  },
  'competitive-analysis': {
    id: 'competitive-analysis',
    title: 'Competitive Analysis',
    description: 'In-depth competitor research and strategic positioning',
    icon: '🎯',
    color: 'orange',
    services: [
      {
        name: 'Competitor Audits',
        description: 'Comprehensive competitor evaluations',
        icon: '🔍'
      },
      {
        name: 'Feature Comparison',
        description: 'Detailed feature and capability analysis',
        icon: '📋'
      },
      {
        name: 'Pricing Analysis',
        description: 'Competitive pricing strategies',
        icon: '💰'
      },
      {
        name: 'Gap Analysis',
        description: 'Identify competitive advantages',
        icon: '🎯'
      }
    ],
    features: [
      'Competitor identification and mapping',
      'Product and service comparison',
      'Marketing strategy analysis',
      'Technology stack evaluation',
      'Customer sentiment analysis',
      'Strategic recommendations'
    ],
    caseStudies: []
  },
  'emerging-tech': {
    id: 'emerging-tech',
    title: 'Emerging Tech Research',
    description: 'Research on cutting-edge technologies and future trends',
    icon: '🚀',
    color: 'purple',
    services: [
      {
        name: 'AI & Machine Learning',
        description: 'Research on AI applications and trends',
        icon: '🤖'
      },
      {
        name: 'Blockchain & Web3',
        description: 'Decentralized technology research',
        icon: '🔗'
      },
      {
        name: 'AR/VR & Metaverse',
        description: 'Extended reality research',
        icon: '🥽'
      },
      {
        name: 'Technology Roadmapping',
        description: 'Future technology planning',
        icon: '🗺️'
      }
    ],
    features: [
      'Technology trend analysis',
      'Proof of concept development',
      'Feasibility studies',
      'Innovation workshops',
      'Technology adoption strategies',
      'Future scenario planning'
    ],
    caseStudies: [
      {
        id: 'casper-blockchain',
        title: 'Blockchain technology evaluation',
        company: 'Casper',
        industry: 'Blockchain',
        image: '/images/casper/cover.jpg'
      }
    ]
  }
};

// Growth Services
export const growthServices: Record<string, Service> = {
  'marketing-strategy': {
    id: 'marketing-strategy',
    title: 'Marketing Strategy',
    description: 'Comprehensive marketing plans that drive measurable growth',
    icon: '📈',
    color: 'yellow',
    services: [
      {
        name: 'Go-to-Market Strategy',
        description: 'Launch strategies for new products',
        icon: '🚀'
      },
      {
        name: 'Brand Positioning',
        description: 'Strategic brand positioning and messaging',
        icon: '🎯'
      },
      {
        name: 'Channel Strategy',
        description: 'Multi-channel marketing optimization',
        icon: '📡'
      },
      {
        name: 'Marketing Analytics',
        description: 'Data-driven marketing decisions',
        icon: '📊'
      }
    ],
    features: [
      'Market research and analysis',
      'Customer persona development',
      'Marketing mix optimization',
      'Campaign planning and execution',
      'Performance tracking and ROI',
      'Quarterly strategy reviews'
    ],
    caseStudies: [
      {
        id: 'trillerfest',
        title: 'Festival marketing strategy',
        company: 'Triller',
        industry: 'Entertainment',
        image: '/images/triller/cover.png'
      }
    ]
  },
  'ai-solutions': {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'AI-powered business transformation and automation',
    icon: '🤖',
    color: 'cyan',
    services: [
      {
        name: 'AI Strategy',
        description: 'AI adoption roadmap and implementation',
        icon: '🗺️'
      },
      {
        name: 'Machine Learning',
        description: 'Custom ML models for your business',
        icon: '🧠'
      },
      {
        name: 'Process Automation',
        description: 'AI-powered workflow automation',
        icon: '⚡'
      },
      {
        name: 'Chatbots & Assistants',
        description: 'Intelligent conversational interfaces',
        icon: '💬'
      }
    ],
    features: [
      'AI readiness assessment',
      'Custom model development',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'AI ethics and governance'
    ],
    caseStudies: []
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-service digital marketing that delivers results',
    icon: '📱',
    color: 'pink',
    services: [
      {
        name: 'SEO & SEM',
        description: 'Search engine optimization and marketing',
        icon: '🔍'
      },
      {
        name: 'Social Media Marketing',
        description: 'Engaging social media campaigns',
        icon: '📱'
      },
      {
        name: 'Email Marketing',
        description: 'Targeted email campaigns that convert',
        icon: '📧'
      },
      {
        name: 'Performance Marketing',
        description: 'Data-driven paid advertising',
        icon: '🎯'
      }
    ],
    features: [
      'Multi-channel campaign management',
      'Conversion rate optimization',
      'Marketing automation',
      'A/B testing and optimization',
      'Analytics and reporting',
      'ROI tracking'
    ],
    caseStudies: [
      {
        id: 'damon-motorcycles',
        title: '200% increase in pre-orders',
        company: 'Damon Motorcycles',
        industry: 'Automotive',
        image: '/images/damon/cover.jpg'
      }
    ]
  },
  'content-strategy': {
    id: 'content-strategy',
    title: 'Content Strategy',
    description: 'Content planning and execution that engages your audience',
    icon: '✍️',
    color: 'purple',
    services: [
      {
        name: 'Content Planning',
        description: 'Editorial calendars and content roadmaps',
        icon: '📅'
      },
      {
        name: 'Content Creation',
        description: 'Blog posts, articles, and thought leadership',
        icon: '✍️'
      },
      {
        name: 'Video Content',
        description: 'Video content strategy and production',
        icon: '🎬'
      },
      {
        name: 'Content Distribution',
        description: 'Multi-channel content amplification',
        icon: '📡'
      }
    ],
    features: [
      'Content audit and gap analysis',
      'SEO-optimized content creation',
      'Multimedia content production',
      'Content performance tracking',
      'Editorial workflow management',
      'Content repurposing strategies'
    ],
    caseStudies: [
      {
        id: 'bellabeat',
        title: 'Wellness content ecosystem',
        company: 'Bellabeat',
        industry: 'Health Tech',
        image: '/images/bellabeat/cover.jpg'
      }
    ]
  },
  'growth-optimization': {
    id: 'growth-optimization',
    title: 'Growth Optimization',
    description: 'Conversion and retention strategies that maximize growth',
    icon: '🚀',
    color: 'green',
    services: [
      {
        name: 'Conversion Optimization',
        description: 'Maximize conversion rates across funnels',
        icon: '📈'
      },
      {
        name: 'Growth Hacking',
        description: 'Rapid experimentation for growth',
        icon: '⚡'
      },
      {
        name: 'Retention Marketing',
        description: 'Keep customers engaged and loyal',
        icon: '🎯'
      },
      {
        name: 'Analytics & Testing',
        description: 'Data-driven optimization',
        icon: '📊'
      }
    ],
    features: [
      'Funnel analysis and optimization',
      'A/B and multivariate testing',
      'User behavior analytics',
      'Retention and churn analysis',
      'Growth metrics dashboards',
      'Experimentation frameworks'
    ],
    caseStudies: [
      {
        id: 'unikoin-gold',
        title: '300% user growth in 6 months',
        company: 'Unikoin Gold',
        industry: 'Gaming',
        image: '/images/unikrn/cover.jpg'
      }
    ]
  }
};

// Combine all services
export const services: Record<string, Service> = {
  ...engineeringServices,
  ...designServices,
  ...researchServices,
  ...growthServices
};

// Export individual categories for filtering
export const serviceCategories = {
  engineering: engineeringServices,
  design: designServices,
  research: researchServices,
  growth: growthServices
};
