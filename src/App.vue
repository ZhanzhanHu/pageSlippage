<template>
  <div id="app">
    <transition :name='transitionName'>
      <router-view class="content"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      transitionName:'fade-left'
    }
  },
  watch:{
    '$route'(to,from){
    let isBack=this.$router.isback
    if(isBack){
      this.transitionName='fade-right'
    }else{
      this.transitionName='fade-left'
    }
    this.$router.isback=false
    }
  }
}
</script>

<style>
@import 'assets/base.less';
html,body{
  width: 100%;
  overflow: auto;
}
#app {
 width: 100%;
}
.content {
  position: absolute;
  width:100%;
  height: 100%;
  /* transition: all 3s cubic-bezier(.55,0,.1,1); */
  transition: all .4s linear;
  background-color: #ffffff;
}
  .fade-left-enter, .fade-right-leave-active {
    /* opacity: 0; */
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
     z-index: 999;
  }

  .fade-left-leave-active, .fade-right-enter{
    /* opacity: 0; */
   -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0);
    transition-delay: .1s;
  }




</style>
