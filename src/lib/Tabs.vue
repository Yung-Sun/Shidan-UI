<template>
  <div class="shidan-tabs">
    <div class="shidan-tabs-nav" ref="container">
      <div
        :class="{ selected: t === selected }"
        class="shidan-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="shidan-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="shidan-tabs-content">
      <component
        class="shidan-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="c in defaults"
        :is="c"
        :key="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import Tab from "../lib/Tab.vue";

export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const indicator = ref(null);
    const x = () => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };
    onMounted(x);
    onUpdated(x);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须为Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title: String) => {
      context.emit("update:selected", title);
    };

    return {
      defaults,
      titles,
      current,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>


<style lang="scss">
$yellow: #f5a623;
$color: #333;
$border-color: #d9d9d9;
.shidan-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $yellow;
      }
    }
    &-indicator {
      position: absolute;
      height: 2px;
      background: $yellow;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 0.4s;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>