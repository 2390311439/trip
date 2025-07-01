<template>
  <div class="home" ref="homeRef">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox></homeSearchBox>
    <homeCategories></homeCategories>
    <searchBar v-if="isShowSearchBar"></searchBar>
    <homeContent></homeContent>
  </div>
</template>
<script>
export default { name: "home" };
</script>
<script setup>
import { useRouter } from "vue-router";
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll";
import searchBar from "@/components/search-bar/search-bar.vue";
import { watch, ref, computed, onActivated } from "vue";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();

let currentPage = 1;
homeStore.fetchHouselistData(currentPage);
const homeRef = ref();
const { isReachBottom, scrollTop } = useScroll(homeRef);

function btnClick() {
  currentPage++;
  homeStore.fetchHouselistData(currentPage).then(() => {
    isReachBottom.value = false;
  });
}
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value,
  });
});
watch(isReachBottom, (newValue) => {
  if (newValue) {
    btnClick();
  }
});
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.banner img {
  width: 100%;
}
</style>
