<template>
  <button
    @click="toggle"
    :class="{ 'shidan-checked': value }"
    class="shidan-switch"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.shidan-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: rgba($color: #333333, $alpha: 0.5);
  border-radius: $h/2;
  position: relative;
  display: block;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: $h2/2;
    transition: all 0.3s;
  }
  &:focus {
    outline: none;
  }
  &.shidan-checked {
    background: #f5a623;
    > span {
      left: calc(100% - #{$h2} - 3px);
    }
  }
  &:active {
    > span {
      width: $h2 + 3px;
    }
  }
  &.shidan-checked:active {
    > span {
      width: $h2 + 3px;
      margin-left: -4px;
    }
  }
}
</style>