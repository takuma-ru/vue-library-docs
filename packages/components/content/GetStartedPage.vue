<template>
  <div class="getStartedPage">
    <span
      class="title"
      v-text="version"
    />
    <p
      class="sub-text"
      v-text="description"
    />
    <slot />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IProps {
  version: string
  description?: string
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IProps>(), {
  version: 'Vue2.7'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.getStartedPage {
  display: flex;
  flex-flow: column;

  .title {
    font-size: 2rem;
    margin-bottom: 0.1em;
    font-weight: 700;
  }

  .sub-text {
    margin-bottom: 3rem;
  }
}
</style>