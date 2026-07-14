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
      "芋泥集是一组围绕东方甜品气质展开的品牌视觉实验。整体方向从食材的自然纹理、手作温度和轻盈的日常场景出发，用柔和但清晰的图形语言建立品牌记忆点。",
      "项目重点放在标志、色彩、图形延展与包装画面的统一表达上。视觉系统保留植物感和手作感，同时让品牌在菜单、包装、社交传播和线下物料中保持一致的识别秩序。",
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
      "PetPets 是一套面向宠物陪伴场景的品牌视觉系统。项目尝试把亲密、活泼和轻松的情绪转化成可重复使用的图形资产，让品牌既有陪伴感，也有清楚的商业识别。",
      "视觉围绕角色图形、字标比例、黑白影像和高饱和点色展开。系统可以延伸到包装、社交媒体、会员物料和线下展示，让品牌在不同接触点中保持可爱但不松散的表达。",
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
              <p className="font-mono text-sm uppercase text-white/45">
                {project.index} / Brand design
              </p>
              <h1 className="brand-detail-title mt-5">{project.title}</h1>
            </div>

            <div className="grid gap-5 text-white/72">
              <h2 className="max-w-[38rem] text-2xl font-semibold leading-none text-white sm:text-3xl">
                {project.subtitle}
              </h2>
              <Link
                className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white/55 transition hover:text-white"
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
                  className="brand-detail-copy text-lg leading-[1.28] text-white/72 sm:text-xl"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="brand-detail-copy grid content-start gap-4 border-t border-white/20 pt-5 text-sm uppercase tracking-normal text-white/55 lg:border-t-0 lg:pt-0">
              <div>
                <dt className="font-mono text-white/35">Year</dt>
                <dd className="mt-1 text-white">{project.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-white/35">Services</dt>
                <dd className="mt-1 text-white">{project.services}</dd>
              </div>
              <div>
                <dt className="font-mono text-white/35">Sector</dt>
                <dd className="mt-1 text-white">{project.sector}</dd>
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
