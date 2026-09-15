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

const marketingFeatures = [
  "Social posts written in your voice & scheduled",
  "Inbound enquiry & lead capture into your CRM",
  "Weekly queue management & monthly report",
  "Manage tasks & review queues on hanzo.team",
  "Automated backend on Hanzo AI Cloud",
];

const chatFeatures = [
  "Trained on your services, docs, and prices",
  "Books into your calendar (Cal / Google / Outlook)",
  "Hands off to WhatsApp or email when needed",
  "Real-time conversation logs on hanzo.team",
  "Fast embed on Hanzo AI Cloud",
];

const phoneFeatures = [
  "24/7 call answering with call notes sent to you",
  "Missed-call instant SMS text-back included",
  "Emergency calls flagged to your mobile",
  "Call audio, logs & controls on hanzo.team",
  "Sub-second latency on Hanzo AI Cloud",
];

const Pricing = () => {
  return <section id="pricing" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 reveal">
            Pricing
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto reveal mb-2">
            Book a quick call, deploy autonomous AI employees, or engage the full agency.
          </p>
        </div>

        {/* 01 · Quick Sessions */}
        <div className="text-center mb-8 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-800 font-bold mb-2">
            01 · Quick Sessions — Fix, Build, Launch
          </span>
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-primary">
            1-on-1 Expert Problem Solving
          </h3>
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

        {/* 02 · Dedicated Teams */}
        <div className="text-center mt-16 mb-8 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-blue-500/10 text-blue-800 font-bold mb-2">
            02 · Dedicated Teams — Agency & Enterprise
          </span>
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-primary">
            Full-Service Creative & Engineering
          </h3>
        </div>

        {/* Agency / Enterprise */}
        <div className="grid md:grid-cols-2 gap-8 reveal-slide-up max-w-4xl mx-auto mb-16">
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

        {/* 03 · AI AUTOMATION — AI EMPLOYEES */}
        <div className="text-center mt-16 mb-8 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-amber-500/10 text-amber-400 font-bold mb-2">
            03 · AI Automation — AI Employees &amp; Companies
          </span>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            Autonomous AI Employees from $49/mo
          </h3>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto mt-2">
            Automated with Hanzo AI Cloud backend. Scalable compute from $49/mo to $999/mo. 
            Access and manage tasks, post queues, and live analytics on{' '}
            <a href="https://hanzo.team" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white">
              hanzo.team
            </a>
            . 30-day rolling, zero lock-in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 reveal-slide-up max-w-6xl mx-auto mb-12">
          {/* AI Marketing Assistant (Creative) */}
          <Card className="border border-white/10 overflow-hidden flex flex-col h-full bg-[#1c1c1e] text-white">
            <CardHeader className="bg-black/60 p-6 text-white text-center border-b border-white/10 relative">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-900 border border-white/15 mx-auto mb-3 shadow-lg">
                <img src="/agents/creative.png" alt="Creative" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">Creative · Growth</span>
              <h3 className="text-xl font-bold mb-1 uppercase mt-1">AI Marketing Lead</h3>
              <p className="opacity-70 text-xs font-mono">Writes &amp; schedules social, syncs CRM leads</p>
            </CardHeader>

            <CardContent className="p-6 flex-grow">
              <p className="text-center text-white/50 text-xs uppercase tracking-wide mb-1">Starting at</p>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white font-mono">$49</span>
                <span className="ml-2 text-white/70">/month</span>
              </div>
              <p className="text-center text-emerald-400 text-xs font-mono mb-6">30-day rolling · 1M tokens</p>

              <ul className="space-y-3 mb-6">
                {marketingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check size={18} className="text-amber-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/payment?plan=ai-marketing-assistant" className="lets-talk-btn w-full justify-center text-base py-3">
                Hire Creative ($49/mo)
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>

          {/* AI Chat Agent (Nora) */}
          <Card className="border border-white/10 overflow-hidden flex flex-col h-full bg-[#1c1c1e] text-white">
            <CardHeader className="bg-black/60 p-6 text-white text-center border-b border-white/10 relative">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-900 border border-white/15 mx-auto mb-3 shadow-lg">
                <img src="/agents/nora.png" alt="Nora" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-teal-400 font-bold">Nora · Concierge</span>
              <h3 className="text-xl font-bold mb-1 uppercase mt-1">24/7 AI Concierge</h3>
              <p className="opacity-70 text-xs font-mono">Answers inquiries, books calendar meetings</p>
            </CardHeader>

            <CardContent className="p-6 flex-grow">
              <p className="text-center text-white/50 text-xs uppercase tracking-wide mb-1">Starting at</p>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white font-mono">$99</span>
                <span className="ml-2 text-white/70">/month</span>
              </div>
              <p className="text-center text-emerald-400 text-xs font-mono mb-6">30-day rolling · 3M tokens</p>

              <ul className="space-y-3 mb-6">
                {chatFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check size={18} className="text-teal-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/payment?plan=ai-chat-agent" className="lets-talk-btn w-full justify-center text-base py-3">
                Hire Nora ($99/mo)
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>

          {/* AI Phone Receptionist (Maya) */}
          <Card className="border-2 border-rose-500/40 overflow-hidden flex flex-col h-full shadow-lg relative bg-[#1c1c1e] text-white">
            <div className="absolute top-0 right-0 bg-rose-600 text-white px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono">
              Never Miss a Call
            </div>
            <CardHeader className="bg-black/60 p-6 text-white text-center border-b border-white/10 relative">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-900 border border-white/15 mx-auto mb-3 shadow-lg">
                <img src="/agents/maya.png" alt="Maya" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-rose-400 font-bold">Maya · Voice AI</span>
              <h3 className="text-xl font-bold mb-1 uppercase mt-1">Phone Receptionist</h3>
              <p className="opacity-70 text-xs font-mono">Answers calls in human voice &amp; texts back</p>
            </CardHeader>

            <CardContent className="p-6 flex-grow">
              <p className="text-center text-white/50 text-xs uppercase tracking-wide mb-1">Starting at</p>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-4xl font-bold text-white font-mono">$199</span>
                <span className="ml-2 text-white/70">/month</span>
              </div>
              <p className="text-center text-emerald-400 text-xs font-mono mb-6">30-day rolling · 300 voice mins</p>

              <ul className="space-y-3 mb-6">
                {phoneFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check size={18} className="text-rose-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Link to="/payment?plan=ai-phone-receptionist" className="lets-talk-btn w-full justify-center text-base py-3">
                Hire Maya ($199/mo)
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Banner linking to Agentic Companies */}
        <div className="max-w-4xl mx-auto mb-16 p-6 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">Turnkey Bot-Powered Companies</span>
            <h4 className="text-lg font-bold text-white uppercase">Want to launch a complete autonomous company?</h4>
            <p className="text-xs text-zinc-400">Deploy an AI Automation Agency ($41k margin benchmark), Faceless Media Company, or SEO Agency.</p>
          </div>
          <a
            href="#agentic-companies"
            className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            Explore Company Templates →
          </a>
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
