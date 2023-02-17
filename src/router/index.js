import { createRouter, createWebHistory } from 'vue-router';

const lazyLoad = (view) => import(`../views/${view}.vue`);

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('HomeView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/logo',
    name: 'logo',
    component: lazyLoad('LogoView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: lazyLoad('ButtonsView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/links',
    name: 'links',
    component: lazyLoad('LinksView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/inputs',
    name: 'inputs',
    component: lazyLoad('InputsView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: lazyLoad('DropDownView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/checkbox',
    name: 'checkboxs',
    component: lazyLoad('CheckboxsView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/radio-button',
    name: 'radio-button',
    component: lazyLoad('RadioButtonView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/accordion',
    name: 'accordion',
    component: lazyLoad('AccordionView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/cards',
    name: 'cards',
    component: lazyLoad('CardsView'),
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: lazyLoad('TabsView'),
    meta: {
      layout: 'dashboard',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
