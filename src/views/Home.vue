<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>示 蛋 UI</h1>
      <h2>一 个 简 洁 美 观 的 UI 框 架</h2>
      <div class="action">
        <a href="#">GitHua</a>
        |
        <a href="#/doc">Start</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PaintedEggshell } from "@icon-park/vue-next";
import Topnav from "../components/Topnav.vue";

export default {
  components: { PaintedEggshell, Topnav },
};
</script>

<style lang="scss" scoped>
.topnav {
  padding: 20px;
}
</style>