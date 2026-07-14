import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";

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

const works = [
  {
    title: "Field Notes",
    summary: "把零散想法整理成有节奏的首页叙事，让一个人先被看见，再被理解。",
    image: "/images/project-field-notes.png",
    tags: [
      { label: "BRAND", tone: "text-[#b54500] bg-[#f0e4d8]" },
      { label: "HOMEPAGE", tone: "text-white bg-[#2f2f2f]" },
    ],
  },
  {
    title: "Soft Lab",
    summary: "为创作者设计轻量内容系统，让作品、笔记、服务入口自然连接。",
    image: "/images/project-soft-lab.png",
    tags: [
      { label: "SYSTEM", tone: "text-[#0074a6] bg-[#d8edf4]" },
      { label: "AI FLOW", tone: "text-white bg-[#2f2f2f]" },
    ],
  },
  {
    title: "Open Signal",
    summary: "用杂志式排版和强色块承载研究、洞察，以及可以继续执行的下一步。",
    image: "/images/project-open-signal.png",
    tags: [
      { label: "EDITORIAL", tone: "text-[#b54500] bg-[#f0e4d8]" },
      { label: "VISUAL", tone: "text-white bg-[#2f2f2f]" },
    ],
  },
  {
    title: "Mood Index",
    summary: "一个记录每日心情、灵感和小实验的界面原型，像私人电台一样慢慢更新。",
    image: "/images/portrait-workspace.png",
    tags: [
      { label: "EXPERIENCE", tone: "text-[#0074a6] bg-[#d8edf4]" },
      { label: "INTERFACE", tone: "text-white bg-[#2f2f2f]" },
    ],
  },
  {
    title: "Next Personal Site",
    summary: "正在生长中的个人站：从首页第一屏开始，把视觉、内容和真实个性一点点调出来。",
    image: "/images/project-field-notes.png",
    tags: [
      { label: "IN PROGRESS", tone: "text-[#ff6e14] bg-white" },
      { label: "WEBSITE", tone: "text-white bg-[#2f2f2f]" },
    ],
  },
];

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
          <header className="mb-10 flex items-end gap-5 border-b border-white/35 pb-5 text-white">
            <h1 className="brand-page-title shrink-0">
              <span>Visual</span> <span className="text-[#999999]">design</span>
            </h1>
          </header>

          <article className="grid gap-5 py-5 lg:grid-cols-[0.58fr_0.82fr_1.61fr]">
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

          <div className="grid gap-5 border-t border-white/15 pt-5 lg:grid-cols-3">
            {works.map((work, index) => (
              <article className="group flex flex-col" key={work.title}>
                <Link
                  aria-label={`${work.title} project`}
                  className="block aspect-[16/14] overflow-hidden rounded-[0.4rem] bg-white/10"
                  href="/#work"
                >
                  <Image
                    alt={`${work.title} project visual`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    height={1350}
                    src={work.image}
                    width={1200}
                  />
                </Link>
                <div className="grid gap-5 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <Link
                      className="text-[1.38rem] font-semibold leading-[1.05] tracking-normal text-white transition group-hover:text-white/75"
                      href="/#work"
                    >
                      {work.title}
                    </Link>
                    <span className="font-mono text-xs text-white/35">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="max-w-[31rem] text-sm font-medium leading-[1.18] text-white/50">
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
