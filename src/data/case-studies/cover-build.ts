import { CaseStudyData } from '@/types/caseStudy';

const coverBuild: CaseStudyData = {
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
  socialLinks: {
    links: [
      { platform: "Website", url: "https://www.cover.build" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/coverbuild" },
      { platform: "Instagram", url: "https://www.instagram.com/coverbuild" },
      { platform: "Facebook", url: "https://www.facebook.com/coverbuild" },
      { platform: "Twitter", url: "https://twitter.com/coverbuild" }
    ]
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
      id: "bellabeat",
      title: "BELLABEAT",
      subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
      imageUrl: "/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png",
      route: "/case-study/bellabeat"
    }
  ]
};

export default coverBuild;