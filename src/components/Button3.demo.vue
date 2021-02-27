<demo>支持 Disable</demo>

<template>
  <Button theme="button" disabled> 按钮 </Button>
  <Button theme="link" disabled> 按钮 </Button>
  <Button theme="text" disabled> 按钮 </Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>