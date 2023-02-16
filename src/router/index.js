import { createRouter, createWebHistory } from "vue-router";

const lazyLoad = (view) => import(`../views/${view}.vue`);

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoad("HomeView"),
    meta: {
      layout: "dashboard",
    },
  },
  {
    path: "/logo",
    name: "logo",
    component: lazyLoad("LogoView"),
    meta: {
      layout: "dashboard",
    },
  },
  {
    path: "/buttons",
    name: "buttons",
    component: lazyLoad("ButtonsView"),
    meta: {
      layout: "dashboard",
    },
  },
  {
    path: "/links",
    name: "links",
    component: lazyLoad("LinksView"),
    meta: {
      layout: "dashboard",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
