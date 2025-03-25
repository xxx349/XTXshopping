import httpInstance from '@/untils/http'


// 获取banner

export function getBannerApi(){
  return httpInstance({
    url:'home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewApi=()=>{
  return httpInstance({
    url:'/home/new'
  })
}


/**
 * @description: 获取热门推荐
 * @param {*}
 * @return {*}
 */
export const getHotApi=()=>{
  return httpInstance({
    url:'/home/hot'
  })
}
