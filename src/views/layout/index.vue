<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'


// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore=useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>

<template>
  <LayoutFixed/>
  <LayoutHeader />
  <LayoutNav />
  
  <!-- 可以添加key，破坏复用机制 -->
  <!-- <RouterView :key="$route.fullPath"/> -->
   
  <RouterView />
  <LayoutFooter />
</template>