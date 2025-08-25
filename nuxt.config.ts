// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Alexis Cabillic - Dev fullstack qui fait des trucs qui marchent',
      meta: [
        { name: 'description', content: "Développeur Laravel/Vue.js reconverti. Je code des apps web en remote. Pas de jargon, juste du concret." }
      ],
      htmlAttrs: {
        lang: 'fr'
      },
      link: [
        {
          rel:"icon",
          href:"/favicon.svg",
          type:"image/svg+xml"
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ]
    },
  },
  css: [
    '~/assets/css/global.css'
  ],
});