<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <houseItemV9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
          @click="itemClick(item)"
        />
        <houseItemV3
          v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"
          @click="itemClick(item)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import houseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import houseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);
const router = useRouter();
function itemClick(item) {
  router.push("./detail/" + item.data.houseId);
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
