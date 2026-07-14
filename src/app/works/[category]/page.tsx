import { notFound } from "next/navigation";
import { DynamicWorkPage } from "@/components/dynamic-work-page";
import { WorkCategoryPage } from "@/components/work-category-page";
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

export const dynamicParams = false;

function isDynamicWorkCategory(
  category: WorkCategory,
): category is DynamicWorkCategory {
  return category.slug === "dynamic";
}

export function generateStaticParams() {
  return workCategories
    .filter((category) => category.slug !== "visual")
    .map((category) => ({
      category: category.slug,
    }));
}

export async function generateMetadata({ params }: CategoryWorksPageProps) {
  const { category: slug } = await params;
  const category = getWorkCategory(slug);

  if (!category || category.slug === "visual") {
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

  if (!category || category.slug === "visual") {
    notFound();
  }

  if (isDynamicWorkCategory(category)) {
    return <DynamicWorkPage category={category} currentWork="geometry" />;
  }

  return <WorkCategoryPage category={category} />;
}
