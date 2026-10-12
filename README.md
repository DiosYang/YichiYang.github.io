# Dios Yang portfolio

A code-first version of [diosyang.com](https://diosyang.com), built with Astro and deployed to GitHub Pages.

## Work locally

```sh
npm install
npm run dev
```

Open the local address printed by Astro. Change page copy in `src/pages/`, project summaries in `src/data/projects.ts`, photography collections in `src/data/albums.ts`, global styles in `src/styles/global.css`, and images or PDFs in `public/media/`.

## Publish

Pushing to `main` runs the GitHub Pages workflow. The repository's Settings → Pages source must be **GitHub Actions**.

The workflow builds with `/YichiYang.github.io` as the GitHub Pages path. Local development uses `/` so `npm run dev` still opens at the local root. If this site later moves to a root domain or another repository, update `PUBLIC_SITE_BASE` in the workflow.

The deployed copy is marked `noindex` while it is a preview alongside the WordPress site. Remove the `noindex` meta tag in `src/layouts/BaseLayout.astro` when the domain is switched to GitHub Pages.

The original WordPress pages with unfinished content remain as short placeholder pages here. No project details have been invented.
