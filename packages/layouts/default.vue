<template>
  <div class="contents">
    <NavigationDrawer />
    <main>
      <NavigationBar />
      <div id="page">
        <ContentDoc>
          <template #not-found>
            <div
              :style="{
                width: '100%',
                height: '100%'
              }"
            >
              <h1>
                404&#xFF5C;🚨This Page is Not Found.
              </h1>
              <hr>
              <p :style="{ marginBottom: '3rem' }">
                Sorry, the page you were looking for was not available...
              </p>
              <BaseButton
                icon="undo"
                to="/"
              >
                Back to Top Page
              </BaseButton>
            </div>
          </template>
        </ContentDoc>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const displayStatusStore = useDisplayStatusStore()
const appConfigStore = useAppConfigStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
/* const VueVersion = computed(() => {
  return route.fullPath.includes('/get-started') && route.fullPath.substring(12)
}) */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
useHead({
  titleTemplate: `%s｜${appConfigStore.appConfig.libName}`
})
</script>

<style lang="scss">
.contents {
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  // background-color: v-bind("colorStore.color.theme.background");

  main {
    grid-column: 2;

    display: grid;
    grid-template-columns: auto 1fr;

    position: relative;
    width: min(100vw, 1024px);
    height: calc(100svh - 64px);
    margin: auto;

    &::-webkit-scrollbar-thumb {
      border: 4.5px solid transparent;
      border-radius: 8px;
      background-color: transparent;
      background-clip: content-box;
    }

    #page {
      grid-column: 2;

      box-sizing: border-box;
      width: 100%;
      padding: 2rem v-bind("displayStatusStore.displaySizeMixin({ sm: '1rem', lp: '1rem', pc: '2rem' })");

      overflow-y: auto;
    }

    h1, h2, h3, h4, p {
      margin: 0px;
    }

    h2, h3, h4 {
      position: relative;
      padding: 0.25em 0px;
      margin: 0.5em 0px;
      &:hover {
        &::before {
          content: '#';
          position: absolute;
          left: -1rem;
          color: v-bind('colorStore.color.theme.subText');
        }
      }
      a {
        color: v-bind('colorStore.color.theme.text');
        text-decoration: none;
      }
    }
  }
}
</style>