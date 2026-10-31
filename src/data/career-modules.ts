import type { MarkdownInstance } from 'astro';
import type { Language } from '../lib/i18n';

export interface CareerModule {
  title: string;
  slug: string;
  summary: string;
  order: number;
}

const pages = import.meta.glob<MarkdownInstance<CareerModule>>('../content/career/du-xiaoman/*.md', { eager: true });
export const careerModules = Object.values(pages).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
const chinesePages = import.meta.glob<MarkdownInstance<CareerModule>>('../content/zh/career/du-xiaoman/*.md', { eager: true });
export const getCareerModules = (lang: Language) => lang === 'zh'
  ? Object.values(chinesePages).sort((a, b) => a.frontmatter.order - b.frontmatter.order) : careerModules;
