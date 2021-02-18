<template>
  <h1>Dialog 组件</h1>
  <Dialog
    v-model:visible="visible"
    :closeOnclickOverlay="false"
    :ok="f1"
    :cancel="f2"
  />
  <Button @click="toggle">Toggle</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { visible, toggle, f1, f2 };
  },
};
</script>