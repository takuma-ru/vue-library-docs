import { NavItem } from "@nuxt/content/dist/runtime/types"
import { IconNameType } from "~~/types/icon/iconName"

interface IPath {
  title: string
  icon: IconNameType
  children?: Array<NavItem>
}

export const useNavigationStore = defineStore('navigation', () => {
  const { data: navigation } = useAsyncData('navigation', () => fetchContentNavigation())

  /* -- state -- */
  const navigationList = computed(() => {
    const pathList: Array<IPath> = []
    const introductionIndex = navigation.value?.findIndex(path => path._path.includes('/introduction'))
    const getStartedIndex = navigation.value?.findIndex(path => path._path.includes('/get-started'))
    const componentsIndex = navigation.value?.findIndex(path => path._path.includes('/components'))

    console.log(navigation.value)

    if (navigation.value) {
      navigation.value.map((navigationItem) => {
        switch (navigationItem._path) {
          case '/components':
            pathList.unshift({
              title: 'Components',
              icon: 'category',
              children: navigationItem.children
            })
            break;
          case '/get-started':
            pathList.unshift({
              title: 'Get Started',
              icon: 'start',
              children: navigationItem.children
            })
            break;
          case '/introduction':
            pathList.unshift({
              title: 'Introduction',
              icon: 'info',
              children: navigationItem.children
            })
            break;
          default:
            pathList.push({
              title: navigationItem.title,
              icon: 'adjust',
              children: navigationItem.children
            })
            break;
        }
      })
    }

    /* if (navigation.value) {
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
    } */

    return pathList
  })

  /* -- getter -- */
  const isCurrentPath = (path: string): boolean => {
    const route = useRoute()

    return route.path === path
  }

  /* -- mutation -- */

  /* -- action -- */

  /* -- other -- */

  return {
    navigationList: readonly(navigationList),
    isCurrentPath
  }
})
