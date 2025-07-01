<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
    <!-- <tab-bar></tab-bar> -->
    <loading></loading>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import tabBar from "./components/tab-bar/tab-bar.vue";
import loading from "./components/loading/loading.vue";
const route = useRoute();
</script>

<style scoped></style>
