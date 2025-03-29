import { CaseStudyData } from '@/types/caseStudy';

const casperBlockchain: CaseStudyData = {
  id: "casper-blockchain",
  title: "CASPER BLOCKCHAIN",
  subtitle: "FIRST EVER ENTERPRISE-READY BLOCKCHAIN",
  client: "Casper Labs",
  services: [
    "Blockchain Development",
    "Technical Architecture",
    "Strategic Consulting",
    "Validator Node Operation"
  ],
  results: [
    "Successful mainnet launch in 2021",
    "Co-founded the DEVxDAO Swiss blockchain association",
    "First development grant secured",
    "Led initial validator node deployment",
    "Strategic pivot to Rust programming language"
  ],
  videoUrl: "https://www.youtube.com/embed/7zQZmovxRNs?autoplay=1&loop=1&playlist=7zQZmovxRNs&mute=1&controls=1&showinfo=0",
  videoId: "casper-blockchain-video",
  overview: [
    "Hanzo AI began collaborating with Casper Labs in 2018, significantly shaping the direction and technology underpinning what would become the Casper Blockchain, an innovative proof-of-stake network designed specifically for enterprise adoption.",
    "Our team provided strategic guidance, deep technical proficiency, and architectural insight to develop a robust solution capable of effectively addressing complex commercial demands."
  ],
  challenge: [
    "The blockchain sector confronted significant hurdles to enterprise adoption, such as performance constraints, security vulnerabilities, and insufficient enterprise-grade functionality.",
    "Casper Labs required strategic guidance, deep technical proficiency, and architectural insight to develop a robust solution capable of effectively addressing complex commercial demands, positioning them among industry leaders even before the official launch."
  ],
  solution: [
    "Hanzo AI secured Casper Labs's first-ever development grant, establishing early financial support. We advocated for and executed a strategic pivot to the Rust programming language, ensuring enhanced security and scalability.",
    "Our team co-designed Casper's architecture from inception and led initial deployment, being among the first entities to launch and run validator nodes before the official mainnet launch."
  ],
  testimonial: {
    quote: "Hanzo's visionary approach and technical expertise were instrumental in shaping Casper into the enterprise-grade blockchain it is today. Their early involvement and strategic guidance helped us navigate critical decisions that established our competitive position in the market.",
    author: "Mrinal Manohar",
    role: "CEO at Casper Labs"
  },
  images: [
    "/images/casper/cover.jpg",
    "/images/casper/casper-1.jpg",
    "/images/casper/casper-2.png",
    "/images/casper/casper-3.png"
  ],
  socialLinks: {
    links: [
      { platform: "Website", url: "https://www.casperlabs.io" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/casperlabs" },
      { platform: "Twitter", url: "https://twitter.com/casper_network" },
      { platform: "Telegram", url: "https://t.me/casperlabs" },
      { platform: "Discord", url: "https://discord.gg/casper" },
      { platform: "Reddit", url: "https://www.reddit.com/r/CasperNetwork" }
    ],
    totalFollowers: 153000
  },
  relatedProjects: [
    {
      id: "unikoin-gold",
      title: "UNIKOIN GOLD",
      subtitle: "BLOCKCHAIN-BASED ESPORTS BETTING",
      imageUrl: "/images/unikoin/unikoin-1.jpeg",
      route: "/case-study/unikoin-gold"
    },
    {
      id: "trillerfest",
      title: "TRILLERFEST",
      subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
      imageUrl: "/images/trillerfest/trillerfest-banner.png",
      route: "/case-study/trillerfest"
    }
  ]
};

export default casperBlockchain;