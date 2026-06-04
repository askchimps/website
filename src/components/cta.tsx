'use client';

import { useState } from 'react';

interface FormState {
  status: 'idle' | 'submitting' | 'ok' | 'error';
  message?: string;
}

export function CTA() {
  const [state, setState] = useState<FormState>({ status: 'idle' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState({ status: 'submitting' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(fd.entries())),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `HTTP ${res.status}`);
      }
      (e.currentTarget as HTMLFormElement).reset();
      setState({ status: 'ok', message: "Thanks — we'll be in touch within a business day." });
    } catch (err) {
      setState({
        status: 'error',
        message:
          err instanceof Error
            ? err.message
            : "Something didn't go through. Email us at hello@askchimps.ai instead.",
      });
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-start gap-16 md:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted">
            Get a demo
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Stop chasing leads.{' '}
            <span className="text-accent">
              Start picking up warm ones.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-ink-dim">
            Tell us a bit about your funnel. We'll come back inside a business day with
            a quote, a sample call in your industry, and a 15-minute onboarding plan.
          </p>
          <div className="mt-8 space-y-3 text-sm text-ink-dim">
            <div>
              Email{' '}
              <a
                href="mailto:hello@askchimps.ai"
                className="text-ink underline underline-offset-4"
              >
                hello@askchimps.ai
              </a>
            </div>
            <div>Based in India · Built for Indian funnels</div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="space-y-4 border border-edge bg-surface p-8"
        >
          <Field label="Your name" name="name" required />
          <Field label="Work email" name="email" type="email" required />
          <Field label="Company" name="company" />
          <Field
            label="Monthly inbound leads (estimate)"
            name="leadVolume"
            placeholder="e.g. 500"
          />
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted">
              What do you want to qualify?
            </label>
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full border border-edge bg-night px-3 py-2 text-sm text-ink outline-none focus:border-accent"
              placeholder="Real estate inquiries — need to filter serious buyers from window-shoppers in 1 call."
            />
          </div>
          <input type="text" name="hp_field" className="hidden" tabIndex={-1} autoComplete="off" />
          <button
            type="submit"
            disabled={state.status === 'submitting'}
            className="w-full bg-accent px-4 py-3 text-sm font-semibold text-night transition hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.status === 'submitting' ? 'Sending…' : 'Send →'}
          </button>
          {state.message && (
            <p
              className={`text-sm ${
                state.status === 'ok'
                  ? 'text-teal'
                  : 'text-rose'
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-edge bg-night px-3 py-2 text-sm text-ink outline-none focus:border-accent"
      />
    </div>
  );
}
