import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Deployed at https://rahul-bangar.github.io/portfolio/
export default defineConfig({
  site: 'https://rahul-bangar.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});
