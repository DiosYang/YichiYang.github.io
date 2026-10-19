import type { MarkdownInstance } from 'astro';

export interface CareerModule {
  title: string;
  slug: string;
  summary: string;
  order: number;
}

const pages = import.meta.glob<MarkdownInstance<CareerModule>>('../content/career/du-xiaoman/*.md', { eager: true });
export const careerModules = Object.values(pages).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
