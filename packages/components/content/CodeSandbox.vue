<template>
  <div class="codeSandbox">
    <iframe
      :src="`https://codesandbox.io/embed/${projectId}?autoresize=0&fontsize=14&hidenavigation=1&theme=${colorMode.value === 'dark' ? 'dark' : 'light'}&view=preview&hidedevtools=1&hidenavigation=0`"
      style="border: 0; overflow: hidden;"
      title="Demo"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ICodeSandboxProps {
  projectId: string;
  height?: string | number
}

/* -- store -- */
const colorMode = useColorMode()
const colorStore = useColorStore()

/* -- props, emit -- */
withDefaults(defineProps<ICodeSandboxProps>(), {
  height: '500px'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.codeSandbox {
  position: relative;
  height: v-bind("height");
  width: 100%;
  margin-top: 1rem;

  background-color: v-bind("colorStore.color.theme.complementaryDarken[2]");
  border-radius: 0.5rem;

  iframe {
    height: calc(100%);
    width: 100%;

    border-radius: 0.5rem;
  }
}
</style>
