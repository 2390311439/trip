<template>
  <!-- 根据类名设置tab-bar的容器 -->
  <div class="tab-bar">
    <!-- 每个tab-bar-item的容器 -->
    <div class="tab-bar-item">
      <!-- 首页的图标 -->
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <!-- 首页的文字标签 -->
      <span>首页</span>
    </div>
    <!-- 每个tab-bar-item的容器 -->
    <div class="tab-bar-item">
      <!-- 收藏的图标 -->
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <!-- 收藏的文字标签 -->
      <span>收藏</span>
    </div>
    <!-- 每个tab-bar-item的容器 -->
    <div class="tab-bar-item">
      <!-- 订单的图标 -->
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <!-- 订单的文字标签 -->
      <span>订单</span>
    </div>
    <!-- 每个tab-bar-item的容器 -->
    <div class="tab-bar-item">
      <!-- 消息的图标 -->
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <!-- 消息的文字标签 -->
      <span>消息</span>
    </div>
  </div>
</template>

<script setup>


</script>

<style lang="less" scoped>
// 设置tab-bar的样式
.tab-bar {
  // 固定在页面底部
  position: fixed;
  // 距离底部0像素
  bottom: 0;
  // 距离左边0像素
  left: 0;
  // 距离右边0像素
  right: 0;
  // 设置高度为50像素
  height: 50px;
  // 使用flex布局
  display: flex;
  // 设置顶部边框
  border-top: 1px solid #aaa;

  // 设置tab-bar-item的样式
  .tab-bar-item {
    // 平均分配空间
    flex: 1;
    // 使用flex布局
    display: flex;
    // 垂直排列
    flex-direction: column;
    // 内容垂直居中
    justify-content: center;
    // 内容水平居中
    align-items: center;
    // 设置左右边框
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
    // 设置文字样式
    .text{
      // 设置字体大小
      font-size: 12px;
    }
    // 设置图片样式
    img{
      // 设置图片宽度
      width: 32px;
    }
  }
}
</style>