<demo>常规操作</demo>
<template>
  <Dialog
    v-model:visible="visible"
    :closeOnclickOverlay="false"
    :ok="success"
    :cancel="fail"
  >
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行字</p>
      <p>第二行字</p>
    </template>
  </Dialog>
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
    const success = () => {
      // 此处可写用户点击ok按钮调用的函数
      return true;
    };
    const fail = () => {
      // 此处可写用户点击cancel按钮调用的函数
    };

    return { visible, toggle, success, fail };
  },
};
</script>