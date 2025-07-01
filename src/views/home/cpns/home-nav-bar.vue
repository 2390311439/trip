<template>
  <div class="navbar">
    <div class="nav-bar">
      <!-- 导航栏容器 -->
      <div class="title">hylt</div>
      <!-- 标题 -->
    </div>
    <!-- 导航栏结束 -->
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.nav-bar {
  // 导航栏样式
  display: flex; // 水平布局
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  height: 46px; // 高度设置
  border-bottom: 1px solid #f2f2f2;
}
.title {
  // 标题样式
  color: var(--primary-color); // 颜色设置
  font-size: 18px; // 字体大小
  font-weight: 700; // 字体粗细
}
</style>
