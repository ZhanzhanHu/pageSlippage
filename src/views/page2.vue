<template>
  <div>
    <div class="tab" @click="goback">
      <</div>
        <div class="page2">
          <p>2222</P>
          <p>2222</P>
          <p>2222</P>
          <p>2222</P>
          <p>2222</P>
          <router-link to='/'>到首页去</router-link>
          <p>2222</P>
          <p>2222</P>
          <p>2222</P>
          <p>2222</P>
          <p>2222</P>
        </div>
    </div>
</template>
<script>
  export default {
    methods: {
      goback() {
        this.$router.goback()
      }
    }
  }
</script>

<style>
  .page2 {
    background: green;
    height: 100%;
  }
  .tab {
    width: 100%;
    height: 30px;
    background: pink;
  }
</style>
