import httpInstance from "@/untils/http";

export function getCategory(){
  return httpInstance({
    url:'home/category/head'
  })
}