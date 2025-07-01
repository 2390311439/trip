<template>
  <!-- 外层容器，包含所有标签项 -->
  <div class="tab-control">
    <!-- 使用 v-for 遍历 titles 数组，生成每个标签项 -->
    <template v-for="(item, index) in titles" :key="item">
      <!-- 标签项容器，根据 currentIndex 判断是否为激活状态 -->
      <div
        class="tab-control-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        <!-- 动态绑定 active 类 -->
        <!-- 点击事件触发 itemClick 方法 -->
        <!-- 显示标签文本 -->
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  // 定义组件接收的 props，titles 是一个数组，默认为空数组
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  // 组件内部数据，currentIndex 表示当前选中的标签索引
  data() {
    return {
      currentIndex: 0,
    };
  },
  // 定义组件触发的自定义事件
  emits: ["tabItemClick"],
  // 定义组件方法
  methods: {
    // 点击标签时触发的方法
    itemClick(index) {
      // 更新当前选中的标签索引
      this.currentIndex = index;
      // 触发父组件监听的 tabItemClick 事件，并传递索引值
      this.$emit("tabItemClick", index);
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
/* 外层容器样式 */
.tab-control {
  display: flex; /* 水平排列子元素 */
  height: 44px; /* 设置高度 */
  line-height: 44px; /* 垂直居中文本 */
  text-align: center; /* 文本居中对齐 */
  background-color: #fff; /* 背景颜色为白色 */
}

/* 单个标签项样式 */
.tab-control-item {
  flex: 1; /* 平均分配宽度 */
}

/* 激活状态下的标签项样式 */
.tab-control-item.active {
  color: var(--primary-color); /* 文字颜色为主色调 */
  font-weight: 700; /* 加粗字体 */
}

/* 激活状态下 span 的样式 */
.tab-control-item.active span {
  border-bottom: 3px solid var(--primary-color); /* 底部边框为主色调 */
  padding: 8px; /* 内边距 */
}
</style>
