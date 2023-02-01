<template>
  <div id="app">
    <Header />
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
    <NuxtLoadingIndicator />
  </div>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp()
/* -- type, interface -- */

/* -- store -- */
const colorMode = useColorMode()
const colorStore = useColorStore()
const appConfigStore = useAppConfigStore()

/* -- variable(ref, reactive, computed) -- */
const route = useRoute()
const loading = ref()
const layoutName = computed(() => {
  if (route.fullPath === '/') {
    return 'top'
  } else {
    return 'default'
  }
})

/* -- function -- */
const setColorTheme = () => {
  switch (colorMode.value) {
    case 'dark':
      colorStore.setDarkTheme()
      break;
    case 'light':
      colorStore.setLightTheme()
      break;
  }
}

/* -- watch -- */
watch(colorMode, () => {
  setColorTheme()
})

/* -- life cycle -- */
nuxtApp.hook('page:start', () => {
  loading.value.start()
})

nuxtApp.hook('page:finish', () => {
  loading.value.finish()
  window.scrollTo(0, 0)
})

setColorTheme()

useHead({
  link: [
    {rel: 'icon', href: appConfigStore.appConfig.icon}
  ]
})
</script>

<style lang="scss">
html, body {
  height: 100svh;
  margin: 0px;

  font-family: 'Noto Sans JP', sans-serif;
  overflow: hidden;

  &.dark-mode {
    background-color: #080808;
    color: #E2E7EC;

    #app {
      background-color: #080808;
      color: #E2E7EC;
    }
  }

  &.light-mode {
    background-color: #f6f8fa;
    color: #030300;

    #app {
      background-color: #f6f8fa;
      color: #030300;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4.5px solid transparent;
    border-radius: 8px;
    background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.black.darken[2] : colorStore.color.black.lighten[3]");
    background-clip: content-box;
  }
}

#app {
  height: calc(100svh);

  background-color: v-bind("colorStore.color.theme.background");

  p {
    color: v-bind("colorStore.color.theme.text");
  }
}

.sub-text {
  color: v-bind("colorStore.color.theme.subText")
}

hr {
  width: 100%;
  height: 1px;
  bottom: 0px;
  margin: 1rem 0px;

  background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.black.darken[1] : colorStore.color.black.lighten[2]");
  border: none;
}
</style>