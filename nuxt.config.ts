// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: 'Cabalex',
      link: [
        {
          rel: 'preconnect',
          href: 'href="https://fonts.gstatic.com"'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
        }
      ]
    },
  },
  css: [
    '~/assets/css/global.css',
  ],
  runtimeConfig: {
    public: {
      siteKey: process.env.NUXT_PUBLIC_SITE_KEY,
      secretKey: process.env.NUXT_PUBLIC_SECRET_KEY,
    }
  }
});