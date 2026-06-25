const FAQ_ITEMS = [
  {
    q: 'What happens if I run out of minutes mid-month?',
    a: "You can purchase extra credit packs at your plan's per-minute rate, any time. They drop into your balance immediately and follow the same 2-month rolling expiry as your monthly credits. We notify you at 80% usage so you can top up before you run dry — no surprise overage bills.",
  },
  {
    q: 'When does the billing cycle reset?',
    a: 'All accounts share a single monthly cycle that renews on a fixed date — your subscription fee, the next month of included minutes, and any active add-ons all renew together. When you start mid-cycle, your first invoice is pro-rated to the day (both the subscription fee and the included minutes), so you never pay for unused calendar days. From the next cycle onward you settle into the standard monthly rhythm.',
  },
  {
    q: 'What if a renewal payment fails?',
    a: "Service auto-pauses on the cycle date if payment hasn't cleared — calls stop, but any unused credits in your balance are frozen, not lost. The moment payment goes through, service resumes and the new month's minutes are credited. We never auto-extend the next month's credit before payment is received.",
  },
  {
    q: 'Can I switch plans?',
    a: "Yes, any time. Upgrades take effect immediately — we pro-rate the difference for the rest of the current cycle and adjust the included minutes accordingly. Downgrades take effect on the next cycle date. Carry-over credits move with you in either direction.",
  },
  {
    q: 'Why does the Pilot give credits 3 months but monthly plans only 2?',
    a: 'The Pilot is one-time and meant to give you space to launch, learn, and iterate without billing pressure. Monthly plans assume a steadier flow, so a 2-month rolling buffer keeps things flexible without letting balances grow indefinitely.',
  },
  {
    q: 'What is the concurrent call limit?',
    a: 'Climb and Canopy run up to 10 simultaneous calls. Apex runs up to 15. Enterprise plans can go higher — we provision capacity to match your committed volume. Concurrency limits cap how many leads we can call at the exact same moment, not your total daily throughput.',
  },
  {
    q: 'What counts as a "minute"?',
    a: 'Connected, conversational time between our agent and a lead — billed in "pulses" (rounded up to the next pulse). Failed dials, busy lines, and voicemail drops are not billed.',
  },
  {
    q: 'What is a billing pulse?',
    a: 'A pulse is the smallest billable increment of a call. Pilot, Climb, and Canopy use a 1-minute pulse — a 10-second call bills as 1 minute, a 70-second call bills as 2 minutes. Apex uses a 30-second pulse — a 10-second call bills as 30 seconds, a 70-second call bills as 1m 30s. The 30-second pulse means Apex pays roughly half as much for very short calls (busy "not interested" rejections, voicemail-style hangups, etc.), in addition to the lower per-minute rate.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. The Pilot fee covers your onboarding. Monthly plans do not carry a separate setup charge.',
  },
  {
    q: 'Are payments refundable?',
    a: 'No. All charges — Pilot fee, monthly subscriptions, add-ons, and overage credit packs — are final and non-refundable once paid. Unused minutes remain usable within their normal validity window (3 months for the Pilot, 2-month rolling for monthly plans). If you cancel, you keep access through the end of the cycle you have already paid for; no partial refund is issued.',
  },
  {
    q: 'What about the phone number and Truecaller verification?',
    a: 'During the Pilot we include 1 Indian phone number AND Truecaller verification on it — both free for the full 3 months. On monthly plans: Climb includes neither (both available as paid add-ons); Canopy includes 1 Indian number (Truecaller still optional); Apex includes 1 number that is Truecaller-verified by default. Additional numbers are $10/month each, and Truecaller verification on each additional number is $30/month.',
  },
  {
    q: 'Can I cancel?',
    a: "Yes. The Pilot is one-time so there's nothing to cancel. Monthly plans can be cancelled before the next cycle date — you keep access through the end of the current cycle (which you've already paid for), and any unexpired credits remain usable within their 2-month window.",
  },
];

export function PricingFaq() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <span className="text-xs uppercase tracking-widest text-muted">
        Questions
      </span>
      <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
        Pricing, no fine print.
      </h2>
      <div className="mt-12 divide-y divide-edge border-y border-edge">
        {FAQ_ITEMS.map((item, i) => (
          <details key={item.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
              <span className="font-display font-medium text-ink">
                {item.q}
              </span>
              <span className="mt-1 text-accent transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pb-6 pr-8 text-sm leading-relaxed text-ink-dim">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
