import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PricingHero } from '@/components/pricing/hero';
import { PricingPilot } from '@/components/pricing/pilot';
import { PricingPlans } from '@/components/pricing/plans';
import { PricingCompare } from '@/components/pricing/compare';
import { PricingCredits } from '@/components/pricing/credits';
import { PricingFaq } from '@/components/pricing/faq';
import { PricingEndCta } from '@/components/pricing/end-cta';

export const metadata: Metadata = {
  title: 'Pricing — AskChimps',
  description:
    'Transparent per-minute pricing for AskChimps AI voice agents. No hidden fees, no surprises. Pay only for what you use.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <PricingHero />
      <PricingPilot />
      <PricingPlans />
      <PricingCompare />
      <PricingCredits />
      <PricingFaq />
      <PricingEndCta />
      <Footer />
    </div>
  );
}
