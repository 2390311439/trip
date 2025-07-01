<template>
  <div class="categories">
    <template v-for="(item, index) in categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div>{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    width: 70px;
    text-align: center;
    img {
      height: 32px;
      width: 32px;
    }
  }
}
</style>
