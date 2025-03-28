import { CaseStudyData } from '@/types/caseStudy';

const trillerfest: CaseStudyData = {
  id: "trillerfest",
  title: "TRILLERFEST",
  subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
  client: "Triller",
  services: [
    "Digital Marketing",
    "Virtual Event Production",
    "Content Strategy",
    "Artist Partnerships"
  ],
  results: [
    "Over 5 million viewers across platforms",
    "Featured 100+ artists over 3 days",
    "Raised $2 million for COVID-19 relief",
    "Generated 3.2 million social media impressions",
    "Increased app downloads by 350%"
  ],
  videoUrl: "https://www.youtube.com/embed/QEQpdYYYlhc?autoplay=1&mute=1&loop=1&playlist=QEQpdYYYlhc&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3",
  videoId: "trillerfest-main",
  overview: [
    "During the height of the pandemic when physical events became impossible, we partnered with Triller to create the world's largest virtual music festival.",
    "The goal was to bring together top artists to perform virtual concerts while raising funds for COVID-19 relief efforts."
  ],
  challenge: [
    "With thousands of concerts canceled worldwide, artists and fans were looking for new ways to connect, but virtual events at this scale had never been attempted.",
    "We needed to create an engaging, high-quality experience that could replicate the excitement of a live festival while being accessible to millions of viewers on different devices and platforms."
  ],
  solution: [
    "We developed a comprehensive virtual event platform that could handle simultaneous livestreams from multiple artists and support millions of viewers.",
    "Our team coordinated with over 100 artists to produce high-quality performances and promoted the event through multi-channel digital marketing campaigns."
  ],
  testimonial: {
    quote: "Hanzo turned an impossible situation into our biggest success. TrillerFest became a landmark moment for virtual events and connected our platform with millions of new users while supporting an important cause.",
    author: "Mike Lu",
    role: "CEO at Triller"
  },
  images: [
    "/images/trillerfest/main-promo.jpg",
    "/images/trillerfest/migos-promo.jpg",
    "/images/trillerfest/pitbull-promo.jpg"
  ],
  socialLinks: {
    links: [
      { platform: "Website", url: "https://www.triller.co" },
      { platform: "Instagram", url: "https://www.instagram.com/triller" },
      { platform: "Twitter", url: "https://twitter.com/triller" },
      { platform: "TikTok", url: "https://www.tiktok.com/@triller" }
    ],
    totalFollowers: 7204000
  },
  relatedProjects: [
    {
      id: "bellabeat",
      title: "BELLABEAT",
      subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
      imageUrl: "/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png",
      route: "/case-study/bellabeat"
    },
    {
      id: "unikoin-gold",
      title: "UNIKOIN GOLD",
      subtitle: "BLOCKCHAIN-BASED ESPORTS BETTING PLATFORM",
      imageUrl: "/images/unikoin/unikoin-1.jpeg",
      route: "/case-study/unikoin-gold"
    }
  ]
};

export default trillerfest;