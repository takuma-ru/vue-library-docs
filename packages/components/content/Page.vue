<template>
  <div class="content-page">
    <span class="title">
      {{ title }}
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
  title: string
  description?: string
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IProps>(), {})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.content-page {
  display: flex;
  flex-flow: column;

  .title {
    font-size: 2rem;
    margin-bottom: 0.5em;
    font-weight: 700;
  }
}
</style>
