import { CaseStudyData } from '@/types/caseStudy';

const unikoinGold: CaseStudyData = {
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
    "/images/unikrn/unikoin-1.jpeg",
    "/images/unikrn/unikoin-2.jpeg",
    "/images/unikrn/unikoin-3.jpeg"
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
      imageUrl: "/images/bellabeat/bellabeat-showcase.jpg",
      route: "/case-study/bellabeat"
    },
    {
      id: "trillerfest",
      title: "TRILLERFEST",
      subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
      imageUrl: "/images/trillerfest/trillerfest-banner.png",
      route: "/case-study/trillerfest"
    }
  ],
  ctaTitle: "Ready to launch your blockchain project?"
};

export default unikoinGold;