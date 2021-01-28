// import "@babel/polyfill";
import Vue from "vue";
import App from "./App";
import router from "./router";
import { Button } from "mint-ui";
import store from "./store";

Vue.config.productionTip = false;

Vue.component(Button.name, Button);

new Vue({
  beforeCreate() {
    // 事件总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#root");
