import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    // 事件总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
}).$mount("#root");
