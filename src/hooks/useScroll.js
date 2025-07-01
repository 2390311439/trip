import { throttle } from "underscore";
import { onMounted, onUnmounted, ref } from "vue";
export default function useScroll(elRef) {
  let el = window;
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);
  const scrollListenHandler = throttle(() => {
    if (el === window) {
      // 获取整个页面的总高度（包括不可见部分）
      scrollHeight.value = document.documentElement.scrollHeight;
      // 获取当前视口的高度，即浏览器窗口中可见部分的高度
      clientHeight.value = document.documentElement.clientHeight;
      // 获取当前页面的滚动距离（从顶部开始计算）
      scrollTop.value = document.documentElement.scrollTop;
    } else {
      // 获取整个页面的总高度（包括不可见部分）
      scrollHeight.value = el.scrollHeight;
      // 获取当前视口的高度，即浏览器窗口中可见部分的高度
      clientHeight.value = el.clientHeight;
      // 获取当前页面的滚动距离（从顶部开始计算）
      scrollTop.value = el.scrollTop;
    }

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  });
  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }
    el.addEventListener("scroll", scrollListenHandler);
  });
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenHandler);
  });
  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}

// export default function useScroll(btnClick) {
//   const scrollListenHandler = () => {
//     // 获取整个页面的总高度（包括不可见部分）
//     const scrollHeight = document.documentElement.scrollHeight;
//     // 获取当前视口的高度，即浏览器窗口中可见部分的高度
//     const clientHeight = document.documentElement.clientHeight;
//     // 获取当前页面的滚动距离（从顶部开始计算）
//     const scrollTop = document.documentElement.scrollTop;
//     if (clientHeight + scrollTop >= scrollHeight) {
//       btnClick();
//     }
//   };
//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenHandler);
//   });
//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenHandler);
//   });
// }
