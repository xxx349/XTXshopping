// 获取订单详情的接口

import request from '@/untils/http'

export const getOrderApi=(id)=>{
  return request({
    url:`member/order/${id}`
  })
}
