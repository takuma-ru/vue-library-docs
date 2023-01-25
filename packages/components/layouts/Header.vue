<template>
  <header class="app-header">
    <div class="right-contents">
      <NavigationButton />
      <div
        class="title"
        @click="moveToIndex"
      >
        <img
          :src="appConfigStore.appConfig.icon"
          alt="logo"
        >
        <span
          class="text"
          v-text="appConfigStore.appConfig.libName"
        />
      </div>
    </div>
    <div class="buttons">
      <BaseButton
        is-icon
        size="small"
        :to="appConfigStore.appConfig.repository"
      >
        <Github />
      </BaseButton>
      <!-- <BaseButton
        is-icon
        size="small"
        :to="appConfigStore.appConfig.npm"
      >
        <Npm />
      </BaseButton> -->
      <BaseButton
        :icon="colorModeIcon"
        is-icon
        size="small"
        @click="switchMode()"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- props, emit -- */

/* -- store -- */
const colorMode = useColorMode()
const colorStore = useColorStore()
const appConfigStore = useAppConfigStore()
const displayStatusStore = useDisplayStatusStore()

/* -- variable(ref, reactive, computed) -- */
const colorModeIcon = computed(() => {
  switch (colorMode.preference) {
    case 'dark':
      return 'dark_mode'
    case 'light':
    return 'light_mode'
    case 'system':
    return 'desktop_windows'
  }
})

/* -- function -- */
const moveToIndex = () => {
  navigateTo('/')
}

const switchMode = () => {
  switch (colorMode.preference) {
    case 'dark':
      colorMode.preference = 'light'
      colorStore.setLightTheme()
      break;
      case 'light':
      colorMode.preference = 'dark'
      colorStore.setDarkTheme()
      break;
    case 'system':
      colorMode.preference = 'dark'
      break;
  }
}
/* -- watch -- */
/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: min(100vw, 1280px);
  height: 64px;
  padding: 1rem;
  margin: auto;
  border-bottom: solid 1px v-bind("colorMode.value === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[2]");
  box-sizing: border-box;

  .right-contents {
    display: flex;
  }

  .title {
    display: flex;
    align-items: center;

    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      margin-left: 0.75rem;

      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
  }
}
</style>