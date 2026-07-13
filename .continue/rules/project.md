<!-- AUTO-GENERATED from AGENTS.md — do not edit directly.
     Run `bash scripts/sync-agent-rules.sh` to regenerate. -->

---
description: Project conventions for AI Website Clone Template
alwaysApply: true
---
<!-- BEGIN:nextjs-agent-rules -->
# 重要：这不是旧版本的 Next.js

当前项目使用的 Next.js 版本可能包含和旧经验不同的 API、约定与文件结构。写代码前，如果涉及 Next.js 行为、路由、构建或配置，优先阅读 `node_modules/next/dist/docs/` 中的相关说明，并留意废弃提示。
<!-- END:nextjs-agent-rules -->

# 个人网站协作规则

## 工作方式

1. 每次执行任务前，必须先列出清晰计划，并等待用户确认后再开始修改、运行命令或生成文件。
2. 如果需求存在不确定处，先向用户提问，不要擅自猜测。
3. 修改网站时，优先遵循用户给出的标注、截图、页面注释和文字要求。
4. 每次任务完成后，说明修改了哪些文件、文件位置，以及验证结果。
5. 优先使用项目已有结构、组件、样式系统和 Skills。只有在没有合适现有方案时，才考虑新增 Skill 或新抽象。
6. 不要回滚用户或其他流程已经产生的改动；如果发现无关文件已有改动，保持不动。

## 用户与项目定位

1. 用户是视觉传达设计方向的学生，正在建设个人网站。
2. Codex 在本项目中应扮演资深网站设计师与前端工程协作者，重点关注页面版式、组件位置、页面动效、响应式交互、视觉细节和完整网站落地流程。
3. 作品页应优先呈现作品本身，避免无意义的装饰、过度解释和不必要模块。

## 网站文字与排版标准

1. 页面中文主标题气质：克制、有展览感、偏视觉设计档案，不做营销式大标题。
2. 桌面端中文主标题字号默认使用 `52px`。手机端字号暂不固定，后续根据页面实际效果单独确认。
3. 中文主标题与中文正文优先使用 `"Taipei Sans TC Beta"`；如果设备未安装该字体，回退到系统无衬线中文字体。
4. 英文主标题与英文正文优先使用 `"Montserrat"`；如果字体不可用，回退到系统无衬线英文字体。
5. 标题可以加粗，但正文不要过粗，避免页面显得拥挤。
6. 正文应偏“作品说明牌”气质，不写成长篇宣传文案。桌面端单段正文尽量控制在 `100` 个中文字符以内。
7. 桌面端正文字号默认使用 `18px`，行高默认使用 `1.6`。
8. 如果作品介绍内容较长，应拆成 `2-4` 段，每段约 `2-3` 行，保证阅读节奏清楚。
9. 正文行宽要主动控制，不要让文字横向铺满整屏。桌面端优先控制在适合阅读的窄行宽。
10. 模块中的小标签、英文注释和 eyebrow 文案目前先保留，但不能喧宾夺主。
11. 作品列表跳转项应做成黑底页面里的简洁文字行，右侧保留箭头，间距清楚，不使用灰色或白色块状底。

## 动态作品页当前规则

1. `/works/dynamic` 顶部视频模块只放视频，不放文字内容。
2. 视频模块、作品名、作品介绍、作品列表跳转、作品图片展示、分类切换按钮区、分类作品列表区按用户标注顺序排列。
3. 不随意调整页面和边缘的距离、固定圆角比例、固定组件间距比例。
4. 目前保留分类切换按钮区和分类作品列表区。

## 技术栈

- 框架：Next.js 16 App Router、React 19、TypeScript strict
- 样式：Tailwind CSS v4、oklch 设计 token
- UI：shadcn/ui、项目内 `cn()` 工具
- 图标：Lucide React
- 部署：Vercel

## 常用命令

- `npm run dev`：启动本地开发服务
- `npm run lint`：运行 ESLint
- `npm run typecheck`：运行 TypeScript 检查
- `npm run build`：运行正式构建
- `npm run check`：依次运行 lint、typecheck、build

## 代码风格

1. 使用 TypeScript strict mode，避免 `any`。
2. 组件使用 PascalCase，工具函数使用 camelCase。
3. 优先使用 Tailwind utility class，不随意添加 inline style。
4. 使用 2 空格缩进。
5. 响应式实现以 mobile-first 为基础，但当前用户优先关注桌面端效果时，应先保证桌面端准确。

## 项目结构

```text
src/
  app/              # Next.js 路由
  components/       # React 组件
    ui/             # shadcn/ui 基础组件
  lib/              # 工具函数与数据
public/
  images/           # 图片素材
  videos/           # 视频素材
docs/
  research/         # 页面研究和检查记录
  design-references/ # 视觉参考图
scripts/            # 同步和辅助脚本
```

## 维护注意事项

1. 修改 `AGENTS.md` 后，运行 `bash scripts/sync-agent-rules.sh`，同步生成其他平台的说明文件。
2. 修改 `.claude/skills/clone-website/SKILL.md` 后，运行 `node scripts/sync-skills.mjs`。
3. 如果使用多个 agent 或分支协作，每个 agent 应在独立 worktree 分支工作，最后再合并并处理冲突。

# Website Inspection Guide

## How to Reverse-Engineer Any Website

This guide outlines what to capture when inspecting a target website via Chrome MCP or browser DevTools.

## Phase 1: Visual Audit

### Screenshots to Capture
- [ ] Every distinct page — desktop, tablet, mobile
- [ ] Dark mode variants (if applicable)
- [ ] Light mode variants (if applicable)
- [ ] Key interaction states (hover, active, open menus, modals)
- [ ] Loading/skeleton states
- [ ] Empty states
- [ ] Error states

### Design Tokens to Extract
- [ ] **Colors** — background, text (primary/secondary/muted), accent, border, hover, error, success, warning
- [ ] **Typography** — font family, sizes (h1-h6, body, caption, label), weights, line heights, letter spacing
- [ ] **Spacing** — padding/margin patterns (look for a scale: 4px, 8px, 12px, 16px, 24px, 32px, etc.)
- [ ] **Border radius** — buttons, cards, avatars, inputs
- [ ] **Shadows/elevation** — card shadows, dropdown shadows, modal overlay
- [ ] **Breakpoints** — when does the layout shift? (inspect with DevTools responsive mode)
- [ ] **Icons** — which icon library? custom SVGs? sizes?
- [ ] **Avatars** — sizes, shapes, fallback behavior
- [ ] **Buttons** — all variants (primary, secondary, ghost, icon-only, danger)
- [ ] **Inputs** — text fields, textareas, selects, checkboxes, toggles

## Phase 2: Component Inventory

For each distinct UI component, document:
1. **Name** — what would you call this component?
2. **Structure** — what HTML elements / child components does it contain?
3. **Variants** — does it have different sizes, colors, or states?
4. **States** — default, hover, active, disabled, loading, error, empty
5. **Responsive behavior** — how does it change at different breakpoints?
6. **Interactions** — click, hover, focus, keyboard navigation
7. **Animations** — transitions, entrance/exit animations, micro-interactions

### Common Components to Look For
- Navigation (top bar, sidebar, bottom bar)
- Cards / list items
- Buttons and links
- Forms and inputs
- Modals and dialogs
- Dropdowns and menus
- Tabs and segmented controls
- Avatars and user badges
- Loading skeletons
- Toast notifications
- Tooltips and popovers

## Phase 3: Layout Architecture

- [ ] **Grid system** — CSS Grid? Flexbox? Fixed widths?
- [ ] **Column layout** — how many columns at each breakpoint?
- [ ] **Max-width** — main content area max-width
- [ ] **Sticky elements** — header, sidebar, floating buttons
- [ ] **Z-index layers** — navigation, modals, tooltips, overlays
- [ ] **Scroll behavior** — infinite scroll, pagination, virtual scrolling

## Phase 4: Technical Stack Analysis

- [ ] **Framework** — React? Vue? Angular? Check `__NEXT_DATA__`, `__NUXT__`, `ng-version`
- [ ] **CSS approach** — Tailwind (utility classes), CSS Modules, Styled Components, Emotion, vanilla CSS
- [ ] **State management** — Redux (check DevTools), React Query, Zustand, Pinia
- [ ] **API patterns** — REST, GraphQL (check network tab for `/graphql` requests)
- [ ] **Font loading** — Google Fonts, self-hosted, system fonts
- [ ] **Image strategy** — CDN, lazy loading, srcset, WebP/AVIF
- [ ] **Animation library** — Framer Motion, GSAP, CSS transitions only

## Phase 5: Documentation Output

After inspection, create these files in `docs/research/`:
1. `DESIGN_TOKENS.md` — All extracted colors, typography, spacing
2. `COMPONENT_INVENTORY.md` — Every component with structure notes
3. `LAYOUT_ARCHITECTURE.md` — Page layouts, grid system, responsive behavior
4. `INTERACTION_PATTERNS.md` — Animations, transitions, hover states
5. `TECH_STACK_ANALYSIS.md` — What the site uses and our chosen equivalents
