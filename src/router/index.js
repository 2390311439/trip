// 引入createRouter和createWebHashHistory函数，用于创建路由实例和配置路由历史模式
import { createRouter, createWebHashHistory } from "vue-router";

// 创建路由实例
const router = createRouter({
  // 使用hash模式作为路由历史记录
  history: createWebHashHistory(),

  // 定义路由规则
  routes: [
    {
      // 根路径重定向到/home
      path: "/",
      redirect: "/home",
    },
    {
      // /home路径对应的组件
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      // /favor路径对应的组件
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
    },
    {
      // /order路径对应的组件
      path: "/order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      // /message路径对应的组件
      path: "/message",
      component: () => import("@/views/message/message.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      // /message路径对应的组件
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      // meta:{
      //   hideTabBar:true
      // }
    },
    {
      // /message路径对应的组件
      path: "/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
    },
  ],
});

// 导出路由实例
export default router;
