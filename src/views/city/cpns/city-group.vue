<template>
  <!-- 使用 van-index-bar 组件，设置 sticky 为 false，index-list 为 indexList -->
  <van-index-bar :sticky="false" :index-list="indexList">
    <!-- 添加热门城市的锚点 -->
    <van-index-anchor index="热门" />
    <!-- 热门城市列表 -->
    <div class="list">
      <!-- 遍历热门城市数据 -->
      <template v-for="value in groupData.hotCities" :key="value.cityId">
        <!-- 热门城市项，点击时调用 cityClick 方法 -->
        <div class="city" @click="cityClick(value)">{{ value.cityName }}</div>
      </template>
    </div>
    <!-- 遍历按字母分组的城市数据 -->
    <template v-for="(group, index) in groupData.cities" :key="index">
      <!-- 按字母分组的锚点 -->
      <van-index-anchor :index="group.group" />
      <!-- 遍历每个分组中的城市数据 -->
      <template v-for="(city, indey) in group.cities" :key="city.cityId">
        <!-- 城市项，点击时调用 cityClick 方法 -->
        <van-cell :title="city.cityName" @click="cityClick(city)" />
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
// 引入 useCityStore
import useCityStore from "@/stores/modules/city";
// 引入 computed
import { computed } from "vue";
// 引入 useRouter
import { useRouter } from "vue-router";

// 定义 props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

// 计算 indexList，包含热门城市和按字母分组的城市
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

// 获取 router 实例
const router = useRouter();
// 获取 cityStore 实例
const cityStore = useCityStore();
// 城市点击事件处理函数
function cityClick(value) {
  cityStore.currentCity = value;
  router.back();
}
</script>

<style lang="less" scoped>
// 列表样式
.list {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  flex-wrap: wrap;
}
// 城市项样式
.city {
  width: 70px;
  height: 28px;
  border-radius: 14px;
  font-family: 12px;
  color: #000;
  text-align: center;
  line-height: 28px;
  background-color: #fff4ec;
  margin: 10px 0;
}
</style>
