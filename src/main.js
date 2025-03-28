// 引入初始化样式文件
import '@/styles/common.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入懒加载插件
import { lazyPlugin } from './directives'

// 引入全局组件插件
import { componentPlugin } from './components'

// // 测试接口函数
// import { getCategory } from './apis/textapi'
// getCategory().then(res=>{
//   console.log(res);
  
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 懒加载插件使用
app.use(lazyPlugin)

// 全局使用
app.use(componentPlugin)

app.mount('#app')


// 定义全局指令

