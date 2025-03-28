import { CaseStudyData } from '@/types/caseStudy';
import { socialLinksData } from './socialLinksData';

// Additional case studies to add to caseStudiesData
export const additionalCaseStudies: Record<string, CaseStudyData> = {
  "cover-build": {
    id: "cover-build",
    title: "COVER BUILD",
    subtitle: "REVOLUTIONARY PREFAB HOUSING SOLUTION",
    client: "Cover Build",
    services: [
      "Web Design and Development",
      "3D Visualization",
      "User Experience Design",
      "Digital Marketing"
    ],
    results: [
      "300% increase in qualified leads",
      "40% reduction in sales cycle",
      "70% of customers used visualization tools before purchase",
      "Improved customer understanding of prefab benefits",
      "Enhanced product customization experience"
    ],
    videoUrl: "https://www.youtube.com/embed/zZwdjRw3w2w?autoplay=1&loop=1&playlist=zZwdjRw3w2w&mute=1&controls=1&showinfo=0",
    videoId: "cover-build-video",
    overview: [
      "Cover Build is reinventing housing with precision-engineered, fully customizable prefabricated homes. We partnered with them to create a digital presence that would showcase their innovative approach to modern living.",
      "Our team developed a comprehensive digital platform that highlighted the quality, customization options, and technological advantages of Cover Build's housing solutions."
    ],
    challenge: [
      "We needed to communicate the value of prefabricated housing to a market that often associates it with lower quality. The website needed to highlight the precision engineering while making the customization process intuitive for potential buyers.",
      "Overcoming preconceptions about prefabricated homes and demonstrating the superior quality and customization options available through Cover Build's approach presented a unique marketing challenge."
    ],
    solution: [
      "We developed an immersive website featuring 3D visualization tools that allowed users to explore and customize their potential homes. The site incorporated detailed animations explaining the engineering process and showcased completed projects through virtual tours.",
      "Our strategy included highlighting the technological innovation behind the manufacturing process and emphasizing the sustainability benefits of the precision-engineered approach."
    ],
    testimonial: {
      quote: "Hanzo transformed how potential customers experience our homes before they're built. The visualization tools and clear communication of our value proposition have dramatically improved our conversion rates and reduced our sales cycle.",
      author: "Alexis Rivas",
      role: "CEO at Cover Build"
    },
    images: [
      "/images/cover-build/cover-1.jpg",
      "/images/cover-build/cover-2.jpeg",
      "/images/cover-build/cover-3.jpeg"
    ],
    socialLinks: socialLinksData['cover-build'],
    relatedProjects: [
      {
        id: "damon-motorcycles",
        title: "DAMON MOTORCYCLES",
        subtitle: "HIGHLY CONVERTING 500X ROI CAMPAIGN",
        imageUrl: "/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png",
        route: "/case-study/damon-motorcycles"
      },
      {
        id: "bellabeat",
        title: "BELLABEAT",
        subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
        imageUrl: "/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png",
        route: "/case-study/bellabeat"
      }
    ]
  },
  
  "casper-blockchain": {
    id: "casper-blockchain",
    title: "CASPER BLOCKCHAIN",
    subtitle: "FOUNDATIONAL PARTNERSHIP CREATING THE FIRST ENTERPRISE-READY BLOCKCHAIN",
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
      "/images/casper/casper-1.jpg",
      "/images/casper/casper-2.png",
      "/images/casper/casper-3.png"
    ],
    socialLinks: socialLinksData['casper-blockchain'],
    relatedProjects: [
      {
        id: "unikoin-gold",
        title: "UNIKOIN GOLD",
        subtitle: "BLOCKCHAIN-BASED ESPORTS BETTING PLATFORM",
        imageUrl: "/lovable-uploads/unikoin-header.jpg",
        route: "/case-study/unikoin-gold"
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
  
  "myle-tap": {
    id: "myle-tap",
    title: "MYLE TAP",
    subtitle: "INNOVATIVE WEARABLE INTERACTION TECHNOLOGY",
    client: "Myle Tap",
    services: [
      "Mobile App Development",
      "UX/UI Design",
      "Product Launch Strategy",
      "Digital Marketing"
    ],
    results: [
      "200% of crowdfunding goal achieved",
      "Featured in major tech publications",
      "Successful product launch",
      "Praised app interface and user experience",
      "Seamless integration with physical device"
    ],
    videoUrl: "https://www.youtube.com/embed/A43eWc8vddg?autoplay=1&loop=1&playlist=A43eWc8vddg&mute=1&controls=1&showinfo=0",
    videoId: "myle-tap-video",
    overview: [
      "Myle Tap is the world's first truly hands-free, voice-activated, wearable shortcut to your apps. Our collaboration with Myle Tap helped launch this groundbreaking wearable technology that allows users to interact with their smart devices through simple, intuitive voice commands.",
      "We developed a comprehensive digital strategy and mobile application that complemented the physical device, creating a seamless user experience from physical interaction to digital response."
    ],
    challenge: [
      "The wearable technology market was already crowded with established players. Myle Tap needed to differentiate itself with a unique value proposition while ensuring the user experience was seamless across different platforms and devices.",
      "Creating an intuitive interface that could handle varied voice commands and integrate with multiple third-party applications presented significant technical and UX challenges."
    ],
    solution: [
      "We developed a comprehensive marketing and launch strategy, designing an intuitive mobile app interface that complemented the physical device. Our team created demonstration videos and interactive web experiences to showcase the product's capabilities and ease of use.",
      "The solution included a simplified user interface that made complex voice command programming accessible to non-technical users, while maintaining powerful functionality for advanced users."
    ],
    testimonial: {
      quote: "Hanzo understood exactly what was needed to make Myle Tap accessible and appealing to a broad audience. Their work on our mobile app and digital presence significantly contributed to our successful launch and the enthusiastic reception from both media and customers.",
      author: "Pavel Bondarev",
      role: "Founder at Myle Tap"
    },
    images: [
      "/images/myle-tap/myle-1.jpg",
      "/images/myle-tap/myle-2.jpg",
      "/images/myle-tap/myle-3.jpeg"
    ],
    relatedProjects: [
      {
        id: "bellabeat",
        title: "BELLABEAT",
        subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
        imageUrl: "/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png",
        route: "/case-study/bellabeat"
      },
      {
        id: "damon-motorcycles",
        title: "DAMON MOTORCYCLES",
        subtitle: "HIGHLY CONVERTING 500X ROI CAMPAIGN",
        imageUrl: "/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png",
        route: "/case-study/damon-motorcycles"
      }
    ]
  }
};