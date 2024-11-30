import "./assets/base.css";
import "./assets/colors.css";
import "./assets/fonts.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
