import httpInstance from '@/untils/http'


// 获取banner

export function getBannerApi(){
  return httpInstance({
    url:'home/banner'
  })
}