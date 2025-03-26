//  封装分类数据业务代码 
import { useRoute } from 'vue-router';
import { getCategoryApi } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';


export function useCategory(){
  const categoryData  =ref({})
  const route = useRoute()
  const getCategory = async(id=route.params.id)=>{
    const res=await getCategoryApi(id)
    categoryData.value=res.result

  }
  onMounted(()=>getCategory())
  // 路由参数变化时，可以把分类数据接口重新发送   to为目标路由对象
  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
})

  return {
    categoryData
  }
}