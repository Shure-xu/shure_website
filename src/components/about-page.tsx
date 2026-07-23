import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AboutHero } from "@/components/about-hero";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";

const practices = [
  {
    index: "01",
    title: "京东",
    en: "JD.com",
    description: "从文字、图像与版式之间，寻找一个作品最准确的视觉语气。",
  },
  {
    index: "02",
    title: "新东方",
    en: "New Oriental",
    description: "用节奏、转场与细微的变化，让静态想法拥有可以被感知的时间。",
  },
  {
    index: "03",
    title: "永和大王",
    en: "Yonghe King",
    description: "把作品带到网页与交互中，持续练习清楚、自然且有温度的体验。",
  },
  {
    index: "04",
    title: "南京嘉木健康",
    en: "Nanjing Jiamu Health",
    description: "从日常观察里收集线索，尝试把模糊的感受整理成可继续讨论的内容。",
  },
] as const;

const directions = [
  "平面与版式",
  "品牌视觉",
  "动态设计",
  "网页与交互",
  "图像叙事",
  "内容表达",
] as const;

export function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteNav />

      <AboutHero />

      <section className="px-4 pb-8 pt-16 lg:pb-12 lg:pt-24">
        <div className="mx-auto max-w-[100rem] border-t border-ink/30 pt-5 lg:pt-7">
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-12">
            <article className="flex min-h-64 flex-col justify-end bg-white p-5 text-ink sm:p-7 lg:col-span-8 lg:min-h-[13rem] lg:p-8">
              <h2 className="max-w-4xl font-taipei text-[clamp(2.4rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                一个持续整理灵感、工具与表达的个人设计工作台。
              </h2>
            </article>
            <div className="hidden lg:col-span-4 lg:block" />

            <article className="min-h-56 self-end bg-white p-5 text-ink sm:p-7 lg:col-span-4 lg:min-h-0 lg:p-6">
              <div className="space-y-5 font-taipei text-base font-normal leading-[1.6] text-ink/70 lg:text-[18px]">
                <p>
                  我是徐航朔，学习视觉传达设计，也在网页、动态与内容表达之间不断练习。
                </p>
                <p>
                  这里收录正在形成的作品、笔记和观察；它们不必完整，但希望足够真诚。
                </p>
              </div>
            </article>
            <div className="hidden lg:col-span-2 lg:block" />
            <figure className="relative aspect-[1127/1541] overflow-hidden bg-[#d5d5d2] lg:col-span-3">
              <Image
                alt="关于徐航朔的影像一"
                className="object-contain"
                fill
                quality={90}
                sizes="(min-width: 1024px) 24vw, 100vw"
                src="/images/about/about-01.jpg"
              />
            </figure>
            <figure className="relative aspect-[1127/1541] overflow-hidden bg-[#d5d5d2] lg:col-span-3">
              <Image
                alt="关于徐航朔的影像二"
                className="object-contain"
                fill
                quality={90}
                sizes="(min-width: 1024px) 24vw, 100vw"
                src="/images/about/about-02.jpg"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 pt-5 lg:pb-16 lg:pt-8">
        <div className="mx-auto max-w-[100rem] border-t border-ink/30 pt-5 lg:pt-7">
          <div className="mb-8 flex items-end justify-between gap-6 lg:mb-12">
            <h2 className="font-taipei text-[clamp(2.1rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              实习经历
            </h2>
            <p className="hidden font-montserrat text-sm text-ink/55 sm:block">
              Internship experience
            </p>
          </div>
          <div className="grid border-t border-ink/30 lg:grid-cols-2">
            {practices.map((practice) => (
              <article
                className="group grid min-h-56 gap-5 border-b border-ink/30 py-6 lg:min-h-64 lg:grid-cols-[3.75rem_1fr_auto] lg:gap-6 lg:py-7 odd:lg:pr-8 even:lg:border-l even:lg:pl-8"
                key={practice.index}
              >
                <p className="font-montserrat text-sm text-ink/45">
                  {practice.index}
                </p>
                <div>
                  <h3 className="font-taipei text-2xl font-semibold leading-tight lg:text-[28px]">
                    {practice.title}
                  </h3>
                  <p className="mt-5 max-w-[30rem] font-taipei text-base leading-[1.6] text-ink/65 lg:text-[18px]">
                    {practice.description}
                  </p>
                </div>
                <div className="flex items-start justify-between gap-4 lg:flex-col lg:items-end">
                  <span className="font-montserrat text-sm text-ink/45">
                    {practice.en}
                  </span>
                  <ArrowUpRight className="size-5 text-ink/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 lg:py-16">
        <div className="mx-auto grid max-w-[100rem] gap-5 lg:grid-cols-[0.96fr_1fr]">
          <div className="overflow-hidden rounded-[0.4rem] bg-ink">
            <video
              aria-label="徐航朔的个人介绍影像"
              autoPlay
              className="h-full min-h-[32rem] w-full object-cover lg:min-h-[42rem]"
              loop
              muted
              playsInline
              preload="metadata"
              src="/videos/shure-about.mp4"
            />
          </div>
          <div className="flex min-h-[32rem] flex-col justify-between rounded-[0.4rem] bg-[#d5d5d2] bg-[url('/images/h3-metal-texture.jpg')] bg-cover bg-center p-5 lg:min-h-[42rem] lg:p-8">
            <div>
              <p className="font-montserrat text-sm uppercase tracking-[0.08em] text-ink/55">
                A small profile
              </p>
              <h2 className="mt-8 max-w-[8ch] font-taipei text-[clamp(2.7rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                设计是一种持续靠近的方式。
              </h2>
            </div>
            <div className="max-w-[32rem] space-y-5 font-taipei text-base leading-[1.6] text-ink/75 lg:text-[18px]">
              <p>
                我在意作品是否能被看见，也在意它是否留下了继续理解、交流和修改的余地。
              </p>
              <p>
                比起一次抵达，更想把创作变成长期、开放而具体的过程。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-[100rem] border-t border-ink/30 pt-5 lg:pt-7">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
            <div>
              <p className="font-montserrat text-sm uppercase tracking-[0.08em] text-ink/55">
                Working across
              </p>
              <h2 className="mt-5 font-taipei text-[clamp(2.1rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                让不同媒介之间互相回应。
              </h2>
            </div>
            <div className="grid gap-x-8 gap-y-0 border-t border-ink/30 sm:grid-cols-2">
              {directions.map((direction, index) => (
                <p
                  className="flex items-center justify-between border-b border-ink/30 py-4 font-taipei text-xl font-medium leading-none lg:py-5 lg:text-2xl"
                  key={direction}
                >
                  {direction}
                  <span className="font-montserrat text-sm text-ink/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
