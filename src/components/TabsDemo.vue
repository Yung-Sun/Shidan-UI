<template>
  <h1>Tabs 组件</h1>
  <Demo :component="TabsDemo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabsDemo from "./Tabs.demo.vue";
import { ref } from "vue";
export default {
  components: { Demo },
  setup() {
    const x = ref("导航1");
    return {
      x,
      TabsDemo,
    };
  },
};
</script>
