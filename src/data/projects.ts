import type { MarkdownInstance } from 'astro';
import type { Language } from '../lib/i18n';

export const projects = [
  {
    title: 'Modeling ecDNA Copy Number Dynamics in Cancer Cell Population',
    slug: 'modeling-ecdna-copy-number-dynamics-in-cancer-cell-population',
    area: 'Computational biology',
    description: 'A stochastic model of ecDNA inheritance and selection in cancer cell populations, developed at Columbia University Irving Institute for Cancer Dynamics.',
    complete: true,
    number: '01',
  },
  {
    title: 'Missing Women and Marriage Rate',
    slug: 'missing-women-and-marriage-rate',
    area: 'Social science research',
    description: 'Quantitative and qualitative research on sex ratios at birth and rural marriage patterns in China.',
    complete: true,
    number: '02',
  },
  {
    title: 'Prediction of Economic Situation from Economic News –NLP Project',
    slug: 'prediction-of-economic-situation-from-economic-news-nlp-project',
    area: 'Natural language processing',
    description: 'Project details are being prepared.',
    complete: false,
    number: '03',
  },
  {
    title: 'Using Multilevel-Bayesian Model to Evaluate How Happiness Changes Around the World',
    slug: 'using-multilevel-bayesian-model-to-evaluate-how-happiness-changes-around-the-world',
    area: 'Bayesian statistics',
    description: 'Project details are being prepared.',
    complete: false,
    number: '04',
  },
  {
    title: 'Legal Aid DNA Unit Research',
    slug: 'legal-aid-dna-unit-research',
    area: 'Research',
    description: 'Project details are being prepared.',
    complete: false,
    number: '05',
  },
] as const;

interface ProjectContent { title: string; description: string; }
const englishPages = import.meta.glob<MarkdownInstance<ProjectContent>>('../content/projects/*.md', { eager: true });
const chinesePages = import.meta.glob<MarkdownInstance<ProjectContent>>('../content/zh/projects/*.md', { eager: true });
export const getProjectPages = (lang: Language) => Object.values(lang === 'zh' ? chinesePages : englishPages);
export const getProjectPage = (slug: string, lang: Language) => getProjectPages(lang).find((page) => page.file.endsWith(`/${slug}.md`));
