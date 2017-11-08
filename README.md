# README
Vue-router简单实现页面左右过渡Demo  
---

* 在路由的原型上加一个`goback`函数,判断路由是不是返回上一页
		
		Router.prototype.goback = function () {
		  this.isback = true
		  window.history.go(-1)
		}
 >返回上一页应该调用 this.$router.goback()

* 需要实现路由过渡效果必须在显示区加上transition标签，绑定一个变量

         <template>
		   <transition :name='transitionName'>
	          <router-view class="content"/>
	       </transition>
         </template>


* watch观察路由，判断路由是前进还是后退 ，从而控制Class改变过渡效果 
 
		 export default {
		    data() {
		      return {
		        transitionName: 'fade-left'
		      }
		    },
		    watch: {
		      '$route' (to, from) {
		        let isBack = this.$router.isback
		        if (isBack) {
		          this.transitionName = 'fade-right'
		        } else {
		          this.transitionName = 'fade-left'
		        }
		        this.$router.isback = false
		      }
		    }
		  }


* CSS样式  
 
		  .fade-left-enter, .fade-right-leave-active {
		    -webkit-transform: translate(100%, 0);
		    transform: translate(100%, 0);
		    z-index: 999;
		  }
		  .fade-left-leave-active, .fade-right-enter {
		    -webkit-transform: translate(-100px, 0);
		    transform: translate(-100px, 0);
		    transition-delay: .1s;
		  }
  		  



