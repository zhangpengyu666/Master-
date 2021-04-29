import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
   path:"/",
   redirect:"/HomePage",
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/Demo.vue"),
  },
  {
    path:"/HomePage",
    name:"/homepage",
    component:()=>import("../views/HomePage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
