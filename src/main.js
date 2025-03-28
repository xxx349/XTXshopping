// 引入初始化样式文件
import '@/styles/common.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入pinia插件 
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

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


// 注册pinia
app.use(createPinia())
// 使用pinia插件
const pinia = createPinia()
app.use(pinia)
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)


app.use(router)

// 懒加载插件使用
app.use(lazyPlugin)
// 全局使用
app.use(componentPlugin)

app.mount('#app')


// 定义全局指令

