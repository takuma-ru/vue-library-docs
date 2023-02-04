<template>
  <div
    :class="type"
    class="content-alert"
  >
    <div class="alert">
      <Icon
        v-if="isIcon"
        :icon="icon"
        :color="iconColor"
      />
      <div class="slot">
        <slot />
      </div>
      <!-- <Icon
        icon="chevron_right"
      /> -->
    </div>
    <!-- <div class="detail">
      <slot name="detail" />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~~/types/icon/iconName'

/* -- type, interface -- */
export interface IAlertProps {
  type: 'info' | 'warn' | 'err' | 'default'
  customIcon?: IconNameType
  isIcon?: boolean
}

/* -- store -- */
const colorStore = useColorStore()
const colorMode = useColorMode()

/* -- props, emit -- */
const props = withDefaults(defineProps<IAlertProps>(), {
  type: 'info',
  isIcon: true
})

/* -- variable(ref, reactive, computed) -- */
const icon = computed<IconNameType>(() => {
  if (props.customIcon) {
    return props.customIcon
  } else {
    switch (props.type) {
      case 'default':
        return 'notifications'
      case 'err':
        return 'error'
      case 'info':
        return 'info'
      case 'warn':
        return 'warning'
    }
  }
})

const iconColor = computed(() => {
  switch (props.type) {
      case 'default':
        return colorMode.value === 'dark' ? colorStore.color.blue.lighten[2] : colorStore.color.blue.darken[2]
      case 'err':
        return colorMode.value === 'dark' ? colorStore.color.red.lighten[2] : colorStore.color.red.darken[2]
      case 'info':
        return colorMode.value === 'dark' ? colorStore.color.blue.lighten[2] : colorStore.color.blue.darken[2]
      case 'warn':
        return colorMode.value === 'dark' ? colorStore.color.yellow.lighten[2] : colorStore.color.yellow.darken[2]
    }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.content-alert {
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem;
  margin: 0.5rem 0px 1rem 0px;

  border-radius: 0.5rem;

  &.default {
    background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.blue.darken[1] : colorStore.color.blue.default");
  }

  &.err {
    background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.red.darken[1] : colorStore.color.red.lighten[1]");
  }

  &.info {
    background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.blue.darken[1] : colorStore.color.blue.lighten[1]");
  }

  &.warn {
    background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.yellow.darken[1] : colorStore.color.yellow.lighten[1]");
  }

  .alert {
    display: grid;
    grid-template-columns: min-content minmax(0, 1fr) min-content;
    grid-template-rows: 100%;
    column-gap: 0.75rem;
    align-items: center;

    .slot {
      overflow-wrap: break-word;
    }
  }

  .detail {

  }
}
</style>
