<template>
  <h1>Tabs 组件</h1>
  <h2>示例一</h2>
  <hr />
  <Tabs>
    <Tab Title="导航1">内容1</Tab>
    <Tab Title="导航2">内容2</Tab>
  </Tabs>
</template>

<script>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: { Tabs, Tab },
};
</script>