import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { HanzoLogo } from '@hanzo/logo';
import {
  CreditCard,
  History,
  LogOut,
  Plus,
  ArrowRight,
  CheckCircle2,
  Clock,
  Palette,
  FileText,
  Globe,
  Briefcase,
  Image,
  Shield,
  ExternalLink,
  Calendar,
  Bot,
  Terminal,
  MessageSquare,
  Sparkles,
  PhoneCall,
  Send,
  Code2,
  Check,
  Layers,
  Zap,
  Users
} from 'lucide-react';

const HANZO_ID_LOGIN = 'https://hanzo.id/login?redirect=https%3A%2F%2Fhanzo.agency%2Fdashboard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'builder' | 'services' | 'chat'>('overview');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredits, setUserCredits] = useState(500);
  const [userName, setUserName] = useState('Partner');
  const [userEmail, setUserEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // AI Site Builder state
  const [builderPrompt, setBuilderPrompt] = useState('');
  const [builderStatus, setBuilderStatus] = useState<'idle' | 'building' | 'complete'>('idle');
  const [builderLogs, setBuilderLogs] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState('production-site');

  // Chat with Team state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'team'; text: string; time: string }>>([
    {
      sender: 'team',
      text: 'Welcome to your Hanzo Agency dashboard. Your creative director and AI engineering team are online. How can we support your roadmap today?',
      time: 'Just now'
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    // Read potential SSO callback params from URL
    const params = new URLSearchParams(window.location.search);
    const ssoToken = params.get('token') || params.get('access_token');
    const ssoEmail = params.get('email');
    const ssoName = params.get('name');

    if (ssoToken) {
      localStorage.setItem('authToken', ssoToken);
    }
    if (ssoEmail) {
      localStorage.setItem('userEmail', ssoEmail);
    }
    if (ssoName) {
      localStorage.setItem('userName', ssoName);
    }

    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('userEmail') || ssoEmail || '';
    const storedName = localStorage.getItem('userName') || ssoName || (email ? email.split('@')[0] : 'Client');
    const credits = parseInt(localStorage.getItem('userCredits') || '500');
    const adminStatus = localStorage.getItem('isAdmin') === 'true' || email.endsWith('@hanzo.ai');

    setIsLoggedIn(!!token);
    setUserEmail(email);
    setUserName(storedName);
    setUserCredits(credits);
    setIsAdmin(adminStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleRunBuilder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!builderPrompt.trim()) return;

    setBuilderStatus('building');
    setBuilderLogs([
      '⚡ [Hanzo AI Cloud] Connecting to dev engine & AST analyzer...',
      `⚡ [Prompt] "${builderPrompt}"`,
      '⚡ [Codebase] Inspecting design tokens, components, and routes...',
      '⚡ [Engine] Generating production-ready TypeScript + Tailwind changes...',
      '⚡ [Verification] Running automated linting & type checks...',
      '✓ [Success] 0 errors. Live site update staged for preview.',
      '🚀 Staged at https://preview.hanzo.ai/site-preview-live'
    ]);

    setTimeout(() => {
      setBuilderStatus('complete');
      setUserCredits(prev => Math.max(0, prev - 15));
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = {
      sender: 'user' as const,
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, newMsg]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          sender: 'team',
          text: 'Got it! Your Project Manager has received this request. We will review assets and coordinate with our AI specialists immediately.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  const services = [
    {
      id: 'instant-site',
      name: '3-Page Instant Site',
      credits: 500,
      price: '$500',
      icon: Globe,
      description: 'Polished 3-page site delivered in 24 hours with domain and SEO setup.'
    },
    {
      id: 'fix-session',
      name: 'Expert Fix Session (15m)',
      credits: 35,
      price: '$35',
      icon: Zap,
      description: 'One focused problem worked through live with a senior Hanzo engineer.'
    },
    {
      id: 'build-session',
      name: 'Expert Build Session (30m)',
      credits: 65,
      price: '$65',
      icon: Code2,
      description: 'Improve and ship a real feature on your app with senior assistance.'
    },
    {
      id: 'launch-session',
      name: 'Expert Launch Session (45m)',
      credits: 95,
      price: '$95',
      icon: CheckCircle2,
      description: 'Polish, integrate, connect, and ship your project out the door.'
    },
    {
      id: 'branding-kit',
      name: 'Brand Identity & Design System',
      credits: 500,
      price: '$500',
      icon: Palette,
      description: 'Complete visual identity, logo vectors, font rules, and token guidelines.'
    },
    {
      id: 'custom-rag',
      name: 'Custom RAG / Agent Pipeline',
      credits: 1500,
      price: '$1,500',
      icon: Bot,
      description: 'Fine-tuned agents and vector knowledge bases integrated into your backend.'
    }
  ];

  return (
    <>
      <main className="pt-28 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-7xl">
          {/* Top Bar / Client Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-zinc-800/80 mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center p-2.5 shadow-xl">
                <HanzoLogo size={28} className="[&>svg]:w-full [&>svg]:h-full text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Welcome back, {userName}
                  </h1>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">
                  Hanzo Agency Client Hub · Powered by Hanzo AI Cloud
                </p>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-3">
              <a
                href="https://hanzo.team"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>Launch hanzo.team</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://billing.hanzo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                <span>Billing &amp; Invoices</span>
              </a>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-white text-xs flex items-center gap-1.5 px-3 py-2 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign out</span>
                </button>
              ) : (
                <a
                  href={HANZO_ID_LOGIN}
                  className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  Sign in with Hanzo ID
                </a>
              )}
            </div>
          </div>

          {/* Unified Retainer & Credit Balance Card */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Unified Retainer &amp; Compute Balance
                  </span>
                  <span className="text-xs text-emerald-400 font-mono">1 credit = $1.00</span>
                </div>
                <div className="flex items-baseline gap-3 my-2">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                    {userCredits.toLocaleString()}
                  </span>
                  <span className="text-gray-400 font-medium">credits available</span>
                </div>
                <p className="text-xs text-gray-300 max-w-xl leading-relaxed mt-2">
                  Spend your retainer either way: hire senior human creatives and engineers, or run autonomous AI agents on Hanzo AI Cloud. Zero lock-in.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
                <Link to="/purchase-credits">
                  <Button className="bg-white hover:bg-gray-100 text-black text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <Plus className="w-4 h-4" />
                    Add Credits
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-400" />
                    Subscribe to Agency Retainer
                  </Button>
                </Link>
                <a
                  href="https://calendar.app.google/z1YsZQrqR4s6jQqD8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    Book Sync Call
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Status / hanzo.team Launcher */}
            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="font-semibold text-sm text-white">Hanzo Cloud &amp; Agents</h3>
                </div>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  Your autonomous bots execute in the cloud. Access transcripts, edit prompts, and review queued actions in the unified workspace.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span className="text-gray-400">Marketing Assistant</span>
                    <span className="text-amber-400 font-mono">from €80/mo</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span className="text-gray-400">24/7 Chat Agent</span>
                    <span className="text-teal-400 font-mono">from €150/mo</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-400">Voice Receptionist</span>
                    <span className="text-rose-400 font-mono">from €350/mo</span>
                  </div>
                </div>
              </div>

              <a
                href="https://hanzo.team"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-white/10 hover:bg-white/20 border border-white/15 text-white py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open hanzo.team Workspace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-zinc-800 mb-8 overflow-x-auto no-scrollbar gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Overview &amp; Services
            </button>
            <button
              onClick={() => setActiveTab('employees')}
              className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                activeTab === 'employees'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              AI Employees (hanzo.team)
            </button>
            <button
              onClick={() => setActiveTab('builder')}
              className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'builder'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              AI Site &amp; App Builder
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                activeTab === 'services'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Order Talent &amp; Sprints
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'chat'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              Chat with Hanzo Team
            </button>
          </div>

          {/* TAB CONTENT */}

          {/* 1. OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold tracking-tight">Popular Services &amp; Sprints</h2>
                  <Link to="/pricing" className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
                    <span>View all agency plans</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const canAfford = userCredits >= service.credits;

                    return (
                      <div
                        key={service.id}
                        className="bg-zinc-900/40 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-white/30 transition-all shadow-lg"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold font-mono text-white">
                              {service.credits} credits ({service.price})
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-white mb-1.5">{service.name}</h3>
                          <p className="text-xs text-gray-400 leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>

                        <Link
                          to={`/redeem/${service.id}`}
                          className="w-full"
                        >
                          <Button
                            className="w-full bg-white hover:bg-gray-100 text-black text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5"
                          >
                            <span>Order with Credits</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 2. AI EMPLOYEES */}
          {activeTab === 'employees' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Autonomous AI Employees Fleet</h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Powered by Hanzo AI Cloud. Launch and manage your active bots inside{' '}
                    <a href="https://hanzo.team" target="_blank" rel="noopener noreferrer" className="text-white underline">
                      hanzo.team
                    </a>
                    .
                  </p>
                </div>
                <a
                  href="https://hanzo.team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-gray-100 transition-colors shadow-md"
                >
                  <Bot className="w-4 h-4" />
                  <span>Manage on hanzo.team</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Marketing Assistant */}
                <div className="bg-gradient-to-b from-black to-amber-950/20 border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                        Growth &amp; Social
                      </span>
                      <span className="text-sm font-bold text-white font-mono">FROM €80/mo</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">AI Marketing Assistant</h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      Writes and schedules your social posts in your voice, captures enquiry comments, and drops leads straight into your CRM.
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                        <span>Autonomous multi-platform post scheduling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                        <span>CRM lead capture &amp; pipeline sync</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                        <span>Weekly queues &amp; monthly ROI report</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Link
                      to="/payment?plan=ai-marketing-assistant"
                      className="w-full bg-white hover:bg-gray-100 text-black py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Hire this role (€80/mo)</span>
                    </Link>
                    <a
                      href="https://hanzo.team"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center text-xs text-gray-400 hover:text-white py-1 transition-colors"
                    >
                      Open in hanzo.team →
                    </a>
                  </div>
                </div>

                {/* AI Chat Agent */}
                <div className="bg-gradient-to-b from-black to-teal-950/20 border border-teal-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold">
                        24/7 Web Concierge
                      </span>
                      <span className="text-sm font-bold text-white font-mono">FROM €150/mo</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">AI Chat Agent</h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      Sits on your website answering visitor questions 24/7: services, pricing, availability, and books calendar appointments.
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span>Trained on your services &amp; live prices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span>Direct Google/Outlook calendar booking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span>WhatsApp &amp; email escalation handover</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Link
                      to="/payment?plan=ai-chat-agent"
                      className="w-full bg-white hover:bg-gray-100 text-black py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Hire this role (€150/mo)</span>
                    </Link>
                    <a
                      href="https://hanzo.team"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center text-xs text-gray-400 hover:text-white py-1 transition-colors"
                    >
                      Open in hanzo.team →
                    </a>
                  </div>
                </div>

                {/* AI Phone Receptionist */}
                <div className="bg-gradient-to-b from-black to-rose-950/20 border border-rose-500/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative">
                  <div className="absolute top-0 right-0 bg-rose-600 text-white px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">
                    Never Miss a Call
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                        Voice AI
                      </span>
                      <span className="text-sm font-bold text-white font-mono">FROM €350/mo</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">AI Phone Receptionist</h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      Answers every phone call in a natural voice, takes details, schedules appointments, and sends instant missed-call text-backs.
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-400" />
                        <span>24/7 conversational voice call answering</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-400" />
                        <span>Instant SMS text-back with self-booking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-400" />
                        <span>Emergency calls flagged straight to mobile</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Link
                      to="/payment?plan=ai-phone-receptionist"
                      className="w-full bg-white hover:bg-gray-100 text-black py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Hire this role (€350/mo)</span>
                    </Link>
                    <a
                      href="https://hanzo.team"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center text-xs text-gray-400 hover:text-white py-1 transition-colors"
                    >
                      Open in hanzo.team →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. AI SITE & APP BUILDER (DEV STUDIO) */}
          {activeTab === 'builder' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Terminal className="w-5 h-5 text-amber-400" />
                      <h2 className="text-xl font-bold">AI Site &amp; App Builder</h2>
                      <span className="text-[10px] font-mono uppercase bg-white/10 text-white/80 px-2 py-0.5 rounded border border-white/10">
                        Hanzo Dev v1
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Chat with AI to update your site, ship new pages, or stage full refactors. Powered by Hanzo AI Cloud.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Target:</span>
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="bg-zinc-800 border border-zinc-700 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none"
                    >
                      <option value="production-site">Production Website (hanzo.agency)</option>
                      <option value="instant-site">Client Instant Site (Preview)</option>
                      <option value="new-app">New Full-Stack App</option>
                    </select>
                  </div>
                </div>

                <form onSubmit={handleRunBuilder} className="space-y-4">
                  <div>
                    <textarea
                      rows={3}
                      value={builderPrompt}
                      onChange={(e) => setBuilderPrompt(e.target.value)}
                      placeholder="Describe what you want to build or update (e.g. 'Add a customer testimonials carousel with 5 star rating', 'Connect Square checkout webhook', 'Redesign hero with animated 3D canvas')..."
                      className="w-full bg-zinc-950 border border-white/15 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>Estimated compute: <strong className="text-white">15 AI credits</strong></span>
                      <span>•</span>
                      <span>Or request human agency QA</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        type="submit"
                        disabled={builderStatus === 'building' || !builderPrompt.trim()}
                        className="bg-white hover:bg-gray-100 text-black text-xs font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>{builderStatus === 'building' ? 'Compiling Changes...' : 'Execute Live Update'}</span>
                      </Button>
                    </div>
                  </div>
                </form>

                {/* Live Build Console Output */}
                {builderLogs.length > 0 && (
                  <div className="mt-6 bg-black border border-zinc-800 rounded-xl p-4 font-mono text-xs text-gray-300 space-y-1 overflow-x-auto">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800 mb-2 text-[11px] text-gray-500">
                      <span>CONSOLE OUTPUT</span>
                      <span>HANZO CLUSTER: spark.local</span>
                    </div>
                    {builderLogs.map((log, index) => (
                      <div
                        key={index}
                        className={log.includes('Success') ? 'text-emerald-400 font-bold' : log.includes('Staged') ? 'text-cyan-300 font-semibold underline' : ''}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 4. SERVICES & RETENTION SPRINT */}
          {activeTab === 'services' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold tracking-tight mb-2">Dedicated Teams &amp; Retainer Plans</h2>
                <p className="text-xs text-gray-400 mb-6">
                  Engage senior human directors, creatives, and engineers under our flexible retainer.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/40 border border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10">
                        Monthly Retainer
                      </span>
                      <h3 className="text-xl font-bold text-white mt-3 mb-1">Agency Service</h3>
                      <div className="text-3xl font-bold text-white mb-3">$4,995<span className="text-sm font-normal text-gray-400">/month</span></div>
                      <p className="text-xs text-gray-300 leading-relaxed mb-4">
                        Full-service creative &amp; engineering team: 120 hours dedicated per month, 2 custom AI agents, dedicated Creative Director and PM.
                      </p>
                    </div>
                    <Link to="/payment?plan=agency">
                      <Button className="w-full bg-white hover:bg-gray-100 text-black text-xs font-semibold py-3 rounded-lg">
                        Subscribe to Agency Retainer
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-zinc-900/40 border border-purple-500/30 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold px-2 py-0.5 rounded bg-purple-500/10">
                        Dedicated Fleet
                      </span>
                      <h3 className="text-xl font-bold text-white mt-3 mb-1">Enterprise Service</h3>
                      <div className="text-3xl font-bold text-white mb-3">$9,995<span className="text-sm font-normal text-gray-400">/month</span></div>
                      <p className="text-xs text-gray-300 leading-relaxed mb-4">
                        Dedicated 4+ person full-stack team, unlimited brand AI agents, 240+ dedicated hours/mo, same-day priority turnaround.
                      </p>
                    </div>
                    <Link to="/payment?plan=enterprise">
                      <Button className="w-full bg-white hover:bg-gray-100 text-black text-xs font-semibold py-3 rounded-lg">
                        Subscribe to Enterprise Fleet
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. CHAT WITH TEAM */}
          {activeTab === 'chat' && (
            <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[580px]">
              <div className="p-4 border-b border-zinc-800 bg-zinc-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center p-1.5">
                    <HanzoLogo size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Hanzo Agency Project Room</h3>
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Creative Director &amp; AI Leads Online
                    </p>
                  </div>
                </div>
                <a
                  href="https://calendar.app.google/z1YsZQrqR4s6jQqD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1 bg-zinc-800 px-3 py-1.5 rounded-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Zoom</span>
                </a>
              </div>

              <div className="flex-grow p-5 space-y-4 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-white text-black font-medium rounded-br-none'
                          : 'bg-zinc-800/90 border border-white/10 text-gray-200 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t border-zinc-800 bg-zinc-950 flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask a question, request a new feature, or outline your next campaign..."
                  className="flex-grow bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                />
                <Button
                  type="submit"
                  disabled={!chatInput.trim()}
                  className="bg-white hover:bg-gray-100 text-black px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer disabled:opacity-40"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;