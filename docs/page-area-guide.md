# 页面区域命名说明

这份文档用来帮助你在给 Codex 添加注释、发截图或描述修改需求时，更准确地说明“想改哪里”。你不需要记住专业术语，优先使用下面这些中文名称即可。

## 通用区域

| 你可以这样叫 | 页面上看到的内容 | 对应文件 |
| --- | --- | --- |
| 顶部导航栏 | 顶部居中的 `Shure / About me / My works / Get in touch` 按钮组 | `src/components/site-nav.tsx` |
| 作品分类下拉 | 鼠标悬停 `My works` 时弹出的 `Dynamic / Brand / Visual` 三个入口 | `src/components/site-nav.tsx`、`src/lib/work-categories.ts` |
| 作品页跳转动画 | 点击 `My works` 时出现的黑色转场效果 | `src/components/works-transition-link.tsx`、`src/app/globals.css` |
| 首页加载动画 | 刚打开首页时的首屏加载/揭开动画 | `src/components/hero-loader.tsx`、`src/app/globals.css` |

## 首页 `/`

对应主文件：`src/app/page.tsx`

| 区域编号 | 你可以这样叫 | 页面上看到的内容 | 大概代码位置 |
| --- | --- | --- | --- |
| H1 | 首页首屏 / 首页大标题区 | `Explore New Things` 大标题、浅色背景 | `src/app/page.tsx` 的第一个 `section` |
| H2 | 心情按钮区 / 左下角心情浮层 | 首屏左下角的表情按钮和“今天的心情如何？”按钮 | 首页首屏 `section` 内的绝对定位浮层 |
| H3 | 关于我区域 / About me 区域 | 金属纹理文字卡片 + 右侧视频 | `section id="about"` |
| H4 | 关于我文字卡片 | `Hi！我是徐航朔`、大段个人介绍、底部说明文字 | `section id="about"` 左侧卡片 |
| H5 | 关于我视频卡片 | 右侧竖向视频画面 | `section id="about"` 右侧视频容器 |
| H6 | 首页设计项目区 / Design projects 区域 | `Design projects` 标题、`Start a project` 链接和三张作品卡片 | `section id="work"` |
| H7 | 首页作品卡片 | `Field Notes / Soft Lab / Open Signal` 单张卡片 | `projects.map(...)` 生成的 `article` |
| H7-1 | 首页作品图片区 / 作品分类图 | 每张卡片上方的 `Dynamic Design / Brand Design / Visual Design` 彩色图片，点击分别进入分类作品页 | `projects.map(...)` 内的 `Link` 和 `Image` |
| H7-2 | 首页作品图片显示框 | 控制三张分类图是否铺满、完整显示、裁切、留白、圆角和高度比例的外框 | `Link` 的 `aspect-[1481/1291]`、`overflow-hidden` 和图片样式 |
| H7-3 | 首页作品文字区 | 每张卡片下方的编号、类型、标题、箭头和说明文字 | 单张 `article` 下方文字容器 |
| H8 | 笔记区域 / Notes 区域 | 粉色大卡片 + 右侧三条笔记卡片 | `section id="notes"` |
| H9 | 联系区域 / 页脚 | 黑底 `Shure。sure？sure！`、邮箱和手机号 | `footer id="contact"` |

### 首页提需求示例

- “把 H1 首页大标题区的文字变大一点。”
- “调整 H3 关于我区域，让右侧视频更窄。”
- “把 H6 首页设计项目区的三张卡片间距拉开。”
- “把 H7-1 首页作品图片区的图片完整显示出来。”
- “把 H7-2 首页作品图片显示框改成铺满，但不要裁掉右侧文字和箭头。”
- “修改 H9 联系区域的邮箱位置。”

## 作品页 `/works`

对应主文件：`src/app/works/page.tsx`

| 区域编号 | 你可以这样叫 | 页面上看到的内容 | 大概代码位置 |
| --- | --- | --- | --- |
| W1 | 作品页标题框 / Latest projects 标题区 | 顶部大框里的 `Latest projects` | `src/app/works/page.tsx` 顶部标题 `div` |
| W2 | 主推项目区域 | 标题下方第一屏：标签、`Shure Studio` 文字、右侧视频 | 第一个 `article` |
| W3 | 主推项目标签区 | `DTNAMIC`、`VISION` 两个小标签 | `WorkTags tags={featuredWork.tags}` |
| W4 | 主推项目文字区 | `Shure Studio ↗`、说明文字、`01 / Ongoing personal system` | 第一个 `article` 左侧文字块 |
| W5 | 主推项目留白区 | 主推文字和右侧视频之间的黑色空白列 | 第一个 `article` 中间空 `div` |
| W6 | 主推项目视频区 | 右侧门和海边的视频 | 第一个 `article` 右侧 `video` |
| W7 | 下方作品列表区 | 主推项目下面的多张作品卡片网格 | `works.map(...)` 外层 `div` |
| W8 | 下方单张作品卡片 | `Field Notes / Soft Lab / Open Signal / Mood Index / Next Personal Site` 中任意一张 | `works.map(...)` 生成的 `article` |
| W9 | 下方作品图片区 | 每张作品卡片上方的大图 | 单张作品卡片里的 `Image` |
| W10 | 下方作品文字区 | 每张作品卡片下方的标题、编号、描述和标签 | 单张作品卡片里的文字 `div` |

### 作品页提需求示例

- “把 W4 主推项目文字区移动到 W5 留白区中间。”
- “缩小 W6 主推项目视频区，让左侧更空。”
- “把 W1 作品页标题框的圆角改小。”
- “调整 W8 下方单张作品卡片的图片比例。”
- “把 W3 主推项目标签区放到 W4 文字区上面。”

## 作品分类页 `/works/dynamic`、`/works/dynamic2`、`/works/brand`、`/works/visual`

对应主文件：`src/app/works/[category]/page.tsx`
Dynamic 第二个作品页：`src/app/works/dynamic2/page.tsx`
Dynamic 作品页共用组件：`src/components/dynamic-work-page.tsx`
分类数据：`src/lib/work-categories.ts`

### Dynamic 作品展示页 `/works/dynamic`、`/works/dynamic2`

Dynamic 作品展示页目前是单独布局。`/works/dynamic` 和 `/works/dynamic2` 使用同一个展示组件，只是当前选中的作品不同；点击跳转列表会在两个页面之间切换，并回到目标页面顶部。`/works/dynamic2` 当前页面背景为纯白色。

| 区域编号 | 你可以这样叫 | 页面上看到的内容 | 大概代码位置 |
| --- | --- | --- | --- |
| C1 | Dynamic 顶部视频模块 | 页面顶部的视频画面，只放视频，不放文字内容；`/works/dynamic` 使用几何作品视频并保持裁切铺满，`/works/dynamic2` 使用 `nihao.mp4` 并加高容器、完整展示视频；当前视频宽度为页面内容区的 0.8 倍 | Dynamic 共用组件里的第一个视频 `div` |
| C1-1 | Dynamic 作品名模块 | 视频下方的作品标题；`/works/dynamic` 为 `他们记忆中存在的几何`，`/works/dynamic2` 为 `你好：` | `dynamicWorks` 数据和标题 `h1` |
| C1-2 | Dynamic 作品介绍模块 | 作品说明文字；每个 Dynamic 作品页可以有自己的介绍文案，当前使用 `Taipei Sans TC Beta Regular 20px` | `dynamicWorks` 数据里的 `description` 和正文 `p` |
| C1-3 | Dynamic 作品跳转列表 | `他们记忆中的几何 / 你好：` 两个文字跳转项，当前页为白色选中，未选中项为灰色，右侧保留箭头 | `dynamicWorks.map(...)` 生成的 `nav` |
| C1-4 | Dynamic 作品图片展示区 | 作品介绍和跳转列表下方的大图展示区域 | `Image` 外层展示容器 |
| C2 | 分类切换按钮区 | 页面中部的 `Dynamic / Brand / Visual` 三个切换按钮 | `workCategories.map(...)` 生成的链接 |
| C3 | 分类作品列表区 | `Selected Dynamic / Selected Brand / Selected Visual` 下方的三张作品卡片 | `category.projects.map(...)` 生成的 `article` |

### Brand / Visual 分类页 `/works/brand`、`/works/visual`

Brand 和 Visual 页目前仍使用通用分类页布局：

| 区域编号 | 你可以这样叫 | 页面上看到的内容 | 大概代码位置 |
| --- | --- | --- | --- |
| C1 | 分类作品页顶部模块 | 一个完整的大模块：左侧分类标题和说明，右侧分类图片 | `src/app/works/[category]/page.tsx` 通用返回分支顶部模块 |
| C2 | 分类切换按钮区 | 页面中部的 `Dynamic / Brand / Visual` 三个切换按钮 | `workCategories.map(...)` 生成的链接 |
| C3 | 分类作品列表区 | `Selected Brand / Selected Visual` 下方的三张作品卡片 | `category.projects.map(...)` 生成的 `article` |

### 分类页提需求示例

- “把 C1 Dynamic 顶部视频模块缩小一点。”
- “修改 C1-1 Dynamic 作品名模块的字体和字号。”
- “把 C1-2 Dynamic 作品介绍模块的正文拆成两段。”
- “调整 C1-3 Dynamic 作品跳转列表，让未选中项更灰。”
- “点击 C1-3 Dynamic 作品跳转列表里的 `你好：` 时进入 `/works/dynamic2`。”
- “替换 C1-4 Dynamic 作品图片展示区的图片。”
- “修改 C2 分类切换按钮区的选中颜色。”
- “给 C3 分类作品列表区增加更多作品卡片。”

## 截图标注时怎么说

如果你已经在截图上画了箭头或框，可以这样描述：

1. 先说页面：例如“作品页”或“首页”。
2. 再说区域编号：例如“W4 主推项目文字区”。
3. 最后说动作：例如“移动到我箭头指向的位置”。

推荐格式：

```text
页面：作品页 /works
区域：W4 主推项目文字区
需求：把整块文字移动到截图箭头指向的左侧空白处
```

不确定区域名字时，也可以直接说：

```text
我不确定这个叫什么，但我指的是截图中橙色框住的那一整块。
```

这种描述也完全可以，我会先帮你确认区域名称，再开始修改。
