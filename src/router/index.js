import Vue from "vue";
import VueRouter from "vue-router";
const routes = [
  // {
  //   path: "/error",
  //   component: () => import("../layout/NotFound.vue"),
  // },
  {
    path: "/",
    component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "/",
        component: () => import("../pages/Homepage.vue"),
      },
    ],
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
