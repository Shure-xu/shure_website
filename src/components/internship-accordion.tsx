"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const internships = [
  {
    index: "01",
    title: "京东",
    en: "JD.com",
    role: "AI产品实习生",
    description:
      "参与电商场景下 AI 工具的体验梳理与页面表达，协助收集用户反馈、整理典型任务路径，并将零散需求转化为可讨论的界面草图和内容结构。围绕商品信息、问答与生成结果的呈现，持续调整层级、语气和反馈节奏，也在跨团队沟通中学习如何让一个想法更快落到具体页面。",
  },
  {
    index: "02",
    title: "新东方",
    en: "New Oriental",
    role: "考研手绘教师",
    description:
      "负责考研手绘课程相关的示范图、课件页面与课堂素材制作。根据不同阶段的训练目标，拆解构图、透视、色彩与版式的重点，并把复杂的绘画步骤整理成更易理解的示意和讲解节奏。也参与作业反馈与素材归档，在反复修改中练习清楚、耐心地传递方法。",
  },
  {
    index: "03",
    title: "永和大王",
    en: "Yonghe King",
    role: "平面设计实习生",
    description:
      "围绕餐饮品牌的日常传播需求，参与海报、门店物料与活动页面的视觉延展。工作中需要在既有品牌规范内处理信息层级、图片选择和版式节奏，同时兼顾不同尺寸与线下使用场景。通过快速出稿、比对反馈和反复校正，积累了更具体的商业设计执行经验。",
  },
  {
    index: "04",
    title: "南京嘉木健康",
    en: "Nanjing Jiamu Health",
    role: "平面设计实习生",
    description:
      "参与健康服务相关的内容视觉整理，包括社交媒体配图、科普长图与基础宣传物料。面对较多文字和专业信息时，尝试用清晰的分区、图像提示与留白建立阅读顺序，并根据不同受众调整表达密度。在素材整理和版本迭代中，也持续学习如何让信息保持准确而不过分生硬。",
  },
] as const;

export function InternshipAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  function toggleInternship(index: string) {
    setExpandedIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>, index: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleInternship(index);
    }
  }

  return (
    <div
      className="border-t border-ink/30"
      onMouseLeave={() => setExpandedIndex(null)}
    >
      {internships.map((internship) => {
        const isExpanded = expandedIndex === internship.index;

        return (
          <article
            aria-expanded={isExpanded}
            aria-label={`${internship.title}，${internship.role}`}
            className="group cursor-pointer border-b border-ink/30 outline-none transition-colors focus-visible:bg-ink/[0.03]"
            key={internship.index}
            onClick={() => setExpandedIndex(internship.index)}
            onFocus={() => setExpandedIndex(internship.index)}
            onKeyDown={(event) => handleKeyDown(event, internship.index)}
            onMouseEnter={() => setExpandedIndex(internship.index)}
            role="button"
            tabIndex={0}
          >
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isExpanded ? "grid-rows-[auto_1fr]" : "grid-rows-[auto_0fr]",
              )}
            >
              <div
                className={cn(
                  "grid min-h-[7.25rem] grid-cols-[2.75rem_1fr_auto] gap-x-4 py-5 sm:grid-cols-[3.75rem_1fr_auto] sm:gap-x-6 lg:min-h-[8.5rem] lg:py-6",
                  isExpanded && "lg:min-h-[9rem]",
                )}
              >
                <p className="font-montserrat text-sm text-ink/45">
                  {internship.index}
                </p>
                <div>
                  <h3 className="font-taipei text-2xl font-semibold leading-tight lg:text-[28px]">
                    {internship.title}
                  </h3>
                  <p className="mt-3 font-taipei text-base leading-[1.6] text-ink/65 lg:text-[18px]">
                    {internship.role}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between gap-4">
                  <span className="max-w-32 text-right font-montserrat text-sm leading-tight text-ink/45 sm:max-w-none">
                    {internship.en}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className={cn(
                      "size-5 text-ink/35 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isExpanded && "-translate-y-1 translate-x-1 text-ink",
                    )}
                  />
                </div>
              </div>
              <div className="min-h-0 overflow-hidden">
                <div className="pb-7 pl-[2.75rem] sm:pl-[3.75rem] lg:max-w-[44rem] lg:pb-9">
                  <p className="max-w-[42rem] font-taipei text-base leading-[1.6] text-ink/70 lg:text-[18px]">
                    {internship.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
