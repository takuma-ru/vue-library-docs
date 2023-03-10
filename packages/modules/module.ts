import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

interface ModuleOptions {
  /**
   * Flag whether to use `@takuma-ru/vue-library-docs` templates and components.
   * @default `true`
   */
  isUsePlugin: boolean
}

const module = defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-library-docs',
    configKey: 'vueLibraryDocs',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    isUsePlugin: true
  },
  setup (options, nuxt) {
    if (options.isUsePlugin) {
      const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    } else {
      console.warn('\x1b[32m@takuma-ru/vue-library-docs\x1B[0m is not active')
    }
  }
})

export {
  ModuleOptions,
  module as default
}
