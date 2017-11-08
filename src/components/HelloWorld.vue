<template>
  <div class="hello">
    <router-link to='/page1'>Go to page1</router-link>
    <br/>
    <router-link to='/page2'>Go to page2</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    background-color:yellow;
    height: 100%;
  }
  a {
    color: #42b983;
  }
  div {
    font-size: 36px
  }
</style>
