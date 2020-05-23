import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import axios from "axios";

import { routes } from "./routes";

Vue.prototype.$http = axios;
Vue.use(VueRouter);

const router = new VueRouter({ routes });
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
