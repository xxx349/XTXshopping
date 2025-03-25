// 引入初始化样式文件
import '@/styles/common.css'
import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// // 测试接口函数
// import { getCategory } from './apis/textapi'
// getCategory().then(res=>{
//   console.log(res);
  
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// 定义全局指令

// 实现图片懒加载
app.directive('img-lazy',{
  mounted(el,binding){
    // el：指令绑定的那个元素  img
    // binding：binding.value  指令等于号后面绑定的表达式值   图片url

    useIntersectionObserver(
      el,
      // 判读图片是否进入视口区域  isIntersecting为bool值
      ([{isIntersecting}]) =>{
        console.log(isIntersecting)
        if(isIntersecting){
          // 进入时口区域后 判断将图片地址是否给el
          el.src=binding.value
        }
        
      }
    )
    
  }
})