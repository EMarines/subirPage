import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // base: "/subirPage/"    ( cambié de este al de abajo para quiter el /subirPage/)
  base: "/"

})
