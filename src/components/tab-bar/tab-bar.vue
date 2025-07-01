<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetURl(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURl(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- <template v-for="(item, index) in tabbarData">
      <div class="tab-bar-item" 
      :class="{ active: currentIndex === index }" @click="itemClick(index,item)">
        <img v-if="currentIndex !== index" :src="getAssetURl(item.image)" alt="">
        <img v-else :src="getAssetURl(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import { watch } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
// import { getAssetURl } from '@/utils/get_assets_img';
const getAssetURl = (image) => {
  return new URL(
    `../../assets/img/${image}`,
    "http://localhost:5173/src/components/tab-bar/tab-bar.vue"
  ).href;
};
const currentIndex = ref(0);
const route = useRoute();

watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  if (index === -1) return;
  currentIndex.value = index;
});
</script>

<style lang="less" scoped>
// 设置tab-bar的样式
.tab-bar {
  // 设置图片样式
  img {
    // 设置图片宽度
    width: 32px;
  }
}
</style>
