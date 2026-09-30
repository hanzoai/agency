// One home for the agency's contact facts. The footer, the Contact page, the
// chat widget and every "book a call" button render these, so they cannot drift
// apart again.
export const contact = {
  entity: 'Hanzo AI, Inc.',
  address: ['995 Market St', 'San Francisco, CA 94103'],
  // hanzo.agency publishes no MX record, so mail to an @hanzo.agency address
  // bounces. This is the address hanzo.ai/contact publishes.
  email: 'hello@hanzo.ai',
  phone: '+1 415 373 2496',
  phoneHref: 'tel:+14153732496',
  /** The agency's booking page: 15-minute calls with the team. */
  booking: 'https://calendar.app.google/z1YsZQrqR4s6jQqD8',
} as const;

/** Where an agency client works and signs in: the Hanzo app. */
export const app = {
  home: 'https://hanzo.ai',
  login: 'https://hanzo.ai/login',
  signup: 'https://hanzo.ai/signup',
} as const;
