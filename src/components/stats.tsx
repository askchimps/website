const STATS = [
  { value: '60s', label: 'SLA from form-fill to first call' },
  { value: '24×7', label: 'always-on, even at 2am' },
  { value: '100%', label: 'calls transcribed + scored automatically' },
  { value: '0', label: 'sales reps required' },
];

export function Stats() {
  return (
    <section className="border-y border-edge bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-edge md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-surface px-6 py-10 text-center md:py-14"
          >
            <div className="font-display text-5xl text-accent md:text-6xl">
              {s.value}
            </div>
            <div className="mt-3 text-sm text-ink-dim">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
