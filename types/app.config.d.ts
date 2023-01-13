export interface IAppConfig {
  docs: {
    libName: string,
    developerName: string,
    description: string,
    icon: string,
    image: string,
    repository: string,
    npm?: string,
    supportVersion: {
      vue2: boolean,
      vue2Point7: boolean,
      vue3: boolean,
      nuxt2: boolean,
      nuxt3: boolean
    },
    socialsAccountName?: {
      twitter?: string,
      github?: string,
      facebook?: string,
      instagram?: string,
      youtube?: string,
      medium?: string
    },
  }
}