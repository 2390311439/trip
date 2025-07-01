// 引入axios库
import axios from "axios";

// 引入BASE_URL和TIMEOUT配置
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();
// 定义HYRequest类
class HYRequest {
  // 构造函数，初始化axios实例
  constructor(baseURL, timeout = 10000) {
    // 创建axios实例并赋值给this.instance
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }

  // request方法，发送请求
  request(config) {
    mainStore.isLoading = true;
    // 返回一个Promise对象
    return new Promise((resolve, reject) => {
      // 使用axios实例发送请求，并处理成功和失败的情况
      this.instance
        .request(config)
        .then((res) => {
          // 成功时解析响应数据
          resolve(res.data);
          mainStore.isLoading = false;
        })
        .catch((err) => {
          console.log("run error");
          // 失败时拒绝并返回错误信息
          reject(err);
          mainStore.isLoading = false;
        });
    });
  }

  // get方法，发送GET请求
  get(config) {
    // 调用request方法，设置method为"get"
    return this.request({ ...config, method: "get" });
  }

  // post方法，发送POST请求
  post(config) {
    // 调用request方法，设置method为"post"
    return this.request({ ...config, method: "post" });
  }
}

// 导出HYRequest的实例，传入BASE_URL和TIMEOUT
export default new HYRequest(BASE_URL, TIMEOUT);
