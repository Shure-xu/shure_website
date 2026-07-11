import Image from "next/image";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

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

const services = [
  "个人网站与作品集",
  "品牌叙事与文案结构",
  "AI 工具工作流设计",
  "视觉系统与页面原型",
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
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-foreground/10 bg-background/80 px-4 py-3 shadow-[0_10px_40px_rgba(20,20,20,0.08)] backdrop-blur-xl">
          <a className="text-sm font-semibold uppercase tracking-normal" href="#">
            Personal Studio
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#notes">Notes</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            className="inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background transition hover:scale-95"
            href="mailto:hello@example.com"
            aria-label="Send email"
          >
            <Mail className="size-4" />
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden px-4 pt-28 sm:px-6">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 content-end gap-6 pb-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-12">
          <div className="flex flex-col justify-end">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 bg-white/60 px-3 py-1 text-xs uppercase text-muted-foreground">
              <Sparkles className="size-3.5" />
              Independent digital studio
            </p>
            <h1 className="max-w-5xl text-[clamp(3.3rem,11vw,11rem)] font-semibold leading-[0.86] text-balance">
              清晰、鲜活、有态度的个人网站。
            </h1>
          </div>

          <aside className="grid gap-4 self-end lg:pb-4">
            <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-accent">
                <Image
                  src="/images/portrait-workspace.png"
                  alt="Abstract workspace portrait"
                  width={900}
                  height={1125}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="flex min-h-64 flex-col justify-between rounded-[2rem] bg-lime px-5 py-5 text-ink">
                <span className="text-sm uppercase text-ink/65">Now building</span>
                <p className="text-2xl font-semibold leading-tight">
                  一个可以介绍你、展示作品、持续更新想法的网站。
                </p>
              </div>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              参考 Fler Design 的杂志式编排、强对比色块和松弛的创意工作室气质，但内容会换成你的个人表达、作品和联系方式。
            </p>
          </aside>
        </div>
      </section>

      <section id="work" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
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

      <section id="services" className="bg-ink px-4 py-16 text-paper sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm uppercase text-paper/55">What I can shape with you</p>
            <h2 className="text-4xl font-semibold sm:text-6xl">从想法到上线的完整表达。</h2>
          </div>
          <div className="grid gap-3">
            {services.map((service) => (
              <div
                className="flex items-center justify-between border-t border-paper/15 py-6 text-2xl sm:text-4xl"
                key={service}
              >
                <span>{service}</span>
                <ArrowUpRight className="size-6 text-lime" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-blush p-6 text-ink sm:p-10">
              <p className="mb-12 text-sm uppercase text-ink/60">Notes / Podcast / Blog</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
                用长期更新的方式，让别人持续理解你。
              </h2>
            </div>
            <div className="grid gap-3">
              {notes.map((note) => (
                <article className="rounded-[2rem] border border-foreground/10 p-6" key={note.title}>
                  <p className="mb-8 text-xs uppercase text-muted-foreground">{note.label}</p>
                  <h3 className="text-2xl font-semibold leading-tight">{note.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-4 pb-4 sm:px-6">
        <div className="mx-auto rounded-[2.4rem] bg-lime px-6 py-12 text-ink sm:px-10 lg:px-14 lg:py-16">
          <p className="mb-10 text-sm uppercase text-ink/60">Available for collaboration</p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.9]">
              让你的下一版网站先跑起来。
            </h2>
            <div className="grid gap-6">
              <p className="text-xl leading-8 text-ink/75">
                这是第一版视觉方向。下一步我们可以替换你的名字、照片、项目、履历和真实联系方式。
              </p>
              <a
                className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:scale-95"
                href="mailto:hello@example.com"
              >
                hello@example.com <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
