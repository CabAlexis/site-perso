// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Cabalex',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: "Développeur avec 2 ans d'expérience, ayant fait le choix de me reconvertir dans ce domaine après beaucoup d'expériences différentes. Venez découvrir mon site." }
      ],
      link: [
        {
          rel:"icon",
          href:"/img/favicon.svg",
          type:"image/svg+xml"
        },
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