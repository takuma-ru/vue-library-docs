import { NavItem } from "@nuxt/content/dist/runtime/types"
import { IconNameType } from "~~/types/icon/iconName"

interface IPath {
  title: string
  icon: IconNameType
  children?: Array<NavItem>
}

export const useNavigationStore = defineStore('navigation', () => {
  const { data: navigation } = useAsyncData('navigation', () => fetchContentNavigation())
  const appConfig = useAppConfig()

  /* -- state -- */
  const navigationList = computed(() => {
    const pathList: Array<IPath> = []

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
            appConfig.docs.navigationListSetting?.map((additionNavigationItem) => {
              if (navigationItem._path === additionNavigationItem.parentPath) {
                pathList.push({
                  title: additionNavigationItem.title,
                  icon: additionNavigationItem.icon,
                  children: navigationItem.children
                })
              }
            })
            break;
        }
      })
    }
    return pathList
  })

  /* -- getter -- */
  const isCurrentPath = (path: string): boolean => {
    const route = useRoute()

    return route.path === path
  }

  const isGetStartedPage = (): boolean => {
    return navigationList.value.findIndex(path => path.title === 'Get Started') > -1 ? true : false
  }

  /* -- mutation -- */

  /* -- action -- */

  /* -- other -- */

  return {
    navigationList: readonly(navigationList),
    isCurrentPath,
    isGetStartedPage
  }
})
