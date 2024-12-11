// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import entrypoint from './src/entrypoint'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs({ entrypoint: './src/entrypoint.ts' })],
  devToolbar: {
    enabled: false,
  },
  experimental: {
    svg: true,
  },
})
