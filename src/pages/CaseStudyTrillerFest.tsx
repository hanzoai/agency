import { ArrowLeft, ChevronRight, Users, DollarSign, Youtube, Activity, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from '@/utils/ScrollReveal';
import TrillerFestGallery from '@/components/TrillerFestGallery';

const CaseStudyTrillerFest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-beige-50">
        {/* Hero Section with first image */}
        <div className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/lovable-uploads/6f11fa66-23b1-4967-aab8-1fa841066ef6.png"
              alt="TrillerFest Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
          </div>
          <div className="container-custom relative z-10">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="max-w-4xl reveal">
              <div className="inline-block px-4 py-1 bg-accent/20 rounded-full text-accent-light text-sm font-medium mb-6">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                TrillerFest: Largest Virtual Music Festival in History
              </h1>
              <p className="text-xl text-white/80 mb-8">
                How Hanzo helped Triller reach 169 million users and become the #1 app in India with less than $60,000 in ad spend
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Music & Social Media
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  AI-Driven Marketing
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Viral Growth
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-16 md:py-24">
          {/* Image Gallery */}
          <TrillerFestGallery />
          
          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-slide-up">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">169M</div>
                  <div className="text-primary/70 text-sm">Users Reached</div>
                </div>
              </div>
              <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                  <DollarSign size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">$60K</div>
                  <div className="text-primary/70 text-sm">Ad Spend</div>
                </div>
              </div>
              <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                  <Youtube size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">100K</div>
                  <div className="text-primary/70 text-sm">YouTube Subs in 5 Days</div>
                </div>
              </div>
              <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                  <Activity size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">82M</div>
                  <div className="text-primary/70 text-sm">Monthly Active Users</div>
                </div>
              </div>
              <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Main Content */}
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none mb-10 reveal">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1 mr-4">
                    <Target size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-0 mb-4">Introduction</h2>
                    <p className="text-primary/80">
                      At the peak of the COVID-19 pandemic, Triller, an AI-driven social music app, 
                      partnered with Hanzo in its first-ever paid marketing campaign. The objective 
                      was to rapidly expand Triller's global user base and increase platform engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1 mr-4">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-0 mb-4">Key Objectives</h2>
                    <ul className="space-y-3 pl-0">
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span><strong>Acquire new users:</strong> Target new app downloads during the event and convert participants into active users.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span><strong>Drive Contest Participation:</strong> Increase user participation in app contests and build user-generated content.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span><strong>Maximize Viewership:</strong> Generate record-breaking viewership for performances and contest entries.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span><strong>Enhance Long-Term Retention:</strong> Create conversion funnels that drive sustained user activity beyond the festival.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1 mr-4">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-0 mb-4">Hanzo's Strategic Approach</h2>
                    
                    <h3 className="text-xl font-bold mt-6 mb-3">AI-Driven Marketing Stack Development</h3>
                    <p className="text-primary/80">
                      Hanzo developed AI-powered marketing campaigns to maximize app installs, 
                      manage ad spend efficiently, and optimize audience targeting. These ads 
                      adapted in real-time, ensuring the highest return on ad spend (ROAS).
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-3">Targeted Digital Campaigns</h3>
                    <p className="text-primary/80">
                      Digital ads were tailored for platforms like Instagram, Facebook, and Google. 
                      Key demographics were targeted, including hip-hop and performance artists, 
                      TikTok power users, and music fans.
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-3">Creative Direction and Asset Production</h3>
                    <p className="text-primary/80">
                      Hanzo's creative team produced visually appealing assets such as social media banners 
                      and video announcements. These promoted exclusive access to TrillerFest and generated 
                      excitement around the event.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1 mr-4">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-0 mb-4">Key Results</h2>
                    <ul className="space-y-3 pl-0">
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span>Reached 169 million people with an ad spend of less than $60,000</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span>Identified India as the top growth market, leading to Triller becoming the number one app on Apple and Android in India</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span>Gained 100,000 YouTube subscribers in just five days</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-1 mr-3" />
                        <span>Monthly active users (MAU) grew from around 50 million to over 82 million</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6 reveal">
                  <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#introduction" className="flex items-center text-primary/80 hover:text-accent transition-colors">
                        <ChevronRight size={16} className="mr-2" />
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#key-objectives" className="flex items-center text-primary/80 hover:text-accent transition-colors">
                        <ChevronRight size={16} className="mr-2" />
                        Key Objectives
                      </a>
                    </li>
                    <li>
                      <a href="#strategic-approach" className="flex items-center text-primary/80 hover:text-accent transition-colors">
                        <ChevronRight size={16} className="mr-2" />
                        Strategic Approach
                      </a>
                    </li>
                    <li>
                      <a href="#key-results" className="flex items-center text-primary/80 hover:text-accent transition-colors">
                        <ChevronRight size={16} className="mr-2" />
                        Key Results
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 rounded-2xl p-6 reveal">
                  <h3 className="text-lg font-bold mb-4">Want similar results?</h3>
                  <p className="text-primary/80 mb-4">
                    Learn how Hanzo can help your business achieve unprecedented growth with AI-driven marketing strategies.
                  </p>
                  <a href="#book-call" className="btn-primary w-full">Book a Call Today</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="my-16 bg-beige-100 rounded-2xl p-10 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 text-[150px] leading-none font-bold text-beige-200 -mt-10 -mr-5">"</div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl italic text-primary mb-6">
                "TrillerFest transformed our user acquisition strategy. Hanzo's AI-driven approach helped us reach millions of users at a fraction of what we would have spent with traditional marketing."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full mr-4"></div>
                <div className="text-left">
                  <div className="font-bold">Mike Lu</div>
                  <div className="text-primary/70">CEO at Triller</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center reveal-slide-up" id="book-call">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to achieve similar results?</h3>
            <p className="text-primary/80 max-w-2xl mx-auto mb-8">
              Contact Hanzo today to leverage AI-driven marketing solutions and unlock massive user growth for your platform or event.
            </p>
            <a href="#book-call" className="btn-primary px-8 py-4">Book a Strategy Call</a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CaseStudyTrillerFest;

