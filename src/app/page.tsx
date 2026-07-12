import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HeroLoader } from "@/components/hero-loader";
import { SiteNav } from "@/components/site-nav";

const projects = [
  {
    title: "Field Notes",
    type: "品牌叙事 / 首页体验",
    image: "/images/project-field-notes.png",
    summary: "把零散的想法整理成清楚、有节奏、可继续生长的数字表达。",
  },
  {
    title: "Soft Lab",
    type: "个人系统 / 内容产品",
    image: "/images/project-soft-lab.png",
    summary: "为创作者设计一套轻量内容系统，让作品、笔记和服务自然连接。",
  },
  {
    title: "Open Signal",
    type: "研究页面 / 编辑视觉",
    image: "/images/project-open-signal.png",
    summary: "用杂志式排版和大胆色块，承载研究、洞察和可执行的下一步。",
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
    <main className="min-h-screen bg-background text-foreground">
      <HeroLoader />
      <SiteNav />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f7f4] px-4 py-28 sm:px-6">
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center">
          <h1
            className="max-w-full whitespace-nowrap text-center text-[clamp(2.65rem,5.4vw,5.8rem)] font-semibold leading-none text-ink"
            aria-label="Explore New Things"
          >
            Explore New Things
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
          <div className="flex h-[34rem] flex-col justify-between rounded-[1.5rem] bg-[#f4ff75] p-5 text-ink sm:p-7 lg:h-[37rem] lg:p-8">
            <div>
              <p className="mb-8 font-mono text-sm uppercase tracking-normal text-ink/75">
                Who&apos;s Shure
              </p>
              <h2 className="max-w-3xl text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.92]">
                Shure 是一个
                <span className="text-[#ff6e14]"> 爱折腾的数字创作者 </span>
                ，把灵感、工具和表达整理成可被看见的作品。
              </h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-tight sm:text-lg">
              我正在把个人网站做成一个开放的工作室：这里会放作品、笔记、实验、AI 工作流，也会记录我如何把模糊想法变成清楚、鲜活、有个性的数字表达。
            </p>
          </div>

          <div className="h-[34rem] overflow-hidden rounded-[1.5rem] bg-ink lg:h-[37rem]">
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
          <div className="mb-5 flex items-end justify-between gap-5">
            <h2 className="text-4xl font-semibold sm:text-6xl">Selected Work</h2>
            <a className="hidden items-center gap-2 text-sm font-medium md:inline-flex" href="#contact">
              Start a project <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                className="group overflow-hidden rounded-[2rem] border border-foreground/10 bg-card"
                key={project.title}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project visual`}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="grid gap-8 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase text-muted-foreground">0{index + 1} / {project.type}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                    </div>
                    <ArrowUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="px-4 py-10 lg:py-16">
        <div className="mx-auto max-w-[100rem]">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex h-[34rem] flex-col justify-between rounded-[1.5rem] bg-blush p-5 text-ink sm:p-7 lg:h-[37rem] lg:p-8">
              <p className="text-sm uppercase text-ink/60">Notes / Podcast / Blog</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
                用长期更新的方式，让别人持续理解你。
              </h2>
            </div>
            <div className="grid h-[34rem] gap-5 lg:h-[37rem]">
              {notes.map((note) => (
                <article className="flex flex-col justify-between rounded-[1.5rem] border border-foreground/10 p-5 sm:p-7" key={note.title}>
                  <p className="text-xs uppercase text-muted-foreground">{note.label}</p>
                  <h3 className="text-2xl font-semibold leading-tight">{note.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-black px-4 text-white">
        <div className="mx-auto flex min-h-[34rem] max-w-[100rem] flex-col justify-between overflow-hidden pb-14 pt-20 lg:min-h-[38rem] lg:pb-16 lg:pt-24">
          <h2
            className="flex max-w-[94rem] flex-wrap items-start gap-x-2 gap-y-1 self-start text-[clamp(3.2rem,9.8vw,11rem)] font-semibold leading-[0.8] text-white lg:-ml-2"
            aria-label="Shure。sure？sure！"
          >
            <span className="inline-block -rotate-6 translate-y-5">Sh</span>
            <span className="inline-block rotate-3 -translate-y-2">ure。</span>
            <span className="inline-block rotate-6 translate-y-8">sure？</span>
            <span className="inline-block -rotate-3 translate-y-2">sure！</span>
          </h2>
          <div className="grid gap-12 pb-2 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-xl">
              <p className="max-w-[34rem] text-2xl font-semibold leading-[0.95] sm:text-3xl">
                欢迎来找我聊新项目、个人网站、内容表达，或者任何正在发光的小想法。
              </p>
              <p className="mt-8 max-w-[25rem] text-sm leading-[1.1] text-white/55">
                我喜欢把模糊的灵感整理成清楚、鲜活、有个性的数字表达。这里会慢慢长成一个更像我的个人空间。
              </p>
            </div>
            <a
              className="mt-1 text-2xl font-semibold leading-none text-white transition hover:opacity-70 sm:text-3xl lg:mr-2"
              href="mailto:2664265205@qq.com"
            >
              2664265205@qq.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
