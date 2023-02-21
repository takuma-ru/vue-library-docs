import { IAppConfig } from "./types/app.config";

export default defineAppConfig<IAppConfig>({
  docs: {
    libName: 'lib-name',
    developerName: 'developer-name',
    description: 'A brief description of what you can do with this library.',
    icon: 'https://user-images.githubusercontent.com/49429291/216809173-3317e74d-a6c5-4bb2-ba66-2f2c5baecb75.png',
    image: 'https://user-images.githubusercontent.com/49429291/216809378-ef4ccd69-643e-450c-b5b6-5f5132827651.png',
    repository: 'https://github.com/takuma-ru/vue-library-docs',
    npm: 'https://www.npmjs.com/package/@takuma-ru/vue-library-docs',
    supportVersion: {
      vue2: true,
      vue2Point7: true,
      vue3: true,
      nuxt2: true,
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
    navigationListSetting: [
      {
        parentPath: '/playground',
        title: 'Playground',
        icon: 'slow_motion_video'
      }
    ]
  }
})