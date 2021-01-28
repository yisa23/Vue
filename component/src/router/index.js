import Vue from "vue";
import VueRouter from "vue-router";
import Foo from "../views/Foo";
import News from "../views/News";
import Messages from "../views/Messages";
import Detail from "../views/Detail";

Vue.use(VueRouter);

const routes = [
  { path: "/foo", component: Foo },
  {
    path: "/bar",
    component: () => import("../views/Bar"),
    children: [
      { path: "/bar/news", component: News },
      {
        path: "messages",
        component: Messages,
        // children: [{ path: "detail/:id", component: Detail }],
        // children: [{ path: "detail/:id", component: Detail, props: true }],
        children: [
          {
            name: "detail",
            path: "detail/:id",
            component: Detail,
            props: (route) => ({
              id: route.params.id,
              test: route.query.test,
            }),
          },
        ],
      },
      { path: "", redirect: "/bar/news" },
    ],
  },
  { path: "/", redirect: "/foo" },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
