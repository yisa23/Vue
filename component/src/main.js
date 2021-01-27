// import "@babel/polyfill";
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    // 事件总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
}).$mount("#root");
