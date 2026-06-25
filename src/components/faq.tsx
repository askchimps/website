import Link from 'next/link';

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How fast is the first call?',
    a: 'We target under 60 seconds from form-fill to dial. If the lead is in active calling hours (configurable per org), it dials immediately. Outside hours, it queues for the next window.',
  },
  {
    q: 'What CRMs does it integrate with?',
    a: 'Anything that can POST a webhook — Salesforce, Zoho, HubSpot, Lead Squared, custom Google Forms, Meta Ads form submissions, WhatsApp Business. If it sends JSON, it works.',
  },
  {
    q: 'How does it qualify a lead?',
    a: 'You write the qualification questions in plain words. After each call, we extract answers + score intent (high / med / low / disqualified) so your reps only chase warm ones.',
  },
  {
    q: 'What happens on a no-pickup?',
    a: 'It retries — in the next calling section (morning → afternoon → evening) on the following day. After 3 misses, the lead is marked unreachable. Configurable per org.',
  },
  {
    q: 'How much does it cost?',
    a: (
      <>
        Transparent per-minute pricing — Pilot at $500 (one-time), monthly
        plans from $1,050 with credits rolling over up to 2 months. Full
        breakdown on{' '}
        <Link
          href="/pricing"
          className="text-accent underline underline-offset-4 hover:text-accent-dim"
        >
          our pricing page
        </Link>
        .
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-edge bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <span className="text-xs uppercase tracking-widest text-muted">
          Questions
        </span>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          Most-asked, first.
        </h2>
        <div className="mt-12 divide-y divide-edge border-y border-edge">
          {FAQ_ITEMS.map((item, i) => (
            <details key={item.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 list-none">
                <span className="font-display font-medium text-ink">
                  {item.q}
                </span>
                <span className="mt-1 text-accent transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-6 pr-8 text-sm leading-relaxed text-ink-dim">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
