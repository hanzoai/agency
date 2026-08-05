import { ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';
import { useState, useRef, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Left card content
  const leftCardContent = {
    badge: "STARTING AT $10,000 PER MONTH",
    title: "Flexible plans for every business",
    description: "From basic asset production and motion graphics to video ads and brand strategy, a Superside subscription lets you choose how you want to use your budget every month based on your business needs.",
    subtext: "Typical subscriptions range from $10,000 to $100,000 USD/month."
  };

  // Right card features - separate first line and subtext
  const includedFeatures = [
    { text: "Access to all creative services.", isBold: true },
    { text: "(based on available dollars in monthly subscription)", isSubtext: true },
    { text: "Dedicated creative project manager and customer success" },
    { text: "Turnaround times starting at 12 hours" },
    { text: "Global timezone coverage" },
    { text: "AI-enhanced services" },
    { text: "Unlimited API calls to integrations" },
    { text: "Unlimited users and asset storage" },
    { text: "Support for multiple brands" },
    { text: "Access to Superspace platform" }
  ];

  // Service cards data with extended descriptions
  const serviceCards = [
    {
      category: "Creative Design",
      title: "Ad Creative",
      description: "AI-powered designs that drive measurable performance across all digital platforms and campaigns",
      price: "$500 USD",
      image: "/images/carousel/ad-creative.jpeg"
    },
    {
      category: "Creative Design",
      title: "Social Media Creative",
      description: "Algorithm-optimized assets for maximum engagement on Instagram, TikTok, LinkedIn, and more",
      price: "$500 USD",
      image: "/images/carousel/social-media-creative.jpeg"
    },
    {
      category: "Creative Design",
      title: "Presentation Design",
      description: "Strategic narratives that elevate your message with data visualization and compelling storytelling",
      price: "$1,000 USD",
      image: "/images/carousel/presentation-design.jpg"
    },
    {
      category: "Creative Design",
      title: "Illustration Design",
      description: "Visual storytelling engineered for brand recognition through custom icons, infographics, and artwork",
      price: "$750 USD",
      image: "/images/carousel/illustration-design.jpeg"
    },
    {
      category: "Creative Design",
      title: "Web Design",
      description: "User-centric experiences built for conversions with responsive layouts and intuitive navigation",
      price: "$2,500 USD",
      image: "/images/carousel/web-design.jpeg"
    },
    {
      category: "Creative Design",
      title: "Branding Services",
      description: "Data-driven identity systems for market differentiation including logos, guidelines, and assets",
      price: "$5,000 USD",
      image: "/images/carousel/branding-services.jpeg"
    },
    {
      category: "Specialized Production",
      title: "Video Production",
      description: "Streamlined production systems for cinematic quality at scale from concept to final delivery",
      price: "$3,000 USD",
      image: "/images/carousel/video-production.jpeg"
    },
    {
      category: "Specialized Production",
      title: "Motion Design",
      description: "Dynamic visual systems for digital environments including animations, transitions, and effects",
      price: "$1,500 USD",
      image: "/images/carousel/motion-design.jpg"
    },
    {
      category: "Specialized Production",
      title: "3D & AR Design",
      description: "Immersive experiences with practical implementation for products, spaces, and interactions",
      price: "$4,000 USD",
      image: "/images/carousel/3d-and-ar-design.jpeg"
    },
    {
      category: "AI Engineering",
      title: "RAG System Implementation",
      description: "Custom knowledge systems for specialized applications with enterprise-grade retrieval accuracy",
      price: "$10,000 USD",
      image: "/images/carousel/rag-system-implementation.png"
    },
    {
      category: "AI Engineering",
      title: "LLM Fine-Tuning",
      description: "Precision model adaptation for domain-specific requirements with continuous optimization",
      price: "$15,000 USD",
      image: "/images/carousel/llm-fine-tuning.jpeg"
    },
    {
      category: "AI Engineering",
      title: "AI Pipeline Development",
      description: "End-to-end architecture from ingestion to deployment with scalable infrastructure design",
      price: "$20,000 USD",
      image: "/images/carousel/ai-pipeline-development.jpeg"
    },
    {
      category: "AI Engineering",
      title: "AI-Enhanced Creative",
      description: "Human expertise multiplied by computational intelligence for unprecedented creative output",
      price: "$2,000 USD",
      image: "/images/carousel/ai-enhanced-creative.jpg"
    }
  ];

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll);
      return () => carousel.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 520; // Approximate card width including gap
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < serviceCards.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            A subscription built to<br />
            <em className="italic">fuel your growth</em>
          </h2>
        </div>

        {/* Two-card layout with responsive stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 xl:gap-8 mb-16">
          {/* Left Card - Black background */}
          <div className="bg-black services-card text-white rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-between services-card-container border border-gray-700">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-xs md:text-sm font-medium uppercase tracking-wide">{leftCardContent.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                {leftCardContent.title}
              </h2>
              <p className="text-base md:text-lg xl:text-xl mb-4 text-white/90 leading-relaxed">
                {leftCardContent.description}
              </p>
              <p className="text-sm md:text-base text-white/70">
                {leftCardContent.subtext}
              </p>
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-black w-full px-8 py-6 rounded-full text-base md:text-lg font-semibold transition-all border border-gray-700"
              >
                Book a call
              </Button>
            </div>
          </div>

          {/* Right Card - Light beige background */}
          <div className="services-right-card services-card rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-between border border-gray-700">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-black">
                Included in <em className="services-italic-text">all plans:</em>
              </h3>
              <div className="space-y-3 services-feature-list">
                {includedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start ${feature.isSubtext ? 'ml-7 -mt-3' : ''}`}
                  >
                    {!feature.isSubtext && (
                      <Check
                        size={20}
                        className="services-check-icon mr-3 flex-shrink-0 mt-0.5"
                      />
                    )}
                    <span className={`
                      ${feature.isBold ? 'font-semibold' : ''}
                      ${feature.isSubtext ? 'text-sm text-gray-600' : 'text-black'}
                      leading-relaxed
                    `}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a href="/onboarding" className="block">
                <Button
                  size="lg"
                  className="w-full bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-full text-base md:text-lg font-semibold transition-all border border-gray-700"
                >
                  Sign up
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Carousel Section - Full Width */}
      <div className="mt-32 md:mt-48 services-full-width-section">
        <div className="container-custom mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Our Services</h2>
              <p className="text-lg md:text-xl text-foreground/70">
                Comprehensive creative and technical solutions powered by AI
              </p>
            </div>
            <a href="/services" className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-full px-8 py-3 border-white/20 hover:bg-white/5 text-white text-sm font-medium"
              >
                VIEW ALL
              </Button>
            </a>
          </div>
        </div>

        {/* Carousel Container - Full Width */}
        <div className="relative services-carousel-wrapper">
          {/* Navigation Buttons */}
          <div className="container-custom">
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`absolute right-4 md:right-8 top-[50%] -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 border border-gray-700 text-white transition-all ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:scale-110'
              } hidden md:block`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel - with same left padding as container but extending to right edge */}
          <div className="carousel-scroll-container">
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-4 md:px-8"
              style={{
                scrollSnapType: 'x mandatory'
              }}
            >
              {serviceCards.map((service, index) => (
                <div
                  key={index}
                  className={`flex-none w-[380px] md:w-[480px] ${index === 0 ? 'ml-auto' : ''}`}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative h-full">
                    {/* Card Container with Hover Effect */}
                    <div className="relative group cursor-pointer">
                      {/* Top Image Card - Separate rounded rectangle */}
                      <div className="bg-black border border-gray-800 rounded-[24px] overflow-hidden h-[260px] mb-4 transition-all duration-300 group-hover:border-gray-700">
                        <div className="relative h-full bg-gray-900">
                          {service.image ? (
                            <img
                              src={service.image}
                              alt={service.title}
                              className={`w-full h-full object-cover ${service.title === "Social Media Creative" ? "object-[center_75%]" : ""}`}
                              onError={(e) => {
                                console.error(`Failed to load image for ${service.title}: ${service.image}`);
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                                const parent = img.parentElement;
                                if (parent && !parent.querySelector('.error-placeholder')) {
                                  const placeholder = document.createElement('div');
                                  placeholder.className = 'error-placeholder absolute inset-0 flex items-center justify-center';
                                  placeholder.innerHTML = '<span class="text-gray-500 text-sm font-medium">Image not found</span>';
                                  parent.appendChild(placeholder);
                                }
                              }}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-gray-500 text-sm font-medium">Image Placeholder</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom Content Card - Separate rounded rectangle */}
                      <div className="bg-black border border-gray-800 rounded-[24px] p-8 transition-all duration-300 group-hover:border-gray-700 group-hover:transform group-hover:-translate-y-2">
                        <h3 className="text-[18px] font-bold mb-4 text-white">
                          {service.title} -<br />
                          <span className="font-normal italic text-gray-400">{service.category}</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-[1.6] service-description">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="container-custom mt-8 md:hidden">
          <a href="/services" className="block">
            <Button
              variant="outline"
              className="w-full rounded-full px-8 py-3 border-white/20 hover:bg-white/5 text-white text-sm font-medium"
            >
              VIEW ALL
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
