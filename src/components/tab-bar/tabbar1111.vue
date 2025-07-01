<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div class="tab-bar-item" 
      :class="{ active: currentIndex === index }" @click="itemClick(index,item)">
        <img v-if="currentIndex !== index" :src="getAssetURl(item.image)" alt="">
        <img v-else :src="getAssetURl(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar';
import { ref } from "vue"
import { useRouter } from 'vue-router';
// import { getAssetURl } from '@/utils/get_assets_img';
const getAssetURl = (image) => {
  return new URL(`../../assets/img/${image}`, "http://localhost:5173/src/components/tab-bar/tab-bar.vue").href
}
const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index,item)=>{
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
// 设置tab-bar的样式
.tab-bar {
  // 固定在页面底部
  position: fixed;
  // 距离底部0像素
  bottom: 0;
  // 距离左边0像素
  left: 0;
  // 距离右边0像素
  right: 0;
  // 设置高度为50像素
  height: 50px;
  // 使用flex布局
  display: flex;
  // 设置顶部边框
  border-top: 1px solid #aaa;

  // 设置tab-bar-item的样式
  .tab-bar-item {
    // 平均分配空间
    flex: 1;
    // 使用flex布局
    display: flex;
    // 垂直排列
    flex-direction: column;
    // 内容垂直居中
    justify-content: center;
    // 内容水平居中
    align-items: center;
    // 设置左右边框
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;

    // 设置文字样式
    .text {
      // 设置字体大小
      font-size: 12px;
    }

    &.active {
      color: #ff9854;
    }

    // 设置图片样式
    img {
      // 设置图片宽度
      width: 32px;
    }
  }
}
</style>