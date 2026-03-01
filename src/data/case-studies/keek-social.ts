import { CaseStudyData } from '@/types/caseStudy';

const keekSocial: CaseStudyData = {
  id: "keek-social",
  title: "KEEK",
  subtitle: "AI-POWERED SOCIAL MEDIA TRANSFORMATION",
  client: "Personas Social (Keek)",
  services: [
    "AI Infrastructure",
    "Recommendation Engine",
    "Content Moderation",
    "Platform Architecture"
  ],
  results: [
    "400% increase in content engagement",
    "85% reduction in harmful content reach",
    "3x improvement in feed relevance scores",
    "12M daily content items processed through AI pipeline",
    "60% reduction in moderation costs"
  ],
  overview: [
    "Personas Social partnered with Hanzo to integrate AI-powered features into the Keek social media platform. The challenge was transforming a traditional social media experience into an intelligent, personalized platform without disrupting the existing user base.",
    "Hanzo provided the complete AI infrastructure layer: multimodal content understanding, personalized recommendation engine, real-time safety moderation, and AI-assisted creator tools — all powered by Zen models and the Hanzo LLM Gateway."
  ],
  challenge: [
    "Keek needed to compete with algorithmically-driven platforms like TikTok and Instagram while maintaining its unique identity. The existing chronological feed was losing engagement to competitors with AI-powered discovery.",
    "Content moderation at scale required an automated approach — manual review could not keep pace with millions of daily uploads across video, image, and text formats."
  ],
  solution: [
    "We deployed a multimodal content understanding pipeline that analyzes video, image, and text content in real time. The recommendation engine — a descendant of EARLE, our commerce recommendation system built in 2014 — was adapted for social content discovery with collaborative filtering and behavioral signals.",
    "The AI moderation system combines Zen vision models with human-in-the-loop review, catching policy violations before they reach the feed while minimizing false positives. Creator tools powered by Zen models help users generate captions, suggest hashtags, and optimize posting times."
  ],
  testimonial: {
    quote: "Hanzo didn't just give us AI features — they gave us AI infrastructure. The recommendation engine transformed how our users discover content, and the moderation system gave us confidence to scale without sacrificing safety.",
    author: "Darius Mirshahzadeh",
    role: "CEO at Personas Social"
  },
  images: [
    "/images/graphics/ai-nodes.svg",
    "/images/graphics/data-wave.svg",
    "/images/graphics/code-blocks.svg"
  ],
  relatedProjects: [
    {
      id: "trillerfest",
      title: "TRILLERFEST",
      subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
      imageUrl: "/images/trillerfest/trillerfest-banner.png",
      route: "/case-study/trillerfest"
    },
    {
      id: "unikoin-gold",
      title: "UNIKOIN GOLD",
      subtitle: "120,000 ETH TOKEN LAUNCH",
      imageUrl: "/images/unikrn/unikrn-1.jpg",
      route: "/case-study/unikoin-gold"
    }
  ]
};

export default keekSocial;
