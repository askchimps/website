const PILOT_FEATURES = [
  '2,500 voice minutes',
  'Credits valid 3 months',
  '1 Indian phone number — included',
  'Truecaller verification on that number — included',
  'Full call transcripts & recordings',
  'Dedicated onboarding · no recurring lock-in',
];

export function PricingPilot() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-24">
      <div className="relative overflow-hidden border border-accent bg-surface p-8 md:p-12">
        <div className="glow-yellow pointer-events-none absolute inset-0" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-block bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-night">
              Start here · One-time
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Pilot</h2>
            <p className="mt-3 max-w-xl text-ink-dim">
              Risk-free trial. Get the system live, calling your real leads
              from a Truecaller-verified Indian number — end-to-end, before you
              commit to anything monthly.
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {PILOT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <div className="font-display text-5xl font-semibold text-accent md:text-6xl">
              $500
            </div>
            <div className="mt-1 text-sm text-ink-dim">
              one-time · no auto-renew
            </div>
            <div className="mt-3 text-sm">
              @ <span className="font-semibold">$0.20</span> / minute
            </div>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-accent-dim"
            >
              Start Pilot →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className="mt-0.5 shrink-0 text-accent"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
