import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { HanzoLogo } from '@hanzo/logo';
import { ArrowUpRight, Calendar, CheckCircle2, Send, X } from 'lucide-react';
import { contact } from '@/data/contact';
import { EMAIL, fileLead, mailto } from '@/lib/leads';

type Sent = 'idle' | 'busy' | 'filed' | 'missed';

/**
 * The corner "Talk to us" panel: a short note and a work email, filed as a lead
 * with Hanzo's CRM (lib/leads, the same endpoint as /contact), beside the booking
 * page and the plans.
 */
export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
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
    const lead = await fileLead({ email: email.trim(), need: note, source: 'hanzo.agency/chat' });
    setSent(lead ? 'filed' : 'missed');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-center select-none">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close' : 'Talk to us'}
          aria-expanded={open}
          className="relative group p-2 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        >
          {open ? (
            <div className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-white/20 flex items-center justify-center text-white shadow-xl">
              <X className="w-5 h-5 text-white transition-transform group-hover:rotate-90" />
            </div>
          ) : (
            <HanzoLogo size={36} className="[&>svg]:w-9 [&>svg]:h-9 text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] transition-transform group-hover:scale-110" />
          )}
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-label="Talk to us"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] rounded-2xl border border-white/15 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-white/10 bg-zinc-900/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-black border border-white/20 flex items-center justify-center p-1.5 flex-shrink-0">
              <HanzoLogo size={22} className="[&>svg]:w-full [&>svg]:h-full text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white tracking-tight">Hanzo Agency</p>
              <p className="text-xs text-white/60">We reply by email.</p>
            </div>
          </div>

          <div className="p-5 space-y-4">
            {sent === 'filed' ? (
              <div role="status" className="space-y-3 text-sm text-white/90">
                <p className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Thanks. We have your note.
                </p>
                <p>Want to talk sooner? Pick a time.</p>
              </div>
            ) : sent === 'missed' ? (
              <div role="alert" className="space-y-3 text-sm text-white/90">
                <p>Send it by email, or pick a time. Your note goes with the email.</p>
                <a
                  href={mailto('Hanzo Agency', `${email}\n\n${note}`)}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90"
                >
                  Email us
                </a>
              </div>
            ) : (
              <form onSubmit={send} noValidate className="space-y-3">
                <p className="text-sm text-white/90">Tell us what you are building.</p>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder="A launch, an AI agent, a brand, a team for the quarter…"
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                />
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-label="Work email"
                    className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={sent === 'busy'}
                    aria-label="Send"
                    className="px-3 rounded-lg bg-white text-black hover:bg-white/90 disabled:opacity-60 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {wrong ? (
                  <p role="alert" className="text-xs text-red-400">
                    {wrong}
                  </p>
                ) : null}
              </form>
            )}

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={contact.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 text-white hover:bg-white/10"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a 15-minute call
              </a>
              <Link
                to="/pricing"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 text-white hover:bg-white/10"
              >
                See plans
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
