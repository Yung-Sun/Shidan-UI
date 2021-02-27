<demo>支持 Size</demo>

<template>
  <Button size="small"> 按钮 </Button>
  <Button> 按钮 </Button>
  <Button size="big"> 按钮 </Button>
  <br />
  <Button theme="link" size="small"> 按钮 </Button>
  <Button theme="link"> 按钮 </Button>
  <Button theme="link" size="big"> 按钮 </Button>
  <br />
  <Button theme="text" size="small"> 按钮 </Button>
  <Button theme="text"> 按钮 </Button>
  <Button theme="text" size="big"> 按钮 </Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>