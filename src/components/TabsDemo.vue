<template>
  <h1>Tabs 组件</h1>
  <h2>示例一</h2>
  <hr />
  <Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">h</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: { Tabs, Tab },
};
</script>