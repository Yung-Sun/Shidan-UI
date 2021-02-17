<template>
  <button class="shidan-button" :class="classes">
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
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
}
</style>