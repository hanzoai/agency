import React, { useState } from 'react';
import { ArrowUpRight, Check, ExternalLink, Bot, PhoneCall, MessageSquare, Code2, Sparkles, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aiEmployees } from '@/data/plans';

export function AIEmployees() {
  const [selectedTier, setSelectedTier] = useState<'starter' | 'pro' | 'enterprise'>('starter');

  // AI Usage multiplier description
  const tierInfo = {
    starter: {
      label: 'Starter AI Usage',
      range: '$49 – $199/mo',
      tokens: '1M – 3M tokens/mo',
      desc: 'Ideal for solo operators, startups, and single-channel deployments.',
    },
    pro: {
      label: 'Pro AI Usage',
      range: '$149 – $399/mo',
      tokens: '5M – 15M tokens/mo + voice',
      desc: 'High-throughput reasoning, multi-platform automations, and CRM synchronization.',
    },
    enterprise: {
      label: 'Heavy / Enterprise AI Usage',
      range: '$499 – $999/mo',
      tokens: '30M – 50M+ tokens/mo + dedicated queues',
      desc: 'Maximum model context, sub-second latency, custom tool APIs, and SLA.',
    },
  };

  return (
    <section id="ai-employees" className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-300">
            <Bot className="w-3.5 h-3.5" />
            <span>Preset Hanzo AI Personas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Autonomous AI Employees
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Specialized autonomous teammates with matching personas, distinct domain capabilities, and sub-second execution. 
            Automated by Hanzo AI Cloud and managed directly in your workspace on{' '}
            <a href="https://hanzo.team" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">
              hanzo.team
            </a>
            .
          </p>

          {/* Scalable Usage Tier Selector */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="bg-black/60 border border-white/10 rounded-2xl p-1.5 flex gap-1">
              {(['starter', 'pro', 'enterprise'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedTier === tier
                      ? 'bg-white text-black shadow-lg font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tier === 'starter' && 'Starter ($49+)'}
                  {tier === 'pro' && 'Pro ($149+)'}
                  {tier === 'enterprise' && 'Heavy ($499+)'}
                </button>
              ))}
            </div>
            <div className="mt-2.5 text-xs text-zinc-400 flex items-center justify-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>{tierInfo[selectedTier].tokens} · {tierInfo[selectedTier].desc}</span>
            </div>
          </div>
        </div>

        {/* AI Employees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 relative group overflow-hidden shadow-lg backdrop-blur-sm"
            >
              <div>
                {/* Header & Avatar */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black border border-white/15 flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform">
                    {emp.avatar ? (
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white font-mono text-xl font-bold">
                        {emp.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="text-right">
                    {emp.badge && (
                      <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-1">
                        {emp.badge}
                      </span>
                    )}
                    <div className="text-xl font-bold text-white font-mono">
                      ${emp.priceMonthly}
                      <span className="text-xs text-zinc-400 font-normal">/mo</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 block">30-day rolling</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {emp.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-3">{emp.roleTitle}</p>

                <p className="text-xs text-zinc-300 mb-5 leading-relaxed">
                  {emp.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {emp.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                <Link
                  to={`/payment?plan=${emp.id}`}
                  className="w-full bg-white hover:bg-white/90 text-black py-2 px-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1 shadow-md group cursor-pointer"
                >
                  <span>Hire Role</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href="https://hanzo.team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2 px-3 text-xs font-medium rounded-xl transition-all flex items-center justify-center gap-1"
                >
                  <span>hanzo.team</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
