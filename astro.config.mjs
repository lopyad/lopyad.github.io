// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    ssr: {
      noExternal: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/react-fontawesome',
        'zustand', // zustand 추가
      ],
    },
  },
});