# @takuma-ru/vue-library-docs

![socialPreview](https://user-images.githubusercontent.com/49429291/211722291-66181efa-55f0-4b79-8ccf-8c45e38e7041.png)

## Status
![npm](https://img.shields.io/npm/dt/@takuma-ru/vue-library-docs?style=flat-square)
![npm](https://img.shields.io/npm/v/@takuma-ru/vue-library-docs?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@takuma-ru/vue-library-docs?style=flat-square)

## Description
Documentation library for vue library

## DEMO
none
<!-- [demo-link](https://vue-swipe-modal-vue2.vercel.app) -->

## Getting Started
### 0. Create nuxt-app
```powershell
npx nuxi@latest init [ directoryName ]
```

### 1. Install
```powershell
yarn add @takuma-ru/vue-library-docs
```

### 2. How to use
1. Add `@takuma-ru/vue-library-docs` to `extends` and use the template.
    ```ts
    defineNuxtConfig({
      extends: '@takuma-ru/vue-library-docs',
      vueLibraryDocs: {
        isUsePlugin: true // Flag whether to use `@takuma-ru/vue-library-docs` templates and components.
      }
    })
    ```
2. Delete `app.vue`.
3. Create `app.config.ts` in root.
    ```powershell
    touch app.config.ts
    ```
    ```powershell
    type nul > app.config.ts
    ```
4. Edit `app.config.ts`.
    ```ts
    import { IAppConfig } from "./types/app.config";

    export default defineAppConfig<IAppConfig>({
      docs: {
        libName: '',
        developerName: '',
        description: '',
        icon: '',
        image: '',
        repository: '',
        npm: '',
        supportVersion: {
          vue2: true,
          vue2Point7: true,
          vue3: true,
          nuxt2: true,
          nuxt3: true
        },
        socialsAccountName: {
          twitter: 'user-name(No need for "@")',
          github: '',
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
    ```
5. Create `content` folder in root.
    ```powershell
    mkdir content
    ```

## License
[MIT - Copyright (c) 2023 takuma-ru](https://github.com/takuma-ru/vue-library-docs/blob/main/LICENSE)
