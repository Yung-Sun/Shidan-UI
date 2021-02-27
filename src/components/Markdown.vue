<template>
  <article
    class="markdown-body"
    v-html="content"
    style="margin-top: 40px; color: #333"
  ></article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>