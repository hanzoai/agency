import { CaseStudyData } from '@/types/caseStudy';

const bellabeat: CaseStudyData = {
  id: "bellabeat",
  title: "BELLABEAT",
  subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
  client: "Bellabeat",
  services: [
    "CMO & CTO Services", 
    "Marketing Automation", 
    "Web Design and Development", 
    "Data Analytics"
  ],
  results: [
    "67% increase in user engagement",
    "45% improvement in user retention",
    "$35 million revenue estimation by 2024",
    "Successful data migration to scalable infrastructure",
    "Improved user analytics and personalization"
  ],
  videoUrl: "https://www.youtube.com/embed/rsda3VIuRxM?autoplay=1&mute=1&loop=1&playlist=rsda3VIuRxM&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3",
  videoId: "bellabeat-hero",
  overview: [
    "Bellabeat, established in 2014 by Urška Sršen and Sandro Mur, is a pioneering fem-tech company dedicated to women's health and wellness.",
    "Hanzo was engaged to serve as an outsourced Chief Marketing Officer (CMO) and Chief Technology Officer (CTO), helping Bellabeat enhance their market position and technical infrastructure."
  ],
  challenge: [
    "In its early years, Bellabeat faced significant challenges in scaling its operations and reaching a broader audience. The competitive landscape of health tech demanded innovative marketing strategies.",
    "Data management and personalization at scale were key obstacles to overcome in order to support future growth and maintain quality user experience."
  ],
  solution: [
    "Hanzo implemented advanced AI algorithms to analyze consumer behavior and preferences, enabling Bellabeat to tailor its marketing campaigns effectively.",
    "Our team created personalized data visualization tools that improved user engagement with health metrics, and developed segmented marketing strategies that addressed different user profiles."
  ],
  testimonial: {
    quote: "Hanzo transformed our approach to both marketing and technology. Their data-driven strategies helped us connect with our users on a deeper level while building the robust infrastructure we needed to scale. The results speak for themselves.",
    author: "Urška Sršen",
    role: "Co-founder & CPO at Bellabeat"
  },
  images: [
    "/images/bellabeat/bellabeat-product.jpg",
    "/images/bellabeat/bellabeat-app.jpg"
  ],
  socialLinks: {
    links: [
      { platform: "Website", url: "https://www.bellabeat.com" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/bellabeat" },
      { platform: "Instagram", url: "https://www.instagram.com/bellabeat" },
      { platform: "Facebook", url: "https://www.facebook.com/bellabeat" },
      { platform: "Twitter", url: "https://twitter.com/bellabeat" },
      { platform: "YouTube", url: "https://www.youtube.com/channel/UCX8u0w3VwZQk0jG5vH1V9zQ" }
    ],
    totalFollowers: 114000
  },
  relatedProjects: [
    {
      id: "damon-motorcycles",
      title: "DAMON MOTORCYCLES",
      subtitle: "HIGHLY CONVERTING 500X ROI CAMPAIGN",
      imageUrl: "/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png",
      route: "/case-study/damon-motorcycles"
    },
    {
      id: "trillerfest",
      title: "TRILLERFEST",
      subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
      imageUrl: "/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png",
      route: "/case-study/trillerfest"
    }
  ]
};

export default bellabeat;