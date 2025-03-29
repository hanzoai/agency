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

// Sample services data
export const services: Record<string, Service> = {
  'ad-creative': {
    id: 'ad-creative',
    title: 'Ad Creative',
    description: 'Eye-catching designs that perform and convert across all platforms',
    icon: '🎯',
    color: 'lime',
    services: [
      {
        name: 'Social Media Ads',
        description: 'Engaging ad creative for Facebook, Instagram, TikTok, and more',
        icon: '📱'
      },
      {
        name: 'Display Ads',
        description: 'Stunning banners and display ads that capture attention',
        icon: '🖥️'
      },
      {
        name: 'Video Ads',
        description: 'Motion-based ads that tell your story in seconds',
        icon: '🎬'
      },
      {
        name: 'Search Ads',
        description: 'Optimized ad copy and extensions for maximum CTR',
        icon: '🔍'
      }
    ],
    features: [
      'AI-powered creative optimization for better performance',
      'Multivariate testing to find winning creative combinations',
      'Responsive designs for all ad placements and devices',
      'Conversion-focused messaging and design',
      'Fast turnaround times with unlimited revisions',
      'Performance analytics and insights'
    ],
    caseStudies: [
      {
        id: 'trillerfest',
        title: 'Increasing conversions with optimized ad creative',
        company: 'Triller',
        industry: 'Entertainment',
        image: '/images/triller/cover.jpg'
      },
      {
        id: 'damon-motorcycles',
        title: 'Driving pre-orders through compelling ad design',
        company: 'Damon Motorcycles',
        industry: 'Automotive',
        image: '/images/damon/cover.jpg'
      },
      {
        id: 'casper',
        title: 'Scaling ad performance across multiple channels',
        company: 'Casper',
        industry: 'Consumer Goods',
        image: '/images/casper/cover.jpg'
      }
    ]
  },
  // Add more services as needed
};