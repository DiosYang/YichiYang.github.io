# Dios Yang portfolio

A code-first version of [diosyang.com](https://diosyang.com), built with Astro and deployed to GitHub Pages.

## Work locally

```sh
npm install
npm run dev
```

Open the local address printed by Astro. Change page copy in `src/pages/`, project summaries in `src/data/projects.ts`, photography collections in `src/data/albums.ts`, global styles in `src/styles/global.css`, and images or PDFs in `public/media/`.

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
