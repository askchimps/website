export function PricingEndCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden border border-accent bg-surface p-12 text-center md:p-16">
        <div className="glow-yellow pointer-events-none absolute inset-0" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-4xl">
            Ready to qualify every lead, automatically?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-dim">
            Start with the Pilot. If the conversations don&apos;t speak for
            themselves in 3 months, walk away — no questions, no auto-renew.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-accent-dim"
            >
              Start the Pilot →
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center border border-edge px-6 py-3 text-sm font-medium text-ink transition hover:border-ink"
            >
              Talk to sales
            </a>
          </div>
          <p className="mt-6 text-xs text-ink-dim">
            All charges are final and non-refundable. Unused minutes follow the
            standard validity window. By starting, you confirm you have read
            and accepted these terms.
          </p>
        </div>
      </div>
    </section>
  );
}
