import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import { WorksTransitionLink } from "@/components/works-transition-link";
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

const geometryGalleryImages = [
  {
    src: "/images/dynamic-geometry-08.jpg",
    alt: "他们记忆中存在的几何作品展示 01",
    width: 3579,
    height: 5265,
  },
  {
    src: "/images/dynamic-geometry-09.jpg",
    alt: "他们记忆中存在的几何作品展示 02",
    width: 3579,
    height: 5265,
  },
  {
    src: "/images/dynamic-geometry-10.jpg",
    alt: "他们记忆中存在的几何作品展示 03",
    width: 3579,
    height: 5250,
  },
] as const;

const helloGalleryImages = [
  {
    src: "/images/dynamic-hello-38.jpg",
    alt: "你好：作品展示 01",
    width: 2666,
    height: 1635,
  },
  {
    src: "/images/dynamic-hello-39.jpg",
    alt: "你好：作品展示 02",
    width: 2666,
    height: 961,
  },
  {
    src: "/images/dynamic-hello-40.jpg",
    alt: "你好：作品展示 03",
    width: 2666,
    height: 961,
  },
  {
    src: "/images/dynamic-hello-41.jpg",
    alt: "你好：作品展示 04",
    width: 2666,
    height: 1635,
  },
] as const;

const dynamicWorks = [
  {
    description: dynamicWorkDescription,
    href: "/works/dynamic",
    key: "geometry",
    label: "他们记忆中的几何",
    pageTitle: "D/0.1",
    title: "他们记忆中存在的几何",
    videoContainerClass: "aspect-video",
    videoObjectClass: "object-cover",
  },
  {
    description: nihaoWorkDescription,
    href: "/works/dynamic2",
    key: "hello",
    label: "你好：",
    pageTitle: "D/0.2",
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
  pageTitle: string;
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
  const pageTitleBorderClass = isWhitePage
    ? "border-ink/25"
    : "border-white";
  const videoBackgroundClass = isWhitePage ? "bg-white" : "bg-black";
  const workImageDisplays =
    currentWork === "geometry"
      ? geometryGalleryImages
      : helloGalleryImages;
  const workImageClass = "h-auto w-full";

  return (
    <main className={`min-h-screen ${pageColorClass}`}>
      <div className="px-4 pb-16">
        <SiteNav />

        <section className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          <header
            className={`mb-10 flex items-end gap-5 border-b pb-5 ${pageTitleBorderClass} ${titleColorClass}`}
          >
            <h1
              className={`${
                currentWork === "geometry"
                  ? "brand-page-title"
                  : "dynamic-work-page-title"
              } shrink-0`}
            >
              {currentWork === "geometry" ? (
                <>
                  <span>Dynamic</span>{" "}
                  <span className="text-[#999999]">design</span>
                </>
              ) : (
                selectedWork.pageTitle
              )}
            </h1>
          </header>

          <div
            className={`mx-auto w-full overflow-hidden rounded-[0.4rem] lg:w-[104%] lg:max-w-none ${videoBackgroundClass} ${selectedWork.videoContainerClass}`}
          >
            <video
              className={`h-full w-full ${videoBackgroundClass} ${selectedWork.videoObjectClass}`}
              src={selectedWork.videoSrc ?? category.heroVideo}
              aria-label={`${category.title} featured video`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          <section className="mt-5 grid gap-5 lg:mt-16 lg:gap-6">
            <div
              className={`p-5 sm:p-7 lg:px-8 lg:pt-8 lg:pb-3 ${titleColorClass}`}
            >
              <h1 className="dynamic-work-title max-w-5xl">
                {selectedWork?.title}
              </h1>
            </div>

            <div
              className={`p-5 sm:p-7 lg:px-8 lg:pt-2 lg:pb-8 ${titleColorClass}`}
            >
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

            {workImageDisplays.map((image, index) => (
              <div
                className="overflow-hidden rounded-[0.4rem] bg-white"
                key={image.src}
              >
                <Image
                  className={workImageClass}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index === 0}
                />
              </div>
            ))}
          </section>

          <div className="mb-6 mt-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Selected {category.label}
            </h2>
              <div className="flex flex-wrap gap-2">
                {workCategories.map((item) => (
                  <WorksTransitionLink
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      item.slug === category.slug
                        ? categoryCurrentClass
                        : categoryInactiveClass
                    }`}
                    key={item.slug}
                    transition={item.slug}
                >
                  {item.label}
                </WorksTransitionLink>
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
