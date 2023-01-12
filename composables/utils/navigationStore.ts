import { NavItem } from "@nuxt/content/dist/runtime/types"
import { IconNameType } from "~~/types/icon/iconName"

interface IPath {
  title: string
  icon: IconNameType
  paths?: Array<NavItem>
}

export const useNavigationStore = defineStore('navigation', () => {
  const { data: navigation } = useAsyncData('navigation', () => fetchContentNavigation())

  /* -- state -- */
  const navigationList = computed(() => {
    const pathList: Array<IPath> = []
    const introductionIndex = navigation.value?.findIndex(path => path._path.includes('/introduction'))
    const getStartedIndex = navigation.value?.findIndex(path => path._path.includes('/get-started'))
    const componentsIndex = navigation.value?.findIndex(path => path._path.includes('/components'))

    if (navigation.value) {
      if (introductionIndex !== undefined && introductionIndex > -1) {
        pathList.push({
          title: 'Introduction',
          icon: 'info',
          paths: navigation.value[introductionIndex].children
        })
      }

      if (getStartedIndex !== undefined && getStartedIndex > -1) {
        pathList.push({
          title: 'Get Started',
          icon: 'start',
          paths: navigation.value[getStartedIndex].children
        })
      }

      if (componentsIndex !== undefined && componentsIndex > -1) {
        pathList.push({
          title: 'Components',
          icon: 'category',
          paths: navigation.value[componentsIndex].children
        })
      }
    }

    return pathList
  })

  /* -- getter -- */
  const isCurrentPath = (path: string): boolean => {
    const route = useRoute()

    return route.fullPath === path
  }

  /* -- mutation -- */

  /* -- action -- */

  /* -- other -- */

  return {
    navigationList: readonly(navigationList),
    isCurrentPath
  }
})
