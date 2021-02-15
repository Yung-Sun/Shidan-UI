<template>
  <Button @click="Onclick" @focus="Onclick" @mouseover="Onclick">
    哈哈哈
  </Button>
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