"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectDetail = {
  title: string;
  backgroundLabel?: string;
  background: string;
  work: readonly {
    title: string;
    items: readonly string[];
  }[];
  resultLabel?: string;
  result: string;
};

type Internship = {
  index: string;
  title: string;
  en: string;
  role: string;
  period?: string;
  detail:
    | {
        kind: "paragraphs";
        paragraphs: readonly string[];
      }
    | {
        kind: "projects";
        overview: string;
        projects: readonly ProjectDetail[];
      };
};

const internships = [
  {
    index: "01",
    title: "京东",
    en: "JD.com",
    role: "AI产品实习生",
    period: "2025.07 - 2025.09",
    detail: {
      kind: "projects",
      overview:
        "负责京东“他她它”APP 核心 AI 模块迭代，主导 AIGC 生图功能全链路优化与 AI 智能体创建流程产品设计，聚焦“用户体验提升 + 功能价值落地”双目标，推动跨团队协同实现核心指标突破。",
      projects: [
        {
          title: "AIGC 生图功能迭代",
          background:
            "“他她它”APP 的 AIGC 生图功能仅覆盖 5 种基础画风，用户调研显示 70% 用户希望新增“厚涂”“韩系”“手绘”“赛博”等细分画风；同时现有生成内容存在穿模、四肢多手多脚、手部畸变等问题，需要从“画风多样性拓展 + 生成质量优化”双维度完成功能迭代。",
          work: [
            {
              title: "新增画风数量",
              items: [
                "竞品对标 + 用户需求锚定。调研猫箱（40 种画风）、星野（50 种画风）的高活画风类型，结合 300+ 用户问卷结果，锁定“厚涂”“国风”“韩范”“摄影”“治愈系手绘”“赛博”等 10 种高需求画风。",
                "开源模型测试 + 算法落地。测试 Stable Diffusion、Flux、Qwen Image 等多款开源基座模型，确定“Flux 基座 + LoRA 微调”与“Qwen Image + LoRA 微调”的组合方案，适配不同画风；推动算法团队完成 10 万张素材的模型训练。",
              ],
            },
            {
              title: "提升画风质量",
              items: [
                "工作流优化：提效生成链路。将原“串行生成”逻辑优化为“4 图并行 + 队列调度”，单图平均生成耗时从 30 秒降至 22 秒。",
                "搭建评测体系：多维度质量把控。落地“生成耗时、安全审查通过率、prompt 一致性（元素匹配度）、画风稳定性（多轮生成差异率）、异常率（画面畸变比例）”5 维评测体系。",
                "GSB 评测执行：输出优化依据。针对与猫箱、星野等重合的“厚涂”“手绘”“真人”画风开展 GSB 跨平台评测，输出 3 项待优化画风和归因，支撑算法迭代。",
              ],
            },
          ],
          result:
            "成功将 AIGC 画风种类从 5 种扩充至 20 种，新增画风周调用占比达 80%；手部畸变率从 25% 降至 6%，prompt 一致性提升至 88%；用户生图功能周使用率提升 18%。",
        },
        {
          title: "AI 智能体创建流程优化",
          background:
            "智能体创建流程存在 2 大核心问题：维度单一。根据用户 query 自动扩写的人设内容单一，多样化程度不足；流程繁琐。需手动填写开场白信息，用户反馈创建完成率低，影响使用体验。",
          work: [
            {
              title: "创建流程核心优化",
              items: [
                "开场白自动化。参考竞品“开场白自动生成”功能，撰写 Prompt 指令，实现“用户填写基础人设 → 智能体自动扩写人设细节 → 基于扩写人设生成差异化开场白”的全流程自动化，无需用户手动输入。",
                "人设维度扩充。参考竞品的人设维度，撰写 Prompt 实现人设扩写与细化，细化出“慢热细腻”“毒舌吐槽”“元气开朗”等 12 个细分人设 Prompt 生成模板，用户可直接选用或在此基础上微调。",
              ],
            },
          ],
          result:
            "智能体创建完成率提升 8%，用户手动填写内容量减少 30%。",
        },
      ],
    },
  },
  {
    index: "02",
    title: "新东方",
    en: "New Oriental",
    role: "考研手绘教师",
    period: "2024.07 - 2024.11",
    detail: {
      kind: "projects",
      overview: "负责艺术考研手绘一对一教学。",
      projects: [
        {
          title: "艺术考研手绘一对一教学优化",
          background:
            "备考学生存在色彩搭配意识薄弱的问题，影响手绘的最终画面表现力。",
          work: [
            {
              title: "明确改进方向",
              items: [
                "通过练习作品诊断问题为“画面色彩过多”“色调不协调”。根据目标院校的喜好，明确醒目分明的色彩搭配模式，限制学生在绘画时使用的颜色数量。",
              ],
            },
            {
              title: "结合实操优化",
              items: [
                "在学生练习后，指出画面色彩问题，进行针对性的手绘示范，并让学生对问题部分重新绘画。",
              ],
            },
          ],
          result: "最终帮助学生在考研手绘 150 满分的情况下达到 132 分。",
        },
      ],
    },
  },
  {
    index: "03",
    title: "永和大王",
    en: "Yonghe King",
    role: "平面设计实习生",
    period: "2023.03 - 2023.07",
    detail: {
      kind: "projects",
      overview: "负责更新南京线下门店“大磨王早餐”系列物料设计。",
      projects: [
        {
          title: "大磨王早餐系列物料更新",
          backgroundLabel: "工作背景",
          background:
            "原有设计在视觉层面存在信息传递不明确的问题，导致消费者到店消费时对于产品内容产生误解，影响消费决策。明确信息传递不明确的主要原因为物料中文字与图片布局不当。",
          work: [
            {
              title: "确保单物料聚焦“1”个核心目的",
              items: [
                "远距离物料（电子屏 / 围挡等）突出产品图占比，明确当前卖点；近距离物料（桌贴等）则优化“点单码”与“会员码”版式，避免错误扫码。",
              ],
            },
            {
              title: "统一视觉秩序",
              items: [
                "画面限定字体与色彩数量，明确文本字号区分，避免信息识别混乱。",
              ],
            },
          ],
          resultLabel: "工作结果",
          result: "最终产出 50+ 符合规范的系列物料设计，并应用于南京区域门店。",
        },
      ],
    },
  },
  {
    index: "04",
    title: "南京嘉木健康",
    en: "Nanjing Jiamu Health",
    role: "平面设计实习生",
    period: "2022.09 - 2022.12",
    detail: {
      kind: "projects",
      overview:
        "负责公司“儿童体教医融合健康促优项目”中幼儿园系列课程教材的画册设计。",
      projects: [
        {
          title: "幼儿园系列课程教材画册设计",
          backgroundLabel: "工作背景",
          background:
            "原始教材存在两方面问题：内容罗列不清晰，教师常需额外梳理课程内容，降低了备课效率；缺少辅助插图，教材内容多以文字呈现，儿童在课堂上难以理解，导致学习兴趣低、吸收效果差。",
          work: [
            {
              title: "统一划分课程内容",
              items: [
                "版式设计上，按 5 个模块对不同课程进行统一划分，明确课程内容，提高备课效率。",
              ],
            },
            {
              title: "专题插画设计",
              items: [
                "结合课程内容进行辅助插画设计，将抽象知识具象化，降低儿童理解门槛。",
              ],
            },
          ],
          resultLabel: "工作结果",
          result:
            "产品顺利在南京金穗花园幼儿园、南京市鹤鸣幼儿园和南京市莲花嘉园第一幼儿园中推行。",
        },
      ],
    },
  },
] as const satisfies readonly Internship[];

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
                <div className="flex flex-col items-end">
                  <span className="max-w-32 text-right font-montserrat text-sm leading-tight text-ink/45 sm:max-w-none">
                    {internship.en}
                  </span>
                  {internship.period ? (
                    <span className="mt-8 text-right font-taipei text-base leading-[1.6] text-ink/65 lg:text-[18px]">
                      {internship.period}
                    </span>
                  ) : null}
                  <ArrowUpRight
                    aria-hidden="true"
                    className={cn(
                      "mt-auto size-5 text-ink/35 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isExpanded &&
                        (internship.period
                          ? "translate-x-1 translate-y-2 text-ink"
                          : "-translate-y-1 translate-x-1 text-ink"),
                      internship.period && !isExpanded && "translate-y-2",
                    )}
                  />
                </div>
              </div>
              <div className="min-h-0 overflow-hidden">
                <div className="pb-7 pl-[2.75rem] sm:pl-[5.25rem] lg:pb-9">
                  {internship.detail.kind === "projects" ? (
                    <div className="max-w-[82rem]">
                      <section className="mb-10 lg:mb-12">
                        <h4 className="font-taipei text-xl font-semibold leading-tight text-ink lg:text-2xl">
                          工作概述
                        </h4>
                        <p className="mt-4 max-w-5xl font-taipei text-base leading-[1.6] text-ink/70 lg:text-[18px]">
                          {internship.detail.overview}
                        </p>
                      </section>
                      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                        {internship.detail.projects.map((project, projectIndex) => (
                          <section
                            key={project.title}
                            className={cn(projectIndex === 1 && "lg:translate-x-8")}
                          >
                            <h4 className="font-taipei text-xl font-semibold leading-tight text-ink lg:text-2xl">
                              {project.title}
                            </h4>
                            <div className="mt-5 space-y-4 font-taipei text-base leading-[1.6] text-ink/70 lg:text-[18px]">
                              <p>
                                <span className="font-medium text-ink">
                                  {project.backgroundLabel ?? "项目背景"}：
                                </span>
                                {project.background}
                              </p>
                              <div>
                                <span className="font-medium text-ink">工作内容：</span>
                                <ol className="mt-2 space-y-2 pl-6">
                                  {project.work.map((section, sectionIndex) => (
                                    <li key={section.title} className="pl-1">
                                      <span className="-ml-5 inline-block w-5">
                                        {sectionIndex + 1}.
                                      </span>
                                      <span className="font-medium text-ink">{section.title}</span>
                                      <ol className="mt-2 space-y-2 pl-6">
                                        {section.items.map((item, itemIndex) => (
                                          <li key={item} className="pl-1">
                                            <span className="-ml-5 inline-block w-5">
                                              {itemIndex + 1})
                                            </span>
                                            {item}
                                          </li>
                                        ))}
                                      </ol>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                              <p>
                                <span className="font-medium text-ink">
                                  {project.resultLabel ?? "项目结果"}：
                                </span>
                                {project.result}
                              </p>
                            </div>
                          </section>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid max-w-[82rem] gap-10 lg:grid-cols-2 lg:gap-14">
                      <div className="space-y-4 font-taipei text-base leading-[1.6] text-ink/70 lg:text-[18px]">
                        {internship.detail.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
