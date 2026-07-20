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

type ProjectVideo = {
  label: string;
  src: string;
};

export type VisualProject = {
  cardVideo?: string;
  cardVideoScale?: string;
  gallery: ProjectImage[];
  galleryLayout?:
    | "mood-index-grid"
    | "practice-and-other-stack"
    | "three-placeholders-and-banner";
  galleryIntro?: ProjectImage;
  placeholderVideos?: ProjectVideo[];
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
    summary:
      "通过蛙蛙慢慢适应交通规则的过程来隐喻人们从面对未尝新事物时的局促，到慢慢适应新变化、新环境的过程。呼吁观者像蛙蛙一样奔跃向前，遇到挫折要勇于面对，对未来的生活充满希望。",
    image: {
      src: "/images/project-field-notes-76.jpg",
      alt: "Field Notes project visual",
      width: 3488,
      height: 3069,
      fit: "contain",
    },
    tags: [
      { label: "POSTER", tone: "text-[#b54500] bg-[#f0e4d8]" },
      { label: "VISUAL", tone: "text-white bg-[#2f2f2f]" },
    ],
    gallery: [
      {
        src: "/images/waqu-1.jpg",
        alt: "蛙趣看世界视觉模块 01",
        width: 3404,
        height: 1774,
      },
      {
        src: "/images/waqu-2.jpg",
        alt: "蛙趣看世界视觉模块 02",
        width: 3404,
        height: 1790,
      },
      {
        src: "/images/waqu-3.jpg",
        alt: "蛙趣看世界视觉模块 03",
        width: 3404,
        height: 1951,
      },
      {
        src: "/images/waqu-37.jpg",
        alt: "蛙趣看世界视觉模块 04",
        width: 3403,
        height: 1971,
      },
      {
        src: "/images/waqu-38.jpg",
        alt: "蛙趣看世界视觉模块 05",
        width: 3402,
        height: 1950,
      },
      {
        src: "/images/waqu-39.jpg",
        alt: "蛙趣看世界视觉模块 06",
        width: 3403,
        height: 2148,
      },
    ],
  },
  {
    slug: "soft-lab",
    href: "/works/visual/soft-lab",
    index: "02",
    title: "扶龍直上",
    summary:
      "作品提取出古代龙纹盘中的神龍形象进行再创造。通过打破重组的方式，结合现代设计手法，重塑了神龍的形象。寓意打破常规，突破自我，像神龍一般不惧万难，乘风而起扶摇直上九万里。",
    image: {
      src: "/images/project-soft-lab-78.jpg",
      alt: "扶龍直上 project visual",
      width: 3517,
      height: 3069,
      fit: "contain",
    },
    cardVideo: "/videos/soft-lab-jujilong.mp4",
    cardVideoScale: "scale-[1.7]",
    tags: [
      { label: "TOUCH DESIGN", tone: "text-[#0074a6] bg-[#d8edf4]" },
      { label: "POSTER", tone: "text-white bg-[#2f2f2f]" },
    ],
    galleryLayout: "three-placeholders-and-banner",
    galleryIntro: {
      src: "/images/soft-lab-visual-36.jpg",
      alt: "扶龍直上视觉模块概览",
      width: 4325,
      height: 3071,
    },
    placeholderVideos: [
      {
        src: "/videos/soft-lab-long.mp4",
        label: "扶龍直上视觉模块 01",
      },
      {
        src: "/videos/soft-lab-jujilong.mp4",
        label: "扶龍直上视觉模块 02",
      },
      {
        src: "/videos/soft-lab-juqiulong.mp4",
        label: "扶龍直上视觉模块 03",
      },
    ],
    gallery: [
      {
        src: "/images/soft-lab-35.jpg",
        alt: "扶龍直上视觉模块 04",
        width: 3357,
        height: 1569,
      },
    ],
  },
  {
    slug: "open-signal",
    href: "/works/visual/open-signal",
    index: "03",
    title: "当下的秘密寄给远方的自己",
    summary:
      "年少时的我们总有许多秘密，偷藏在心底。它们代表着我们成长的痕迹。我将年少的秘密藏在书中，邮寄给未来的自己，用摩斯密码的解密让未来的自己回忆起年少时成长的痕迹。",
    image: {
      src: "/images/project-open-signal-03.jpg",
      alt: "当下的秘密寄给远方的自己 project visual",
      width: 3488,
      height: 3069,
      fit: "contain",
    },
    tags: [
      { label: "BOOK", tone: "text-[#b54500] bg-[#f0e4d8]" },
      { label: "VISUAL", tone: "text-white bg-[#2f2f2f]" },
    ],
    gallery: [
      {
        src: "/images/open-signal-book-1.jpg",
        alt: "当下的秘密寄给远方的自己视觉模块 01",
        width: 3508,
        height: 4961,
      },
      {
        src: "/images/open-signal-book-2.jpg",
        alt: "当下的秘密寄给远方的自己视觉模块 02",
        width: 3508,
        height: 4961,
      },
    ],
  },
  {
    slug: "mood-index",
    href: "/works/visual/mood-index",
    index: "04",
    title: "YUE JIA",
    summary: "YUEJIA MEDIA以“像素风”为切入点，定位为“只做精致女团”的团播品牌",
    image: {
      src: "/images/project-mood-index-04.jpg",
      alt: "YUE JIA project visual",
      width: 3517,
      height: 3069,
      fit: "contain",
    },
    tags: [
      { label: "MEDIA", tone: "text-[#0074a6] bg-[#d8edf4]" },
      { label: "VISUAL", tone: "text-white bg-[#2f2f2f]" },
    ],
    galleryLayout: "mood-index-grid",
    gallery: [
      {
        src: "/images/yuejia-1.jpg",
        alt: "YUE JIA visual module 01",
        width: 3414,
        height: 649,
      },
      {
        src: "/images/yuejia-2.jpg",
        alt: "YUE JIA visual module 02",
        width: 1830,
        height: 3254,
      },
      {
        src: "/images/yuejia-3.jpg",
        alt: "YUE JIA visual module 03",
        width: 1517,
        height: 3249,
      },
      {
        src: "/images/yuejia-4.jpg",
        alt: "YUE JIA visual module 04",
        width: 2533,
        height: 1322,
      },
      {
        src: "/images/yuejia-5.jpg",
        alt: "YUE JIA visual module 05",
        width: 822,
        height: 1322,
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
      { label: "PRACTISE", tone: "text-white bg-[#2f2f2f]" },
      { label: "VISUAL", tone: "text-[#595959] bg-[#d9d9d9]" },
    ],
    galleryLayout: "practice-and-other-stack",
    gallery: [
      {
        src: "/images/qita-1.jpg",
        alt: "其他作品视觉模块 01",
        width: 2662,
        height: 2313,
      },
      {
        src: "/images/qita-2.jpg",
        alt: "其他作品视觉模块 02",
        width: 3404,
        height: 1604,
      },
      {
        src: "/images/qita-3.jpg",
        alt: "其他作品视觉模块 03",
        width: 3405,
        height: 1990,
      },
    ],
  },
];

export function getVisualProject(slug: string) {
  return visualProjects.find((project) => project.slug === slug);
}
