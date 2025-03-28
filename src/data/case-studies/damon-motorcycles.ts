import { CaseStudyData } from '@/types/caseStudy';

const damonMotorcycles: CaseStudyData = {
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
    "/images/damon/cover.jpg",
    "/images/damon/damon-2.jpg",
    "/images/damon/damon-3.jpg"
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
      imageUrl: "/images/trillerfest/trillerfest-banner.png",
      route: "/case-study/trillerfest"
    }
  ]
};

export default damonMotorcycles;