<template>
  <div
    v-if="isOpenDrawer && displayStatusStore.displaySize === 'sm' && !navigationStore.isCurrentPath('/')"
    class="background"
    @click="updateIsOpenDrawer(false)"
  />
  <transition
    name="transition-nav"
    appear
  >
    <div
      v-if="isOpenDrawer && displayStatusStore.displaySize === 'sm' && !navigationStore.isCurrentPath('/')"
      class="navigationDrawer"
    >
      <!-- <div
        class="close-button"
        @click="updateIsOpenDrawer(false)"
      >
        <BaseButton
          is-icon
          icon="navigate_before"
        />
      </div> -->
      <div
        v-for="sectionData in navigationStore.navigationList"
        :key="sectionData.title"
        class="section"
      >
        <Icon
          :icon="sectionData.icon"
          size="1rem"
          class="section-icon"
        />
        <p class="sction-title">
          {{ sectionData.title }}
        </p>
        <div class="paths">
          <template
            v-for="path in sectionData.children"
            :key="path._id"
          >
            <a
              v-if="!path.children"
              :class="navigationStore.isCurrentPath(path._path) ? 'selected' : 'unselect'"
              @click="navigateTo(path._path)"
            >
              {{ toSentence(path.title) }}
            </a>
            <NavigationSubSection
              v-else
              :path="(path as NavItem)"
            />
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { NavItem } from '@nuxt/content/dist/runtime/types'

/* -- type, interface -- */

/* -- store -- */
const {
  isOpenDrawer
} = useNavigationControlStore()
const colorMode = useColorMode()
const displayStatusStore = useDisplayStatusStore()
const colorStore = useColorStore()
const navigationStore = useNavigationStore()
const {
  updateIsOpenDrawer
} = useNavigationControlStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const textColor = (path: string) => {
  return navigationStore.isCurrentPath(path) ? colorMode.value === 'dark' ? colorStore.color.green.default : colorStore.color.black.default : colorStore.color.theme.subText
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.navigationDrawer {
  justify-self: end;

  position: relative;
  width: 200px;
  height: calc(100svh - 64px - 2rem);
  padding: 2rem;
  padding-right: 3rem;
  padding-bottom: 0rem;

  overflow-y: auto;
  -webkit-tap-highlight-color:rgba(0,0,0,0);

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  .close-button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0px;
    top: 50%;

    transform: translateY(-50%);
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);

    span {
      transform: rotate(-90deg);
      color: v-bind("colorStore.color.theme.subText");
    }
  }

  .section {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;

    margin-bottom: 1rem;

    .section-icon {
      grid-column: 1;
      grid-row: 1;

      margin: 0 0.5rem 0.5rem 0;
    }

    .sction-title {
      grid-column: 2;
      grid-row: 1;

      margin: 0 0 0.5rem 0;

      font-weight: bold;
    }

    .paths {
      grid-column: 2;
      grid-row: 2;

      display: flex;
      flex-flow: column;
      font-size: 14px;

      a {
        display: inline-block;

        position: relative;
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
  }

}

.background {
  z-index: 9999;
  position: absolute;
  height: 100%;
  width: calc(100vw - 200px - 5rem);

  left: calc(200px + 5rem);

  background-color: transparent;
  overflow: hidden;
}

.transition-nav {
    &-enter {
      position: absolute;

      &-from {
        transform: translateX(-100vw);
      }
      &-active {
        transition: all 0.4s cubic-bezier(.25,.8,.25,1);
      }
      &-to {
        transform: translateX(0px);
      }
    }

    &-leave {
      &-from {
        transform: translateX(0vw);
      }
      &-active {
        transition: all 0.4s cubic-bezier(.25,.8,.25,1);
      }
      &-to {
        transform: translateX(-100vw);
      }
    }
  }
</style>
