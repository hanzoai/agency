import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PricingCard } from '@/components/ui/pricing-card';
import { PricingToggle } from '@/components/ui/pricing-toggle';
import GradientBackground from '@/components/GradientBackground';

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
    description: "Billed yearly",
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
    description: "Billed yearly",
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
    description: "Annual billing only",
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

const monthlyPrices = {
  "Basic": "$10",
  "Business": "$18"
};

export default function Pricing() {
  const [yearlyBilling, setYearlyBilling] = useState(true);
  
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <GradientBackground 
          variant="primary" 
          intensity="medium" 
          className="fixed inset-0 z-[-1]"
        />
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Use Hanzo for free with your whole team. Upgrade to enable
              unlimited projects, enhanced security controls, and additional features.
            </p>
            
            <div className="mt-10">
              <PricingToggle
                enabled={yearlyBilling}
                onChange={setYearlyBilling}
                labelLeft="Monthly"
                labelRight="Billed yearly"
              />
              {yearlyBilling && (
                <p className="text-sm text-foreground/60 mt-2">Save 20% with annual billing</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingData.map((plan) => (
              <PricingCard
                key={plan.title}
                {...plan}
                price={
                  !yearlyBilling && monthlyPrices[plan.title as keyof typeof monthlyPrices]
                    ? monthlyPrices[plan.title as keyof typeof monthlyPrices]
                    : plan.price
                }
                description={
                  plan.title === "Basic" || plan.title === "Business" 
                    ? (yearlyBilling ? "Billed yearly" : "Billed monthly")
                    : plan.description
                }
              />
            ))}
          </div>
          
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/30 border border-border/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Can I change plans later?</h3>
                <p className="text-foreground/80 text-sm">
                  Yes, you can upgrade, downgrade, or cancel your plan at any time. When changing plans, you'll be prorated for the remainder of your billing period.
                </p>
              </div>
              
              <div className="bg-card/30 border border-border/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-foreground/80 text-sm">
                  We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also offer invoicing.
                </p>
              </div>
              
              <div className="bg-card/30 border border-border/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Do you offer discounts?</h3>
                <p className="text-foreground/80 text-sm">
                  We offer discounts for nonprofit organizations and educational institutions. Contact our sales team for more information.
                </p>
              </div>
              
              <div className="bg-card/30 border border-border/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">What happens when my trial ends?</h3>
                <p className="text-foreground/80 text-sm">
                  When your trial ends, your account will automatically switch to the Free plan. You can upgrade to a paid plan at any time to regain access to premium features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
