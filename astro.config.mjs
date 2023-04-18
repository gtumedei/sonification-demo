import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import icons from "unplugin-icons/vite"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind()
  ],
  vite: {
    plugins: [
      icons({ compiler: "astro" })
    ]
  }
})
