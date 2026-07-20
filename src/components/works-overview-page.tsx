import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import { WorksTransitionLink } from "@/components/works-transition-link";
import { visualProjects } from "@/lib/visual-projects";
import { workCategories } from "@/lib/work-categories";

const featuredWork = {
  title: "Shure Studio",
  summary: "开放视界！Try new things！",
  media: "/videos/shure-about.mp4",
  tags: [
    { label: "GRAPHIC", tone: "text-[#ff36dd] bg-white" },
    { label: "VISUAL", tone: "text-[#595959] bg-[#d9d9d9]" },
  ],
};

function WorkTags({
  tags,
  compact = false,
}: {
  tags: Array<{ label: string; tone: string }>;
  compact?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          className={`${tag.tone} rounded-full px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase leading-none ${compact ? "px-2.5" : ""}`}
          key={tag.label}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}

export function WorksOverviewPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-4 pb-16">
        <SiteNav />

        <section className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          <header className="mb-10 flex items-end gap-5 border-b border-white pb-5 text-white">
            <h1 className="brand-page-title shrink-0">
              <span>Visual</span> <span className="text-[#999999]">design</span>
            </h1>
          </header>

          <article className="grid gap-5 pb-10 lg:pb-16 lg:grid-cols-[0.58fr_0.82fr_1.61fr]">
            <div className="flex min-h-[33rem] flex-col justify-between lg:min-h-[40.5rem]">
              <WorkTags tags={featuredWork.tags} />
              <div>
                <h2 className="text-[clamp(2.1rem,2.65vw,3.2rem)] font-medium leading-[0.96] tracking-normal text-white">
                  {featuredWork.title}
                </h2>
                <p className="mt-5 max-w-[24rem] text-sm font-medium leading-[1.15] text-white/55 sm:text-base">
                  {featuredWork.summary}
                </p>
              </div>
            </div>
            <div className="hidden min-h-[33rem] lg:block lg:min-h-[40.5rem]" />
            <Link
              aria-label={`${featuredWork.title} project`}
              className="group block h-[33rem] overflow-hidden rounded-[0.4rem] bg-white/10 lg:h-[40.5rem]"
              href="/#about"
            >
              <video
                autoPlay
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loop
                muted
                playsInline
                preload="metadata"
                src={featuredWork.media}
              />
            </Link>
          </article>

          <div className="grid gap-x-5 gap-y-10 lg:gap-y-16 lg:grid-cols-3">
            {visualProjects.map((work) => (
              <article className="group flex flex-col" key={work.title}>
                <Link
                  aria-label={`${work.title} project`}
                  className={`block aspect-[16/14] overflow-hidden rounded-[0.4rem] transition-transform duration-700 ease-out hover:scale-[0.98] ${
                    work.image.fit === "contain" ? "bg-white" : "bg-white/10"
                  }`}
                  href={work.href}
                >
                  {work.cardVideo ? (
                    <video
                      autoPlay
                      className={`h-full w-full object-cover ${work.cardVideoScale ?? ""}`}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      src={work.cardVideo}
                    />
                  ) : (
                    <Image
                      alt={work.image.alt}
                      className={`h-full w-full ${
                        work.image.fit === "contain"
                          ? work.image.scale === false
                            ? "object-contain"
                            : "scale-[1.05] object-contain"
                          : "object-cover"
                      }`}
                      height={work.image.height}
                      src={work.image.src}
                      width={work.image.width}
                    />
                  )}
                </Link>
                <div className="grid gap-3.5 pt-4 sm:pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <Link
                      className="font-taipei text-[24px] font-normal leading-[1.15] tracking-normal text-white transition group-hover:text-white/75"
                      href={work.href}
                    >
                      {work.title}
                    </Link>
                    <span className="shrink-0 font-montserrat text-sm font-medium leading-none text-white/55 sm:text-[0.95rem]">
                      {work.index}
                    </span>
                  </div>
                  <p className="max-w-[31rem] text-[0.82rem] font-medium leading-[1.45] text-white/62 sm:text-sm">
                    {work.summary}
                  </p>
                  <WorkTags compact tags={work.tags} />
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 lg:mt-24">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Selected Visual
            </h2>
            <div className="flex flex-wrap gap-2">
              {workCategories.map((category) => (
                <WorksTransitionLink
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category.slug === "visual"
                      ? "bg-white text-ink"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                  key={category.slug}
                  transition={category.slug}
                >
                  {category.label}
                </WorksTransitionLink>
              ))}
            </div>
          </section>
        </section>
      </div>
      <ContactFooter />
    </main>
  );
}
