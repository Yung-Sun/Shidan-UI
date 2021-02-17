<template>
  <button
    class="shidan-button"
    :class="classes"
    :disabled="disabled"
    :loading="loading"
  >
    <loading
      theme="multi-color"
      size="16"
      :fill="['#333', '#F5A623', '#FFF', '#ffffff']"
      :strokeWidth="2"
      class="shidan-loadingIndicator"
      v-if="loading"
    />

    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
import { Loading } from "@icon-park/vue-next";
export default {
  components: { Loading },
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`shidan-theme-${theme}`]: theme,
        [`shidan-size-${size}`]: size,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: rgba(51, 51, 51, 0.2);
$yellow: #f5a623;
$border-radius: 5px;
.shidan-button {
  padding: 5px 10px;
  height: $h;
  margin: 10px;
  border: 1px solid $color;
  font-size: 16px;
  color: #333;
  outline: none;
  background: none;
  border-radius: $border-radius;
  cursor: pointer;
  &:hover {
    color: $yellow;
    border: 1px solid #f5a52380;
  }
  &.shidan-theme-link {
    border: none;
    color: $yellow;
    &:hover {
      color: #f5a52380;
    }
  }
  &.shidan-theme-text {
    border: none;
    &:hover {
      color: rgb(160, 160, 160);
      background: rgba(221, 221, 221, 0.2);
    }
  }
  &.shidan-size-small {
    font-size: 10px;
  }
  &.shidan-size-big {
    font-size: 20px;
    height: auto;
    padding: 8px 16px;
  }
  &[disabled] {
    cursor: not-allowed;
    color: gray;
    &.shidan-theme-link:hover {
      color: gray;
    }
  }
  > .shidan-loadingIndicator {
    > svg {
      animation: xxx 1.3s infinite linear;
    }
  }
}
@keyframes xxx {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>