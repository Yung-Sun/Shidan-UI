<template>
  <div class="topnav" @click="toggleAside">
    <!-- <router-link to="/" title="返回首页~"> -->
    <painted-eggshell
      theme="multi-color"
      size="40"
      :fill="['#333', '#F5A623', '#FFF', '#43CCF8']"
      class="logo"
    />
    <!-- </router-link> -->
  </div>
</template>

<script lang="ts">
import { PaintedEggshell } from "@icon-park/vue-next";
import { inject, Ref } from "vue";

export default {
  components: { PaintedEggshell },
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
  padding: 20px;
  position: relative;
  // border: 1px solid green;
  // background: pink;
  z-index: 10;
}
@media (max: width 500px) {
}
</style>