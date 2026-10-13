import type { MarkdownInstance } from 'astro';

export interface CareerEntry {
  title: string;
  slug: string;
  dates: string;
  role: string;
  order: number;
}

const pages = import.meta.glob<MarkdownInstance<CareerEntry>>('../content/career/*.md', { eager: true });
export const career = Object.values(pages).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
