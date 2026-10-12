import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: process.env.PUBLIC_SITE_BASE || '/',
});
