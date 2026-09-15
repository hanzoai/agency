import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HanzoLogo } from '@hanzo/logo';
import {
  Calendar,
  X,
  Send,
  Sparkles,
  ArrowUpRight,
  Bot,
  User,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Minimize2,
  MessageSquare
} from 'lucide-react';
import { contact } from '@/data/contact';

const CALENDAR_URL = 'https://calendar.app.google/z1YsZQrqR4s6jQqD8';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  actions?: {
    type: 'calendar' | 'pricing' | 'contact' | 'lead_captured';
    data?: any;
  };
}

const QUICK_PROMPTS = [
  '📅 Book a discovery call',
  '💰 Pricing & Agency Plans',
  '🤖 Custom AI & Agents',
  '🎨 Creative & Design services',
  '🔗 Web3 & Blockchain solutions',
];

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState<{ email?: string; phone?: string } | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hi! I'm the Hanzo AI sales & strategy partner. We're Techstars '17 alumni engineering frontier AI systems, high-performance blockchains, and world-class design for high-growth teams.",
      timestamp: new Date(),
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      text: "Are you looking to launch a new AI product, scale your design team, or schedule an executive discovery call?",
      timestamp: new Date(),
      actions: {
        type: 'calendar',
      },
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
  };

  const generateAIResponse = (userText: string) => {
    const text = userText.toLowerCase();

    // Check for email address in user text to capture lead
    const emailMatch = userText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = userText.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);

    if (emailMatch || phoneMatch) {
      const email = emailMatch ? emailMatch[0] : undefined;
      const phone = phoneMatch ? phoneMatch[0] : undefined;
      setLeadCaptured({ email, phone });
      return {
        text: `Got it! I've noted ${email || phone}. A partner from our executive team will reach out directly. You can also lock in an exact slot right now on our calendar below:`,
        actions: { type: 'calendar' as const },
      };
    }

    // Call / scheduling intent
    if (
      text.includes('call') ||
      text.includes('calendar') ||
      text.includes('schedule') ||
      text.includes('meet') ||
      text.includes('demo') ||
      text.includes('talk') ||
      text.includes('book')
    ) {
      return {
        text: "Let's get a call on the calendar! Our founding team runs 15-minute discovery and technical architecture sessions. Pick a time that suits you directly through Google Calendar:",
        actions: { type: 'calendar' as const },
      };
    }

    // Pricing / Cost / Plans intent
    if (
      text.includes('price') ||
      text.includes('cost') ||
      text.includes('pricing') ||
      text.includes('plan') ||
      text.includes('rate') ||
      text.includes('subscription') ||
      text.includes('how much')
    ) {
      return {
        text: "We offer transparent, purely USD pricing with no hidden fees and no long-term lock-in:\n\n• **Autonomous AI Employees**: Scalable compute from $49/mo to $999/mo (Growth Marketer from $49/mo, 24/7 Concierge from $99/mo, Voice Phone EA from $199/mo, Senior Full-Stack Coder from $149/mo) — automated with Hanzo AI Cloud and managed via hanzo.team.\n• **Turnkey Agentic Companies**: From $199/mo to $999/mo (AI Automation Agency with $41.4k margin benchmark, Faceless Media Company, Clipping Channel, SEO/GEO Agency).\n• **Agency Retainer**: $4,995/month — Full-service creative & AI team, 120 hrs/mo, 2 specialized creatives, 2 brand-trained AI agents.\n• **Enterprise Retainer**: Starting at $9,995/month — Dedicated 4+ person full-stack team, unlimited brand AI agents, 240+ dedicated hrs/mo, same-day turnaround.\n\nWhich engagement model aligns best with your roadmap?",
        actions: { type: 'pricing' as const },
      };
    }

    // AI & Technology intent
    if (
      text.includes('ai') ||
      text.includes('agent') ||
      text.includes('llm') ||
      text.includes('rag') ||
      text.includes('model') ||
      text.includes('fine tun') ||
      text.includes('pipeline') ||
      text.includes('autonomous')
    ) {
      return {
        text: "We build production-grade AI systems, not proof-of-concepts:\n\n• **Custom AI Agents & Workflows**: Multi-agent reasoning, tool use, and automated orchestration.\n• **LLM Fine-Tuning & Custom RAG**: Enterprise-grade retrieval augmented generation over proprietary knowledge bases.\n• **AI Pipeline Infrastructure**: High-throughput inference, low-latency microservices, and continuous evaluation.\n\nWould you like to schedule a 15-minute architecture discussion with our AI leads?",
        actions: { type: 'calendar' as const },
      };
    }

    // Design & Creative intent
    if (
      text.includes('design') ||
      text.includes('brand') ||
      text.includes('creative') ||
      text.includes('ui') ||
      text.includes('ux') ||
      text.includes('video') ||
      text.includes('3d') ||
      text.includes('motion')
    ) {
      return {
        text: "Our design team transforms brands from stealth to market leadership:\n\n• **Brand Identity & Systems**: Complete visual guidelines, wordmarks, and design systems.\n• **High-Impact Web & UI/UX**: Conversion-engineered interfaces built in React & Tailwind.\n• **3D, AR & Motion Graphics**: Cinematic visuals and interactive 3D assets.\n\nWe can start delivering within 48 hours of onboarding. Would you like to see relevant case studies or talk to a creative director?",
        actions: { type: 'calendar' as const },
      };
    }

    // Blockchain / Web3 / Lux
    if (
      text.includes('blockchain') ||
      text.includes('web3') ||
      text.includes('crypto') ||
      text.includes('lux') ||
      text.includes('consensus') ||
      text.includes('quantum')
    ) {
      return {
        text: "Hanzo has deep cryptography & consensus engineering pedigree. We architected Lux Network — sub-second finality with post-quantum security algorithms, high-throughput smart contract VMs, and multi-validator infrastructure.\n\nLet's discuss your blockchain or cryptography requirements on a call with our core engineers:",
        actions: { type: 'calendar' as const },
      };
    }

    // Background / Credibility / Clients
    if (
      text.includes('who are you') ||
      text.includes('clients') ||
      text.includes('portfolio') ||
      text.includes('work') ||
      text.includes('techstars') ||
      text.includes('experience')
    ) {
      return {
        text: "Hanzo AI is a Techstars '17 agency with over a decade of engineering and design excellence. We've built and scaled solutions for leaders including Damon Motorcycles, Lux Network, Zoo Foundation, BellaBeat, Triller, and Casper.\n\nReady to elevate your project? Let's connect for 15 minutes:",
        actions: { type: 'calendar' as const },
      };
    }

    // Default sales response
    return {
      text: "We can help you execute that with speed and precision. Whether it's end-to-end AI agent development, enterprise design, or dedicated engineering, our team is ready.\n\nCan we set up a quick 15-minute discovery call to review your scope?",
      actions: { type: 'calendar' as const },
    };
  };

  const handleSend = (textToSend?: string) => {
    const userMessageText = textToSend || input.trim();
    if (!userMessageText) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userMessageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate realistic AI thought and response delay
    setTimeout(() => {
      const response = generateAIResponse(userMessageText);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: new Date(),
        actions: response.actions,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Bottom-Right Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none">
        {/* Teaser pill (when closed) */}
        {!isOpen && !hasInteracted && (
          <button
            onClick={handleOpen}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/20 text-white text-xs font-medium shadow-xl backdrop-blur-md hover:bg-zinc-800 transition-all cursor-pointer animate-in fade-in slide-in-from-right-4 duration-500"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Sales & Scheduling</span>
          </button>
        )}

        <button
          onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
          aria-label="Hanzo AI Assistant — Sales & Scheduling"
          className="relative group p-2 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            <div className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-white/20 flex items-center justify-center text-white shadow-xl">
              <X className="w-5 h-5 text-white transition-transform group-hover:rotate-90" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              <HanzoLogo size={36} className="[&>svg]:w-9 [&>svg]:h-9 text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] transition-transform group-hover:scale-110" />
              {/* Active online indicator */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Interactive AI Chat Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Hanzo AI Sales and Calendaring Chat"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-w-[440px] h-[600px] max-h-[calc(100vh-7.5rem)] rounded-2xl border border-white/15 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black border border-white/20 flex items-center justify-center p-1.5 flex-shrink-0">
                <HanzoLogo size={22} className="[&>svg]:w-full [&>svg]:h-full text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-white tracking-tight">Hanzo AI</span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                    Techstars '17
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Sales & Strategy Partner</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Book Google Calendar Meeting"
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Calendar className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Persistent Calendar Callout Banner */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 px-4 py-2 border-b border-white/5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-white/90">
              <Calendar className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Ready to scale? Book a 15-min call:</span>
            </div>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-black hover:bg-white/90 transition-colors shadow-sm flex-shrink-0"
            >
              <span>Schedule</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center p-1 flex-shrink-0 mt-0.5">
                    <HanzoLogo size={16} className="[&>svg]:w-full [&>svg]:h-full text-white" />
                  </div>
                )}

                <div className="max-w-[82%] space-y-2">
                  <div
                    className={`p-3.5 rounded-2xl text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-zinc-800 text-white rounded-tr-sm ml-auto'
                        : 'bg-zinc-900/90 text-zinc-200 border border-white/10 rounded-tl-sm shadow-md'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Interactive Calendar Card */}
                  {msg.actions?.type === 'calendar' && (
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/15 space-y-2.5 shadow-lg animate-in fade-in duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white font-medium text-xs">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          <span>15-Min Executive Discovery</span>
                        </div>
                        <span className="text-[11px] text-white/50">Google Meet</span>
                      </div>
                      <p className="text-xs text-white/70 leading-normal">
                        Direct consultation with our engineering & design partners to scope your timeline, architecture, and team fit.
                      </p>
                      <a
                        href={CALENDAR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-md group"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Select Time on Google Calendar</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  )}

                  {/* Interactive Pricing Card */}
                  {msg.actions?.type === 'pricing' && (
                    <div className="grid grid-cols-2 gap-2 pt-1 animate-in fade-in duration-300">
                      <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] text-white/60 uppercase tracking-wider font-semibold">Agency</div>
                          <div className="text-base font-bold text-white mt-0.5">$4,995<span className="text-xs font-normal text-white/60">/mo</span></div>
                          <p className="text-[11px] text-white/70 mt-1">One active request, 100+ capabilities, 48h turnaround.</p>
                        </div>
                        <Link
                          to="/payment?plan=agency"
                          onClick={() => setIsOpen(false)}
                          className="mt-3 inline-flex items-center justify-center px-2.5 py-1.5 rounded-md text-[11px] font-medium bg-white text-black hover:bg-white/90 transition-colors"
                        >
                          Get Started
                        </Link>
                      </div>

                      <div className="p-3 rounded-xl bg-gradient-to-b from-purple-950/40 to-zinc-900 border border-purple-800/40 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] text-purple-400 uppercase tracking-wider font-semibold">Enterprise</div>
                          <div className="text-base font-bold text-white mt-0.5">$9,995<span className="text-xs font-normal text-white/60">/mo</span></div>
                          <p className="text-[11px] text-white/70 mt-1">Dedicated 4+ team, custom brand AI models, 240+ hrs.</p>
                        </div>
                        <Link
                          to="/payment?plan=enterprise"
                          onClick={() => setIsOpen(false)}
                          className="mt-3 inline-flex items-center justify-center px-2.5 py-1.5 rounded-md text-[11px] font-medium bg-white text-black hover:bg-white/90 transition-colors"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center p-1 flex-shrink-0">
                  <HanzoLogo size={16} className="[&>svg]:w-full [&>svg]:h-full text-white" />
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl bg-zinc-900/80 border border-white/10 rounded-tl-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 border-t border-white/5 bg-zinc-950 flex gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-white/10 bg-zinc-900/80">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about AI, design, pricing, or book a call..."
                className="w-full bg-zinc-950 border border-white/15 rounded-xl pl-3.5 pr-10 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                aria-label="Send message"
                className="absolute right-1.5 p-1.5 rounded-lg bg-white text-black hover:bg-white/90 disabled:opacity-30 disabled:hover:bg-white transition-opacity cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-white/40 px-1">
              <span>Direct scheduling via Google Calendar</span>
              <span>San Francisco • {contact.email}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
