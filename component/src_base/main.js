// import Vue from "vue";
import Vue from "vue/dist/vue.esm";
import App from "./App.vue";
import "./main.css";
// import HelloVue from "./component/HelloVue.vue";

Vue.config.productionTip = false;

// 全局注册组件
// Vue.component("HelloVue", HelloVue);

new Vue({
  // render: (h) => h(App),
  // render: function(createElement) {
  //   return createElement(App);
  // },
  components: {
    App,
  },
  template: "<App />",
}).$mount("#root");
