const CASES = [
  {
    title: 'Real estate',
    body: 'Site visits booked while the lead is still hot. Hindi-first.',
    tag: 'Most common',
  },
  {
    title: 'Interior design',
    body: 'Budget + timeline + property type — captured in one 90-second call.',
  },
  {
    title: 'Edtech',
    body: 'Course inquiries qualified by income, intent, parent involvement.',
  },
  {
    title: 'Healthcare clinics',
    body: 'Appointment confirmations + reminders. No-show rate drops 40-60%.',
  },
  {
    title: 'BFSI',
    body: 'Loan inquiries pre-qualified: amount, income, employment, KYC readiness.',
  },
  {
    title: 'D2C / e-commerce',
    body: 'Cart abandons + COD confirmations. Spoken Hindi flow that actually converts.',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted">
            Where it shines
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Built for <span className="text-accent">high-intent</span> inbound — the kind that goes cold fast.
          </h2>
        </div>
      </div>
      <div className="mt-12 grid gap-px bg-edge md:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c) => (
          <div
            key={c.title}
            className="group relative bg-surface p-8 transition hover:bg-surface-2"
          >
            {c.tag && (
              <span className="absolute right-4 top-4 border border-accent px-2 py-0.5 text-[10px] uppercase tracking-widest text-accent">
                {c.tag}
              </span>
            )}
            <h3 className="font-display text-xl font-medium">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
