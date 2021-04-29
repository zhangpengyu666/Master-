import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/Demo.vue"),
  },{
    path:'/three',
    name:'Three',
    component:()=>import('../views/Three.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
