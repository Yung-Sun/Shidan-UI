<template>
<div>导航栏</div>
<router-link to="/">Home</router-link>
|
<router-link to="/xxx">Document</router-link>
<hr/>
<router-view/>
</template>


<script>
export default {
  name: 'App',

}
</script>
