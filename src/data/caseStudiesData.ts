import { CaseStudyData } from '@/types/caseStudy';
import { additionalCaseStudies } from './additionalCaseStudies';

// Case studies data
export const caseStudiesData: Record<string, CaseStudyData> = {
  "damon-motorcycles": {
    id: "damon-motorcycles",
    title: "DAMON MOTORCYCLES",
    subtitle: "HIGHLY CONVERTING 500X ROI CAMPAIGN",
    client: "Damon Motorcycles",
    services: [
      "Digital Marketing", 
      "Brand Strategy", 
      "Content Production", 
      "Web Design and Development"
    ],
    results: [
      "500x return on marketing investment",
      "230% increase in qualified leads",
      "65% conversion rate from lead to sale",
      "45% reduction in customer acquisition cost",
      "Featured in top industry publications"
    ],
    videoUrl: "https://www.youtube.com/embed/TVExxxHKqF8?autoplay=1&loop=1&playlist=TVExxxHKqF8&mute=1&controls=1&showinfo=0",
    videoId: "damon-thumbnail",
    overview: [
      "Damon Motorcycles came to us with a challenge: create a high-converting marketing campaign that would generate significant ROI for their innovative electric motorcycles.",
      "Through a comprehensive digital strategy focusing on targeted audience segments, we were able to create a campaign that resonated with motorcycle enthusiasts and eco-conscious consumers alike."
    ],
    challenge: [
      "The electric motorcycle market was growing, but Damon needed to stand out in a space dominated by traditional combustion engine bikes and establish credibility for their revolutionary technology.",
      "We needed to communicate complex technological advantages while creating an emotional connection with potential customers."
    ],
    solution: [
      "We developed a multi-channel digital campaign that highlighted Damon's revolutionary safety features and performance capabilities, using a mix of video content, interactive demonstrations, and targeted advertising.",
      "Our strategy incorporated influencer partnerships with respected motorcycle enthusiasts and sustainability advocates to build trust with multiple audience segments."
    ],
    testimonial: {
      quote: "The campaign Hanzo created for us exceeded all expectations. Not only did they help us reach new customers, but they truly understood our technology and brand values. The ROI speaks for itself.",
      author: "Jay Giraud",
      role: "CEO at Damon Motorcycles"
    },
    images: [
      "/lovable-uploads/3e0ed6d6-8d6d-4b77-a6c1-aa1c7df4f868.png"
    ],
    socialLinks: {
      links: [
        { platform: "Website", url: "https://www.damon.com" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/company/damonmotorcycles" },
        { platform: "Instagram", url: "https://www.instagram.com/damonmotorcycles" },
        { platform: "Facebook", url: "https://www.facebook.com/damonmotorcycles" },
        { platform: "Twitter", url: "https://twitter.com/damonmotorcycles" },
        { platform: "YouTube", url: "https://www.youtube.com/c/DamonMotorcycles" }
      ],
      totalFollowers: 85000
    },
    relatedProjects: [
      {
        id: "trillerfest",
        title: "TRILLERFEST",
        subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
        imageUrl: "/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png",
        route: "/case-study/trillerfest"
      }
    ]
  },
  
  "bellabeat": {
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
  },
  
  "trillerfest": {
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
      "/images/trillerfest/artist-performance.jpg",
      "/images/trillerfest/virtual-stage.jpg"
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
        imageUrl: "/lovable-uploads/unikoin-header.jpg",
        route: "/case-study/unikoin-gold"
      }
    ]
  },
  
  "unikoin-gold": {
    id: "unikoin-gold",
    title: "UNIKOIN GOLD",
    subtitle: "BLOCKCHAIN-BASED ESPORTS BETTING PLATFORM",
    client: "Unikrn",
    services: [
      "Blockchain Integration",
      "ICO Launch",
      "Regulatory Compliance",
      "Marketing Strategy"
    ],
    results: [
      "$34.9 million raised in ICO",
      "300% increase in platform engagement",
      "15+ jurisdictions supported",
      "Successful integration with Ethereum blockchain",
      "Enhanced regulatory compliance framework"
    ],
    videoUrl: "https://www.youtube.com/embed/8TbWsxiyKUE?autoplay=1&mute=1&loop=1&playlist=8TbWsxiyKUE&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3",
    videoId: "unikoingold-hero",
    overview: [
      "Unikrn, established in 2014, is a leading esports entertainment and betting platform. To enhance its offerings, Unikrn introduced UnikoinGold (UKG), an ERC20 token on the Ethereum blockchain.",
      "The token aimed to create a decentralized, community-driven virtual economy for esports enthusiasts. Hanzo partnered with Unikrn to address regulatory challenges, implement blockchain solutions, and enhance user engagement."
    ],
    challenge: [
      "The integration of blockchain technology into Unikrn's platform presented several challenges including regulatory compliance across various jurisdictions and technological integration of blockchain systems.",
      "Developing features that would drive adoption of UnikoinGold among the esports community was also crucial for the success of the project."
    ],
    solution: [
      "Hanzo collaborated with Unikrn to develop a sophisticated compliance framework, distinguishing between Full Service Jurisdictions and Limited Jurisdictions to navigate the complex regulatory landscape.",
      "Our team assisted in designing and implementing Ethereum smart contracts, ensuring that transactions were publicly accessible, open, and transparent. We created secure API endpoints to connect Unikrn's existing platform with the Ethereum blockchain."
    ],
    testimonial: {
      quote: "Hanzo's expertise in blockchain technology and regulatory compliance was instrumental in bringing UnikoinGold to market. Their strategic insights helped us navigate complex challenges while their technical implementation enabled us to create a truly decentralized ecosystem for our users.",
      author: "Rahul Sood",
      role: "CEO at Unikrn"
    },
    images: [
      "/images/unikoin/unikoin-platform.jpg",
      "/images/unikoin/unikoin-blockchain.jpg"
    ],
    socialLinks: {
      links: [
        { platform: "Website", url: "https://www.unikoingold.com" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/company/unikoingold" },
        { platform: "Twitter", url: "https://twitter.com/unikoingold" },
        { platform: "Facebook", url: "https://www.facebook.com/unikoingold" }
      ]
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
        id: "trillerfest",
        title: "TRILLERFEST",
        subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
        imageUrl: "/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png",
        route: "/case-study/trillerfest"
      }
    ],
    ctaTitle: "Ready to launch your blockchain project?"
  },

  // Add additional case studies from additionalCaseStudies.ts
  ...additionalCaseStudies
};
