import { createRouter, createWebHistory } from "vue-router";

import login from "./views/Login.vue";
import mainPage from "./views/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/main",
    name: "mainPage",
    component: mainPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
