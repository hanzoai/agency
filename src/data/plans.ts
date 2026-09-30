// What hanzo.agency sells, in one file.
//
// Every surface that shows a plan or a price reads it from here: /pricing, the
// pricing section on the home page, /services, the FAQ, the chat widget, the
// checkout return page and /white-label.
//
// Each plan names the commerce plan the checkout charges (`slug`, a row of
// GET api.hanzo.ai/v1/billing/plans). The price and features here are that
// row's, so the card a buyer clicks and the cart hanzo.ai/pay opens agree:
//
//   agency   -> advisory      $4,999 / month
//   forward  -> dedicated     $9,999 / month
//   pod      -> pod          $24,999 / month
//   white    -> white-label     $999 / month  (sold only on /white-label)
//
// `id` is this site's own name for a plan, used in its URLs. The commerce slug
// `agency` is a different, private plan; never send an id to the checkout.

export interface Plan {
  id: string;
  /** The commerce plan the checkout charges. */
  slug: string;
  name: string;
  description: string;
  /** USD per month, whole units: the commerce row's price. */
  priceMonthly: number;
  features: string[];
  /** Commitment, in the words we say it to a customer. */
  terms: string;
}

export const plans: Plan[] = [
  {
    id: 'agency',
    slug: 'advisory',
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
  },
  {
    id: 'forward',
    slug: 'dedicated',
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
  },
  {
    id: 'pod',
    slug: 'pod',
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
  },
];

/**
 * The partner plan: your own branded agency, resold to your clients. Paid by
 * card, monthly, up front. It is sold on /white-label only, so it is not in
 * `plans` and no pricing grid draws it.
 */
export const whiteLabel: Plan = {
  id: 'white-label',
  slug: 'white-label',
  name: 'White-label',
  description: 'Your own AI agency, under your brand, on your domain.',
  priceMonthly: 999,
  terms: 'Monthly, paid up front by card',
  features: [
    'Your own agency site on your domain',
    'Your name, logo, colors and theme',
    'Resell to your own clients at your own prices',
    'Your clients see your brand, only yours',
    'Set up for you by the Hanzo team',
  ],
};

/** The line under the homepage headline. */
export const ladder =
  'Agency from $4,999. Forward Deployed from $9,999. Embedded teams from $24,999.';

/**
 * A plan by this site's id or by its commerce slug, or undefined. The checkout
 * returns with the slug; this site's own links carry the id.
 */
export const planById = (id: string | null | undefined): Plan | undefined =>
  [...plans, whiteLabel].find((p) => p.id === id || p.slug === id);

/** "$4,999". USD only. */
export const priceLabel = (p: Plan): string => `$${p.priceMonthly.toLocaleString('en-US')}`;
