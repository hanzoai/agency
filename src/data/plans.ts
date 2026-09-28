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
    id: 'agency',
    name: 'Agency',
    description: 'Send us the work. We ship it.',
    priceMonthly: 4999,
    terms: 'Monthly',
    features: [
      'Access to Hanzo\'s full agency',
      'AI, engineering, product, design and growth',
      'One active workstream at a time',
      'Unlimited requests and revisions',
      'Work directly in your existing tools and repositories',
      'Production-ready deliverables',
      'Full source code and IP ownership',
      'Hanzo AI Cloud included',
    ],
    cta: 'Get started',
  },
  {
    id: 'forward',
    name: 'Forward Deployed',
    description: 'We join your team.',
    priceMonthly: 9999,
    terms: 'Monthly',
    features: [
      'Everything in Agency, plus:',
      'Named forward-deployed lead',
      'Embedded in Slack, GitHub, Linear, Jira and your existing workflow',
      'Multiple active priorities',
      'Weekly planning and working sessions',
      'Architecture and technical leadership',
      'Production implementation and deployment',
      'Priority execution',
      'White-label delivery',
      'Work directly with your customers under your brand',
      'Hanzo specialists pulled in as required',
    ],
    cta: 'Deploy Hanzo',
  },
  {
    id: 'pod',
    name: 'Embedded Pod',
    description: 'We bring the team.',
    priceMonthly: 24999,
    terms: 'Monthly',
    features: [
      'Everything in Forward Deployed, plus:',
      'Named cross-functional pod',
      'Reserved engineering, AI, product and creative capacity',
      'Multiple concurrent workstreams',
      'Senior technical leadership',
      'Product and roadmap ownership',
      'Client-facing and fully white-label operation',
      'Faster turnaround and priority capacity',
      'Production support',
      'Custom AI systems and infrastructure',
      'Multi-product and multi-brand support',
    ],
    cta: 'Build your pod',
  },
];

/** The line under the homepage headline. */
export const ladder =
  'Agency from $4,999. Forward Deployed from $9,999. Embedded teams from $24,999.';

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

/** "$4,999", or "Talk" when the price is set in a conversation. USD only. */
export const priceLabel = (p: Plan): string =>
  p.priceMonthly === null ? 'Talk' : `$${p.priceMonthly.toLocaleString('en-US')}`;

/** Where a plan's call to action goes: checkout for a priced plan, the contact page otherwise. */
export const planHref = (p: Plan): string =>
  p.priceMonthly === null ? '/contact' : `/payment?plan=${p.id}`;
