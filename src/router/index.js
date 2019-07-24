import Vue from 'vue'
import Router from 'vue-router'
//引入相应路由组件
import Login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      alias:'/login',
      component:Login
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

