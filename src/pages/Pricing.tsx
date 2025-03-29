import React, { useState } from 'react';
import NewHeader from '../../components/NewHeader';
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
      <NewHeader />
      <main className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our agency service plan works with all leading frontier models and open source software.
              Start immediately with flexible terms and our quality guarantee.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            {/* Agency Service */}
            <div className="flex flex-col h-full border-2 border-blue-800 hover:border-blue-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-blue-950/30 backdrop-blur-sm relative shadow-lg shadow-blue-900/10 transition-all duration-300">

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

          </div>
        </div>
        
        <div className="container-custom mt-24">
          <h2 className="text-2xl font-bold mb-6 text-center">More Questions?</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-foreground/80 mb-6">
              Visit our FAQ page for detailed answers to common questions about our services, process, and policies.
            </p>
            <Link to="/faq" className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-primary/10 hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
              View FAQ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
