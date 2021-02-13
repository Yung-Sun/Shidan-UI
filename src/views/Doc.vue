<template>
  <Topnav />
  <div class="content">
    <aside v-if="asideVisible">
      <h2>文档</h2>
      <ol class="document">
        <li>
          <routerLink to="/doc/introduce">介绍</routerLink>
        </li>
        <li>
          <routerLink to="/doc/install">安装</routerLink>
        </li>
        <li>
          <routerLink to="/doc/start">开始使用</routerLink>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol class="componentList">
        <li>
          <routerLink to="/doc/switch">Switch 组件</routerLink>
        </li>
        <li>
          <routerLink to="/doc/button">Button 组件</routerLink>
        </li>
        <li>
          <routerLink to="/doc/dialog">Dialog 组件</routerLink>
        </li>
        <li>
          <routerLink to="/doc/tabs">Tabs 组件</routerLink>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  aside {
    background: lightblue;
    padding: 20px;
    width: 140px;
    h2 {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      cursor: default;
    }
    ol {
      color: #333;
      list-style: none;
      margin: 0;
      padding: 0;
      > li {
        margin-bottom: 5px;
        > a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
    @media (max-width: 500px) {
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 86px;
    }
  }
  main {
    flex-grow: 1;
    padding: 10px 20px;
  }
}
</style>