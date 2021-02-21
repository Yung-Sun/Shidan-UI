<template>
  <h1>Tabs 组件</h1>
  <h2>示例一</h2>
  <hr />
  <Tabs v-model:selected="x">
    <Tab title="导航1" selected>内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">h</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const x = ref("导航1");
    return {
      x,
    };
  },
};
</script>
