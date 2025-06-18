import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "@vueuse/nuxt"],

  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],

  build: {
    transpile: ["vuetify"],
  },
  
  css: [
  "@/assets/tailwind.css", // este es el que creaste
  "vuetify/lib/styles/main.sass",
  "@mdi/font/css/materialdesignicons.min.css"
],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  app: {
    head: {
      title: "OVA Base de Datos",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Objeto Virtual de Aprendizaje sobre Bases de Datos" },
      ],
    },
  },
})