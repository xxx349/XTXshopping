// 引入初始化样式文件
import '@/styles/common.css'

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
