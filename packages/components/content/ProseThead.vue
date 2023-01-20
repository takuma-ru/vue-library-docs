<template>
  <thead>
    <slot />
  </thead>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorMode = useColorMode()
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
thead {
  border-bottom: solid 1px v-bind("colorMode.value === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[2]");
}
</style>
