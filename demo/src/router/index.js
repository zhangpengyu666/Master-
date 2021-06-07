import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
children:[
  {
    path: '/users',
    name: 'User',
    component: () => import('../views/user/User.vue')
  },
  {
    path: '/roles',
    name: 'role',
    component: () => import('../views/right/role.vue')
  },
  {
    path: '/rights',
    name: 'right',
    component: () => import('../views/right/right.vue')
  },
]
  }
]

const router = new VueRouter({
  routes
})

export default router
