<template>
  <div class="loading" v-if="mainStore.isloading" @click="loadingClick">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

function loadingClick() {
  mainStore.isloading = false;
}
</script>

<style scoped>
.loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  /* text-align: center;
  align-content: center; */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 /100% 100%;
    img {
      height: 70px;
      width: 70px;
    }
  }
}
</style>
