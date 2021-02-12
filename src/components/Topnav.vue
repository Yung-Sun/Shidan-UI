<template>
  <div class="topnav">
    <router-link to="/" title="返回首页~">
      <painted-eggshell
        theme="multi-color"
        size="40"
        :fill="['#333', '#F5A623', '#FFF', '#43CCF8']"
        class="logo"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { PaintedEggshell } from "@icon-park/vue-next";

export default {
  components: { PaintedEggshell },
};
</script>

<style lang="scss" scoped>
.topnav {
  padding: 20px;
}
</style>