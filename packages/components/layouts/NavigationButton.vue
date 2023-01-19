<template>
  <div
    v-if="displayStatusStore.displaySize === 'sm' && !navigationStore.isCurrentPath('/')"
    id="navigationButton"
  >
    <BaseButton
      is-icon
      :icon="isOpenDrawer ? 'close' : 'menu'"
      @click="switchIsOpenDrawer"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const displayStatusStore = useDisplayStatusStore()
const navigationStore = useNavigationStore()

const {
  isOpenDrawer,
  switchIsOpenDrawer
} = useNavigationControlStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */


/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationButton {

}
</style>
