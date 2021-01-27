import Vue from "vue";
import VueRouter from "vue-router";
import Foo from "../views/Foo";

Vue.use(VueRouter);

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: () => import("../views/Bar") },
  { path: "/", redirect: "/foo" },
];

const router = new VueRouter({
  routes,
});

export default router;
