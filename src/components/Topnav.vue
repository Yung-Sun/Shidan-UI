<template>
  <div class="topnav">
    <router-link to="/" title="返回首页~" class="logo">
      <painted-eggshell
        theme="multi-color"
        size="40"
        :fill="['#333', '#F5A623', '#FFF', '#43CCF8']"
      />
    </router-link>
    <div class="asideButton" @click="toggleAside">
      <drop-down-list
        theme="multi-color"
        size="40"
        :fill="['#66666680', '#F5A623', '#FFF', '#ffffff']"
        :strokeWidth="3"
      />
    </div>
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
  display: block;
  z-index: 11;
  .asideButton {
    position: absolute;
    display: none;
    padding: 20px;
    top: 0;
    left: 0;
    z-index: 11;
  }
}

@media (max-width: 500px) {
  .topnav {
    position: inherit;
    display: flex;
    justify-content: center;
    .logo {
      margin: 0 auto;
    }
    .asideButton {
      display: inline-block;
    }
    .rightBlock {
      display: inline;
      height: 40px;
      width: 40px;
    }
  }
}
</style>