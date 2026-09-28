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
    description: 'The platform to run ads and resell Hanzo, white-labeled as your own AI agency.',
    priceMonthly: 999,
    terms: 'Pause or cancel anytime',
    features: [
      'White-label Hanzo as your own AI agency',
      'Run ads on the platform',
      'Resell to your clients under your brand',
      'Unlimited requests, one workstream at a time',
      'Engineering, AI, design, research, and growth',
      'Full ownership of everything we create',
    ],
    cta: 'Start for $999',
  },
  {
    id: 'call',
    name: 'Call us',
    description: 'More than one workstream, a named team, or a program.',
    priceMonthly: null,
    terms: 'No second price',
    features: [
      'A named team inside your company',
      'More than one workstream at a time',
      'Client-facing work under your brand',
      'A program, not a queue',
    ],
    cta: 'Call us',
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

/** "$999", or "Talk" when the next step is a call. USD only. */
export const priceLabel = (p: Plan): string =>
  p.priceMonthly === null ? 'Talk' : `$${p.priceMonthly.toLocaleString('en-US')}`;

/** Where a plan's call to action goes: checkout for a priced plan, the contact page otherwise. */
export const planHref = (p: Plan): string =>
  p.priceMonthly === null ? '/contact' : `/payment?plan=${p.id}`;
