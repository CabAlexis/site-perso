// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: 'Cabalex',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap'
        },
        {
          rel: 'preconnect',
          href: 'href="https://fonts.gstatic.com"'
        },
      ]
    },
  },
  css: [
    '~/assets/css/global.css',
  ],
});