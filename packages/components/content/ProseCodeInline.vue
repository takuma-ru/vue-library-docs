<template>
  <code><slot /></code>
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
code {
  padding: 0.1rem 0.5rem;

  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  border-radius: 0.25rem;
  background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.black.darken[2] : colorStore.color.black.lighten[3]");
}
</style>
