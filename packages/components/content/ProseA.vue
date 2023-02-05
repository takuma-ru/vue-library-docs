<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="content-prose-a"
  >
    <span>
      <slot />
    </span>
    <Icon
      icon="open_in_new"
      size="1rem"
      :wght="700"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_blank',
    required: false
  }
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.content-prose-a {
  display: inline-flex;
  align-items: center;

  color: v-bind("colorStore.color.theme.text");
  font-weight: bold;
  text-decoration: none;


  span {
    border-bottom: dotted 2px v-bind("colorStore.color.theme.subText");
  }
}
</style>
