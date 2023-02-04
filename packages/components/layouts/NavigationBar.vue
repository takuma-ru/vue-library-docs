<template>
  <div
    v-show="displayStatusStore.displaySize === 'lp' || displayStatusStore.displaySize === 'pc'"
    class="navigationBar"
  >
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
            :path="path"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const displayStatusStore = useDisplayStatusStore()
const navigationStore = useNavigationStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.navigationBar {
  grid-column: 1;
  justify-self: end;

  width: 200px;
  padding: 2rem 1rem 2rem 1rem;

  box-sizing: border-box;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  overflow-y: auto;

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
</style>
