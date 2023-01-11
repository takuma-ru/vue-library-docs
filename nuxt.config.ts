import * as path from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200..700,0..1,0&display=swap'
        },
        {
          rel: 'stylesheet',
          media: 'print',
          onload: 'this.media=\'all\'',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200..700,0..1,0&display=swap'
        },
      ]
    },
  },

  components: {
    dirs: [
      'components/content',
      'components/layouts',
      'components/logos'
    ]
  },

  imports: {
    dirs: [
      'composables',
      'composables/**/*.{ts,js,mjs,mts}',
      'composables/**',
      'utils',
      'utils/**/*.{ts,js,mjs,mts}',
      'utils/**'
    ]
  },

  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore'
        ]
      }
    ]
  ],

  content: {
    sources: {
      md: {
        prefix: '/md',
        driver: 'fs',
        base: path.resolve(__dirname, 'markdowns')
      }
    },
    highlight: {
      theme: 'dark-plus',
      preload: ['html', 'css', 'ts', 'js', 'vue','r', 'cmd']
    }
  }
})
