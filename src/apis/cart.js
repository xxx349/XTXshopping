// 封装购物车相关接口

// 加入购物车
import request from '@/untils/http'
export const insertCartApi =({skuId,count})=>{
  return request ({
    url:'/member/cart'
    ,method:'POST',
    data:{
      skuId,
      count
    }
  })
}
// 获取最新的购物车列表
export const findNewCartListApi=()=>{
  return request({
    url:'/member/cart'
  })
}
// 删除购物车
export const deleteCartApi=(ids)=>{
  return request({
    url:'/member/cart'
    ,method:'DELETE',
    data:{
      ids
    }
  })
}
// 合并购物车
export const mergeCartApi=(data)=>{
  return request({
    url:'/member/cart/merge',
    method:'POST',
    data
  })
}
