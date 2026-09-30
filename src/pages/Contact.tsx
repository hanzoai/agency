import { useState, type FormEvent } from 'react';
import Footer from '@/components/Footer';
import { ArrowUpRight, Calendar, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { contact } from '@/data/contact';
import { EMAIL, fileLead, mailto } from '@/lib/leads';

const field =
  'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none';

type Sent = 'idle' | 'busy' | 'filed' | 'missed';

/**
 * /contact: the agency's one sales page. The form files a lead with Hanzo's CRM
 * (lib/leads), then offers the booking page. Every "Talk to us" on the site
 * lands here.
 */
const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [need, setNeed] = useState('');
  const [wrong, setWrong] = useState('');
  const [sent, setSent] = useState<Sent>('idle');

  const send = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setWrong('Enter your work email.');
      return;
    }
    setWrong('');
    setSent('busy');
    const lead = await fileLead({ email: email.trim(), name, company, need, source: 'hanzo.agency/contact' });
    setSent(lead ? 'filed' : 'missed');
  };

  const note = [name, company, email, need].filter(Boolean).join('\n');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container-custom py-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Talk to us</h1>
            <p className="text-lg text-primary/80 mb-8">
              Tell us what you are building. We reply by email, or pick a time for a 15-minute call.
            </p>
            <a href={contact.booking} className="lets-talk-btn mb-10">
              <Calendar size={16} className="mr-2" />
              Book a call
              <ArrowUpRight size={16} className="ml-1" />
            </a>

            <div className="space-y-3 mt-10 text-primary/80">
              <p>
                {contact.entity}
                <br />
                {contact.address[0]}
                <br />
                {contact.address[1]}
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                  {contact.email}
                </a>
                <br />
                <a href={contact.phoneHref} className="hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </p>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="https://www.instagram.com/hanzoai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="geometric-circle border border-white/20 aspect-square w-12 h-12 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/hanzo-inc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="geometric-circle border border-white/20 aspect-square w-12 h-12 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/hanzoai" target="_blank" rel="noopener noreferrer" aria-label="X" className="geometric-circle border border-white/20 aspect-square w-12 h-12 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/hanzoai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="geometric-circle border border-white/20 aspect-square w-12 h-12 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            {sent === 'filed' ? (
              <div role="status" className="space-y-4">
                <h2 className="text-2xl font-bold">Thanks. We have your note.</h2>
                <p className="text-primary/80">We reply by email. Want to talk sooner? Pick a time.</p>
                <a href={contact.booking} className="lets-talk-btn">
                  Book a call
                  <ArrowUpRight size={16} className="ml-1" />
                </a>
              </div>
            ) : sent === 'missed' ? (
              <div role="alert" className="space-y-4">
                <h2 className="text-2xl font-bold">Send it by email, or pick a time</h2>
                <p className="text-primary/80">Your note goes with the email.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={mailto('Hanzo Agency', note)} className="lets-talk-btn">
                    Email us
                  </a>
                  <a href={contact.booking} className="lets-talk-btn">
                    Book a call
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={send} noValidate className="space-y-4">
                <h2 className="text-2xl font-bold mb-2">What do you need?</h2>
                <label className="block">
                  <span className="text-sm text-primary/70">Work email *</span>
                  <input className={field} type="email" name="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm text-primary/70">Name</span>
                    <input className={field} name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </label>
                  <label className="block">
                    <span className="text-sm text-primary/70">Company</span>
                    <input className={field} name="company" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm text-primary/70">The work</span>
                  <textarea className={field} name="need" rows={4} value={need} onChange={(e) => setNeed(e.target.value)} placeholder="A product launch, an AI agent, a brand, a team for the quarter…" />
                </label>
                {wrong ? (
                  <p role="alert" className="text-sm text-red-400">
                    {wrong}
                  </p>
                ) : null}
                <button type="submit" className="lets-talk-btn w-full justify-center" disabled={sent === 'busy'}>
                  {sent === 'busy' ? 'Sending…' : 'Send'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
