import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',   //根路径
    redirect:'/index/shouye'   //重定向url地址
  },
  {
    path: "/index",
    component: () => import('@/views/common'),
    children: [
      {
        path: 'shouye',
        component: () => import('@/views/common/shouye'),
      },
      {
        path: 'fenglei',
        component: () => import('@/views/common/fenglei'),
      },
      {
        path: 'jingxuan',
        component: () => import('@/views/common/jingxuan'),
      },
      {
        path: 'paihangbang',
        component: () => import('@/views/common/paihangbang'),
      },
      {
        path: 'shudan',
        component: () => import('@/views/common/shudan'),
      },
    ]
  },
  {
    path: '/kehuduan',
    component: () => import('@/views/common/kehuduan'),
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
