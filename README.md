# Dios Yang portfolio

A code-first version of [diosyang.com](https://diosyang.com), built with Astro and deployed to GitHub Pages.

## Work locally

```sh
npm install
npm run dev
```

Open the local address printed by Astro. Change shared page copy in `src/components/LocalizedPage.astro` and `src/components/AboutContent.astro`, project articles in `src/content/projects/`, photography collections in `src/data/albums.ts`, global styles in `src/styles/global.css`, and images or PDFs in `public/media/`.

## Edit Career content

Each experience has a Markdown file in `src/content/career/`. Edit the English text below the frontmatter to update its detail page. The title, dates, role, slug, and order in the frontmatter also control the Career list.

`src/content/career/du-xiaoman.md` contains the short introduction on the Du Xiaoman overview page. Each of its six experiences has a separate Markdown file in `src/content/career/du-xiaoman/`:

- `multiple-lender-borrowing.md`
- `borrowing-to-repay-existing-loans.md`
- `credit-card-risk-rating.md`
- `third-party-data.md`
- `other-analyses.md`
- `ai-assisted-risk-analysis-and-feature-discovery.md`

Edit `summary` in a module's frontmatter to change both its clickable overview and the Summary at the top of its detail page. Edit the Markdown below the frontmatter for the full explanation. The detail-page contents menu is generated from `##` headings. Keep `slug` stable to preserve links; `order` controls the overview list. Save to preview locally, then commit and publish the changes through the GitHub Pages workflow.

## Publish

Pushing to `main` runs the GitHub Pages workflow. The repository's Settings → Pages source must be **GitHub Actions**.

The workflow builds with `/YichiYang.github.io` as the GitHub Pages path. Local development uses `/` so `npm run dev` still opens at the local root. If this site later moves to a root domain or another repository, update `PUBLIC_SITE_BASE` in the workflow.

The deployed copy is marked `noindex` while it is a preview alongside the WordPress site. Remove the `noindex` meta tag in `src/layouts/BaseLayout.astro` when the domain is switched to GitHub Pages.

The original WordPress pages with unfinished content remain as short placeholder pages here. No project details have been invented.

## 中英文内容编辑

全站27个页面均提供中英文版本：现有网址是英文，在路径前增加 `/zh/` 为中文。左侧姓名旁的语言按钮切换到当前页面的对应版本；浏览器会记住语言选择。正文目录的对应章节也可随语言切换。

- 导航、按钮、姓名及通用文案：`src/lib/i18n.ts`（中文姓名为杨易驰）。
- 关于我：`src/components/AboutContent.astro`。
- 英文工作经历：`src/content/career/`；对应中文：`src/content/zh/career/`。
- 英文度小满模块：`src/content/career/du-xiaoman/`；对应中文：`src/content/zh/career/du-xiaoman/`。
- 英文研究项目：`src/content/projects/`；对应中文：`src/content/zh/projects/`。
- 相册标题、介绍和照片说明：`src/data/albums.ts`，同时包含中英文。

中英文 Markdown 文件使用相同文件名及 `slug`，分别编辑各语言的标题、概括和正文。为保留章节切换位置，两种语言的标题层级与顺序应保持一致。新增页面时，在 `src/data/routes.ts` 登记共用路径，即可同时生成中英文页面。简历页保留原有中英文PDF下载，语言按钮切换网页说明。
