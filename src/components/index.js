// components组件全局化注册

import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
// 插件方法
export const componentPlugin ={
  install(app){
    app.component('XtxImageView',ImageView)
    app.component('XtxSku',Sku)
  }
}