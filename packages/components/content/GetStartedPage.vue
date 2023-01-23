<template>
  <div class="getStartedPage">
    <span class="title">
      Get Started for {{ version }}
    </span>
    <p class="sub-text">
      {{ description }}
    </p>
    <hr>
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
    margin-bottom: 0.5em;
    font-weight: 700;
  }
}
</style>