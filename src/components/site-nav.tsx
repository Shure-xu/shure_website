import Link from "next/link";
import { HomeTransitionLink } from "@/components/home-transition-link";
import { WorksTransitionLink } from "@/components/works-transition-link";
import { workCategories } from "@/lib/work-categories";

export function SiteNav() {
  const secondaryLink =
    "whitespace-nowrap rounded-full bg-ink/35 px-5 py-2.5 text-white transition hover:scale-95 hover:bg-ink/55";
  const primaryLink =
    "whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-paper transition hover:scale-95";

  return (
    <header className="fixed inset-x-0 top-8 z-50 px-4">
      <nav
        className="flex w-full flex-wrap items-center justify-center gap-2 overflow-visible text-[0.94rem] font-semibold sm:flex-nowrap sm:justify-between"
        aria-label="Primary navigation"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:flex-nowrap">
          <HomeTransitionLink className={primaryLink}>
            Shure
          </HomeTransitionLink>
          <Link className={secondaryLink} href="/about">
            About me
          </Link>
          <div className="group relative flex flex-col items-center">
            <WorksTransitionLink className={secondaryLink} transition="dynamic">
              My works
            </WorksTransitionLink>
            <div className="pointer-events-none absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="grid gap-1 rounded-[0.4rem] bg-white/95 p-1.5 text-ink shadow-[0_18px_45px_rgba(20,20,20,0.14)] backdrop-blur-xl">
                {workCategories.map((category) => (
                  <WorksTransitionLink
                    className="whitespace-nowrap rounded-[0.32rem] px-4 py-2 text-sm transition hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper"
                    key={category.slug}
                    transition={category.slug}
                  >
                    {category.label}
                  </WorksTransitionLink>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Link className={primaryLink} href="#contact">
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
