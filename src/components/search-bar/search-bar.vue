<template>
  <div class="search-bar">
    <!-- 搜索栏容器 -->
    <div class="search">
      <!-- 时间选择区域 -->
      <div class="select-time">
        <div class="item start">
          <div class="left">
            <div class="item start">
              <div class="name">住</div>
              <div class="date">{{ startDateStr }}</div>
            </div>
            <div class="item end">
              <div class="name">离</div>
              <div class="date">{{ endDateStr }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content"><div class="keyword">关键字</div></div>
      <div class="right">
        <i class="icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { formatMonthDay } from "@/utils/format_date";

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"));
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"));
</script>

<style lang="less" scoped>
.search-bar {
  position: fixed; /* 固定定位，使搜索栏始终显示在页面顶部 */
  top: 0; /* 距离页面顶部为0 */
  z-index: 9; /* 设置较高的层级，确保搜索栏覆盖其他内容 */
  right: 0; /* 距离页面右侧为0 */
  left: 0; /* 距离页面左侧为0 */
  height: 45px; /* 搜索栏高度为45px */
  padding: 16px 16px 10px; /* 内边距：上下16px，左右16px，底部10px */
  background-color: #fff; /* 背景颜色为白色 */

  .search {
    display: flex; /* 使用弹性布局 */
    flex-direction: row; /* 子元素水平排列 */
    align-items: center; /* 垂直居中对齐 */
    padding: 0 10px; /* 左右内边距为10px */
    height: 45px; /* 高度为45px */
    line-height: 45px; /* 行高与高度一致，确保文字垂直居中 */
    font-size: 14px; /* 字体大小为14px */
    color: #999; /* 文字颜色为浅灰色 */
    border-radius: 6px; /* 圆角半径为6px */
    background: #f2f4f6; /* 背景颜色为浅灰色 */

    .left {
      font-size: 25px; /* 字体大小为14px */
      min-width: 30px; /* 最小宽度为30px */
      font-weight: 5000; /* 字体加粗 */
      padding-right: 6px; /* 右侧内边距为6px */
      margin-right: 5px; /* 右侧外边距为5px */
      color: #333; /* 文字颜色为深灰色 */
      white-space: nowrap; /* 禁止换行，确保文字在同一行显示 */
    }

    .select-time {
      display: flex; /* 使用弹性布局 */
      flex-direction: column; /* 子元素垂直排列 */

      .item {
        display: flex; /* 使用弹性布局 */
        flex-direction: row; /* 子元素水平排列 */
        align-items: center; /* 垂直居中对齐 */
        line-height: normal; /* 行高恢复正常 */
        font-size: 14px; /* 字体大小为10px */

        .name {
          font-size: 10px; /* 字体大小为10px */
        }

        .date {
          position: relative; /* 设置相对定位，用于子元素的绝对定位 */
          color: #333; /* 文字颜色为深灰色 */
          margin: 0 10px 0 3px; /* 外边距：上下为0，左右分别为10px和3px */
          font-weight: 500; /* 字体加粗 */
        }
      }

      .end .date::after {
        content: " "; /* 伪元素内容为空 */
        width: 0; /* 宽度为0 */
        height: 0; /* 高度为0 */
        border: 4px solid #666; /* 边框宽度为4px，颜色为灰色，用于创建三角形 */
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666; /* 设置边框颜色，仅左侧可见，形成三角形 */
        -webkit-border-radius: 3px; /* 兼容旧版浏览器的圆角设置 */
        border-radius: 3px; /* 圆角半径为3px */
        -webkit-transform: rotate(45deg); /* 兼容旧版浏览器的旋转45度 */
        -ms-transform: rotate(45deg); /* 兼容IE浏览器的旋转45度 */
        transform: rotate(45deg); /* 旋转45度，使边框呈现为小箭头 */
        position: absolute; /* 绝对定位，相对于父元素 */
        bottom: 0px; /* 距离底部为0 */
        right: -12px; /* 距离右侧为-12px，向右偏移 */
      }
    }
  }

  .content {
    position: relative; /* 设置相对定位，用于内部元素的定位 */
    flex: 1; /* 弹性布局，占据剩余空间 */
    padding: 0 6px; /* 内边距：左右为6px */
    text-align: left; /* 文本左对齐 */

    .keyword {
      max-width: 155px; /* 最大宽度为155px，限制关键字显示区域 */
      font-size: 12px; /* 字体大小为12px */
      margin-left: -4px; /* 左侧外边距为-4px，微调位置 */
      padding-left: 14px; /* 左侧内边距为14px，增加左侧空白 */
      border-left: 1px solid #fff; /* 左侧边框为1px白色线条，分隔内容 */
    }
  }

  .right {
    display: flex; /* 使用弹性布局 */
    align-items: center; /* 垂直居中对齐 */
  }

  .icon-search {
    width: 24px; /* 宽度为24px */
    height: 24px; /* 高度为24px */
    display: inline-block; /* 作为行内块级元素显示 */
    background-image: url(../../assets/img/home/home-sprite.png); /* 背景图片路径 */
    background-position: -29px -151px; /* 背景图片位置 */
    background-size: 207px 192px; /* 背景图片大小 */
  }
}
</style>
