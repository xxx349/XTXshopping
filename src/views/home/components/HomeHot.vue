<script setup>
import HomePanel from './HomePanel.vue';
import { getHotApi } from '@/apis/home';
import { onMounted, ref } from 'vue';

const hotList=ref([])
const gethot=async()=>{
  const res=await getHotApi()
  
  hotList.value = res.result
}
onMounted(()=>gethot())
</script>

<template>
  <HomePanel title="热门推荐" subtitle="热门推荐  就是好用">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <p class="title">{{ item.title }}</p>
          <img v-img-lazy="item.picture"  :alt="item.alt" />
          
        </RouterLink>

      </li>
    </ul>
  </HomePanel>
  

</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    .item-container {
      display: flex;
      flex-direction: column;
      height: 100%; /* 让容器占满整个 li */
      justify-content: space-between; /* 标题在上，图片在下 */
      align-items: center; /* 水平居中 */
    }

    img {
      width: 306px;
      height: 306px;
      object-fit: cover; /* 防止图片变形 */
    }

    .title {
      font-size: 22px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: auto 0; /* 让标题在可用空间居中 */
      color: $priceColor;
    }
  }
}
</style>