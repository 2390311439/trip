<template>
  <!-- 搜索框组件 -->
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <!-- 当前城市 -->
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <!-- 我的位置 -->
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围选择 -->
    <div class="section date-range" @click="dateClick">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ countDay }}晚</div>
      </div>

      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <!-- 日历组件 -->
    <van-calendar
      class="calendar"
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm"
    />
    <!-- 价格和人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字搜索 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="section search-btn">
      <div class="btn" @click="searchClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
// 引入城市存储模块
import useCityStore from "@/stores/modules/city";
// 引入日期格式化工具
import { formatMonthDay, getDiffDays } from "@/utils/format_date";
// 引入Pinia工具
import { storeToRefs } from "pinia";
// 引入路由
import { useRouter } from "vue-router";
// 引入响应式API
import { computed, ref } from "vue";
// 引入首页存储模块
import useHomeStore from "@/stores/modules/home";
import useMainStore from "@/stores/modules/main";

// 点击位置按钮事件
function positionClick() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("11", res);
    },
    (err) => {
      console.log(err);
    }
  );
}

// 获取路由实例
const router = useRouter();
// 点击城市按钮事件
function cityClick() {
  router.push("/city");
}

// 获取城市存储实例
const cityStore = useCityStore();
// 获取当前城市信息
const { currentCity } = storeToRefs(cityStore);

// // 设置默认日期
// const nowDate = new Date();
// const newDate = new Date();
// newDate.setDate(nowDate.getDate() + 1);
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

// 响应式日期变量
const startDateStr = computed(() => formatMonthDay(startDate.value));
const endDateStr = computed(() => formatMonthDay(endDate.value));

// 响应式天数变量
const countDay = ref(getDiffDays(startDate.value, endDate.value));

// 控制日历显示
const showCalendar = ref(false);
// 日历确认事件
function onConfirm(value) {
  mainStore.startDate = value[0];
  mainStore.endDate = value[1];
  console.log(mainStore.startDate, mainStore.endDate);
  // const selectStartDate = value[0];
  // const selectEndDate = value[1];
  // mainStore.startDate = selectStartDate;
  // mainStore.endDate = selectEndDate;
  showCalendar.value = false;
  countDay.value = getDiffDays(value[0], value[1]);
  console.log(startDateStr.value, endDateStr.value);
}

// 点击日期范围事件
function dateClick() {
  showCalendar.value = true;
}

// 获取首页存储实例
const homeStore = useHomeStore();
// 获取热门建议
const { hotSuggests } = storeToRefs(homeStore);

function searchClick() {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName,
    },
  });
}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  align-items: center;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;
  }
  .text {
    font-size: 12px;
    position: relative;
    top: 2px;
    color: #666;
    font-size: 12px;
  }

  img {
    margin-left: 5px;
    width: 18px;
    height: 18px;
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }
  .end {
    min-width: 30%;
    padding-left: 20px;
  }
  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}
.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
