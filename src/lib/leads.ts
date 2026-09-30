import { contact } from '@/data/contact';

/**
 * The sales form's endpoint: POST api.hanzo.ai/v1/marketing/leads files a lead in
 * Hanzo's CRM (cloud apps/marketing). It is the endpoint hanzo.ai/contact-sales
 * posts to; every form on this site that asks for someone's details posts here.
 * It takes no credential and admits hanzo.agency's origin.
 */
const LEADS = 'https://api.hanzo.ai/v1/marketing/leads';

/** The fields the endpoint reads. `source` names the form, e.g. hanzo.agency/contact. */
export interface Lead {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  need?: string;
  source: string;
}

/** The endpoint clips the free-text answer at 4 KiB. */
const NEED = 4000;

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * File a lead. Resolves to the CRM's reference, or undefined when nothing was
 * filed, so the caller can offer the booking page and email instead.
 */
export async function fileLead(lead: Lead): Promise<string | undefined> {
  try {
    const r = await fetch(LEADS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...lead,
        need: lead.need?.slice(0, NEED),
        visit: { url: window.location.href, userAgent: navigator.userAgent },
      }),
    });
    if (!r.ok) return undefined;
    return ((await r.json()) as { lead?: string }).lead;
  } catch {
    return undefined;
  }
}

/** A mail to the team carrying what the form collected, for when filing fails. */
export function mailto(subject: string, body: string): string {
  const q = new URLSearchParams({ subject, body: body.slice(0, 1800) });
  return `mailto:${contact.email}?${q.toString().replace(/\+/g, '%20')}`;
}
