import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { DynamicWorkPage } from "@/components/dynamic-work-page";
import { SiteNav } from "@/components/site-nav";
import {
  getWorkCategory,
  type WorkCategory,
  workCategories,
} from "@/lib/work-categories";

type CategoryWorksPageProps = {
  params: Promise<{
    category: string;
  }>;
};

type DynamicWorkCategory = Extract<WorkCategory, { slug: "dynamic" }>;

type CategoryFeaturePanelProps = {
  description: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  title: string;
  transparentTextPanel?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  imageHoverScale?: boolean;
};

function isDynamicWorkCategory(
  category: WorkCategory,
): category is DynamicWorkCategory {
  return category.slug === "dynamic";
}

function CategoryFeaturePanel({
  description,
  eyebrow,
  image,
  imageAlt,
  priority = false,
  title,
  transparentTextPanel = false,
  titleClassName,
  descriptionClassName,
  imageClassName,
  imageHoverScale = false,
}: CategoryFeaturePanelProps) {
  const containerClass = transparentTextPanel
    ? "overflow-hidden rounded-[0.4rem] text-white"
    : "overflow-hidden rounded-[0.4rem] border-t-2 border-white/45 bg-white text-ink";
  const descriptionClass = transparentTextPanel ? "text-white/72" : "text-ink/70";

  return (
    <div className={containerClass}>
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div
          className={`flex min-h-[28rem] flex-col justify-between lg:min-h-0 ${
            transparentTextPanel ? "p-0" : "p-5 sm:p-7 lg:p-8"
          }`}
        >
          <div>
            {transparentTextPanel ? null : (
              <p className="mb-5 font-mono text-xs uppercase text-ink/45">
                {eyebrow}
              </p>
            )}
            <h1
              className={
                titleClassName ??
                "max-w-3xl text-[clamp(3rem,6.2vw,7rem)] font-semibold leading-[0.88] tracking-normal"
              }
            >
              {title}
            </h1>
          </div>
          <p
            className={`max-w-[31rem] text-base font-semibold leading-tight sm:text-lg ${descriptionClass} ${descriptionClassName ?? ""}`}
          >
            {description}
          </p>
        </div>

        <div
          className={`group/image aspect-[1.55] overflow-hidden rounded-[0.4rem] bg-white ${
            imageHoverScale
              ? "transition-transform duration-700 ease-out hover:scale-[0.95]"
              : ""
          }`}
        >
          <Image
            className={`h-full w-full ${imageClassName ?? "object-cover"}`}
            src={image}
            alt={imageAlt}
            width={1481}
            height={1291}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

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

  if (isDynamicWorkCategory(category)) {
    return <DynamicWorkPage category={category} currentWork="geometry" />;
  }

  const isBrandPage = category.slug === "brand";
  const featurePanels = [
    {
      description: isBrandPage ? "芋泥集" : category.description,
      eyebrow: `My works / ${category.label}`,
      image: isBrandPage ? "/images/brand-yuniji-info.jpg" : category.image,
      imageAlt: isBrandPage ? "芋泥集 brand visual" : `${category.title} category visual`,
      title: isBrandPage ? "/0.1" : category.title,
    },
    ...(isBrandPage
      ? [
          {
            description: "PetPets",
            eyebrow: `My works / ${category.label} / 02`,
            image: "/images/brand-pet-info.jpg",
            imageAlt: "PetPets brand visual",
            title: "/0.2",
          },
        ]
      : []),
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-4 pb-16">
        <SiteNav />

        <section className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          {isBrandPage ? (
            <header className="mb-10 flex items-end gap-5 border-b border-white/35 pb-5 text-white">
              <h1 className="brand-page-title shrink-0">
                <span>Brand</span>{" "}
                <span className="text-[#999999]">design</span>
              </h1>
            </header>
          ) : null}

          <div className={`grid ${isBrandPage ? "gap-14" : "gap-5"}`}>
            {featurePanels.map((panel, index) => (
              <CategoryFeaturePanel
                description={panel.description}
                eyebrow={panel.eyebrow}
                image={panel.image}
                imageAlt={panel.imageAlt}
                key={`${panel.title}-${index}`}
                priority={index === 0}
                title={panel.title}
                transparentTextPanel={isBrandPage}
                titleClassName={
                  isBrandPage ? "brand-feature-title max-w-3xl" : undefined
                }
                descriptionClassName={
                  isBrandPage
                    ? "brand-feature-description self-start text-left"
                    : undefined
                }
                imageClassName={
                  isBrandPage ? "object-cover" : undefined
                }
                imageHoverScale={isBrandPage}
              />
            ))}
          </div>

          <div
            className={`mb-6 flex flex-wrap items-center justify-between gap-4 ${
              isBrandPage ? "mt-24" : "mt-8"
            }`}
          >
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
