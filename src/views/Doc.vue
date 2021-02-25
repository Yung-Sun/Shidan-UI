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
> .nav {
  flex-shrink: 0;
}
> .content {
  flex-grow: 1;
  padding-top: 60px;
  padding-left: 156px;
  display: flex;
  @media (max-width: 500px) {
    padding-left: 0;
  }
}

.content {
  > aside {
    flex-shrink: 0;
    z-index: 9;
  }
  > main {
    flex-grow: 1;
    padding-left: 180px;
    margin-right: 16px;
    @media (max-width: 500px) {
      padding: 0 16px;
    }
  }
}
aside {
  color: #f5a623;
  background: #333;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    padding: 6px 16px;
    margin: 0;
  }
  > ol {
    list-style: none;
    padding: 0;
    margin: 0;

    > li {
      > a {
        padding: 6px 16px;
        display: block;
        text-decoration: none;
        color: inherit;
        &.router-link-active {
          background: white;
          color: #333;
        }
      }
    }
  }
}
main {
  overflow: auto;
}
</style>