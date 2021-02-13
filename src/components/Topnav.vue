<template>
  <div class="topnav">
    <div class="asideButton" @click="toggleAside">
      <drop-down-list
        theme="multi-color"
        size="40"
        :fill="['#333', '#F5A623', '#FFF', '#ffffff']"
        :strokeWidth="3"
      />
    </div>
    <router-link to="/" title="返回首页~">
      <painted-eggshell
        theme="multi-color"
        size="40"
        :fill="['#333', '#F5A623', '#FFF', '#43CCF8']"
        class="logo"
      />
    </router-link>
    <span class="rightBlock"></span>
  </div>
</template>

<script lang="ts">
import { PaintedEggshell, DropDownList } from "@icon-park/vue-next";
import { inject, Ref } from "vue";

export default {
  components: { PaintedEggshell, DropDownList },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  padding: 20px 10px;
  position: fixed;
  background-color: transparent;
  z-index: 10;

  .asideButton {
    display: none;
  }
  .rightBlock {
    display: none;
  }
}

@media (max-width: 500px) {
  .topnav {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    .asideButton {
      position: relative;
      display: inline;
      top: 0;
      left: 0;
      z-index: 10;
    }
    .rightBlock {
      display: inline;
      height: 40px;
      width: 40px;
    }
  }
}
</style>