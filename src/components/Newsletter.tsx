import { useEffect, useRef, useState } from 'react';
import { WaitlistClient, readPendingReferrer } from '@hanzo/waitlist';

// Public site key. The matching secret stays in KMS and is what
// api.hanzo.ai checks this token against. A join without a token is
// refused, which is why a bare email field cannot subscribe.
const SITE_KEY = '0x4AAAAAACjmgkC9rYm5YPYv';

const client = new WaitlistClient({ baseUrl: 'https://api.hanzo.ai' });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Turnstile {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id?: string) => void;
}

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-turnstile]');
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('captcha')), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.dataset.turnstile = '1';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('captcha'));
    document.head.appendChild(script);
  });
}

const Newsletter = () => {
  const slot = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (!slot.current || !window.turnstile) return;
        const id = window.turnstile.render(slot.current, {
          sitekey: SITE_KEY,
          theme: 'dark',
          callback: (next: string) => setToken(next),
          'expired-callback': () => setToken(null),
          'error-callback': () => {
            setToken(null);
            setError('The signup check failed. Refresh and try again.');
          },
        });
        widgetId.current = id;
        if (cancelled) window.turnstile.remove(id);
      })
      .catch(() => {
        if (!cancelled) setError('The signup check could not load. Refresh and try again.');
      });
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = undefined;
    };
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy) return;
    const normalized = email.trim().toLowerCase();
    if (!EMAIL_RE.test(normalized)) {
      setError('Enter a valid email address.');
      return;
    }
    if (!token) {
      setError('Finish the check above, then subscribe.');
      return;
    }
    setBusy(true);
    setError(null);
    const res = await client.join({
      waitlist: 'agency',
      email: normalized,
      referrerCode: readPendingReferrer(),
      turnstileToken: token,
    });
    setBusy(false);
    if ('message' in res) {
      setToken(null);
      setError(res.message || 'Something went wrong. Try again.');
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
      return;
    }
    setDone(true);
  };

  if (done) {
    return <p className="text-lg text-white">You're subscribed.</p>;
  }

  const ready = EMAIL_RE.test(email.trim()) && Boolean(token) && !busy;

  return (
    <form onSubmit={submit} noValidate className="flex w-full max-w-md flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-label="Email address"
          required
          value={email}
          disabled={busy}
          onChange={(event) => setEmail(event.currentTarget.value)}
          className="min-w-0 flex-1 rounded-full border border-white/25 bg-transparent px-5 py-3 text-base text-white outline-none placeholder:text-white/40 focus:border-white"
        />
        <button
          type="submit"
          disabled={!ready}
          className="rounded-full bg-white px-6 py-3 text-base font-medium text-black transition-opacity enabled:hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {busy ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
      <div ref={slot} />
      {error ? (
        <p role="alert" className="text-sm text-white/80">
          {error}
        </p>
      ) : null}
    </form>
  );
};

export default Newsletter;
