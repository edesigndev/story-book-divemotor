import { createApp } from "vue";
import 'highlight.js/styles/monokai-sublime.css'
import * as bootstrap from "bootstrap";
import "./scss/styles.scss";
import App from "./App.vue";
import router from "./router";
import AppLayoutDashboard from "./layouts/AppLayoutDashboard.vue";
import AppLayoutBlank from "./layouts/AppLayoutBlank.vue";
import VueHighlightJS from 'vue3-highlightjs'
const app = createApp(App);
app.component("layout-blank", AppLayoutBlank);
app.component("layout-dashboard", AppLayoutDashboard);
app.use(VueHighlightJS)
app.use(router);
app.mount("#app");
