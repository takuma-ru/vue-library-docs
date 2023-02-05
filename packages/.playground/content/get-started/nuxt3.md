::get-started-page
---
version: 'Nuxt3'
description: 'with NuxtJs'
---
## 1. Create Project
Create a nuxt3 project by referring to [nuxt.com/installation](https://nuxt.com/docs/getting-started/installation#new-project)
```cmd
npx nuxi init <project-name>
```
::

## 2. Add package
```cmd
yarn add @takuma-ru/vue-library-docs
```

## 3. Add `@takuma-ru/vue-library-docs` to extends and use the template.
```ts{}[nuxt.config.ts]
defineNuxtConfig({
  extends: '@takuma-ru/vue-library-docs',
  vueLibraryDocs: {
    isUsePlugin: true // Flag whether to use `@takuma-ru/vue-library-docs` templates and components.
  }
})
```

## 4. Delete app.vue.
Delete `app.vue` in the folder route.

## 5. Create app.config.ts
Create `app.config.ts` in the folder route.

This is a file that sets up the basic configuration for this site.

The following code is a sample Please copy and paste to use.
::alert
For type information, please click [here](https://github.com/takuma-ru/vue-library-docs/blob/main/packages/types/app.config.d.ts).
::
```ts{}[app.config.ts]
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
