import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
const userStore=useUserStore()
const isLogin=computed(()=>userStore.userInfo.token)
export const useCartStore=defineStore('cart',()=>{
  // 定义state
  const cartlist=ref([])
  // 定义方法
  const addCart=(goods)=>{
    if(isLogin){
      // 登陆后的加入购物车逻辑

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

  // 单选功能
  const singleCheck=(skuId,selected)=>{
    const item=cartlist.value.find((item)=>item.skuId===skuId)
    item.selected=selected
  }

  // 删除购物车
  const delCart=(skuId)=>{
    const idx=cartlist.value.findIndex((item)=>skuId===item.skuId)
    cartlist.value.splice(idx,1)
  }

  // 全选功能
  const allCheck=(selected)=>{
    cartlist.value.forEach(item=>item.selected=selected)
  }
  // 是否全选
  const isAll=computed(()=>cartlist.value.every((item)=>item.selected))

  // 计算属性
  // selected为true的数量
  const allSelected=computed(()=>cartlist.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))
  // 数量
  const allCount=computed(()=>cartlist.value.reduce((a,c)=>a+c.count,0))
  // 价格
  const allPrice=computed(()=>cartlist.value.reduce((a,c)=>a+c.count*c.price,0))
  return{
    cartlist,
    addCart,delCart,allCount,allPrice
    ,singleCheck,isAll,allCheck,allSelected
  }
  },{
    persist: true

})
