import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {

    path: "/yi",
    name: "yi",
    component: () => import("@/views/yi.vue"),
  },
  {
    path: "/er",
    name: "er",
    component: () => import("@/views/er.vue"),
  },
  {
    path: "/san",
    name: "san",
    component: () => import("@/views/san.vue"),
  },
  {
    path: "/si",
    name: "si",
    component: () => import("@/views/si.vue"),
  },
  {
    path: "/wu",
    name: "wu",
    component: () => import("@/views/wu.vue"),
  },
  {
    path: "/liu",
    name: "liu",
    component: () => import("@/views/liu.vue"),
  },
  {
    path: "/qi",
    name: "qi",
    component: () => import("@/views/qi.vue"),
  },
  {
    path: "/ba",
    name: "ba",
    component: () => import("@/views/ba.vue"),
  },
  {
    path: "/jiu",
    name: "jiu",
    component: () => import("@/views/jiu.vue"),
  },
  {
    path: "/shi",
    name: "shi",
    component: () => import("@/views/shi.vue"),
  },
  {
    path: "/shiyi",
    name: "shiyi",
    component: () => import("@/views/shiyi.vue"),
  },
  {
    path: "/shier",
    name: "shier",
    component: () => import("@/views/shier.vue"),
  },
  {
    path: "/shisan",
    name: "shisan",
    component: () => import("@/views/shisan.vue"),
  },
  {
    path: "/shisi",
    name: "shisi",
    component: () => import("@/views/shisi.vue"),
  },
  {
    path: "/shiwu",
    name: "shiwu",
    component: () => import("@/views/shiwu.vue"),
  },
  {
    path: "/shiliu",
    name: "shiliu",
    component: () => import("@/views/shiliu.vue"),
  },
  {
    path: "/shiqi",
    name: "shiqi",
    component: () => import("@/views/shiqi.vue"),
  },
  {
    path: "/shiba",
    name: "shiba",
    component: () => import("@/views/shiba.vue"),
  },
  {
    path: "/shijiu",
    name: "shijiu",
    component: () => import("@/views/shijiu.vue"),
  },
  {
    path: "/ershi",
    name: "ershi",
    component: () => import("@/views/ershi.vue"),
  },
  {
    path: "/ershiyi",
    name: "ershiyi",
    component: () => import("@/views/ershiyi.vue"),
  },
  {
    path: "/ershier",
    name: "ershier",
    component: () => import("@/views/ershier.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
