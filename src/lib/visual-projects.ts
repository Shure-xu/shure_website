type ProjectTag = {
  label: string;
  tone: string;
};

type ProjectImage = {
  alt: string;
  fit?: "contain" | "cover";
  height: number;
  scale?: boolean;
  src: string;
  width: number;
};

export type VisualProject = {
  gallery: ProjectImage[];
  href: string;
  image: ProjectImage;
  index: string;
  slug: string;
  summary: string;
  tags: ProjectTag[];
  title: string;
};

export const visualProjects: VisualProject[] = [
  {
    slug: "field-notes",
    href: "/works/visual/field-notes",
    index: "01",
    title: "蛙趣看世界",
    summary: "把零散想法整理成有节奏的首页叙事，让一个人先被看见，再被理解。",
    image: {
      src: "/images/project-field-notes-76.jpg",
      alt: "Field Notes project visual",
      width: 3488,
      height: 3069,
      fit: "contain",
    },
    tags: [
      { label: "BRAND", tone: "text-[#b54500] bg-[#f0e4d8]" },
      { label: "HOMEPAGE", tone: "text-white bg-[#2f2f2f]" },
    ],
    gallery: [
      {
        src: "/images/project-field-notes-76.jpg",
        alt: "Field Notes visual module 01",
        width: 3488,
        height: 3069,
      },
      {
        src: "/images/notes-paper-sky.png",
        alt: "Field Notes visual module 02",
        width: 2816,
        height: 1536,
      },
    ],
  },
  {
    slug: "soft-lab",
    href: "/works/visual/soft-lab",
    index: "02",
    title: "扶龍直上",
    summary: "为创作者设计轻量内容系统，让作品、笔记、服务入口自然连接。",
    image: {
      src: "/images/project-soft-lab-78.jpg",
      alt: "扶龍直上 project visual",
      width: 3517,
      height: 3069,
      fit: "contain",
    },
    tags: [
      { label: "SYSTEM", tone: "text-[#0074a6] bg-[#d8edf4]" },
      { label: "AI FLOW", tone: "text-white bg-[#2f2f2f]" },
    ],
    gallery: [
      {
        src: "/images/project-soft-lab-78.jpg",
        alt: "扶龍直上 visual module 01",
        width: 3517,
        height: 3069,
      },
      {
        src: "/images/h3-metal-texture.jpg",
        alt: "扶龍直上 visual module 02",
        width: 3840,
        height: 2560,
      },
    ],
  },
  {
    slug: "open-signal",
    href: "/works/visual/open-signal",
    index: "03",
    title: "当下的秘密寄给远方的自己",
    summary: "用杂志式排版和强色块承载研究、洞察，以及可以继续执行的下一步。",
    image: {
      src: "/images/project-open-signal-03.jpg",
      alt: "当下的秘密寄给远方的自己 project visual",
      width: 3488,
      height: 3069,
      fit: "contain",
    },
    tags: [
      { label: "EDITORIAL", tone: "text-[#b54500] bg-[#f0e4d8]" },
      { label: "VISUAL", tone: "text-white bg-[#2f2f2f]" },
    ],
    gallery: [
      {
        src: "/images/project-open-signal-03.jpg",
        alt: "当下的秘密寄给远方的自己 visual module 01",
        width: 3488,
        height: 3069,
      },
      {
        src: "/images/notes-paper-sky.png",
        alt: "当下的秘密寄给远方的自己 visual module 02",
        width: 2816,
        height: 1536,
      },
    ],
  },
  {
    slug: "mood-index",
    href: "/works/visual/mood-index",
    index: "04",
    title: "YUE JIA",
    summary: "一个记录每日心情、灵感和小实验的界面原型，像私人电台一样慢慢更新。",
    image: {
      src: "/images/project-mood-index-04.jpg",
      alt: "YUE JIA project visual",
      width: 3517,
      height: 3069,
      fit: "contain",
    },
    tags: [
      { label: "EXPERIENCE", tone: "text-[#0074a6] bg-[#d8edf4]" },
      { label: "INTERFACE", tone: "text-white bg-[#2f2f2f]" },
    ],
    gallery: [
      {
        src: "/images/project-mood-index-04.jpg",
        alt: "YUE JIA visual module 01",
        width: 3517,
        height: 3069,
      },
      {
        src: "/images/h3-metal-texture.jpg",
        alt: "YUE JIA visual module 02",
        width: 3840,
        height: 2560,
      },
    ],
  },
  {
    slug: "practice-and-other",
    href: "/works/visual/practice-and-other",
    index: "05",
    title: "其他作品",
    summary: "其他",
    image: {
      src: "/images/project-practice-and-other-80.jpg",
      alt: "其他作品 project visual",
      width: 3488,
      height: 3069,
      fit: "contain",
      scale: false,
    },
    tags: [
      { label: "other", tone: "text-white bg-[#2f2f2f]" },
      { label: "vision", tone: "text-[#595959] bg-[#d9d9d9]" },
    ],
    gallery: [
      {
        src: "/images/project-practice-and-other-80.jpg",
        alt: "其他作品 visual module 01",
        width: 3488,
        height: 3069,
      },
      {
        src: "/images/project-practice-and-other-80.jpg",
        alt: "其他作品 visual module 02",
        width: 3488,
        height: 3069,
      },
    ],
  },
];

export function getVisualProject(slug: string) {
  return visualProjects.find((project) => project.slug === slug);
}
