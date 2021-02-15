<template>
  <h1>Button 组件</h1>
  <hr />
  <Button>我是按钮</Button>
  <Button theme="button"> 我是按钮 </Button>
  <Button theme="link"> 我是按钮 </Button>
  <Button theme="text"> 我是按钮 </Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const Onclick = () => {
      console.log("hi");
    };
    return { Onclick };
  },
};
</script>