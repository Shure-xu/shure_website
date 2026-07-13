import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import { type WorkCategory, workCategories } from "@/lib/work-categories";

type DynamicWorkCategory = Extract<WorkCategory, { slug: "dynamic" }>;
type DynamicWorkKey = "geometry" | "hello";

type DynamicWorkPageProps = {
  category: DynamicWorkCategory;
  currentWork: DynamicWorkKey;
};

const dynamicWorkDescription =
  "《他们记忆中存在的几何》以情感化设计为内核，聚焦阿尔茨海默症患者的精神世界。从轻中度患者的自传体记忆中提取珍贵片段，将阳台花园、暗房光影、荷塘夏日等鲜活回忆，转为治愈的动态视觉语言。以“门”为沟通隐喻，借鱼眼镜头模拟记忆的模糊与清晰用碎片化动态、柔和光影还原患者脑海中不曾褪色的时光。从本能层的感官触动，到行为层的互动感知，再到反思层的情感共鸣，搭建公众与患者的心灵桥梁。作品转变沉重的病症叙事，以第一人称的生命视觉叙事唤醒社会关怀，让被遗忘的时光被看见，以设计传递包容，守护每一段珍贵的生命记忆。";

const nihaoWorkDescription =
  "“你好”创意动态设计将摩斯密码与汉语拼音相结合，构建含蓄地向他人表达自己的“沟通方式”。我希望通过这一方式改善回避型倾向者社交困窘的现状，缓解他们对社交的恐惧。";

const dynamicWorks = [
  {
    description: dynamicWorkDescription,
    href: "/works/dynamic",
    key: "geometry",
    label: "他们记忆中的几何",
    title: "他们记忆中存在的几何",
    videoContainerClass: "aspect-video",
    videoObjectClass: "object-cover",
  },
  {
    description: nihaoWorkDescription,
    href: "/works/dynamic2",
    key: "hello",
    label: "你好：",
    title: "你好：",
    videoContainerClass: "h-[min(84vh,60rem)] min-h-[36rem]",
    videoObjectClass: "object-contain",
    videoSrc: "/videos/nihao.mp4",
  },
] satisfies Array<{
  description: string;
  href: string;
  key: DynamicWorkKey;
  label: string;
  title: string;
  videoContainerClass: string;
  videoObjectClass: string;
  videoSrc?: string;
}>;

export function DynamicWorkPage({
  category,
  currentWork,
}: DynamicWorkPageProps) {
  const selectedWork =
    dynamicWorks.find((work) => work.key === currentWork) ?? dynamicWorks[0];
  const isWhitePage = currentWork === "hello";
  const pageColorClass = isWhitePage ? "bg-white text-ink" : "bg-black text-white";
  const titleColorClass = isWhitePage ? "text-ink" : "text-white";
  const bodyColorClass = isWhitePage ? "text-ink/72" : "text-white/72";
  const navBorderClass = isWhitePage ? "border-ink/20" : "border-white/20";
  const navCurrentClass = isWhitePage ? "text-ink" : "text-white";
  const navInactiveClass = isWhitePage ? "text-ink/40" : "text-white/45";
  const categoryCurrentClass = isWhitePage
    ? "bg-ink text-paper"
    : "bg-white text-ink";
  const categoryInactiveClass = isWhitePage
    ? "bg-ink/10 text-ink hover:bg-ink/15"
    : "bg-white/15 text-white hover:bg-white/25";
  const sectionBorderClass = isWhitePage ? "border-ink/15" : "border-white/15";

  return (
    <main className={`min-h-screen ${pageColorClass}`}>
      <div className="px-4 pb-16">
        <SiteNav />

        <section className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          <div
            className={`w-4/5 overflow-hidden rounded-[0.4rem] bg-black ${selectedWork.videoContainerClass}`}
          >
            <video
              className={`h-full w-full ${selectedWork.videoObjectClass}`}
              src={selectedWork.videoSrc ?? category.heroVideo}
              aria-label={`${category.title} featured video`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          <section className="mt-5 grid gap-5">
            <div className={`p-5 sm:p-7 lg:p-8 ${titleColorClass}`}>
              <h1 className="dynamic-work-title max-w-5xl">
                {selectedWork?.title}
              </h1>
            </div>

            <div className={`p-5 sm:p-7 lg:p-8 ${titleColorClass}`}>
              <p
                className={`max-w-[48rem] text-left font-['Taipei_Sans_TC_Beta',ui-sans-serif,sans-serif] text-[20px] font-normal leading-[1.6] ${bodyColorClass}`}
              >
                {selectedWork.description}
              </p>
            </div>

            <nav
              className={`p-5 sm:p-7 ${titleColorClass}`}
              aria-label={`${category.label} work jump links`}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {dynamicWorks.map((work) => (
                  <Link
                    className={`group flex items-center justify-between gap-4 border-b py-3 transition hover:opacity-65 ${navBorderClass} ${
                      work.key === currentWork ? navCurrentClass : navInactiveClass
                    }`}
                    href={work.href}
                    key={work.key}
                    scroll
                  >
                    <span className="text-2xl font-semibold leading-none">
                      {work.label}
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                ))}
              </div>
            </nav>

            <div className="overflow-hidden rounded-[0.4rem] bg-white">
              <Image
                className="h-full min-h-[24rem] w-full object-cover sm:min-h-[34rem] lg:min-h-[42rem]"
                src={category.image}
                alt={`${category.title} work image display`}
                width={1481}
                height={1291}
                priority
              />
            </div>
          </section>

          <div className="mb-6 mt-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Selected {category.label}
            </h2>
            <div className="flex flex-wrap gap-2">
              {workCategories.map((item) => (
                  <Link
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      item.slug === category.slug
                        ? categoryCurrentClass
                        : categoryInactiveClass
                    }`}
                    href={item.href}
                    key={item.slug}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={`grid gap-5 border-t pt-5 lg:grid-cols-3 ${sectionBorderClass}`}>
            {category.projects.map((work, index) => (
              <article
                className="group flex min-h-[22rem] flex-col justify-between rounded-[0.4rem] bg-white p-5 text-ink transition hover:-translate-y-1 sm:p-7"
                id={`${category.slug}-work-${index + 1}`}
                key={work.title}
              >
                <div>
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-ink/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-3xl font-semibold leading-none">
                    {work.title}
                  </h3>
                  <p className="mt-5 max-w-[29rem] text-sm font-medium leading-5 text-ink/55">
                    {work.summary}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span
                      className="rounded-full bg-ink px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase leading-none text-paper"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
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
