import Image from "next/image";
import { AboutHero } from "@/components/about-hero";
import { ContactFooter } from "@/components/contact-footer";
import { InternshipAccordion } from "@/components/internship-accordion";
import { SiteNav } from "@/components/site-nav";

const directions = [
  "AI产品",
  "品牌视觉",
  "动态设计",
  "平面与版式",
] as const;

export function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteNav />

      <AboutHero />

      <section className="px-4 pb-8 pt-16 lg:pb-12 lg:pt-24">
        <div className="mx-auto max-w-[100rem] border-t border-white pt-5 lg:pt-7">
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-12">
            <article className="flex min-h-64 flex-col justify-end bg-white p-5 text-ink sm:p-7 lg:col-span-8 lg:min-h-[13rem] lg:p-8">
              <h2 className="max-w-4xl font-taipei text-[clamp(2.4rem,3.4vw,3.125rem)] font-semibold leading-[1.14] tracking-[-0.035em]">
                Hi! 我是徐航朔。<br />
                欢迎来到我整理灵感、工具与表达的<br />
                个人设计工作台。
              </h2>
            </article>
            <div className="hidden lg:col-span-4 lg:block" />

            <article className="min-h-56 self-end bg-white p-5 text-ink sm:p-7 lg:col-span-4 lg:min-h-0 lg:p-6">
              <div className="space-y-5 font-taipei text-base font-normal leading-[1.6] text-ink/70 lg:text-[18px]">
                <p>
                  我是徐航朔，学习视觉传达设计，也在网页、动态与内容表达之间不断练习。
                </p>
                <p>
                这里收录正在形成的作品、笔记和观察。
                </p>
              </div>
            </article>
            <div className="hidden lg:col-span-2 lg:block" />
            <figure className="relative aspect-[1127/1541] overflow-hidden rounded-[0.4rem] bg-[#d5d5d2] transition-transform duration-700 ease-out hover:scale-[0.98] motion-reduce:hover:scale-100 lg:col-span-3">
              <Image
                alt="关于徐航朔的影像一"
                className="object-contain"
                fill
                quality={90}
                sizes="(min-width: 1024px) 24vw, 100vw"
                src="/images/about/about-01.jpg"
              />
            </figure>
            <figure className="relative aspect-[1127/1541] overflow-hidden rounded-[0.4rem] bg-[#d5d5d2] transition-transform duration-700 ease-out hover:scale-[0.98] motion-reduce:hover:scale-100 lg:col-span-3">
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

      <section className="px-4 pb-10 pt-5 lg:pb-16 lg:pt-12">
        <div className="mx-auto max-w-[100rem] border-t border-ink/30 pt-5 lg:pt-7">
          <div className="mb-8 flex items-end justify-between gap-6 lg:mb-8">
            <h2 className="font-taipei text-[clamp(2.1rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              实习经历
            </h2>
            <p className="hidden font-montserrat text-sm text-ink/55 sm:block">
              Internship experience
            </p>
          </div>
          <InternshipAccordion />
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
              src="/videos/about-envelopes.mp4"
            />
          </div>
          <div className="flex min-h-[32rem] flex-col justify-between rounded-[0.4rem] bg-[#d5d5d2] bg-[url('/images/h3-metal-texture.jpg')] bg-cover bg-center p-5 lg:min-h-[42rem] lg:p-8">
            <div>
              <p className="font-montserrat text-sm uppercase tracking-[0.08em] text-ink/55">
                A small profile
              </p>
              <h2 className="mt-8 max-w-[8ch] font-taipei text-[clamp(2.7rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                学习<br />是一种持续进步的方式。
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
            <div className="grid gap-x-8 gap-y-0 border-t border-white sm:grid-cols-2">
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
