const RULES = [
  {
    title: 'Recurring monthly billing',
    body: "Every month you're billed your plan price and credited that plan's minutes — even if you still have leftover credits from prior months.",
  },
  {
    title: '2-month rolling validity',
    body: 'Unused credits carry forward to the next month — but they expire at the end of the second month after they were issued. No triple-stacking.',
  },
  {
    title: 'FIFO consumption',
    body: 'We always burn the oldest credits first — so you never accidentally let expiring credits go to waste while fresh ones sit idle.',
  },
  {
    title: 'Pulse-based billing',
    body: 'Every call rounds up to the next pulse. Pilot, Climb and Canopy use a 1-minute pulse. Apex uses a 30-second pulse — so short calls cost roughly half.',
  },
];

const PULSE_ROWS = [
  { duration: '0:10 (quick rejection)', standard: '1 min', apex: '30 sec' },
  { duration: '0:35 (short pitch)', standard: '1 min', apex: '1 min' },
  { duration: '0:55 (just under a minute)', standard: '1 min', apex: '1 min' },
  { duration: '1:10 (one-minute-ten)', standard: '2 min', apex: '1 min 30 sec' },
  { duration: '2:05 (full qualification call)', standard: '3 min', apex: '2 min 30 sec' },
];

const EXAMPLE_ROWS = [
  {
    month: 'Month 1 — billed $2,000',
    added: '+ 8,000 min',
    expired: '—',
  },
  {
    month: 'Month 2 — billed $2,000 (used 6,000 of Month 1)',
    added: '+ 8,000 min',
    expired: '—',
  },
  {
    month: 'Month 3 — billed $2,000',
    added: '+ 8,000 min',
    expired: '2,000 unused from Month 1 expire',
  },
  {
    month: 'Month 4 — billed $2,000',
    added: '+ 8,000 min',
    expired: 'Month 2 leftovers expire',
  },
];

export function PricingCredits() {
  return (
    <section id="credits" className="border-y border-edge bg-surface mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            How credits & billing work
          </h2>
          <p className="mt-4 text-ink-dim">
            No fine-print games. Here&apos;s the full rulebook.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RULES.map((r, i) => (
            <div key={r.title} className="border border-edge bg-night p-6">
              <div className="font-display text-accent text-sm">0{i + 1}</div>
              <h4 className="mt-3 font-display text-lg">{r.title}</h4>
              <p className="mt-2 text-sm text-ink-dim leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-accent bg-accent/5 p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Worked example · Canopy plan
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-edge text-left text-[10px] uppercase tracking-widest text-muted">
                  <th className="py-2">Month</th>
                  <th className="py-2 text-right">Credits added</th>
                  <th className="py-2 text-right">Credits expiring</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLE_ROWS.map((r, i) => (
                  <tr
                    key={r.month}
                    className={
                      i === EXAMPLE_ROWS.length - 1
                        ? ''
                        : 'border-b border-edge/40'
                    }
                  >
                    <td className="py-3 pr-4 text-ink-dim">{r.month}</td>
                    <td className="py-3 text-right font-display font-semibold">
                      {r.added}
                    </td>
                    <td className="py-3 pl-4 text-right text-ink-dim">
                      {r.expired}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-dim">
            Translation: you always have <b>up to 2 months of buffer</b>{' '}
            against busy/quiet cycles — credits don&apos;t pile up forever.
          </p>
        </div>

        <div className="mt-6 border border-edge bg-night p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Worked example · Pulse billing
          </div>
          <p className="mt-2 text-sm text-ink-dim">
            How the same call duration bills under each pulse:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-edge text-left text-[10px] uppercase tracking-widest text-muted">
                  <th className="py-2">Actual call duration</th>
                  <th className="py-2 text-right">Pilot · Climb · Canopy (1-min pulse)</th>
                  <th className="py-2 text-right">Apex (30-sec pulse)</th>
                </tr>
              </thead>
              <tbody>
                {PULSE_ROWS.map((r, i) => (
                  <tr
                    key={r.duration}
                    className={
                      i === PULSE_ROWS.length - 1
                        ? ''
                        : 'border-b border-edge/40'
                    }
                  >
                    <td className="py-3 pr-4 text-ink-dim">{r.duration}</td>
                    <td className="py-3 text-right font-display font-semibold">
                      {r.standard}
                    </td>
                    <td className="py-3 pl-4 text-right font-display font-semibold text-accent">
                      {r.apex}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-dim">
            Apex&apos;s 30-second pulse compounds with its lower per-minute
            rate — so short rejection calls and voicemail-style hangups stay
            cheap at high volume.
          </p>
        </div>

        <div className="mt-6 flex items-start gap-4 border border-edge bg-night p-6 md:p-8">
          <div className="grid size-10 shrink-0 place-items-center bg-accent/15 font-display text-accent">
            !
          </div>
          <div>
            <h4 className="font-display text-lg">
              All payments are final and non-refundable
            </h4>
            <p className="mt-2 text-sm text-ink-dim leading-relaxed">
              The Pilot fee, monthly subscriptions, add-ons, and overage credit
              packs are non-refundable once paid. Unused minutes remain usable
              within their normal validity window (3 months for Pilot, 2-month
              rolling for monthly plans). On cancellation, you keep access
              through the end of the cycle you have already paid for — no
              partial refunds are issued.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
