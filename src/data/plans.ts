// What hanzo.agency sells, in one file.
//
// Every surface that shows a plan or a price reads it from here: /pricing, the
// pricing section on the home page, /services, the FAQ, the Enterprise page,
// the chat assistant, the client dashboard, and the checkout summary.
//
// Field names, and dollars as the unit, are taken from @hanzo/plans
// (plan.schema.json): id, name, description, priceMonthly, features. Same names,
// same units, so these entries can move into that package's catalog without
// being rewritten.

export interface Plan {
  id: string;
  name: string;
  description: string;
  /** USD per month, whole units. Null when the price is set per engagement. */
  priceMonthly: number | null;
  features: string[];
  /** Commitment, in the words we say it to a customer. */
  terms?: string;
  cta: string;
}

export const plans: Plan[] = [
  {
    id: 'advisory',
    name: 'Advisory',
    description: 'Human AI advisors, and the team to build what they advise.',
    priceMonthly: 4999,
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
    cta: 'Get started',
  },
  {
    id: 'dedicated',
    name: 'Dedicated Team',
    description: 'Dedicated team, custom AI, priority everything.',
    priceMonthly: 9999,
    terms: 'Annual contract preferred',
    features: [
      'Everything in Advisory, plus:',
      'Dedicated full-stack team (4+ creatives)',
      'Unlimited custom AI agents trained on your brand',
      '240+ hours dedicated per month',
      'Priority turnaround, same-day for urgent requests',
      'Video production (up to 4 videos/month)',
      '3D, AR, and immersive design',
      'AI consulting and marketing strategy',
      '8 hours of executive consultation per month',
    ],
    cta: 'Get started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Scope, team and terms built around your organization.',
    priceMonthly: null,
    features: [
      'Everything in Dedicated Team, plus:',
      'Team size and hours set to your roadmap',
      'Multi-brand and multi-department portfolios',
      'Fully embedded teams',
      'Dedicated account manager',
      'Centralized invoicing and spend control',
      'RFP submissions',
    ],
    cta: 'Contact us',
  },
];

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

/** "$4,999", or "Custom pricing" for a plan priced per engagement. USD only. */
export const priceLabel = (p: Plan): string =>
  p.priceMonthly === null ? 'Custom pricing' : `$${p.priceMonthly.toLocaleString('en-US')}`;

/** Where a plan's call to action goes: checkout for a priced plan, the contact page otherwise. */
export const planHref = (p: Plan): string =>
  p.priceMonthly === null ? '/contact' : `/payment?plan=${p.id}`;
