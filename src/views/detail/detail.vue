<template>
  <div class="detail top-page" ref="detailRef">
    <tabControl
      v-if="showTabControl"
      class="tabs"
      ref="tabControlRef"
      :titles="names"
      @tabItemClick="tabClick"
    ></tabControl>
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      :left-arrow="true"
      @click-left="navClick"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detailSwipe
        :swipe-data="mainPart.topModule.housePicture.housePics"
      ></detailSwipe>
      <detailInfos
        name="描述"
        :ref="getSectionRef"
        :top-infos="mainPart.topModule"
      ></detailInfos>
      <detailFacility
        name="设施"
        :ref="getSectionRef"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></detailFacility>
      <detailLandlord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></detailLandlord>
      <detailComment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></detailComment>
      <detailNotice
        name="须知"
        :ref="getSectionRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      ></detailNotice>
      <detailMap
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></detailMap>
      <detailIntro :price-intro="mainPart.introductionModule"></detailIntro>
      <detailActionbar :current-house="currentHouse"></detailActionbar>
    </div>

    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
// import router from "@/router";

import tabControl from "@/components/tab-control/tab-control.vue";
import { computed, ref, watch } from "vue";
import { getDetailInfos } from "@/services/modules/detail";
import { useRouter, useRoute } from "vue-router";
import detailSwipe from "./cpns/detail_01-swipe.vue";
import detailInfos from "./cpns/detail_02-infos.vue";
import detailFacility from "./cpns/detail_03-facility.vue";
import detailLandlord from "./cpns/detail_04-landlord.vue";
import detailComment from "./cpns/detail_05-comment.vue";
import detailNotice from "./cpns/detail_06-notice.vue";
import detailMap from "./cpns/detail_07-map.vue";
import detailIntro from "./cpns/detail_08-intro.vue";
import detailActionbar from "./cpns/detail-actionbar.vue";
import useScroll from "@/hooks/useScroll";
import { values } from "underscore";
const router = useRouter();
const route = useRoute();
function navClick() {
  router.back();
}
const detailInfo = ref({});
const mainPart = computed(() => detailInfo.value.mainPart);

const currentHouse = computed(() => detailInfo.value?.currentHouse);
getDetailInfos(route.params.id).then((res) => {
  detailInfo.value = res.data;
});
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  return scrollTop.value > 300;
});
// const landlordRef = ref();
// const sectionEls = [];
// const getSectionRef = (value) => {
//   sectionEls.push(value.$el);
// };
const sectionEls = ref({});
const names = computed(() => {
  return Object.keys(sectionEls.value);
});
const getSectionRef = (value) => {
  if (!value) return;
  const name = value.$el.getAttribute("name");
  sectionEls.value[name] = value.$el;
};
let isClick = false;
let currentDistance = -1;
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let distance = el.offsetTop;
  if (index !== 0) {
    distance = distance - 44;
  }
  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth",
  });
  isClick = true;
  currentDistance = distance;
};
const tabControlRef = ref();
watch(scrollTop, (newValue) => {
  if (newValue === currentDistance) {
    isClick = false;
  }
  if (isClick) return;
  const els = Object.values(sectionEls.value);
  const values = els.map((el) => el.offsetTop);
  let index = values.length - 1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1;
      break;
    }
  }
  // tabCrontrolRef.value.currentIndex = index;
  tabControlRef.value?.setCurrentIndex(index);
});
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  img {
    width: 123px;
  }
  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
