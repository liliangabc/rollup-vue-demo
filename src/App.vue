<template>
  <div class="helloworld">
    <img :src="require('./assets/logo.png')" alt="">
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello World'
    }
  }
}
</script>
<style lang="less" scoped>
.helloworld {
  text-align: center;
  padding: 16px;
}
</style>