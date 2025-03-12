
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyTrillerFest = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <div className="container-custom py-16 md:py-24">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-primary/70 hover:text-primary mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        {/* Header */}
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            TrillerFest: Largest Virtual Music Festival in History
          </h1>
          <p className="text-xl text-primary/70 mb-12">
            How Hanzo helped Triller reach 169 million users and become the #1 app in India
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { metric: '169M', label: 'Users Reached' },
            { metric: '$60K', label: 'Ad Spend' },
            { metric: '100K', label: 'YouTube Subs in 5 Days' },
            { metric: '82M', label: 'Monthly Active Users' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl">
              <div className="text-3xl font-bold text-accent mb-2">{item.metric}</div>
              <div className="text-primary/70">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Introduction</h2>
          <p>
            At the peak of the COVID-19 pandemic, Triller, an AI-driven social music app, 
            partnered with Hanzo in its first-ever paid marketing campaign. The objective 
            was to rapidly expand Triller's global user base and increase platform engagement.
          </p>

          <h2>Key Objectives</h2>
          <ul>
            <li>Acquire new users: Target new app downloads during the event and convert participants into active users.</li>
            <li>Drive Contest Participation: Increase user participation in app contests and build user-generated content.</li>
            <li>Maximize Viewership: Generate record-breaking viewership for performances and contest entries.</li>
            <li>Enhance Long-Term Retention: Create conversion funnels that drive sustained user activity beyond the festival.</li>
          </ul>

          <h2>Hanzo's Strategic Approach</h2>
          <h3>AI-Driven Marketing Stack Development</h3>
          <p>
            Hanzo developed AI-powered marketing campaigns to maximize app installs, 
            manage ad spend efficiently, and optimize audience targeting. These ads 
            adapted in real-time, ensuring the highest return on ad spend (ROAS).
          </p>

          <h3>Targeted Digital Campaigns</h3>
          <p>
            Digital ads were tailored for platforms like Instagram, Facebook, and Google. 
            Key demographics were targeted, including hip-hop and performance artists, 
            TikTok power users, and music fans.
          </p>

          <h2>Key Results</h2>
          <ul>
            <li>Reached 169 million people with an ad spend of less than $60,000</li>
            <li>Identified India as the top growth market, leading to Triller becoming the number one app on Apple and Android in India</li>
            <li>Gained 100,000 YouTube subscribers in just five days</li>
            <li>Monthly active users (MAU) grew from around 50 million to over 82 million</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to achieve similar results?</h3>
          <a href="#book-call" className="btn-primary">Book a Call Today</a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTrillerFest;
