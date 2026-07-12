# 页面区域命名说明

这份文档用来帮助你在给 Codex 添加注释、发截图或描述修改需求时，更准确地说明“想改哪里”。你不需要记住专业术语，优先使用下面这些中文名称即可。

## 通用区域

| 你可以这样叫 | 页面上看到的内容 | 对应文件 |
| --- | --- | --- |
| 顶部导航栏 | 顶部居中的 `Shure / About me / My works / Get in touch` 按钮组 | `src/components/site-nav.tsx` |
| 作品页跳转动画 | 点击 `My works` 时出现的黑色转场效果 | `src/components/works-transition-link.tsx`、`src/app/globals.css` |
| 首页加载动画 | 刚打开首页时的首屏加载/揭开动画 | `src/components/hero-loader.tsx`、`src/app/globals.css` |

## 首页 `/`

对应主文件：`src/app/page.tsx`

| 区域编号 | 你可以这样叫 | 页面上看到的内容 | 大概代码位置 |
| --- | --- | --- | --- |
| H1 | 首页首屏 / 首页大标题区 | `Explore New Things` 大标题、浅色背景 | `src/app/page.tsx` 的第一个 `section` |
| H2 | 心情按钮区 / 左下角心情浮层 | 首屏左下角的表情按钮和“今天的心情如何？”按钮 | 首页首屏 `section` 内的绝对定位浮层 |
| H3 | 关于我区域 / Who's Shure 区域 | 黄绿色大卡片文字 + 右侧视频 | `section id="about"` |
| H4 | 关于我文字卡片 | `Who's Shure`、大段个人介绍、底部说明文字 | `section id="about"` 左侧卡片 |
| H5 | 关于我视频卡片 | 右侧竖向视频画面 | `section id="about"` 右侧视频容器 |
| H6 | 首页作品预览区 / Selected Work 区域 | `Selected Work` 标题和三张作品卡片 | `section id="work"` |
| H7 | 首页作品卡片 | `Field Notes / Soft Lab / Open Signal` 单张卡片 | `projects.map(...)` 生成的 `article` |
| H8 | 笔记区域 / Notes 区域 | 粉色大卡片 + 右侧三条笔记卡片 | `section id="notes"` |
| H9 | 联系区域 / 页脚 | 黑底 `Shure。sure？sure！` 和邮箱 | `footer id="contact"` |

### 首页提需求示例

- “把 H1 首页大标题区的文字变大一点。”
- “调整 H3 关于我区域，让右侧视频更窄。”
- “把 H6 首页作品预览区的三张卡片间距拉开。”
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
