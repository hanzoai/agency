
import { Target, TrendingUp, Activity, CheckCircle } from 'lucide-react';

const CaseStudyContent = () => {
  return (
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
  );
};

export default CaseStudyContent;
