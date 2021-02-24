<template>
  <div class="banner">
    <egg
      theme="multi-color"
      size="230"
      :fill="['#333', '#F5A623', '#FFF', '#43CCF8']"
      :strokeWidth="2"
    />
    <h1>示 蛋 UI</h1>
    <h2>一 个 简 洁 美 观 的 UI 框 架</h2>
    <div class="action">
      <a href="https://github.com/Yung-Sun"> GitHub </a>
      <a href="#/doc/introduce"> Start </a>
    </div>
  </div>
  <footer>
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源码采用 TypeScript 编写</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-easy"></use>
        </svg>
        <h3>代码易读</h3>
        <p>各组件源码极其简洁</p>
      </li>
    </ul>
  </footer>
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
  padding-top: 140px;
  @media (max-width: 500px) {
    padding-top: 20px;
  }
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
    text-align: center;
    height: 40px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    > a {
      line-height: 40px;
      width: 100px;
      text-decoration: none;

      color: rgba(245, 166, 35);
      border: 2px solid rgba(51, 51, 51);
      border-radius: 10px;
    }
    > a:hover {
      color: rgba(245, 166, 35, 0.5);
      border: 2px solid rgba(51, 51, 51, 0.5);
    }
  }
}

footer {
  margin: 0 auto;
  width: 1100px;
  margin-top: 30px;
  @media (max-width: 1100px) {
    width: 700px;
    margin-top: 0;
  }
  @media (max-width: 700px) {
    width: 380px;
    margin-top: 0;
  }
  > ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > li {
      list-style: none;
      display: grid;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      justify-content: start;
      margin-bottom: 40px;
      .icon {
        width: 64px;
        height: 64px;
        fill: #333;
        overflow: hidden;
        grid-area: icon;
      }
      h3 {
        margin: 0;
        font-size: 28px;
        grid-area: title;
        font-weight: normal;
      }
      p {
        margin: 0;
        grid-area: text;
      }
    }
  }
}
</style>