import { IAppConfig } from "./types/app.config";

export default defineAppConfig<IAppConfig>({
  docs: {
    libName: 'vue-library-docs',
    developerName: 'takuma-ru',
    description: 'Documentation template library for vue library',
    icon: 'https://user-images.githubusercontent.com/49429291/211703596-2abb6a11-259c-4b0a-8022-438e0ec735c2.png',
    image: ' https://user-images.githubusercontent.com/49429291/211703637-3daca7d9-6ea0-4e50-893c-e1bbec8abc1c.png',
    repository: 'https://github.com/takuma-ru/vue-library-docs',
    npm: 'https://www.npmjs.com/package/@takuma-ru/vue-library-docs',
    supportVersion: {
      vue2: false,
      vue2Point7: false,
      vue3: false,
      nuxt2: false,
      nuxt3: true
    },
    socialsAccountName: {
      twitter: 'user-name(No need for "@")',
      github: 'user-name',
      facebook: '',
      instagram: '',
      youtube: '',
      medium: ''
    },
  }
})