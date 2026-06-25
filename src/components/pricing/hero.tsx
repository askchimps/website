export function PricingHero() {
  return (
    <section className="relative overflow-hidden border-b border-edge">
      <div className="glow-yellow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 border border-edge px-3 py-1 text-xs uppercase tracking-widest text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            Pricing · AI voice agents
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Pay for{' '}
            <span className="text-accent">conversations</span> that close
            deals.
          </h1>
          <p className="mt-6 text-lg text-ink-dim">
            Every inbound lead called within 60 seconds. Qualified before your
            reps even see them. Transparent per-minute pricing. Start with a
            Pilot, scale when you see the ROI.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-dim">
            <TrustItem text="No setup fees" />
            <TrustItem text="Cancel anytime after Pilot" />
            <TrustItem text="Credits roll over up to 2 months" />
            <TrustItem text="Volume discounts beyond 25,000 min" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="size-1.5 rounded-full bg-accent" />
      {text}
    </div>
  );
}
