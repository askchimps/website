const STEPS = [
  {
    n: '01',
    title: 'Connect your form',
    body: 'Paste the AskChimps webhook into your lead-capture form. CRM, WhatsApp, Meta Ads, Google Forms — anything that can POST.',
  },
  {
    n: '02',
    title: 'AI agent dials',
    body: 'Within 60 seconds of the lead landing, our voice agent calls, opens with your script, and asks your qualification questions.',
  },
  {
    n: '03',
    title: 'Score + handoff',
    body: 'Every transcript gets analysed. High-intent leads flag your team; busy ones get re-called next section; refusals get tagged disqualified.',
  },
  {
    n: '04',
    title: 'You close warm only',
    body: 'Your reps wake up to a list of qualified leads ready to talk. No dialing, no chasing, no 11pm form-fills lost.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-edge bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <span className="text-xs uppercase tracking-widest text-muted">
          How it works
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Set it up once. <span className="text-accent">It runs forever.</span>
        </h2>
        <div className="mt-16 grid gap-px bg-edge md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-surface p-8 transition hover:bg-surface-2"
            >
              <div className="font-display text-3xl text-accent">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
