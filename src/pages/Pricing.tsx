import React from 'react';

import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <>
      {/* <NewHeader /> removed - using global NewHeader */}
      <main className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Book an expert session, deploy autonomous AI employees, or engage the full agency.
              Flexible terms and our quality guarantee.
            </p>
          </div>

          {/* Section 01: Expert sessions */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              01 · Quick Sessions — Fix, Build, Launch
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">1-on-1 Expert Problem Solving</h2>
            <p className="text-sm text-foreground/70 mt-1 max-w-xl mx-auto">
              Live hands-on sessions with Hanzo engineers. Worked through live, together. You leave with the fix.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* FIX */}
            <div className="flex flex-col h-full border-2 border-emerald-800 hover:border-emerald-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-emerald-950/30 backdrop-blur-sm relative shadow-lg shadow-emerald-900/10 transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <h3 className="text-xl font-semibold mb-1">FIX</h3>
                <p className="text-sm text-foreground/70 font-semibold">One problem. Solved together.</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">$35</span>
                  <span className="text-foreground/60 text-sm">/ 15 min</span>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">One focused problem, end to end</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Worked through live, together</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">You leave with the fix</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 pt-2 mt-auto">
                <Link to="/contact" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
                  Book Fix
                </Link>
              </div>
            </div>

            {/* BUILD */}
            <div className="flex flex-col h-full border-2 border-cyan-800 hover:border-cyan-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-cyan-950/30 backdrop-blur-sm relative shadow-lg shadow-cyan-900/10 transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <h3 className="text-xl font-semibold mb-1">BUILD</h3>
                <p className="text-sm text-foreground/70 font-semibold">Improve your app with an expert.</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">$65</span>
                  <span className="text-foreground/60 text-sm">/ 30 min</span>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">30 minutes on your real app</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Expert help where it counts</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Ship a real improvement</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 pt-2 mt-auto">
                <Link to="/contact" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
                  Book Build
                </Link>
              </div>
            </div>

            {/* LAUNCH */}
            <div className="flex flex-col h-full border-2 border-indigo-800 hover:border-indigo-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-indigo-950/30 backdrop-blur-sm relative shadow-lg shadow-indigo-900/10 transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <h3 className="text-xl font-semibold mb-1">LAUNCH</h3>
                <p className="text-sm text-foreground/70 font-semibold">Polish it. Connect it. Ship it.</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">$95</span>
                  <span className="text-foreground/60 text-sm">/ 45 min</span>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">45 minutes to get it out the door</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Polish, connect &amp; integrate</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Leave with it shipped</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 pt-2 mt-auto">
                <Link to="/contact" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
                  Book Launch
                </Link>
              </div>
            </div>
          </div>

          {/* Section 02: Dedicated teams */}
          <div className="text-center mt-20 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
              02 · Dedicated Teams — Agency & Enterprise
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Full-Service Creative & Engineering</h2>
            <p className="text-sm text-foreground/70 mt-1 max-w-xl mx-auto">
              Dedicated multidisciplinary teams, unlimited brand-trained AI agents, and comprehensive delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Agency Service */}
            <div className="flex flex-col h-full border-2 border-blue-800 hover:border-blue-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-blue-950/30 backdrop-blur-sm relative shadow-lg shadow-blue-900/10 transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <h3 className="text-xl font-semibold mb-1">Agency Service</h3>
                <p className="text-sm text-foreground/70">Full-service creative & marketing team</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">$4,995</span>
                  <span className="text-foreground/60 text-sm">/month</span>
                </div>
                <p className="text-sm text-foreground/60 mt-2 font-bold">1 quarter minimum commitment</p>
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
                </ul>
              </div>

              <div className="p-6 pt-2 mt-auto">
                <Link to="/payment?plan=agency" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
                  Get started now
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col h-full border-2 border-purple-800 hover:border-purple-700 rounded-xl overflow-hidden bg-gradient-to-b from-black to-purple-950/30 backdrop-blur-sm relative shadow-lg shadow-purple-900/10 transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
                <p className="text-sm text-foreground/70">Dedicated team, custom AI, priority everything</p>
                <p className="text-xs uppercase tracking-wide text-foreground/50 mt-2">Starting at</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold">$9,995</span>
                  <span className="text-foreground/60 text-sm">/month</span>
                </div>
                <p className="text-sm text-foreground/60 mt-2 font-bold">Annual contract preferred</p>
              </div>

              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Everything in Agency Service, plus:</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Dedicated full-stack team (4+ creatives)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Unlimited custom AI agents trained on your brand</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">240+ hours dedicated per month</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Priority turnaround — same-day for urgent requests</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Video production (up to 4 videos/month)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">3D, AR, and immersive design</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">AI consulting and marketing strategy</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">8 hours of executive consultation per month</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 pt-2 mt-auto space-y-3">
                <Link to="/payment?plan=enterprise" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
                  Get started now
                </Link>
                <p className="text-xs text-center text-foreground/50">Pay with card, crypto, or wire transfer</p>
              </div>
            </div>
          </div>

          {/* Section 03: AI Automation — AI Employees */}
          <div className="text-center mt-24 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              03 · AI Automation — AI Employees
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Autonomous AI Employees from €80 a month
            </h2>
            <p className="text-base text-foreground/80 max-w-2xl mx-auto">
              Easily automated with Hanzo AI Cloud on the backend. Log in and access your agents, tasks, and analytics at{' '}
              <a
                href="https://hanzo.team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-white/80 font-medium"
              >
                hanzo.team
              </a>
              .
            </p>
            <p className="text-xs text-foreground/50 mt-2">
              Monthly prices below · Setup is quoted on your free call · 30-day rolling · GDPR compliant · EU hosted · Monthly reporting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* AI Marketing Assistant */}
            <div className="flex flex-col h-full border-2 border-amber-800/70 hover:border-amber-600 rounded-xl overflow-hidden bg-gradient-to-b from-black to-amber-950/20 backdrop-blur-sm relative shadow-lg shadow-amber-900/10 transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                  Growth &amp; Social
                </div>
                <h3 className="text-xl font-semibold mb-1">AI Marketing Assistant</h3>
                <p className="text-xs uppercase tracking-wide text-foreground/50 mt-2">FROM</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-bold text-white">€80</span>
                  <span className="text-foreground/60 text-sm">/month</span>
                </div>
                <p className="text-xs text-foreground/50 mt-1">30-day rolling · 0% lock-in</p>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Writes and schedules your social content, captures enquiries from your posts, and drops them into your CRM. The cheapest way to be visible every week without doing it yourself.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-5 text-xs text-foreground/80">
                    <span className="font-semibold text-white">Best for:</span> Sole traders and small teams who never get round to posting.
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Social posts written in your voice and scheduled</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Lead capture into your CRM</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Weekly management and a monthly report</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Manage queues &amp; approvals on hanzo.team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-2 mt-auto">
                <Link
                  to="/payment?plan=ai-marketing-assistant"
                  className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
                >
                  Hire this role
                </Link>
              </div>
            </div>

            {/* AI Chat Agent */}
            <div className="flex flex-col h-full border-2 border-teal-800/70 hover:border-teal-600 rounded-xl overflow-hidden bg-gradient-to-b from-black to-teal-950/20 backdrop-blur-sm relative shadow-lg shadow-teal-900/10 transition-all duration-300">
              <div className="p-6 border-b border-border/20">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-2">
                  24/7 Web Concierge
                </div>
                <h3 className="text-xl font-semibold mb-1">AI Chat Agent</h3>
                <p className="text-xs uppercase tracking-wide text-foreground/50 mt-2">FROM</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-bold text-white">€150</span>
                  <span className="text-foreground/60 text-sm">/month</span>
                </div>
                <p className="text-xs text-foreground/50 mt-1">30-day rolling · 0% lock-in</p>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Sits on your website and answers questions 24 hours a day: prices, opening hours, areas covered, availability. Captures the lead and books the appointment while you are working.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-5 text-xs text-foreground/80">
                    <span className="font-semibold text-white">Best for:</span> Any business that gets enquiries out of hours.
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Trained on your services and prices</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Books into your calendar</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Hands off to WhatsApp or email when needed</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Real-time transcripts &amp; logs on hanzo.team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-2 mt-auto">
                <Link
                  to="/payment?plan=ai-chat-agent"
                  className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
                >
                  Hire this role
                </Link>
              </div>
            </div>

            {/* AI Phone Receptionist */}
            <div className="flex flex-col h-full border-2 border-rose-800/80 hover:border-rose-600 rounded-xl overflow-hidden bg-gradient-to-b from-black to-rose-950/25 backdrop-blur-sm relative shadow-lg shadow-rose-900/15 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-rose-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
                Never Miss a Call
              </div>
              <div className="p-6 border-b border-border/20">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-2">
                  Voice Automation
                </div>
                <h3 className="text-xl font-semibold mb-1">AI Phone Receptionist</h3>
                <p className="text-xs uppercase tracking-wide text-foreground/50 mt-2">FROM</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-bold text-white">€350</span>
                  <span className="text-foreground/60 text-sm">/month</span>
                </div>
                <p className="text-xs text-foreground/50 mt-1">30-day rolling · 0% lock-in</p>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Answers every call in a natural voice, takes the details, books the job and texts back any call it cannot take. No more customers hearing voicemail and ringing the next name on Google.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-5 text-xs text-foreground/80">
                    <span className="font-semibold text-white">Best for:</span> Trades, clinics, garages and recovery firms.
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">24/7 call answering with call notes sent to you</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Missed-call text-back included</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Emergency calls flagged to your mobile</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">Call audio, logs &amp; controls on hanzo.team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-2 mt-auto space-y-2">
                <Link
                  to="/payment?plan=ai-phone-receptionist"
                  className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
                >
                  Hire this role
                </Link>
                <Link
                  to="/contact?subject=AI+Phone+Receptionist"
                  className="w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-foreground/60 hover:text-white transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 mb-8">
            <p className="text-lg text-foreground/70 mb-4">Need more?</p>
            <p className="text-foreground/60 mb-6 max-w-lg mx-auto">
              For larger engagements, multi-brand portfolios, or fully embedded teams, let's talk.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
              Call us for larger engagements
            </Link>
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
