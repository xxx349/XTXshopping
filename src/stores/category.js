import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layout';
import { onMounted,ref } from 'vue';

export const useCategoryStore = defineStore('category', () => {
  // 导航列表的逻辑
  
  // 导航列表数据

  let categoryList=ref([])

  // action获取导航数据的方法
  const getCategory=async()=>{
    const res = await getCategoryApi()
    categoryList.value=res.result
    console.log(res)
  }
  onMounted(()=>{
    getCategory()
  })
  return {categoryList,getCategory}
})
