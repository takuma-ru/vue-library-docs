import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: '../',
  nitro: {
    output: {
      dir: '../../dist'
    }
  }
})
