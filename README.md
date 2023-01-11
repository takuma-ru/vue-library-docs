# @takuma-ru/vue-library-docs

![socialPreview](https://user-images.githubusercontent.com/49429291/211705077-a56dfeae-a862-4371-8e03-798719930fa3.png)

## Status
![npm](https://img.shields.io/npm/dt/@takuma-ru/vue-library-docs?style=flat-square)
![npm](https://img.shields.io/npm/v/@takuma-ru/vue-library-docs?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@takuma-ru/vue-library-docs?style=flat-square)

## Description
Documentation template for vue library (for nuxt3)

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
      extends: '@takuma-ru/vue-library-docs'
    })
    ```
2. Delete `app.vue`.
3. Create `app.config.ts` in root.
    ```powershell
    touch app.config.ts
    ```
    ```
    type nul > app.config.ts
    ```
4. Edit `app.config.ts`.
    ```ts
    export default defineAppConfig({
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
          twitter: '',
          github: '',
          facebook: '',
          instagram: '',
          youtube: '',
          medium: ''
        },
      }
    })
    ```
5. Create `content` folder in root.
    ```powershell
    mkdir content
    ```

## License
[MIT - Copyright (c) 2023 takuma-ru](https://github.com/takuma-ru/vue-library-docs/blob/main/LICENSE)
