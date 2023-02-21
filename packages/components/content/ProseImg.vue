<template>
  <nuxt-img
    class="content-prose-img"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IProseImgProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IProseImgProps>(), {
  alt: 'image'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.content-prose-img {
  max-width: 100%;
  margin-top: 1rem;

  border-radius: 0.5rem;
}
</style>
