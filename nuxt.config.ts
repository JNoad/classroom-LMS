// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/main.scss'
  ],
  modules: ['@pinia/nuxt', '@nuxt/ui'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // This "injects" the variables into every component automatically
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
