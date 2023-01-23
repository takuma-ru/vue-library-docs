<template>
  <div class="content-page">
    page
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IPageProps {
  modelValue: any;
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IPageProps>(), {
  modelValue: false
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.content-page {

}
</style>
