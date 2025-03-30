import { defineStore } from "pinia";
import { ref } from "vue";
export const useCartStore=defineStore('cart',()=>{
  // 定义state
  const catlist=ref([])
  // 定义方法
  const addCart=(goods)=>{
    // 添加购物车,已经添加过商品加一，否则push
    const item=catlist.value.find((item)=>goods.skuId===item.skuId)
    if(item){
      item.count++
    }else{
      catlist.value.push(goods)
    }

  }
  return{
    catlist,
    addCart
  }
  },{
    persist: true 
  
})