import Vue from "vue";
import App from "./App";
import 'lib-flexible/flexible'
import router from './router'
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    // render: (h) => h(App),
    template: "<App />",
    components: {
        App,
    },
    router,
    store
}).$mount("#app");
