export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted">
            The problem
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Most of your leads die between{' '}
            <span className="text-accent">form-fill</span> and{' '}
            <span className="text-accent">first call</span>.
          </h2>
        </div>
        <div className="space-y-6 text-ink-dim">
          <p>
            A lead fills your form at 11pm. Your SDR sees it at 10am. By 11am they're
            already on a competitor's call.
          </p>
          <ul className="space-y-3">
            {[
              '78% of buyers go with the vendor who responds first.',
              'After 5 minutes, your odds of qualifying a lead drop 80%.',
              'Most teams take 24+ hours to make first contact.',
            ].map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
