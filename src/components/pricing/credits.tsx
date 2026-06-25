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

      </div>
    </section>
  );
}
