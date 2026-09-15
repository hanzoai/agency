import subscription from '@hanzo/plans/subscription.json';

// What hanzo.agency sells, in one file.
//
// The price used to live in seven: /pricing, the section on the home page, the
// FAQ answers, the services page, the Enterprise page, the checkout summary,
// and the amount posted to commerce. A price change landed on whichever of them
// somebody remembered. The two that mattered most drifted the most easily — the
// card a customer reads and the amount the checkout charges were written in
// different files with nothing linking them.
//
// Field names, and dollars as the unit, are taken from @hanzo/plans
// (plan.schema.json): id, name, description, priceMonthly, category, features,
// bundles, contactSales. Same names, same units, so these entries can move into
// that package's services.json — the rate cards a pricing page reads — without
// being rewritten.
//
// Two things here that the canonical schema has no field for, marked below:
// a one-time price, and the number of bundled seats a plan includes.

/** The one seat price in the estate: the canonical Team plan, read, not copied. */
const team = (subscription as CanonicalPlan[]).find((p) => p.id === 'team');

interface CanonicalPlan {
  id: string;
  name: string;
  priceMonthly: number | null;
  features?: string[];
}

/**
 * $25/user/month. Read from @hanzo/plans rather than typed here, because this
 * number is not ours: it is the Team plan's price, it is pinned by a test in
 * cloud (apps/plan/plan_test.go), and commerce bills against it. A copy on this
 * page would be a second place for it to be wrong.
 */
export const seatPrice: number = team?.priceMonthly ?? 25;

export interface Plan {
  id: string;
  name: string;
  description: string;
  /** USD, whole units, strictly no currency mixing. */
  priceMonthly: number;
  currency?: string;
  category: string;
  features: string[];
  /** Child plan slugs this plan grants. @hanzo/plans plan.schema.json. */
  bundles?: string[];
  /** The price is where the plan starts, not what every customer pays. */
  from?: boolean;
  /** Commitment, in the words we say it to a customer. */
  terms?: string;
  cta: string;
  /** Not in the canonical schema: it prices per month, this is bought once. */
  once?: boolean;
  /** Not in the canonical schema: `bundles` grants a plan, it cannot say how many seats. */
  seatsIncluded?: number;
  badge?: string;
  bestFor?: string;
  avatar?: string;
  persona?: string;
  roleTitle?: string;
  usageTier?: string;
  benchmark?: {
    metric: string;
    value: string;
    detail: string;
    multiple?: string;
  };
  estimatedRevenue?: string;
}

export const plans: Plan[] = [
  {
    id: 'agency',
    name: 'Agency Service',
    description: 'Full-service creative team',
    priceMonthly: 4995,
    terms: '1 quarter minimum',
    category: 'agency',
    bundles: ['team'],
    seatsIncluded: 5,
    features: [
      '5 seats included',
      `$${seatPrice}/month for each additional seat`,
      'Cloud usage on the Hanzo platform',
      'Org workspaces with shared history and projects',
      'SSO via Hanzo IAM',
      'One unified bill for everyone',
    ],
    cta: 'Start on Agency',
  },
  {
    id: 'advisory',
    name: 'Advisory',
    description: 'Human AI advisors, and the team to build what they advise.',
    priceMonthly: 4999,
    category: 'advisory',
    from: true,
    terms: '1 quarter minimum commitment',
    features: [
      'Dedicated Creative Director',
      'Dedicated Project Manager',
      '2 specialized creatives simultaneously',
      '120 hours dedicated per month',
      '2 custom brand-trained AI agents',
      '24-hour turnaround for basic requests',
      'Access to 100+ creative services',
      'Full copyright ownership',
      'Unlimited revisions & requests',
      '4 hours of consultation per month',
    ],
    cta: 'Talk to an advisor',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Dedicated team, custom AI, priority everything.',
    priceMonthly: 9995,
    category: 'enterprise',
    from: true,
    terms: 'Annual contract preferred',
    features: [
      'Everything in Advisory, plus:',
      'Dedicated full-stack team (4+ creatives)',
      'Unlimited custom AI agents trained on your brand',
      '240+ hours dedicated per month',
      'Priority turnaround — same-day for urgent requests',
      'Video production (up to 4 videos/month)',
      '3D, AR, and immersive design',
      'AI consulting and marketing strategy',
      '8 hours of executive consultation per month',
    ],
    cta: 'Talk to us',
  },
  {
    id: 'instant-site',
    name: 'Instant Site',
    description: 'A polished 3-page website in 24 hours.',
    priceMonthly: 500,
    category: 'project',
    once: true,
    terms: 'No subscription. No delays.',
    features: [
      'Custom-built 3-page website, tailored to your brand',
      'Up to 10 premium images or product photos included',
      '24-hour guaranteed turnaround from kickoff',
      '1 design revision to fine-tune the final look',
      'Fully mobile-responsive and fast',
      'SEO-ready structure',
      "Domain + hosting setup guidance (or we'll do it for you)",
      'Lifetime ownership — no recurring fees',
    ],
    cta: 'Get your site in 24 hours',
  },
  {
    id: 'ai-marketing-assistant',
    name: 'AI Marketing & Growth Lead',
    roleTitle: 'Growth & Content Specialist',
    persona: 'creative',
    avatar: '/agents/creative.png',
    description: 'Writes and schedules multi-platform social content, crafts high-converting copy, and syncs inbound leads directly to your CRM.',
    priceMonthly: 49,
    category: 'automation',
    from: true,
    usageTier: '$49/mo (1M tokens) · $149/mo (5M tokens) · $499/mo (25M tokens + multi-channel)',
    terms: '30-day rolling · Hanzo AI Cloud backend · Deploy on hanzo.team',
    bestFor: 'Founders and growth teams needing autonomous daily organic distribution.',
    benchmark: {
      metric: 'Median Views / Post',
      value: '3,820',
      multiple: '3.6× control',
      detail: 'Weekly autonomous publishing across TikTok, YouTube Shorts & Instagram Reels',
    },
    estimatedRevenue: '$2,500 – $8,000/mo organic traffic & lead value',
    features: [
      'Autonomous copy generation tuned to your exact brand voice',
      'Scheduled distribution across X, LinkedIn, TikTok & Instagram',
      'Continuous hook refinement from weekly performance analytics',
      'Inbound comment & lead capture synced into CRM',
      'Scalable AI compute: $49/mo (1M tokens) up to $499/mo (25M tokens)',
      'Live task management and post queues on hanzo.team',
    ],
    cta: 'Hire Creative',
  },
  {
    id: 'ai-chat-agent',
    name: 'AI Concierge & Customer Success',
    roleTitle: '24/7 Support & Sales Specialist',
    persona: 'nora',
    avatar: '/agents/nora.png',
    description: '24/7 website concierge that answers questions, qualifies visitors, resolves issues, and books calendar appointments.',
    priceMonthly: 99,
    category: 'automation',
    from: true,
    usageTier: '$99/mo (3M tokens) · $199/mo (10M tokens) · $499/mo (30M tokens + priority queue)',
    terms: '30-day rolling · Hanzo AI Cloud backend · Deploy on hanzo.team',
    bestFor: 'Any business wanting to convert visitors and answer questions 24/7.',
    benchmark: {
      metric: 'Task Completion Rate',
      value: '94%',
      multiple: 'Sub-second latency',
      detail: 'Zero drop-off on customer inquiries with instant CRM & calendar sync',
    },
    estimatedRevenue: '$3,000 – $12,000/mo in saved headcount & recovered leads',
    features: [
      'Trained on your live docs, past tickets, services & pricing tables',
      'Automated qualification & direct calendar booking integration',
      'Smart human escalation to WhatsApp, Slack, or email',
      'Multi-language fluency across 95+ languages',
      'Scalable AI compute: $99/mo (3M tokens) up to $499/mo (30M tokens)',
      'Real-time conversation logs & analytics on hanzo.team',
    ],
    cta: 'Hire Nora',
  },
  {
    id: 'ai-phone-receptionist',
    name: 'AI Phone Receptionist & EA',
    roleTitle: 'Autonomous Telephony & Voice Operations',
    persona: 'maya',
    avatar: '/agents/maya.png',
    description: 'Lifelike conversational voice AI that answers calls, schedules bookings, answers FAQs, and texts back callers 24/7.',
    priceMonthly: 199,
    category: 'automation',
    from: true,
    badge: 'NEVER MISS A CALL',
    usageTier: '$199/mo (300 mins) · $399/mo (1,000 mins) · $999/mo (Enterprise 3,500+ mins)',
    terms: '30-day rolling · Hanzo AI Cloud Voice · Deploy on hanzo.team',
    bestFor: 'Clinics, legal firms, service agencies, and businesses where missed calls mean lost clients.',
    benchmark: {
      metric: 'Voice Turn Latency',
      value: '<800ms',
      multiple: '100% call capture',
      detail: 'Human-parity audio synthesis with instant SMS follow-up',
    },
    estimatedRevenue: '$5,000 – $25,000/mo in recovered missed-call bookings',
    features: [
      '24/7 human-sounding natural voice synthesis with sub-second response',
      'Immediate audio recording, transcription & structured summary sent to mobile',
      'Instant SMS text-back with direct calendar booking links',
      'VIP and emergency caller routing directly to your personal line',
      'Scalable voice compute: $199/mo (300 mins) up to $999/mo (3,500 mins)',
      'Dedicated local numbers & telephony dashboards on hanzo.team',
    ],
    cta: 'Hire Maya',
  },
  {
    id: 'ai-coder',
    name: 'AI Full-Stack Software Engineer',
    roleTitle: 'Senior Full-Stack AI Engineer',
    persona: 'dev',
    avatar: '/agents/dev.png',
    description: 'Autonomous software engineer that reviews code, writes production features, fixes bugs, and deploys applications.',
    priceMonthly: 149,
    category: 'automation',
    from: true,
    usageTier: '$149/mo (5M tokens) · $349/mo (15M tokens) · $999/mo (50M tokens + auto-PRs)',
    terms: '30-day rolling · Hanzo AI Cloud · Deploy on hanzo.team',
    bestFor: 'Startups and engineering teams needing an tireless autonomous developer.',
    benchmark: {
      metric: 'Verified PR Pass Rate',
      value: '91%',
      multiple: '187ns runtime boot',
      detail: 'Tested across GitHub pull requests, linting, unit tests and builds',
    },
    estimatedRevenue: '$8,000 – $20,000/mo engineering output equivalent',
    features: [
      'Connects directly to GitHub/GitLab repositories and local branches',
      'Autonomous feature implementation, bug triage, and refactoring',
      'Automated pull request creation with test suites and documentation',
      'Deep integration with Dev Studio and cloud deployments',
      'Scalable AI compute: $149/mo (5M tokens) up to $999/mo (50M tokens)',
      'Live build and terminal logs on hanzo.team and Dev Studio',
    ],
    cta: 'Hire Leo',
  },
  {
    id: 'ai-designer',
    name: 'AI UI/UX & Brand Designer',
    roleTitle: 'Product & Visual Designer',
    persona: 'des',
    avatar: '/agents/des.png',
    description: 'Generates UI layouts, interactive web components, marketing visuals, design tokens, and brand assets.',
    priceMonthly: 99,
    category: 'automation',
    from: true,
    usageTier: '$99/mo (1,000 assets) · $249/mo (3,500 assets) · $699/mo (Unlimited vector + 3D)',
    terms: '30-day rolling · Hanzo AI Cloud · Deploy on hanzo.team',
    bestFor: 'Agencies and founders needing rapid, high-fidelity design production.',
    benchmark: {
      metric: 'Asset Turnaround',
      value: '<60s',
      multiple: 'Vector & Figma sync',
      detail: 'Instant production-ready CSS, SVG, and component code',
    },
    estimatedRevenue: '$4,000 – $10,000/mo design retainer value',
    features: [
      'Tailwind CSS, React, and Figma-compatible component generation',
      'Brand style consistency enforcement across all deliverables',
      'Interactive design mockups with instant code export',
      'Vector icon sets, social banners, and landing page wireframes',
      'Scalable asset compute: $99/mo to $699/mo',
      'Live review canvas on hanzo.team',
    ],
    cta: 'Hire Des',
  },
  {
    id: 'ai-devops',
    name: 'AI Cloud & DevOps SRE Lead',
    roleTitle: 'Infrastructure & Reliability Engineer',
    persona: 'vi',
    avatar: '/agents/vi.png',
    description: 'Monitors Kubernetes clusters, optimizes cloud spend, handles auto-rollbacks, and patches CI/CD pipelines.',
    priceMonthly: 149,
    category: 'automation',
    from: true,
    usageTier: '$149/mo · $399/mo · $799/mo dedicated SRE monitor',
    terms: '30-day rolling · Hanzo Cloud · Deploy on hanzo.team',
    bestFor: 'Teams running cloud infrastructure needing 24/7 uptime vigilance.',
    benchmark: {
      metric: 'Mean Time to Detect (MTTD)',
      value: '<15s',
      multiple: 'Zero false alarms',
      detail: 'Autonomous incident diagnosis and automated rollback triggers',
    },
    estimatedRevenue: '$6,000 – $15,000/mo in downtime prevention & SRE coverage',
    features: [
      '24/7 cluster telemetry, anomaly detection, and automated mitigation',
      'CI/CD pipeline triage, broken build repair, and dependency updates',
      'Cloud bill auditing with automated idle-resource reclamation',
      'Zero-downtime rolling updates and disaster recovery verification',
      'Scalable usage tiers: $149/mo up to $799/mo',
      'Incident command console on hanzo.team',
    ],
    cta: 'Hire Vi',
  },

  // ---------------------------------------------------------------------------
  // TURNKEY AGENTIC COMPANIES (FULL BOT-POWERED BUSINESSES)
  // ---------------------------------------------------------------------------
  {
    id: 'company-aaa',
    name: 'AI Automation Agency (AAA)',
    roleTitle: 'Turnkey Client Acquisition & Delivery Business',
    persona: 'creative',
    avatar: '/agents/creative.png',
    badge: 'CASE STUDY VERIFIED · $100M+ SCALE',
    description: 'Autonomous agency dropped into your market to prospect, qualify, send cold outreach, close deals, and deliver client work.',
    priceMonthly: 499,
    category: 'company',
    from: true,
    usageTier: '$499/mo (Starter: 50 outreach/day) · $999/mo (Pro: 200 outreach/day + full delivery engine)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'Entrepreneurs and agencies wanting an autonomous cash-flow business.',
    benchmark: {
      metric: 'Cumulative Client Revenue',
      value: '$100M+',
      multiple: '500× campaign ROI',
      detail: 'Verified customer case study: Damon Motorcycles EV launch powered by Hanzo agency engine',
    },
    estimatedRevenue: '$10,000 – $40,000+/mo booked margin',
    features: [
      'Autonomous prospect discovery and targeted email/Slack outreach',
      'Adaptive qualification playbook that refines based on market replies',
      'Automated client onboarding, brief intake, and scoping',
      'Automated delivery engine with client acceptance tests',
      'CRM integration with HubSpot, Pipedrive, Attio & Hanzo CRM',
      'Scalable AI compute: $499/mo up to $999/mo',
      'Full agency control dashboard on hanzo.team',
    ],
    cta: 'Deploy AAA Company',
  },
  {
    id: 'company-faceless-social',
    name: 'Faceless Video Media Company',
    roleTitle: 'Autonomous Short-Form Media Network',
    persona: 'jobs',
    avatar: '/agents/jobs.png',
    badge: '169M+ VIEWERS REACHED',
    description: 'Runs TikTok, YouTube Shorts, and Instagram Reels channels from nothing with original AI-generated video and adaptive hooks.',
    priceMonthly: 299,
    category: 'company',
    from: true,
    usageTier: '$299/mo (5 posts/wk) · $599/mo (15 posts/wk) · $899/mo (Multi-channel network)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'Media creators, affiliate marketers, and brands wanting viral organic reach.',
    benchmark: {
      metric: 'Broadcast Reach (Media)',
      value: '169M+',
      multiple: '82M+ MAUs',
      detail: 'Verified customer case study: Triller & TrillerFest live video distribution and multi-channel campaign',
    },
    estimatedRevenue: '150,000+ views/mo · Creator fund & affiliate monetization',
    features: [
      'Automated viral scriptwriting, voiceover generation, and b-roll assembly',
      'Adaptive hook library that rewrites from top 10% performing posts',
      'Simultaneous syndication to TikTok, YouTube Shorts & Instagram Reels',
      'Autonomous scheduling, caption optimization, and hashtag research',
      'Zero human video editing required',
      'Scalable production tiers: $299/mo to $899/mo',
      'Media channel metrics and revenue sync on hanzo.team',
    ],
    cta: 'Deploy Media Company',
  },
  {
    id: 'company-clipping-channel',
    name: 'Autonomous Clipping Channel',
    roleTitle: 'Viral Content Syndication Network',
    persona: 'dario',
    avatar: '/agents/dario.png',
    badge: 'DOGFOODED ON HANZO.AI',
    description: 'Mines long-form podcasts, webinars, and back catalogues for high-engagement moments, reframes, captions, and posts across channels.',
    priceMonthly: 299,
    category: 'company',
    from: true,
    usageTier: '$299/mo (25 clips/mo) · $549/mo (75 clips/mo) · $799/mo (Unlimited catalogue)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'Podcasters, educators, streamers, and media companies with video archives.',
    benchmark: {
      metric: 'Viral Clip Discovery',
      value: 'Sub-second',
      multiple: '100% automated hold',
      detail: 'Dogfooded on Hanzo internal podcasts, dev chats & developer media via /v1/benchmark telemetry',
    },
    estimatedRevenue: '200,000+ views/mo · Sponsorship & audience funneling',
    features: [
      'Automated transcript analysis & virality heat-mapping',
      'Smart 9:16 vertical reframing with active speaker auto-tracking',
      'Dynamic animated karaoke captions and kinetic text highlights',
      'Cross-platform distribution across 10+ social accounts',
      'Adaptive opening frame selection for max 3-second retention',
      'Scalable clipping tiers: $299/mo to $799/mo',
      'Full video queue and approval flow on hanzo.team',
    ],
    cta: 'Deploy Clipping Channel',
  },
  {
    id: 'company-seo-geo',
    name: 'SEO & GEO Dominance Agency',
    roleTitle: 'Search Engine & AI Answer Engine Retainer',
    persona: 'feynman',
    avatar: '/agents/feynman.png',
    badge: 'NATIVE DOGFOODING',
    description: 'Complete organic search & generative engine optimization agency: technical audits, keyword research, long-form guides, and citation blocks.',
    priceMonthly: 399,
    category: 'company',
    from: true,
    usageTier: '$399/mo (20 articles/mo) · $699/mo (50 articles/mo) · $999/mo (Enterprise GEO)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'Businesses wanting to rank in both Google Search and AI Answer Engines (Perplexity, ChatGPT, Claude).',
    benchmark: {
      metric: 'Answer Engine Citation',
      value: 'Top 3',
      multiple: 'Zero hallucination',
      detail: 'Live tracking across Perplexity, ChatGPT & Claude via Hanzo /v1/benchmark & /v1/research',
    },
    estimatedRevenue: '$5,000 – $15,000/mo organic traffic value',
    features: [
      'Comprehensive keyword gap audits and competitor term mapping',
      'Autonomous authoring of publication-grade, hallucination-free articles',
      'Generative Engine Optimization (GEO) blocks formatted for AI citations',
      'Automated technical SEO fixes, internal linking, and sitemap sync',
      'Search Console and answer engine ranking tracking',
      'Scalable writing volume: $399/mo to $999/mo',
      'Ranking leaderboard and analytics on hanzo.team',
    ],
    cta: 'Deploy SEO/GEO Agency',
  },
  {
    id: 'company-web-publisher',
    name: 'AI Web Publisher Network',
    roleTitle: 'Programmatic Media & Authority Publishing',
    persona: 'zach',
    avatar: '/agents/zach.jpg',
    description: 'Deploys and maintains high-authority programmatic niche web publications monetized via direct sponsorship and programmatic ad networks.',
    priceMonthly: 349,
    category: 'company',
    from: true,
    usageTier: '$349/mo (Single publication) · $649/mo (3 publications) · $999/mo (Network of 10)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'Digital publishers building automated web properties with compounding traffic.',
    estimatedRevenue: '$3,000 – $12,000/mo programmatic ad yield',
    features: [
      'Automated static site deployment on high-speed CDN edge',
      'Programmatic content pipelines targeting long-tail commercial intent',
      'Integrated newsletter capture and automated monetization slots',
      'Automated image generation and schema metadata markup',
      'Zero maintenance overhead with autonomous publishing schedules',
      'Usage tiers: $349/mo to $999/mo',
      'Monetization dashboard on hanzo.team',
    ],
    cta: 'Deploy Publisher',
  },
  {
    id: 'company-newsletter',
    name: 'Autonomous Newsletter Engine',
    roleTitle: 'Curated Digest & Audience Monetizer',
    persona: 'teresa',
    avatar: '/agents/teresa.png',
    badge: '250K SUBSCRIBERS',
    description: 'Curates, writes, and sends weekly industry newsletters, runs automated subscriber growth loops, and matches paid sponsors.',
    priceMonthly: 199,
    category: 'company',
    from: true,
    usageTier: '$199/mo (Weekly digest) · $399/mo (Daily dispatch + referral loop) · $699/mo (Multi-publication)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'Niche operators wanting a loyal, monetization-ready email audience.',
    benchmark: {
      metric: 'Pre-Launch Audience',
      value: '250,000',
      multiple: 'Viral waitlist loop',
      detail: 'Verified customer case study: Bellabeat LEAF referral growth engine',
    },
    estimatedRevenue: '$2,500 – $10,000/mo in sponsorships & paid subs',
    features: [
      'Automated web crawling of industry news, papers, and breaking trends',
      'Editorial curation and formatting in engaging markdown newsletters',
      'Substack, Beehiiv & ConvertKit direct API delivery sync',
      'Automated referral incentives and social teaser distribution',
      'Usage tiers: $199/mo to $699/mo',
      'Subscriber growth tracking on hanzo.team',
    ],
    cta: 'Deploy Newsletter',
  },
  {
    id: 'company-paid-ads',
    name: 'Paid Ads Autonomous Manager',
    roleTitle: 'Multi-Channel ROAS Optimization Agency',
    persona: 'altman',
    avatar: '/agents/altman.png',
    badge: '6.75× BLENDED ROAS',
    description: 'Tests hundreds of ad creative variations, allocates budget dynamically, and drives blended ROAS across Meta, Google, and TikTok Ads.',
    priceMonthly: 499,
    category: 'company',
    from: true,
    usageTier: '$499/mo (Up to $10k ad spend) · $999/mo (Up to $50k+ ad spend)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'E-commerce and SaaS brands scaling paid customer acquisition.',
    benchmark: {
      metric: 'Blended ROAS',
      value: '6.75×',
      multiple: '$135K on $20K spend',
      detail: 'Verified customer case study: STONED Wireless Audio direct-response acquisition',
    },
    estimatedRevenue: '6.75× Blended ROAS ($135k generated on $20k initial spend)',
    features: [
      'Generates copy, headlines, and visuals for multivariate testing',
      'Real-time budget allocation shifting spend to highest-converting ad sets',
      'Automated stop-loss triggers on underperforming creatives',
      'Full pixel, conversion API, and GA4 revenue attribution',
      'Usage tiers: $499/mo to $999/mo',
      'Live ROAS command center on hanzo.team',
    ],
    cta: 'Deploy Paid Ads Agency',
  },
  {
    id: 'company-recruiting',
    name: 'Recruiting & Headhunting Agency',
    roleTitle: 'Autonomous Talent Sourcing & Screening',
    persona: 'maya',
    avatar: '/agents/maya.png',
    description: 'Sources candidates across GitHub and LinkedIn, screens resumes against role briefs, conducts initial screening, and schedules interviews.',
    priceMonthly: 399,
    category: 'company',
    from: true,
    usageTier: '$399/mo (2 active searches) · $699/mo (5 active searches) · $999/mo (Unlimited searches)',
    terms: 'Turnkey autonomous business template · Managed on hanzo.team',
    bestFor: 'Fast-growing startups and agencies needing senior talent fast.',
    estimatedRevenue: '$8,000 – $25,000/mo saved in external recruiter fees',
    features: [
      'Automated candidate discovery across technical communities and job boards',
      'Precision screening against technical requirements and portfolio review',
      'Personalized outreach sequences with high executive reply rates',
      'Automated interview scheduling and candidate briefing notes',
      'Usage tiers: $399/mo to $999/mo',
      'Candidate pipeline board on hanzo.team',
    ],
    cta: 'Deploy Recruiting Agency',
  },
];

/** The recurring plans, in the order they are sold. */
export const subscriptions = plans.filter((p) => !p.once);

/** Bought once, not subscribed to. */
export const projects = plans.filter((p) => p.once);

/** Filter for individual autonomous AI employees. */
export const aiEmployees = plans.filter((p) => p.category === 'automation');

/** Filter for turnkey autonomous companies. */
export const agenticCompanies = plans.filter((p) => p.category === 'company');

/**
 * A plan by id, or undefined.
 *
 * Undefined rather than a default. An id that is not in the catalogue has no
 * price, and a lookup that supplies one anyway decides on the caller's behalf.
 * Every caller here would rather ask again than guess, so each handles the
 * absence itself.
 */
export const planById = (id: string | null | undefined): Plan | undefined =>
  plans.find((p) => p.id === id);

/** Cents, for commerce. Derived, so the card and the charge cannot disagree. */
export const amount = (p: Plan): number => p.priceMonthly * 100;

/** Strictly USD ($) formatted price label: "$999", "from $49", etc. No mixed currencies. */
export const priceLabel = (p: Plan): string => {
  return `${p.from ? 'from ' : ''}$${p.priceMonthly.toLocaleString()}`;
};

export const intervalLabel = (p: Plan): string => (p.once ? '/one-time' : '/month');

