<template>
  <div class="layouts-navigation-sub-section">
    <p
      class="title"
      @click="switchIsOpen()"
    >
      <span>
        {{ toSentence(path!.title) }}
      </span>
      <Icon
        :icon="isOpen ? 'expand_more' : 'chevron_right'"
      />
    </p>
    <template v-if="isOpen">
      <a
        v-for="subPath in path!.children"
        :key="subPath._id"
        :class="navigationStore.isCurrentPath(subPath._path) ? 'selected' : 'unselect'"
        @click="navigateTo(subPath._path)"
      >
        {{ toSentence(subPath.title) }}
      </a>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { NavItem } from '@nuxt/content/dist/runtime/types'

/* -- type, interface -- */
export interface INavigationSubSectionProps {
  path: NavItem
}

/* -- store -- */
const colorStore = useColorStore()
const navigationStore = useNavigationStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<INavigationSubSectionProps>(), {
})


/* -- variable(ref, reactive, computed) -- */
const isOpen = ref(false)

/* -- function -- */
const switchIsOpen = () => {
  isOpen.value = !isOpen.value
}

/* -- watch -- */

/* -- life cycle -- */
onMounted(() => {
  const route = useRoute()

  if (route.path.indexOf(props.path._path) > -1) {
    isOpen.value = true
  }
})
</script>

<style lang="scss" scoped>
.layouts-navigation-sub-section {
  display: flex;
  flex-flow: column;

  .title {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    width: 100%;
    margin: 0px;
    padding: 0.5rem 0 0.5rem 0;

    color: v-bind("colorStore.color.theme.subText");
    cursor: pointer;
    font-weight: 300;

    /* span {
      color: v-bind("colorStore.color.theme.subText");
    } */
  }

  a {
    display: inline-block;

    position: relative;
    margin-left: 1rem;
    padding: 0.5rem 0 0.5rem 0;

    text-decoration: none;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 80%;
      left: -0.75rem;
      top: 50%;

      background-color: v-bind("colorStore.color.blue.default");
      border-radius: 1px;
      transform: scale(1, 0) translateY(-50%);
      transform-origin: right center;
      transition: transform .3s;
    }

    &:hover::after {
      transform: scale(1, 1) translateY(-50%);
    }

    &.selected {
      color: v-bind("colorStore.color.blue.default");
      font-weight: 600;

      &::after {
        transform: scale(1, 1) translateY(-50%);
      }
    }

    &.unselect {
      color: v-bind("colorStore.color.theme.subText");
      font-weight: 400;
    }
  }
}
</style>
