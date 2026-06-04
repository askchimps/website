import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { Problem } from '@/components/problem';
import { HowItWorks } from '@/components/how-it-works';
import { UseCases } from '@/components/use-cases';
import { Faq } from '@/components/faq';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <UseCases />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}
