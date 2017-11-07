<template>
  <div>
    <div class="tab" @click="goback">
      <</div>
        <div class="page1">
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <router-link to='/page2'>到第二个页面去</router-link>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
          <p>1111</p>
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
  .page1 {
    background: yellowgreen;
    height: 100%;
  }
  .tab {
    width: 100%;
    height: 30px;
    background: pink;
  }
</style>
