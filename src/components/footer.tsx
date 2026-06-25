import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-edge bg-night">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-dim">
        <div className="font-display font-semibold text-ink">
          askchimps<span className="text-accent">.</span>
        </div>
        <nav className="flex flex-wrap gap-6">
          <Link href="/pricing" className="hover:text-ink">
            Pricing
          </Link>
          <Link href="/#how" className="hover:text-ink">
            How it works
          </Link>
          <Link href="/#contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
        <div>© {new Date().getFullYear()} AskChimps Pvt Ltd · Made in India</div>
        <a
          href="mailto:hello@askchimps.ai"
          className="text-ink underline underline-offset-4"
        >
          hello@askchimps.ai
        </a>
      </div>
    </footer>
  );
}
