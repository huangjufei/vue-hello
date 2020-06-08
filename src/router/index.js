import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    },{
      path: '/home',
      name: 'home',
      component: Home,
      children:[{ /*被children 修饰的是子路由*/
        /*注意这里是相对home的相对路径,不需要添加/符号*/
        path: 'list',
        name: 'list',
        component:() => import('../views/list.vue')
      }, {
        path: 'user',
        name: 'user',
        component: () => import('../views/user.vue')
      }]
    },  {
      path: '/add',
      name: 'add',
      component: () => import('../views/add.vue')
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
