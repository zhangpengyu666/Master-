import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "demo",
    component: () => import("@/views/Demo.vue"),
  },
  {
    path: "/four",
    name: "Four",
    component: () => import("@/views/Four.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
