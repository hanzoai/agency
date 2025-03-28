import { CaseStudyData } from '@/types/caseStudy';

const myleTap: CaseStudyData = {
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
    "/images/myle/myle-1.jpg",
    "/images/myle/myle-2.jpg",
    "/images/myle/myle-3.jpeg"
  ],
  relatedProjects: [
    {
      id: "bellabeat",
      title: "BELLABEAT",
      subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
      imageUrl: "/images/damon/damon-campaign.webp",
      route: "/case-study/bellabeat"
    },
    {
      id: "damon-motorcycles",
      title: "DAMON MOTORCYCLES",
      subtitle: "HIGHLY CONVERTING 500X ROI CAMPAIGN",
      imageUrl: "/images/damon/damon-campaign.webp",
      route: "/case-study/damon-motorcycles"
    }
  ]
};

export default myleTap;