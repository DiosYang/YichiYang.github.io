import { albums } from './albums';
import { projects } from './projects';
import { career } from './career';
import { careerModules } from './career-modules';

export const pageRoutes = [
  '/', '/about/', '/career/', '/project/', '/cv-resume/', '/photography/', '/maine/',
  ...projects.map((page) => `/${page.slug}/`),
  ...albums.map((page) => `/photography/${page.slug}/`),
  ...career.map((page) => `/career/${page.frontmatter.slug}/`),
  ...careerModules.map((page) => `/career/du-xiaoman/${page.frontmatter.slug}/`),
];
