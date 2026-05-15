import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/portfolio',
  fonts: [
    {
      provider: fontsource(),
      name: "Atkinson Hyperlegible",
      cssVariable: "--font-atkinson",
    },
  ],
})
