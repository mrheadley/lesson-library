// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { rehypeStudyDeck } from './src/lib/rehype-study-deck.ts';

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: satteri({
      hastPlugins: [rehypeStudyDeck],
    }),
  },
});