export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-yellow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 border border-edge px-3 py-1 text-xs uppercase tracking-widest text-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              AI voice agents · India
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Your leads get called in{' '}
              <span className="text-accent">60 seconds.</span>
              <br />
              Not 60 minutes.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-dim">
              The moment a lead hits your form, an AskChimps voice agent picks up the phone in Hindi + English, qualifies them, and hands the warm ones to your team. You sleep. We dial.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-accent-dim"
              >
                Get a demo →
              </a>
              <a
                href="#how"
                className="inline-flex items-center border border-edge px-6 py-3 text-sm font-medium text-ink transition hover:border-ink"
              >
                See how it works
              </a>
            </div>
          </div>
          <CallMock />
        </div>
      </div>
    </section>
  );
}

function CallMock() {
  return (
    <div className="relative">
      <div className="border border-edge bg-surface p-6 shadow-[0_8px_40px_-12px_rgba(250,193,46,0.25)]">
        <div className="flex items-center justify-between border-b border-edge pb-3 text-xs uppercase tracking-widest text-muted">
          <span className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-rose" />
            Live call · 00:42
          </span>
          <span className="text-accent">latency 132ms</span>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <div className="grid size-10 place-items-center bg-accent font-display text-sm font-semibold text-night">
            PJ
          </div>
          <div>
            <div className="text-sm font-medium">Priya Jain</div>
            <div className="text-xs text-muted">
              Inbound — 3BHK Andheri inquiry
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-3 text-sm">
          <Bubble who="agent" text="Hi Priya, this is Riya from Acme Interiors. Is now a good time?" />
          <Bubble who="lead" text="Haan ji, batao." />
          <Bubble
            who="agent"
            text="Quick 30 seconds — what kind of property are you redesigning and what's your timeline?"
          />
          <Bubble who="lead" text="3BHK in Andheri West. We want to move in by March." />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-edge pt-4 text-xs">
          <Tag label="Intent" value="High" tone="accent" />
          <Tag label="Budget" value="₹18L" tone="teal" />
          <Tag label="Next" value="Brief" tone="dim" />
        </div>
      </div>
    </div>
  );
}

function Bubble({ who, text }: { who: 'agent' | 'lead'; text: string }) {
  const isAgent = who === 'agent';
  return (
    <div className={`flex ${isAgent ? '' : 'justify-end'}`}>
      <div
        className={`max-w-[85%] px-3 py-2 text-[13px] leading-snug ${
          isAgent
            ? 'border border-edge bg-surface-2 text-ink'
            : 'bg-accent/15 text-ink'
        }`}
      >
        <span className="mr-2 text-[10px] uppercase tracking-widest text-muted">
          {isAgent ? 'agent' : 'lead'}
        </span>
        {text}
      </div>
    </div>
  );
}

function Tag({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'accent' | 'teal' | 'dim';
}) {
  const color =
    tone === 'accent'
      ? 'text-accent'
      : tone === 'teal'
        ? 'text-teal'
        : 'text-ink-dim';
  return (
    <div className="border border-edge px-3 py-2">
      <div className="text-[10px] uppercase tracking-widest text-muted">
        {label}
      </div>
      <div className={`mt-0.5 font-display ${color}`}>{value}</div>
    </div>
  );
}
