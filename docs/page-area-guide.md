# 页面、跳转与版式指南

这份文档记录网站当前已经实现的页面结构，方便在发截图或描述需求时准确指出区域。内容以当前代码为准；数值未特别标注时均为桌面端（`lg`，宽度 `≥1024px`）的 CSS 像素值。

## 1. 使用方法

建议描述需求时使用以下格式：

```text
页面：/works
区域：W3 作品卡片网格
需求：把第一行与第二行的垂直间距从 64px 改为 48px，横向间距保持不变。
```

如果不确定编号，也可以直接在截图上框选，并说明「作品卡片下方文字区」或「视频到标题之间的空白」。本指南的区域名称和编号只用于沟通，不会显示在网页上。

---

## 2. 全站基础规则

### 2.1 页面容器与断点

| 项目 | 当前实现 |
| --- | --- |
| 页面左右边距 | 外层统一 `16px`（`px-4`） |
| 内容最大宽度 | `1600px`（`max-w-[100rem]`），在页面中水平居中 |
| 主要内容顶部 | 大多数作品页从导航下方开始，`pt-44 = 176px` |
| 小屏断点 | `sm = 640px`：部分标题、内边距与最小高度变大 |
| 桌面断点 | `lg = 1024px`：多栏网格启用，本文的“桌面端间距”以此为准 |
| 常用圆角 | `0.4rem`，约 `6.4px`；标签使用 `0.2rem` 或药丸圆角 |
| 主色 | 内容页主要为黑底白字；首页为白底深色字；品牌详情与视觉详情为黑底白字 |

### 2.2 字体

| 使用场景 | 当前字体与规格 |
| --- | --- |
| 全站默认文字 | `Geist`；未单独指定字体的英文标题、卡片文字和部分说明会使用它 |
| 中文标题、中文正文 | `Taipei Sans TC Beta`，本地加载 `400 / 700`；不可用时回退到常见中文无衬线字体 |
| 英文标题、英文正文 | `Montserrat`，本地加载 `400 / 500 / 600`；不可用时回退到系统无衬线字体 |
| 信息编号、标签 | `Geist Mono`（`font-mono`），多为 `12px` 或 `10.88px` |
| 作品详情中文正文 | `Taipei Sans TC Beta`，`18px / 1.6`（视觉详情）或 `18px / 1.6`（品牌详情） |
| 动态作品正文 | `Taipei Sans TC Beta`，`20px / 1.6`，最大行宽 `768px` |

当前几个标题例外：

- `.brand-page-title`：Montserrat，桌面端 `60px / 0.82`，`font-weight: 300`。
- `.dynamic-work-title`：Taipei Sans TC Beta，`52px / 0.9`，`700`。
- `.brand-detail-title`：Taipei Sans TC Beta，桌面端 `80px / 0.86`，`700`。
- `.dynamic-work-page-title`：Eskapade Italic 优先，回退 Montserrat，`clamp(52px, 4.3vw, 76px) / 0.82`，`800 italic`。

### 2.3 常用间距换算

| Tailwind 类 | 实际值 | 当前常见用途 |
| --- | ---: | --- |
| `gap-3.5` | 14px | `/works` 卡片文字内部间距 |
| `gap-5` / `mt-5` / `pt-5` | 20px | 普通卡片间距、图片到文字、图库图片间距 |
| `gap-8` / `mt-8` / `pt-8` | 32px | 标题区与选择区、内容区内边距 |
| `gap-10` / `mb-10` / `pb-10` | 40px | 页面标题下方、详情标题双栏内部 |
| `gap-12` | 48px | 动态作品的标题、介绍、跳转列表等模块间距 |
| `gap-14` | 56px | 品牌模块在非桌面端的垂直间距 |
| `gap-16` | 64px | 品牌页两个模块、`/works` 作品卡片行距 |
| `mt-24` | 96px | Brand 主模块到“Selected Brand”区 |
| `pb-32` | 128px | 首页 Notes 区底部留白 |

---

## 3. 全站导航与跳转方式

### N1. 固定顶部导航栏

对应文件：`src/components/site-nav.tsx`

- 固定在页面顶部 `32px`，居中，层级 `z-50`；四个按钮均为黑色或半透明黑色药丸按钮。
- 按钮字体当前为默认无衬线、`0.94rem`、`600`；按钮横向内边距 `20px`，纵向 `10px`，按钮间距 `8px`。
- 常态悬浮时按钮缩放为 `0.95`；不改变页面结构。

| 导航项 | 目标 | 跳转形式 | 备注 |
| --- | --- | --- | --- |
| `Shure` | `/` | 首页之外的 `/works...` 页面返回首页时使用黑色覆盖转场；其他情况为普通跳转 | 覆盖进入时长 `680ms`，离场展示约 `1.85s`；系统“减少动态效果”开启时直接跳转 |
| `About me` | `/#about` | 普通锚点跳转 | 首页的 About 区；锚点预留顶部滚动边距，桌面端约 `112px` |
| `My works` | `/works/dynamic` | 从首页点击时使用分类色覆盖转场；其他页面普通跳转 | 默认进入 Dynamic；下方有悬浮菜单 |
| `Get in touch` | `#contact` | 当前页普通锚点跳转 | 跳到本页底部的联系区 |

### N2. `My works` 悬浮菜单

- 鼠标悬浮或键盘聚焦 `My works` 后出现；菜单位于按钮下方 `8px`。
- 菜单内为 `Dynamic / Brand / Visual`，白色半透明背景，内边距 `6px`，每项之间 `4px`。
- 在首页点击菜单项会触发 `680ms` 分类色覆盖转场：Dynamic 为黄 `#f8cb37`、Brand 为绿 `#8ec02c`、Visual 为蓝 `#48a4dc`；在非首页则直接跳转。
- 目标分别为：`Dynamic → /works/dynamic`、`Brand → /works/brand`、`Visual → /works`。

### N3. 其他跳转类型

| 类型 | 具体位置 | 当前行为 |
| --- | --- | --- |
| 普通站内页面跳转 | 品牌图片模块、视觉作品卡片、详情页返回按钮、分类切换按钮 | Next `Link` 直接进入目标页，不使用彩色覆盖转场 |
| 页内锚点 | `Start a project`、详情页 `View gallery / View project` | 直接滚到 `#contact` 或 `#gallery` |
| 设备功能链接 | 页脚电话、邮箱 | 分别使用 `tel:` 与 `mailto:` |
| 减少动态效果 | 系统开启 `prefers-reduced-motion` 时 | 所有过渡与动画几乎立即完成；首页 Loader 隐藏 |

---

## 4. 首页 `/`

主文件：`src/app/page.tsx`

### 页面状态与区块顺序

`H1 首页首屏 → H3 About me → H6 Design projects → H8 Vibe coding projects → F1 联系页脚`

| 编号 | 区域名称 | 内容、版式与间距 | 字体与跳转 |
| --- | --- | --- | --- |
| H1 | 首页首屏 | 最小高度为整屏；标题水平、垂直居中。首屏内边距上下 `112px`。左下（小屏居中）有心情按钮浮层。 | `Exploring New Things` 使用 Montserrat，`clamp(42.4px, 5.4vw, 92.8px)`，`500 / 1`。心情按钮当前只提供视觉交互，没有页面跳转。 |
| H3 | About me 区 | 桌面上下留白各 `64px`。内容为 `1fr : 0.96fr` 两列、列距 `20px`；左右卡片高度 `592px`，内边距 `32px`。 | 左卡中文大标题使用 Taipei Sans；右卡为自动播放视频，无链接。 |
| H6 | Design projects 标题区 | About 区后开始；标题上方有分隔线，线到标题的上内边距 `32px`，标题区底部到卡片网格为 `32px`。 | 标题 `Design projects` 为 Montserrat，桌面 `60px`、`600`；右侧 `Start a project ↗` 为 `14px`，锚点至页脚。 |
| H7 | 首页三张分类作品卡 | 桌面三列，列距 `20px`；图框比例 `1481:1291`。图框到文字区 `20px`，标题/说明之间 `20px`。 | 中文标题为 Taipei Sans `24px` 常规；英文说明为 Montserrat `14px / 20px`、`300`。整张图片悬浮缩放 `0.98`，点击使用 N2 所述分类色转场，依次前往 Dynamic、Brand、Visual（`/works`）。 |
| H8 | Vibe coding projects 标题区 | Design projects 区之后。标题上方分隔线与标题间距 `32px`，标题到下方模块 `32px`。 | Montserrat 桌面 `60px`、`600`。 |
| H8-1 | 左侧 Open Letters 大卡 | 桌面宽度占比 `1.1fr`，比例 `16:12`；卡片内边距 `32px`，悬浮缩放 `0.98`。 | 上方标签为 Montserrat `14px`；中文标题为 Taipei Sans，桌面 `60px`、`600`。当前是展示卡，没有链接。 |
| H8-2 | 右侧 Notes 卡组 | 桌面宽度占比 `0.9fr`，三行等高，卡间距 `20px`；单卡有细边框。Notes 整区顶部 `64px`、底部 `128px`。 | 标签为 Montserrat `12px` uppercase；标题为 Taipei Sans `24px / 1.35`、`600`。当前三张卡没有链接。 |

首页图片与视频模块均采用约 `6.4px` 圆角。首页的 Design projects 图片是当前唯一会触发彩色作品转场的内容卡。

---

## 5. 视觉作品总览 `/works`

主组件：`src/components/works-overview-page.tsx`

此页面现在是 **Visual design 总览页**，不是旧版的 `Latest projects` 页面。

### 页面状态与区块顺序

`W1 Visual design 页面标题 → W2 Shure Studio 主推项目 → W7 视觉作品网格 → F1 联系页脚`

| 编号 | 区域名称 | 内容、版式与间距 | 字体与跳转 |
| --- | --- | --- | --- |
| W1 | Visual design 标题区 | 作品内容距顶部 `176px`；标题下方有白色分隔线。标题区底部内边距 `20px`，分隔线到主推项目的间距 `40px`。 | `.brand-page-title`：Montserrat，桌面 `60px / 0.82`、`300`；`design` 为灰色。 |
| W2 | Shure Studio 主推项目 | 桌面三列 `0.58fr : 0.82fr : 1.61fr`，列距 `20px`；中列为空白列。左右内容高度 `648px`。整个模块底部到作品网格为 **`64px`**。 | 左侧标签为 Geist Mono；项目名为默认 Geist，`clamp(33.6px, 2.65vw, 51.2px) / 0.96`、`500`；说明为 `16px`。标题和右侧视频都链接至 `/#about`，为普通跳转。视频悬浮放大至 `1.03`。 |
| W3 | 下方作品卡片网格 | 桌面三列；横向间距 `20px`，第一行到第二行纵向间距 **`64px`**。当前有 5 张卡：蛙趣看世界、Soft Lab、Open Signal、Mood Index、练习与其他。 | 卡片图框比例 `16:14`，悬浮缩小至 `0.98`；图片到文字区 `20px`，文字区内部 `14px`。 |
| W4 | 单张作品卡文字区 | 标题与编号同一行：标题在左、编号在右；说明与标签保持左对齐。 | 标题默认 Geist，桌面约 `20.48px / 1.15`、`500`；编号 Montserrat，约 `15.2px`、`500`；说明默认 Geist，`14px / 1.45`、`500`；标签 Geist Mono。标题、图片都直接进入对应 Visual 详情页。 |

所有视觉作品卡的链接均为普通站内链接，不使用首页分类色覆盖转场。

### Visual 详情页 `/works/visual/[project]`

路由文件：`src/app/works/visual/[project]/page.tsx`  
主组件：`src/components/visual-project-page.tsx`

已配置的页面：

- `/works/visual/field-notes`（蛙趣看世界）
- `/works/visual/soft-lab`
- `/works/visual/open-signal`
- `/works/visual/mood-index`
- `/works/visual/practice-and-other`（练习与其他）

| 编号 | 区域名称 | 内容、版式与间距 | 字体与跳转 |
| --- | --- | --- | --- |
| VD1 | 返回入口 | 页面内容距顶部 `176px`；返回按钮之后至标题区为 `40px`。 | `← Visual design`，普通链接返回 `/works`。 |
| VD2 | 标题与简介区 | 桌面为 `1.16fr : 0.84fr` 双列，列内间距 `40px`，下边框前内边距 `40px`。左列序号到标题 `20px`；右列简介到 `View project` `20px`。 | 项目名称 Montserrat `52px / 0.9`、`500`；简介 Taipei Sans `18px / 1.6`、`400`。`View project ↗` 是锚点跳转至图库。 |
| VD3 | Focus 标签区 | 标题区后上下内边距各 `32px`；桌面为 `1fr : 2fr` 两列、列距 `32px`，下方有细分隔线。 | `Focus` 用 Montserrat `14px` uppercase；标签用 Geist Mono，约 `10.88px`。 |
| VD4 | 连续图库 | Focus 区后上边距 `40px`；图片之间 `20px`，图片宽度铺满内容区。 | 每张图无额外文字；圆角约 `6.4px`。 |

`/works/visual` 本身没有分类页路由；Visual 分类入口固定指向 `/works`，但上述五个 Visual 详情路由正常可访问。

---

## 6. Brand 分类页与详情页

### Brand 分类页 `/works/brand`

主组件：`src/components/work-category-page.tsx`

页面顺序：`B1 Brand design 标题 → B2 芋泥集模块 → B3 PetPets 模块 → B4 Selected Brand → B5 三张分类卡 → F1 联系页脚`。

| 编号 | 区域名称 | 内容、版式与间距 | 字体与跳转 |
| --- | --- | --- | --- |
| B1 | Brand design 标题区 | 页面内容距顶部 `176px`；标题分隔线下的外部间距 `40px`，标题区底部内边距 `20px`。 | `.brand-page-title`：Montserrat，桌面 `60px / 0.82`、`300`。 |
| B2 / B3 | 品牌主模块 | 每个模块在桌面是文字列 `0.78fr`、图片列 `1.22fr`；文字列右侧内边距 `48px`，图片比例 `1.55:1`。两模块的**桌面纵向间距为 `64px`**（小屏 `56px`）。 | 左上双标签为 Montserrat `15px / 1`、`300`；标题为 Montserrat `50px / 0.82`、`500`（芋泥集用 `600`）；说明为 Taipei Sans `15px / 1.45`、`500`，标题到说明 `20px`。 |
| B2-图片 | 芋泥集图片模块 | `brand-yuniji-info.jpg`，白色底、圆角约 `6.4px`。 | 普通链接至 `/works/brand/yuniji`。鼠标悬浮时**整个图片模块**在 `700ms` 内缩放至 `0.98`；图片内容本身不缩放。 |
| B3-图片 | PetPets 图片模块 | `brand-pet-info.jpg`，规则与 B2-图片相同。 | 普通链接至 `/works/brand/petpets`；悬浮缩放 `0.98`。 |
| B4 | Selected Brand 标题与分类切换 | PetPets 模块之后的顶部间距 `96px`；标题行下方到分类卡网格 `24px`。按钮彼此间距 `8px`。 | 标题默认 Geist，桌面 `48px`、`600`。Dynamic / Brand / Visual 按钮均是普通链接，目标为 `/works/dynamic`、`/works/brand`、`/works`。 |
| B5 | 分类作品卡 | 桌面三列、列距 `20px`，顶部有细线和 `20px` 内边距；卡最小高度 `352px`，内边距 `32px`。 | 序号 Geist Mono `12px`；标题默认 Geist `30px`；说明 `14px / 20px`；标签 Geist Mono。当前卡片只有悬浮上移效果，**尚未配置详情页链接**。 |

### Brand 详情页 `/works/brand/[project]`

路由文件：`src/app/works/brand/[project]/page.tsx`

已配置的页面：

- `/works/brand/yuniji`（芋泥集）：首图 + 12 张图库图片。
- `/works/brand/petpets`（PetPets）：首图 + 14 张图库图片。

| 编号 | 区域名称 | 内容、版式与间距 | 字体与跳转 |
| --- | --- | --- | --- |
| BD1 | 返回入口 | 内容距顶部 `176px`；返回按钮与标题区之间 `40px`。 | `← Brand design`，普通链接返回 `/works/brand`。 |
| BD2 | 项目标题与服务类型 | 桌面为 `1.16fr : 0.84fr` 双列，列内间距 `40px`，下边框前内边距 `40px`。序号到标题 `20px`，右列服务类型到图库链接 `20px`。 | 中文项目名 Taipei Sans，桌面 `80px / 0.86`、`700`；序号和服务类型为 Montserrat。`View gallery ↗` 锚点进入图库。 |
| BD3 | 项目说明与资料表 | 标题区后上下内边距 `48px`；桌面与标题同样的双列。左列段落间距 `24px`，右列资料项间距 `16px`。 | 说明文字 Taipei Sans `18px / 1.6`；Year / Services / Sector 标题为 Montserrat `14px`，资料值 Montserrat `14px`。 |
| BD4 | 连续图库 | 说明区之后直接开始；首图和后续图片之间均为 `20px`。 | 图片铺满内容宽度，白色背景、约 `6.4px` 圆角。 |

---

## 7. Dynamic 作品页

主组件：`src/components/dynamic-work-page.tsx`

| 页面 | 背景与内容 |
| --- | --- |
| `/works/dynamic` | 黑底白字；作品为《他们记忆中存在的几何》；使用 `dynamic-design-0424.mp4`，视频裁切铺满；3 张图库图片。 |
| `/works/dynamic2` | 白底深色字；作品为「你好：」；使用 `nihao.mp4`，视频完整显示；4 张图库图片。 |

页面顺序：`D1 顶部标题 → D2 视频 → D3 作品名 → D4 作品介绍 → D5 两件作品跳转列表 → D6 图库 → D7 分类切换 → D8 Selected Dynamic 卡片 → F1 联系页脚`。

| 编号 | 区域名称 | 内容、版式与间距 | 字体与跳转 |
| --- | --- | --- | --- |
| D1 | 顶部标题 | 页面内容距顶部 `176px`；标题区下有分隔线，标题区底部内边距 `20px`，标题区到视频外框 `40px`。几何页标题为 `Dynamic design`；你好页为 `D/0.2`。 | 几何页采用 `.brand-page-title`（Montserrat，桌面 `60px`）；你好页采用 Eskapade Italic 风格标题。 |
| D2 | 顶部视频模块 | 宽度为内容区的 `80%`，居中；圆角约 `6.4px`。几何页比例 `16:9`；你好页高度为 `min(84vh, 960px)` 且不低于 `576px`。 | 无链接、自动播放、静音循环。 |
| D3 | 作品名模块 | 视频外框底部到**标题模块外框**的桌面端间距为 **`64px`**；标题模块本身内边距 `32px`。 | 中文标题为 Taipei Sans `52px / 0.9`、`700`。 |
| D4 | 作品介绍模块 | 标题模块外框到介绍模块外框的桌面端间距为 **`48px`**；介绍模块内边距 `32px`。 | Taipei Sans `20px / 1.6`、`400`，左对齐，最大宽度 `768px`。 |
| D5 | Dynamic 作品跳转列表 | 介绍、跳转列表、每张图库图片都处在同一纵向网格中，桌面端彼此间距均为 `48px`。跳转列表内边距左右 `32px`，两行在小屏堆叠、`sm` 起两列，行/列间距 `12px`。 | 每一项为 `24px`、`600`，右侧有上右箭头。点击「他们记忆中的几何」或「你好：」直接切换到 `/works/dynamic` 或 `/works/dynamic2`，并回到目标页顶部；当前项高对比、非当前项降低透明度。 |
| D6 | Dynamic 图库 | 每张图片宽度铺满内容区，白色背景、约 `6.4px` 圆角；与前后模块均为 `48px` 网格间距。 | 无独立跳转。 |
| D7 | 分类切换区 | 图库结束后上边距 `32px`，标题行下边距 `24px`；按钮间距 `8px`。 | `Selected Dynamic` 标题默认 Geist，桌面 `48px`、`600`。分类按钮为普通链接：Dynamic、Brand、Visual 分别到 `/works/dynamic`、`/works/brand`、`/works`。 |
| D8 | Selected Dynamic 卡片 | 顶部有分隔线并有 `20px` 上内边距；桌面三列、列距 `20px`；卡最小高度 `352px`，内边距 `32px`。 | 卡片悬浮向上移动，但目前不是详情链接。标题默认 Geist `30px`；说明 `14px / 20px`；标签 Geist Mono。 |

---

## 8. 共用联系页脚 `#contact`

组件：`src/components/contact-footer.tsx`。首页、`/works`、Brand、Dynamic 与所有详情页都使用同一个联系页脚。

| 编号 | 区域名称 | 内容、版式与间距 | 字体与跳转 |
| --- | --- | --- | --- |
| F1 | 大型联系标题 | 黑底；桌面最小高度 `608px`，上下内边距 `96px / 64px`。标题位于顶部，单词分段轻微旋转与位移。 | `Shure。sure？sure！` 使用默认无衬线、`clamp(51.2px, 9.8vw, 176px) / 0.8`、`600`。 |
| F2 | 联系文案与方式 | 标题到下方信息区的桌面上边距 `80px`；信息区桌面两列 `1fr : auto`，列距 `48px`。 | 左侧中文文案为 Taipei Sans `30px / 1.08`、`700`；补充说明为 `14px / 1.1`。右侧电话与邮箱为 Taipei Sans `30px`、`600`，右对齐。 |
| F3 | 电话与邮箱链接 | 电话 `18068849890` 与邮箱 `2664265205@qq.com`。 | 分别使用 `tel:`、`mailto:`；悬浮时透明度降低。 |

---

## 9. 当前页面与内容清单

| 类型 | 当前可访问内容 | 入口状态 |
| --- | --- | --- |
| 首页 | `/` | 已有首屏、About、分类作品入口、Vibe coding、联系页脚。 |
| Visual 总览 | `/works` | 已有主推 Shure Studio、5 张作品卡及对应 5 个详情页。 |
| Dynamic | `/works/dynamic`、`/works/dynamic2` | 两件作品独立展示、互相跳转、视频与图库内容已接入。 |
| Brand | `/works/brand` | 芋泥集与 PetPets 两个主模块均可进入详情；下方 Selected Brand 卡片当前仅展示。 |
| Brand 详情 | `/works/brand/yuniji`、`/works/brand/petpets` | 项目简介、资料表、连续图库已接入。 |
| Visual 详情 | 5 个 `/works/visual/[project]` 路由 | 项目简介、Focus 标签、连续图库已接入。 |
| Visual 分类页 | `/works/visual` | 当前没有该路由；所有 Visual 分类入口统一使用 `/works`。 |

---

## 10. 常用提需求示例

- 「页面：`/works`；区域：W2；把主推项目下方到作品卡片网格的 `64px` 改为 `48px`。」
- 「页面：`/works/brand`；区域：B2-图片 和 B3-图片；悬浮缩放从 `0.98` 调整为 `0.99`，不要缩小图片内容。」
- 「页面：`/works/dynamic`；区域：D3 与 D4；保持标题模块到介绍模块的 `48px`，但将介绍的左右内边距改小。」
- 「页面：`/works/visual/mood-index`；区域：VD2；把右侧说明文字改成两段，字体仍保持 Taipei Sans `18px / 1.6`。」
- 「页面：任意页面；区域：F2；只调整页脚左侧联系文案，不改电话和邮箱的位置。」

## 11. 对应源码索引

| 内容 | 主要文件 |
| --- | --- |
| 首页 | `src/app/page.tsx` |
| 固定导航与跳转逻辑 | `src/components/site-nav.tsx`、`src/components/home-transition-link.tsx`、`src/components/works-transition-link.tsx` |
| Visual 总览 | `src/components/works-overview-page.tsx` |
| Visual 详情 | `src/components/visual-project-page.tsx`、`src/lib/visual-projects.ts` |
| Brand 分类页 | `src/components/work-category-page.tsx` |
| Brand 详情 | `src/app/works/brand/[project]/page.tsx` |
| Dynamic 两页 | `src/components/dynamic-work-page.tsx`、`src/app/works/[category]/page.tsx`、`src/app/works/dynamic2/page.tsx` |
| 全局字体、标题类、转场动画 | `src/app/fonts.ts`、`src/app/globals.css` |
| 共用联系页脚 | `src/components/contact-footer.tsx` |
