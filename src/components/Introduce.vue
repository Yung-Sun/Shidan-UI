<template>
  <article
    class="markdown-body"
    v-html="md"
    style="margin-top: 40px; color: #333"
  ></article>
</template>

<script>
import md from "../markdown/Introduce.md";
export default {
  data() {
    return {
      md,
    };
  },
};
</script>