import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/two'
},
{
  path: "/",
  name: "demo",
  component: () => import("@/views/Demo.vue"),
}, {
  path: "/two",
  name: "two",
  component: () => import("@/views/two.vue"),
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
