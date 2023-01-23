<template>
  <main id="index">
    <h1
      class="title lib"
      v-text="appConfigStore.appConfig.libName"
    />
    <h1
      class="title feature"
      v-text="appConfigStore.appConfig.description"
    />
    <h1
      class="title name"
      v-text="appConfigStore.appConfig.developerName"
    />
    <div class="title support">
      <template
        v-for="version in supportVersionList"
        :key="version.version"
      >
        <div
          class="chip"
        >
          <img
            :src="version.imgSrc"
            alt="brand logo"
          >
          <span
            class="version-name"
            v-text="version.version"
          />
        </div>
      </template>
    </div>
    <div class="buttons">
      <BaseButton
        v-show="navigationStore.isGetStartedPage()"
        icon="start"
        :to="navigationStore.navigationList.find(path => path.title === 'Get Started')?.children![0]._path"
      >
        Get Started
      </BaseButton>
      <BaseButton
        outlined
        icon="open_in_new"
        :to="appConfigStore.appConfig.repository"
      >
        View Repository
      </BaseButton>
    </div>
  </main>
</template>

<script lang="ts" setup>
const colorStore = useColorStore()
const displayStatusStore = useDisplayStatusStore()
const appConfigStore = useAppConfigStore()
const navigationStore =  useNavigationStore()

const supportVersionList = computed(() => {
  return [
    {
      version: 'Nuxt2',
      isSupport: appConfigStore.appConfig.supportVersion.nuxt2,
      imgSrc: 'https://nuxtjs.org/design-kit/colored-logo.svg'
    },
    {
      version: 'Nuxt3',
      isSupport: appConfigStore.appConfig.supportVersion.nuxt3,
      imgSrc: 'https://nuxt.com/assets/design-kit/logo/icon-green.svg'
    },
    {
      version: 'Vue2.6',
      isSupport: appConfigStore.appConfig.supportVersion.vue2,
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      version: 'Vue2.7',
      isSupport: appConfigStore.appConfig.supportVersion.vue2Point7,
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      version: 'Vue3.x',
      isSupport: appConfigStore.appConfig.supportVersion.vue3,
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
  ]
})

useHead({
  title: `${appConfigStore.appConfig.libName}`
})
</script>

<style lang="scss" scoped>
#index {
  display: flex;
  flex-flow: column;

  position: relative;
  width: min(100vw, 1024px);
  max-height: calc(100svh - 64px);
  margin: auto;

  overflow-y: auto;
  padding: 2rem v-bind("displayStatusStore.displaySizeMixin({ sm: '1rem', lp: '1rem', pc: '2rem' })");
  box-sizing: border-box;

  .title {
    position: relative;

    margin: 2rem 0px;

    &::after {
      position: absolute;
      top: -36px;
      left: 0px;

      color: v-bind("colorStore.color.theme.subText");
      line-height: 36px;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .lib::after {
    content: 'This is';
  }

  .feature::after {
    content: 'Feature is';
  }

  .name::after {
    content: 'Made by';
  }

  .support::after {
    content: 'Supported versions';
  }

  .support {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
    row-gap: 0.25rem;
    flex-wrap: wrap;

    .chip {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      width: fit-content;
      padding: 0.5rem 0rem;

      // background-color: v-bind("colorStore.color.theme.complementaryDarken[2]");
      border-radius: 0.5rem;

      img {
        width: 24px;
      }

      .version-name{
        font-weight: bold;
      }
    }
  }


  .buttons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    column-gap: 1rem;
    row-gap: 1rem;
  }
}
</style>