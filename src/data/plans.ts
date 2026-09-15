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
  /** USD or EUR, whole units, as @hanzo/plans writes prices. */
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
    name: 'AI Marketing Assistant',
    description: 'Writes and schedules social content, captures inbound enquiries, and syncs directly to your CRM.',
    priceMonthly: 80,
    currency: 'EUR',
    category: 'automation',
    from: true,
    terms: '30-day rolling · GDPR compliant · EU hosted',
    bestFor: 'Sole traders and small teams who never get round to posting.',
    features: [
      'Social posts written in your voice and scheduled autonomously',
      'Inbound comment and enquiry capture synced into your CRM',
      'Weekly queue management and monthly ROI report',
      'Manage tasks, review posts, and track analytics on hanzo.team',
      'Automated backend powered by Hanzo AI Cloud',
    ],
    cta: 'Hire this role',
  },
  {
    id: 'ai-chat-agent',
    name: 'AI Chat Agent',
    description: '24/7 website concierge that answers questions, qualifies visitors, and books appointments.',
    priceMonthly: 150,
    currency: 'EUR',
    category: 'automation',
    from: true,
    terms: '30-day rolling · GDPR compliant · EU hosted',
    bestFor: 'Any business that gets customer enquiries out of hours.',
    features: [
      'Trained on your services, documentation, and live pricing',
      'Direct calendar booking & automated lead qualification',
      'Intelligent hand-off to WhatsApp, Slack, or email when needed',
      'Real-time conversation logs & lead insights on hanzo.team',
      'Fast plug-and-play embed powered by Hanzo AI Cloud',
    ],
    cta: 'Hire this role',
  },
  {
    id: 'ai-phone-receptionist',
    name: 'AI Phone Receptionist',
    description: 'Lifelike conversational voice AI that answers calls, books jobs, and texts back callers 24/7.',
    priceMonthly: 350,
    currency: 'EUR',
    category: 'automation',
    from: true,
    badge: 'NEVER MISS A CALL',
    terms: '30-day rolling · GDPR compliant · EU hosted',
    bestFor: 'Trades, clinics, garages, recovery firms, and businesses where missed calls mean lost revenue.',
    features: [
      '24/7 human-like voice call answering with sub-second latency',
      'Full call audio recording, transcripts & structured notes sent instantly',
      'Missed-call instant SMS text-back with booking links included',
      'Emergency & VIP calls flagged directly to your mobile',
      'Phone numbers, voice personas & metrics managed on hanzo.team',
      'High-throughput telephony powered by Hanzo AI Cloud',
    ],
    cta: 'Hire this role',
  },
];

/** The recurring plans, in the order they are sold. */
export const subscriptions = plans.filter((p) => !p.once);

/** Bought once, not subscribed to. */
export const projects = plans.filter((p) => p.once);

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

/** "$999", "from $8,999", or "from €80" where the price is a starting point. */
export const priceLabel = (p: Plan): string => {
  const sym = p.currency === 'EUR' ? '€' : '$';
  return `${p.from ? 'from ' : ''}${sym}${p.priceMonthly.toLocaleString()}`;
};

export const intervalLabel = (p: Plan): string => (p.once ? '/one-time' : '/month');
