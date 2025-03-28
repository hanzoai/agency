// Case Study data types
export interface RelatedProject {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  route: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  services: string[];
  results: string[];
  videoUrl?: string;
  videoId?: string;
  mainImageUrl?: string;
  overview: string[];
  challenge: string[];
  solution: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images?: string[];
  socialLinks?: {
    links: SocialLink[];
    totalFollowers?: number;
  };
  relatedProjects: RelatedProject[];
  ctaTitle?: string;
}