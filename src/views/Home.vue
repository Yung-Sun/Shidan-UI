<template>
  <div>
    <Topnav />
    <div class="banner">
      <egg
        theme="multi-color"
        size="200"
        :fill="['#333', '#F5A623', '#FFF', '#43CCF8']"
        :strokeWidth="2"
      />
      <h1>示 蛋 UI</h1>
      <h2>一 个 简 洁 美 观 的 UI 框 架</h2>
      <div class="action">
        <a href="https://github.com/Yung-Sun">GitHub</a>
        <a href="#/doc">Start</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PaintedEggshell, Egg } from "@icon-park/vue-next";
import Topnav from "../components/Topnav.vue";

export default {
  components: { Egg, PaintedEggshell, Topnav },
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    font-weight: normal;
    font-size: 48px;
    margin: 0;
  }
  > h2 {
    font-weight: normal;
    font-size: 24px;
    margin: 0;
  }
  .action {
    margin: 40px 0;
    > a {
      padding: 10px 20px;
      margin: 20px;
      text-decoration: none;
      width: 120px;
      height: 44px;
      color: #f5a623;
      background: #ffffff;
      border: 3px solid rgba(51, 51, 51, 0.5);
      border-radius: 12px;
    }
    > a:hover {
      border: 3px solid rgba(51, 51, 51, 1);
    }
  }
}
</style>