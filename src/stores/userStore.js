// 管理用户相关数据

import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/user";
import { useCartStore } from "./cartStore";
import { mergeCartApi } from "@/apis/cart";

export const useUserStore=defineStore('user',()=>{
  const cartStore=useCartStore()
  // 定义管理用户数据的state
  const userInfo=ref({})
  // 当以获取接口的action函数
  const getUserInfo=async({account,password})=>{
    // 获取用户信息
    const res=await loginApi({account,password})
    userInfo.value=res.result

    // 合并购物车
    await mergeCartApi(cartStore.cartlist.map(item=>{
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    }))
    cartStore.updateNewList()
  }
  // 退出时清除数据
  const clearUserInfo=()=>{
    userInfo.value={}
    // 清除购物车
    cartStore.clearCart()
  }
  // 以对象的格式把state和action return
  return {
    getUserInfo,
    userInfo,
    clearUserInfo
  }
},
//为了能够长时间持有数据，而不是刷新后就消失，即为了保持登陆状态
{
  persist: true  // 这里应该是 defineStore 的第二个参数
})
