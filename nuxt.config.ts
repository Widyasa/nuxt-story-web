// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['@/assets/main.css', 'bootstrap/dist/css/bootstrap.min.css'],
  modules: [
    '@pinia/nuxt',
      // 'cookie-universal-nuxt',
      // '@nuxtjs/axios',

  ],
})
