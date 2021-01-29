import Vue from "vue";
import App from "./App";
import 'lib-flexible/flexible'
import router from './router'

Vue.config.productionTip = false;

new Vue({
    // render: (h) => h(App),
    template: "<App />",
    components: {
        App,
    },
    router
}).$mount("#app");
