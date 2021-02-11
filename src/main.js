import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "./registerServiceWorker";
import "es6-promise/auto";
import store from "./store";
import axios from "axios";

axios.defaults.headers["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgRS1QUk9OVFVBUklPIFVGTVMiLCJzdWIiOiIxIiwiaWF0IjoxNjEyOTk2ODU3LCJleHAiOjE2MTMwODMyNTd9.oUVepeh8xAUkgV4wz-Sz2enzjp7F4KRKMOmpcS4XXVo";
axios.defaults.baseURL = 'http://localhost:8080/eprontuario-api'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
