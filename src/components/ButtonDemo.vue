<template>
  <h1>Button 组件</h1>
  <h2>示例一</h2>
  <hr />
  <Button theme="button"> 按钮 </Button>
  <Button theme="link"> 按钮 </Button>
  <Button theme="text"> 按钮 </Button>
  <h2>示例二</h2>
  <hr />
  <Button size="small"> 按钮 </Button>
  <Button> 按钮 </Button>
  <Button size="big"> 按钮 </Button>
  <br />
  <Button theme="link" size="small"> 按钮 </Button>
  <Button theme="link"> 按钮 </Button>
  <Button theme="link" size="big"> 按钮 </Button>
  <br />
  <Button theme="text" size="small"> 按钮 </Button>
  <Button theme="text"> 按钮 </Button>
  <Button theme="text" size="big"> 按钮 </Button>
  <h2>示例三</h2>
  <hr />
  <Button theme="button" disabled> 按钮 </Button>
  <Button theme="link" disabled> 按钮 </Button>
  <Button theme="text" disabled> 按钮 </Button>

  <h2>示例四</h2>
  <hr />
  <Button theme="button" loading> 加载中 </Button>
  <Button theme="link" loading> 加载中 </Button>
  <Button theme="text" loading> 加载中 </Button>
  <br />
  <Button theme="button"> 加载完毕 </Button>
  <Button theme="link"> 加载完毕 </Button>
  <Button theme="text"> 加载完毕 </Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const Onclick = () => {
      console.log("hi");
    };
    return { Onclick };
  },
};
</script>