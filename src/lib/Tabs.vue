<template>
  <div class="shidan-tabs">
    <div class="shidan-tabs-nav">
      <div
        :class="{ selected: t === selected }"
        class="shidan-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
      >
        {{ t }}
      </div>
    </div>
    <div class="shidan-tabs-content">
      <component class="shidan-tabs-content-item" :is="current" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "../lib/Tab.vue";

export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须为Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = defaults.filter((tag) => {
      return tag.props.title === props.selected;
    })[0];
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, current, select };
  },
};
</script>


<style lang="scss" scoped>
$yellow: #f5a623;
$color: #333;
$border-color: #d9d9d9;
.shidan-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $yellow;
        border-bottom: 2px solid $yellow;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>