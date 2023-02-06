import { ColorsInterface } from '~/types/composables/colorStore'

export const useColorStore = defineStore('color', () => {
  /* -- state -- */
  const color = reactive<ColorsInterface>({
    white: {
      default: '#FFFFFF',
      lighten: {
        1: '#FFFFF1',
        2: '#FFFFEE'
      },
      darken: {
        1: '#f6f8fa',
        2: '#E2E7EC',
        3: '#DDDDDD'
      }
    },
    black: {
      default: '#030300',
      lighten: {
        1: '#727272',
        2: '#9C9C9C',
        3: '#DDDDDD'
      },
      darken: {
        1: '#4D4D4D',
        2: '#2C2C2C',
        3: '#1A1A1A',
        4: '#080808'
      }
    },
    red: {
      default: '#FF5050',
      lighten: {
        1: '#ff8484',
        2: '#ffb9b9'
      },
      darken: {
        1: '#993030',
        2: '#662020'
      }
    },
    blue: {
      default: '#5498ff',
      lighten: {
        1: '#87b7ff',
        2: '#bbd6ff'
      },
      darken: {
        1: '#325b99',
        2: '#223d66'
      }
    },
    yellow: {
      default: '#ffbd5a',
      lighten: {
        1: '#ffd18b',
        2: '#ffe5bd'
      },
      darken: {
        1: '#997136',
        2: '#664c24'
      }
    },
    green: {
      default: '#5ccb96',
      lighten: {
        1: '#8ddab5',
        2: '#beead5'
      },
      darken: {
        1: '#377a5a',
        2: '#25513c'
      }
    },
    theme: {
      text: '#030300',
      subText: '#676764',
      background: '#f6f8fa',
      lighten: {
        1: '#676764',
        2: '#CBCAC7'
      },
      darken: {
        1: '#4D4D4D',
        2: '#2C2C2C'
      },
      complementaryLighten: {
        1: '#FFFFF1',
        2: '#FFFFEE'
      },
      complementaryDarken: {
        1: '#f6f8fa',
        2: '#DDDDCB'
      }
    }
  })

  /* -- mutation -- */
  const setLightTheme = () => {
    color.theme = {
      text: color.black.default,
      subText: color.black.lighten[1],
      background: color.white.darken[1],
      lighten: {
        1: color.black.lighten[1],
        2: color.black.lighten[2]
      },
      darken: {
        1: color.black.darken[1],
        2: color.black.darken[2],
        3: color.black.darken[3]
      },
      complementaryLighten: {
        1: color.white.lighten[1],
        2: color.white.lighten[2]
      },
      complementaryDarken: {
        1: color.white.darken[1],
        2: color.white.darken[2]
      }
    }
  }

  const setDarkTheme = () => {
    color.theme = {
      text: color.white.darken[3],
      subText: color.black.lighten[1],
      background: color.black.darken[4],
      lighten: {
        1: color.white.lighten[1],
        2: color.white.lighten[2]
      },
      darken: {
        1: color.white.darken[1],
        2: color.white.darken[2]
      },
      complementaryLighten: {
        1: color.black.lighten[1],
        2: color.black.lighten[2]
      },
      complementaryDarken: {
        1: color.black.darken[1],
        2: color.black.darken[2],
        3: color.black.darken[3]
      }
    }
  }

  /* -- action -- */

  /* -- other -- */

  return {
    color: readonly(color),
    setLightTheme,
    setDarkTheme
  }
})
