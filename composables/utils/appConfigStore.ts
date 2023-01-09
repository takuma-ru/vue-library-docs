export const useAppConfigStore = defineStore('appConfig', () => {
  /* -- state -- */
  const appConfig = computed(() => useAppConfig().docs)

  /* -- mutation -- */

  /* -- action -- */

  /* -- other -- */

  return {
    appConfig: readonly(appConfig),
  }
})
