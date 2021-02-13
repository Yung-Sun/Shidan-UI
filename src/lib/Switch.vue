<template>
  <button :class="{ checked }" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: rgba($color: #333333, $alpha: 0.5);
  border-radius: $h/2;
  position: relative;
}
button:focus {
  outline: none;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: #fff;
  border-radius: $h2/2;
  transition: left 0.25s;
}
button.checked {
  background: #f5a623;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>