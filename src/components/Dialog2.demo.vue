<demo>常规操作</demo>
<template>
  <Button @click="showDialog">Show</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/opendialog";

export default {
  components: { Dialog, Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "xxxxxxxxxxxxxxxx",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>