import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import { getWorkCategory, workCategories } from "@/lib/work-categories";

type CategoryWorksPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return workCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryWorksPageProps) {
  const { category: slug } = await params;
  const category = getWorkCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} | Shure Works`,
    description: category.description,
  };
}

export default async function CategoryWorksPage({
  params,
}: CategoryWorksPageProps) {
  const { category: slug } = await params;
  const category = getWorkCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-4 pb-16">
        <SiteNav />

        <section className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          <div className="overflow-hidden rounded-[0.4rem] border-t-2 border-white/45 bg-white text-ink">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="flex min-h-[28rem] flex-col justify-between p-5 sm:p-7 lg:min-h-[35rem] lg:p-8">
                <div>
                  <p className="mb-5 font-mono text-xs uppercase text-ink/45">
                    My works / {category.label}
                  </p>
                  <h1 className="max-w-3xl text-[clamp(3rem,6.2vw,7rem)] font-semibold leading-[0.88] tracking-normal">
                    {category.title}
                  </h1>
                </div>
                <p className="max-w-[31rem] text-base font-semibold leading-tight text-ink/70 sm:text-lg">
                  {category.description}
                </p>
              </div>

              <div className="aspect-video overflow-hidden bg-black lg:aspect-auto lg:min-h-[35rem]">
                {"heroVideo" in category ? (
                  <video
                    className="h-full w-full object-cover"
                    src={category.heroVideo}
                    aria-label={`${category.title} featured video`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <Image
                    className="h-full w-full object-cover"
                    src={category.image}
                    alt={`${category.title} category visual`}
                    width={1481}
                    height={1291}
                    priority
                  />
                )}
              </div>
            </div>
          </div>

          {"featuredWork" in category ? (
            <section className="my-8 grid gap-5 border-t border-white/15 pt-5 lg:grid-cols-[0.46fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase text-white/35">
                  {category.featuredWork.eyebrow}
                </p>
                <h2 className="mt-3 text-[clamp(2.5rem,5vw,5.8rem)] font-semibold leading-[0.9]">
                  {category.featuredWork.title}
                </h2>
              </div>
              <p className="max-w-3xl text-xl font-semibold leading-tight text-white/65 sm:text-2xl">
                {category.featuredWork.summary}
              </p>
            </section>
          ) : null}

          <div className="mb-6 mt-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Selected {category.label}
            </h2>
            <div className="flex flex-wrap gap-2">
              {workCategories.map((item) => (
                <Link
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    item.slug === category.slug
                      ? "bg-white text-ink"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                  href={item.href}
                  key={item.slug}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-5 border-t border-white/15 pt-5 lg:grid-cols-3">
            {category.projects.map((work, index) => (
              <article
                className="group flex min-h-[22rem] flex-col justify-between rounded-[0.4rem] bg-white p-5 text-ink transition hover:-translate-y-1 sm:p-7"
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
