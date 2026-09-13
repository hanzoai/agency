import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const fixFeatures = [
  "One focused problem, end to end",
  "Worked through live, together",
  "You leave with the fix",
];

const buildFeatures = [
  "30 minutes on your real app",
  "Expert help where it counts",
  "Ship a real improvement",
];

const launchFeatures = [
  "45 minutes to get it out the door",
  "Polish, connect & integrate",
  "Leave with it shipped",
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
            Book a quick call to fix, build, or launch — or engage the full agency.
          </p>
        </div>

        {/* Quick-call tiers */}
        <div className="grid md:grid-cols-3 gap-8 reveal-slide-up mb-10">
          {/* FIX */}
          <Card className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
            <CardHeader className="bg-black p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Fix</h3>
              <p className="opacity-90">One problem. Solved together.</p>
            </CardHeader>

            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">$35</span>
                <span className="ml-2 text-white/70">/ 15 min</span>
              </div>
              <p className="text-center text-white/60 text-sm mb-6">one-time</p>

              <ul className="space-y-4 mb-8">
                {fixFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/contact" className="lets-talk-btn w-full justify-center text-lg py-3">
                Book Fix
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>

          {/* BUILD */}
          <Card className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
            <CardHeader className="bg-black p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Build</h3>
              <p className="opacity-90">Improve your app with an expert.</p>
            </CardHeader>

            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">$65</span>
                <span className="ml-2 text-white/70">/ 30 min</span>
              </div>
              <p className="text-center text-white/60 text-sm mb-6">one-time</p>

              <ul className="space-y-4 mb-8">
                {buildFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/contact" className="lets-talk-btn w-full justify-center text-lg py-3">
                Book Build
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>

          {/* LAUNCH */}
          <Card className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
            <CardHeader className="bg-black p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 uppercase">Launch</h3>
              <p className="opacity-90">Polish it. Connect it. Ship it.</p>
            </CardHeader>

            <CardContent className="p-8 flex-grow">
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">$95</span>
                <span className="ml-2 text-white/70">/ 45 min</span>
              </div>
              <p className="text-center text-white/60 text-sm mb-6">one-time</p>

              <ul className="space-y-4 mb-8">
                {launchFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>)}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/contact" className="lets-talk-btn w-full justify-center text-lg py-3">
                Book Launch
                <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Agency / Enterprise */}
        <div className="grid md:grid-cols-2 gap-8 reveal-slide-up max-w-4xl mx-auto">
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
                <span className="text-4xl font-bold text-white">$4,995</span>
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
              <p className="text-center text-white/50 text-xs uppercase tracking-wide mb-1">Starting at</p>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white">$9,995</span>
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
