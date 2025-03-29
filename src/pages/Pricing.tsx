import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PricingCard } from '@/components/ui/pricing-card';
import { PricingToggle } from '@/components/ui/pricing-toggle';
import GradientBackground from '@/components/GradientBackground';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingData = [
  {
    title: "Free",
    price: "$0",
    description: "Free for everyone",
    features: [
      { text: "Unlimited members" },
      { text: "2 teams" },
      { text: "250 issues" },
      { text: "Slack and GitHub", link: "#integrations" },
      { text: "API access" },
    ],
    ctaText: "Get started",
    ctaLink: "/subscribe",
  },
  {
    title: "Basic",
    price: "$8",
    description: "per user/month",
    features: [
      { text: "All Free features +" },
      { text: "5 teams" },
      { text: "Unlimited issues" },
      { text: "Unlimited file uploads" },
      { text: "Admin roles" },
    ],
    ctaText: "Get started",
    ctaLink: "/subscribe",
  },
  {
    title: "Business",
    price: "$14",
    description: "per user/month",
    features: [
      { text: "All Basic features +" },
      { text: "Linear Asks", link: "#asks" },
      { text: "Unlimited teams" },
      { text: "Private teams and guests" },
      { text: "Linear Insights", link: "#insights" },
      { text: "Triage responsibility" },
      { text: "Zendesk and Intercom integrations", link: "#integrations" },
    ],
    ctaText: "Get started",
    ctaLink: "/subscribe",
    secondaryAction: {
      text: "contact sales",
      link: "/contact",
    },
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom pricing",
    features: [
      { text: "All Business features +" },
      { text: "Advanced Linear Asks", link: "#asks" },
      { text: "Issue SLAs", link: "#slas" },
      { text: "SAML and SCIM", link: "#security" },
      { text: "Advanced security" },
      { text: "Migration and onboarding support" },
    ],
    ctaText: "Request trial",
    ctaLink: "/contact",
  },
];

export default function Pricing() {
  const [yearlyBilling, setYearlyBilling] = useState(true);
  
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Choose between our self-serve AI creative platform or full-service agency support.
              Start immediately with flexible terms and our quality guarantee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Self-Serve AI Hub */}
            <div className="flex flex-col h-full border-2 border-gray-800 hover:border-gray-700 rounded-xl overflow-hidden transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <h3 className="text-xl font-semibold mb-1">Self-Serve AI Hub</h3>
                <p className="text-sm text-foreground/70">AI-powered creative & marketing platform</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">$500</span>
                  <span className="text-foreground/60 text-sm">/month</span>
                </div>
                <p className="text-xs text-foreground/60 mt-2">Cancel anytime • No commitment</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">1 custom brand-trained AI agent</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">40 hours of AI-assisted design</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Web design & development</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Brand identity design</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Social media content creation</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Marketing collateral design</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Access to collaboration portal</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">48-hour turnaround for basic requests</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 pt-2 mt-auto">
                <Link to="/payment?plan=self-serve" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-white/40 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
                  Get started now
                </Link>
              </div>
            </div>
            
            {/* Agency Service */}
            <div className="flex flex-col h-full border-2 border-blue-800 hover:border-blue-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-blue-950/30 backdrop-blur-sm relative shadow-lg shadow-blue-900/10 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-bold">
                POPULAR
              </div>
              <div className="p-6 border-b border-border/20">
                <h3 className="text-xl font-semibold mb-1">Agency Service</h3>
                <p className="text-sm text-foreground/70">Full-service creative & marketing team</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">$5,000</span>
                  <span className="text-foreground/60 text-sm">/month</span>
                </div>
                <p className="text-xs text-foreground/60 mt-2">1 quarter minimum commitment</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Dedicated Creative Director</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Dedicated Project Manager</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">2 specialized creatives simultaneously</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">120 hours dedicated per month</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">2 custom brand-trained AI agents</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">24-hour turnaround for basic requests</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Access to 100+ creative services</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Full copyright ownership</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Unlimited revisions & requests</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">4 hours of consultation per month</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 pt-2 mt-auto">
                <Link to="/payment?plan=agency" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
                  Get started now
                </Link>
              </div>
            </div>
            
            {/* Enterprise Option */}
            <div className="flex flex-col h-full border-2 border-purple-800 hover:border-purple-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-purple-950/20 backdrop-blur-sm relative transition-all duration-300">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
                <p className="text-sm text-foreground/70">Custom solutions for large organizations</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <p className="text-xs text-foreground/60 mt-2">Tailored to your specific needs</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Everything in Agency plan</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Multiple dedicated teams</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Custom SLAs and support structure</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Dedicated executive sponsor</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Custom AI solutions & training</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">White-labeled solutions available</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Global team deployments</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 pt-2 mt-auto">
                <Link to="/contact?plan=enterprise" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-purple-500/50 hover:bg-purple-950/20 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:ring-offset-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom mt-24">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/30 border-2 border-gray-800 hover:border-gray-700 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3">How does your onboarding process work?</h3>
              <p className="text-foreground/80 text-sm">
                After signing up, you'll be assigned a dedicated team within 24 hours. Our onboarding specialist will walk you through our platform, gather your brand assets, and help you submit your first creative request to get you up and running quickly.
              </p>
            </div>
            
            <div className="bg-card/30 border-2 border-gray-800 hover:border-gray-700 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3">How quickly will I receive my designs?</h3>
              <p className="text-foreground/80 text-sm">
                Basic design requests are delivered within 24-48 hours depending on your plan. More complex projects like websites or videos follow a detailed timeline established at the beginning of your project.
              </p>
            </div>
            
            <div className="bg-card/30 border-2 border-gray-800 hover:border-gray-700 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3">What's the difference between the self-serve and agency plans?</h3>
              <p className="text-foreground/80 text-sm">
                The self-serve plan gives you access to our AI-powered platform with limited support. The agency plan provides a full creative team including a dedicated Creative Director, Project Manager, and specialized creatives who handle everything from strategy to execution.
              </p>
            </div>
            
            <div className="bg-card/30 border-2 border-gray-800 hover:border-gray-700 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3">Who owns the copyright to the work?</h3>
              <p className="text-foreground/80 text-sm">
                You own all copyrights to work created while you're an active client. All files and source materials are yours with no additional fees. However, if you cancel during the trial period, you cannot use any work produced during that time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
