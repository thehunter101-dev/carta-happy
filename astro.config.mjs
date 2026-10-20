// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://thehunter101-dev.github.io',
  base: '/carta-happy/',
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()]
  }
});