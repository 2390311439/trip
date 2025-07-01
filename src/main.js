import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import pinia from "./stores";
import "./assets/css/index.css";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
