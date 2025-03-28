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