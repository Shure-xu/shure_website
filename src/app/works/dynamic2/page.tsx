import { notFound } from "next/navigation";
import { DynamicWorkPage } from "@/components/dynamic-work-page";
import { getWorkCategory, type WorkCategory } from "@/lib/work-categories";

type DynamicWorkCategory = Extract<WorkCategory, { slug: "dynamic" }>;

function isDynamicWorkCategory(
  category: WorkCategory,
): category is DynamicWorkCategory {
  return category.slug === "dynamic";
}

export const metadata = {
  title: "你好： | Shure Works",
  description: "Dynamic Design work detail page.",
};

export default function DynamicWorkTwoPage() {
  const category = getWorkCategory("dynamic");

  if (!category || !isDynamicWorkCategory(category)) {
    notFound();
  }

  return <DynamicWorkPage category={category} currentWork="hello" />;
}
