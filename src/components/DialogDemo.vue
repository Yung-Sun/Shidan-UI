<template>
  <h1>Dialog 组件</h1>
  <h2>示例一</h2>
  <hr />
  <Dialog
    v-model:visible="visible"
    :closeOnclickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行字111221</p>
      <p>第二行字</p>
    </template>
  </Dialog>
  <Button @click="toggle">Toggle</Button>
  <br /><br /><br />
  <h2>示例二</h2>
  <hr />
  <Button @click="showDialog">Show</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/opendialog";
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
    const showDialog = () => {
      openDialog({
        title: "哈哈哈",
        content: "xxxxxx",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { visible, toggle, f1, f2, showDialog };
  },
};
</script>