<template>
  <template v-if="visible">
    <div class="shidan-dialog-overlay"></div>
    <div class="shidan-dialog-wrapper">
      <div class="shidan-dialog">
        <header>
          <span class="shidan-dialog-title">标题</span>
          <span class="shidan-dialog-close"></span>
        </header>
        <hr />
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <hr />
        <footer>
          <Button class="shidan-dialog-ok">OK</Button>
          <Button class="shidan-dialog-cancel">Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
  
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
$radius: 8px;
$border-color: #66666633;
.shidan-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  padding: 0 8px;
  min-width: 18em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 12;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 13;
  }
  > hr {
    border-top: 1px solid $border-color;
    margin: 4px 0;
  }
  > header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>