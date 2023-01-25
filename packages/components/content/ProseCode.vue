<template>
  <div class="code">
    <div class="type">
      <span class="directory">
        &nbsp;{{ filename }}
      </span>
      <span>
        {{ language }}
      </span>
    </div>

    <div
      class="code-block"
      :type="language"
      @mouseenter="isShowCopyButton = true"
      @mouseleave="isShowCopyButton = false"
    >
      <span :id="thisId">
        <slot />
      </span>
      <div
        v-if="isShowCopyButton"
        class="copy-button"
        @click="copy()"
      >
        <Icon
          :icon="copyButtonIcon"
          :color="colorMode.value === 'dark' ? colorStore.color.black.lighten[2] : colorStore.color.theme.text"
          size="1rem"
        />
        <p v-text="copyButtonIcon === 'content_copy' ? 'Copy' : 'Done!'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~~/types/icon/iconName';

/* -- type, interface -- */
interface IProps {
  code?: string
  language?: string
  filename?: string
  highlights?: Array<number>
}

/* -- props, emit -- */
withDefaults(defineProps<IProps>(), {
  code: '',
  language: undefined,
  filename:  undefined,
})

/* -- store -- */
const colorStore = useColorStore()
const colorMode = useColorMode()

/* -- variable(ref, reactive, computed) -- */
const isShowCopyButton = ref(false)
const thisId = ref('')
const copyButtonIcon = ref<IconNameType>('content_copy')

/* -- function -- */
const copy = async () => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(document.getElementById(thisId.value)!.textContent!).then(() => {
      copyButtonIcon.value = 'done'
    });
  }
}

/* -- watch -- */
watch(isShowCopyButton, (newVal) => {
  if (!newVal) {
    copyButtonIcon.value = 'content_copy'
  }
})

/* -- life cycle -- */
onMounted(() => {
  thisId.value = 'code-' + Math.random().toString(32).substring(2)
})

</script>

<style lang="scss">
.type {
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 16px;

  color: v-bind("colorMode.value === 'dark' ? colorStore.color.black.lighten[2] : colorStore.color.black.darken[1]");
  font-size: 12px;
  font-weight: 500;
  border-radius: 0.5em 0.5em 0em 0em;
  background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.black.darken[2] : colorStore.color.white.darken[2]");

  .directory {
    display: flex;
    align-content: center;

    font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  }
}

.code {
  margin-top: 0.5em;
  margin-bottom: 1em;
}

.code-block {
  position: relative;

  &[type = "cmd"] {
    code {
      &::before {
        position: absolute;
        content: '>';
        font-weight: 600;
        color: v-bind('colorStore.color.green.default');
        margin-right: 0.5rem;
      }

      .line {
        margin-left: 1.5rem;
      }
    }
  }

  .copy-button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;

    position: absolute;
    height: min-content;
    padding: 0.5rem 1.25rem;
    right: 0.5em;
    top: 0.5em;

    box-sizing: border-box;
    border-radius: 0.3em;
    background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.black.darken[2] : colorStore.color.white.darken[2]");
    cursor: pointer;

    animation-name: fadeIn;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    opacity: 0;

    p {
      margin: 0px;

      font-size: 0.75rem;
    }

    @keyframes fadeIn{
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
}

pre {
  position: relative;
  height: 100%;
  padding: 1em 2em;
  margin: 0px;

  border-radius: 0em 0em 0.5em 0.5em;
  background-color: v-bind("colorMode.value === 'dark' ? colorStore.color.black.default : colorStore.color.white.default");
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 1em;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: v-bind('colorStore.color.black.lighten[1]');
  }
}

code {
  position: relative;

  color: v-bind('colorStore.color.black.lighten[2]');
  font-weight: 400;
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;

  .line {
    display: block;
    min-height: 1.5rem;
  }
}
</style>