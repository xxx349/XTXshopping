import httpInstance from "@/untils/http";

export function getCategoryApi(){
  return httpInstance({
    url:'/home/category/head'
  })
}