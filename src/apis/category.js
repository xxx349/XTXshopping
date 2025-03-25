import httpInstance from "@/untils/http";

export function getCategoryApi(id){
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}