<template>
  <blockquote class="content-prose-blockquote">
    <slot />
  </blockquote>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.content-prose-blockquote {
  position: relative;
  margin: 1.5rem 0px;
  padding-left: 10px;

  color: v-bind("colorStore.color.theme.subText");
  border-left: 2px solid v-bind("colorStore.color.theme.complementaryDarken[2]");
}
</style>
