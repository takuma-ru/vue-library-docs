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
    <div class="buttons">
      <BaseButton
        icon="start"
        to="/get-started/vue2"
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
  height: calc(100svh - 64px);
  margin: auto;

  padding: 2rem v-bind("displayStatusStore.displaySizeMixin({ sm: '1rem', lp: '1rem', pc: '2rem' })");
  box-sizing: border-box;

  .title {
    position: relative;

    margin: 36px 0px;

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

  .buttons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    #Button {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>