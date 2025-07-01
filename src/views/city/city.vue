<template>
  <div class="top-page city">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        shape="round"
        show-action
        @cancel="cancelClick"
      />

      <van-tabs v-model:active="activeTab" color="#ff9854" class="tabs">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-if="activeTab === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { getCityAll } from "@/services";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import cityGroup from "./cpns/city-group.vue";

const router = useRouter();
const searchValue = ref("");
const activeTab = ref();

function cancelClick() {
  router.back();
}

const cityStore = useCityStore();
cityStore.fetchAllCitiesData();

const { allCities } = storeToRefs(cityStore);

const currentGroup = computed(() => allCities.value[activeTab.value]);
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  // 布局滚动
  .content {
    height: calc(100vh - 150px);
    overflow-y: scroll;
  }
}
</style>
