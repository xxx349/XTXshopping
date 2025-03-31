import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Details from '@/views/Details/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from '@/views/pay/index.vue'
import PackBack from '@/views/Payback/index.vue'
import Member from '@/views/Member/index.vue'
import userInfo from '@/views/Member/components/userInfo.vue'
import userOrder from '@/views/Member/components/userOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:layout,
      children:[
        {path:'',
          component:home
        },{
          path:'category/:id'
          ,component:category
        },{
          path:'/category/sub/:id'
          ,component:subCategory
        },{
          path:'detail/:id',
          component:Details
        },{
          path:'cartlist',
          component:CartList
        },{
          path:'checkout',
          component:CheckOut
        },{
          path:'pay',
          component:Pay
        },{
          path:'paycallback',
          component:PackBack
        },{
          path:'member',
          component:Member,
          children:[
            {
              path:'order',
              component:userOrder
            },{
              path:'',
              component:userInfo
            }
          ]
        }
      ]
    },{
      path:'/login',
      component:login
    }
  ],
  // 路由跳转时滚动条位置到顶部
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
