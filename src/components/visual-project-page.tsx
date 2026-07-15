import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import type { VisualProject } from "@/lib/visual-projects";

type VisualProjectPageProps = {
  project: VisualProject;
};

export function VisualProjectPage({ project }: VisualProjectPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-4 pb-16">
        <SiteNav />

        <article className="mx-auto max-w-[100rem] pt-36 sm:pt-44">
          <Link
            className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            href="/works"
          >
            <ArrowLeft className="size-4" />
            Visual design
          </Link>

          <header className="grid gap-10 border-b border-white/25 pb-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-end">
            <div>
              <p className="font-montserrat text-sm uppercase text-white/45">
                {project.index} / Visual design
              </p>
              <h1 className="mt-5 font-montserrat text-[52px] font-medium leading-[0.9] tracking-normal text-white">
                {project.title}
              </h1>
            </div>

            <div className="grid gap-5">
              <p className="max-w-[38rem] font-['Taipei_Sans_TC_Beta',ui-sans-serif,sans-serif] text-[18px] font-normal leading-[1.6] text-white/72">
                {project.summary}
              </p>
              <Link
                className="inline-flex w-fit items-center gap-1.5 font-montserrat text-sm font-semibold text-white/55 transition hover:text-white"
                href="#gallery"
              >
                View project
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </header>

          <section className="grid gap-8 border-b border-white/15 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-start">
            <p className="font-montserrat text-sm uppercase text-white/35">
              Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className={`${tag.tone} rounded-full px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase leading-none`}
                  key={tag.label}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </section>

          <section className="grid gap-5 pt-10" id="gallery">
            {project.gallery.map((image, index) => (
              <figure
                className="overflow-hidden rounded-[0.4rem] bg-white"
                key={`${image.src}-${index}`}
              >
                <Image
                  alt={image.alt}
                  className="h-auto w-full"
                  height={image.height}
                  priority={index === 0}
                  src={image.src}
                  width={image.width}
                />
              </figure>
            ))}
          </section>
        </article>
      </div>

      <ContactFooter />
    </main>
  );
}
