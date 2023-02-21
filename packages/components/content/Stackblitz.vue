<template>
  <div class="content-stackblitz">
    <iframe
      :src="`https://stackblitz.com/edit/${projectId}?embed=1&hideExplorer=1&hideNavigation=1&view=preview`"
      frameborder="0"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IStackblitzProps {
  projectId: string
  height: string | number
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IStackblitzProps>(), {
  height: '500px'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.content-stackblitz {
  margin-top: 1rem;
  width: 100%;

  iframe {
    position: relative;
    z-index: 1;
    width: 100%;
    height: v-bind("height");
    padding: 0px;
    border-radius: 0.5em;
    border: 0;
    overflow: hidden;
  }
}
</style>
