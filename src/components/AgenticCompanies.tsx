import React, { useState } from 'react';
import { ArrowUpRight, Check, ExternalLink, Sparkles, TrendingUp, Bot, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { agenticCompanies } from '@/data/plans';

/** Launch results from the case studies, each opening its study on hanzo.ai. */
const CASES = [
  { href: 'https://hanzo.ai/customers/damon-motorcycles', who: 'Damon Motorcycles', value: '$8.4M', label: 'in bikes sold in 30 days' },
  { href: 'https://hanzo.ai/customers#trillerfest', who: 'Triller', value: '169M', label: 'people watched TrillerFest' },
  { href: 'https://hanzo.ai/customers#stoned', who: 'STONED Audio', value: '$135K', label: 'in sales from a $20K budget' },
  { href: 'https://hanzo.ai/customers#bellabeat', who: 'Bellabeat', value: '250,000', label: 'email signups for LEAF' },
];

export function AgenticCompanies() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'media' | 'agency' | 'publishing'>('all');

  const filteredCompanies = agenticCompanies.filter((company) => {
    if (activeFilter === 'media') {
      return company.id === 'company-faceless-social' || company.id === 'company-clipping-channel';
    }
    if (activeFilter === 'agency') {
      return company.id === 'company-aaa' || company.id === 'company-seo-geo' || company.id === 'company-paid-ads' || company.id === 'company-recruiting';
    }
    if (activeFilter === 'publishing') {
      return company.id === 'company-web-publisher' || company.id === 'company-newsletter';
    }
    return true;
  });

  return (
    <section id="agentic-companies" className="py-24 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-purple-900/15 via-blue-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/15 text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Turnkey Autonomous Businesses</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Deploy an Agentic Company
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Full bot-powered company templates run autonomously by frontier models and specialized agent teams. 
            Built on the playbooks behind the launches in our case studies.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              All Companies ({agenticCompanies.length})
            </button>
            <button
              onClick={() => setActiveFilter('agency')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'agency'
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              Agencies &amp; Services
            </button>
            <button
              onClick={() => setActiveFilter('media')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'media'
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              Video &amp; Social Media
            </button>
            <button
              onClick={() => setActiveFilter('publishing')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'publishing'
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              Publishing &amp; Content
            </button>
          </div>
        </div>

        {/* Figures from the case studies at hanzo.ai/customers */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900 border border-white/15 rounded-2xl p-6 sm:p-8 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            {CASES.map((c, i) => (
              <a
                key={c.who}
                href={c.href}
                className={i === 0 ? 'pb-4 md:pb-0 md:pr-6' : i === CASES.length - 1 ? 'pt-4 md:pt-0 md:pl-6' : 'py-4 md:py-0 md:px-6'}
              >
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">{c.who}</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{c.value}</div>
                <p className="text-xs text-zinc-400 mt-1">{c.label}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-zinc-950/80 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-white/25 transition-all duration-300 relative group overflow-hidden shadow-xl"
            >
              {/* Top Row: Badge & Avatar */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    {company.badge && (
                      <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-2">
                        {company.badge}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {company.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-0.5">{company.roleTitle}</p>
                  </div>

                  {company.avatar && (
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-zinc-900 border border-white/15 flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                      <img
                        src={company.avatar}
                        alt={company.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // fallback if image fails
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>

                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                  {company.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {company.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Pricing & Actions */}
              <div className="pt-5 border-t border-white/10 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-zinc-400 block">Subscription &amp; Compute</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold text-white font-mono">
                        ${company.priceMonthly}
                      </span>
                      <span className="text-xs text-zinc-400">/month</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-zinc-400 block">AI Usage Tier</span>
                    <span className="text-xs text-zinc-300 font-medium">Scalable $49–$999/mo</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to={`/payment?plan=${company.id}`}
                    className="w-full bg-white hover:bg-white/90 text-black py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md group cursor-pointer"
                  >
                    <span>Deploy</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <a
                    href="https://hanzo.team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-white py-2.5 px-4 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>hanzo.team</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to customized deployments */}
        <div className="mt-16 text-center border border-white/10 bg-zinc-950/60 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-lg font-bold text-white uppercase tracking-tight">
              Need a Custom Autonomous Business Architecture?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Combine multiple AI employees, dedicated GPU clusters, private vector databases, and custom API integrations.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="bg-white hover:bg-white/90 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Talk to an Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
