import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { HeroLoader } from "@/components/hero-loader";
import { SiteNav } from "@/components/site-nav";
import { workCategories } from "@/lib/work-categories";

const projects = [
  {
    title: "01/动态设计",
    image: workCategories[0].image,
    href: workCategories[0].href,
    summary:
      "Dynamic design projects focus on movement, interaction, transitions, and small behaviors that make a digital experience feel alive.",
  },
  {
    title: "02/品牌设计",
    image: workCategories[1].image,
    href: workCategories[1].href,
    summary:
      "Brand design projects organize voice, structure, and identity into systems that can be recognized, repeated, and extended.",
  },
  {
    title: "03/视觉设计",
    image: workCategories[2].image,
    href: workCategories[2].href,
    summary:
      "Visual design projects explore composition, contrast, image treatment, and editorial systems for memorable digital pages.",
  },
];

const notes = [
  {
    label: "Studio Note",
    title: "让网站先像一个人，再像一个产品。",
  },
  {
    label: "Process",
    title: "从参考网站出发，提取节奏，而不是复制外壳。",
  },
  {
    label: "Signal",
    title: "把复杂经历变成别人愿意继续看的入口。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <HeroLoader />
      <SiteNav />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-28 sm:px-6">
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center">
          <h1
            className="max-w-full whitespace-nowrap text-center font-['Montserrat',ui-sans-serif,sans-serif] text-[clamp(2.65rem,5.4vw,5.8rem)] font-medium leading-none text-ink"
            aria-label="Exploring New Things"
          >
            Exploring New Things
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 sm:left-12 sm:translate-x-0">
          <div className="mb-2 flex w-fit items-center gap-1 rounded-full bg-white/90 p-1.5 shadow-[0_12px_35px_rgba(20,20,20,0.08)] backdrop-blur-xl">
            {["🌴", "😊", "🧠", "✒️", "💻"].map((mood) => (
              <button
                className="inline-flex size-7 items-center justify-center rounded-full text-sm transition hover:bg-ink/10"
                type="button"
                key={mood}
                aria-label={`Mood ${mood}`}
              >
                {mood}
              </button>
            ))}
          </div>
          <button
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ink shadow-[0_12px_35px_rgba(20,20,20,0.08)] backdrop-blur-xl transition hover:scale-95"
            type="button"
          >
            今天的心情如何？
          </button>
        </div>
      </section>

      <section id="about" className="px-4 py-10 lg:py-16">
        <div className="mx-auto grid max-w-[100rem] gap-5 lg:grid-cols-[1fr_0.96fr]">
          <div className="flex h-[34rem] flex-col justify-between rounded-[0.4rem] bg-[#d5d5d2] bg-[url('/images/h3-metal-texture.jpg')] bg-cover bg-center p-5 text-ink sm:p-7 lg:h-[37rem] lg:p-8">
            <div>
              <p className="mb-8 font-mono text-sm tracking-normal text-ink/75">
                Hi！我是徐航朔
              </p>
              <h2 className="max-w-3xl text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.92]">
                我希望把灵感、工具和表达整理成可以被看见的作品。
              </h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-tight sm:text-lg">
              I hope you will like it.
            </p>
          </div>

          <div className="h-[34rem] overflow-hidden rounded-[0.4rem] bg-ink lg:h-[37rem]">
            <video
              className="h-full w-full object-cover"
              src="/videos/shure-about.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      <section id="work" className="px-4 py-10 lg:py-16">
        <div className="mx-auto max-w-[100rem]">
          <div className="mb-8 flex items-end justify-between gap-5 border-t border-foreground/35 pt-8">
            <h2 className="text-4xl font-semibold sm:text-6xl">
              Design projects
            </h2>
            <a className="hidden items-center gap-2 text-sm font-medium md:inline-flex" href="#contact">
              Start a project <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article className="group flex flex-col" key={project.title}>
                <Link
                  className="block aspect-[1481/1291] overflow-hidden rounded-[0.4rem] bg-card"
                  href={project.href}
                  aria-label={`View ${workCategories[index].title} works`}
                >
                  <Image
                    src={project.image}
                    alt={`${workCategories[index].title} project visual`}
                    width={1481}
                    height={1291}
                    className="h-full w-full object-cover object-right-bottom"
                  />
                </Link>
                <div className="grid gap-5 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-['Taipei_Sans_TC_Beta',ui-sans-serif,sans-serif] text-2xl font-normal">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="max-w-[31rem] font-['Montserrat',ui-sans-serif,sans-serif] text-sm font-light leading-5 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="px-4 py-10 lg:py-16">
        <div className="mx-auto max-w-[100rem]">
          <div className="mb-8 border-t border-foreground/35 pt-8">
            <h2 className="text-4xl font-semibold sm:text-6xl">
              Vibe coding projects
            </h2>
          </div>
          <div className="grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex aspect-[16/12] flex-col justify-between rounded-[0.4rem] bg-blush p-5 text-ink sm:p-7 lg:p-8">
              <p className="text-sm uppercase text-ink/60">Notes / Podcast / Blog</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
                用长期更新的方式，让别人持续理解你。
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-rows-3">
              {notes.map((note) => (
                <article className="flex min-h-[11rem] flex-col justify-between rounded-[0.4rem] border border-foreground/10 p-5 sm:p-7 lg:min-h-0" key={note.title}>
                  <p className="text-xs uppercase text-muted-foreground">{note.label}</p>
                  <h3 className="text-2xl font-semibold leading-tight">{note.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
