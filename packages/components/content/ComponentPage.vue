<template>
  <div class="componentPage">
    <span
      class="title"
      v-text="componentName"
    />
    <p
      class="sub-text"
      v-text="description"
    />

    <div class="demo">
      <h2>Demo</h2>
      <div class="demo-contents">
        <slot name="Demo" />
      </div>
    </div>

    <div class="usage">
      <h2>Usage</h2>
      <slot name="Usage" />
    </div>

    <div class="props">
      <h2>Props</h2>
      <slot name="Props" />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IComponentPageProps {
  componentName: string;
  description: string
}

/* -- store -- */
const colorMode = useColorMode()
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IComponentPageProps>(), {
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.componentPage {
  margin-bottom: 3rem;

  .title {
    font-size: 2rem;
    margin-bottom: 0.1em;
    font-weight: 700;
  }

  .sub-text {
    margin-bottom: 3rem;
  }

  .demo {
    position: relative;

    &-contents {
      border-radius: 0.5rem;
      border: solid 2px v-bind("colorMode.value === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[2]");
    }
  }

  .props {

  }
}
</style>
