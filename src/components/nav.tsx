import Link from 'next/link';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-night/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          askchimps<span className="text-accent">.</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-ink-dim md:flex">
          <a href="#how" className="hover:text-ink">
            How it works
          </a>
          <a href="#use-cases" className="hover:text-ink">
            Use cases
          </a>
          <a href="#faq" className="hover:text-ink">
            FAQ
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-accent px-4 py-2 text-sm font-semibold text-night transition hover:bg-accent-dim"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
