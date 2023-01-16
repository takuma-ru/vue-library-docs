import { defineNuxtConfig } from 'nuxt/config'
import nuxtLibraryDocs from '../modules/module'

export default defineNuxtConfig({
  extends: '../',
  modules: [
    nuxtLibraryDocs
  ],
  nuxtLibraryDocs: {
    addPlugin: true
  },
  nitro: {
    preset: "vercel",
  },
})
