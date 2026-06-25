type Plan = {
  name: string;
  tagline: string;
  price: string;
  perMin: string;
  minutes: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: 'Climb',
    tagline: 'For teams qualifying their first wave of inbound leads.',
    price: '$1,050',
    perMin: '$0.35 / min',
    minutes: '3,000 min included',
    features: [
      '3,000 voice minutes / month',
      'Up to 10 concurrent calls',
      '1-minute billing pulse',
      'Fully managed AI voice agent — we tune & improve it continuously',
      'Full CRM & webhook integrations',
      'Complete analytics, transcripts & recordings',
      'Complete onboarding & support',
      'Unused credits roll over up to 2 months',
      'Phone number & Truecaller verification available as add-ons',
    ],
    cta: 'Choose Climb',
  },
  {
    name: 'Canopy',
    tagline: 'Best value for sales teams running steady inbound volume.',
    price: '$2,000',
    perMin: '$0.25 / min',
    minutes: '8,000 min included',
    featured: true,
    badge: 'Most popular',
    features: [
      '8,000 voice minutes / month',
      'Up to 10 concurrent calls',
      '1-minute billing pulse',
      '1 Indian phone number included — extras +$10/mo each',
      'Truecaller verification optional (+$30/mo)',
      'Everything in Climb — same fully managed service',
      '~29% lower per-minute cost vs. Climb',
    ],
    cta: 'Choose Canopy',
  },
  {
    name: 'Apex',
    tagline:
      'High-volume operations that need the lowest standard unit cost.',
    price: '$5,000',
    perMin: '$0.20 / min',
    minutes: '25,000 min included',
    features: [
      '25,000 voice minutes / month',
      'Up to 15 concurrent calls',
      '30-second billing pulse — pay half for short calls',
      '1 Truecaller-verified Indian phone number included',
      'Additional numbers +$10/mo · extra Truecaller +$30/mo',
      'Everything in Canopy — same fully managed service',
      '43% lower per-minute cost vs. Climb',
    ],
    cta: 'Choose Apex',
  },
];

export function PricingPlans() {
  return (
    <section id="plans" className="mx-auto max-w-6xl px-6 pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl">
          Monthly recurring plans
        </h2>
        <p className="mt-4 text-ink-dim">
          Same fully managed product on every plan. The only thing that changes
          as you scale: your per-minute cost.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>

      <Included />
      <AddOns />
      <Enterprise />
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex flex-col border bg-surface p-8 transition hover:-translate-y-1 ${
        plan.featured
          ? 'border-accent shadow-[0_8px_40px_-12px_rgba(250,193,46,0.4)]'
          : 'border-edge hover:border-ink-dim'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-night">
          {plan.badge}
        </span>
      )}
      <div className="font-display text-2xl font-semibold">{plan.name}</div>
      <p className="mt-2 min-h-[3rem] text-sm text-ink-dim">{plan.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-semibold">
          {plan.price}
        </span>
        <span className="text-sm text-ink-dim">/ month</span>
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-widest text-muted">
        Billed monthly · non-refundable
      </div>
      <div className="mt-2 inline-flex w-fit bg-accent/15 px-2 py-1 text-xs font-semibold text-accent">
        {plan.perMin} · {plan.minutes}
      </div>

      <ul className="mt-6 flex-1 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="/#contact"
        className={`mt-8 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold transition ${
          plan.featured
            ? 'bg-accent text-night hover:bg-accent-dim'
            : 'border border-edge text-ink hover:border-ink'
        }`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

const INCLUDED_ITEMS = [
  'Fully managed AI bot — continuously improved by our team',
  'AI voice agents tuned to your qualification script',
  'Full CRM & webhook integrations',
  'Complete analytics dashboard',
  'Full call transcripts & recordings',
  'Complete onboarding & human support',
  '2-month rolling credit carry-over',
];

function Included() {
  return (
    <div className="mt-6 border border-edge bg-surface p-8 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted">
            Included on every monthly plan
          </span>
          <h3 className="mt-2 font-display text-2xl">
            One managed product. Same on Climb, Canopy, and Apex.
          </h3>
        </div>
      </div>
      <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {INCLUDED_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <Check />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddOns() {
  return (
    <div className="mt-6 border border-edge bg-surface p-8 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted">
            Add-ons · per number / month
          </span>
          <h3 className="mt-2 font-display text-2xl">
            Phone numbers & verification
          </h3>
        </div>
        <div className="text-xs text-accent">
          ★ Both included free for the entire 3-month Pilot
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <AddOnRow
          name="Indian phone number"
          price="$10"
          body="Dedicated Indian outbound number assigned to your account. Swappable any time."
        />
        <AddOnRow
          name="Truecaller verification"
          price="$30"
          body="Your number shows as a verified business identity on Truecaller — boosts pickup rates significantly."
        />
      </div>

      <div className="mt-5 grid gap-2 text-xs text-ink-dim sm:grid-cols-3">
        <div>
          <span className="font-semibold text-ink">Climb:</span> no number
          included — both add-ons paid.
        </div>
        <div>
          <span className="font-semibold text-ink">Canopy:</span> 1 number
          included · extras +$10 · Truecaller +$30.
        </div>
        <div>
          <span className="font-semibold text-ink">Apex:</span> 1 number +
          Truecaller verification included · extras priced per row.
        </div>
      </div>
      <p className="mt-4 text-xs text-ink-dim">
        All add-ons billed alongside your monthly subscription. Add or remove
        anytime; pro-rated to the day.
      </p>
    </div>
  );
}

function AddOnRow({
  name,
  price,
  body,
}: {
  name: string;
  price: string;
  body: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border border-edge bg-night p-5">
      <div>
        <div className="font-display font-medium">{name}</div>
        <p className="mt-1 text-sm text-ink-dim">{body}</p>
      </div>
      <div className="shrink-0 text-right">
        <div className="font-display text-2xl font-semibold text-accent">
          {price}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-muted">
          / month
        </div>
      </div>
    </div>
  );
}

function Enterprise() {
  return (
    <div className="mt-6 grid items-center gap-6 border border-edge bg-surface p-8 md:grid-cols-[1fr_auto] md:p-10">
      <div>
        <h3 className="font-display text-2xl">Enterprise · Custom</h3>
        <p className="mt-3 max-w-2xl text-ink-dim">
          Running more than 25,000 minutes a month? We negotiate per-minute
          rates against your committed volume and sign custom commercial terms.
          Same fully managed product — just a lower unit cost. The more you
          run, the lower it goes.
        </p>
      </div>
      <div className="md:text-right">
        <div className="font-display text-2xl font-semibold text-accent">
          Let&apos;s talk
        </div>
        <a
          href="/#contact"
          className="mt-3 inline-flex items-center bg-accent px-5 py-3 text-sm font-semibold text-night transition hover:bg-accent-dim"
        >
          Contact sales →
        </a>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className="mt-1 shrink-0 text-accent"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
