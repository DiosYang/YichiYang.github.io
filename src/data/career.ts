import type { MarkdownInstance } from 'astro';
import type { Language } from '../lib/i18n';

export interface CareerEntry {
  title: string;
  slug: string;
  dates: string;
  role: string;
  order: number;
}

const pages = import.meta.glob<MarkdownInstance<CareerEntry>>('../content/career/*.md', { eager: true });
export const career = Object.values(pages).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
const chinesePages = import.meta.glob<MarkdownInstance<CareerEntry>>('../content/zh/career/*.md', { eager: true });
export const getCareer = (lang: Language) => lang === 'zh'
  ? Object.values(chinesePages).sort((a, b) => a.frontmatter.order - b.frontmatter.order) : career;
