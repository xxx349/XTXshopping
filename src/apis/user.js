// 封装所有与用户相关的接口函数
import httpInstance from "@/untils/http";

// 登录接口
 export const loginApi =({account,password})=>{
  return httpInstance({
    url:'/login'
    ,method:'POST',
    data:{
      account,
      password
    }
  })
 }

//  获取用户信息页面猜你喜欢的接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit
    }
  })
}
