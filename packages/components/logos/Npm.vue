<template>
  <div id="npm">
    <svg
      id="n"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <title>n</title>
      <path
        class="cls-1"
        d="M0,16V0H16V16ZM3,3V13H8V5h3v8h2V3Z"
      />
    </svg>
  </div>
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
#npm {
  display: inline-flex;
  align-items: center;
  justify-content: center;


  svg {
    width: 20px;
    height: 20px;
    fill: v-bind("colorStore.color.theme.text");
  }
}
</style>
