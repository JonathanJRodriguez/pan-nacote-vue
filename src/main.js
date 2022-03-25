import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "gitart-vue-dialog/dist/style.css";
import { GDialog } from "gitart-vue-dialog";

const app = createApp(App).use(store).use(router).mount("#app");
app.component("GDialog", GDialog);
