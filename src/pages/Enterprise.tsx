import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Check, Shield, Clock, Star, Users, Database, Lock, Globe } from 'lucide-react';
import { buttonModifiers } from '@/lib/button-utils';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import { Link } from 'react-router-dom';

const Enterprise = () => {
  useEffect(() => {
    // Set the body to dark theme
    document.body.classList.add('dark');
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <GlobalMuteButton />
        
        <main className="pt-24">
          <section className="py-24 lg:py-32">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Enterprise Solutions</h1>
                <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                  Powerful AI and Web3 workflows to accelerate your creative team's capabilities
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-background/5 rounded-xl p-8 border border-border/20">
                  <h2 className="text-3xl font-bold mb-6">Your creative team's creative team™</h2>
                  <p className="text-lg mb-8">
                    85% of enterprise creative teams are stretched to their limit. Hanzo expands capabilities and boosts your team's capacity—all through a custom subscription. No hiring required.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex">
                      <Check className="mr-3 h-6 w-6 text-accent" />
                      <span>Dedicated custom teams of top 1% AI & creative talent</span>
                    </li>
                    <li className="flex">
                      <Check className="mr-3 h-6 w-6 text-accent" />
                      <span>Every creative service in one flexible subscription</span>
                    </li>
                    <li className="flex">
                      <Check className="mr-3 h-6 w-6 text-accent" />
                      <span>Custom-built AI tools to supercharge your workflow</span>
                    </li>
                    <li className="flex">
                      <Check className="mr-3 h-6 w-6 text-accent" />
                      <span>Full Web3 & blockchain expertise for next-gen projects</span>
                    </li>
                  </ul>
                  <Link to="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className={buttonModifiers.interactive + " font-medium"}
                    >
                      Book a demo
                      <ArrowUpRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-background/5 rounded-xl p-8 border border-border/20 flex items-center justify-center">
                  <img src="/images/graphics/enterprise-diagram.svg" alt="Enterprise Solutions" className="max-w-full" />
                </div>
              </div>
              
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Trusted by 150+ enterprise brands</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {/* Enterprise logos would go here */}
                  <div className="flex items-center justify-center p-4">
                    <img src="/images/logo/enterprise-1.svg" alt="Enterprise Client" className="h-12 w-auto opacity-70" />
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <img src="/images/logo/enterprise-2.svg" alt="Enterprise Client" className="h-12 w-auto opacity-70" />
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <img src="/images/logo/enterprise-3.svg" alt="Enterprise Client" className="h-12 w-auto opacity-70" />
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <img src="/images/logo/enterprise-4.svg" alt="Enterprise Client" className="h-12 w-auto opacity-70" />
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <img src="/images/logo/enterprise-5.svg" alt="Enterprise Client" className="h-12 w-auto opacity-70" />
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <img src="/images/logo/enterprise-6.svg" alt="Enterprise Client" className="h-12 w-auto opacity-70" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-neutral-900">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Enterprise Plan Features</h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  Choose a flex or dedicated team subscription to get access to all of our creative services in one place.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-background/5 p-8 rounded-xl border border-border/20">
                  <h3 className="text-xl font-bold mb-4">Customized AI Solutions</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Custom AI-enhanced creative workflows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Proprietary RAG systems for knowledge management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Automated content generation pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Computer vision solutions for visual analysis</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background/5 p-8 rounded-xl border border-border/20">
                  <h3 className="text-xl font-bold mb-4">Web3 & Blockchain</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Smart contract development & auditing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>NFT collection design & implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Metaverse asset creation & integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Blockchain-powered loyalty programs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background/5 p-8 rounded-xl border border-border/20">
                  <h3 className="text-xl font-bold mb-4">Enterprise Support</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Dedicated creative project manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Global timezone coverage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Unlimited users and asset storage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Support for multiple brands & departments</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-background/5 p-8 md:p-12 rounded-xl border border-border/20 mb-16">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">FULL-FLEXIBILITY</h3>
                    <h4 className="text-xl font-bold mb-6">Customize your plan to fit your needs</h4>
                    <p className="text-lg mb-6">
                      We'll partner with you to build the right plan with the right team for your business. Whether you need maximum flexibility or a fully dedicated team, we can work however you work.
                    </p>
                    <p className="text-sm text-foreground/70 mb-8">
                      *Dedicated team subscriptions start at $50,000 USD/month.
                    </p>
                    <Link to="/contact">
                      <Button
                        variant="primary"
                        size="lg"
                        className={buttonModifiers.interactive + " font-medium"}
                      >
                        Book a call
                        <ArrowUpRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Access to all creative services (based on available dollars in monthly subscription)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Dedicated creative project manager and customer success manager</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Turnaround times starting at 12 hours</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Global timezone coverage</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>AI-enhanced services</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Unlimited API calls to integrations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Unlimited users and asset storage</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Support for multiple brands</span>
                      </li>
                    </ul>
                    <p className="text-sm text-foreground/70 mt-4">
                      Flex subscriptions range from $5,000 to $100,000 USD/month.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Ready to supercharge your enterprise creative capabilities?</h3>
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className={buttonModifiers.interactive + " font-medium"}
                  >
                    Book a demo
                    <ArrowUpRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="py-24">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Security and Compliance</h2>
                  <p className="text-lg mb-8">
                    We prioritize your privacy and security, earning the trust of over 150 leading brands worldwide.
                  </p>
                  <ul className="space-y-4 grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>SSO</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>GDPR compliance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Regular security audits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Confidentiality agreements</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>SOC-2 compliance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Role-based access control</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>AI usage controlled by you</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">Global Support and Availability</h2>
                  <p className="text-lg mb-8">
                    From Sydney's sunrise to New York's nightfall, your creative work needs meet immediate attention. Our unprecedented reach ensures that creative genius is always at your fingertips.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Multilingual support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Coverage for 13 different timezones</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-12 mb-4">Engagement models that fit your needs</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Centralized invoicing and spend control</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Dedicated support for multiple teams</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Unlimited users and asset storage</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-24">
                <Link to="/payment?plan=enterprise">
                  <Button
                    variant="primary"
                    size="lg"
                    className={buttonModifiers.interactive + " font-medium"}
                  >
                    Get Started Now
                    <ArrowUpRight size={16} className="ml-1" />
                  </Button>
                </Link>
                <p className="mt-4 text-foreground/70">
                  Or <Link to="/contact" className="text-accent hover:underline">contact us</Link> for a custom plan
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Enterprise;