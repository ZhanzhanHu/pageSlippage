import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/views/page1'
import page2 from '@/views/page2'

Router.prototype.goback = function () {
  this.isback = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/page1',
      name: page1,
      component: page1
    },
    {
      path: '/page2',
      name: page2,
      component: page2,
    }
  ]
})
