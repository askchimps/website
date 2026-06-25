type Row = {
  label: string;
  pilot: string;
  climb: string;
  canopy: string;
  apex: string;
  enterprise: string;
};

const ROWS: Row[] = [
  {
    label: 'Commitment',
    pilot: 'One-time',
    climb: 'Monthly',
    canopy: 'Monthly',
    apex: 'Monthly',
    enterprise: 'Annual',
  },
  {
    label: 'Price',
    pilot: '$500',
    climb: '$1,050 / mo',
    canopy: '$2,000 / mo',
    apex: '$5,000 / mo',
    enterprise: 'Custom',
  },
  {
    label: 'Included minutes',
    pilot: '2,500',
    climb: '3,000',
    canopy: '8,000',
    apex: '25,000',
    enterprise: '25,000+',
  },
  {
    label: 'Per-minute rate',
    pilot: '$0.20',
    climb: '$0.35',
    canopy: '$0.25',
    apex: '$0.20',
    enterprise: '< $0.20',
  },
  {
    label: 'Concurrent calls',
    pilot: '10',
    climb: '10',
    canopy: '10',
    apex: '15',
    enterprise: 'Custom',
  },
  {
    label: 'Billing pulse',
    pilot: '1 min',
    climb: '1 min',
    canopy: '1 min',
    apex: '30 sec',
    enterprise: 'Custom',
  },
  {
    label: 'Credit validity',
    pilot: '3 months',
    climb: '2 months',
    canopy: '2 months',
    apex: '2 months',
    enterprise: 'Custom',
  },
  {
    label: 'Indian phone number',
    pilot: '1 included',
    climb: '+$10 / mo',
    canopy: '1 included · extras +$10',
    apex: '1 included · extras +$10',
    enterprise: 'Custom',
  },
  {
    label: 'Truecaller verification',
    pilot: 'Included',
    climb: '+$30 / mo',
    canopy: '+$30 / mo',
    apex: '1 included · extras +$30',
    enterprise: 'Custom',
  },
];

export function PricingCompare() {
  return (
    <section id="compare" className="mx-auto max-w-6xl px-6 pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl">
          Compare at a glance
        </h2>
        <p className="mt-4 text-ink-dim">
          Same fully managed product across every plan. The per-minute cost is
          what changes.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto border border-edge bg-surface">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-edge bg-surface-2">
              <Th>Feature</Th>
              <Th>Pilot</Th>
              <Th>Climb</Th>
              <Th highlight>Canopy</Th>
              <Th>Apex</Th>
              <Th>Enterprise</Th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr
                key={r.label}
                className={i === ROWS.length - 1 ? '' : 'border-b border-edge'}
              >
                <Td label>{r.label}</Td>
                <Td>{r.pilot}</Td>
                <Td>{r.climb}</Td>
                <Td highlight>{r.canopy}</Td>
                <Td>{r.apex}</Td>
                <Td>{r.enterprise}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-xs text-muted">
        Fully managed service — CRM webhooks, analytics, transcripts &
        recordings, onboarding and human support are included on every plan.
      </p>
    </section>
  );
}

function Th({
  children,
  highlight,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <th
      className={`px-5 py-4 text-left font-display text-xs font-semibold uppercase tracking-widest ${
        highlight ? 'bg-accent/5 text-accent' : 'text-ink'
      }`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  highlight,
  label,
}: {
  children: React.ReactNode;
  highlight?: boolean;
  label?: boolean;
}) {
  return (
    <td
      className={`px-5 py-4 ${highlight ? 'bg-accent/5' : ''} ${
        label
          ? 'text-ink-dim'
          : 'font-display font-medium text-ink'
      }`}
    >
      {children}
    </td>
  );
}
