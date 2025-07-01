<template>
  <div class="infos"> <!-- 容器，用于包裹所有信息 -->
    <div class="name">{{ topInfos.houseName }}</div> <!-- 显示房屋名称 -->
    <div class="tags"> <!-- 标签容器 -->
      <template v-for="(item, index) in topInfos.houseTags" :key="index"> <!-- 遍历房屋标签 -->
        <span
          class="item"
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >{{ item.tagText.text }}</span> <!-- 显示标签文字，并动态设置颜色和背景 -->
      </template>
    </div>
    <div class="comment extra"> <!-- 评论信息模块 -->
      <div class="left"> <!-- 左侧内容 -->
        <span class="score">{{ topInfos.commentBrief.overall }}</span> <!-- 显示评分 -->
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span> <!-- 显示评分标题 -->
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span> <!-- 显示简短评论 -->
      </div>
      <div class="right"> <!-- 右侧内容 -->
        <span class="count"
          >{{ topInfos.commentBrief.totalCount }}条评论<van-icon name="arrow"
        /></span> <!-- 显示评论总数及箭头图标 -->
      </div>
    </div>
    <div class="position extra"> <!-- 位置信息模块 -->
      <div class="left address">{{ topInfos.nearByPosition.address }}</div> <!-- 显示地址 -->
      <div class="right">地图·周边<van-icon name="arrow" /></div> <!-- 显示地图链接及箭头图标 -->
    </div>
  </div>
</template>

<script setup>
defineProps({ // 定义组件的props
  topInfos: { // 定义topInfos属性
    type: Object, // 类型为对象
    default: () => ({}), // 默认值为空对象
  },
});
</script>

<style lang="less" scoped>
.infos {
  padding: 16px; /* 设置外边距，增加内容与容器的间距 */
  background-color: #fff; /* 设置背景颜色为白色，提升视觉清晰度 */
  .name {
    font-weight: 700; /* 设置字体加粗，突出显示名称 */
    font-size: 20px; /* 设置字体大小为20px，确保标题醒目 */
    color: #333; /* 设置字体颜色为深灰色，增强可读性 */
    text-align: justify; /* 文本两端对齐，优化排版 */
    line-height: 24px; /* 设置行高为24px，提升文字间距的舒适感 */
    overflow: hidden; /* 隐藏超出容器的内容，避免布局错乱 */
    margin-bottom: 6px; /* 设置下边距，与其他内容保持适当距离 */
  }
}
.extra {
  display: flex; /* 使用弹性布局，方便子元素灵活排列 */
  justify-content: space-between; /* 子元素分布在容器的两端，充分利用空间 */
  align-items: center; /* 垂直方向居中对齐，保持视觉一致性 */
  padding: 8px 12px; /* 设置内边距，增加内容与边框的间距 */
  margin: 12px 0; /* 设置上下外边距，与其他模块保持间距 */
  border-radius: 5px; /* 设置圆角，使模块看起来更柔和 */
  font-size: 12px; /* 设置字体大小为12px，适合辅助信息展示 */
  background-color: #f5f7fa; /* 设置浅灰色背景，区分模块层次 */
  .right {
    color: #ff9645; /* 设置右侧文字颜色为橙色 */
  }
}
.comment {
  .score {
    font-size: 18px; /* 设置字体大小为18px */
    font-weight: 700; /* 设置字体加粗 */
    color: #333; /* 设置字体颜色为深灰色 */
  }
  .title {
    color: #333; /* 设置字体颜色为深灰色 */
    font-weight: 700; /* 设置字体加粗 */
    margin: 0 3px; /* 设置左右外边距 */
  }
  .brief {
    color: #666; /* 设置字体颜色为灰色 */
  }
}
.position {
  .address {
    font-size: 14px; /* 设置字体大小为14px */
    font-weight: 700; /* 设置字体加粗 */
    color: #333; /* 设置字体颜色为深灰色 */
  }
}
</style>