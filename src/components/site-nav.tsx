import Link from "next/link";
import { WorksTransitionLink } from "@/components/works-transition-link";

export function SiteNav() {
  const secondaryLink =
    "whitespace-nowrap rounded-full bg-ink/35 px-4 py-2 text-white transition hover:scale-95 hover:bg-ink/55";
  const primaryLink =
    "whitespace-nowrap rounded-full bg-ink px-4 py-2 text-paper transition hover:scale-95";

  return (
    <header className="fixed inset-x-0 top-8 z-50 flex justify-center px-4">
      <nav
        className="flex max-w-[calc(100vw-2rem)] items-center gap-1.5 overflow-x-auto text-[0.78rem] font-semibold"
        aria-label="Primary navigation"
      >
        <Link className={primaryLink} href="/">
          Shure
        </Link>
        <Link className={secondaryLink} href="/#about">
          About me
        </Link>
        <WorksTransitionLink className={secondaryLink}>
          My works
        </WorksTransitionLink>
        <Link className={primaryLink} href="/#contact">
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
