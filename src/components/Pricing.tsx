import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const instantSiteFeatures = [
  "Custom-built 3-page website",
  "Up to 10 premium images included",
  "24-hour guaranteed turnaround",
  "1 design revision included",
  "Mobile-responsive & SEO-ready",
  "Lifetime ownership — no recurring fees",
];

const agencyFeatures = [
  "Dedicated Creative Director & PM",
  "2 specialized creatives simultaneously",
  "120 hours dedicated per month",
  "2 custom brand-trained AI agents",
  "24-hour turnaround for basic requests",
  "Access to 100+ creative services",
  "Full copyright ownership",
  "Unlimited revisions & requests",
];

const enterpriseFeatures = [
  "Everything in Agency, plus:",
  "Dedicated full-stack team (4+ creatives)",
  "Unlimited custom AI agents",
  "240+ hours dedicated per month",
  "Same-day priority turnaround",
  "Video production (up to 4/month)",
  "3D, AR, and immersive design",
  "AI consulting & marketing strategy",
];

const Pricing = () => {
  return <section id="pricing" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 reveal">
            Pricing
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto reveal mb-2">
            From a quick launch to a full creative team. Start immediately with flexible terms and our quality guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 reveal-slide-up">
          {/* Instant Site */}
          <Card className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
            <CardHeader className="bg-black p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Instant Site</h3>
              <p className="opacity-90">3-page website in 24 hours</p>
            </CardHeader>

            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">$500</span>
              </div>
              <p className="text-center text-white/60 text-sm mb-6">one-time</p>

              <ul className="space-y-4 mb-8">
                {instantSiteFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/payment?plan=instant-site" className="lets-talk-btn w-full justify-center text-lg py-3">
                Get your site
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>

          {/* Agency Service */}
          <Card className="border-2 border-accent overflow-hidden flex flex-col h-full shadow-lg relative bg-[#282828]">
            <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-bold">
              POPULAR
            </div>
            <CardHeader className="bg-accent p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Agency Service</h3>
              <p className="opacity-90">Full-service creative team</p>
            </CardHeader>

            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">$5,000</span>
                <span className="ml-2 text-white/70">/month</span>
              </div>
              <p className="text-center text-white/60 text-sm mb-6">1 quarter minimum</p>

              <ul className="space-y-4 mb-8">
                {agencyFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/payment?plan=agency" className="lets-talk-btn w-full justify-center text-lg py-3 bg-accent hover:bg-accent/90">
                Get started
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>

          {/* Enterprise */}
          <Card className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
            <CardHeader className="bg-black p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Enterprise</h3>
              <p className="opacity-90">Dedicated team, priority everything</p>
            </CardHeader>

            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">$9,999</span>
                <span className="ml-2 text-white/70">/month</span>
              </div>
              <p className="text-center text-white/60 text-sm mb-6">annual contract preferred</p>

              <ul className="space-y-4 mb-8">
                {enterpriseFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/payment?plan=enterprise" className="lets-talk-btn w-full justify-center text-lg py-3">
                Get started
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-primary/70 mb-4">
            Need more? Contact us for larger engagements.
          </p>
          <Link to="/contact" className="lets-talk-btn">
            Contact us
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>;
};
export default Pricing;