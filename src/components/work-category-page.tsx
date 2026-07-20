import Image from "next/image";
import Link from "next/link";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import { WorksTransitionLink } from "@/components/works-transition-link";
import { type WorkCategory, workCategories } from "@/lib/work-categories";

type CategoryFeaturePanelProps = {
  description: string;
  eyebrow: string;
  eyebrowIndex?: string;
  eyebrowClassName?: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  title: string;
  titleWeight?: 500 | 600;
  brandLayout?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  imageHoverScale?: boolean;
  imageHref?: string;
  imageLinkLabel?: string;
};

type WorkCategoryPageProps = {
  category: WorkCategory;
};

function CategoryFeaturePanel({
  description,
  eyebrow,
  eyebrowIndex,
  eyebrowClassName,
  image,
  imageAlt,
  priority = false,
  title,
  titleWeight,
  brandLayout = false,
  titleClassName,
  descriptionClassName,
  imageClassName,
  imageHoverScale = false,
  imageHref,
  imageLinkLabel,
}: CategoryFeaturePanelProps) {
  const containerClass = brandLayout
    ? "overflow-hidden rounded-[0.4rem] text-ink"
    : "overflow-hidden rounded-[0.4rem] border-t-2 border-white/45 bg-white text-ink";
  const descriptionClass = brandLayout ? "text-ink/72" : "text-ink/70";
  const imageFrameClass = `group/image aspect-[1.55] overflow-hidden rounded-[0.4rem] bg-white ${
    imageHoverScale
      ? "transition-transform duration-700 ease-out hover:scale-[0.98]"
      : ""
  }`;
  const imageElement = (
    <Image
      className={`h-full w-full ${imageClassName ?? "object-cover"}`}
      src={image}
      alt={imageAlt}
      width={1481}
      height={1291}
      priority={priority}
    />
  );

  return (
    <div className={containerClass}>
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        {brandLayout ? (
          <div className="flex min-h-[22rem] flex-col justify-between gap-12 pb-8 pr-4 sm:min-h-[26rem] sm:pr-8 lg:min-h-0 lg:pb-0 lg:pr-12">
            <div className="flex w-fit items-center gap-1.5">
              {eyebrowIndex ? (
                <span
                  className={`brand-feature-label inline-flex rounded-[0.2rem] px-2.5 py-1 ${
                    eyebrowClassName ?? "bg-white text-black"
                  }`}
                >
                  {eyebrowIndex}
                </span>
              ) : null}
              <span
                className={`brand-feature-label inline-flex rounded-[0.2rem] px-2.5 py-1 ${
                  eyebrowClassName ?? "bg-white text-black"
                }`}
              >
                {eyebrow}
              </span>
            </div>

            <div>
              <h2
                className={
                  titleClassName ??
                  "max-w-3xl text-[clamp(3rem,6.2vw,7rem)] font-semibold leading-[0.88] tracking-normal"
                }
                style={
                  titleWeight === undefined
                    ? undefined
                    : { fontWeight: titleWeight }
                }
              >
                {title}
              </h2>
              <p
                className={`mt-5 max-w-[30rem] text-[15px] font-medium leading-[1.45] ${descriptionClass} ${descriptionClassName ?? ""}`}
              >
                {description}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex min-h-[28rem] flex-col justify-between p-5 sm:p-7 lg:min-h-0 lg:p-8">
            <div>
              <p className="mb-5 font-mono text-xs uppercase text-ink/45">
                {eyebrow}
              </p>
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
        )}

        {imageHref ? (
          <Link
            aria-label={imageLinkLabel ?? `View ${title}`}
            className={`${imageFrameClass} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink`}
            href={imageHref}
          >
            {imageElement}
          </Link>
        ) : (
          <div className={imageFrameClass}>{imageElement}</div>
        )}
      </div>
    </div>
  );
}

export function WorkCategoryPage({ category }: WorkCategoryPageProps) {
  const isBrandPage = category.slug === "brand";
  const pageColorClass = isBrandPage ? "bg-white text-ink" : "bg-black text-white";
  const categoryCurrentClass = isBrandPage
    ? "bg-ink text-paper"
    : "bg-white text-ink";
  const categoryInactiveClass = isBrandPage
    ? "bg-ink/10 text-ink hover:bg-ink/15"
    : "bg-white/15 text-white hover:bg-white/25";
  const featurePanels: CategoryFeaturePanelProps[] = [
    {
      description: isBrandPage
        ? "芋泥集是一组围绕东方甜品气质展开的品牌视觉实验。整体方向从食材的自然纹理、手作温度和轻盈的日常场景出发，用柔和但清晰的图形语言建立品牌记忆点。"
        : category.description,
      eyebrow: isBrandPage ? "Brand" : `My works / ${category.label}`,
      eyebrowIndex: isBrandPage ? "0.1 /" : undefined,
      eyebrowClassName: isBrandPage ? "bg-[#88bb4e] text-white" : undefined,
      image: isBrandPage ? "/images/brand-yuniji-info.jpg" : category.image,
      imageAlt: isBrandPage
        ? "芋泥集 brand visual"
        : `${category.title} category visual`,
      imageHref: isBrandPage ? "/works/brand/yuniji" : undefined,
      imageLinkLabel: "查看芋泥集作品详情",
      title: isBrandPage ? "芋泥集" : category.title,
      titleWeight: isBrandPage ? 600 : undefined,
      titleClassName: isBrandPage
        ? "brand-feature-title max-w-3xl"
        : undefined,
    },
    ...(isBrandPage
      ? [
          {
            description:
              "PetPets 是一套面向宠物咖啡馆的品牌视觉系统。项目尝试把亲密、活泼和轻松的情绪转化成可重复使用的图形资产，让品牌既有陪伴感，也有清楚的商业识别。",
            eyebrow: "Brand",
            eyebrowIndex: "0.2 /",
            eyebrowClassName: "bg-[#e0e0e0] text-black",
            image: "/images/brand-pet-info.jpg",
            imageAlt: "PetPets brand visual",
            imageHref: "/works/brand/petpets",
            imageLinkLabel: "查看 PetPets 作品详情",
            title: "PetPets",
            titleWeight: undefined,
            titleClassName: "brand-feature-title max-w-3xl",
          },
        ]
      : []),
  ];

  return (
    <main className={`min-h-screen ${pageColorClass}`}>
      <div className="px-4 pb-16">
        <SiteNav />

        <section className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          {isBrandPage ? (
            <header className="mb-10 flex items-end gap-5 border-b border-ink/25 pb-5 text-ink">
              <h1 className="brand-page-title shrink-0">
                <span>Brand</span>{" "}
                <span className="text-[#999999]">design</span>
              </h1>
            </header>
          ) : null}

          <div
            className={`grid ${
              isBrandPage ? "gap-14 lg:gap-16" : "gap-5"
            }`}
          >
            {featurePanels.map((panel, index) => (
              <CategoryFeaturePanel
                description={panel.description}
                eyebrow={panel.eyebrow}
                eyebrowIndex={panel.eyebrowIndex}
                eyebrowClassName={panel.eyebrowClassName}
                image={panel.image}
                imageAlt={panel.imageAlt}
                imageHref={panel.imageHref}
                imageLinkLabel={panel.imageLinkLabel}
                key={`${panel.title}-${index}`}
                priority={index === 0}
                title={panel.title}
                titleWeight={panel.titleWeight}
                brandLayout={isBrandPage}
                titleClassName={panel.titleClassName}
                descriptionClassName={
                  isBrandPage
                    ? "brand-feature-copy self-start text-left"
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

        </section>
      </div>

      <ContactFooter />
    </main>
  );
}
