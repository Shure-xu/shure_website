import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";

type BrandProjectPageProps = {
  params: Promise<{
    project: string;
  }>;
};

const brandProjects = {
  yuniji: {
    slug: "yuniji",
    index: "/0.1",
    title: "芋泥集",
    subtitle: "Art Direction, Brand Identity, Packaging",
    year: "2026",
    services: "Brand Identity, Visual System, Packaging",
    sector: "Food Brand / Dessert",
    heroImage: "/images/brand-yuniji-info.jpg",
    heroAlt: "芋泥集 brand identity on a green leaf background",
    description: [
      "以靖江之泥，集长江之水的香糯馈赠。靖江，长江之畔的沙土岛屿，这里的水土藏着两样东西一一土里生长的香沙芋，指尖捏塑的泥狗子。「芋泥集」，正是将这片土地的水土基因与非遗信仰凝结为一份舌尖上的礼物。「芋泥集」相信，一颗真正的靖江香沙芋，不该只是食物，更是靖江人“捏泥成器，种芋成礼”的农耕哲学，品牌以“集”为名，让每一口粉糯都带着水土的籍贯与文化的体温。",
      "项目重点放在标志、色彩、图形延展与包装画面的统一表达上。视觉系统保留植物感和手作感，同时让品牌在包装、社交传播和线下物料中保持一致的识别秩序。",
    ],
    gallery: [
      {
        src: "/images/brand-yuniji-22.jpg",
        alt: "芋泥集 brand extended visual",
      },
    ],
  },
  petpets: {
    slug: "petpets",
    index: "/0.2",
    title: "PetPets",
    subtitle: "Brand Identity, Mascot, Visual System",
    year: "2026",
    services: "Brand Identity, Illustration, Visual System",
    sector: "Pet Brand / Lifestyle",
    heroImage: "/images/brand-pet-info.jpg",
    heroAlt: "PetPets brand identity on a black and white pet photo",
    description: [
      "PetPets 是一套面向宠物咖啡馆的品牌视觉系统。项目尝试把亲密、活泼和轻松的情绪转化成可重复使用的图形资产，让品牌既有陪伴感，也有清楚的商业识别。当城市的秩序美学撞上毛茸茸的不讲理哲学，人们会意识到这里不生产标准制品，只贩卖毛茸茸的“意外”。",
      "视觉围绕角色图形、字标比例、黑白影像和高饱和点色展开。系统可以延伸到包装、社交媒体、物料和线下展示，让品牌在不同接触点中保持可爱但不松散的表达。",
    ],
    gallery: [
      {
        src: "/images/brand-petpets-07.jpg",
        alt: "PetPets brand extended visual",
      },
    ],
  },
} as const;

type BrandProjectSlug = keyof typeof brandProjects;

function getBrandProject(slug: string) {
  return brandProjects[slug as BrandProjectSlug];
}

export function generateStaticParams() {
  return Object.values(brandProjects).map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({ params }: BrandProjectPageProps) {
  const { project: slug } = await params;
  const project = getBrandProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Brand Design`,
    description: project.description[0],
  };
}

export default async function BrandProjectPage({
  params,
}: BrandProjectPageProps) {
  const { project: slug } = await params;
  const project = getBrandProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-4 pb-16">
        <SiteNav />

        <article className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          <Link
            className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            href="/works/brand"
          >
            <ArrowLeft className="size-4" />
            Brand design
          </Link>

          <header className="grid gap-10 border-b border-white/25 pb-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-end">
            <div>
              <p className="font-montserrat text-sm uppercase text-white/45">
                {project.index} / Brand design
              </p>
              <h1 className="brand-detail-title mt-5">{project.title}</h1>
            </div>

            <div className="grid gap-5 text-white/72">
              <h2 className="max-w-[38rem] font-montserrat text-2xl font-semibold leading-none text-white sm:text-3xl">
                {project.subtitle}
              </h2>
              <Link
                className="inline-flex w-fit items-center gap-1.5 font-montserrat text-sm font-semibold text-white/55 transition hover:text-white"
                href="#gallery"
              >
                View gallery
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </header>

          <section className="grid gap-12 py-12 lg:grid-cols-[1.16fr_0.84fr]">
            <div className="grid max-w-[58rem] gap-6">
              {project.description.map((paragraph) => (
                <p
                  className="brand-detail-copy text-lg leading-[1.6] text-white/72"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="brand-detail-copy grid content-start gap-4 border-t border-white/20 pt-5 text-sm uppercase tracking-normal text-white/55 lg:border-t-0 lg:pt-0">
              <div>
                <dt className="font-montserrat text-white/35">Year</dt>
                <dd className="mt-1 font-montserrat text-white">{project.year}</dd>
              </div>
              <div>
                <dt className="font-montserrat text-white/35">Services</dt>
                <dd className="mt-1 font-montserrat text-white">{project.services}</dd>
              </div>
              <div>
                <dt className="font-montserrat text-white/35">Sector</dt>
                <dd className="mt-1 font-montserrat text-white">{project.sector}</dd>
              </div>
            </dl>
          </section>

          <section id="gallery" className="grid gap-5">
            <div className="overflow-hidden rounded-[0.4rem] bg-white">
              <Image
                className="h-full w-full object-cover"
                src={project.heroImage}
                alt={project.heroAlt}
                width={1481}
                height={1291}
                priority
              />
            </div>

            {project.gallery.map((image, index) => (
              <div
                className="overflow-hidden rounded-[0.4rem] bg-white"
                key={`${image.src}-${index}`}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                  width={1481}
                  height={1291}
                />
              </div>
            ))}
          </section>
        </article>
      </div>

      <ContactFooter />
    </main>
  );
}
