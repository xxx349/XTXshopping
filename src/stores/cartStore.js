// 管理购物车相关数据

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";
import {insertCartApi,findNewCartListApi} from '@/apis/cart'
import { deleteCartApi } from "@/apis/cart";

export const useCartStore=defineStore('cart',()=>{

  // 抽象一个获取最新购物车列表的函数
  const updateNewList = async () => {
    const res = await findNewCartListApi();
    cartlist.value = Array.isArray(res.result) ? res.result : []; // 确保 res.result 是数组
  };


  const userStore = useUserStore(); // 延迟调用 useUserStore
   // 获取登录状态
   const isLogin = computed(() =>userStore.userInfo.token)
  // 定义state
  const cartlist=ref([])

  // 定义方法



  // 加入购物车
  const addCart=async (goods)=>{
    const {skuId,count} = goods
    if(isLogin.value){
      // 登陆后的加入购物车逻辑
      await insertCartApi({skuId,count})
      updateNewList()
    }
    else{
       // 添加购物车,已经添加过商品加一，否则push
      const item=cartlist.value.find((item)=>goods.skuId===item.skuId)
      if(item){
        item.count++
      }else{
        cartlist.value.push(goods)
      }

  }
    }


  // 删除购物车
  const delCart=async(skuId)=>{
    if(isLogin.value){
      // 调用接口实现
      await deleteCartApi([skuId])
      updateNewList()
    }else{
      // 本地购物车
    const idx=cartlist.value.findIndex((item)=>skuId===item.skuId)
    cartlist.value.splice(idx,1)
  }
    }

  // 清除购物车
  const clearCart = () => {
    cartlist.value = []; // 确保清空购物车时设置为空数组
  };



  // 单选功能
  const singleCheck=(skuId,selected)=>{
    const item=cartlist.value.find((item)=>item.skuId===skuId)
    item.selected=selected
  }

  // 全选功能
  const allCheck=(selected)=>{
    cartlist.value.forEach(item=>item.selected=selected)
  }
  // 是否全选
  const isAll=computed(()=>cartlist.value.every((item)=>item.selected))

  // 计算属性
  // selected为true的数量
  const allSelected = computed(() => {
    return Array.isArray(cartlist.value)
      ? cartlist.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0)
      : 0;
  });
    // 数量
    const allCount = computed(() => {
      return Array.isArray(cartlist.value)
        ? cartlist.value.reduce((a, c) => a + c.count, 0)
        : 0;
    });
    // 价格
    const allPrice = computed(() => {
      return Array.isArray(cartlist.value)
        ? cartlist.value.reduce((a, c) => a + c.count * c.price, 0)
        : 0;
    });

  return{
    cartlist,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    allSelected,
    clearCart,
    updateNewList
  }
  },{
    persist: true

})
