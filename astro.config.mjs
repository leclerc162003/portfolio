import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://leclerc162003.github.io',
  base: '/portfolio',
  integrations: [mdx()],
})
