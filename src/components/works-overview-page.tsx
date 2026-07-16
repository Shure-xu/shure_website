import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import { visualProjects } from "@/lib/visual-projects";

const featuredWork = {
  title: "Shure Studio",
  summary:
    "一个把个人网站、内容表达和 AI 工作流串起来的开放实验室。它不只是作品集，也是一块可以持续更新的数字墙面。",
  media: "/videos/shure-about.mp4",
  tags: [
    { label: "DTNAMIC", tone: "text-[#ff36dd] bg-white" },
    { label: "VISION", tone: "text-[#595959] bg-[#d9d9d9]" },
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
              <div className="pb-6 lg:pb-10">
                <Link
                  className="group inline-flex items-start gap-2 text-[clamp(2.1rem,2.65vw,3.2rem)] font-medium leading-[0.96] tracking-normal text-white"
                  href="/#about"
                >
                  {featuredWork.title}
                  <ArrowUpRight className="mt-1 size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-6" />
                </Link>
                <p className="mt-5 max-w-[24rem] text-sm font-medium leading-[1.15] text-white/55 sm:text-base">
                  {featuredWork.summary}
                </p>
                <p className="mt-10 font-mono text-xs uppercase leading-none text-white/35">
                  01 / Ongoing personal system
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
        </section>
      </div>
      <ContactFooter />
    </main>
  );
}
