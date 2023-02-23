// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity", "@nuxtjs/tailwindcss", 'nuxt-swiper', 'nuxt-icon'],

  sanity: {
    projectId: "9ddsm6c7",
    apiVersion: "2023-01-30",
  },

  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: {
            primary: "#A80E0B",
            secondary: "#E6E8E6",
            tertiary: "#2A3D45"
          },
        },
      },
    },
  },

  router: {
    base: "/guynikan.github.io/",
  },

  runtimeConfig: {
    SANITY_BASE_URL: process.env.SANITY_BASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
  },
});
