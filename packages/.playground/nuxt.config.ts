import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: '../',
  nitro: {
    preset: 'vercel-edge',
    output: {
      dir: 'dist'
    }
  },
})
